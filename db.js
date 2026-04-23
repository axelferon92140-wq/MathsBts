import { getFirestore, doc, setDoc, getDoc, updateDoc } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";
import { app } from "./firebase.js";

const db = getFirestore(app);

export async function saveUser(uid, data){
  await setDoc(doc(db, "users", uid), data, { merge: true });
}

export async function getUser(uid){
  const snap = await getDoc(doc(db, "users", uid));
  return snap.exists() ? snap.data() : null;
}