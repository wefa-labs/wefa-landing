import React, { useContext } from "react";

import { NextSeo } from "next-seo";
import dynamic from "next/dynamic";

import {
  Box,
  Button,
  chakra,
  Container,
  Flex,
  Heading,
  HStack,
  Stack,
  Text,
  useBreakpointValue,
  useColorModeValue,
} from "@chakra-ui/react";

import { ThemeColorContext } from "@definitions/context/theme";
import Site from "@definitions/site";

import FooterSimpleSocial from "@components/footer/footer-simple-social";
import { LogoWithSiteName } from "@components/logo/logo-with-site-name";
import ThemeSwitch from "@components/theme-switch";

import Layout from "@layouts/default";

const DataCenterIllustration = dynamic(
  () => import("@assets/illustrations/data-center"),
);

const MaintenancePage = (): JSX.Element => {
  const theme = useContext(ThemeColorContext);
  const color = theme.colorScheme; // global default primary theme color
  const mainHeight = useBreakpointValue({
    base: "calc(100vh - 98px)",
    md: "calc(100vh - 64px)",
  });

  const bodyColor = useColorModeValue("gray.600", "gray.400");

  return (
    <>
      <NextSeo
        title="We are down for maintenance"
        description="Mercury Maintenance Example Page"
      />
      <chakra.main
        sx={{
          "*::selection": {
            color: useColorModeValue(`${color}.600`, `${color}.400`),
            background: useColorModeValue(`${color}.200`, `${color}.700`),
          },
          mark: {
            color: useColorModeValue(`${color}.600`, `${color}.400`),
            background: useColorModeValue(`${color}.100`, `${color}.800`),
          },
        }}
      >
        <Container maxW="container.xl">
          <Stack
            direction={["column", "column", "column", "column"]}
            justifyContent="center"
            alignItems="center"
            minHeight={mainHeight}
            spacing={5}
          >
            <Flex justify="center" minHeight="300px" h="50vh" w="full">
              <DataCenterIllustration />
            </Flex>
            <Flex justify="center" align="center" w="full">
              <Box maxWidth={["full", "full", "630px"]} textAlign={["center"]}>
                <Heading mb={4}>We're down for maintenance.</Heading>
                <Text fontSize={["md", "md", "lg"]} color={bodyColor}>
                  We apologize for the inconvenience but Mercury is currently
                  undergoing planned maintenance. Stay tuned!
                </Text>
              </Box>
            </Flex>
          </Stack>
        </Container>
      </chakra.main>
    </>
  );
};

MaintenancePage.PageLayout = ({ children }: { children: React.ReactNode }) => {
  const theme = useContext(ThemeColorContext);
  const color = theme.colorScheme; // global default primary theme color

  const mouseDownHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (event.button === 0) window.open(Site.purchase, "_blank");
    if (event.button === 1) window.open(Site.purchase, "_blank");
  };

  return (
    <Layout
      header={
        <Box py={5} w="full" pos="absolute">
          <Container maxW="container.xl">
            <Flex justify="space-between">
              <LogoWithSiteName />
              <HStack spacing={2}>
                <Button
                  fontSize={11}
                  colorScheme={color}
                  textTransform="uppercase"
                  display={{ base: "none", md: "initial" }}
                  onMouseDown={mouseDownHandler}
                >
                  Purchase Mercury
                </Button>
                <ThemeSwitch />
              </HStack>
            </Flex>
          </Container>
        </Box>
      }
      footer={<FooterSimpleSocial bg="transparent" />}
    >
      {children}
    </Layout>
  );
};

export default MaintenancePage;
