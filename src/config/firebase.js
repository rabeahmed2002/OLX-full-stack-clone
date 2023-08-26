// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBQ503vgrLFEn0JVXrjMbp2UGMQYeDyK5o",
  authDomain: "test-project-14972.firebaseapp.com",
  projectId: "test-project-14972",
  storageBucket: "test-project-14972.appspot.com",
  messagingSenderId: "446260732144",
  appId: "1:446260732144:web:99d54b7235053704dc2235"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth=getAuth(app)

const signupUser = async (email, password, name) => {
  return createUserWithEmailAndPassword(auth, email, password, name)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log('User created:', user);
      return null; // No error
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      return errorMessage; // Return the error message
    });
};

const loginUser = async (email, password) => {

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log('User logged in:', user);
        alert("Successfully signed in")
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(error.message);
        alert(error.message)
      });
  ;

  // try {
  //   const res= await signInWithEmailAndPassword(email, password)
  //   console.log("login successful");
  //   return{
  //     status:200,
  //     message:"Success",
  //     data: res.user
  //   }
  // } catch (error) {
  //   return{
  //     status:500,
  //     message: error.message,
  //     data: null
  //   }
  // }
};

export {
  signupUser,
  loginUser
}
