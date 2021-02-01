import firebase from 'firebase';
const firebaseConfig = {
  apiKey: "AIzaSyAUuteNrXty_kNjAk7J47tQ1uUonh4KLgA",
  authDomain: "todo-list-7ac3a.firebaseapp.com",
  databaseURL: "https://todo-list-7ac3a.firebaseio.com/",
  projectId: "todo-list-7ac3a",
  storageBucket: "todo-list-7ac3a.appspot.com",
  messagingSenderId: "507382945595",
  appId: "1:507382945595:web:c3294f528d90b99903091e",
  measurementId: "G-VRJ77ERYZB"
};
firebase.initializeApp(firebaseConfig)
export const db = firebase.firestore()