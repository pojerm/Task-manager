// JavaScript
// src/firebase.js
// import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDlB1GwpY0yRY82fzyv_bVwgzEPktox7kI",
  authDomain: "task-manager-9b2c5.firebaseapp.com",
  projectId: "task-manager-9b2c5",
  storageBucket: "task-manager-9b2c5.appspot.com",
  messagingSenderId: "357434748836",
  appId: "1:357434748836:web:8e8f8b5fac04b596ba1b31"
};

// JavaScript
// src/firebase.js
const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

export {db}
