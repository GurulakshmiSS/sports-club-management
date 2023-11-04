import React from 'react';
import { Link } from 'react-router-dom';
import './UserRegistration.css';
import HomeHeader from './HomeHeader';

function UserRegistration() {
  return (
    <div>
      <HomeHeader/>
{/*       <div className='reg'>
    <div className="user-registration" >
      <h2>User Registration</h2>
      <div className="registration-options">
        <Link to="/register">
          <button className="register-button">Register</button>
        </Link>
        <Link to="/login">
          <button className="login-button">Login</button>
        </Link>
        
      </div>
    </div> 
    </div>*/}

    </div>
  );
}

export default UserRegistration;
