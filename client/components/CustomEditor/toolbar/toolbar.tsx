import React from "react";
import ToolbarOpts from "./toolbaropts";

type Props = {
  children: React.ReactNode;
  isRich: boolean;
};

export default function Toolbar({ children, isRich }: Props) {
  return (
    <div className="editor__toolbar">
      {/* OPTIONS OR MDHEADER */}
      {isRich ? (
        <ToolbarOpts />
      ) : (
        <div className="editor__toolbar__mdheader">Markdown</div>
      )}

      {/* BUTTONS */}
      {children}
    </div>
  );
}
