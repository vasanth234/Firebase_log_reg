// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBJ6c4A0gnaENnLPkbWpokMdvL2osC6ckk",
  authDomain: "checkauthenticate.firebaseapp.com",
  projectId: "checkauthenticate",
  storageBucket: "checkauthenticate.appspot.com",
  messagingSenderId: "391837883689",
  appId: "1:391837883689:web:2ff0dad7879ff9698eab38",
  measurementId: "G-ST7P3QV15M"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Get Auth and Firestore instances
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
export default app;
