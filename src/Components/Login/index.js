import React, { useState } from 'react';
import Logo from "../../assets/olxlogo.png";
import './style.css';
import { loginUser } from "../../config/firebase"; // Update the import path to match your firebase.js configuration

function Login(props) {


  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      await loginUser(email, password);
      // If successful, navigate back to Home
      props.setScreen('home');
      alert('Welcome to Dashboard');
    } catch (error) {
      setError(error.message);
      console.log('Login error:', error);
    }
  };

  // async function handleSubmit(){
  //   const loginUserRes=await loginUser(email, password)

  //   if (loginUserRes.status===200) {
  //     alert("Login succcessful")
  //     props.setScreen('home')
  //   } else {
  //     alert("Reenter your credentials")
  //   }
  // }
  

  return (
    <div>
      <h1>Login page</h1>
      <div className="loginParentDiv">
        <img src={Logo} alt="Logo" />
        <form>
          <label htmlFor="email">Email</label>
          <br />
          <input
            className="input"
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={handleEmailChange}
          />
          <br />
          <label htmlFor="password">Password</label>
          <br />
          <input
            className="input"
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={handlePasswordChange}
          />
          <br />
          <br />
          <button onClick={handleSubmit}>Login</button>
          <p>Dont have an account? <a onClick={()=>{props.setScreen('signup')}}>signup here</a></p>
          {error && <p className="error-message">{error}</p>}
        </form>
      </div>
    </div>
  );
}

export default Login;
