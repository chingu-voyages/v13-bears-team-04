import React from "react";

const AuthFormCloseIcon = ({ closePopup }) => (
  <a
    role="button"
    className="form__close"
    onKeyPress={closePopup}
    onClick={closePopup}
    tabIndex={0}
  >
    &times;
  </a>
);

export default AuthFormCloseIcon;
