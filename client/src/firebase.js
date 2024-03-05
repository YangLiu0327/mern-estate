// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-28798.firebaseapp.com",
  projectId: "mern-estate-28798",
  storageBucket: "mern-estate-28798.appspot.com",
  messagingSenderId: "465718602468",
  appId: "1:465718602468:web:75149a63ebd5c69315daf1"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);