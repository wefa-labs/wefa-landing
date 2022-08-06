import { useContext } from "react";

import { NextSeo } from "next-seo";

import {
  Box,
  Center,
  chakra,
  Container,
  Divider,
  Flex,
  Text,
  useBreakpointValue,
  useColorModeValue,
} from "@chakra-ui/react";

import { ThemeColorContext } from "@definitions/context/theme";

import AccordionDefault from "@components/accordion/accordion-default";
import AccordionFlat from "@components/accordion/accordion-flat";
import AccordionSimple from "@components/accordion/accordion-simple";
import { SectionHeading } from "@components/common";
import Highlight from "@components/highlight";
import PageTitle from "@components/page-title";

const accordion_data = [
  {
    title: "How can I purchase a membership?",
    body: "Integer legentibus erat a ante historiarum dapibus. Qui ipsorum lingua Celtae, nostra Galli appellantur.",
    // isDisabled: true,
  },
  {
    title: "How do I find my product key?",
    body: "Qui ipsorum lingua Celtae, nostra Galli appellantur. Cum sociis natoque penatibus et magnis dis parturient. Etiam habebis sem dicantur magna mollis euismod.",
    isDisabled: true,
  },
  {
    title: "How long does it take to download?",
    body: "Paullum deliquit, ponderibus modulisque suis ratio utitur. Quid securi etiam tamquam eu fugiat nulla pariatur.",
  },
];

const AccordionPage: React.FC = (): JSX.Element => {
  const theme = useContext(ThemeColorContext);
  const color = theme.colorScheme; // global default primary theme color
  return (
    <>
      <NextSeo
        title="Accordion Component"
        description="Accordion Component Examples"
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
          title="Accordion Component"
          body={
            <Text as="div">
              On this page, you will find{" "}
              <Text as="div" display="inline-block" color="green.400">
                <Highlight strokeWidth={2}>
                  <b>3 examples</b>
                </Highlight>
              </Text>{" "}
              of accordion component that you can easily use on your pages.
            </Text>
          }
        ></PageTitle>
        <Container maxW="container.xl">
          <Box py={32}>
            <Box>
              <SectionHeading>Default Accordion Style</SectionHeading>
              <Flex direction={["column", "column", "row"]}>
                <AccordionDefault
                  width="100%"
                  allowToggle
                  accordions={accordion_data}
                />
                <Box
                  w="100%"
                  maxW={["full", "full", "120px"]}
                  mb={[6, 6, 0]}
                  mt={[2, 2, 0]}
                >
                  <Center height="100%">
                    <Divider
                      orientation={
                        useBreakpointValue({
                          base: "horizontal",
                          md: "vertical",
                        }) ?? "vertical"
                      }
                    />
                  </Center>
                </Box>
                <AccordionDefault
                  width="100%"
                  isPlus
                  allowMultiple
                  accordions={accordion_data}
                />
              </Flex>
            </Box>
          </Box>

          <Divider />

          <Flex justify="center" p={32}>
            <Box flex="1" maxWidth="550px">
              <SectionHeading>Simple Accordion Style</SectionHeading>
              <AccordionSimple
                // allowMultiple
                allowToggle
                accordions={accordion_data}
              />
            </Box>
          </Flex>

          <Divider />

          <Flex justify="center" p={32}>
            <Box flex="1" maxWidth="550px">
              <SectionHeading>Accordion Flat Style</SectionHeading>
              <AccordionFlat isPlus allowToggle accordions={accordion_data} />
            </Box>
          </Flex>
        </Container>
      </chakra.main>
    </>
  );
};

export default AccordionPage;
