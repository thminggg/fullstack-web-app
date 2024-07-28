import { Auth } from "firebase/auth";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebaseui/dist/firebaseui.css";
import { useFirebaseContext } from "../../containers/Firebase/FirebaseProvider";
import { createUsers } from "../../graphql/mutations/createUsers";
import StyledFirebaseAuth from "../StyledFirebaseAuth/StyledFirebaseAuth";

const LoginModal = () => {
  const { firebaseAuth } = useFirebaseContext() as { firebaseAuth: Auth };

  // Configure FirebaseUI.
  const uiConfig = {
    signInFlow: "popup",
    signInOptions: [firebase.auth.GoogleAuthProvider.PROVIDER_ID],
    callbacks: {
      signInSuccessWithAuthResult: (authResult: any) => {
        const { user, additionalUserInfo } = authResult;

        // IMPROVE: Have a Kafka queue to ensure user record written to DB
        if (additionalUserInfo.isNewUser) {
          // Add new user to DB
          createUsers([
            {
              email: user.email,
              username: user.displayName,
            },
          ])
            .then((response) => {
              const { errors, data } = response;
              if (errors) throw new Error(JSON.stringify(errors));

              console.log("Created Users: ", data);
            })
            .catch((error) => {
              console.error(`Error create users: ${error}`);
            });
        }

        // Avoid redirects after sign-in.
        return false;
      },
    },
  };

  return <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebaseAuth} />;
};

export default LoginModal;
