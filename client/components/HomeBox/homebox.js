import React, { useState } from "react";
import "./homebox.scss";
import Button from "../Button/button";
import "../Button/button.scss";

export default function HomeBox() {
  return (
    <>
      <div className="row">
        <div className="col-2-0f-4 homebox">
          <div>image</div>
          <h1>Home</h1>
          <p>Your personal Reddit frontpage. Come here</p>
          <p>to check in with your favorite communities.</p>
          <div className="homebox-btn">
            <Button color="blue" inverted={false}>
              Create Post
            </Button>
          </div>
          <div className="homebox-btn">
            <Button color="blue" inverted={false}>
              Create Community
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
