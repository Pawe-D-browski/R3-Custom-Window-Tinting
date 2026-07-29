import { Box, Flex } from "@radix-ui/themes";
import React from "react";

type IconType = React.ComponentType<{
  size: number;
  style?: React.CSSProperties;
}>;

interface IconLabelProps {
  Icon: IconType;
  children: React.ReactNode;
}

export default function IconLabel({ Icon, children }: IconLabelProps) {
  return (
    <Flex align="center" gap="2" style={{ width: "fit-content" }}>
      <Box
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          minWidth: "32px",
          minHeight: "32px",
          flexShrink: 0,
        }}
      >
        <Icon size={20} style={{ color: "var(--accent-9)" }} />
      </Box>
      {children}
    </Flex>
  );
}
