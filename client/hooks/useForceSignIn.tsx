import { useState, useEffect } from "react";
import Router from "next/router";
import { useAuthPopup } from "../contexts/authpopup";
import { useUser } from "../contexts/user";

export default function useForceSignIn(maxCount = 3) {
  const { user } = useUser();
  const { authPopupName, setAuthPopup } = useAuthPopup();

  // used to redirect user if they have donkey brains
  const [timesClosed, setTimesClosed] = useState(0);

  // used to force user to log in and redirect them if they don't
  useEffect(() => {
    let id: number | undefined;
    // if the user isn't logged in, show the popup
    // if they close the popup, show it again
    if (!user && !authPopupName) {
      // if the user closes the popup 3 times, send them back to the homepage
      if (timesClosed === maxCount) {
        setAuthPopup("");
        Router.push("/");
      } else {
        id = window.setTimeout(() => {
          setTimesClosed(state => state + 1);
          setAuthPopup("signup");
        }, 750);
      }
    }
    return () => clearTimeout(id);
  }, [authPopupName, user, maxCount]);
}
