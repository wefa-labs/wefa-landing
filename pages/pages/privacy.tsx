import { useContext } from "react";

import ChakraUIRenderer from "chakra-ui-markdown-renderer";
import ReactMarkdown from "react-markdown";
import { Components } from "react-markdown/lib/ast-to-react";

import { NextSeo } from "next-seo";

import {
  Box,
  chakra,
  Container,
  Heading,
  Text,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";

import { ThemeColorContext } from "@definitions/context/theme";
import privacy from "@definitions/site/privacy";

import { Section } from "@components/common";
import PageTitle from "@components/page-title";

const PrivacyPage = (): JSX.Element => {
  const theme = useContext(ThemeColorContext);
  const color = theme.colorScheme; // global default primary theme color

  const headingStyle = {
    fontSize: "lg",
    fontWeight: "600",
    mb: 5,
  };

  const textStyle = {
    color: useColorModeValue("gray.600", "gray.400"),
  };

  interface Defaults extends Components {
    heading?: Components["h1"];
  }

  const CustomMarkdownTheme: Defaults = {
    p: (props) => {
      const { children } = props;
      return <Text {...textStyle}>{children}</Text>;
    },
  };

  return (
    <>
      <NextSeo
        title="Privacy and Policy"
        description="Mercury Privacy and Policy Example Page"
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
          title="Privacy & Policy"
          body={
            <Text fontSize="lg" fontWeight="500">
              Last updated: November 10, 2021 (view history)
            </Text>
          }
        />
        <Section m={0} pt={5} py={20}>
          <Container maxW="container.md">
            <Box p={10} pb={10}>
              {/* Privacy Contents */}
              {privacy.map((item, idx) => {
                return (
                  <Box id={item.id} key={item.title} pt={10}>
                    <Heading {...headingStyle}>
                      {idx + 1}. {item.title}
                    </Heading>
                    <VStack align="stretch" spacing={2}>
                      <ReactMarkdown
                        components={ChakraUIRenderer(CustomMarkdownTheme)}
                        children={item.body}
                      />
                    </VStack>
                  </Box>
                );
              })}
            </Box>
          </Container>
        </Section>
      </chakra.main>
    </>
  );
};

export default PrivacyPage;
