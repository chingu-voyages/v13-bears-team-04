import React, { useMemo } from "react";
import { createEditor } from "slate";
import { withReact, Slate } from "slate-react";
import RichTextEditor from "./richtext";

type Props = {
  content: string;
};

export default function Render({ content }: Props) {
  const { value, editor, onChange } = useMemo(() => {
    const value = JSON.parse(content);
    const editor = withReact(createEditor());
    const onChange = () => {};
    return { value, editor, onChange };
  }, [content]);

  return (
    <div className="slate slate__render">
      <Slate editor={editor} value={value} onChange={onChange}>
        <RichTextEditor readOnly />
      </Slate>
    </div>
  );
}
