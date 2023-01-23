// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBueIoMqAIfvMsTSMeMOLCQtGWYjsCiF4E",
    authDomain: "to-do-app-724b4.firebaseapp.com",
    databaseURL: "https://to-do-app-724b4-default-rtdb.firebaseio.com",
    projectId: "to-do-app-724b4",
    storageBucket: "to-do-app-724b4.appspot.com",
    messagingSenderId: "330581606111",
    appId: "1:330581606111:web:6ee6fb6f7fbc40e46bb36a"
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);

export default firebase;