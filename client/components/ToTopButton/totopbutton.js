import React, { useState } from "react";
import Button from "../Button/button";
import "./totopbutton.scss";

export default function ToTopButton() {
  const [top, resetYPosition] = useState(0);

  function scrollToTop() {
    if (window.scrollY > 0) {
      window.scrollTo({
        top,
        behavior: "smooth",
      });
    }
  }

  return (
    <div>
      <Button>
        <button onClick={scrollToTop}>Scroll To Top</button>
      </Button>
    </div>
  );
}
