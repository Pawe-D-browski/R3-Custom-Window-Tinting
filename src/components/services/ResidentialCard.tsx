import { Box, Flex, Heading, Strong, Text } from "@radix-ui/themes";
import ButtonLink from "@/components/generic/ButtonLink";
import Card from "@/components/generic/Card";
import { FaHouse } from "react-icons/fa6";
import IconLabel from "@/components/generic/IconLabel";
import Image from "next/image";
import { AssetPath } from "@/paths/AssetPath";

export default function ResidentialCard() {
  return (
    <Card>
      <Flex
        direction={{ initial: "column", md: "row" }}
        gap="6"
        align="stretch"
        height="100%"
        style={{ textWrap: "balance" }}
      >
        <Flex
          direction="column"
          gap="6"
          align={{ initial: "center", md: "start" }}
          width={{ initial: "100%", md: "50%" }}
        >
          <IconLabel Icon={FaHouse}>
            <Heading size="6" align={{ initial: "center", md: "left" }}>
              Residential Window Tinting
            </Heading>
          </IconLabel>

          <Text align={{ initial: "center", md: "left" }} size="4">
            Transform your home with window tinting that improves your environment and privacy while protecting your
            furniture from fading.
          </Text>

          <Text size="4" align={{ initial: "center", md: "left" }}>
            <Strong>Applications:</Strong> Windows, Glass Doors, Skylights, Sunrooms, and the like.
          </Text>

          <ButtonLink href="/contact" size="3">
            Request a Quote
          </ButtonLink>
        </Flex>

        <Box
          width={{ initial: "100%", md: "50%" }}
          style={{
            position: "relative",
            borderRadius: "var(--radius-4)",
            overflow: "hidden",
            minHeight: "350px",
            height: "100%",
          }}
        >
          <Image
            src={new AssetPath("product-home-tint-1.webp").toString()}
            alt="Residential Window Tinting"
            fill
            style={{
              objectFit: "cover",
              minHeight: "350px",
              height: "100%",
              userSelect: "none",
            }}
            priority
            sizes="(max-width: 1024px) 100vw, (max-width: 1640px) 50vw, 33vw"
          />
        </Box>
      </Flex>
    </Card>
  );
}
