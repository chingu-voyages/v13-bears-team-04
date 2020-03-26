import React from "react";
import { usePost } from "../../postcontext";

export default function SubmitFormBodyContentTitle() {
  const { state, postDispatch } = usePost();

  return (
    <div className="submit__form__body__content__title">
      <input
        type="text"
        placeholder="Title"
        minLength="4"
        maxLength="300"
        value={state.title}
        onChange={e => {
          postDispatch({
            type: "SET_TITLE",
            title: e.target.value,
          });
        }}
        className="submit__form__body__content__title__input"
      />
      <div className="submit__form__body__content__title__count">
        {`${state.title.length}/300`}
      </div>
    </div>
  );
}
