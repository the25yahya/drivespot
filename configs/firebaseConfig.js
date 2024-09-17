// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "drivespot-58e4f.firebaseapp.com",
  projectId: "drivespot-58e4f",
  storageBucket: "drivespot-58e4f.appspot.com",
  messagingSenderId: "337592045752",
  appId: "1:337592045752:web:ec26221f7077832c60644d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);