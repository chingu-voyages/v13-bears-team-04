import React from "react";
import AsyncSelect from "react-select/async";
import styles from "./submitformselectstyles";
import getOptions from "./submitformselectoptions";

const SubmitFormSelect = () => {
  return (
    <AsyncSelect
      isSearchable
      isClearable
      defaultOptions
      cacheOptions
      loadOptions={getOptions}
      styles={styles}
      className="submit__form__select"
      instanceId="submit__form__select"
      placeholder="Choose a community"
    />
  );
};
export default SubmitFormSelect;
