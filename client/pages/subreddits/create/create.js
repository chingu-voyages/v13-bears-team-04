import React from "react";
import CreateAdult from "./createadult";
import CreateFields from "./createfields";
import CreateType from "./createtype";
import Button from "../../../components/Button";
import "./create.scss";

export default function Create() {
  function handleSubmit() {
    console.log("processing...");
  }

  return (
    <div className="subredditscreate-container">
      <div className="subcreate__left" />
      <div className="subcreate__right">
        <h1 className="subcreate__header">Create a community</h1>
        <CreateFields />
        <CreateType checkedValue="public" />
        <CreateAdult isChecked={false} />
        <Button
          cx="subcreate__button"
          text="Create Community"
          handleClick={handleSubmit}
        />
      </div>
    </div>
  );
}
