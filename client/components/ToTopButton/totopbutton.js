import React, { useState } from "react";
import Button from "../Button/button";
import "./totopbutton.scss";

export default function ToTopButton() {
  const [top] = useState(0);

  function scrollToTop() {
    if (window.scrollY > 0) {
      window.scrollTo({
        top,
        behavior: "smooth",
      });
    }
  }

  return (
    <div className="row">
      <div className="totop--container">
        <Button
          text="Scroll To Top"
          color="blue"
          handleClick={scrollToTop}
        ></Button>
      </div>
    </div>
  );
}
