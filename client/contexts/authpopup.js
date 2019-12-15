import React, { useState, createContext, useContext } from "react";
import AuthFormPopup from "../components/AuthForms";

const AuthPopupContext = createContext();

export const AuthPopupProvider = ({ children }) => {
  // const [[showAuthPopup, authPopupName], setAuthPopup] = useState([false, ""]);
  const [[showAuthPopup, authPopupName], setAuthPopup] = useState([
    true,
    "signin",
  ]);

  return (
    <AuthPopupContext.Provider value={setAuthPopup}>
      <AuthFormPopup
        showAuthPopup={showAuthPopup}
        authPopupName={authPopupName}
        setAuthPopup={setAuthPopup}
      />
      {children}
    </AuthPopupContext.Provider>
  );
};

export const useAuthPopup = () => useContext(AuthPopupContext);
