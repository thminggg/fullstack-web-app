import { Auth, onAuthStateChanged } from "firebase/auth";
import * as firebaseui from "firebaseui";
import "firebaseui/dist/firebaseui.css";
import { useEffect } from "react";

const ELEMENT_ID = "firebaseui_container";

export default function StyledFirebaseAuth({
  uiConfig,
  firebaseAuth,
  className,
}: {
  uiConfig: firebaseui.auth.Config;
  firebaseAuth: Auth;
  className?: string;
}) {
  useEffect(() => {
    let userSignedIn = false;

    // Get or Create a firebaseUI instance.
    const firebaseUiWidget =
      firebaseui.auth.AuthUI.getInstance() ||
      new firebaseui.auth.AuthUI(firebaseAuth);

    if (uiConfig.signInFlow === "popup") firebaseUiWidget.reset();

    // We track the auth state to reset firebaseUi if the user signs out.
    const unregisterAuthObserver = onAuthStateChanged(firebaseAuth, (user) => {
      if (!user && userSignedIn) firebaseUiWidget.reset();
      userSignedIn = !!user;
    });

    // Render the firebaseUi Widget.
    firebaseUiWidget.start("#" + ELEMENT_ID, uiConfig);

    return () => {
      unregisterAuthObserver();
      firebaseUiWidget.reset();
    };
  }, [uiConfig, firebaseAuth]);

  return <div className={className} id={ELEMENT_ID} />;
}
