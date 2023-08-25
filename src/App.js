import { useState } from 'react';
import './App.css';

import Home from "./Pages/Home"
import Login from "./Pages/Login"
import Signup from "./Pages/Signup"

function App() {

  const [screen, setScreen]=useState('login')



  return (
    <div className="App">
      {/* <Home/> */}
      {/* <Login/> */}

      {screen === "login" &&
          <Login setScreen={setScreen} />}

        {screen === "home" &&
          < Home />}

        {screen === "signup" &&
          < Signup setScreen={setScreen} />}

    </div>
  );
}

export default App;
