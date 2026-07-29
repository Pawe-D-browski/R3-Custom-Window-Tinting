import { Box } from "@radix-ui/themes";
import React from "react";

interface CardProps {
  children: React.ReactNode;
  style?: React.CSSProperties;
}

export default function Card({ children, style }: CardProps) {
  return (
    <Box
      style={{
        border: "1px solid var(--gray-5)",
        borderRadius: "var(--radius-6)",
        backgroundColor: "transparent",
        backdropFilter: "blur(32px)",
        WebkitBackdropFilter: "blur(32px)",
        padding: "var(--space-5)",
        width: "100%",
        ...style,
      }}
    >
      {children}
    </Box>
  );
}
