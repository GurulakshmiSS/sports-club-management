import React from 'react';
import { Link } from 'react-router-dom';
import { useEffect,useState } from 'react';
import './HomeHeader.css';

import { BrowserRouter as Router,Routs,Route,useNavigate} from 'react-router-dom';

function HomeHeader() {
  let navigate = useNavigate();
   
  return (
    <div className='background-image'>
    <header className='head'>
      <nav className='navlight'>
       
        <ul>
        <li>
           <h1>Sports Club</h1>
          </li>
          <li>
            <Link to=""> </Link>
          </li>
          <li>
            <Link to="/register">Register</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
                    
        </ul>
      </nav>
    </header>
    </div>
  );
}

export default HomeHeader;
