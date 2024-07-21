// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCqAgfJOu0gvCEMIPQQks4cY5OdTFCpqJ8",
  authDomain: "harishportfolio-78a02.firebaseapp.com",
  projectId: "harishportfolio-78a02",
  storageBucket: "harishportfolio-78a02.appspot.com",
  messagingSenderId: "613473371663",
  appId: "1:613473371663:web:c895d8415db236cb04057a",
  measurementId: "G-JRE01WF40E"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);