import { Box, Flex, Heading, Link, Text } from "@radix-ui/themes";
import TestimonialCard from "./TestimonialCard";
import { FaExternalLinkAlt } from "react-icons/fa";

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Korbin Kenmore",
      review:
        "Rick did a great job on tinting my car. I was very pleased with the final outcome. He was great with communication and was efficient with his work.",
      imageSrc: "review-Korbin-Kenmore.jpg",
    },
    {
      name: "Corleigh Green",
      review:
        "Rick is an easy going and energetic guy. He's quick to respond and took care of my window tinting needs in a timely fashion.",
      imageSrc: "reviewer-Corleigh-Green.jpg",
    },
    {
      name: "Jeff Arnett",
      review:
        "Rick is awesome, did my front windshield for a very reasonable price and did a great job. Would recommend to anyone needing a quality tint job!",
      imageSrc: "reviewer-Jeff-Arnett.jpg",
    },
  ];

  return (
    <Flex direction="column" gap="5" align="center">
      <Heading size="6" align="center">
        What Our Customers Say
      </Heading>

      <Flex
        direction={{ initial: "column", sm: "row" }}
        gapX="5"
        gapY={{ initial: "8", sm: "5" }}
        wrap="wrap"
        justify="center"
      >
        {testimonials.map((testimonial, index) => (
          <Box key={index} style={{ flex: "1", minWidth: "308px", maxWidth: "363px" }}>
            <TestimonialCard {...testimonial} />
          </Box>
        ))}
      </Flex>

      <Link
        href="https://maps.google.com/maps?q=R3%20Custom%20Window%20Tinting"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: "flex",
          alignItems: "center",
          gap: "8px",
          color: "var(--accent-9)",
          textDecoration: "none",
          fontWeight: "500",
        }}
      >
        <Text size="3">See more reviews on Google Maps</Text>
        <FaExternalLinkAlt size={14} />
      </Link>
    </Flex>
  );
}
