import firebase from "@firebase/app";
import "@firebase/auth";
import "@firebase/firestore";
import "@firebase/storage";


if (!firebase.apps.length) {
  firebase.initializeApp({
    apiKey: "AIzaSyCPwG3RZIX3t3H580kcgzXOGoqlKVF9mrI",
    authDomain: "mypets-f611f.firebaseapp.com",
    projectId: "mypets-f611f",
    storageBucket: "mypets-f611f.appspot.com",
    messagingSenderId: "878641403432",
    appId: "1:878641403432:web:68e5f01842e17449a7071d"
  });
}

export const auth = firebase.auth()
export const db = firebase.firestore()

export const googleProvider = new firebase.auth.GoogleAuthProvider();
