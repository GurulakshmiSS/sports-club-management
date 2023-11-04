import React from 'react';
import { Link } from 'react-router-dom';
import { useEffect,useState } from 'react';
import './Header.css'; // Import the CSS file for header styles
import { BrowserRouter as Router,Routs,Route,useNavigate} from 'react-router-dom';
import { validateUser } from '../lib/validateUser';

function Header() {
  let navigate = useNavigate();
  const [auth,setAuth] = useState('');
  const [user,setUser] = useState('');
 
  const Logout =()=>{
    localStorage.removeItem('email');
    localStorage.clear();
    navigate("/login");
}
const handleLogin = () => {
  // Perform your login logic here

  // If login is successful, navigate to the MemberProfile page
  navigate('/home-page');
};

const testUser = async (auth, user) => {
const isValid = await validateUser(auth, user);
    if(!isValid)
      navigate('/login')
}

useEffect(()=>{
  var auth     = localStorage.getItem("email");
  var user     = localStorage.getItem('first_name');
  setAuth(auth);
  setUser(user);

  //testUser(auth, user);  
},[])

  return (
    <header>
      <p>Welcome : {user} </p>
      <nav>
        <ul>
          <li>
            <Link to="/home-page">Home</Link>
          </li>
          <li>
            <Link to="/sport-catalog">Sport Catalog</Link>
          </li>
          <li>
            <Link to="/member-profile">Member Profile</Link>
          </li>
          <li>
            <Link to="/event-management">Event Management</Link>
          </li>
          <li>
            <Link to="/facility-booking">Facility Booking</Link>
          </li>
          <li>
           
           <button onClick={Logout}>Logout</button>
          </li>
          
        </ul>
      </nav>
    </header>
  );
}

export default Header;
