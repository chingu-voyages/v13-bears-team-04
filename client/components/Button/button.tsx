import React from "react";
import clsx from "clsx";
import ButtonWithIcon from "./buttonwithicon";
import ButtonWithLink from "./buttonwithlink";

type Props = {
  type?: "button" | "submit";
  text: string;
  icon?: string;
  color?: "blue" | "orange";
  inverted?: boolean;
  size?: "tight" | "normal";
  href?: string;
  handleClick?: (e: {}) => void;
  cx?: string;
  as?: string;
};

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
  as,
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
      <ButtonWithLink href={href} as={as} className={className}>
        {icon ? <ButtonWithIcon icon={icon} text={text} /> : text}
      </ButtonWithLink>
    );
  }

  // RETURNS AN ACTUAL BUTTON
  return (
    // eslint-disable-next-line react/button-has-type
    <button type={type} className={className} onClick={handleClick}>
      {icon ? <ButtonWithIcon icon={icon} text={text} /> : text}
    </button>
  );
};

// DEFAULT PROPS
Button.defaultProps = {
  type: "button", // String - (button, submit)
  color: "blue", // String - (blue, orange)
  inverted: false, // Boolean
  size: "normal", // String - (tight, normal)
  icon: "", // String - Font-Awesome Icon name - ex)plus * remember to load your icons too *
  text: "Bueller?", // String
  href: "", // String - use if you're linking your another page
  handleClick: () => console.log("Bueller? Bueller?"), // Function - use if you want to do something on click
  cx: "", // String - extra className
  as: "", // String - used for dynamic routing
};

export default Button;
