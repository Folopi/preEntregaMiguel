
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDXeCZ77wAiqlSybkVIVeAbEDUuneXTZyM",
  authDomain: "backend-70fbf.firebaseapp.com",
  projectId: "backend-70fbf",
  storageBucket: "backend-70fbf.appspot.com",
  messagingSenderId: "359345666704",
  appId: "1:359345666704:web:491d6d960955989db3f615"
};


const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)

