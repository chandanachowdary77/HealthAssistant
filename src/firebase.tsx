// src/firebase.ts
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAAPKB6uQ9Md7mSSc2Vat5PGr_Pb32iXxg",
  authDomain: "health-49a5d.firebaseapp.com",
  projectId: "health-49a5d",
  storageBucket: "health-49a5d.firebasestorage.app",
  messagingSenderId: "704802996985",
  appId: "1:704802996985:web:924407228511213eaed828",
  measurementId: "G-1T59FE012T",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
