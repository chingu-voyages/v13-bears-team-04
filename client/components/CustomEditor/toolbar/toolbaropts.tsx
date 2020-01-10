import React from "react";
import clsx from "clsx";
import FAIcon from "../../FAIcon";
import { useSlate } from "slate-react";

const ToolbarOpts = () => (
  <div className="editor__toolbar__options">
    <MarkButton format="bold" icon="bold" />
    <MarkButton format="italic" icon="italic" />
    <MarkButton format="code" icon="code" />
    <BlockButton format="heading" icon="heading" />
    <BlockButton format="block-quote" icon="quote-left" />
    <BlockButton format="numbered-list" icon="list-ol" />
    <BlockButton format="bulleted-list" icon="list-ul" />
  </div>
);

export default ToolbarOpts;

const BlockButton = ({ format, icon }) => {
  const editor = useSlate();
  return (
    <ToolbarOptsBtn
      icon={icon}
      isActive={isBlockActive(editor, format)}
      handleClick={e => {
        e.preventDefault();
        toggleBlock(editor, format);
      }}
    />
  );
};

const MarkButton = ({ format, icon }) => {
  const editor = useSlate();
  return (
    <ToolbarOptsBtn
      icon={icon}
      isActive={isMarkActive(editor, format)}
      handleClick={e => {
        e.preventDefault();
        toggleMark(editor, format);
      }}
    />
  );
};

const ToolbarOptsBtn = ({ handleClick, icon, isActive }) => (
  <button
    className={clsx("editor__toolbar__options__item", {
      editor__toolbar__options__item__active: isActive,
    })}
    onClick={handleClick}
  >
    <FAIcon icon={icon} className="editor__toolbar__options__item__icon" />
  </button>
);

const toggleBlock = (editor, format) => {
  const isActive = isBlockActive(editor, format);
  const isList = LIST_TYPES.includes(format);

  Transforms.unwrapNodes(editor, {
    match: n => LIST_TYPES.includes(n.type),
    split: true,
  });

  Transforms.setNodes(editor, {
    type: isActive ? "paragraph" : isList ? "list-item" : format,
  });

  if (!isActive && isList) {
    const block = { type: format, children: [] };
    Transforms.wrapNodes(editor, block);
  }
};

const toggleMark = (editor, format) => {
  const isActive = isMarkActive(editor, format);

  if (isActive) {
    Editor.removeMark(editor, format);
  } else {
    Editor.addMark(editor, format, true);
  }
};
