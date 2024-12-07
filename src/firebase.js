import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"; // Ensure you're importing getAuth for Firebase Authentication

const firebaseConfig = {
  apiKey: "AIzaSyBsLzUTga3jD7hNnH7SprHxmUCn5SeW4VQ",
  authDomain: "e-commerce-latest-3bf64.firebaseapp.com",
  projectId: "e-commerce-latest-3bf64",
  storageBucket: "e-commerce-latest-3bf64.firebasestorage.app",
  messagingSenderId: "229122076137",
  appId: "1:229122076137:web:a9d625fd896eb7df8cef78",
  measurementId: "G-LLZ5XXZFF0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize and export the auth instance for use in the rest of the app
export const auth = getAuth(app);
