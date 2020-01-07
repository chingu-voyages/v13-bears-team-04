import React, { useMemo, useState } from "react";
import { createEditor, Node } from "slate";
import { Slate, Editable, withReact } from "slate-react";
import Toolbar from "./components/Toolbar";
import { useRenderElement, useRenderLeaf } from "./renderers";
import "./text.scss";

const initialState = [{ type: "paragraph", children: [{ text: "" }] }];

const Text = ({ isRich = true, readOnly = false }) => {
  const editor = useMemo(() => withReact(createEditor()), []);
  const renderElement = useRenderElement();
  const renderLeaf = useRenderLeaf();

  const [value, setValue] = useState<Node[]>(initialState);

  const [showRichOptions, setShowRichOptions] = useState(isRich);
  const toggleShowRichOptions = () => setShowRichOptions(state => !state);

  return (
    <div className="editor">
      <Slate editor={editor} value={value} onChange={value => setValue(value)}>
        <Toolbar
          showRichOptions={showRichOptions}
          toggleShowRichOptions={toggleShowRichOptions}
        />
        <Editable
          className="editor__body"
          readOnly={readOnly}
          renderElement={renderElement}
          renderLeaf={renderLeaf}
          placeholder="Text (Optional)"
        />
      </Slate>
    </div>
  );
};

export default Text;
