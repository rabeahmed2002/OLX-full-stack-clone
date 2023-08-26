import { useState } from 'react';
import './App.css';

import Home from "./Pages/Home"
import Login from "./Components/Login"
import Signup from './Components/Signup';
import Navbar from "./Components/Navbar"

function App() {

  const [screen, setScreen]=useState('home')

  return (
    <div className="App">

      {screen !== 'login' && 
          <Navbar setScreen={setScreen}/>}

      {screen === "login" &&
          <Login setScreen={setScreen}/>}

        {screen === "home" &&
          <Home setScreen={setScreen}/>}

        {screen === "signup" &&
          <Signup setScreen={setScreen}/>}


    </div>
  );
}

export default App;
