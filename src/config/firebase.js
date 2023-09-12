// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword} from 'firebase/auth'
import { getFirestore, addDoc, collection, getDocs, setDoc, doc, getDoc } from "firebase/firestore";

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
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const uid = res.user.uid

    const docRef = await setDoc(doc(db, "users", uid), {
      email: email,
      password: password,
      name: name,
    });

    console.log("Document written with ID: ", docRef.id);
    return {
      status: 200,
      message: "Success",
      data: res.user
  }
  } catch (error) {
    console.log('Error signing up and adding document', error);
    return error.message; // Return the error message
  }
};


const loginUser = async (email, password) => {

  try {
    const res=await signInWithEmailAndPassword(auth, email, password)

    return {
      status: 200,
      message: "Success",
      data: res.user
  }
  }     catch (error) {
    console.log(error.message)
    return {
        status: 500,
        message: error.message,
        data: null
    }
}

};

const getUserData = async (uid) => {
  try {
      const docRef = doc(db, "users", uid)
      const res = await getDoc(docRef)
      const data = res.data()
      console.log("firebase getUserData", data)
      return {
          status: 200,
          message: "Success",
          data: data
      }
  }
  catch (error) {
      console.log(error.message)
      return {
          status: 500,
          message: error.message,
          data: null
      }
  }
}

export {
  signupUser,
  loginUser,
  auth
}
