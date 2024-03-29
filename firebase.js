// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDjYb-xBYGATZzQ9zjsb3C1gZ8AI6hzu1A",
  authDomain: "gn-legal-office.firebaseapp.com",
  projectId: "gn-legal-office",
  storageBucket: "gn-legal-office.appspot.com",
  messagingSenderId: "639848113476",
  appId: "1:639848113476:web:49e173bdae9a2747766311",
  measurementId: "G-G3TFH7SGQ0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);