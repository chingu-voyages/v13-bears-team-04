import React from "react";
import AsyncSelect from "react-select/async";
import fetchIt from "../../utils/fetch";

const styles = {};

async function getOptions() {
  try {
    const communities = await fetchIt("/community");
    console.log(communities);
    return communities.map(({ name }) => ({
      label: name,
      value: name,
      key: name,
    }));
  } catch (err) {
    console.log(err);
    return [];
  }
}

const SubmitFormSelect = () => {
  return (
    <AsyncSelect
      cacheOptions
      isSearchable
      loadOptions={getOptions}
      className="submit__form__select"
      instanceId="submit__form__select"
      placeholder="Choose a community"
    />
  );
};
export default SubmitFormSelect;
