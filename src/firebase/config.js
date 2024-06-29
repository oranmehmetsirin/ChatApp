import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyALfdALZ4aCyM0ug7nA1kTC6MtVjIGeNok",
  authDomain: "chat-11263.firebaseapp.com",
  projectId: "chat-11263",
  storageBucket: "chat-11263.appspot.com",
  messagingSenderId: "50810609408",
  appId: "1:50810609408:web:287e3c0203c88218ea5de5",
};
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
