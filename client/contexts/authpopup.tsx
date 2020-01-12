import React, { useState, createContext, useContext } from "react";
import AuthFormPopup from "../components/AuthForms";

type Action = "signin" | "signup" | "forgotpassword" | "forgotusername" | "";

type ProviderTypes = { children: React.ReactNode };

type ContextTypes = {
  authPopupName: "signin" | "signup" | "forgotpassword" | "forgotusername" | "";
  setAuthPopup: React.Dispatch<React.SetStateAction<Action>>;
};

const AuthPopupContext = createContext({} as ContextTypes);

export const AuthPopupProvider = ({ children }: ProviderTypes) => {
  const [authPopupName, setAuthPopup] = useState<Action>("");

  return (
    <AuthPopupContext.Provider value={{ setAuthPopup, authPopupName }}>
      <AuthFormPopup />
      {children}
    </AuthPopupContext.Provider>
  );
};

export const useAuthPopup = () => useContext(AuthPopupContext);
