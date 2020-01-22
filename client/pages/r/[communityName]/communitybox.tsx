import React from "react";
import clsx from "clsx";

type Props = {
  header: string;
  cx?: string;
  children: React.ReactNode;
};

export default function CommunityBox(props: Props) {
  const { header, children, cx } = props;
  const className = clsx("community__box", cx);

  return (
    <div className={className}>
      <div className="community__box__header">{header}</div>
      <div className="community__box__content">{children}</div>
    </div>
  );
}
