// Login.js

import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Import Link from React Router to create navigation links

const containerStyle = {
  border: '1px solid #ddd',
  borderRadius: '5px',
  padding: '20px',
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  maxWidth: '400px',
  margin: '0 auto',
  color: 'black',
};

const headingStyle = {
  fontSize: '24px',
  marginBottom: '20px',
  color: 'black',
};

const formStyle = {
  display: 'flex',
  flexDirection: 'column',
};

const inputStyle = {
  width: '90%',
  padding: '10px',
  margin: '10px',
  border: '1px solid #ddd',
  borderRadius: '3px',
};

const buttonStyle = {
  backgroundColor: '#007bff',
  color: '#fff',
  border: 'none',
  padding: '10px 20px',
  borderRadius: '5px',
  cursor: 'pointer',
  width: '20%',

};

function Login1() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const navigate = useNavigate(); 

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleLogin = () => {
    // Perform your login logic here

    // If login is successful, navigate to the MemberProfile page
    navigate('/home-page');
  };

  return (
    <div style={containerStyle}>
      <h2 style={headingStyle}>User Login</h2>
      <form style={formStyle} onSubmit={handleLogin}>
        <div style={{ marginBottom: '15px' }}>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            style={inputStyle}
          />
        </div>
        <div style={{ marginBottom: '15px' }}>
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            style={inputStyle}
          />
        </div>
        <button onClick={handleLogin} style={buttonStyle}>Login</button>
      </form>
      
    </div>
  );
}

export default Login1;
