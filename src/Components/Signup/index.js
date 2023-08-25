import React, {useState} from 'react';

import Logo from "../../assets/olxlogo.png"
import Login from "../Login"
import './style.css';
import {signupUser} from "../../config/firebase"

function Signup() {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleNameChange = (e) => {
      setName(e.target.value);
    };
  
    const handleEmailChange = (e) => {
      setEmail(e.target.value);
    };
  
    const handlePasswordChange = (e) => {
      setPassword(e.target.value);
    };


    const handleSubmit = (e) => {
      e.preventDefault();
  
      signupUser(email, password, name)
    };
  


  return (
    <div>
      <h1>Signup page</h1>
      <div className="loginParentDiv">
        <img src={Logo}></img>
        <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username</label>
          <br />
          <input
            type="text"
            id="name"
            value={name}
            onChange={handleNameChange}
            required
          />
          <br/>
          <label htmlFor="fname">Email</label>
          <br />
          <input
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
            required
          />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
            required
          />
          <br />
          <br />
          <button onClick={signupUser}>Signup</button>
        </form>
        <p>Already have an account? <a>login here</a></p>
      </div>
    </div>
  );
}

export default Signup;