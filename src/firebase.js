import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBELrk5Zd8LAyE2E3IEYlsoQSyXIti7A9M",
  authDomain: "tiktok-clone-1a36b.firebaseapp.com",
  projectId: "tiktok-clone-1a36b",
  storageBucket: "tiktok-clone-1a36b.appspot.com",
  messagingSenderId: "1074713862943",
  appId: "1:1074713862943:web:942c1635429960ce84462a",
  measurementId: "G-Y29374NHLW",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
