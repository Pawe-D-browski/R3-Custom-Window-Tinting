import { Flex, Heading, Text } from "@radix-ui/themes";
import AutomotiveCard from "@/components/services/AutomotiveCard";
import ResidentialCard from "@/components/services/ResidentialCard";
import CommercialCard from "@/components/services/CommercialCard";
import WhyChooseUsCard from "@/components/services/WhyChooseUsCard";
import FilmsCard from "@/components/services/FilmsCard";

export default function Services() {
  const headerHeight = "96px";

  return (
    <>
      <Flex direction="column" gap="6" align="center">
        <Heading size="8">Our Services</Heading>
        <Text size="4" align="center">
          R3 Custom Window Tinting offers professional window tinting services for automotive, residential, and
          commercial applications in Stillwater, Oklahoma.
        </Text>
      </Flex>

      <div id="automotive" style={{ scrollMarginTop: headerHeight }}>
        <AutomotiveCard />
      </div>
      <div id="commercial" style={{ scrollMarginTop: headerHeight }}>
        <CommercialCard />
      </div>
      <div id="residential" style={{ scrollMarginTop: headerHeight }}>
        <ResidentialCard />
      </div>
      <FilmsCard />
      <WhyChooseUsCard />
    </>
  );
}
