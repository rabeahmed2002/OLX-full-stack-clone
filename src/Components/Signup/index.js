import React, {useState} from 'react';

import Logo from "../../assets/olxlogo.png"
import Login from "../Login"
import './style.css';
import {signupUser} from "../../config/firebase"

function Signup(props) {


  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('')


  const [error, setError] = useState('');

  const handleNameChange = (e) => {
      setUsername(e.target.value);
    };
  
    const handleEmailChange = (e) => {
      setEmail(e.target.value);
    };
  
    const handlePasswordChange = (e) => {
      setPassword(e.target.value);
    };


    const handleSubmit = async () => {
      //Firebase ke mehtod klo call kerwana hai
      const signupUserRes = await signupUser(email, password, phoneNumber, username)
      console.log("signupUserRes ", signupUserRes)
      if (signupUserRes.status === 200) {
          alert(signupUserRes.message)
          // props.setScreen("dashboard")
      }
      else {
          alert(signupUserRes.message)
      }
  }
  


  return (
    <div>
      <h1>Signup page</h1>
      <div className="loginParentDiv">
        <img src={Logo}></img>
        <form>
          <br />
          <label htmlFor="email">Username</label>
          <br />
          <input
            className="input"
            type="text"
            id="name"
            value={username}
            onChange={handleNameChange}
          />
          <br/>
          <label htmlFor="fname">Email</label>
          <br />
          <input
            className="input"
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
            className="input"
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
            required
          />
          <br />
          <br />
          <button onClick={handleSubmit}>Signup</button>
          {error && <p className="error-message">{error}</p>}
        </form>
        <p>Already have an account? <a onClick={()=>{props.setScreen('login')}}>login here</a></p>

        {/* <p>
        Already have an account?{' '}
          <a href="#" onClick={() => props.setScreen('login')}>
            Login here
          </a>
      </p> */}


      </div>
    </div>
  );
}

export default Signup;
