import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const api_key = import.meta.env.VITE_API_KEY;

const firebaseConfig = {
  apiKey: api_key,
  authDomain: "chat-slides-app.firebaseapp.com",
  projectId: "chat-slides-app",
  storageBucket: "chat-slides-app.firebasestorage.app",
  messagingSenderId: "139084533683",
  appId: "1:139084533683:web:dbd72d08a0ae452bfb45c6",
  measurementId: "G-VZPE9HH8S1"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export { db };
