// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD4WTNqrKo8BHKOb7R4M8KM777sERoBC-E",
  authDomain: "tagfuse-8a198.firebaseapp.com",
  projectId: "tagfuse-8a198",
  storageBucket: "tagfuse-8a198.firebasestorage.app",
  messagingSenderId: "491993381991",
  appId: "1:491993381991:web:e2eb944629ec3b6c81e8c2",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
