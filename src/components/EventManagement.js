import React, { useState,useEffect } from 'react';
import Header from './Header';
import './EventManagement.css'; // Import your CSS file
import axios from 'axios';

const EventManagement = () => {
  // Mock data for events (replace with your actual data)
  const [error,setError] = useState("");
  const [success,setSuccess] = useState("");
  const [events,setEvents] = useState([]);
  /* const [events, setEvents] = useState([
    {
      id: 1,
      name: 'Soccer Tournament',
      date: '2023-10-15',
      time: '10:00 AM',
      location: 'Soccer Field',
      description: 'Annual soccer tournament for club members.',
    },
    {
      id: 2,
      name: 'Basketball Practice',
      date: '2023-10-20',
      time: '4:00 PM',
      location: 'Basketball Court',
      description: 'Regular basketball practice session.',
    },
    // Add more events as needed
  ]); */

  // Event form state
  const [formData, setFormData] = useState({
    event_name: '',
    event_date: '',
    event_time: '',
    location: '',
    description: '',
  });

 
  // Event form change handler
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData,[name]: value});
  };

  const displayEvent = async () => {
    try {
      const response = await axios.post('http://localhost/php-react/sportsclub/api/display_events.php');
      setEvents(response.data);
      // Handle a successful response
      console.log('successful', response.data);
  
      // Assuming response.data is an array of events
      // response.data.forEach(event => {
      //   const event_name = event.description;
      //   console.log("hi ajj");
      //   console.log(event_name);
      // });
    } catch (error) {
      setError('Failed');
    }
  };
 useEffect(() => {
      displayEvent();
}, []);
   // Event form submission handler (add, edit events)
  const handleSubmit=async (e)=>{
    e.preventDefault();
       const sendData ={
           event_name :formData.event_name,
           event_date :formData.event_date,
           event_time:formData.event_time,
           location :formData.location,
           description:formData.description
       }
       console.log(sendData);
       await axios.post("http://localhost/php-react/sportsclub/api/create_event.php",sendData)
        .then((result)=>{
            console.log(result)
            if(result.data.status === "Invalid")
            {
                setError("Can't create event");
               
             } else{
                setSuccess("Event Created Successfully");
               setFormData ({
                event_name: '',
                event_date: '',
                event_time: '',
                location: '',
                description: '',
              });
            
            }
       })
}
  
  return (
    <div >
      <div>
          <Header/>
      </div>
    <div className="event-management">
      <h2>Event Management</h2>
      {/* Event Form (for creating and editing events) */}
      <form onSubmit={handleSubmit}>
        {/* Form inputs for event details */}
        {/* Implement input fields for event name, date, time, location, and description */}
        <input type="text" name="event_name" value={formData.event_name} onChange={handleChange} placeholder="Event Name" />
        <input type="date" name="event_date" value={formData.event_date} onChange={handleChange} />
        <input type="time" name="event_time" value={formData.event_time} onChange={handleChange} />
        <input type="text" name="location" value={formData.location} onChange={handleChange} placeholder="Location" />
        <textarea name="description" value={formData.description} onChange={handleChange} placeholder="Description" />
        <button type="submit">Create Event</button>
      </form>
      <p>{error}</p>
      <p>{success}</p>
      
      {/* Event List */}
      
      <div className="event-list">
        {events.map((event) => (
          <div key={event.id} className="event-card">
            <h3>{event.event_name}</h3>
            <p>Date: {event.event_date}</p>
            <p>Time: {event.event_time}</p>
            <p>Location: {event.location}</p>
            <p>Description: {event.description}</p>
            <button>Edit</button>
            <button onClick={()=>Update(event.id)}>Delete</button>
          </div>
        ))}
      </div> 
    </div>
    </div>
  );
};
//
export default EventManagement;
