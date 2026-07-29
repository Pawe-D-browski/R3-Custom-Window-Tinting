import { Box, Flex, Heading, Text } from "@radix-ui/themes";
import Card from "@/components/generic/Card";
import Image from "next/image";
import { AssetPath } from "@/paths/AssetPath";

export default function OwnerCard() {
  return (
    <Card>
      <Flex direction={{ initial: "column", md: "row" }} gap="6" align="stretch" height="100%">
        <Flex
          direction="column"
          gap="6"
          align={{ initial: "center", md: "start" }}
          width={{ initial: "100%", md: "50%" }}
        >
          <Heading size="6" align={{ initial: "center", md: "left" }}>
            Meet Rick Roach
          </Heading>

          <Text align={{ initial: "center", md: "left" }} size="4" style={{ textWrap: "pretty" }}>
            As the owner of R3 Custom Window Tinting, Rick Roach brings years of expertise to Stillwater&apos;s window
            tinting industry.
            <br />
            His commitment to quality and customer satisfaction has established R3 as the premier choice for automotive,
            residential, and commercial window tinting services, delivering exceptional workmanship with premium
            materials on every project.
          </Text>
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
            src={new AssetPath("owner-Rick-Roach.webp").toString()}
            alt="Rick Roach - Owner of R3 Custom Window Tinting"
            fill
            style={{
              objectFit: "cover",
              minHeight: "350px",
              height: "100%",
              userSelect: "none",
              objectPosition: "center",
            }}
            priority
            sizes="(max-width: 1024px) 100vw, (max-width: 1640px) 50vw, 33vw"
          />
        </Box>
      </Flex>
    </Card>
  );
}
