import React from "react";
import Link from "next/link";

interface Props {
  href: string;
  as?: string;
  className?: string;
  children: React.ReactNode;
}

const ButtonWithLink: React.FC<Props> = ({ href, as, className, children }) => (
  <Link href={href} as={as || href}>
    <a className={className}>{children}</a>
  </Link>
);

export default ButtonWithLink;
