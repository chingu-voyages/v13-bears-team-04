import React from "react";
import clsx from "clsx";
import FAIcon from "../../../FAIcon";
import { useCreatePost } from "../../../../contexts/createpost";

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

export default function ToolbarOpts() {
  const { state, createPostDispatch } = useCreatePost();

  return (
    <div className="editor__toolbar__options">
      {options.map(({ name, icon }) => {
        const isActive = state.activeOptions.includes(name);
        const cx = clsx("editor__toolbar__options__item", {
          editor__toolbar__options__item__active: isActive,
        });
        return (
          <button
            key={name}
            className={cx}
            onClick={() =>
              createPostDispatch({
                type: isActive ? "DEACTIVATE_OPT" : "ACTIVATE_OPT",
                name,
              })
            }
          >
            <FAIcon
              icon={icon}
              className="editor__toolbar__options__item__icon"
            />
          </button>
        );
      })}
    </div>
  );
}
