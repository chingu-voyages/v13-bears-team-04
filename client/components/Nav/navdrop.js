import React from "react";
import Select, { components } from "react-select";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import NavSelectOption from "./navselectoption";
import { useUser } from "../../contexts/user";
import { useAuthPopup } from "../../contexts/authpopup";

const { ValueContainer } = components;

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
        {
          value: "logout",
          label: "Log Out",
          icon: "sign-out-alt",
          actionable: true,
        },
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
          value: "signup",
          label: "Log In / Sign Up",
          icon: "sign-out-alt",
          actionable: true,
        },
      ],
    },
  ],
};

const styles = {
  container: provided => ({ ...provided, marginLeft: 8 }),
  control: (provided, { menuIsOpen }) => {
    const openStyles = menuIsOpen ? { border: "1px solid #EDEFF1" } : {};
    return {
      ...provided,
      width: 75,
      minHeight: 32,
      height: 32,
      borderColor: "transparent",
      ...openStyles,
      "&:hover": {
        border: "1px solid #EDEFF1",
      },
    };
  },
  dropdownIndicator: provided => ({
    ...provided,
    padding: 5,
    cursor: "pointer",
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
  menu: provided => ({
    ...provided,
    right: 0,
    width: 175,
    border: "1px solid #EDEFF1",
    boxShadow: "none",
  }),
};

const CustomValue = props => {
  return (
    <ValueContainer className="nav__item__drop__value" {...props}>
      <FontAwesomeIcon className="nav__item__drop__value__icon" icon="user" />
    </ValueContainer>
  );
};

export default function NavDrop() {
  const { isAuthenticated, logout } = useUser();
  const { setAuthPopup } = useAuthPopup();

  async function handleLogout() {
    const message = await logout();
    console.log(message);
  }

  const { loggedIn, notLoggedIn } = options;
  const opts = isAuthenticated ? loggedIn : notLoggedIn;
  return (
    <Select
      className="nav__item__drop"
      options={opts}
      components={{ Option: NavSelectOption, ValueContainer: CustomValue }}
      instanceId="NavDrop"
      isSearchable={false}
      styles={styles}
      classNamePrefix="drop"
      setAuthPopup={setAuthPopup}
      handleLogout={handleLogout}
    />
  );
}
