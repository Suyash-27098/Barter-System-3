import firebase from 'firebase';
require('@firebase/firestore')

const firebaseConfig = {
    apiKey: "AIzaSyDojMy7wPWHv3G45g6Dk7D62BCIaeftuQ4",
    authDomain: "barter-system-79e46.firebaseapp.com",
    databaseURL: "https//:barter-system-79e46.firebaseio.com",
    projectId: "barter-system-79e46",
    storageBucket: "barter-system-79e46.appspot.com",
    messagingSenderId: "529854077252",
    appId: "1:529854077252:web:94492a6b947514ed2fdf11",
    measurementId: "G-WJ3VHRG1W9"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

export default firebase.firestore();