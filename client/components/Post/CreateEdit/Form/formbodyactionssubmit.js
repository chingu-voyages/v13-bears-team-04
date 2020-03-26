import React from "react";
import Router from "next/router";

import Button from "../../../Button";
import MessageBox from "../../../MessageBox";

import { useMessageBox } from "../../../../hooks";
import { useUser } from "../../../../contexts/user";
import fetchIt from "../../../../utils/fetch";
import { usePost } from "../../postcontext";

export default function SubmitFormBodyActionsSubmit() {
  const { state } = usePost();
  const { user, setUser, token } = useUser();
  const { status, msg, setMessageBox } = useMessageBox();

  async function handleSubmit() {
    setMessageBox({ msg: "Processing...", status: "default" });

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
      const data = await fetchIt(`/posts/community/${state.communityId}`, {
        method: "POST",
        body,
        token,
      });

      const { postId, communityName, updatedUser } = data;
      // update the current user context
      setUser({ type: "SET_USER", token, user: updatedUser });
      // send user to new post
      Router.push(
        "/r/[communityName]/[postId]",
        `/r/${communityName}/${postId}`
      );
    } catch (err) {
      setMessageBox({ msg: err.message, status: "error" });
    }
  }

  function handleSaveDraft() {
    console.log("saving...");
  }

  return (
    <>
      <div>
        {!state.isEdit && (
          <Button inverted text="Save Draft" handleClick={handleSaveDraft} />
        )}

        <Button
          text={state.isEdit ? "Update" : "Post"}
          handleClick={handleSubmit}
        />
      </div>
      <MessageBox msg={msg} status={status} mT={16} mB={0} />
    </>
  );
}
