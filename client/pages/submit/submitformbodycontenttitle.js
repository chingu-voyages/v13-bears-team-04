import React from "react";
import { useCreatePost } from "../../contexts/createpost";

export default function SubmitFormBodyContentTitle() {
  const { state, createPostDispatch } = useCreatePost();

  return (
    <div className="submit__form__body__content__title">
      <input
        type="text"
        placeholder="Title"
        minLength="4"
        maxLength="300"
        value={state.title}
        onChange={e => {
          createPostDispatch({
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
