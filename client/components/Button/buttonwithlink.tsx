import React from "react";
import Link from "next/link";

interface Props {
  href: string;
  className?: string;
  children: React.ReactNode;
}

const ButtonWithLink: React.FC<Props> = ({ href, className, children }) => (
  <Link href={href}>
    <a className={className}>{children}</a>
  </Link>
);

export default ButtonWithLink;
