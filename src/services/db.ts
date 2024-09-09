import {
  collection,
  deleteDoc,
  doc,
  getDocs,
  getFirestore,
  setDoc,
  updateDoc,
} from "firebase/firestore/lite";
import { app } from "./app";
import { USER } from "@/contant";

export const db = getFirestore(app);

export const getUsers = async () => {
  const colRef = collection(db, USER);
  return (await getDocs(colRef)).docs;
};

export const addUser = (id: string, user: string) => {
  const docRef = doc(db, USER, id);
  return setDoc(docRef, {
    user: user,
    timestamp: Date.now(),
    utimesamp: Date.now(),
  });
};

export const deleteUser = (id: string) => {
  const docRef = doc(db, USER, id);
  return deleteDoc(docRef);
};
