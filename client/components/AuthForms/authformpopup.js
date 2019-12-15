import React from "react";
import SignIn from "./signin";
import SignUp from "./signup";
import ForgotPassword from "./forgotpassword";
import ForgotUsername from "./forgotusername";
import AuthFormCloseIcon from "./authformcloseicon";
import "./authforms.scss";

export default function AuthFormPopup(props) {
  const { showAuthPopup, authPopupName, setAuthPopup } = props;

  const closePopup = () => setAuthPopup([false, ""]);

  const visibility = showAuthPopup ? "visible" : "hidden";

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
        <AuthFormCloseIcon closePopup={closePopup} />
      </div>
    </div>
  );
}
