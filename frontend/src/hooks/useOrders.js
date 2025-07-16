import { useState, useEffect } from 'react';
import { createOrder, getOrders, getOrderById } from '../api/order';

export function useOrders() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    getOrders()
      .then(res => setOrders(res.data.orders))
      .catch(() => setError('Failed to fetch orders'))
      .finally(() => setLoading(false));
  }, []);

  const handleCreateOrder = async (data) => {
    setLoading(true);
    setError(null);
    try {
      await createOrder(data);
      const res = await getOrders();
      setOrders(res.data.orders);
    } catch (err) {
      setError('Create order failed');
    } finally {
      setLoading(false);
    }
  };

  return { orders, loading, error, handleCreateOrder };
}
