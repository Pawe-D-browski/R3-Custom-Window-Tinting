import { Flex, Heading, Text } from "@radix-ui/themes";

export default function LocationHeading() {
  return (
    <Flex direction="column" gap="3">
      <Heading size="7">Visit Our Shop</Heading>
      <Text style={{ textWrap: "pretty" }}>
        Stop by our shop for a free consultation or to get your vehicle&apos;s windows tinted by our experienced
        professionals.
      </Text>
    </Flex>
  );
}
