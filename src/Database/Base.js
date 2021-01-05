import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const app = firebase.initializeApp({
  apiKey: "AIzaSyBuotM-NNfU02cYuNeQW1LHA-Ic8zxbKj8",
  authDomain: "adminrm4.firebaseapp.com",
  projectId: "adminrm4",
  storageBucket: "adminrm4.appspot.com",
  messagingSenderId: "1029160741656",
  appId: "1:1029160741656:web:2b08a6e9b9ccf490e80c6d",
  measurementId: "G-LB9WELPB8B",
});

export default app;
export const db = app.firestore();
export const storage = app.storage();
