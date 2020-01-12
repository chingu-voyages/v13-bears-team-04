import React, { useMemo, useCallback } from "react";
import { Node, createEditor } from "slate";
import { withReact, Slate } from "slate-react";
import { withHistory } from "slate-history";

import RichTextEditor from "./richtext";
import PlainTextEditor from "./plaintext";
import Toolbar from "./toolbar";
import { useIsDesktop } from "../../hooks";
import "./editor.scss";

type Props = {
  isBrowser: boolean;
  isComment: boolean;
  readOnly: boolean;
  value: Node[];
  setValue: (value: Node[]) => void;
  handleCommentSubmit?: () => void;
};

export default function Editor({
  isBrowser = false,
  isComment = true,
  readOnly = false,
  value,
  setValue,
  handleCommentSubmit,
}: Props) {
  // things needed and used in Slate
  const editor = useMemo(() => withHistory(withReact(createEditor())), []);
  const handleChange = useCallback(val => setValue(val), []);

  // needed to provide richtext options for desktop users..
  // .. and plaintext for other lower screen sizes
  const isDesktop = useIsDesktop(isBrowser ? 1200 : 450);

  // pull our toolbar out here because it can be on top or the bottom
  const toolbarProps = {
    toggleIsRich: () => console.log("Markdown is not supported yet"),
    isRich: true,
    isComment,
    isDesktop,
    handleCommentSubmit,
  };
  const toolbar = <Toolbar {...toolbarProps} />;

  return (
    <div className="editor">
      <Slate editor={editor} value={value} onChange={handleChange}>
        {isDesktop ? (
          <>
            {!isComment && toolbar}
            <RichTextEditor readOnly={readOnly} />
            {isComment && toolbar}
          </>
        ) : (
          <>
            <PlainTextEditor />
            {isComment && toolbar}
          </>
        )}
      </Slate>
    </div>
  );
}
