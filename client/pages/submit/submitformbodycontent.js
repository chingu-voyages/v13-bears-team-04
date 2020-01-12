import React from "react";
import Editor from "../../components/Editor";
import SubmitFormBodyContentTitle from "./submitformbodycontenttitle";
import { useCreatePost } from "../../contexts/createpost";

export default function SubmitFormBodyContent({ isUserBrowser }) {
  const { state, createPostDispatch } = useCreatePost();

  const setValue = value => {
    createPostDispatch({ type: "SET_CONTENT", content: value });
  };

  return (
    <div className="submit__form__body__content">
      <SubmitFormBodyContentTitle />
      <Editor
        isBrowser={isUserBrowser}
        value={state.content}
        setValue={setValue}
      />
    </div>
  );
}
