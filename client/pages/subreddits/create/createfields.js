import React from "react";
import Select from "react-select";
import CreateFieldsItem from "./createfieldsitem";

const CreateFields = ({ handleChange = () => console.log("changed") }) => (
  <>
    <CreateFieldsItem
      name="Name"
      note="Community names includes capitalization cannot be changed."
    >
      <input
        type="text"
        maxLength="21"
        className="subcreate__field__content__input"
        onChange={handleChange}
      />
    </CreateFieldsItem>
    <CreateFieldsItem
      name="Topics"
      note="This will help relevant users find your community. 0/25"
    >
      <Select />
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
        onChange={handleChange}
      />
    </CreateFieldsItem>
  </>
);

export default CreateFields;
