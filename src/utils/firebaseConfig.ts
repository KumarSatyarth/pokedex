import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore, collection } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA-YdToGwjxU8M2OACENx6_7bBKPqpms-A",
  authDomain: "pokedex-web-app-124dd.firebaseapp.com",
  projectId: "pokedex-web-app-124dd",
  storageBucket: "pokedex-web-app-124dd.appspot.com",
  messagingSenderId: "435549392001",
  appId: "1:435549392001:web:8094127fc2f469a21b9180",
  measurementId: "G-Q5B5BY8CQD"
};

const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);
export const firebaseDB = getFirestore(app);

export const usersRef = collection(firebaseDB, "users");
export const pokemonListRef = collection(firebaseDB, "pokemonList");
