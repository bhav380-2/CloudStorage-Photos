import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
    apiKey: "AIzaSyBc2Hqh6A1IxAhI4c3cnCPwp59QUvMrosE",
    authDomain: "photofolio-953fc.firebaseapp.com",
    projectId: "photofolio-953fc",
    storageBucket: "photofolio-953fc.appspot.com",
    messagingSenderId: "382939895992",
    appId: "1:382939895992:web:1e777f412e575bce4afc4d"
  };
  

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
