"use client";

import Link from "next/link";
import { Box, Button, Flex, Heading } from "@radix-ui/themes";

export default function NotFound() {
  return (
    <Box
      style={{
        width: "100%",
        maxWidth: "var(--container-3)",
        border: "1px solid var(--gray-5)",
        borderRadius: "var(--radius-6)",
        backgroundColor: "transparent",
        backdropFilter: "blur(32px)",
        overflow: "hidden",
        padding: "24px",
        paddingBlock: "96px",
      }}
    >
      <Flex direction="column" align="center" justify="center">
        <Heading size="8" style={{ textAlign: "center" }}>
          Page not found
        </Heading>
        <div style={{ height: "48px" }} />
        <Button asChild size="4">
          <Link href="/">Go to home page</Link>
        </Button>
      </Flex>
    </Box>
  );
}
