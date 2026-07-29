import { Box, Flex, Heading, Strong } from "@radix-ui/themes";

import BackgroundVideo from "./BackgroundVideo";
import ButtonLink from "@/components/generic/ButtonLink";
import Card from "@/components/generic/Card";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <Card>
      <BackgroundVideo />

      <Box
        style={{
          position: "relative",
          overflow: "hidden",
          borderRadius: "var(--radius-4)",
        }}
      >
        <Box
          style={{
            position: "relative",
            borderRadius: "var(--radius-4)",
            backdropFilter: "blur(32px)",
          }}
          p="5"
        >
          <Flex direction={"column"} align="center" justify="center" py="9">
            <Heading size="9" className={styles.heroHeading} align="center" style={{ textWrap: "balance" }}>
              <Strong style={{ color: "var(--accent-9)" }}>Transform</Strong> Your Windows
            </Heading>
            <div style={{ height: "48px" }} />
            <Heading size={{ initial: "3", xs: "4" }} align="center" style={{ textWrap: "balance" }}>
              Quality window tinting that blocks heat, UV rays, and enhances privacy.
            </Heading>
            <div style={{ height: "48px" }} />
            <ButtonLink href="/contact" size={{ initial: "3", xs: "4" }}>
              Get a Free Quote
            </ButtonLink>
          </Flex>
        </Box>
      </Box>
    </Card>
  );
}
