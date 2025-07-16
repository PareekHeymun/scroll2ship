import React from 'react';
import { useOrders } from '../hooks/useOrders';
import { useAuthContext } from '../contexts/AuthContext';

export default function Orders() {
  const { orders, loading, error } = useOrders();
  const { user } = useAuthContext();

  if (!user) {
    return <div>Please login to view your orders.</div>;
  }

  if (loading) return <div>Loading orders...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div>
      <h3>Your Orders</h3>
      {orders.length === 0 ? (
        <p>No orders found.</p>
      ) : (
        <div style={{display: 'grid', gap: '1rem'}}>
          {orders.map(order => (
            <div key={order._id} style={{
              border: '1px solid #ddd',
              borderRadius: '8px',
              padding: '1rem',
              background: 'white',
              boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
            }}>
              <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem'}}>
                <h4 style={{margin: 0}}>Order #{order._id.slice(-8)}</h4>
                <span style={{
                  padding: '0.25rem 0.75rem',
                  borderRadius: '4px',
                  fontSize: '0.875rem',
                  fontWeight: 'bold',
                  background: order.status === 'completed' ? '#28a745' : 
                           order.status === 'pending' ? '#ffc107' : '#dc3545',
                  color: 'white'
                }}>
                  {order.status}
                </span>
              </div>
              <p style={{margin: '0.5rem 0', color: '#666'}}>
                <strong>Total:</strong> ${order.totalAmount}
              </p>
              {order.shippingAddress && (
                <p style={{margin: '0.5rem 0', color: '#666'}}>
                  <strong>Shipping Address:</strong> {order.shippingAddress}
                </p>
              )}
              <p style={{margin: '0.5rem 0', fontSize: '0.875rem', color: '#999'}}>
                <strong>Order Date:</strong> {new Date(order.createdAt).toLocaleDateString()}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
