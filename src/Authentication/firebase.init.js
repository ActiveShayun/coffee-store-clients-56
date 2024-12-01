// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA8GgTQDtEI1BJWr0fNEOQTdSXoglMwDro",
  authDomain: "coffee-store-a00f6.firebaseapp.com",
  projectId: "coffee-store-a00f6",
  storageBucket: "coffee-store-a00f6.firebasestorage.app",
  messagingSenderId: "305418205102",
  appId: "1:305418205102:web:74461a6139885e4904fa3f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export  const auth = getAuth(app)