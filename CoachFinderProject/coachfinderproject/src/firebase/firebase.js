import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
const firebaseConfig = {
  // apiKey: process.env.API_KEY,
  // authDomain: process.env.Auth_Domain,
  // databaseURL: process.env.Database_URL,
  // projectId: process.env.PROJECT_ID,
  // storageBucket: process.env.STORAGEBUCKET,
  // messagingSenderId: process.env.MESSAGINGUSERID,
  // appId: process.env.APPID,
  // measurementId: process.env.MESSAGINGUSERID
   apiKey: "AIzaSyDMiuZZ5QVMK2_d7DhkN7vJITZ5eKlICJQ",
  authDomain: "coachfinerapplication.firebaseapp.com",
  databaseURL: "https://coachfinerapplication-default-rtdb.firebaseio.com",
  projectId: "coachfinerapplication",
  storageBucket: "coachfinerapplication.appspot.com",
  messagingSenderId: "910611391791",
  appId: "1:910611391791:web:29db91d5d6a3716355edda",
  measurementId: "G-PBZL1P3E0Z"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export {auth}