// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC5iWeUuWLE2vI6a9EqlGFG_yYgkd0RW-Q",
  authDomain: "project-globalshapers-592fb.firebaseapp.com",
  projectId: "project-globalshapers-592fb",
  storageBucket: "project-globalshapers-592fb.appspot.com",
  messagingSenderId: "382370013465",
  appId: "1:382370013465:web:75a0d73ede521d84bde588",
  measurementId: "G-6WZMGQQVXP",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
