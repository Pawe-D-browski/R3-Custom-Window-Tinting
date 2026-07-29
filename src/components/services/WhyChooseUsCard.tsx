import { Box, Flex, Heading, Text } from "@radix-ui/themes";
import ButtonLink from "@/components/generic/ButtonLink";
import Card from "@/components/generic/Card";

export default function WhyChooseUsCard() {
  return (
    <Card>
      <Flex direction="column" gap="6" align="center" py="4">
        <Heading size="6">Why Choose R3 Custom Window Tinting?</Heading>

        <Flex direction={{ initial: "column", sm: "row" }} gap="6" wrap="wrap" justify="center">
          <Box style={{ maxWidth: "300px" }}>
            <Heading size="3">Experience</Heading>
            <Text>
              With years of experience in the industry, we have the expertise to handle any window tinting project with
              precision and care.
            </Text>
          </Box>

          <Box style={{ maxWidth: "300px" }}>
            <Heading size="3">Quality Materials</Heading>
            <Text>
              We use only premium window films from trusted manufacturers that offer superior performance and
              durability.
            </Text>
          </Box>

          <Box style={{ maxWidth: "300px" }}>
            <Heading size="3">Satisfaction Guaranteed</Heading>
            <Text>
              We stand behind our work with warranties and a commitment to customer satisfaction on every project.
            </Text>
          </Box>

          <Box style={{ maxWidth: "300px" }}>
            <Heading size="3">Competitive Pricing</Heading>
            <Text>
              We offer high-quality window tinting services at competitive prices to provide excellent value for our
              customers.
            </Text>
          </Box>
        </Flex>

        <ButtonLink href="/contact" size={{ initial: "3", xs: "4" }}>
          Contact Us Today
        </ButtonLink>
      </Flex>
    </Card>
  );
}
