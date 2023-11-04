import React, { useState } from 'react';
import EventManagement from './EventManagement';
import Header from './Header';
import axios from 'axios';

function UpdateMeber({ member }) {
    const [isEditing, setIsEditing] = useState(false);
    const [editedMember, setEditedMember] = useState({ ...member });
  
    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setEditedMember({ ...editedMember, [name]: value });
    };
     const update = (eventId) => {
        // Perform the update logic using the event ID
        console.log(`Update event with ID ${eventId}`);
        // You can open a modal or form for event editing here
      };
      updateEvent = (eventId) => {
        // Perform the update logic using the event ID
        console.log(`Update event with ID ${eventId}`);
        // You can open a modal or form for event editing here
      };
        
    const handleProfileUpdate = () => {
        // Add logic here to update the member's profile
        setIsEditing(false);
    
        // Make an API request to update the user's profile
        axios.post('http://localhost/php-react/sportsclub/api/updatemember.php', {
              id: editedMember.id,
              updatedData: {
                  first_name: editedMember.first_name,
                  last_name : editedMember.last_name,
                  email: editedMember.email,
                  // Add other profile fields here
              },
          })
              .then((response) => {
                  console.log(response.data.message);
                  // Handle success (e.g., show a success message)
              })
              .catch((error) => {
                  console.error('Error updating profile', error);
                  // Handle error (e.g., show an error message)
              });
       };
      
      return (
        <div>
          <Header/>
        
        <div style={styles.container}>
          <h2 style={styles.title}>Member Profile</h2>
         
         
            <form>
            <div>
              <div style={styles.profileInfo}>
                <label>First Name:</label>
                <input
                  type="text"
                  name="first_name"
                  value={editedMember.first_name}
                  onChange={handleInputChange}
                  style={styles.input}
                />
              </div>
              <div style={styles.profileInfo}>
                <label>Last Name:</label>
                <input
                  type="text"
                  name="last_name"
                  value={editedMember.last_name}
                  onChange={handleInputChange}
                  style={styles.input}
                />
              </div>
              <div style={styles.profileInfo}>
                <label>Email:</label>
                <input
                  type="email"
                  name="email"
                  value={editedMember.email}
                  onChange={handleInputChange}
                  style={styles.input}
                />
              </div>
              {/* Add more fields for profile editing */}
              <button style={styles.saveButton} onClick={handleProfileUpdate} type="submit">
                Save
              </button>
            </div>
            </form>
          
        </div>
        </div>
      );
    }
   
    export default UpdateEvent;
    
    // Inline CSS styles
    const styles = {
      container: {
        maxWidth: '400px',
        margin: '0 auto',
        padding: '20px',
        border: '1px solid #ccc',
        borderRadius: '5px',
        backgroundColor: '#f9f9f9',
      },
      title: {
        fontSize: '24px',
        textAlign: 'center',
        color: '#333',
      },
      profileInfo: {
        padding: '10px',
        backgroundColor: '#fff',
        border: '1px solid #ccc',
        borderRadius: '3px',
        marginBottom: '10px',
      },
      input: {
        width: '100%',
        padding: '5px',
        marginTop: '5px',
        border: '1px solid #ccc',
        borderRadius: '3px',
      },
      editButton: {
        backgroundColor: '#007bff',
        color: '#fff',
        padding: '10px',
        border: 'none',
        borderRadius: '3px',
        cursor: 'pointer',
      },
      saveButton: {
        backgroundColor: '#28a745',
        color: '#fff',
        padding: '10px',
        border: 'none',
        borderRadius: '3px',
        cursor: 'pointer',
      },
    };
    