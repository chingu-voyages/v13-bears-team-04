import React, { useState } from "react";
import Button from "../Button";
import "../Button/";

export default function HomeBox() {
  return (
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
  );
}
