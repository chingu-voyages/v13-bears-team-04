import React, { useMemo } from "react";
import { createEditor } from "slate";
import { withReact, Slate } from "slate-react";
import RichTextEditor from "./richtext";

type Props = {
  content: string;
};

export default function Render({ content }: Props): JSX.Element {
  const state = useMemo(() => {
    const value = JSON.parse(content);
    const editor = withReact(createEditor());
    const onChange = (): void => undefined;
    return { value, editor, onChange };
  }, [content]);
  const { value, editor, onChange } = state;

  return (
    <div className="slate slate__render">
      <Slate editor={editor} value={value} onChange={onChange}>
        <RichTextEditor readOnly />
      </Slate>
    </div>
  );
}
