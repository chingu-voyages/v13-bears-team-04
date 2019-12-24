import React from "react";
import Select from "react-select";
import CreateFieldsItem from "./createfieldsitem";
import { styles, options } from "./createfieldsselect";

const CreateFields = ({
  setName,
  setTopics,
  setDescription,
  name,
  topics,
  description,
}) => (
  <>
    <CreateFieldsItem
      name="Name"
      note="Community names includes capitalization cannot be changed."
    >
      <input
        type="text"
        maxLength="21"
        className="subcreate__field__content__input"
        onChange={e => setName(e.target.value)}
        value={name}
      />
    </CreateFieldsItem>
    <CreateFieldsItem
      name="Topics"
      note="This will help relevant users find your community. 0/25"
    >
      <Select
        instanceId="create-fields-select"
        isMulti
        placeholder=""
        options={options}
        onChange={topic => setTopics(topic)}
        value={topics}
        styles={styles}
        components={{ IndicatorsContainer: () => null }}
      />
    </CreateFieldsItem>
    <CreateFieldsItem
      name="Description"
      note="This is how new members come to understand your community."
    >
      <textarea
        type="text"
        rows="2"
        maxLength="500"
        className="subcreate__field__content__textarea"
        onChange={e => setDescription(e.target.value)}
        value={description}
      />
    </CreateFieldsItem>
  </>
);

export default CreateFields;
