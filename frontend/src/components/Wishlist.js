import React from 'react';
import { useWishlist } from '../hooks/useWishlist';
import { useProducts } from '../hooks/useProducts';
import { useAuthContext } from '../contexts/AuthContext';

export default function Wishlist() {
  const { wishlist, loading, error, removeFromWishlist } = useWishlist();
  const { products } = useProducts();
  const { user } = useAuthContext();

  if (!user) {
    return <div>Please login to view your wishlist.</div>;
  }

  if (loading) return <div>Loading wishlist...</div>;
  if (error) return <div>{error}</div>;

  const getProductDetails = (productId) => {
    return products.find(p => p._id === productId);
  };

  return (
    <div>
      <h3>Your Wishlist</h3>
      {!wishlist || !wishlist.products || wishlist.products.length === 0 ? (
        <p>Wishlist is empty.</p>
      ) : (
        <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1rem'}}>
          {wishlist.products.map(productId => {
            const product = getProductDetails(productId);
            if (!product) return null;
            
            return (
              <div key={productId} style={{
                border: '1px solid #ddd',
                borderRadius: '8px',
                padding: '1rem',
                background: 'white',
                boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
                position: 'relative'
              }}>
                <h4 style={{margin: '0 0 0.5rem 0'}}>{product.name}</h4>
                <p style={{color: '#666', margin: '0 0 0.5rem 0'}}>{product.description}</p>
                <p style={{fontWeight: 'bold', color: '#007bff', margin: '0 0 1rem 0'}}>${product.price}</p>
                <button
                  onClick={() => removeFromWishlist(productId)}
                  style={{
                    padding: '0.5rem 1rem',
                    background: '#dc3545',
                    color: 'white',
                    border: 'none',
                    borderRadius: '4px',
                    cursor: 'pointer',
                    width: '100%'
                  }}
                >
                  Remove from Wishlist
                </button>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
