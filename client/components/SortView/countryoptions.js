import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Select, { components } from "react-select";

import { countryOptions } from "./optionsdata";
import { useAuth } from "../../utils/authcontext";

import "./sortview.scss";

const customStyles = {
  menu: provided => ({
    ...provided,
    marginTop: "-2px",
    borderWidth: 1,
    borderColor: "#EDEFF1",
    borderStyle: "solid",
    borderTopColor: "transparent",
    borderRadius: "4px 4px 0 0",
    boxShadow: "none",
  }),
  control: reactSelectStyles => ({
    ...reactSelectStyles, // omit if you don't want any of the React-Select style for this component
    width: 220,
    borderColor: "transparent",
  }),
};

const DropdownIndicator = props =>
  components.DropdownIndicator && (
    <components.DropdownIndicator {...props}>
      <FontAwesomeIcon
        icon={props.selectProps.menuIsOpen ? "caret-up" : "caret-down"}
      />
    </components.DropdownIndicator>
  );

export default function CountryOptions() {
  const { user } = useAuth();
  const defaultSelection = user ? null : countryOptions[0];
  const [selection, setSelection] = useState(defaultSelection);

  function handleChange(selected) {
    const { value } = selected;
    setSelection(selected);
  }

  return (
    <div className="countryoption">
      <Select
        className="countryoption__filter"
        defaultValue={selection}
        value={selection}
        options={countryOptions}
        onChange={handleChange}
        components={{
          DropdownIndicator,
        }}
        styles={customStyles}
      />
    </div>
  );
}
