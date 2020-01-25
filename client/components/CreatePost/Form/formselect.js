import React from "react";
import AsyncSelect from "react-select/async";
import styles from "./formselectstyles";
import getOptions from "./formselectoptions";
import { useCreatePost } from "../../../contexts/createpost";

export default function SubmitFormSelect() {
  const { state, createPostDispatch } = useCreatePost();

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
        createPostDispatch({
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
