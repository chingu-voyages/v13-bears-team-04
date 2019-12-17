import React from "react";
import Button from "../Button";
import { useAuthPopup } from "../../contexts/authpopup";
import { useUser } from "../../contexts/user";
import NavQuickLinksLink from "./navquicklinkslink";

export default function NavAuth() {
  const { user } = useUser();
  const { setAuthPopup } = useAuthPopup();

  return user ? (
    <div className="nav__item__quicklinks">
      <NavQuickLinksLink
        href="/chat"
        title="Chat"
        icon="comment-dots"
        color="orange"
      />
      <NavQuickLinksLink
        href="/message/inbox"
        title="Messages"
        icon="envelope"
      />
      <NavQuickLinksLink
        href="/submit"
        title="Create Post"
        icon="pen"
        color="blue"
      />
    </div>
  ) : (
    <div className="nav__item__auth">
      <Button
        cx="nav__item__auth__btn"
        handleClick={() => setAuthPopup("signin")}
        inverted
        text="log in"
      />
      <Button
        cx="nav__item__auth__btn"
        handleClick={() => setAuthPopup("signup")}
        text="sign up"
      />
    </div>
  );
}
