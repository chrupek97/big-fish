import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage"

const firebaseConfig = {
  apiKey: "AIzaSyB7by5UHbWpBtwAAXpdSOIlkMXlGE44Pds",
  authDomain: "big-fish-79423.firebaseapp.com",
  databaseURL: "https://big-fish-79423-default-rtdb.firebaseio.com",
  projectId: "big-fish-79423",
  storageBucket: "big-fish-79423.appspot.com",
  messagingSenderId: "89806992232",
  appId: "1:89806992232:web:0e4554cbc080da4df8dcdd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

export default { storage }
