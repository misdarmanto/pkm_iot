import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBX6N-6QGB4M3kQgbiis6Eg-yvwCnRl0qM",
  authDomain: "pkm-iot.firebaseapp.com",
  databaseURL:
    "https://pkm-iot-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "pkm-iot",
  storageBucket: "pkm-iot.appspot.com",
  messagingSenderId: "1059999945094",
  appId: "1:1059999945094:web:c9705176574f3b5b121c07",
};

const app = initializeApp(firebaseConfig);
const firebaseStorage = getStorage(app);
const firebaseAuth = getAuth(app);
const firebaseFireStore = getFirestore(app);
export const firebaseDataBase = getDatabase(app);

export const CONFIGS = {
  firebaseStorage,
  firebaseAuth,
  firebaseFireStore,
  firebaseDataBase,
};
