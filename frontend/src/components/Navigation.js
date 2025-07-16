import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAuthContext } from '../contexts/AuthContext';

export default function Navigation() {
  const { user } = useAuthContext();
  const location = useLocation();

  const navStyle = {
    background: '#f8f9fa',
    padding: '1rem 0',
    borderBottom: '1px solid #dee2e6'
  };

  const navContainerStyle = {
    maxWidth: '900px',
    margin: '0 auto',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0 1rem'
  };

  const linkStyle = {
    textDecoration: 'none',
    color: '#495057',
    padding: '0.5rem 1rem',
    borderRadius: '4px',
    margin: '0 0.25rem',
    transition: 'background-color 0.2s'
  };

  const activeLinkStyle = {
    ...linkStyle,
    background: '#007bff',
    color: 'white'
  };

  const authLinkStyle = {
    ...linkStyle,
    background: user ? '#28a745' : '#dc3545',
    color: 'white'
  };

  return (
    <nav style={navStyle}>
      <div style={navContainerStyle}>
        <div>
          <Link 
            to="/" 
            style={location.pathname === '/' ? activeLinkStyle : linkStyle}
          >
            Products
          </Link>
          {user && (
            <>
              {user.role === 'seller' && (
                <Link 
                  to="/upload" 
                  style={location.pathname === '/upload' ? activeLinkStyle : linkStyle}
                >
                  Upload
                </Link>
              )}
              <Link 
                to="/cart" 
                style={location.pathname === '/cart' ? activeLinkStyle : linkStyle}
              >
                Cart
              </Link>
              <Link 
                to="/wishlist" 
                style={location.pathname === '/wishlist' ? activeLinkStyle : linkStyle}
              >
                Wishlist
              </Link>
              <Link 
                to="/orders" 
                style={location.pathname === '/orders' ? activeLinkStyle : linkStyle}
              >
                Orders
              </Link>
            </>
          )}
        </div>
        <Link 
          to="/auth" 
          style={authLinkStyle}
        >
          {user ? `${user.role} - ${user.name}` : 'Login'}
        </Link>
      </div>
    </nav>
  );
} 