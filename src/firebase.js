import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCcIAsAmHljTDhWbbSBRmwfRTxGUk2Ekgo",
  authDomain: "instagram-clone-react-c6e7b.firebaseapp.com",
  projectId: "instagram-clone-react-c6e7b",
  storageBucket: "instagram-clone-react-c6e7b.appspot.com",
  messagingSenderId: "1065645913267",
  appId: "1:1065645913267:web:73ca7cc1432f119f63acc6",
  measurementId: "G-CLRZWKDE7C",
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };

// export default db;
