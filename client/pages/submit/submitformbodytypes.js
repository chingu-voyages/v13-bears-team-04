import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const types = [
  { icon: "keyboard", text: "Post" },
  { icon: "image", text: "Image & Video" },
  { icon: "link", text: "Link" },
];

const SubmitFormBodyTypes = () => (
  <div className="submit__form__body__types">
    {types.map(({ icon, text }) => (
      <button
        key={text}
        type="button"
        className="submit__form__body__types__btn"
      >
        <FontAwesomeIcon
          icon={icon}
          className="submit__form__body__types__btn__icon"
        />
        {text}
      </button>
    ))}
  </div>
);

export default SubmitFormBodyTypes;
