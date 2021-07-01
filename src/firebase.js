import firebase  from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCu4gZOyw4rbTqaUUR1cg922XZAc4HKFL0",
    authDomain: "todo-app-e9368.firebaseapp.com",
    projectId: "todo-app-e9368",
    storageBucket: "todo-app-e9368.appspot.com",
    messagingSenderId: "843696785046",
    appId: "1:843696785046:web:ae18f232139b6dec43a4b7",
    measurementId: "G-EZ9MYT3MQS"
});

const db = firebaseApp.firestore();

export default db ;