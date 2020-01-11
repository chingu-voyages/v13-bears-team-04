import React from "react";
import SubmitFormBodyContentTitle from "./submitformbodycontenttitle";
import CustomEditor from "../../components/CustomEditor";
import { useCreatePost } from "../../contexts/createpost";
import { useIsDesktop } from "../../hooks";

export default function SubmitFormBodyContent({ isUserBrowser }) {
  const { state, createPostDispatch } = useCreatePost();
  const isDesktop = useIsDesktop(isUserBrowser ? 1200 : 450);

  return (
    <div className="submit__form__body__content">
      <SubmitFormBodyContentTitle />
      {/* we only want to show the rich text editor on desktop */}
      {isDesktop ? (
        <CustomEditor
          value={state.content}
          setValue={val => {
            createPostDispatch({ type: "SET_CONTENT", content: val });
          }}
        />
      ) : (
        <textarea name="sds" id="sds" cols="30" rows="10"></textarea>
      )}
    </div>
  );
}
