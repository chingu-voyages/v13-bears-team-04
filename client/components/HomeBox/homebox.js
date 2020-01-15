import React from "react";
import Button from "../Button";
import "./homebox.scss";

export default function HomeBox() {
  return (
    <div className="row">
      <div className="col-2-0f-4 homebox">
        <div>image</div>
        <h1>Home</h1>
        <p>Your personal Reddit frontpage. Come here</p>
        <p>to check in with your favorite communities.</p>
        <Button cx="homebox__btn" text="Create Post" />
        <Button
          href="/subreddits/create"
          cx="homebox__btn"
          color="blue"
          text="Create Community"
          inverted
        />
      </div>
    </div>
  );
}
