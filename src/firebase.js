import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
     apiKey: "AIzaSyDudxn-wW1s_r31OUzG7HZM04S39kHkFVY",
     authDomain: "stack-clone-with-reactjs.firebaseapp.com",
     projectId: "stack-clone-with-reactjs",
     storageBucket: "stack-clone-with-reactjs.appspot.com",
     messagingSenderId: "689729223652",
     appId: "1:689729223652:web:1ee5e02576e248f9e8e5f1",
     measurementId: "G-X0JC6CGBHS"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();

export { db, provider, auth };

