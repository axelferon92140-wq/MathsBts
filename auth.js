import { getAuth, signInAnonymously } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { app } from "./firebase.js";

const auth = getAuth(app);

export async function login(){
  const user = await signInAnonymously(auth);
  return user.user.uid;
}