import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Select, { components } from "react-select";

import { countryOptions } from "./data/data";
import { useAuth } from "../../utils/authcontext";

import "./sortview.scss";

export default function countryoptions() {
  const { user } = useAuth();

  const defaultSelection = user ? null : countryOptions[0];
  const [selection, setSelection] = useState(defaultSelection);

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
      />
    </div>
  );
}
