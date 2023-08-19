// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
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