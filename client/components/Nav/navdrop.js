import React from "react";
import Select from "react-select";

const plainOptions = [
  // { value: "nightmode", label: "Popular", icon: "chart-line" },
];

export default function NavDrop() {
  return (
    <Select
      className="nav__item__drop"
      // defaultMenuIsOpen
      // defaultValue={selection}
      // value={selection}
      // onChange={handleChange}
      options={plainOptions}
      // components={{ Option: CustomOption, ValueContainer: CustomValue }}
      instanceId="NavDrop"
      isSearchable={false}
      // styles={customStyles}
    />
  );
}
