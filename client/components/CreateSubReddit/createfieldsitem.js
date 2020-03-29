import React from "react";

const CreateFieldsItem = ({ name, note, children }) => (
  <div className="subcreate__field">
    <h3 className="subcreate__header required-dot">{name}</h3>
    <p className="subcreate__field__note">{note}</p>
    <div className="subcreate__field__content">{children}</div>
  </div>
);

export default CreateFieldsItem;
