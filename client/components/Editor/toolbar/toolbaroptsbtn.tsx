import React from "react";
import clsx from "clsx";
import FAIcon from "../../FAIcon";

type Props = {
  handleClick: (e: any) => void;
  icon: string | string[];
  isActive: boolean;
};

const iconCX = "editor__toolbar__options__item__icon";

const ToolbarOptsBtn = ({ handleClick, icon, isActive }: Props) => (
  <button
    className={clsx("editor__toolbar__options__item", {
      editor__toolbar__options__item__active: isActive,
    })}
    onMouseDown={handleClick}
  >
    {typeof icon === "string" ? (
      <FAIcon icon={icon} className={iconCX} />
    ) : (
      <span className="editor__toolbar__options__item__multi-icon">
        <FAIcon icon={icon[0]} className={iconCX} />
        <FAIcon icon={icon[1]} className={iconCX} />
      </span>
    )}
  </button>
);

export default ToolbarOptsBtn;
