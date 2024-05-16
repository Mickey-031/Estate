// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey : import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-e1697.firebaseapp.com",
  projectId: "mern-estate-e1697",
  storageBucket: "mern-estate-e1697.appspot.com",
  messagingSenderId: "156155086154",
  appId: "1:156155086154:web:7c593e6cb51af5f607adb3"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);