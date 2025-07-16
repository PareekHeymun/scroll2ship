import React, { useState } from 'react';
import { useCart } from '../hooks/useCart';
import { useProducts } from '../hooks/useProducts';
import { useAuthContext } from '../contexts/AuthContext';

export default function Cart() {
  const { cart, loading, error, removeFromCart, updateQuantity } = useCart();
  const { products } = useProducts();
  const { user } = useAuthContext();
  const [updating, setUpdating] = useState(false);

  if (!user) {
    return <div>Please login to view your cart.</div>;
  }

  if (loading) return <div>Loading cart...</div>;
  if (error) return <div>{error}</div>;

  const getProductDetails = (productId) => {
    return products.find(p => p._id === productId);
  };

  const handleQuantityChange = async (productId, newQuantity) => {
    setUpdating(true);
    try {
      if (newQuantity <= 0) {
        await removeFromCart(productId);
      } else {
        await updateQuantity(productId, newQuantity);
      }
    } catch (err) {
      console.error('Error updating quantity:', err);
    } finally {
      setUpdating(false);
    }
  };

  return (
    <div>
      <h3>Your Cart</h3>
      {!cart || !cart.products || cart.products.length === 0 ? (
        <p>Cart is empty.</p>
      ) : (
        <div>
          <div style={{marginBottom: '2rem'}}>
            {cart.products.map(item => {
              const product = getProductDetails(item.productId);
              if (!product) return null;
              
              return (
                <div key={item.productId} style={{
                  border: '1px solid #ddd',
                  borderRadius: '8px',
                  padding: '1rem',
                  marginBottom: '1rem',
                  background: 'white',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center'
                }}>
                  <div style={{flex: 1}}>
                    <h4 style={{margin: '0 0 0.5rem 0'}}>{product.name}</h4>
                    <p style={{color: '#666', margin: '0 0 0.5rem 0'}}>{product.description}</p>
                    <p style={{fontWeight: 'bold', color: '#007bff'}}>${product.price}</p>
                  </div>
                  <div style={{display: 'flex', alignItems: 'center', gap: '1rem'}}>
                    <div>
                      <label>Quantity: </label>
                      <input
                        type="number"
                        min="1"
                        value={item.quantity}
                        onChange={(e) => handleQuantityChange(item.productId, parseInt(e.target.value))}
                        style={{width: '60px', padding: '0.25rem', marginLeft: '0.5rem'}}
                        disabled={updating}
                      />
                    </div>
                    <button
                      onClick={() => removeFromCart(item.productId)}
                      style={{
                        padding: '0.5rem 1rem',
                        background: '#dc3545',
                        color: 'white',
                        border: 'none',
                        borderRadius: '4px',
                        cursor: 'pointer'
                      }}
                      disabled={updating}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
          <div style={{
            borderTop: '2px solid #ddd',
            paddingTop: '1rem',
            textAlign: 'right'
          }}>
            <h4>Total: ${cart.total ? cart.total.toFixed(2) : '0.00'}</h4>
            <button style={{
              padding: '0.75rem 2rem',
              background: '#28a745',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
              fontSize: '1.1rem'
            }}>
              Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
