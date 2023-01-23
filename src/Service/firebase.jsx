import firebase from "firebase/compat/app";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
  measurementId: process.env.REACT_APP_MEASUREMENT_ID,
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();
const provider1 = new firebase.auth.GithubAuthProvider();
console.log(provider1, "provider1");

provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export const signInWithGithub = () => auth.signInWithPopup(provider1);

export const logOut = () => {
  auth
    .signOut()
    .then(() => {
      console.log("logged out");
    })
    .catch((error) => {
      console.log(error.message);
    });
};

export default firebase;
// import dotenv from 'dotenv'
// import * as firebase from "firebase/app";
// import "firebase/auth";
// dotenv.config()

// firebase.initializeApp({
//   apiKey: process.env.REACT_APP_API_KEY,
//   authDomain: process.env.REACT_APP_AUTH_DOMAIN,
//   databaseURL: process.env.REACT_APP_DATABASE_URL,
//   projectId: process.env.REACT_APP_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
//   messagingSenderId:  process.env.REACT_APP_MESSAGING_SENDER_ID,
//   appId: process.env.REACT_APP_APP_ID,
//   measurementId: process.env.REACT_APP_MEASUREMENT_ID
// });

// export const auth = firebase.auth();
// const googleProvider = new firebase.auth.GoogleAuthProvider()
// export const signInWithGoogle = () => {
//   auth.signInWithPopup(googleProvider).then((res) => {
//     console.log(res.user)
//   }).catch((error) => {
//     console.log(error.message)
//   })
// }
// export const logOut = () => {
//   auth.signOut().then(()=> {
//     console.log('logged out')
//   }).catch((error) => {
//     console.log(error.message)
//   })
// }

/////////////////////////////////////////////////////////////////////////////////////////

// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";const firebaseConfig = {
//   apiKey: "AIzaSyA22_bgz8gLTVrPSzwCxES3QnzQgbjIBmY",
//   authDomain: "social-login-form-e562c.firebaseapp.com",
//   projectId: "social-login-form-e562c",
//   storageBucket: "social-login-form-e562c.appspot.com",
//   messagingSenderId: "1086960905389",
//   appId: "1:1086960905389:web:aed9c447181a0b2341ea24",
//   measurementId: "G-9JWLVRK1D2"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
