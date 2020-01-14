import React from "react";
import { Editable } from "slate-react";

type Props = {};

const PlainTextEditor = ({}: Props) => (
  <Editable className="editor__body" placeholder="Text (Optional)" />
);

export default PlainTextEditor;
