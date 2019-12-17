import React from "react";

import SignIn from "./signin";
import SignUp from "./signup";
import ForgotPassword from "./forgotpassword";
import ForgotUsername from "./forgotusername";
import AuthFormLink from "./authformlink";

import { useAuthPopup } from "../../contexts/authpopup";
import "./authforms.scss";

export default function AuthFormPopup() {
  const { authPopupName, setAuthPopup } = useAuthPopup();

  const closePopup = () => setAuthPopup("");

  const visibility = authPopupName ? "visible" : "hidden";

  return (
    <div className="form__popup" style={{ visibility }}>
      <div className="form__content">
        <div className="form__left" />
        <div className="form__right">
          {authPopupName === "signin" && <SignIn />}
          {authPopupName === "signup" && <SignUp />}
          {authPopupName === "forgotpassword" && <ForgotPassword />}
          {authPopupName === "forgotusername" && <ForgotUsername />}
        </div>
        <AuthFormLink
          handleClick={closePopup}
          text="&times;"
          cx="form__close"
        />
      </div>
    </div>
  );
}
