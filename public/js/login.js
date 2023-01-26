import { initializeApp } from "https://www.gstatic.com/firebasejs/9.7.0/firebase-app.js";
import {
  getAuth,
  signInWithPopup,
  signInWithEmailAndPassword,
  FacebookAuthProvider,
  TwitterAuthProvider,
  GoogleAuthProvider,
} from "https://www.gstatic.com/firebasejs/9.7.0/firebase-auth.js";


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
// Initialize auth
const auth = getAuth();
const googleAuth = new GoogleAuthProvider();
const fbAuth = new FacebookAuthProvider();
const twitterAuth = new TwitterAuthProvider();

//Login user
const loginForm = document.getElementById("login")
loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("clicked");

  //Getting the input fields
  const email = loginForm.email.value;
  const password = loginForm.password.value;

  signInWithEmailAndPassword(auth, email, password)
    .then((credentials) => {
      console.log("user logged in:" + credentials.user);

      window.location.href = "songs.html";
    })
    .catch((err) => {
      const errorCode = err.code;
      const errorMessage = err.message;
      console.log(errorMessage);

      if (errorMessage == "Firebase: Error (auth/invalid-email).") {
        alert("Invalid email");
      }
      if (errorMessage == "Firebase: Error (auth/user-not-found).") {
        alert("User not found");
      }

      if (errorMessage == "Firebase: Error (auth/wrong-password).") {
        alert("Invalid password");
      }
    });
});

//login with twitter
const twitterLogin = document.getElementById("twitter")
twitterLogin.addEventListener('click', (e)=>{
  e.preventDefault()
  console.log('twitter clicked')

  signInWithPopup(auth, twitterAuth)
  .then((result) => {
    // The signed-in user info.
    const user = result.user;

    window.location.href = "songs.html"
    console.log('user logged in:' + user)
  })
  .catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.email;
    // The AuthCredential type that was used.
    const credential = TwitterAuthProvider.credentialFromError(error);
    // ...

    console.log(errorMessage)
    console.log(credential)
  });
})

//login with google
const googleLogin = document.getElementById("google")
googleLogin.addEventListener('click', (e)=>{
  e.preventDefault()
  console.log('google clicked')

  signInWithPopup(auth, googleAuth)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;

    window.location.href = "songs.html"
    console.log('user logged in:' + user)
  })
  .catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // 

    console.log(errorMessage)
  })
})
