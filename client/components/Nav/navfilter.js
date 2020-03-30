import React from "react";
import { useRouter } from "next/router";
import Select, { components } from "react-select";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import NavSelectOption from "./navselectoption";
// import { useUser } from "../../contexts/user";

const { ValueContainer } = components;

// options used when user isn't logged in
const options = [
  {
    label: "Reddit Feeds",
    options: [
      { value: "/", label: "Popular", icon: "chart-line" },
      { value: "/", label: "All", icon: "poll" },
      { value: "/", label: "Top Communities", icon: "list-ol" },
    ],
  },
  {
    label: "Other",
    options: [
      { value: "/", label: "Coins", icon: "donate" },
      { value: "/premium", label: "Premium", icon: "shield-alt" },
    ],
  },
];

const CustomValue = ({ getValue, ...props }) => {
  const [{ icon, label }] = getValue();
  return (
    <ValueContainer className="nav__item__filter__value" {...props}>
      <FontAwesomeIcon className="nav__item__filter__value__icon" icon={icon} />
      <h2 className="nav__item__filter__value__label">{label}</h2>
    </ValueContainer>
  );
};

const styles = {
  control: (provided, { menuIsOpen }) => {
    const openStyles = menuIsOpen
      ? {
          borderColor: "#EDEFF1",
          borderRadius: "4px 4px 0 0",
          borderBottomColor: "transparent",
        }
      : {};
    return {
      ...provided,
      flexWrap: "nowrap",
      borderColor: "transparent",
      ...openStyles,
      "&:hover": {
        borderColor: "#EDEFF1",
      },
    };
  },
  option: () => ({}),
  groupHeading: provided => ({
    ...provided,
    // SWITCH ME AFTER YOU ADD A FILTER SEARCH BAR ABOVE
    padding: "8px 24px 8px",
    // padding: "16px 24px 8px",
    fontSize: "1rem",
  }),
  menu: provided => ({
    ...provided,
    marginTop: "-2px",
    borderWidth: 1,
    borderColor: "#EDEFF1",
    borderStyle: "solid",
    borderTopColor: "transparent",
    borderRadius: "4px 4px 0 0",
    boxShadow: "none",
    width: 270,
  }),
  dropdownIndicator: provided => ({
    ...provided,
    cursor: "pointer",
  }),
  indicatorSeparator: () => ({}),
};

export default function NavFilter() {
  // const { user } = useAuth();
  // we'll use this to see which page we're on
  const { pathname } = useRouter();
  // get the option for the current page
  const [currentPageOption] = options
    .reduce((acc, cVal) => [...acc, ...cVal.options], [])
    .filter(({ value }) => value === pathname);
  // or set it to the most popular page
  const opt = currentPageOption || options[0].options[0];
  // we'll show different options depending on if we are logged in or not

  return (
    <Select
      className="nav__item__filter"
      value={opt}
      options={options}
      components={{ Option: NavSelectOption, ValueContainer: CustomValue }}
      instanceId="NavFilter"
      isSearchable={false}
      styles={styles}
      classNamePrefix="filter"
    />
  );
}
