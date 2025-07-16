import React, { useState } from 'react';
import { useProducts } from '../hooks/useProducts';
import { useAuthContext } from '../contexts/AuthContext';

export default function ProductUpload() {
  const { handleUpload, loading, error } = useProducts();
  const { user } = useAuthContext();
  const [form, setForm] = useState({ name: '', price: '', description: '', category: 'electronics' });

  if (!user) {
    return <div>Please login to upload products.</div>;
  }

  if (user.role !== 'seller') {
    return <div>Only sellers can upload products. Your current role is: {user.role}</div>;
  }

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (!form.name || !form.price || !form.description) {
      alert('Please fill in all fields');
      return;
    }
    handleUpload({
      ...form,
      price: parseFloat(form.price)
    });
    setForm({ name: '', price: '', description: '', category: 'electronics' });
  };

  return (
    <div>
      <h3>Upload Product (Seller Only)</h3>
      <form onSubmit={handleSubmit} style={{maxWidth: '500px'}}>
        <div style={{marginBottom: '1rem'}}>
          <label style={{display: 'block', marginBottom: '0.5rem', fontWeight: 'bold'}}>Product Name:</label>
          <input 
            name="name" 
            type="text" 
            placeholder="Product name" 
            value={form.name} 
            onChange={handleChange} 
            style={{
              width: '100%', 
              padding: '0.75rem', 
              border: '1px solid #ddd', 
              borderRadius: '4px',
              fontSize: '1rem'
            }} 
          />
        </div>
        
        <div style={{marginBottom: '1rem'}}>
          <label style={{display: 'block', marginBottom: '0.5rem', fontWeight: 'bold'}}>Price:</label>
          <input 
            name="price" 
            type="number" 
            step="0.01"
            placeholder="0.00" 
            value={form.price} 
            onChange={handleChange} 
            style={{
              width: '100%', 
              padding: '0.75rem', 
              border: '1px solid #ddd', 
              borderRadius: '4px',
              fontSize: '1rem'
            }} 
          />
        </div>
        
        <div style={{marginBottom: '1rem'}}>
          <label style={{display: 'block', marginBottom: '0.5rem', fontWeight: 'bold'}}>Category:</label>
          <select 
            name="category" 
            value={form.category} 
            onChange={handleChange}
            style={{
              width: '100%', 
              padding: '0.75rem', 
              border: '1px solid #ddd', 
              borderRadius: '4px',
              fontSize: '1rem'
            }}
          >
            <option value="electronics">Electronics</option>
            <option value="toys">Toys</option>
            <option value="books">Books</option>
          </select>
        </div>
        
        <div style={{marginBottom: '1rem'}}>
          <label style={{display: 'block', marginBottom: '0.5rem', fontWeight: 'bold'}}>Description:</label>
          <textarea 
            name="description" 
            placeholder="Product description" 
            value={form.description} 
            onChange={handleChange} 
            rows="4"
            style={{
              width: '100%', 
              padding: '0.75rem', 
              border: '1px solid #ddd', 
              borderRadius: '4px',
              fontSize: '1rem',
              resize: 'vertical'
            }} 
          />
        </div>
        
        <button 
          type="submit" 
          disabled={loading}
          style={{
            width: '100%',
            padding: '0.75rem',
            background: '#007bff',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            fontSize: '1rem',
            cursor: loading ? 'not-allowed' : 'pointer',
            opacity: loading ? 0.6 : 1
          }}
        >
          {loading ? 'Uploading...' : 'Upload Product'}
        </button>
      </form>
      {error && <div style={{color: 'red', marginTop: '1rem'}}>{error}</div>}
    </div>
  );
}
