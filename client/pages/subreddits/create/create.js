import React, { useState } from "react";
import Router from "next/router";

import CreateAdult from "./createadult";
import CreateFields from "./createfields";
import CreateType from "./createtype";
import Button from "../../../components/Button";
import MessageBox from "../../../components/MessageBox";

import { useForceSignIn, useMessageBox } from "../../../hooks";
import { useUser } from "../../../contexts/user";
import fetchIt from "../../../utils/fetch";

export default function Create() {
  useForceSignIn();

  const { user, setUser } = useUser();
  const { msg, status, setMessageBox, resetMessageBox } = useMessageBox();

  // the following are used to create a community
  const [name, setName] = useState("");
  const [topics, setTopics] = useState([]);
  const [description, setDescription] = useState("");
  const [comType, setComType] = useState("public");
  const [isOver18, setIsOver18] = useState(false);

  async function handleSubmit() {
    setMessageBox({ msg: "Processing...", status: "default" });

    try {
      const body = JSON.stringify({
        name,
        topics: topics.map(topic => topic.value),
        description,
        communityType: comType,
        isOver18,
        userId: user._id,
      });
      const options = { method: "POST", body, ctx: {} };
      const data = await fetchIt("/community", options);
      const { newCommunity, updatedUser } = data;
      // update the current user context
      setUser(updatedUser);
      // send user to new community
      Router.push(`/r/${newCommunity.name}`);
    } catch (err) {
      setMessageBox({ msg: err.message, status: "error" });
    }
  }

  return (
    <div className="subredditscreate-container">
      <div className="subcreate__left" />
      <div className="subcreate__right">
        <h1 className="subcreate__header">Create a community</h1>
        <CreateFields
          setName={setName}
          setTopics={setTopics}
          setDescription={setDescription}
          name={name}
          topics={topics}
          description={description}
        />
        <CreateType setComType={setComType} checkedValue={comType} />
        <CreateAdult setIsOver18={setIsOver18} isChecked={isOver18} />
        <MessageBox
          msg={msg}
          status={status}
          handleClose={resetMessageBox}
          mT={12}
          mB={-20}
        />
        <Button
          cx="subcreate__button"
          text="Create Community"
          handleClick={handleSubmit}
        />
      </div>
    </div>
  );
}
