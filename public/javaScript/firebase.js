const firebaseConfig = {
    apiKey: "AIzaSyBMKsrNHl9g6_-e_yMpA0eSkrlqflATDfw",
    authDomain: "whatsamail-c9fed.firebaseapp.com",
    projectId: "whatsamail-c9fed",
    storageBucket: "whatsamail-c9fed.appspot.com",
    messagingSenderId: "891033024673",
    appId: "1:891033024673:web:95437cb33a74a9fd4698e0",
    measurementId: "G-Z1MDL4BYK8"
  };

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
console.log(firebase.auth().signInWithEmailAndPassword);   