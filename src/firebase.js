import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAPOeQU8Wk2t03CO4LOvd5jhs4j1tPvIeM",
    authDomain: "messenger-clone-6e4af.firebaseapp.com",
    projectId: "messenger-clone-6e4af",
    storageBucket: "messenger-clone-6e4af.appspot.com",
    messagingSenderId: "853970899214",
    appId: "1:853970899214:web:7de6a6bdf4e167759c875f",
    measurementId: "G-DZVR57N9NN"
});

const db=firebaseApp.firestore();

export default db ;