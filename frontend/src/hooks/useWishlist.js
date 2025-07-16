import { useState, useEffect } from 'react';
import { getWishlist, addToWishlist, removeFromWishlist } from '../api/wishlist';

export function useWishlist() {
  const [wishlist, setWishlist] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchWishlist = async () => {
    try {
      const res = await getWishlist();
      setWishlist(res.data.wishlist);
    } catch (err) {
      setError('Failed to fetch wishlist');
    }
  };

  useEffect(() => {
    setLoading(true);
    fetchWishlist().finally(() => setLoading(false));
  }, []);

  const handleAddToWishlist = async (productId) => {
    setLoading(true);
    setError(null);
    try {
      await addToWishlist({ productId });
      await fetchWishlist();
    } catch (err) {
      setError('Add to wishlist failed');
    } finally {
      setLoading(false);
    }
  };

  const handleRemoveFromWishlist = async (productId) => {
    setLoading(true);
    setError(null);
    try {
      await removeFromWishlist(productId);
      await fetchWishlist();
    } catch (err) {
      setError('Remove from wishlist failed');
    } finally {
      setLoading(false);
    }
  };

  return { 
    wishlist, 
    loading, 
    error, 
    addToWishlist: handleAddToWishlist, 
    removeFromWishlist: handleRemoveFromWishlist 
  };
}
