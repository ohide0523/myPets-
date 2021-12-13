import firebase from "@firebase/app";
import "@firebase/auth";
import "@firebase/firestore";

if (!firebase.apps.length) {
  firebase.initializeApp({
    apiKey: "AIzaSyC_SK0QajmwDJKMcce1wJ570V5cyTy-ZMg",
    authDomain: "mypets-743b3.firebaseapp.com",
    projectId: "mypets-743b3",
    storageBucket: "mypets-743b3.appspot.com",
    messagingSenderId: "772499991986",
    appId: "1:772499991986:web:368a75aad4379bc98808ab",
  });
}

export const auth = firebase.auth()
export const db = firebase.f
export const googleProvider = new firebase.auth.GoogleAuthProvider();
