// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {getStorage} from "firebase/storage"
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDQapp0j9bSKPkluSY-ENBKEvNcX13U6LY",
  authDomain: "chatapplication-99cd7.firebaseapp.com",
  projectId: "chatapplication-99cd7",
  storageBucket: "chatapplication-99cd7.appspot.com",
  messagingSenderId: "17019502691",
  appId: "1:17019502691:web:ba7823d19fe19fe162f856",
  measurementId: "G-E1Y3BXMZHB"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth()
export const storage=getStorage()
export const db=getFirestore(app)
export default app;