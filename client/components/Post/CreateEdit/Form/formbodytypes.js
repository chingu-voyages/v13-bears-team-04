import React from "react";
import clsx from "clsx";
import FAIcon from "../../../FAIcon";
import { usePost } from "../../postcontext";

const baseCX = "submit__form__body__types__btn";
const types = [
  { icon: "keyboard", text: "Post", postType: "text" },
  { icon: "image", text: "Image & Video", postType: "file", disabled: true },
  { icon: "link", text: "Link", postType: "link", disabled: true },
];

export default function SubmitFormBodyTypes() {
  const { state, postDispatch } = usePost();

  return (
    <div className="submit__form__body__types">
      {types.map(({ icon, text, postType, disabled }) => (
        <button
          key={text}
          type="button"
          className={clsx(
            baseCX,
            state.postType === postType && `${baseCX}--active`,
            disabled && `${baseCX}--disabled`
          )}
          onClick={() => {
            if (disabled) return;
            postDispatch({ type: "SET_TYPE", postType });
          }}
        >
          <FAIcon
            icon={icon}
            className="submit__form__body__types__btn__icon"
          />
          {text}
        </button>
      ))}
    </div>
  );
}
