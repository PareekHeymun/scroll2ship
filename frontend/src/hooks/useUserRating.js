import { useState, useEffect } from 'react';
import { addRating, getRatingsForProduct, getUserRatings } from '../api/userRating';

export function useUserRating(productId) {
  const [ratings, setRatings] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!productId) return;
    setLoading(true);
    getRatingsForProduct(productId)
      .then(res => setRatings(res.data.ratings))
      .catch(() => setError('Failed to fetch ratings'))
      .finally(() => setLoading(false));
  }, [productId]);

  const handleAddRating = async (data) => {
    setLoading(true);
    setError(null);
    try {
      await addRating(data);
      const res = await getRatingsForProduct(productId);
      setRatings(res.data.ratings);
    } catch (err) {
      setError('Add rating failed');
    } finally {
      setLoading(false);
    }
  };

  return { ratings, loading, error, handleAddRating };
}
