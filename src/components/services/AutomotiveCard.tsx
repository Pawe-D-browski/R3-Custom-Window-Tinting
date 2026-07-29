import { Box, Flex, Heading, Strong, Text } from "@radix-ui/themes";
import ButtonLink from "@/components/generic/ButtonLink";
import Card from "@/components/generic/Card";
import { FaCar } from "react-icons/fa6";
import IconLabel from "@/components/generic/IconLabel";
import Image from "next/image";
import { AssetPath } from "@/paths/AssetPath";

export default function AutomotiveCard() {
  return (
    <Card>
      <Flex direction={{ initial: "column", md: "row" }} gap="6" align="stretch" height="100%">
        <Flex
          direction="column"
          gap="6"
          align={{ initial: "center", md: "start" }}
          width={{ initial: "100%", md: "50%" }}
        >
          <IconLabel Icon={FaCar}>
            <Heading size="6" align={{ initial: "center", md: "left" }}>
              Automotive Window Tinting
            </Heading>
          </IconLabel>

          <Text align={{ initial: "center", md: "left" }} size="4" style={{ textWrap: "pretty" }}>
            Enhance your vehicle&apos;s appearance while protecting its interior and passengers from harmful UV rays and
            excessive heat with our premium automotive window tinting services.
          </Text>

          <Text size="4" align={{ initial: "center", md: "left" }}>
            <Strong>Vehicles we service:</Strong> Cars, Trucks, SUVs, Vans, RVs, and more.
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
            src={new AssetPath("product-car-tint-3.jpg").toString()}
            alt="Automotive Window Tinting"
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
