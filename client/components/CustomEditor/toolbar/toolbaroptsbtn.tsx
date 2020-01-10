import React from "react";
import clsx from "clsx";
import FAIcon from "../../FAIcon";

type Props = {
  handleClick: (e: any) => void;
  icon: string;
  isActive: boolean;
};

const ToolbarOptsBtn = ({ handleClick, icon, isActive }: Props) => (
  <button
    className={clsx("editor__toolbar__options__item", {
      editor__toolbar__options__item__active: isActive,
    })}
    onMouseDown={handleClick}
  >
    <FAIcon icon={icon} className="editor__toolbar__options__item__icon" />
  </button>
);

export default ToolbarOptsBtn;
