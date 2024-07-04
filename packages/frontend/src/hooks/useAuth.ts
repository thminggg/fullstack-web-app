import { User, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { useFirebaseContext } from "../containers/Firebase/FirebaseProvider";

export type AuthState = {
  isSignedIn: boolean;
  pending: boolean;
  user: User | null;
};

export const useAuth = () => {
  const { firebaseAuth } = useFirebaseContext();
  const [authState, setAuthState] = useState<AuthState>({
    isSignedIn: false,
    pending: true,
    user: null,
  });

  useEffect(() => {
    if (firebaseAuth) {
      const unregisterAuthObserver = onAuthStateChanged(firebaseAuth, (user) =>
        setAuthState({ user, pending: false, isSignedIn: !!user })
      );
      return () => unregisterAuthObserver();
    }
  }, [firebaseAuth]);

  return { ...authState };
};
