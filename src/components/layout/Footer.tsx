import { Flex, Text } from "@radix-ui/themes";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <Flex justify="center" align="center" p="12px">
      <Text size="1" style={{ color: "var(--gray-8)", userSelect: "none" }}>
        Copyright © {currentYear} R3 Custom Window Tinting
      </Text>
    </Flex>
  );
}
