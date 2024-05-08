// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyChcL5_sA-I27Wk4G-i9E2qkIokuNe91xA",
    authDomain: "chatapp-ed977.firebaseapp.com",
    projectId: "chatapp-ed977",
    storageBucket: "chatapp-ed977.appspot.com",
    messagingSenderId: "1002674103953",
    appId: "1:1002674103953:web:39c417866d938f23518130",
    measurementId: "G-E78F2RSXGS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;


