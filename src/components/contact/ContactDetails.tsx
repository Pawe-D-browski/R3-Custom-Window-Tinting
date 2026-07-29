"use client";

import { Flex, Heading, Text, Grid, Box } from "@radix-ui/themes";
import { FaEnvelope, FaInstagram, FaFacebook, FaTiktok, FaFacebookMessenger } from "react-icons/fa6";
import LogoPlain from "../brand/LogoPlain";
import React from "react";
import IconLabel from "../generic/IconLabel";
import IconLabelLink from "../generic/IconLabelLink";
import PhoneDetail from "./PhoneDetail";

export default function ContactDetails() {
  const facebookProfileId = "100011141955162";
  const instagramUsername = "@r3customwindowtinting";
  const tiktokUsername = "@r3customwindowtint";
  const emailAddress = "placeholder@example.com";

  return (
    <Flex direction="column" gap="3">
      <IconLabel Icon={LogoPlain}>
        <Heading size="5">Custom Window Tinting</Heading>
      </IconLabel>

      <Box display={{ initial: "block", sm: "none" }}>
        <Grid columns="1" gap="3" width="auto">
          <PhoneDetail />
          <IconLabelLink href={`mailto:${emailAddress}`} Icon={FaEnvelope}>
            <Text>{"To be updated"}</Text>
          </IconLabelLink>
          <IconLabelLink href={`https://www.instagram.com/${instagramUsername.substring(1)}`} Icon={FaInstagram}>
            <Text>{instagramUsername}</Text>
          </IconLabelLink>
          <IconLabelLink href={`https://www.tiktok.com/${tiktokUsername}`} Icon={FaTiktok}>
            <Text>{tiktokUsername}</Text>
          </IconLabelLink>
          <IconLabelLink href={`https://m.me/${facebookProfileId}`} Icon={FaFacebookMessenger}>
            <Text>Rick Roach</Text>
          </IconLabelLink>
          <IconLabelLink href={`https://www.facebook.com/profile.php?id=${facebookProfileId}`} Icon={FaFacebook}>
            <Text>Rick Roach</Text>
          </IconLabelLink>
        </Grid>
      </Box>

      <Box display={{ initial: "none", sm: "block", md: "none" }}>
        <Grid columns="2" gap="3" width="auto">
          <PhoneDetail />
          <IconLabelLink href={`https://www.instagram.com/${instagramUsername.substring(1)}`} Icon={FaInstagram}>
            <Text>{instagramUsername}</Text>
          </IconLabelLink>
          <IconLabelLink href={`mailto:${emailAddress}`} Icon={FaEnvelope}>
            <Text>{"To be updated"}</Text>
          </IconLabelLink>
          <IconLabelLink href={`https://www.tiktok.com/${tiktokUsername}`} Icon={FaTiktok}>
            <Text>{tiktokUsername}</Text>
          </IconLabelLink>
          <IconLabelLink href={`https://m.me/${facebookProfileId}`} Icon={FaFacebookMessenger}>
            <Text>Rick Roach</Text>
          </IconLabelLink>
          <IconLabelLink href={`https://www.facebook.com/profile.php?id=${facebookProfileId}`} Icon={FaFacebook}>
            <Text>Rick Roach</Text>
          </IconLabelLink>
        </Grid>
      </Box>

      <Box display={{ initial: "none", md: "block" }}>
        <Grid columns="3" gap="3" width="auto">
          <PhoneDetail />
          <IconLabelLink href={`https://www.instagram.com/${instagramUsername.substring(1)}`} Icon={FaInstagram}>
            <Text>{instagramUsername}</Text>
          </IconLabelLink>
          <IconLabelLink href={`https://m.me/${facebookProfileId}`} Icon={FaFacebookMessenger}>
            <Text>Rick Roach</Text>
          </IconLabelLink>
          <IconLabelLink href={`mailto:${emailAddress}`} Icon={FaEnvelope}>
            <Text>{"To be updated"}</Text>
          </IconLabelLink>
          <IconLabelLink href={`https://www.tiktok.com/${tiktokUsername}`} Icon={FaTiktok}>
            <Text>{tiktokUsername}</Text>
          </IconLabelLink>
          <IconLabelLink href={`https://www.facebook.com/profile.php?id=${facebookProfileId}`} Icon={FaFacebook}>
            <Text>Rick Roach</Text>
          </IconLabelLink>
        </Grid>
      </Box>
    </Flex>
  );
}
