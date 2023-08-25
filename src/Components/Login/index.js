import React from 'react';

import Logo from "../../assets/olxlogo.png"
import Signup from "../Signup"
import './style.css';

function Login() {
  return (
    <div>
      <h1>Login page</h1>
      <div className="loginParentDiv">
        <img src={Logo}></img>
        <form>
          <label htmlFor="fname">Email</label>
          <br />
          <input
            className="input"
            type="email"
            id="fname"
            name="email"
          />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
            className="input"
            type="password"
            id="lname"
            name="password"
          />
          <br />
          <br />
          <button>Login</button>
        </form>
        <p>Dont Have an account? <a href={Signup}>sign up here</a></p>
      </div>
    </div>
  );
}

export default Login;
