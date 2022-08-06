import { FcLike } from "@react-icons";

import React, { useContext } from "react";

import { NextSeo } from "next-seo";

import {
  chakra,
  Container,
  Heading,
  Icon,
  SimpleGrid,
  Text,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";

import { ThemeColorContext } from "@definitions/context/theme";

import { Section, SectionHeading, SectionSubHeading } from "@components/common";
import Counter from "@components/counter";
import Highlight from "@components/highlight";
import PageTitle from "@components/page-title";

const CounterComponentPage: React.FC = () => {
  const theme = useContext(ThemeColorContext);
  const color = theme.colorScheme; // global default primary theme color
  return (
    <>
      <NextSeo
        title="Counter Component"
        description="Mercury Counter Component Examples"
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
        <VStack align="stretch" mb={[10, 14, 20]} spacing={[10, 14, 20]}>
          <PageTitle
            title="Counter Component"
            body={
              <Text as="div">
                On this page, you will find{" "}
                <Text as="div" display="inline-block" color="green.400">
                  <Highlight strokeWidth={2}>
                    <b>6 examples</b>
                  </Highlight>
                </Text>{" "}
                of counter component that you can easily use on your pages.
              </Text>
            }
          />
          {/* Simple */}
          <Section>
            <Container maxW="container.md">
              <SectionHeading>Simple Counter</SectionHeading>
              <SimpleGrid columns={[1, 1, 3]}>
                <VStack>
                  <SectionSubHeading>0 to 100</SectionSubHeading>
                  <Heading fontWeight="600" as="h3">
                    <Counter
                      display="inline"
                      fontWeight="800"
                      from={0}
                      delay={0.25}
                      to={100}
                      decimals={0}
                    >
                      0
                    </Counter>
                  </Heading>
                </VStack>

                <VStack>
                  <SectionSubHeading>0 to 99.9</SectionSubHeading>
                  <Heading fontWeight="600" as="h3">
                    <Counter
                      display="inline"
                      fontWeight="800"
                      from={0.0}
                      delay={0.25}
                      to={99.9}
                      decimals={1}
                    >
                      0
                    </Counter>
                  </Heading>
                </VStack>

                <VStack>
                  <SectionSubHeading>0 to 99.987</SectionSubHeading>
                  <Heading fontWeight="600" as="h3">
                    <Counter
                      display="inline"
                      fontWeight="800"
                      from={0.0}
                      delay={0.25}
                      to={99.987}
                      decimals={3}
                    >
                      0
                    </Counter>
                  </Heading>
                </VStack>
              </SimpleGrid>
            </Container>
          </Section>

          {/* Counter Example Usages */}
          <Section>
            <Container maxW="container.xl">
              <SectionHeading>Example Usages</SectionHeading>
              <SimpleGrid columns={[1, 1, 2]}>
                <VStack>
                  <Heading fontWeight="600" as="h3">
                    <Icon as={FcLike} w={8} h={8} />{" "}
                    <Counter
                      display="inline"
                      fontWeight="800"
                      from={1.0}
                      delay={0.25}
                      to={12.3}
                      decimals={1}
                    >
                      0
                    </Counter>
                    <Text fontWeight="800" as="span">
                      K{" "}
                    </Text>
                    <Text as="span">Likes</Text>
                  </Heading>
                </VStack>

                <VStack>
                  <Heading fontWeight="600" as="h3">
                    <Counter
                      display="inline"
                      fontWeight="800"
                      from={0.0}
                      delay={0.25}
                      to={89.9}
                      decimals={2}
                    >
                      0
                    </Counter>
                    <Text fontWeight="800" as="span">
                      %{" "}
                    </Text>
                    <Text as="span">Accuracy</Text>
                  </Heading>
                </VStack>
              </SimpleGrid>
            </Container>
          </Section>

          <Section>
            <Container maxW="container.xl">
              <SectionHeading>Custom Animation</SectionHeading>
              <SimpleGrid columns={[1, 1, 1]}>
                <VStack>
                  <Heading fontWeight="600" as="h3">
                    <Counter
                      display="inline"
                      fontWeight="800"
                      fontFamily="monospace"
                      from={900}
                      delay={0}
                      duration={3}
                      to={100_987}
                      decimals={0}
                      // Transition
                      type="spring"
                      stiffness={30}
                      damping={35}
                      mass={1.75}
                    >
                      0
                    </Counter>
                  </Heading>
                </VStack>
              </SimpleGrid>
            </Container>
          </Section>
        </VStack>
      </chakra.main>
    </>
  );
};

export default CounterComponentPage;
