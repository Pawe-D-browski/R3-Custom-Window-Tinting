import { Box, Flex, Heading, Text } from "@radix-ui/themes";
import ButtonLink from "@/components/generic/ButtonLink";
import Card from "@/components/generic/Card";
import { FaShieldHalved, FaSnowflake, FaEye, FaSun, FaLeaf, FaMoneyBillWave } from "react-icons/fa6";
import IconLabel from "@/components/generic/IconLabel";

export default function BenefitsCard() {
  return (
    <Card>
      <Flex direction="column" gap="6" align="center" py="4">
        <Heading size="6" align="center">
          Why Choose Window Tinting?
        </Heading>

        <Flex direction={{ initial: "column", sm: "row" }} gap="6" wrap="wrap" justify="center">
          <Box style={{ maxWidth: "300px" }}>
            <IconLabel Icon={FaSnowflake}>
              <Heading size="3">Heat Reduction</Heading>
            </IconLabel>
            <Text>
              Keep your vehicle or building cooler by blocking up to 70% of the sun&apos;s heat, reducing air
              conditioning costs.
            </Text>
          </Box>

          <Box style={{ maxWidth: "300px" }}>
            <IconLabel Icon={FaShieldHalved}>
              <Heading size="3">UV Protection</Heading>
            </IconLabel>
            <Text>
              Our window films block up to 99% of harmful UV rays, protecting your skin and preventing interior fading.
            </Text>
          </Box>

          <Box style={{ maxWidth: "300px" }}>
            <IconLabel Icon={FaEye}>
              <Heading size="3">Privacy & Security</Heading>
            </IconLabel>
            <Text>
              Enhance privacy and security with tinted windows that make it harder for prying eyes to see inside.
            </Text>
          </Box>

          <Box style={{ maxWidth: "300px" }}>
            <IconLabel Icon={FaSun}>
              <Heading size="3">Glare Reduction</Heading>
            </IconLabel>
            <Text>
              Reduce eye strain and improve visibility by minimizing harsh glare from the sun, especially while driving.
            </Text>
          </Box>

          <Box style={{ maxWidth: "300px" }}>
            <IconLabel Icon={FaLeaf}>
              <Heading size="3">Energy Efficiency</Heading>
            </IconLabel>
            <Text>
              Lower your energy bills by improving insulation and reducing the need for excessive heating or cooling.
            </Text>
          </Box>

          <Box style={{ maxWidth: "300px" }}>
            <IconLabel Icon={FaMoneyBillWave}>
              <Heading size="3">Increased Value</Heading>
            </IconLabel>
            <Text>
              Add value to your vehicle or property with quality window tinting that enhances appearance and
              functionality.
            </Text>
          </Box>
        </Flex>

        <ButtonLink href="/contact" size="3">
          Request a Quote
        </ButtonLink>
      </Flex>
    </Card>
  );
}
