import { useState, useEffect } from 'react';
import { auth } from './config/firebase';
import { onAuthStateChanged } from 'firebase/auth';
import './App.css';

import Home from "./Pages/Home"
import Login from "./Components/Login"
import Signup from './Components/Signup';

function App() {

  const [screen, setScreen]=useState('login')
  const [userData, setUserData] = useState(null)

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        setUserData(uid)
        console.log("user logged in", user)
      } else {
        setUserData(null)
        console.log("user signed out")
      }
    });
  }, [])

  return (
    <div className="App">
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
