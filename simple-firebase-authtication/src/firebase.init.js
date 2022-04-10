// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCDZ0tcrMAxH2VoJeqmuDXfy4J9yAp0ky4",
    authDomain: "simple-firebase-authtica-b5e7a.firebaseapp.com",
    projectId: "simple-firebase-authtica-b5e7a",
    storageBucket: "simple-firebase-authtica-b5e7a.appspot.com",
    messagingSenderId: "140630220608",
    appId: "1:140630220608:web:481a575c8068fa380fa4a5",
    measurementId: "G-THN76XVZ46"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { app, analytics }