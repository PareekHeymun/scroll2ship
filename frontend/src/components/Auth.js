import React, { useState } from 'react';
import { useAuth } from '../hooks/useAuth';

export default function Auth() {
  const { user, loading, error, handleSignup, handleSignin, handleLogout } = useAuth();
  const [signupForm, setSignupForm] = useState({ name: '', email: '', password: '', role: 'buyer' });
  const [signinForm, setSigninForm] = useState({ email: '', password: '' });

  const handleSignupChange = e => {
    setSignupForm({ ...signupForm, [e.target.name]: e.target.value });
  };
  const handleSigninChange = e => {
    setSigninForm({ ...signinForm, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <h3>Authentication</h3>
      {user ? (
        <div>
          <p>Welcome, {user.name}!</p>
          <p>Role: {user.role}</p>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <div style={{display: 'flex', gap: '2rem'}}>
          <form onSubmit={e => {e.preventDefault(); handleSignup(signupForm);}} style={{flex: 1}}>
            <h4>Sign Up</h4>
            <input 
              name="name" 
              type="text" 
              placeholder="Name" 
              value={signupForm.name} 
              onChange={handleSignupChange} 
              style={{marginBottom: '0.5rem', width: '100%'}} 
            /><br/>
            <input 
              name="email" 
              type="email" 
              placeholder="Email" 
              value={signupForm.email} 
              onChange={handleSignupChange} 
              style={{marginBottom: '0.5rem', width: '100%'}} 
            /><br/>
            <input 
              name="password" 
              type="password" 
              placeholder="Password" 
              value={signupForm.password} 
              onChange={handleSignupChange} 
              style={{marginBottom: '0.5rem', width: '100%'}} 
            /><br/>
            <div style={{marginBottom: '0.5rem'}}>
              <label style={{display: 'block', marginBottom: '0.25rem'}}>Role:</label>
              <select 
                name="role" 
                value={signupForm.role} 
                onChange={handleSignupChange}
                style={{width: '100%', padding: '0.5rem'}}
              >
                <option value="buyer">Buyer</option>
                <option value="seller">Seller</option>
              </select>
            </div>
            <button type="submit" disabled={loading}>Sign Up</button>
          </form>
          <form onSubmit={e => {e.preventDefault(); handleSignin(signinForm);}} style={{flex: 1}}>
            <h4>Sign In</h4>
            <input 
              name="email" 
              type="email" 
              placeholder="Email" 
              value={signinForm.email} 
              onChange={handleSigninChange} 
              style={{marginBottom: '0.5rem', width: '100%'}} 
            /><br/>
            <input 
              name="password" 
              type="password" 
              placeholder="Password" 
              value={signinForm.password} 
              onChange={handleSigninChange} 
              style={{marginBottom: '0.5rem', width: '100%'}} 
            /><br/>
            <button type="submit" disabled={loading}>Sign In</button>
          </form>
        </div>
      )}
      {error && <div style={{color: 'red'}}>{error}</div>}
    </div>
  );
}
