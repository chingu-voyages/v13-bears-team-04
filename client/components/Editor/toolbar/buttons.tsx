import React from "react";
import { useSlate } from "slate-react";
import ToolbarOptsBtn from "./toolbaroptsbtn";
import { isBlockActive, toggleBlock, isMarkActive, toggleMark } from "../utils";

type Props = {
  format: string;
  icon: string | string[];
};

export const MarkButton = ({ format, icon }: Props) => {
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

export const BlockButton = ({ format, icon }: Props) => {
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
