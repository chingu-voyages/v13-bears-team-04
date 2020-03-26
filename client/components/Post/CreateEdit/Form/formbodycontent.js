import React from "react";
import { Editor } from "../../../Slate";
import SubmitFormBodyContentTitle from "./formbodycontenttitle";
import { usePost } from "../../postcontext";

export default function SubmitFormBodyContent() {
  const { state, postDispatch } = usePost();

  const setValue = value => {
    postDispatch({ type: "SET_CONTENT", content: value });
  };

  return (
    <div className="submit__form__body__content">
      <SubmitFormBodyContentTitle />
      <Editor value={state.content} setValue={setValue} />
    </div>
  );
}
