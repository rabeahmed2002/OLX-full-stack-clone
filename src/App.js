import { useState } from 'react';
import './App.css';

import Home from "./Pages/Home"
import Login from "./Components/Login"
import Signup from './Components/Signup';

function App() {

  const [screen, setScreen]=useState('home')
  const [flag, setFlag]=useState(false)

  return (
    <div className="App">
      {screen === "login" &&
          <Login setScreen={setScreen} setFlag={setFlag}/>}

        {screen === "home" &&
          <Home setScreen={setScreen}/>}

        {screen === "signup" &&
          <Signup setScreen={setScreen}/>}


    </div>
  );
}

export default App;
