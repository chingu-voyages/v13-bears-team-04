import React from "react";
import SubmitFormBodyContentTitle from "./submitformbodycontenttitle";
import Text from "../../components/Text";
import { useCreatePost } from "../../contexts/createpost";

export default function SubmitFormBodyContent() {
  const { state, createPostDispatch } = useCreatePost();

  return (
    <div className="submit__form__body__content">
      <SubmitFormBodyContentTitle />
      <Text
        activeOptions={state.activeOptions}
        value={state.content}
        setValue={val => {
          createPostDispatch({ type: "SET_CONTENT", content: val });
        }}
      />
    </div>
  );
}
