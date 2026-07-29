import LogoPlain from "@/components/brand/LogoPlain";
import { Box, Flex, Heading, Strong, Text } from "@radix-ui/themes";
import { FaLocationDot, FaClock } from "react-icons/fa6";
import IconLabel from "../../generic/IconLabel";

export default function LocationDetails() {
  return (
    <>
      <Flex direction="column" gap="3">
        <IconLabel Icon={LogoPlain}>
          <Heading size="5">Custom Window Tinting</Heading>
        </IconLabel>

        <IconLabel Icon={FaLocationDot}>
          <Box display={{ initial: "block", xs: "none" }}>
            <Text>
              2012 S Main St,
              <br />
              Stillwater, OK 74074
            </Text>
          </Box>
          <Box display={{ initial: "none", xs: "block" }}>
            <Text>2012 S Main St, Stillwater, OK 74074</Text>
          </Box>
        </IconLabel>

        <IconLabel Icon={FaClock}>
          <Box display={{ initial: "block", xs: "none" }}>
            <Text>
              Mon - Fri: 8am - 6pm
              <br />
              Sat: 8am - 4pm&nbsp;
              <Strong style={{ color: "var(--accent-9)" }}>&bull;</Strong> Sun: Closed
            </Text>
          </Box>
          <Box display={{ initial: "none", xs: "block" }}>
            <Text>
              Mon - Fri: 8am - 6pm <Strong style={{ color: "var(--accent-9)" }}>&bull;</Strong> Sat: 8am - 4pm&nbsp;
              <Strong style={{ color: "var(--accent-9)" }}>&bull;</Strong> Sun: Closed
            </Text>
          </Box>
        </IconLabel>
      </Flex>
    </>
  );
}
