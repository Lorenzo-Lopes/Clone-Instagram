import firebase from 'firebase';



const firebaseConfig = {
    apiKey: "AIzaSyBd3fCQ3DGs0xHpz4fsYJ1QFfYKTv4MWx4",
    authDomain: "reactjs-instagram00.firebaseapp.com",
    projectId: "reactjs-instagram00",
    storageBucket: "reactjs-instagram00.appspot.com",
    messagingSenderId: "384295267159",
    appId: "1:384295267159:web:4ed409a7cd286f8f906c12",
    measurementId: "G-WX683XKWZB"
    };

const app = firebase.initializeApp(firebaseConfig);  
const db = firebase.firestore();
const auth = firebase.auth();
const storage = firebase.storage()
const functions = firebase.functions()

export {app, db, auth, storage, functions}