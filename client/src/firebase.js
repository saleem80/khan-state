// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "shop-456da.firebaseapp.com",
  projectId: "shop-456da",
  storageBucket: "shop-456da.appspot.com",
  messagingSenderId: "522045789789",
  appId: "1:522045789789:web:db8f764cb47784dab3dfb4",
  measurementId: "G-K4LFNH5836"
};


// Initialize Firebase
export const app = initializeApp(firebaseConfig);
