import React from "react";
import { usePost } from "../../postcontext";

export default function SubmitFormHeading() {
  const {
    state: { isEdit },
  } = usePost();

  return (
    <div className="submit__form__heading">
      <div className="submit__form__heading__title">
        {isEdit ? "Edit" : "Create a"} post
      </div>

      {!isEdit && (
        <button className="submit__form__heading__button" type="button">
          Drafts
          <span>0</span>
        </button>
      )}
    </div>
  );
}
