import React, { useState } from "react";
import Checkbox from "../../components/Checkbox";

const SubmitFormBodyContentNotify = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleToggle = () => setIsChecked(state => !state);

  return (
    <div className="submit__form__body__notify">
      <Checkbox
        className="submit__form__body__notify__check"
        isChecked={isChecked}
        handleClick={handleToggle}
        svgCx="submit__form__body__notify__check__svg"
      >
        Send me post reply notifications
      </Checkbox>
      <div className="submit__form__body__notify__connect">
        Connect accounts to share your post
      </div>
    </div>
  );
};

export default SubmitFormBodyContentNotify;
