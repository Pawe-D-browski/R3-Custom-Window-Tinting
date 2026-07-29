"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Flex, IconButton } from "@radix-ui/themes";
import { FaSun, FaMoon } from "react-icons/fa6";

export default function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <Flex>
      <Flex width="40px" height="40px" align="center" justify="end">
        <IconButton
          variant="ghost"
          color="gray"
          onClick={() => mounted && setTheme(resolvedTheme === "dark" ? "light" : "dark")}
          aria-label="Toggle theme"
          style={{
            cursor: "pointer",
            visibility: mounted ? "visible" : "hidden",
          }}
        >
          {mounted ? resolvedTheme === "dark" ? <FaSun size={20} /> : <FaMoon size={20} /> : null}
        </IconButton>
      </Flex>
    </Flex>
  );
}
