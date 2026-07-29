import { Flex, Heading, Text } from "@radix-ui/themes";

export default function ContactHeading() {
  return (
    <Flex direction="column" gap="3">
      <Heading size="7">Contact Us</Heading>
      <Text style={{ textWrap: "pretty" }}>
        Have questions about our services? Need a quote? We&apos;re here to help! Reach out to us through any of the
        methods below.
      </Text>
    </Flex>
  );
}
