import React, { useContext } from "react";

import { NextSeo } from "next-seo";

import {
  ChevronLeftIcon,
  SettingsIcon,
  CalendarIcon,
  InfoIcon,
  WarningTwoIcon,
} from "@chakra-ui/icons";
import {
  Alert,
  AlertIcon,
  Box,
  Button,
  chakra,
  Container,
  Flex,
  Heading,
  HStack,
  Text,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";

import { ThemeColorContext } from "@definitions/context/theme";

import FooterSimpleSocial from "@components/footer/footer-simple-social";
import { LogoWithSiteName } from "@components/logo/logo-with-site-name";
import ThemeSwitch from "@components/theme-switch";
import { TimelineGroup, Timeline } from "@components/timeline";

import Layout from "@layouts/default";

const StatusPage = (): JSX.Element => {
  const theme = useContext(ThemeColorContext);
  const color = theme.colorScheme; // global default primary theme color

  /* -------------------------------- Styles -------------------------------- */
  const textStyle = {
    mb: 2,
  };
  const descriptionStyle = {
    fontWeight: 600,
  };
  const descriptionDanger = {
    fontWeight: 600,
    color: "red.500",
  };
  const descriptionWarning = {
    fontWeight: 600,
    color: "orange.500",
  };
  const descriptionSuccess = {
    fontWeight: 600,
    color: "green.500",
  };
  const metaStyle = {
    fontWeight: "600",
    fontSize: "sm",
    color: "gray.500",
  };

  return (
    <>
      <NextSeo
        title="Status"
        description="Mercury Status Example Page - Notify your users about maintenance and incidents"
      />
      <chakra.main>
        <Container mb={10} maxW="container.lg">
          <Alert rounded="xl" my={5} status="success">
            <AlertIcon />
            All Systems Operational
          </Alert>

          <Box
            rounded="xl"
            px={10}
            py={10}
            bg={useColorModeValue("gray.100", "gray.700")}
          >
            <Heading
              fontSize="xl"
              fontWeight="bold"
              borderBottomWidth="1px"
              borderColor="blackAlpha.300"
              pb={3}
              mb={3}
            >
              Scheduled Maintenance!
            </Heading>
            <Text fontSize="lg">
              Mercury will go under maintenance for thirty minutes for
              operational updates.
            </Text>
            <Text {...metaStyle}>Nov 11, 2021 23:59 UTC</Text>
          </Box>

          <TimelineGroup my={10}>
            <Timeline
              colorScheme={"red"}
              icon={<WarningTwoIcon w="14px" h="14px" />}
              heading="Nov 10, 2021"
              description={
                <Text {...descriptionDanger}>Support Email System</Text>
              }
            >
              <VStack mt={3} alignItems="stretch" spacing={3}>
                <Box>
                  <Text {...textStyle}>
                    <b>Resolved</b> - The issues with the support email system
                    have now been fully resolved. If you continue to see issues
                    please reach out to us directly from the support portal for
                    assistance.
                  </Text>
                  <Text {...metaStyle}>Nov 10, 19:51 EST</Text>
                </Box>
                <Box mt={6}>
                  <Text {...textStyle}>
                    <b>Investigating</b> - Some customers may be experiencing an
                    issue with delayed SendMail Alerts. Please continue to
                    monitor this page for updates.
                  </Text>
                  <Text {...metaStyle}>Nov 10, 19:51 EST</Text>
                </Box>
              </VStack>
            </Timeline>

            <Timeline
              colorScheme={"orange"}
              icon={<InfoIcon w="14px" h="14px" />}
              heading="Nov 9, 2021"
              description={
                <Text {...descriptionWarning}>App Platform Metrics</Text>
              }
            >
              <VStack mt={3} alignItems="stretch" spacing={3}>
                <Box>
                  <Text {...textStyle}>
                    <b>Resolved</b> - Our engineering team has resolved the
                    issue with creating Highly available Kubernetes clusters in
                    NYC1, the Kubernetes system should now be operating
                    normally.
                  </Text>
                  <Text {...metaStyle}>Nov 9, 07:48 UTC</Text>
                </Box>
                <Box mt={6}>
                  <Text {...textStyle}>
                    <b>Monitoring</b> - If you continue to experience problems,
                    please open a ticket with our support team. We apologize for
                    any inconvenience.
                  </Text>
                  <Text {...metaStyle}>Nov 9, 07:40 UTC</Text>
                </Box>
              </VStack>
            </Timeline>

            <Timeline
              icon={<CalendarIcon w="14px" h="14px" />}
              heading="Nov 8, 2021"
              description={<Text {...descriptionStyle}>Site Not Loading</Text>}
            >
              <VStack mt={3} alignItems="stretch" spacing={3}>
                <Box>
                  <Text {...textStyle}>This incident has been resolved.</Text>
                  <Text {...metaStyle}>Nov 8, 17:29 - 17:50 UTC</Text>
                </Box>
              </VStack>
            </Timeline>

            <Timeline
              icon={<CalendarIcon w="14px" h="14px" />}
              heading="Nov 7, 2021"
              description={<Text>No incidents reported</Text>}
            ></Timeline>

            <Timeline
              colorScheme={"green"}
              icon={<SettingsIcon w="14px" h="14px" />}
              heading="Nov 6, 2021"
              description={
                <Text {...descriptionSuccess}>Scheduled Maintenance</Text>
              }
            >
              <VStack mt={3} alignItems="stretch" spacing={3}>
                <Box>
                  <Text {...textStyle}>
                    <b>Temporarily down for maintenance</b> - We apologize for
                    the inconvenience but Mercury is currently undergoing
                    planned maintenance.
                  </Text>
                  <Text {...metaStyle}>Nov 6, 00:30 - 02:50 UTC</Text>
                </Box>
              </VStack>
            </Timeline>

            <Timeline
              icon={<CalendarIcon w="14px" h="14px" />}
              heading="Nov 5, 2021"
              description={<Text>No incidents reported</Text>}
            ></Timeline>
          </TimelineGroup>
          <Button colorScheme={color} pr={6} leftIcon={<ChevronLeftIcon />}>
            Incident History
          </Button>
        </Container>
      </chakra.main>
    </>
  );
};

/* Custom Page Layout  */
StatusPage.PageLayout = ({ children }: { children: React.ReactNode }) => {
  const theme = useContext(ThemeColorContext);
  const color = theme.colorScheme; // global default primary theme color
  return (
    <Layout
      header={
        <Box py={5} w="full">
          <Container maxW="container.xl">
            <Flex justify="space-between">
              <LogoWithSiteName />
              <HStack spacing={2}>
                <Button
                  textTransform="uppercase"
                  fontSize={11}
                  colorScheme={color}
                >
                  Subscribe to updates
                </Button>
                <ThemeSwitch />
              </HStack>
            </Flex>
          </Container>
        </Box>
      }
      footer={<FooterSimpleSocial bg={"transparent"} />}
    >
      {children}
    </Layout>
  );
};

export default StatusPage;
