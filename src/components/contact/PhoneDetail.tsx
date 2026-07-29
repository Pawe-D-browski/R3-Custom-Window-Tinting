"use client";

import { Text } from "@radix-ui/themes";
import React, { useState } from "react";
import { FaPhone } from "react-icons/fa6";
import IconLabelLink from "../generic/IconLabelLink";

export default function PhoneDetail() {
  const phoneNumber = "(580) 290-0090";
  const phoneNumberDigits = phoneNumber.replace(/\D/g, "");
  const [phoneText, setPhoneText] = useState(phoneNumber);

  const handlePhoneClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    const isMobile = window.matchMedia("(pointer: coarse)").matches;

    if (!isMobile) {
      event.preventDefault();

      if (phoneText !== "Copied!") {
        navigator.clipboard
          .writeText(phoneNumber)
          .then(() => {
            setPhoneText("Copied!");
            setTimeout(() => {
              setPhoneText(phoneNumber);
            }, 1000);
          })
          .catch((err) => {
            console.error("Failed to copy text: ", err);
          });
      }
    }
  };

  return (
    <IconLabelLink href={`tel:+1${phoneNumberDigits}`} Icon={FaPhone} onClick={handlePhoneClick}>
      <Text>{phoneText}</Text>
    </IconLabelLink>
  );
}
