import React from "react";
import { Editor } from "../../Slate";
import SubmitFormBodyContentTitle from "./formbodycontenttitle";
import { useCreatePost } from "../../../contexts/createpost";

export default function SubmitFormBodyContent() {
  const { state, createPostDispatch } = useCreatePost();

  const setValue = value => {
    createPostDispatch({ type: "SET_CONTENT", content: value });
  };

  return (
    <div className="submit__form__body__content">
      <SubmitFormBodyContentTitle />
      <Editor value={state.content} setValue={setValue} />
    </div>
  );
}
