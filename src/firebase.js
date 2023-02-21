// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API,
  authDomain: "sable-client-project.firebaseapp.com",
  projectId: "sable-client-project",
  storageBucket: "sable-client-project.appspot.com",
  messagingSenderId: "956077400948",
  appId: "1:956077400948:web:acd3e798220cd00c5b8221",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
