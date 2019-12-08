import React, { useState } from "react";
// import { useRouter } from "next/router";
import Select, { components } from "react-select";
import { useAuth } from "../../utils/authcontext";
import NavFilterOption from "./navfilteroption";

// used to edit the option boxes of these two components
const { Option, ValueContainer } = components;

// options used when user isn't logged in
const plainOptions = [
  { value: "popular", label: "Popular", icon: "chart-line" },
  { value: "all", label: "All", icon: "poll" },
  { value: "topcommunities", label: "Top Communities", icon: "list-ol" },
];

const CustomOption = ({ data, ...props }) => {
  const { icon, label } = data;
  return (
    <Option className="nav__item__filter__option options" {...props}>
      <NavFilterOption icon={icon} label={label} />
    </Option>
  );
};

const CustomValue = ({ getValue, ...props }) => {
  const [{ icon, label }] = getValue();
  return (
    <ValueContainer className="nav__item__filter__option value" {...props}>
      <NavFilterOption icon={icon} label={label} />
    </ValueContainer>
  );
};

export default function NavFilter() {
  const { user } = useAuth();
  // we'll use this to see which page we're on
  // const router = useRouter();
  // we'll show different options depending on if we are logged in or not
  const defaultSelection = user ? null : plainOptions[0];
  const [selection, setSelection] = useState(defaultSelection);

  function handleChange(selected) {
    // need to make an API based on what value was chosen
    const { value } = selected;
    console.log(selected, value);
    setSelection(selected);
  }

  console.log(selection);
  return (
    <div className="nav__item">
      <Select
        className="nav__item__filter"
        // defaultMenuIsOpen
        defaultValue={selection}
        value={selection}
        onChange={handleChange}
        options={plainOptions}
        components={{ Option: CustomOption, ValueContainer: CustomValue }}
        instanceId="NavFilter"
        isSearchable={false}
      />
    </div>
  );
}
