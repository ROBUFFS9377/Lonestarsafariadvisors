import { initializeApp } from "https://www.gstatic.com/firebasejs/12.11.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.11.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyDMZUOGgR2V27GRnyFL9QeJ6yDLLCnIniY",
  authDomain: "lonestarsafariadvisors.firebaseapp.com",
  projectId: "lonestarsafariadvisors",
  storageBucket: "lonestarsafariadvisors.firebasestorage.app",
  messagingSenderId: "838372790309",
  appId: "1:838372790309:web:6b2bd8939727637e19afcc",
  measurementId: "G-XXNDERT37C"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };