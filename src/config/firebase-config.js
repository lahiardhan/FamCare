import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDFg9SRILEiYSH4jTnodt07nH1-s3djeaA",
  authDomain: "forum-discussion-famcare.firebaseapp.com",
  projectId: "forum-discussion-famcare",
  storageBucket: "forum-discussion-famcare.appspot.com",
  messagingSenderId: "977377750523",
  appId: "1:977377750523:web:b8838f49821d66ecef2f5e",
  measurementId: "G-V3PG8LKFVQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);