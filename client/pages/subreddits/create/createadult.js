import React from "react";
import Checkbox from "../../../components/Checkbox";
import Label from "../../../components/Label";

const CreateAdult = ({
  handleClick = () => console.log("checked"),
  isChecked,
}) => (
  <>
    <h3 className="subcreate__header">Adult content</h3>
    <div
      role="checkbox"
      aria-checked={isChecked}
      className="subcreate__adult"
      onClick={handleClick}
      onKeyPress={handleClick}
      tabIndex={0}
    >
      <Checkbox isChecked={isChecked} />
      <Label text="NSFW" backgroundColor="#ff585b" color="white" />
      <div className="subcreate__header">18+ year old community</div>
    </div>
  </>
);

export default CreateAdult;
