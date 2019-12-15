import React, { useState, createContext, useContext } from "react";
import AuthFormPopup from "../components/AuthForms";

const AuthPopupContext = createContext();

export const AuthPopupProvider = ({ children }) => {
  const [[showAuthPopup, authPopupName], setAuthPopup] = useState([false, ""]);
  const state = { setAuthPopup, showAuthPopup, authPopupName };

  return (
    <AuthPopupContext.Provider value={state}>
      <AuthFormPopup />
      {children}
    </AuthPopupContext.Provider>
  );
};

export const useAuthPopup = () => useContext(AuthPopupContext);
