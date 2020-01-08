import React, { useMemo, useCallback } from "react";
import { createEditor } from "slate";
import { Slate, Editable, withReact } from "slate-react";
import Toolbar from "./components/Toolbar";
import { useRenderElement, useRenderLeaf } from "./renderers";
import { useCreatePost } from "../../contexts/createpost";
import "./text.scss";

export default function Text({ readOnly = false }) {
  const editor = useMemo(() => withReact(createEditor()), []);
  const renderElement = useRenderElement();
  const renderLeaf = useRenderLeaf();
  const { state, createPostDispatch } = useCreatePost();
  const { content } = state;

  const onChange = useCallback(content => {
    createPostDispatch({ type: "SET_CONTENT", content });
  }, []);

  return (
    <div className="editor">
      <Slate editor={editor} value={content} onChange={onChange}>
        <Toolbar />
        <Editable
          className="editor__body"
          placeholder="Text (Optional)"
          readOnly={readOnly}
          renderElement={renderElement}
          renderLeaf={renderLeaf}
        />
      </Slate>
    </div>
  );
}
