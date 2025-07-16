import { useState } from 'react';
import { signup, signin, logout, getProfile } from '../api/auth';
import { useAuthContext } from '../contexts/AuthContext';

export function useAuth() {
  const { user, setUser, error, setError } = useAuthContext();
  const [loading, setLoading] = useState(false);

  const handleSignup = async (data) => {
    setLoading(true);
    setError(null);
    try {
      await signup(data);
      await handleSignin({ email: data.email, password: data.password });
    } catch (err) {
      setError(err.response?.data?.msg || 'Signup failed');
    } finally {
      setLoading(false);
    }
  };

  const handleSignin = async (data) => {
    setLoading(true);
    setError(null);
    try {
      await signin(data);
      const res = await getProfile();
      setUser(res.data.user);
    } catch (err) {
      setError(err.response?.data?.msg || 'Signin failed');
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = async () => {
    setLoading(true);
    setError(null);
    try {
      await logout();
      setUser(null);
    } catch (err) {
      setError('Logout failed');
    } finally {
      setLoading(false);
    }
  };

  return { user, loading, error, handleSignup, handleSignin, handleLogout };
}
