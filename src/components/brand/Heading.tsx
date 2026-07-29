import { Heading } from "@radix-ui/themes";
import React from "react";

interface BrandHeadingProps {
  size?: "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9";
}

export default function BrandHeading({ size = "5" }: BrandHeadingProps) {
  return (
    <Heading size={size} style={{ userSelect: "none" }}>
      Custom Window Tinting
    </Heading>
  );
}
