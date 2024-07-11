import { User as DBUser } from "@thminggg/db";
import { User, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { useFirebaseContext } from "../containers/Firebase/FirebaseProvider";
import { GET_USER_STR } from "../graphql/queries/getUser";
import { callApollo } from "../utils/request";

export type AuthState = {
  isSignedIn: boolean;
  pending: boolean;
  user: (User & DBUser) | null;
};

/**
 * Get user data from database and callback to set state
 * @param {object} obj
 * @param {string} obj.email User email
 * @param {User} obj.user User object from the Firebase
 * @param {function} obj.cb Callback function (i.e. setAuthState)
 */
const getUserData = async ({
  email,
  user,
  cb,
}: {
  email: string;
  user?: User;
  cb: Function;
}) => {
  const { data: _user } = await callApollo({
    query: GET_USER_STR,
    variables: { email },
  });

  cb({ user: { ...user, ..._user?.user }, pending: false, isSignedIn: !!user });
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
      const unregisterAuthObserver = onAuthStateChanged(
        firebaseAuth,
        (user) => {
          // No user
          if (!user) {
            return setAuthState({ user, pending: false, isSignedIn: !!user });
          }

          // Logged in user found, get data from database
          getUserData({
            email: user?.email || "",
            user: user || undefined,
            cb: setAuthState,
          });
        }
      );
      return () => unregisterAuthObserver();
    }
  }, [firebaseAuth]);

  return { ...authState };
};
