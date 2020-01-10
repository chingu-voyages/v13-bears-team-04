import React, { useMemo, useCallback, useState } from "react";
import isHotkey from "is-hotkey";
import { createEditor, Node } from "slate";
import { Slate, Editable, withReact } from "slate-react";
import Button from "../Button";
import Toolbar from "./toolbar";
import { useRenderElement, useRenderLeaf } from "./renderers";
import { toggleMark } from "./utils";
import { HotkeyTypes } from "./utils/types";
import "./customeditor.scss";

type Props = {
  isComment: boolean;
  readOnly: boolean;
  value: Node[];
  setValue: (val: Node[]) => void;
};

type OnKeyDownEvent = KeyboardEvent & React.KeyboardEvent<HTMLDivElement>;

const HOTKEYS: HotkeyTypes = {
  "mod+b": "bold",
  "mod+i": "italic",
  "mod+`": "code",
};

export default function CustomEditor(props: Props) {
  const { isComment = false, readOnly = false, value, setValue } = props;
  const editor = useMemo(() => withReact(createEditor()), []);
  const renderElement = useRenderElement();
  const renderLeaf = useRenderLeaf();

  const [isRich, setIsRich] = useState(true);
  const toggleIsRich = () => setIsRich(state => !state);

  const onChange = useCallback(val => setValue(val), []);

  // pull our toolbar out here because it can be on top or the bottom
  const tools = (
    <Toolbar isRich={isRich}>
      <Button
        inverted
        size="tight"
        handleClick={toggleIsRich}
        cx="editor__toolbar__toggler"
        text={`Switch to ${isRich ? "markdown" : "Fancy Pants Editor"}`}
      />
    </Toolbar>
  );

  return (
    <div className="editor">
      <Slate editor={editor} value={value} onChange={onChange}>
        {!isComment && tools}
        <Editable
          className="editor__body"
          placeholder="Text (Optional)"
          readOnly={readOnly}
          renderElement={renderElement}
          renderLeaf={renderLeaf}
          onKeyDown={(event: OnKeyDownEvent) => {
            for (const hotkey in HOTKEYS) {
              if (isHotkey(hotkey, event)) {
                event.preventDefault();
                const mark = HOTKEYS[hotkey];
                toggleMark(editor, mark);
              }
            }
          }}
        />
        {isComment && tools}
      </Slate>
    </div>
  );
}
