import React from "react";
import AsyncSelect from "react-select/async";
import styles from "./formselectstyles";
import getOptions from "./formselectoptions";
import { usePost } from "../../postcontext";

export default function SubmitFormSelect() {
  const { state, postDispatch } = usePost();

  const { communityId, communityName } = state;
  const defaultValue = communityId
    ? { label: communityName, value: communityId, key: communityId }
    : null;

  return (
    <AsyncSelect
      isSearchable
      isClearable
      defaultOptions
      cacheOptions
      loadOptions={getOptions}
      defaultValue={defaultValue}
      styles={styles}
      onChange={selection => {
        postDispatch({
          type: "SET_COMMUNITY",
          communityId: selection ? selection.value : "",
          communityName: selection ? selection.label : "",
        });
      }}
      className="submit__form__select"
      instanceId="submit__form__select"
      placeholder="Choose a community"
    />
  );
}
