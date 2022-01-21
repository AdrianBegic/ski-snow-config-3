import * as firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyB6ItPdd5SdEG3pB9Sb-jRZlym_VmXM7Ts",

  authDomain: "ski-snow-config.firebaseapp.com",

  projectId: "ski-snow-config",

  storageBucket: "ski-snow-config.appspot.com",

  messagingSenderId: "950484586538",

  appId: "1:950484586538:web:4381a5d719ba06bf85b353",

  measurementId: "G-CZRL3L1M4E"



}

const firebaseApp = firebase.initializeApp(firebaseConfig);

export const db = firebaseApp.firestore();