import { Box, Flex, Heading, Strong, Text } from "@radix-ui/themes";
import ButtonLink from "@/components/generic/ButtonLink";
import Card from "@/components/generic/Card";
import { FaBuilding } from "react-icons/fa6";
import IconLabel from "@/components/generic/IconLabel";
import Image from "next/image";
import { AssetPath } from "@/paths/AssetPath";

export default function CommercialCard() {
  return (
    <Card>
      <Flex direction={{ initial: "column", md: "row-reverse" }} gap="6" align="stretch" height="100%">
        <Flex
          direction="column"
          gap="6"
          align={{ initial: "center", md: "start" }}
          width={{ initial: "100%", md: "50%" }}
        >
          <IconLabel Icon={FaBuilding}>
            <Heading size="6" align={{ initial: "center", md: "left" }}>
              Commercial Window Tinting
            </Heading>
          </IconLabel>

          <Text align={{ initial: "center", md: "left" }} size="4" style={{ textWrap: "pretty" }}>
            Improve your business environment with commercial window tinting that reduces energy costs, enhances
            comfort, and creates a more productive workspace.
          </Text>

          <Text size="4" align={{ initial: "center", md: "left" }}>
            <Strong>Suitable for:</Strong> Offices, Retail Stores, Restaurants, Hotels, Schools, and others.
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
            src={new AssetPath("product-commercial-tint-1.jpg").toString()}
            alt="Commercial Window Tinting"
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
