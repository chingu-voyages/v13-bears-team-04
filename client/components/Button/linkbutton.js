import React from "react";
import Link from "next/link";

const LinkButton = ({ href, className, children }) => (
  <Link href={href}>
    <a className={className}>{children}</a>
  </Link>
);

export default LinkButton;
