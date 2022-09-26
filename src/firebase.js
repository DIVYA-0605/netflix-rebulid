import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAFGZzqAdR6pEG7-BW3UJqVCNYyXB2rDtI",
  authDomain: "netflix-63c64.firebaseapp.com",
  projectId: "netflix-63c64",
  storageBucket: "netflix-63c64.appspot.com",
  messagingSenderId: "804485252115",
  appId: "1:804485252115:web:b9eb141fd0426b2bee6be6"
};

const firebaseAdmin = firebase.initializeApp(firebaseConfig);
const db = firebaseAdmin.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, db, provider };
