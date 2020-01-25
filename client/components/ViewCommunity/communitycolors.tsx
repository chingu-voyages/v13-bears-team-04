import React, { useState } from "react";
import { SliderPicker, ChromePicker } from "react-color";

import Button from "../Button";
import MessageBox from "../MessageBox";
import CommunityBox from "./communitybox";

import { useSetCSSVariable, useMessageBox } from "../../hooks";
import fetchIt from "../../utils/fetch";

type Props = {
  theme: {
    "--community-theme-main": string;
    "--community-theme-text": string;
  };
  userMemberLevel: string;
  communityId: string;
};

export default function CommunityColors({
  theme,
  userMemberLevel,
  communityId,
}: Props) {
  const { msg, status, setMessageBox, resetMessageBox } = useMessageBox();
  const [bgColor, setBgColor] = useState(theme["--community-theme-main"]);
  const [textColor, setTextColor] = useState(theme["--community-theme-text"]);

  const newTheme = {
    "--community-theme-main": bgColor,
    "--community-theme-text": textColor,
  };

  useSetCSSVariable(newTheme);

  async function handleColorChange() {
    setMessageBox({ msg: "Processing...", status: "default" });
    try {
      await fetchIt(`/community/${communityId}/theme`, {
        method: "PUT",
        body: JSON.stringify({ theme: newTheme }),
        ctx: {},
      });
      setMessageBox({ msg: "Successfully Updated", status: "success" });
    } catch (err) {
      setMessageBox({ msg: err.message, status: "error" });
    }
  }

  if (!["administrator", "moderators"].includes(userMemberLevel)) return null;

  return (
    <CommunityBox cx="community__color-picker" header="Community Theme">
      <p>Edit the community theme below:</p>
      <hr />
      <h3>Background Color</h3>
      <SliderPicker
        color={bgColor}
        onChangeComplete={col => setBgColor(col.hex)}
      />
      <hr />
      <h3>Text Color</h3>
      <ChromePicker
        color={textColor}
        onChangeComplete={col => setTextColor(col.hex)}
      />
      <hr />
      <Button text="Submit New Theme" handleClick={handleColorChange} />
      <MessageBox
        msg={msg}
        status={status}
        handleClose={resetMessageBox}
        mT={16}
      />
    </CommunityBox>
  );
}
