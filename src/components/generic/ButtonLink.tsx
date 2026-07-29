"use client";

import { Button, ButtonProps } from "@radix-ui/themes";
import Link from "next/link";
import { ReactNode } from "react";

export interface ButtonLinkProps {
  children: ReactNode;
  href: string;
  variant?: ButtonProps["variant"];
  size?: ButtonProps["size"];
  className?: string;
  style?: React.CSSProperties;
  external?: boolean;
}

export default function ButtonLink({
  children,
  href,
  variant = "solid",
  size = "3",
  className,
  style = {},
  external = false,
}: ButtonLinkProps) {
  const buttonStyle = {
    cursor: "pointer",
    textDecoration: "none",
    ...style,
  };

  const linkProps = external ? { target: "_blank", rel: "noopener noreferrer" } : {};

  return (
    <Button asChild variant={variant} size={size} className={className} style={buttonStyle}>
      <Link href={href} style={{ textDecoration: "none" }} {...linkProps}>
        {children}
      </Link>
    </Button>
  );
}
