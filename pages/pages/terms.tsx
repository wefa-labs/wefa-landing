import { useContext } from "react";

import ChakraUIRenderer from "chakra-ui-markdown-renderer";
import ReactMarkdown from "react-markdown";
import { Components } from "react-markdown/lib/ast-to-react";

import { NextSeo } from "next-seo";

import {
  Box,
  chakra,
  Container,
  Flex,
  Heading,
  ListItem,
  Link,
  OrderedList,
  Text,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";

import { ThemeColorContext } from "@definitions/context/theme";
import { useScrollSpy } from "@definitions/hooks/useScrollSpy";
import terms from "@definitions/site/terms";

import { Section } from "@components/common";
import PageTitle from "@components/page-title";

const TermsPage: React.FC = (): JSX.Element => {
  const theme = useContext(ThemeColorContext);
  const color = theme.colorScheme; // global default primary theme color

  const activeId = useScrollSpy(
    terms.map(({ id }) => `[id="${id}"]`),
    {
      rootMargin: "0% 0% -99% 0%",
      // threshold: 0,
    },
  );

  const headingStyle = {
    fontSize: "lg",
    fontWeight: "600",
    mb: 5,
  };

  const textStyle = {
    color: useColorModeValue("gray.600", "gray.400"),
  };

  const activeColor = useColorModeValue(`${color}.500`, `${color}.300`);

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
        title="Mercury Terms and Conditions"
        description="Mercury Terms and Conditions Example Page"
      />
      <chakra.main>
        <PageTitle
          title="Mercury Terms & Conditions"
          body={
            <Text fontSize="lg" fontWeight="500">
              Effective date: 1 January 2021
            </Text>
          }
        />
        <Section py={14}>
          <Container maxW="container.lg">
            <Flex>
              <Flex
                display={{ base: "none", md: "flex" }}
                align="start"
                justify="start"
                direction="column"
                minWidth="320px"
                flex="1"
              >
                <Box position="sticky" top="2rem">
                  <OrderedList styleType="none" spacing={3}>
                    {terms.map((t) => {
                      return (
                        <ListItem
                          key={t.id}
                          borderLeftWidth={"2px"}
                          px={4}
                          borderColor={
                            activeId === t.id ? activeColor : "transparent"
                          }
                        >
                          <Link
                            href={`#${t.id}`}
                            fontWeight="bold"
                            color={activeId === t.id ? activeColor : undefined}
                            _hover={{
                              color: activeColor,
                            }}
                          >
                            {t.title}
                          </Link>
                        </ListItem>
                      );
                    })}
                  </OrderedList>
                </Box>
              </Flex>

              <Box>
                <VStack align="stretch" spacing={2}>
                  <Box id="terms">
                    <VStack
                      align="stretch"
                      {...textStyle}
                      fontSize="lg"
                      lineHeight={1.6}
                      spacing={2}
                    >
                      <Text>
                        Thanks for using our products and services ("Services").
                        The Services are provided by Mercury Ltd. ("Mercury"),
                        located at 132 Boroughbridge Road B12 18SP, Birmingham
                        United Kingdom.
                      </Text>

                      <Text>
                        By using our Services, you are agreeing to these terms.
                        Please read them carefully.
                      </Text>

                      <Text>
                        Our Services are very diverse, so sometimes additional
                        terms or product requirements (including age
                        requirements) may apply. Additional terms will be
                        available with the relevant Services, and those
                        additional terms become part of your agreement with us
                        if you use those Services.
                      </Text>
                    </VStack>
                  </Box>

                  {/* Term Contents */}
                  {terms.map((t, idx) => {
                    return (
                      <Box key={`${t.id}-${idx}`} pt={10} id={t.id}>
                        <Heading {...headingStyle}>
                          {idx + 1}. {t.title}
                        </Heading>
                        <VStack align="stretch" spacing={2}>
                          <ReactMarkdown
                            components={ChakraUIRenderer(CustomMarkdownTheme)}
                            children={t.body}
                          />
                        </VStack>
                      </Box>
                    );
                  })}
                </VStack>
              </Box>
            </Flex>
          </Container>
        </Section>
      </chakra.main>
    </>
  );
};

export default TermsPage;
