// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyBC4b-fyaikVJsS94SlFm45V6TybEUSfXw",
  authDomain: "sable-client-project-61725.firebaseapp.com",
  projectId: "sable-client-project-61725",
  storageBucket: "sable-client-project-61725.appspot.com",
  messagingSenderId: "668432328190",
  appId: "1:668432328190:web:811c7f1142db70e0954caf",
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
