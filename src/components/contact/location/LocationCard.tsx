import { Box, Flex, Separator } from "@radix-ui/themes";

import Card from "../../generic/Card";
import LocationHeading from "./LocationHeading";
import LocationIframe from "./LocationIframe";
import LocationDetails from "./LocationDetails";

export default function LocationCard() {
  return (
    <Card>
      <Flex direction={{ initial: "column", md: "row" }} gap="5" align="start" style={{ width: "100%" }}>
        <Box display={{ initial: "block", md: "none" }}>
          <LocationHeading />
        </Box>

        <LocationIframe />

        <Box display={{ initial: "block", md: "none" }}>
          <LocationDetails />
        </Box>

        <Box display={{ initial: "none", md: "block" }} style={{ flex: "1" }}>
          <LocationHeading />
          <Separator size="4" my="4" />
          <LocationDetails />
        </Box>
      </Flex>
    </Card>
  );
}
