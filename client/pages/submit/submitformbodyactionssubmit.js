import React from "react";
import Button from "../../components/Button";
import fetchIt from "../../utils/fetch";
import { useCreatePost } from "../../contexts/createpost";
import { useUser } from "../../contexts/user";

export default function SubmitFormBodyActionsSubmit() {
  const { state } = useCreatePost();
  const { user } = useUser();

  async function handleSubmit() {
    console.log("processing...");
    try {
      const body = JSON.stringify({
        community: state.communityId,
        postType: state.postType,
        title: state.title,
        content: JSON.stringify(state.content),
        link: state.link,
        isOver18: state.isOver18,
        isOC: state.isOC,
        isSpoiler: state.isSpoiler,
        author: user._id,
      });
      const newPost = await fetchIt(`/posts/${state.communityId}`, {
        method: "POST",
        body,
        ctx: {},
      });
      console.log(newPost);
    } catch (err) {
      console.log(err);
    }
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
