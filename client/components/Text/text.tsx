// https://docs.slatejs.org/walkthroughs/01-installing-slate

import React, { useMemo, useState } from "react";
import { createEditor, Node } from "slate";
import { Slate, Editable, withReact } from "slate-react";
import Toolbar from "./components/Toolbar";
import "./text.scss";

const Text = ({ isRich = true }) => {
  const editor = useMemo(() => withReact(createEditor()), []);

  const [value, setValue] = useState<Node[]>([
    { type: "paragraph", children: [{ text: "" }] },
  ]);

  const [showRichOptions, setShowRichOptions] = useState(isRich);
  const toggleShowRichOptions = () => setShowRichOptions(state => !state);

  return (
    <div className="editor">
      <Slate editor={editor} value={value} onChange={value => setValue(value)}>
        <Toolbar
          showRichOptions={showRichOptions}
          toggleShowRichOptions={toggleShowRichOptions}
        />
        <Editable className="editor__body" placeholder="Text (Optional)" />
      </Slate>
    </div>
  );
};

export default Text;
