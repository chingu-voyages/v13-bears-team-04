import React from "react";
import SubmitFormBodyActionsTagsBtn from "./submitformbodyactionstagsbtn";

const labelBtns = [
  {
    icon: "plus",
    text: "OC",
    backgroundColor: "rgb(255, 69, 0)",
    dropdown: false,
    disabled: true,
  },
  {
    icon: "plus",
    text: "SPOILER",
    backgroundColor: "rgb(0, 0, 0)",
    dropdown: false,
    disabled: false,
  },
  {
    icon: "plus",
    text: "NSFW",
    backgroundColor: "rgb(255, 88, 91)",
    dropdown: false,
    disabled: false,
  },
  {
    icon: "tag",
    text: "FLAIR",
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
