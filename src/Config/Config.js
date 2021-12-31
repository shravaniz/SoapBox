import firebase from 'firebase'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyC6x52GM6yXQQIHGAQTuzBhhpzWEIu8bR4",
    authDomain: "ecommerce-app-13feb.firebaseapp.com",
    projectId: "ecommerce-app-13feb",
    storageBucket: "ecommerce-app-13feb.appspot.com",
    messagingSenderId: "343886055877",
    appId: "1:343886055877:web:4161166f8fa92bdda023ac",
    measurementId: "G-NXS1EJ2MTG"
  };
  firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const fs = firebase.firestore();
const storage = firebase.storage();

export {auth,fs,storage}