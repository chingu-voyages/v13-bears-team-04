import React from "react";
import AsyncSelect from "react-select/async";
import styles from "./submitformselectstyles";
import getOptions from "./submitformselectoptions";
import { useCreatePost } from "../../contexts/createpost";

export default function SubmitFormSelect() {
  const { createPostDispatch } = useCreatePost();

  return (
    <AsyncSelect
      isSearchable
      isClearable
      defaultOptions
      cacheOptions
      loadOptions={getOptions}
      styles={styles}
      onChange={selection => {
        createPostDispatch({
          type: "SET_COMMUNITY",
          communityId: selection ? selection.value : "",
        });
      }}
      className="submit__form__select"
      instanceId="submit__form__select"
      placeholder="Choose a community"
    />
  );
}
