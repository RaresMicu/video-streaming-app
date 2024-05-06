// import firebase from "firebase";
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: `${process.env.FIREBASE_API}`,
  authDomain: "gaiasight-b8a92.firebaseapp.com",
  projectId: "gaiasight-b8a92",
  storageBucket: "gaiasight-b8a92.appspot.com",
  messagingSenderId: "818784592613",
  appId: "1:818784592613:web:690b1a295e7a490f4c2a0c",
};

// firebase.initializeApp(firebaseConfig);
const firebaseApp = initializeApp(firebaseConfig);
// const storage = firebase.storage();
const storage = getStorage(firebaseApp);


export {storage};