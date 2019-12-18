import React, { useState, createContext, useContext } from "react";
import AuthFormPopup from "../components/AuthForms";

const AuthPopupContext = createContext();

export const AuthPopupProvider = ({ children }) => {
  const [authPopupName, setAuthPopup] = useState("");

  return (
    <AuthPopupContext.Provider value={{ setAuthPopup, authPopupName }}>
      <AuthFormPopup />
      {children}
    </AuthPopupContext.Provider>
  );
};

export const useAuthPopup = () => useContext(AuthPopupContext);
