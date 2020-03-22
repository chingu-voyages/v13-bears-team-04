import React, { useState, useEffect } from "react";
import Cookies from "js-cookie";
import FAIcon from "../FAIcon";

export default function Notification() {
  const cookieValue = Cookies.get("notification-box");

  const [isVisible, setIsVisible] = useState(cookieValue !== "hide");

  function handleClose() {
    Cookies.set("notification-box", "hide", { expires: 365 });
    setIsVisible(false);
  }

  useEffect(() => {
    const id = setTimeout(() => setIsVisible(false), 7000);
    return () => clearTimeout(id);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="notification">
      <FAIcon
        icon="times"
        color="white"
        className="notification__close"
        onClick={handleClose}
      />

      <h3 className="notification__heading">
        Thanks for visiting our Reddit Clone!
      </h3>

      <a
        className="btn btn--tight btn--orange"
        href="https://github.com/chingu-voyages/v13-bears-team-04"
        target="_blank"
        rel="noopener noreferrer"
      >
        View Source Code
      </a>
    </div>
  );
}
