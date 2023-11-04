import React, { useState } from 'react';
import Header from './Header';
import './FacilityBooking.css'; // Import your CSS file

const FacilityBooking = () => {
  // Mock data for facilities (replace with your actual data)
  const [facilities, setFacilities] = useState([
    {
      id: 1,
      name: 'Tennis Court',
      availability: [
        { date: '2023-10-15', time: '10:00 AM - 12:00 PM' },
        { date: '2023-10-15', time: '2:00 PM - 4:00 PM' },
        // Add more availability slots as needed
      ],
    },
    {
      id: 2,
      name: 'Basketball Court',
      availability: [
        { date: '2023-10-15', time: '11:00 AM - 1:00 PM' },
        { date: '2023-10-16', time: '3:00 PM - 5:00 PM' },
        // Add more availability slots as needed
      ],
    },
    // Add more facilities as needed
  ]);

  // Booking form state
  const [formData, setFormData] = useState({
    facilityId: '',
    date: '',
    time: '',
  });

  // Booking form submission handler (book facilities)
  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement logic to book facilities based on form data
    // Update the facilities state accordingly
  };

  // Booking form change handler
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    
    <div >
      <div>
          <Header/>
      </div>
    <div className="facility-booking">
      <h2>Facility Booking</h2>
      {/* Facility Availability */}
      <div className="facility-list">
        {facilities.map((facility) => (
          <div key={facility.id} className="facility-card">
            <h3>{facility.name}</h3>
            <ul>
              {facility.availability.map((slot, index) => (
                <li key={index}>{slot.date} - {slot.time}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Booking Form */}
      <form onSubmit={handleSubmit}>
        {/* Form inputs for facility booking */}
        {/* Implement input fields for selecting facility, date, and time */}
        <select name="facilityId" value={formData.facilityId} onChange={handleChange}>
          <option value="">Select Facility</option>
          {facilities.map((facility) => (
            <option key={facility.id} value={facility.id}>{facility.name}</option>
          ))}
        </select>
        <input type="date" name="date" value={formData.date} onChange={handleChange} />
        <input type="time" name="time" value={formData.time} onChange={handleChange} />
        <button type="submit">Book Facility</button>
      </form>
    </div>
    </div>
  );
};

export default FacilityBooking;
