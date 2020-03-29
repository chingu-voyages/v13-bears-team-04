import React, { useMemo } from "react";
import clsx from "clsx";
import { createEditor } from "slate";
import { withReact, Slate } from "slate-react";
import RichTextEditor from "./richtext";

type Props = {
  content: string;
  isDeleted?: boolean;
};

export default function Render({ content, isDeleted }: Props): JSX.Element {
  const state = useMemo(() => {
    const value = JSON.parse(content);
    const editor = withReact(createEditor());
    const onChange = (): void => undefined;
    return { value, editor, onChange };
  }, [content]);
  const { value, editor, onChange } = state;

  return (
    <div
      className={clsx("slate slate__render", {
        "slate__render--isDeleted": isDeleted,
      })}
    >
      <Slate editor={editor} value={value} onChange={onChange}>
        <RichTextEditor readOnly />
      </Slate>
    </div>
  );
}
