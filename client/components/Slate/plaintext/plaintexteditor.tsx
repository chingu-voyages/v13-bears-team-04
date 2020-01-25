import React from "react";
import { Editable } from "slate-react";

const PlainTextEditor = () => (
  <Editable className="slate__body" placeholder="Text (Optional)" />
);

export default PlainTextEditor;
