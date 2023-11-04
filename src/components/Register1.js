// Register.js

import React, { useState } from 'react';

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
  width: '30%',

};

function Register1() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement your registration logic here
    console.log('Registration form submitted:', formData);
  };

  return (
    <div style={containerStyle}>
      <h2 style={headingStyle}>Registration Page</h2>
      <form style={formStyle} onSubmit={handleSubmit}>
        <div style={{ marginBottom: '15px' }}>
          <label>Username:</label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            style={inputStyle}
          />
        </div>
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
        <button type="submit" style={buttonStyle} onClick={handleSubmit}>
          Register
        </button>
      </form>
    </div>
  );
}

export default Register1;
