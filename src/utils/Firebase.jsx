import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

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
