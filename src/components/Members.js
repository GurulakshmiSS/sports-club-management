

/* import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Members() {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get('http://localhost/php-react/sportsclub/api/register.php')
            .then((response) => {
                setData(response.data);
                console.log(response.data);
                console.log("connect sql data");
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    }, []);

    return (
        <div>
            <p></p>
          
        </div>
    );
    
}
console.log("hi php");
export default Members;

 */import React, { useState, useEffect } from 'react';
import axios from 'axios';


const Members = () => {
    const [users, setUsers] = useState([]);
    const memberid = localStorage.getItem("id");
    console.log("member");
    console.log(memberid);
    useEffect(() => {
        // Make an API request to fetch user data
        axios.post('http://localhost/php-react/sportsclub/api/member.php',{ id: memberid})
            .then((response) => {
                setUsers(response.data);
            })
            .catch((error) => {
                console.error('Error fetching user data', error);
            });
    }, []);

    return (
        <div>
            <h2>User List</h2>
            <ul>
                {users.map((user) => (
                    <li key={user.id}>{user.first_name} - {user.email}</li>
                ))}
            </ul>
        </div>
    );
};

export default Members;
