import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";

export const firebaseConfig = {
  apiKey: "TA_CLE",
  authDomain: "TON_PROJET.firebaseapp.com",
  projectId: "TON_PROJET",
  storageBucket: "TON_PROJET.appspot.com",
  messagingSenderId: "XXXX",
  appId: "XXXX"
};

export const app = initializeApp(firebaseConfig);