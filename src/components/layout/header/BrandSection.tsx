"use client";

import Link from "next/link";
import { Box, Button, Flex } from "@radix-ui/themes";

import Logo from "@/components/brand/Logo";
import BrandHeading from "@/components/brand/Heading";
import styles from "./BrandSection.module.css";

export default function BrandSection() {
  return (
    <Flex align="center">
      <Button
        asChild
        size="3"
        variant="ghost"
        style={{ margin: "-6px", padding: "6px", borderRadius: "10px" }}
        className={styles.brandButton}
      >
        <Link href="/" style={{ textDecoration: "none", color: "inherit" }}>
          <Logo size={40} />

          <Box display={{ initial: "none", sm: "block" }}>
            <BrandHeading />
          </Box>
        </Link>
      </Button>
    </Flex>
  );
}
