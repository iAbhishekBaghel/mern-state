// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-c12e0.firebaseapp.com",
  projectId: "mern-estate-c12e0",
  storageBucket: "mern-estate-c12e0.appspot.com",
  messagingSenderId: "1381498190",
  appId: "1:1381498190:web:dfa850e22aba572b30f21f",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
