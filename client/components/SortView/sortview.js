import React from "react";
import Select, { components } from "react-select";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { sortOptions } from "./data/data";
import { countryOptions } from "./data/data";

import "./sortview.scss";

const customStyles = {
  option: (provided, state) => ({
    ...provided,
    borderBottom: "1px dotted #d7d7d7",
    color: state.isSelected ? "#5296dd" : "#d7d7d7",
    width: state.selectProps.width,
    backgroundColor: state.isSelected ? "#ffffff" : "#ffffff",
    padding: 10,
    fontSize: 17,
  }),
  menu: (provided, state) => ({
    ...provided,
    width: state.selectProps.width,
    //   borderBottom: "1px dotted pink",
    //   padding: 20,
  }),
};

const DropdownIndicator = props => {
  return (
    components.DropdownIndicator && (
      <components.DropdownIndicator {...props}>
        <FontAwesomeIcon
          icon={props.selectProps.menuIsOpen ? "caret-up" : "caret-down"}
        />
      </components.DropdownIndicator>
    )
  );
};

export default function sortview() {
  return (
    <div className="sortview">
      <Select
        defaultValue={sortOptions[0]}
        options={sortOptions}
        label="Single Select"
        components={{ DropdownIndicator }}
        styles={customStyles}
        width="100%"
      />
    </div>
  );
}
