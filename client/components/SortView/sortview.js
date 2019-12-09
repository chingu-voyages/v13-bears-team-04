import React from "react";
import Select, { components } from "react-select";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { sortOptions } from "./data/data";
import { countryOptions } from "./data/data";

import SortViewFilterOption from "./sortviewoptions";

import "./sortview.scss";

// used to edit the option boxes of these two components
const { Option, ValueContainer } = components;

const customStyles = {
  option: (provided, state) => ({
    ...provided,
    borderBottom: "1px dotted #d7d7d7",
    color: state.isSelected ? "#5296dd" : "#d7d7d7",
    width: state.selectProps.width,
    backgroundColor: state.isSelected ? "#ffffff" : "#ffffff",
  }),
  menu: (provided, state) => ({
    ...provided,
    width: state.selectProps.width,
  }),
};

const CustomOption = ({ data, ...props }) => {
  const { icon, label } = data;
  return (
    <Option className="sortview__option" {...props}>
      <SortViewFilterOption icon={icon} label={label} />
    </Option>
  );
};

const CustomValue = ({ getValue, ...props }) => {
  const [{ icon, label }] = getValue();
  return (
    <ValueContainer className="sortview__option" {...props}>
      <SortViewFilterOption icon={icon} label={label} />
    </ValueContainer>
  );
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
        // className="sortview__option__icon"
        defaultValue={sortOptions[0]}
        options={sortOptions}
        components={{
          DropdownIndicator,
          Option: CustomOption,
          ValueContainer: CustomValue,
        }}
        styles={customStyles}
        width="100%"
      />
    </div>
  );
}
