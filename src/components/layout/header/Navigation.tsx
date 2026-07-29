"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Box, Button, DropdownMenu, Flex, TabNav, Text } from "@radix-ui/themes";

export default function Navigation() {
  const pathname = usePathname();

  const getCurrentPageName = () => {
    switch (pathname) {
      case "/":
        return "Home";
      case "/services":
        return "Services";
      case "/about":
        return "About";
      case "/contact":
        return "Contact";
      default:
        return "Menu";
    }
  };

  return (
    <>
      <Box display={{ initial: "block", md: "none" }}>
        <DropdownMenu.Root modal={false}>
          <DropdownMenu.Trigger style={{ width: "120px" }}>
            <Button variant="soft" style={{ cursor: "pointer" }}>
              <Flex justify="between" align="center" width="100%" px="8px">
                <Text>{getCurrentPageName()}</Text>
                <DropdownMenu.TriggerIcon />
              </Flex>
            </Button>
          </DropdownMenu.Trigger>

          <DropdownMenu.Content style={{ width: "120px" }} variant="soft" hideWhenDetached>
            <DropdownMenu.Item asChild>
              <Link href="/" style={{ cursor: "pointer" }}>
                Home
              </Link>
            </DropdownMenu.Item>
            <DropdownMenu.Item asChild>
              <Link href="/services" style={{ cursor: "pointer" }}>
                Services
              </Link>
            </DropdownMenu.Item>
            <DropdownMenu.Item asChild>
              <Link href="/about" style={{ cursor: "pointer" }}>
                About
              </Link>
            </DropdownMenu.Item>
            <DropdownMenu.Item asChild>
              <Link href="/contact" style={{ cursor: "pointer" }}>
                Contact
              </Link>
            </DropdownMenu.Item>
          </DropdownMenu.Content>
        </DropdownMenu.Root>
      </Box>

      <Box display={{ initial: "none", md: "block" }}>
        <TabNav.Root>
          <TabNav.Link asChild active={pathname === "/"}>
            <Link href="/">Home</Link>
          </TabNav.Link>
          <TabNav.Link asChild active={pathname === "/services"}>
            <Link href="/services">Services</Link>
          </TabNav.Link>
          <TabNav.Link asChild active={pathname === "/about"}>
            <Link href="/about">About</Link>
          </TabNav.Link>
          <TabNav.Link asChild active={pathname === "/contact"}>
            <Link href="/contact">Contact</Link>
          </TabNav.Link>
        </TabNav.Root>
      </Box>
    </>
  );
}
