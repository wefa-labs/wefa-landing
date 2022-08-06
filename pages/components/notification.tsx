import {
  BsLightningFill,
  IoAlertCircle,
  IoWarning,
  MdUpdate,
} from "@react-icons";

import { useContext } from "react";

import { NextSeo } from "next-seo";

import {
  Box,
  Button,
  chakra,
  Container,
  HStack,
  SimpleGrid,
  StackDivider,
  Text,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";

import { ThemeColorContext } from "@definitions/context/theme";

import { SectionHeading, SectionSubHeading } from "@components/common";
import Highlight from "@components/highlight";
import { Notification } from "@components/notification";
import { NotificationCTA } from "@components/notification/notification-cta";
import PageTitle from "@components/page-title";

const NotificationPage: React.FC = (): JSX.Element => {
  const theme = useContext(ThemeColorContext);
  const color = theme.colorScheme; // global default primary theme color
  return (
    <>
      <NextSeo
        title="Notification Component"
        description="Notification Component Examples"
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
        <PageTitle
          title="Notification Component"
          body={
            <Text as="div">
              On this page, you will find{" "}
              <Text as="div" display="inline-block" color="green.400">
                <Highlight strokeWidth={2}>
                  <b>6 examples</b>
                </Highlight>
              </Text>{" "}
              of notification component that you can easily use on your pages.
            </Text>
          }
        />
        <Container mb={10} maxW="container.lg">
          <SectionHeading my={10}>Notification Examples</SectionHeading>
          <SimpleGrid columns={2} spacing={10}>
            <Box mb={8}>
              <SectionSubHeading mb={4}>Success</SectionSubHeading>
              <Notification
                // colorScheme="cyan"
                title="Success"
                message="Thanks for being awesome!"
              />
            </Box>

            <Box mb={8}>
              <SectionSubHeading mb={4}>Info</SectionSubHeading>
              <Notification
                colorScheme="blue"
                title="Info"
                icon={IoAlertCircle}
                message="It's just a friendly reminder."
              />
            </Box>

            <Box mb={8}>
              <SectionSubHeading mb={4}>Warning</SectionSubHeading>
              <Notification
                colorScheme="yellow"
                title="Warning"
                icon={IoWarning}
                message="Pay attention to this issue."
              />
            </Box>

            <Box mb={8}>
              <SectionSubHeading mb={4}>Error</SectionSubHeading>
              <Notification
                colorScheme="red"
                title="Error"
                icon={BsLightningFill}
                message="Something went wrong."
              />
            </Box>
          </SimpleGrid>
          <SectionHeading my={10}>Notification with action</SectionHeading>
          <SimpleGrid columns={2} spacing={10}>
            <NotificationCTA
              icon={MdUpdate}
              colorScheme="blue"
              title="Updates Available"
              message="A new version is available. Please update your app."
              buttons={
                <HStack>
                  <Button fontSize="sm" color="blue.400" variant="link">
                    Update
                  </Button>
                  <Button fontSize="sm" variant="link">
                    Close
                  </Button>
                </HStack>
              }
            />
            <NotificationCTA
              icon={MdUpdate}
              colorScheme="green"
              title="Updates Available"
              message="A new version is available. Please update your app."
              isDivided
              buttons={
                <VStack
                  borderLeft="0.01em solid"
                  borderColor={useColorModeValue("gray.200", "gray.900")}
                  divider={
                    <StackDivider
                      borderColor={useColorModeValue("gray.200", "gray.900")}
                    />
                  }
                  spacing={0}
                >
                  <Button
                    rounded={0}
                    h="full"
                    isFullWidth
                    fontSize="sm"
                    color="green.400"
                    bg={useColorModeValue("white", "gray.700")}
                    _hover={{
                      bg: useColorModeValue("gray.50", "gray.800"),
                    }}
                  >
                    Update
                  </Button>
                  <Button
                    h="full"
                    rounded={0}
                    isFullWidth
                    fontSize="sm"
                    bg={useColorModeValue("white", "gray.700")}
                    _hover={{
                      bg: useColorModeValue("gray.50", "gray.800"),
                    }}
                  >
                    Close
                  </Button>
                </VStack>
              }
            />
          </SimpleGrid>
        </Container>
      </chakra.main>
    </>
  );
};

export default NotificationPage;
