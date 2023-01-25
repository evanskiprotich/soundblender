// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCRu_oA6v74Zi7N5FkRmNdrcjkpcE57laA",
  authDomain: "soundcloud-3948e.firebaseapp.com",
  projectId: "soundcloud-3948e",
  storageBucket: "soundcloud-3948e.appspot.com",
  messagingSenderId: "448495516251",
  appId: "1:448495516251:web:21f037e817cb932d639d7e",
  measurementId: "G-83430HWHQQ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
