// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword} from 'firebase/auth'
import { getFirestore, addDoc, collection } from "firebase/firestore";

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
const db=getFirestore(app)
const auth=getAuth(app)

const signupUser = async (email, password, name) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    const docRef = await addDoc(collection(db, "users"), {
      email: email,
      password: password,
      name: name,
    });

    console.log('User created:', user);
    console.log("Document written with ID: ", docRef.id);
    return null; // No error
  } catch (error) {
    console.log('Error signing up and adding document', error);
    return error.message; // Return the error message
  }
};


const loginUser = async (email, password) => {

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log('User logged in: ', user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(error.message);
      });
  ;

};

export {
  signupUser,
  loginUser
}
