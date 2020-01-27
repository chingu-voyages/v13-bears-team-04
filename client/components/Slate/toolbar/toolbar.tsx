import React from "react";
import Button from "../../Button";
import ToolbarOpts from "./toolbaropts";

type Props = {
  toggleIsRich?: () => void;
  isRich: boolean;
  isComment: boolean;
  isDesktop: boolean;
  handleCommentSubmit?: () => void | undefined;
};

const Toolbar = ({
  toggleIsRich,
  isRich,
  isComment,
  isDesktop,
  handleCommentSubmit,
}: Props) => (
  <div className="slate__toolbar">
    {/* If Markdown is active show it */}
    {!isRich && <div className="slate__toolbar__mdheader">Markdown</div>}

    {/* Rich Text Option Buttons */}
    {isRich && isDesktop && <ToolbarOpts />}

    {/* Switch to Markdown Button */}
    {isRich && isDesktop && (
      <Button
        inverted
        size="tight"
        handleClick={toggleIsRich}
        cx="slate__toolbar__toggler"
        text={`Switch to ${isRich ? "markdown" : "Fancy Pants Editor"}`}
      />
    )}

    {/* Submit Comment Button */}
    {isComment && (
      <Button text="Comment" size="tight" handleClick={handleCommentSubmit} />
    )}
  </div>
);

export default Toolbar;
