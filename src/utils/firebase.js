// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBmLAoZfH48EIaptEtlS4egR287PPxFkcY",
  authDomain: "netflixgpt-10357.firebaseapp.com",
  projectId: "netflixgpt-10357",
  storageBucket: "netflixgpt-10357.appspot.com",
  messagingSenderId: "959816807107",
  appId: "1:959816807107:web:575b08595bb0a2c7e7e876",
  measurementId: "G-MYNJ1G07NW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);