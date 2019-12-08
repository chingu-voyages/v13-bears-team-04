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
    <div className="row">
      <div className="to_top_container">
        {/* eslint-disable-next-line react/button-has-type */}
        <Button>
          <button className="to_top_button" onClick={scrollToTop}>
            Scroll To Top
          </button>
        </Button>
      </div>
    </div>
  );
}
