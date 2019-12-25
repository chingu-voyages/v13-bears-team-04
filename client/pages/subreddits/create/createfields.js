import React from "react";
import CreateFieldsItem from "./createfieldsitem";
import CreateFieldsSelect from "./createfieldsselect";

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
        minLength="4"
        maxLength="40"
        className="subcreate__field__content__input"
        onChange={e => setName(e.target.value)}
        value={name}
      />
    </CreateFieldsItem>
    <CreateFieldsItem
      name="Topics"
      note={`This will help relevant users find your community. ${topics.length}/25`}
    >
      <CreateFieldsSelect setTopics={setTopics} topics={topics} />
    </CreateFieldsItem>
    <CreateFieldsItem
      name="Description"
      note="This is how new members come to understand your community."
    >
      <textarea
        type="text"
        rows="2"
        minLength="4"
        maxLength="500"
        className="subcreate__field__content__textarea"
        onChange={e => setDescription(e.target.value)}
        value={description}
      />
    </CreateFieldsItem>
  </>
);

export default CreateFields;
