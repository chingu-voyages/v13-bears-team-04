import React from "react";
import SubmitFormBodyActionsTagsBtn from "./formbodyactionstagsbtn";

const labelBtns = [
  {
    icon: "plus",
    text: "OC",
    value: "isOC",
    backgroundColor: "rgb(255, 69, 0)",
    dropdown: false,
    disabled: false,
  },
  {
    icon: "plus",
    text: "SPOILER",
    value: "isSpoiler",
    backgroundColor: "rgb(0, 0, 0)",
    dropdown: false,
    disabled: false,
  },
  {
    icon: "plus",
    text: "NSFW",
    value: "isOver18",
    backgroundColor: "rgb(255, 88, 91)",
    dropdown: false,
    disabled: false,
  },
  {
    icon: "tag",
    text: "FLAIR",
    value: "neeeeeeedFlair",
    backgroundColor: "none",
    dropdown: true,
    disabled: true,
  },
];

const SubmitFormBodyActionsTags = () => (
  <div>
    {labelBtns.map(props => (
      <SubmitFormBodyActionsTagsBtn key={`${props.text}-tag`} {...props} />
    ))}
  </div>
);

export default SubmitFormBodyActionsTags;
