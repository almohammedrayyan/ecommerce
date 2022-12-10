import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyCJR3DtfvqCvjwZPMwlpiKfs1qBM3SEA4M",
  authDomain: "react-app-4d81c.firebaseapp.com",
  projectId: "react-app-4d81c",
  storageBucket: "react-app-4d81c.appspot.com",
  messagingSenderId: "790826802177",
  appId: "1:790826802177:web:0beba34f8a7257ca2eb400",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth();
