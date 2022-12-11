import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDcFsfG5BpBAud2t2H47I-UbGmn07SaH4M",
  authDomain: "famcare-620c7.firebaseapp.com",
  projectId: "famcare-620c7",
  storageBucket: "famcare-620c7.appspot.com",
  messagingSenderId: "125245577256",
  appId: "1:125245577256:web:2ca90d74906eaf2de93d1d",
  measurementId: "G-CCLNSR8BH7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
