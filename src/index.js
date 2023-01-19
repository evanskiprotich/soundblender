// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAz9YFwh9EGL_rMBAQrY7ThLqy_a5i34AA",
  authDomain: "soundblender-3e907.firebaseapp.com",
  projectId: "soundblender-3e907",
  storageBucket: "soundblender-3e907.appspot.com",
  messagingSenderId: "378738085237",
  appId: "1:378738085237:web:71afb7a0fb8d203449973c",
  measurementId: "G-YH6RXBK5H5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
