// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCfKng0YM2fQySj5azNZkTkg0xy6KG32cQ",
  authDomain: "boilagbe-e2eae.firebaseapp.com",
  projectId: "boilagbe-e2eae",
  storageBucket: "boilagbe-e2eae.firebasestorage.app",
  messagingSenderId: "325561122407",
  appId: "1:325561122407:web:3516b1600f41e0a765dec2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth