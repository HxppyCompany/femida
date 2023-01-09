// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCta883qOGPFbpvhjq7IvrwsHEPfv2PVbQ",
    authDomain: "femida-site.firebaseapp.com",
    projectId: "femida-site",
    storageBucket: "femida-site.appspot.com",
    messagingSenderId: "782332099300",
    appId: "index.html:782332099300:web:dbca1054f77a3acd2b0af1",
    measurementId: "G-MMHTRCVMQV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);