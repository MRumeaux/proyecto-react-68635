import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBCSw4PtfLum7j7b4UXdBlHwhgpceaJN-I",
    authDomain: "coderhouse-react-js-68365.firebaseapp.com",
    projectId: "coderhouse-react-js-68365",
    storageBucket: "coderhouse-react-js-68365.firebasestorage.app",
    messagingSenderId: "627832204935",
    appId: "1:627832204935:web:ac2f89d3a0fc03fc535222"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);