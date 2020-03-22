import React from "react";
import Checkbox from "../Checkbox";
import Label from "../Label";

const CreateAdult = ({ setIsOver18, isChecked }) => (
  <>
    <h3 className="subcreate__header">Adult content</h3>
    <Checkbox
      className="subcreate__adult"
      handleClick={() => setIsOver18(state => !state)}
      isChecked={isChecked}
    >
      <Label text="NSFW" backgroundColor="#ff585b" color="white" />
      <div className="subcreate__header">18+ year old community</div>
    </Checkbox>
  </>
);

export default CreateAdult;
