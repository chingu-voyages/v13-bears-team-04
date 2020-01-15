import React, { useState, useEffect } from "react";
import Router from "next/router";

import CreateAdult from "./createadult";
import CreateFields from "./createfields";
import CreateType from "./createtype";
import Button from "../../../components/Button";

import { useAuthPopup } from "../../../contexts/authpopup";
import { useUser } from "../../../contexts/user";
import fetchIt from "../../../utils/fetch";
import "./create.scss";

export default function Create() {
  const { authPopupName, setAuthPopup } = useAuthPopup();
  const { user } = useUser();

  // used to redirect user if they have donkey brains
  const [timesClosed, setTimesClosed] = useState(0);

  // the following are used to create a community
  const [name, setName] = useState("");
  const [topics, setTopics] = useState([]);
  const [description, setDescription] = useState("");
  const [comType, setComType] = useState("public");
  const [isOver18, setIsOver18] = useState(false);

  // used to force user to log in and redirect them if they don't
  useEffect(() => {
    let id;
    // if the user isn't logged in, show the popup
    // if they close the popup, show it again
    if (!user && !authPopupName) {
      // if the user closes the popup 3 times, send them back to the homepage
      if (timesClosed === 3) {
        setAuthPopup("");
        Router.push("/");
      } else {
        id = setTimeout(() => {
          setTimesClosed(state => state + 1);
          setAuthPopup("signup");
        }, 750);
      }
    }
    return () => clearTimeout(id);
  }, [authPopupName, user]);

  async function handleSubmit() {
    console.log("processing...");
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
      const newCommunity = await fetchIt("/community", options);
      console.log(newCommunity);
    } catch (err) {
      console.log(err.message);
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
        <Button
          cx="subcreate__button"
          text="Create Community"
          handleClick={handleSubmit}
        />
      </div>
    </div>
  );
}
