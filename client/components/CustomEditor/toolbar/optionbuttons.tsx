import React from "react";
import clsx from "clsx";
import FAIcon from "../../FAIcon";
import { useSlate } from "slate-react";

export const BlockButton = ({ format, icon }) => {
  const editor = useSlate();
  return (
    <ToolbarOptsBtn
      icon={icon}
      isActive={isMarkActive(editor, format)}
      handleClick={e => {
        e.preventDefault();
        toggleMark(editor, format);
      }}
    />
  );
};

export const MarkButton = ({ format, icon }) => {
  const editor = useSlate();
  return (
    <ToolbarOptsBtn
      icon={icon}
      isActive={isBlockActive(editor, format)}
      handleClick={e => {
        e.preventDefault();
        toggleBlock(editor, format);
      }}
    />
  );
};

const ToolbarOptsBtn = ({ handleClick, icon, isActive }) => (
  <button
    className={clsx("editor__toolbar__options__item", {
      editor__toolbar__options__item__active: isActive,
    })}
    onClick={handleClick}
  >
    <FAIcon icon={icon} className="editor__toolbar__options__item__icon" />
  </button>
);
