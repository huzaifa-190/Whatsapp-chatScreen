// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';


const firebaseConfig = {
    apiKey: "AIzaSyBoMvRTqCedzFLXVFh-m_hWJva1dv7dFEk",
    authDomain: "practice-app-cafc0.firebaseapp.com",
    projectId: "practice-app-cafc0",
    storageBucket: "practice-app-cafc0.appspot.com",
    messagingSenderId: "667590541222",
    appId: "1:667590541222:web:61d3cd8a0b43610e3c5967",
    measurementId: "G-10YD07CNV3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// const analytics = getAnalytics(app);
  

export { app,auth};
