import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { components } from "react-select";

export const Option = ({ data, ...props }) => {
  const { icon, label } = data;
  return (
    <components.Option className="sortview__sort__select__option" {...props}>
      <FontAwesomeIcon
        className="sortview__sort__select__option__icon"
        icon={icon}
      />
      <h3 className="sortview__sort__select__option__label">{label}</h3>
    </components.Option>
  );
};

export const ValueContainer = ({ getValue, ...props }) => {
  const [{ icon, label }] = getValue();
  return (
    <components.ValueContainer
      className="sortview__sort__select__value"
      {...props}
    >
      {icon && (
        <FontAwesomeIcon
          className="sortview__sort__select__value__icon"
          icon={icon}
        />
      )}
      <h3 className="sortview__sort__select__value__label">{label}</h3>
    </components.ValueContainer>
  );
};

export const DropdownIndicator = props => (
  <components.DropdownIndicator {...props}>
    <FontAwesomeIcon icon="caret-down" />
  </components.DropdownIndicator>
);
