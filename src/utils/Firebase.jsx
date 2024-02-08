import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  collection,
  writeBatch,
  query,
  getDocs,
} from "firebase/firestore";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBX_3vulobAIQb7OWdHzQYa0-QCvXkh-3k",
  authDomain: "cloth-shop-3e0be.firebaseapp.com",
  projectId: "cloth-shop-3e0be",
  storageBucket: "cloth-shop-3e0be.appspot.com",
  messagingSenderId: "129128156071",
  appId: "1:129128156071:web:62a2604b89a654ceba4482",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const googleAuthProvider = new GoogleAuthProvider();
googleAuthProvider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const googleRedirectSignIn = () =>
  signInWithRedirect(auth, googleAuthProvider);

export const db = getFirestore();

/* Add collection and documents from local JS object
  One-time use
  Used to populate data
*/
export const addCollection = async (key, objects, field) => {
  const collectionRef = collection(db, key);
  const batch = writeBatch(db);
  objects.forEach((o) => {
    const documentRef = doc(collectionRef, o[field].toLowerCase());
    batch.set(documentRef, o);
  });
  await batch.commit();
};

export const getCategoriesMap = async () => {
  const collectionRef = collection(db, "categories");
  const q = query(collectionRef);
  const querySnapshot = await getDocs(q);
  const categoriesMap = querySnapshot.docs.reduce((acc, docSnapshot) => {
    const { title, items } = docSnapshot.data();
    acc[title.toLowerCase()] = items;
    return acc;
  }, {});
  return categoriesMap;
};

export const createAuthUserDoc = async (authUser, otherInfo = {}) => {
  if (!authUser) return;
  const userDocRef = doc(db, "users", authUser.uid);
  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    const { displayName, email } = authUser;
    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        created: new Date(),
        ...otherInfo,
      });
    } catch (e) {
      console.log(e);
    }
  }
  return userDocRef;
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await createUserWithEmailAndPassword(auth, email, password);
};

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await signInWithEmailAndPassword(auth, email, password);
};

export const signOutUser = async () => await signOut(auth);

export const onAuthStateChangedListener = (callback) =>
  onAuthStateChanged(auth, callback);
