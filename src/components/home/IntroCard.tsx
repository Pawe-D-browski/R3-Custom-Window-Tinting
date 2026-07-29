import { Flex, Heading, Text } from "@radix-ui/themes";
import ButtonLink from "@/components/generic/ButtonLink";
import Card from "@/components/generic/Card";
import ParallaxCarousel from "@/components/generic/carousel/ParallaxCarousel";

export default function IntroCard() {
  const homeSlides = [
    "product-car-tint-1.webp",
    "product-commercial-tint-1.jpg",
    "product-car-tint-2.jpg",
    "product-home-tint-1.webp",
    "product-rv-tint-1.jpg",
  ];

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
            Stillwater&apos;s Premier Window Tinting Service
          </Heading>

          <Text align={{ initial: "center", md: "left" }} size="4">
            At R3 Custom Window Tinting, we provide professional window tinting services for vehicles, homes, and
            businesses in Stillwater and the entire state of Oklahoma.
            <br />
            With years of experience, we deliver quality workmanship and exceptional customer service.
          </Text>

          <Flex
            display={{ initial: "none", sm: "flex" }}
            direction="row"
            gap="6"
            wrap="wrap"
            justify={{ initial: "center", md: "start" }}
          >
            <ButtonLink href="/services#automotive" size="3">
              Automotive Tinting
            </ButtonLink>

            <ButtonLink href="/services#commercial" size="3">
              Commercial Tinting
            </ButtonLink>

            <ButtonLink href="/services#residential" size="3">
              Residential Tinting
            </ButtonLink>
          </Flex>
        </Flex>
        <ParallaxCarousel slides={homeSlides} />
      </Flex>
    </Card>
  );
}
