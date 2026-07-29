import { Flex, Separator } from "@radix-ui/themes";
import Card from "../generic/Card";
import React from "react";
import ContactHeading from "./ContactHeading";
import ContactDetails from "./ContactDetails";

export default function ContactCard() {
  return (
    <Card>
      <Flex direction="column">
        <ContactHeading />

        <Separator size="4" my="4" />

        <ContactDetails />
      </Flex>
    </Card>
  );
}
