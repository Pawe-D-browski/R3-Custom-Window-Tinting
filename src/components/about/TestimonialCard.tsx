import { Box, Flex, Text } from "@radix-ui/themes";
import { FaStar } from "react-icons/fa6";
import Image from "next/image";
import Card from "../generic/Card";
import { AssetPath } from "@/paths/AssetPath";

interface TestimonialCardProps {
  name: string;
  review: string;
  imageSrc: string;
}

export default function TestimonialCard({ name, review, imageSrc }: TestimonialCardProps) {
  return (
    <Card>
      <Flex direction="column" align="center" gap="3">
        <Box
          style={{
            position: "relative",
            width: "100px",
            height: "100px",
            overflow: "hidden",
            borderRadius: "var(--radius-full)",
          }}
        >
          <Image
            src={new AssetPath(imageSrc).toString()}
            alt={name}
            fill
            sizes="100px"
            style={{
              objectFit: "cover",
              userSelect: "none",
            }}
            priority
          />
        </Box>

        <Text size="5" weight="bold">
          {name}
        </Text>

        <Flex gap="1">
          {[...Array(5)].map((_, i) => (
            <FaStar key={i} size={20} style={{ color: "var(--green-9)" }} />
          ))}
        </Flex>

        <Text size="3" align="center" style={{ textWrap: "pretty" }}>
          {review}
        </Text>
      </Flex>
    </Card>
  );
}
