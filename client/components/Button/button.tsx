import React from "react";
import clsx from "clsx";
import ButtonWithIcon from "./buttonwithicon";
import ButtonWithLink from "./buttonwithlink";
import "./button.scss";

interface Props {
  type?: "button" | "submit";
  text: string;
  icon?: string;
  color?: "blue" | "orange";
  inverted?: boolean;
  size?: "tight" | "normal";
  href?: string;
  handleClick?: (e: {}) => void;
  cx?: string;
}

const Button: React.FC<Props> = ({
  type,
  text,
  icon,
  color,
  inverted,
  size,
  href,
  handleClick,
  cx,
}) => {
  const className = clsx(
    "btn",
    `btn--${color}${inverted ? "--inverted" : ""}`,
    `btn--${size}`,
    cx
  );

  // RETURNS A NEXT LINK
  if (href) {
    return (
      <ButtonWithLink href={href} className={className}>
        {icon ? <ButtonWithIcon icon={icon} text={text} /> : text}
      </ButtonWithLink>
    );
  }

  // RETURNS AN ACTUAL BUTTON
  return (
    <button type={type} className={className} onClick={handleClick}>
      {icon ? <ButtonWithIcon icon={icon} text={text} /> : text}
    </button>
  );
};

// DEFAULT PROPS
Button.defaultProps = {
  // String - (button, submit)
  type: "button",
  // String - (blue, orange)
  color: "blue",
  // Boolean
  inverted: false,
  // String - (tight, normal)
  size: "normal",
  // String - Font-Awesome Icon name - ex)plus
  // * remember to load your icons too * //
  icon: "",
  // String
  text: "Bueller?",
  // String - use if you're linking your another page
  href: "",
  // Function - use if you want to do something on click
  handleClick: () => console.log("Bueller? Bueller?"),
  // String - extra className
  cx: "",
};

export default Button;
