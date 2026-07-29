import { Box, Flex, Heading, Strong, Text } from "@radix-ui/themes";
import ButtonLink from "@/components/generic/ButtonLink";
import Card from "@/components/generic/Card";
import { FaLayerGroup } from "react-icons/fa6";
import IconLabel from "@/components/generic/IconLabel";

export default function FilmsCard() {
  return (
    <Card>
      <Flex direction="column" gap="6" align="center" py="4">
        <IconLabel Icon={FaLayerGroup}>
          <Heading size="6" align="center">
            Our Premium Window Films
          </Heading>
        </IconLabel>

        <Text align="center" size="4" style={{ textWrap: "pretty" }}>
          At R3 Custom Window Tinting, we carefully select the right film for each specific application. We work with
          industry-leading manufacturers to provide you with the highest quality window films that deliver exceptional
          performance and durability.
        </Text>

        <Flex direction={{ initial: "column", sm: "row" }} gap="6" wrap="wrap" justify="center">
          <Box style={{ maxWidth: "300px" }}>
            <Heading size="3">Ceramic Films</Heading>
            <Text>
              Our premium ceramic films use non-conductive ceramic particles to reject heat without interfering with
              electronic signals. They provide superior heat rejection (up to 70%), excellent UV protection, and
              maintain clarity without a metallic appearance.
            </Text>
          </Box>

          <Box style={{ maxWidth: "300px" }}>
            <Heading size="3">Carbon Films</Heading>
            <Text>
              Carbon films contain carbon particles that block up to 40% of infrared light. These films provide good
              heat rejection, UV protection, and a matte finish that won&apos;t fade over time. Ideal for those seeking
              a balance of performance and value.
            </Text>
          </Box>

          <Box style={{ maxWidth: "300px" }}>
            <Heading size="3">Metalized Films</Heading>
            <Text>
              These films contain microscopic metal particles that reflect heat and UV radiation. They offer excellent
              durability and scratch resistance while providing a more reflective appearance. Great for maximum privacy
              and heat reduction.
            </Text>
          </Box>

          <Box style={{ maxWidth: "300px" }}>
            <Heading size="3">Dyed Films</Heading>
            <Text>
              Our dyed films absorb solar heat and provide good glare reduction at an economical price point. While not
              as heat-resistant as ceramic or metalized films, they offer excellent privacy and UV protection for
              budget-conscious customers.
            </Text>
          </Box>

          <Box style={{ maxWidth: "300px" }}>
            <Heading size="3">Specialty Films</Heading>
            <Text>
              We offer specialty films for unique needs, including security films that hold shattered glass together,
              decorative films for aesthetic purposes, and anti-graffiti films for commercial properties in high-traffic
              areas.
            </Text>
          </Box>
        </Flex>

        <Text align="center" size="4">
          <Strong>We always choose the right film for your specific needs.</Strong> Our experts will help you select the
          perfect window film based on your requirements for heat rejection, UV protection, privacy, and budget
          considerations.
        </Text>

        <ButtonLink href="/contact" size="3">
          Get Expert Film Recommendations
        </ButtonLink>
      </Flex>
    </Card>
  );
}
