import React, { useState, useEffect } from "react";
import Select from "react-select";
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

const styles = {
  control: provided => ({
    ...provided,
    minHeight: 48,
    border: "1px solid #edeff1;",
    "&:hover": {},
  }),
  menu: provided => ({ ...provided, fontSize: "1.4rem", marginTop: 2 }),
  input: provided => ({ ...provided, fontSize: "1.4rem" }),
  groupHeading: provided => ({
    ...provided,
    paddingBottom: 5,
    fontWeight: 700,
  }),
  option: provided => ({
    ...provided,
    cursor: "pointer",
    "&:hover": {
      backgroundColor: "rgb(0, 121, 211)",
      color: "white",
    },
  }),
  multiValue: provided => ({
    ...provided,
    backgroundColor: "rgb(246, 247, 248)",
    fontSize: "1.4rem",
    lineHeight: "1.8rem",
    padding: "2px 4px 2px 8px",
    margin: 6,
    color: "rgb(0, 121, 211)",
    "&:hover": { color: "white", backgroundColor: "rgb(0, 121, 211)" },
  }),
  multiValueLabel: () => ({}),
  multiValueRemove: provided => ({
    ...provided,
    paddingRight: 0,
    color: "inherit",
    cursor: "pointer",
    "&:hover": { color: "inherit", backgroundColor: "inherit" },
  }),
};
