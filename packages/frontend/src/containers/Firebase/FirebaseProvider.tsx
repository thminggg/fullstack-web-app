import { Analytics, getAnalytics } from "firebase/analytics";
import { FirebaseApp, getApps, initializeApp } from "firebase/app";
import { Auth, User, getAuth } from "firebase/auth";
import { Firestore, getFirestore } from "firebase/firestore";
import React, { createContext, useContext } from "react";

export type FirebaseServices = {
  firebaseApp: FirebaseApp;
  firebaseAnalytics?: Analytics;
  firebaseAuth?: Auth;
  firebaseDB?: Firestore;
  currentUser?: User;
};

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
};

// Create a context
const FirebaseContext = createContext<FirebaseServices | null>(null);

// Initialize Firebase
const firebaseApp =
  getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];

// Firebase services
let firebaseAnalytics: Analytics | undefined;
let firebaseAuth: Auth | undefined;
let firebaseDB: Firestore | undefined;

export function FirebaseProvider({ children }: { children: React.ReactNode }) {
  if ((!firebaseAnalytics || !firebaseAuth) && typeof window !== "undefined") {
    firebaseAnalytics = getAnalytics(firebaseApp);
    firebaseAuth = getAuth(firebaseApp);
    firebaseDB = getFirestore(firebaseApp);
  }

  return (
    <FirebaseContext.Provider
      value={{
        firebaseApp,
        firebaseAnalytics,
        firebaseAuth,
        firebaseDB,
      }}
    >
      {children}
    </FirebaseContext.Provider>
  );
}

export function useFirebaseContext() {
  // _firebaseApp is coming from provider's value
  // Note: rename deconstructed firebaseApp to avoid confusion
  const {
    firebaseApp: _firebaseApp,
    firebaseAnalytics,
    firebaseAuth,
    firebaseDB,
  } = useContext(FirebaseContext) as FirebaseServices;

  return {
    firebaseApp: _firebaseApp,
    firebaseAnalytics,
    firebaseAuth,
    firebaseDB,
  };
}
