import React from "react";
import Button from "../../components/Button";
// import { useCreatePost } from "../../contexts/createpost";

export default function SubmitFormBodyActionsSubmit() {
  // const { state } = useCreatePost();
  // const {
  //   communityId,
  //   postType,
  //   title,
  //   content,
  //   link,
  //   isOver18,
  //   isOC,
  //   isSpoiler,
  // } = state;

  function handleSubmit() {
    console.log("processing...");
  }

  function handleSaveDraft() {
    console.log("saving...");
  }

  return (
    <div>
      <Button inverted text="Save Draft" handleClick={handleSaveDraft} />
      <Button text="Post" handleClick={handleSubmit} />
    </div>
  );
}
