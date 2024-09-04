// components/LoginButton.js
import React from 'react';

const LoginButton = () => {
  const handleLogin = () => {
    // Add your login logic here
    window.location.href = '/login'; // Redirect to your login page
  };

  return (
    <button onClick={handleLogin} style={{ padding: '8px 16px', backgroundColor: '#0070f3', color: '#fff', border: 'none', borderRadius: '4px' }}>
      Login
    </button>
  );
};

export default LoginButton;
