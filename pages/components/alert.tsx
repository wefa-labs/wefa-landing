import { useContext } from "react";

import { NextSeo } from "next-seo";

import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  Box,
  chakra,
  CloseButton,
  Container,
  Stack,
  useColorModeValue,
} from "@chakra-ui/react";

import { ThemeColorContext } from "@definitions/context/theme";

import { SectionHeading, SectionSubHeading } from "@components/common";
import PageTitle from "@components/page-title";

const AlertPage: React.FC = (): JSX.Element => {
  const theme = useContext(ThemeColorContext);
  const color = theme.colorScheme; // global default primary theme color
  return (
    <>
      <NextSeo title="Alert Component" description="Alert Component Examples" />
      <PageTitle
        title="Alert Component"
        body="On this page, you will find an example of an alert component that
        you can easily use on your pages."
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
        <Container py={20} maxW="container.sm">
          <Box py={2} mb={20}>
            <Alert status="error">
              <AlertIcon />
              <AlertTitle mr={2}>Your browser is outdated!</AlertTitle>
              <AlertDescription>
                Your Chakra experience may be degraded.
              </AlertDescription>
              <CloseButton position="absolute" right="8px" top="8px" />
            </Alert>
          </Box>

          <SectionHeading mb={2}>Status</SectionHeading>
          <SectionSubHeading mb={10}>
            Alert supports error, success, warning, and info statuses.
          </SectionSubHeading>

          <Stack spacing={3} mb={20}>
            <Alert status="error">
              <AlertIcon />
              There was an error processing your request
            </Alert>

            <Alert status="success">
              <AlertIcon />
              Data uploaded to the server. Fire on!
            </Alert>

            <Alert status="warning">
              <AlertIcon />
              Seems your account is about expire, upgrade now
            </Alert>

            <Alert status="info">
              <AlertIcon />
              Chakra is going live on August 30th. Get ready!
            </Alert>
          </Stack>

          <SectionHeading mb={2}>Variants</SectionHeading>
          <SectionSubHeading mb={10}>
            Alert has subtle, solid, left-accent and top-accent variant styles
            you can use.
          </SectionSubHeading>

          <Stack spacing={3} mb={20}>
            <Alert status="success" variant="subtle">
              <AlertIcon />
              Data uploaded to the server. Fire on!
            </Alert>

            <Alert status="success" variant="solid">
              <AlertIcon />
              Data uploaded to the server. Fire on!
            </Alert>

            <Alert status="success" variant="left-accent">
              <AlertIcon />
              Data uploaded to the server. Fire on!
            </Alert>

            <Alert status="success" variant="top-accent">
              <AlertIcon />
              Data uploaded to the server. Fire on!
            </Alert>
          </Stack>

          <SectionHeading>Composition</SectionHeading>

          <Alert
            status="success"
            variant="subtle"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            textAlign="center"
            height="200px"
            mb={3}
          >
            <AlertIcon boxSize="40px" mr={0} />
            <AlertTitle mt={4} mb={1} fontSize="lg">
              Application submitted!
            </AlertTitle>
            <AlertDescription maxWidth="sm">
              Thanks for submitting your application. Our team will get back to
              you soon.
            </AlertDescription>
          </Alert>

          <Alert status="success">
            <AlertIcon />
            <Box flex="1">
              <AlertTitle>Success!</AlertTitle>
              <AlertDescription display="block">
                Your application has been received. We will review your
                application and respond within the next 48 hours.
              </AlertDescription>
            </Box>
            <CloseButton position="absolute" right="8px" top="8px" />
          </Alert>
        </Container>
      </chakra.main>
    </>
  );
};

export default AlertPage;
