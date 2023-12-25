// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDDksZsBwM4KLqj1yjQCnKpe01YkacCja4",
  authDomain: "real-time-chat-room-app.firebaseapp.com",
  projectId: "real-time-chat-room-app",
  storageBucket: "real-time-chat-room-app.appspot.com",
  messagingSenderId: "896973107127",
  appId: "1:896973107127:web:c804d0181b69477a648232"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);