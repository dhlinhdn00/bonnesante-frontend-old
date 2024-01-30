// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyC0XkghZBT0-mCSt5yThP7lExytWdHmH60",
    authDomain: "bonne-sante-94cbd.firebaseapp.com",
    databaseURL: "https://bonne-sante-94cbd-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "bonne-sante-94cbd",
    storageBucket: "bonne-sante-94cbd.appspot.com",
    messagingSenderId: "40926868778",
    appId: "1:40926868778:web:4434934a7df4493ad01a53",
    measurementId: "G-W1ZHK9Q469"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Realtime Database and get a reference to the service
export const database = getDatabase(app);