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

console.log ('Signup!')

//signup user
const signupForm = document.getElementById("signup")
signupForm.addEventListener('submit', (e)=>{
  e.preventDefault()
  
  //Getting the input fields
  const email = signupForm.email.value;
  const password = signupForm.password.value;
  const username = signupForm.username.value;

  //validate input fields
  if (validate_email(email) == false) {
    alert('Please add a valid email address');
    return
    // Don't continue running the code
  }
  if (validate_password(password) == false) {
    alert('Password should be 6 or more characters')
    return
    // Don't continue running the code
  }
  if (validate_field(username) == false) {
    alert('Please add a username to register')
    return
  } 

  createUserWithEmailAndPassword(auth, email, password)
    .then((cred) => {
      // Signed in 
      const user = cred.user;
      console.log('User created:', user); 
      signupForm.reset()

      updateProfile(auth.currentUser, {
        displayName: username
      }).then(() => {
        window.location.href = "songs.html"
      })
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorMessage)

      if (errorMessage == 'Firebase: Error (auth/email-already-in-use).'){
        alert('Email is already in use')
      }
      // ..
    })
})

//Validation functions
function validate_email(email) {
 const expression = /^[^@]+@\w+(\.\w+)+\w$/
  if (expression.test(email) == true) {
    // Email is good
    return true
  } else {
    // Email is not good
    return false
  }
}

function validate_password(password) {
  // Firebase only accepts lengths greater than 6
  if (password < 6) {
    return false
  } else {
    return true
  }
}

function validate_field(field) {
  if (field == null) {
    return false
  }

  if (field.length <= 0) {
    return false
  } else {
    return true
  }
}




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
    // ...

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
