import { Link } from "@radix-ui/themes";
import React from "react";
import IconLabel from "./IconLabel";
import styles from "./IconLabelLink.module.css";

type IconType = React.ComponentType<{ size: number }>;

interface IconLabelLinkProps {
  Icon: IconType;
  children: React.ReactNode;
  href: string;
  onClick?: (event: React.MouseEvent<HTMLAnchorElement>) => void;
}

export default function IconLabelLink({ Icon, children, href, onClick }: IconLabelLinkProps) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.iconLink}
      style={{
        textDecoration: "none",
        display: "flex",
        alignItems: "center",
        gap: "var(--space-2)",
        borderRadius: "var(--radius-6)",
        paddingRight: "var(--space-2)",
        width: "fit-content",

        cursor: "pointer",
      }}
      onClick={onClick}
    >
      <IconLabel Icon={Icon}>{children}</IconLabel>
    </Link>
  );
}
