import { useState, useEffect } from 'react';
import { getCart, addToCart, removeFromCart, updateQuantity } from '../api/cart';

export function useCart() {
  const [cart, setCart] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchCart = async () => {
    try {
      const res = await getCart();
      setCart(res.data.cart);
    } catch (err) {
      setError('Failed to fetch cart');
    }
  };

  useEffect(() => {
    setLoading(true);
    fetchCart().finally(() => setLoading(false));
  }, []);

  const handleAddToCart = async (productId) => {
    setLoading(true);
    setError(null);
    try {
      await addToCart({ productId, quantity: 1 });
      await fetchCart();
    } catch (err) {
      setError('Add to cart failed');
    } finally {
      setLoading(false);
    }
  };

  const handleRemoveFromCart = async (productId) => {
    setLoading(true);
    setError(null);
    try {
      await removeFromCart(productId);
      await fetchCart();
    } catch (err) {
      setError('Remove from cart failed');
    } finally {
      setLoading(false);
    }
  };

  const handleUpdateQuantity = async (productId, quantity) => {
    setLoading(true);
    setError(null);
    try {
      await updateQuantity(productId, quantity);
      await fetchCart();
    } catch (err) {
      setError('Update quantity failed');
    } finally {
      setLoading(false);
    }
  };

  return { 
    cart, 
    loading, 
    error, 
    addToCart: handleAddToCart,
    removeFromCart: handleRemoveFromCart,
    updateQuantity: handleUpdateQuantity
  };
}
