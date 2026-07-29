import { Box, Container, Flex, Separator } from "@radix-ui/themes";

import BrandSection from "./BrandSection";
import Navigation from "./Navigation";
import ThemeToggle from "./ThemeToggle";

export default function Header() {
  return (
    <Box
      style={{
        backgroundColor: "var(--gray-2)",
        position: "fixed",
        width: "100%",
        top: 0,
        zIndex: 100,
      }}
    >
      <Container px="24px" py="12px">
        <Flex justify="between" align="center">
          <BrandSection />
          <Navigation />
          <ThemeToggle />
        </Flex>
      </Container>
      <Separator size="4" style={{ backgroundColor: "var(--gray-5)" }} />
    </Box>
  );
}
