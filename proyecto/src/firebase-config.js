// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD4gYm3vhc2poUDByUZKkWLSY_xYsx1shM",
    authDomain: "pokeproject-6fc9f.firebaseapp.com",
    projectId: "pokeproject-6fc9f",
    storageBucket: "pokeproject-6fc9f.appspot.com",
    messagingSenderId: "484838007995",
    appId: "1:484838007995:web:bdd6918d25b7837bad759e"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)

