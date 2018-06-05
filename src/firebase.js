import firebase from 'firebase';
// Initialize Firebase
var config = {
    apiKey: "AIzaSyABstlEJG6y5TcloUK-uo8pdOwHxeSGKiE",
    authDomain: "giks-firebase.firebaseapp.com",
    databaseURL: "https://giks-firebase.firebaseio.com",
    projectId: "giks-firebase",
    storageBucket: "giks-firebase.appspot.com",
    messagingSenderId: "170519704837"
};
firebase.initializeApp(config);

const databaseRef = firebase.database().ref();
const notesRef = databaseRef.child("");

export default config;
