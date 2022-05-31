import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const config = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: "cona-5d2fb.firebaseapp.com",
  projectId: "cona-5d2fb",
  storageBucket: "cona-5d2fb.appspot.com",
  messagingSenderId: "1037772819355",
  appId: "1:1037772819355:web:584a0b59a513c296942f3e",
  measurementId: "G-5GNSX0Z6HR",
};

if (!firebase.apps.length) {
    firebase.initializeApp(config);
}

const firestore = firebase.firestore();

export { firestore };
