import { initializeApp } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  User,
} from "firebase/auth";
import { doc, getDoc, getFirestore, setDoc } from "firebase/firestore";
import { NextOrObserver } from "@firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBCUjPa4ABJ7e9Il_b54rs9wYW-pC9brC0",
  authDomain: "crwn-clothing-db-a3294.firebaseapp.com",
  databaseURL:
    "https://crwn-clothing-db-a3294-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "crwn-clothing-db-a3294",
  storageBucket: "crwn-clothing-db-a3294.appspot.com",
  messagingSenderId: "251143515377",
  appId: "1:251143515377:web:06951f015b6a62ff748d50",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
console.log(app);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();
export const createUserDocumentFromAuth = async (
  userAuth: User,
  additionalInformation = {},
) => {
  if (!userAuth) return;

  const userDocRef = doc(db, "users", userAuth.uid);

  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInformation,
      });
    } catch (error) {
      if (typeof error === "object" && error !== null && "code" in error) {
        const errorCode = (error as { code: string }).code;
        if (errorCode === "auth/email-already-in-use") {
          alert("Email is already in use");
        } else {
          console.log(error);
        }
      } else {
        console.log("An unexpected error occurred", error);
      }
    }
  }

  return userDocRef;
};

export const createAuthUserWithEmailAndPassword = async (
  email: string,
  password: string,
) => {
  if (!email || !password)
    throw new Error("Email and password must be provided");
  return await createUserWithEmailAndPassword(auth, email, password);
};

export const signInAuthUserWithEmailAndPassword = async (
  email: string,
  password: string,
) => {
  if (!email || !password)
    throw new Error("Email and password must be provided");
  return await signInWithEmailAndPassword(auth, email, password);
};

export const signOutUser = async () => await signOut(auth);

export const onAuthStateChangedListener = (callback: NextOrObserver<User>) =>
  onAuthStateChanged(auth, callback);
