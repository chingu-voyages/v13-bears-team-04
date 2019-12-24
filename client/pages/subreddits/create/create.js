import React, { useState } from "react";
import CreateAdult from "./createadult";
import CreateFields from "./createfields";
import CreateType from "./createtype";
import Button from "../../../components/Button";
import "./create.scss";

export default function Create() {
  const [name, setName] = useState("");
  const [topics, setTopics] = useState([]);
  const [description, setDescription] = useState("");
  const [comType, setComType] = useState("public");
  const [isOver18, setIsOver18] = useState(false);

  function handleSubmit() {
    console.log("processing...");
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
