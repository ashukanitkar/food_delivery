import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

var firebaseConfig = {
    apiKey: "AIzaSyBB8YD0iFUH2gKL_Bh-4XyWwfCSL2dbdXQ",
    authDomain: "ak-food-delivery.firebaseapp.com",
    projectId: "ak-food-delivery",
    storageBucket: "ak-food-delivery.appspot.com",
    messagingSenderId: "122580273394",
    appId: "1:122580273394:web:16f8cd1428de310a7da86b"
  };

  firebase.initializeApp(firebaseConfig);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();
  export const provider = firebase.auth.EmailAuthProvider.PROVIDER_ID;
