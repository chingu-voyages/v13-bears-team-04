import React from "react";
import Select, { components } from "react-select";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

// used to edit the option boxes of these two components
const { Option, ValueContainer } = components;

const options = {
  loggedIn: [
    {
      label: "My Stuff",
      options: [
        { value: "/profile", label: "My Profile", icon: "portrait" },
        { value: "/usersettings", label: "User Settings", icon: "cog" },
      ],
    },
    {
      label: "View Options",
      options: [{ value: "/nightmode", label: "Night Mode", icon: "moon" }],
    },
    {
      label: "More Stuff",
      options: [
        { value: "/coins", label: "Reddit Coins", icon: "donate" },
        { value: "/premium", label: "Reddit Premium", icon: "shield-alt" },
        { value: "/helpcenter", label: "Help Center", icon: "question-circle" },
        { value: "/reddit", label: "Visit Real Reddit", icon: "sign-out-alt" },
        { value: "/signup", label: "Log In / Sign Up", icon: "sign-out-alt" },
      ],
    },
  ],
  notLoggedIn: [
    {
      label: "View Options",
      options: [{ value: "/nightmode", label: "Night Mode", icon: "moon" }],
    },
    {
      label: "More Stuff",
      options: [
        { value: "/coins", label: "Reddit Coins", icon: "donate" },
        { value: "/premium", label: "Reddit Premium", icon: "shield-alt" },
        { value: "/helpcenter", label: "Help Center", icon: "question-circle" },
        {
          value: "/signup",
          label: "Log In / Sign Up",
          icon: "sign-out-alt",
        },
      ],
    },
  ],
};

const styles = {
  control: provided => ({
    ...provided,
    width: "100px",
  }),
  indicatorSeparator: () => ({}),
  option: () => ({}),
  group: provided => ({ ...provided, padding: "4px 0" }),
  groupHeading: () => ({
    fontSize: "1rem",
    fontWeight: 700,
    letterSpacing: ".5px",
    lineHeight: "1.2rem",
    textTransform: "uppercase",
    color: "#878A8C",
    margin: "8px 0 4px 12px",
  }),
};

const CustomOption = ({ data, ...props }) => {
  const { icon, label, value } = data;
  return (
    <Option {...props}>
      <Link href={value}>
        <a className="nav__item__drop__option">
          <FontAwesomeIcon
            className="nav__item__drop__option__icon"
            icon={icon}
          />
          <h2 className="nav__item__drop__option__label">{label}</h2>
        </a>
      </Link>
    </Option>
  );
};

const CustomValue = props => {
  return (
    <ValueContainer className="nav__item__drop__value" {...props}>
      <FontAwesomeIcon icon="user" />
    </ValueContainer>
  );
};

export default function NavDrop() {
  return (
    <Select
      className="nav__item__drop"
      defaultMenuIsOpen
      // defaultValue={options}
      options={options.notLoggedIn}
      components={{ Option: CustomOption, ValueContainer: CustomValue }}
      // components={{ Option: CustomOption }}
      instanceId="NavDrop"
      isSearchable={false}
      styles={styles}
    />
  );
}
