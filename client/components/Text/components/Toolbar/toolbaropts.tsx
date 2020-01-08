import React from "react";
import FAIcon from "../../../FAIcon";

const options = [
  { name: "bold", icon: "bold" },
  { name: "italic", icon: "italic" },
  { name: "link", icon: "link" },
  { name: "strike", icon: "strikethrough" },
  { name: "inlinecode", icon: "code" },
  { name: "superscript", icon: "superscript" },
  { name: "spoiler", icon: "exclamation-circle" },
  { name: "heading", icon: "heading" },
  { name: "bulleted-list", icon: "list-ul" },
  { name: "numbered-list", icon: "list-ol" },
  { name: "blockquote", icon: "quote-left" },
];

const ToolbarOpts = ({ handleClick = () => console.log("clicked") }) => (
  <div className="editor__toolbar__options">
    {options.map(({ name, icon }) => (
      <button
        key={name}
        className="editor__toolbar__options__item"
        onClick={handleClick}
      >
        <FAIcon icon={icon} className="editor__toolbar__options__item__icon" />
      </button>
    ))}
  </div>
);

export default ToolbarOpts;
