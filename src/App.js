import React from 'react';
import './App.css'; // Import your global styles if needed
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import React Router components
import UserRegistration from './components/UserRegistration'; // Import the UserRegistration component
import Register1 from './components/Register'; // Import the Register component
import Login1 from './components/Login'; // Import the Login component
import Login from './components/Login';
import Register from './components/Register';
import HomePage from './components/HomePage';
import SportCatalog from './components/SportCatalog';
import MemberProfile from './components/MemberProfile';
import EventManagement from './components/EventManagement';
import FacilityBooking from './components/FacilityBooking';

function App() {

  
  // Sample member data (replace with your actual member data)
 /*  const member1 = {
    username: 'Gurulakshmi',
    email: 'guru@gmail.com',
    membershipStatus: 'Active',
  }; */
  const auth         = localStorage.getItem("email");
  const first_name   = localStorage.getItem('first_name');
  const last_name    = localStorage.getItem("last_name");
  const mid           = localStorage.getItem('id');
 
  const member ={
        id :mid,
        first_name : first_name,
        last_name :last_name,
        email: auth,
        membershipStatus: 'Active',
  }

  return (
    <Router>
      <div className="App">
      

        <main className="App-main">
          <Routes>
            
            <Route path="/" element={<UserRegistration />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/home-page" element={<HomePage />} />

            <Route path="/member-profile" element={<MemberProfile member={member} />} />
            <Route path="/sport-catalog" element={<SportCatalog />} />
            <Route path="/event-management" element={<EventManagement />} />
            <Route path="/facility-booking" element={<FacilityBooking />} />
            
          </Routes>
        </main>
      </div>
    </Router>
  );
}



export default App;
