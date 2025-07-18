import { useState, useEffect } from 'react';
import { getProducts, uploadProduct } from '../api/products';

export function useProducts() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    getProducts()
      .then(res => setProducts(res.data.products))
      .catch(err => setError('Failed to fetch products'))
      .finally(() => setLoading(false));
  }, []);

  const handleUpload = async (data) => {
    setLoading(true);
    setError(null);
    try {
      await uploadProduct(data);
      const res = await getProducts();
      setProducts(res.data.products);
    } catch (err) {
      setError('Upload failed');
    } finally {
      setLoading(false);
    }
  };

  return { products, loading, error, handleUpload };
}
