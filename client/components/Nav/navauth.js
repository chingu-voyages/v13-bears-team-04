import React from "react";
import AuthButtons from "../AuthButtons";
import NavQuickLinksLink from "./navquicklinkslink";
import { useUser } from "../../contexts/user";

export default function NavAuth() {
  const { isAuthenticated } = useUser();

  return isAuthenticated ? (
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
      <AuthButtons cxBtn="nav__item__auth__btn" />
    </div>
  );
}
