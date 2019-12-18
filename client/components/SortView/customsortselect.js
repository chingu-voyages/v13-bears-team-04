import React from "react";
import Select from "react-select";
import { DropdownIndicator, Option, ValueContainer } from "./customcomponents";
import styles from "./customstyles";

const CustomSortSelect = ({ handleChange, selection, options }) => (
  <Select
    className="sortview__sort__select"
    defaultValue={selection}
    value={selection}
    options={options}
    onChange={handleChange}
    styles={styles}
    components={{ DropdownIndicator, Option, ValueContainer }}
  />
);

export default CustomSortSelect;
