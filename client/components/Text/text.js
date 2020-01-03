// https://docs.slatejs.org/walkthroughs/01-installing-slate

import React, { useMemo, useState } from "react";
import { createEditor } from "slate";
import { Slate, Editable, withReact } from "slate-react";
import Toolbar from "./components/toolbar";
import Button from "../Button";

const Text = ({ isRich = true }) => {
  const editor = useMemo(() => withReact(createEditor()), []);

  const [value, setValue] = useState([
    { type: "paragraph", children: [{ text: "" }] },
  ]);

  const [showToolbar, setShowToolbar] = useState(isRich);
  const toggleShowToolbar = () => setShowToolbar(state => !state);

  return (
    <Slate editor={editor} value={value} onChange={val => setValue(val)}>
      {showToolbar && <Toolbar />}
      <Button
        inverted
        handleClick={toggleShowToolbar}
        text="Switch to Markdown"
        size="tight"
      />
      <Editable placeholder="Text (Optional)" />
    </Slate>
  );
};

export default Text;
