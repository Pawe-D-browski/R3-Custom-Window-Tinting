import { Flex, Heading, Strong, Text } from "@radix-ui/themes";
import ButtonLink from "@/components/generic/ButtonLink";
import Card from "@/components/generic/Card";

export default function QualityCard() {
  return (
    <Card>
      <Flex direction="column" gap="6" align="center" py="4">
        <Heading size="6" align="center">
          Our Commitment to Quality
        </Heading>

        <Text align="center" size="4">
          At R3 Custom Window Tinting, we use only premium window films and materials that are backed by manufacturer
          warranties. Our skilled technicians ensure precise installation with attention to detail, resulting in a
          flawless finish every time.
        </Text>

        <Text align="center" size="4">
          <Strong>Experience the difference of professional window tinting.</Strong> From sedans to SUVs, homes to
          offices, we cater to all your window tinting needs with customized solutions that match your preferences and
          requirements.
        </Text>

        <ButtonLink href="/about" size="3" variant="outline">
          Learn More About Us
        </ButtonLink>
      </Flex>
    </Card>
  );
}
