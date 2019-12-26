import React, { useState, useEffect } from "react";
import Select from "react-select";
import styles from "./createfieldsselectstyles";
import fetchIt from "../../../utils/fetch";

export default function CreateFieldsSelect({ setTopics, topics }) {
  const [options, setOptions] = useState([]);
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    async function getOptions() {
      try {
        const data = await fetchIt("/topics");
        const fetchedOpts = data
          .map(({ text, isRecommended, _id }) => ({
            label: text,
            key: _id,
            value: _id,
            isRecommended,
          }))
          .sort((a, b) => {
            if (a.label < b.label) return -1;
            if (b.label < a.label) return 1;
            return 0;
          });
        setOptions(fetchedOpts);
      } catch (err) {
        console.log(err);
      }
    }

    getOptions();
  }, []);

  function handleChange(topic) {
    if (!topic) {
      setTopics([]);
    } else if (topic.length <= 25) {
      setTopics(topic || []);
    }
  }

  return (
    <Select
      instanceId="create-fields-select"
      isMulti
      placeholder=""
      options={[
        {
          label: "Suggested Topics",
          options:
            inputValue !== ""
              ? options
              : options.filter(topic => topic.isRecommended),
        },
      ]}
      isSearchable={topics.length !== 25}
      inputValue={inputValue}
      onInputChange={val => setInputValue(val)}
      onChange={handleChange}
      value={topics}
      styles={styles}
      components={{ IndicatorsContainer: () => null }}
    />
  );
}
