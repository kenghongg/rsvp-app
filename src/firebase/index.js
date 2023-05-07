// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBYM7LLBtv_W2eZstrB-tOv6Rq06m2FWb4",
  authDomain: "rsvp-e-invite.firebaseapp.com",
  databaseURL: "https://rsvp-e-invite-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "rsvp-e-invite",
  storageBucket: "rsvp-e-invite.appspot.com",
  messagingSenderId: "792494617812",
  appId: "1:792494617812:web:af6fdf73f27a42f2033741",
  measurementId: "G-2PRD07C40M"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// init firestore
const db = getFirestore(app);
export default db
