import React, { useState, useEffect, useCallback } from "react";
import Button from "../Button";
import "./totopbutton.scss";

export default function ToTopButton() {
  const [showButton, setShowButton] = useState(false);

  const handleScroll = useCallback(() => setShowButton(window.scrollY), []);

  const scrollToTop = useCallback(() => window.scrollTo({ top: 0 }), []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    showButton && (
      <Button cx="totopbutton" text="Scroll To Top" handleClick={scrollToTop} />
    )
  );
}
