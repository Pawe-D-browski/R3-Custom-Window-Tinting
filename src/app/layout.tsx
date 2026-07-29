import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import { Flex, Theme } from "@radix-ui/themes";
import { AssetPath } from "@/paths/AssetPath";
import "@radix-ui/themes/styles.css";

import Header from "@/components/layout/header/Header";
import Footer from "@/components/layout/Footer";
import "./globals.css";

import PageBackground from "@/components/layout/PageBackground";

export const metadata: Metadata = {
  title: "R3 Custom Window Tinting",
  description:
    "R3 Custom Window Tinting provides the best professional window tinting services in Stillwater, Oklahoma. We offer both architectural and automotive tints at affordable prices.",
  icons: {
    icon: new AssetPath("favicon.svg").toString(),
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      style={{
        width: "100%",
        minHeight: "100%",
        display: "flex",
        flexDirection: "column",
      }}
      suppressHydrationWarning
    >
      <body
        style={{ width: "100%", flex: "1", display: "flex", flexDirection: "row", backgroundColor: "var(--gray-1)" }}
      >
        <ThemeProvider attribute="class">
          <Theme
            grayColor="slate"
            radius="full"
            accentColor="indigo"
            scaling="100%"
            style={{ flex: "1", display: "flex", flexDirection: "column" }}
          >
            <PageBackground />

            <Header />

            <main
              style={{
                flex: "1",
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                paddingInline: "var(--space-5)",
              }}
            >
              <Flex
                py="8"
                pt="112px"
                direction="column"
                align="center"
                justify="start"
                style={{ flex: "1", maxWidth: "var(--container-4)" }}
                gap="8"
              >
                {children}
              </Flex>
            </main>

            <Footer />
          </Theme>
        </ThemeProvider>
      </body>
    </html>
  );
}
