import React from "react";
import { Editable, useSlate } from "slate-react";
import isHotkey from "is-hotkey";

import { useRenderElement, useRenderLeaf } from "../renderers";
import { toggleMark } from "../utils";
import { HotkeyTypes } from "../utils/types";

type Props = { readOnly: boolean };

type OnKeyDownEvent = KeyboardEvent & React.KeyboardEvent<HTMLDivElement>;

const HOTKEYS: HotkeyTypes = {
  "mod+b": "bold",
  "mod+i": "italic",
  "mod+u": "underline",
  "mod+s": "strike",
  "mod+`": "code",
};

export default function RichTextEditor({ readOnly = false }: Props) {
  const editor = useSlate();
  const renderElement = useRenderElement();
  const renderLeaf = useRenderLeaf();

  return (
    <Editable
      className="slate__body"
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
  );
}
