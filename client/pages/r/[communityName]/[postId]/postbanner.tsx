import React from "react";
import Button from "../../../../components/Button";

type Props = {
  title: string;
  votes: string[];
};

export default function PostBanner({ title, votes }: Props): JSX.Element {
  return (
    <div className="viewpost-banner__container">
      {votes.map(vote => (
        <span key={vote}>{vote}</span>
      ))}
      <h2>{title}</h2>
      <Button
        text="Close"
        icon="times"
        size="tight"
        cx="viewpost-banner__closebtn"
      />
    </div>
  );
}
