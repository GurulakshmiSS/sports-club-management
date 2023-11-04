import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import HomeHeader from './HomeHeader';

const Login = () => {
  let history =useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost/php-react/sportsclub/api/login.php', {
        username,
        password,
      });

      // Handle a successful login (e.g., set user session)
      console.log('Login successful', response.data);
      const result = response.data;
      const first_name= result.first_name;
      console.log(first_name);

      window.localStorage.setItem('email',result.email);
      window.localStorage.setItem('first_name',(result.first_name));
      window.localStorage.setItem('id',(result.id));
      window.localStorage.setItem('last_name',(result.last_name));
      history('/home-page');
                 
    } catch (error) {
      setError('Login failed. Please check your credentials.');
    }
  };

  return (
    <div>
      <HomeHeader/>
      <form onSubmit={handleSubmit}>
      <div className="main_box">
            <div className="row">
                <div className="col-md-12 text-center"><h1>Login</h1></div>
            </div>
            
            <div className="row">
                <div className="col-md-5">Email</div>
                <div className="col-md-7">
                <input
                      type="text"
                      value={username}
                      className="form-control"
                      onChange={(e) => setUsername(e.target.value)}
                    />
                    {/* <input type="email" name="email" className="form-control" onChange={handleChange} value={data.email}/> */}
                </div>
            </div>
            <div className="row">
                <div className="col-md-5">Password</div>
                <div className="col-md-7">
                <input
                      type="password"
                      value={password}
                      className="form-control"
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    {/* <input type="password" name="password" className="form-control" onChange={handleChange} value={data.password}/> */}
                </div>
            </div>
            <div className="row">
                <div className="col-md-12 text-center">
                {/* <button type="submit" className="btn btn-success">Log In</button> */}
                    <input type="submit" name="submit" value="Login" className="btn btn-success"/>
                </div>
            </div>
        </div>







       {/*  <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Log In</button> */}
      </form>
      {error && <p>{error}</p>}
    </div>
  );
};

export default Login;
