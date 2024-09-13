import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDdGWi_PzRTdI1NKgJiFBD8HbxIVZRaCyQ",
  authDomain: "clone-2ac0a.firebaseapp.com",
  projectId: "clone-2ac0a",
  storageBucket: "clone-2ac0a.appspot.com",
  messagingSenderId: "272952633261",
  appId: "1:272952633261:web:7cd6efa4fd4eb2f3cce324",
  measurementId: "G-F2ZQKJYL0X"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };