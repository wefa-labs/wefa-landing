import React, { useContext, useState } from "react";

import { NextSeo } from "next-seo";

import {
  chakra,
  Container,
  useColorModeValue,
  Text,
  Flex,
  Heading,
  Wrap,
  VStack,
  createIcon,
} from "@chakra-ui/react";

import { ThemeColorContext } from "@definitions/context/theme";

import Annotation from "@components/annotation";
import { Section, SectionHeading, ColorSelector } from "@components/common";
import PageTitle from "@components/page-title";

const AnnotationPage: React.FC = () => {
  const theme = useContext(ThemeColorContext);
  const globalColor = theme.colorScheme; // global default primary theme color
  const [color, setColor] = useState(globalColor);
  return (
    <>
      <NextSeo
        title="Annotation Component"
        description="Mercury Default Example Page"
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
          title="Annotation Component"
          body="Here are a few examples of what you can do using the annotation."
        />
        <Container maxW="container.xl">
          <Flex justify="center" my={10}>
            <ColorSelector
              initColor={color}
              onClick={(e) => setColor(e.currentTarget.name)}
            />
          </Flex>
        </Container>
        <VStack spacing={20} mb={20}>
          <Section>
            <Container maxW="container.xl">
              <Flex justify="center" align="center">
                <Heading mr={3}>Title</Heading>
                <Annotation
                  color={`${color}.500`}
                  strokeWidth={3}
                  left="-30px"
                  bottom="-20px"
                >
                  <Text color={`${color}.500`} lineHeight="1" fontSize="4xl">
                    Annotation
                  </Text>
                </Annotation>
              </Flex>
            </Container>
          </Section>

          <Section>
            <SectionHeading>Positions</SectionHeading>
            <Container maxW="container.xl">
              <Wrap justify="center" spacing={10} mx={1}>
                <Flex justify="center" align="center">
                  <Text mr={3}>Top Left</Text>
                  <Annotation
                    color={`${color}.500`}
                    strokeWidth={1}
                    left="-30px"
                    top="-20px"
                    transform="scaleY(-1)"
                  >
                    <Text color={`${color}.500`} lineHeight="1">
                      Annotation
                    </Text>
                  </Annotation>
                </Flex>

                <Flex justify="center" align="center">
                  <Annotation
                    color={`${color}.500`}
                    strokeWidth={1}
                    left="unset"
                    right="-20px"
                    top="-20px"
                    transform="scaleY(-1) scaleX(-1)"
                  >
                    <Text color={`${color}.500`} lineHeight="1">
                      Annotation
                    </Text>
                  </Annotation>
                  <Text ml={3}>Top Right</Text>
                </Flex>

                <Flex justify="center" align="center">
                  <Text mr={3}>Bottom Left</Text>
                  <Annotation
                    color={`${color}.500`}
                    strokeWidth={1}
                    left="-30px"
                    bottom="-20px"
                  >
                    <Text color={`${color}.500`} lineHeight="1">
                      Annotation
                    </Text>
                  </Annotation>
                </Flex>

                <Flex justify="center" align="center">
                  <Annotation
                    color={`${color}.500`}
                    strokeWidth={1}
                    left="unset"
                    right="-20px"
                    bottom="-20px"
                    transform="scaleX(-1)"
                  >
                    <Text color={`${color}.500`} lineHeight="1">
                      Annotation
                    </Text>
                  </Annotation>
                  <Text ml={3}>Bottom Right</Text>
                </Flex>
              </Wrap>
            </Container>
          </Section>

          <Section>
            <SectionHeading>Size</SectionHeading>
            <Container maxW="container.xl">
              <Flex justify="center" align="center">
                <Text fontSize="3xl" fontWeight={700} mr={"185px"}>
                  Heading
                </Text>
                <Annotation
                  color={`${color}.500`}
                  strokeWidth={0}
                  left="-190px"
                  bottom="-65px"
                  h="80px"
                  w="240px"
                  transform="rotate(6deg)"
                  opacity="0.35"
                >
                  <Text color={`${color}.500`} lineHeight="1" fontSize="4xl">
                    Annotation
                  </Text>
                </Annotation>
              </Flex>
            </Container>
          </Section>

          <Section>
            <SectionHeading pt={20}>Custom annotation arrow</SectionHeading>
            <Container maxW="container.xl">
              <Flex justify="center" align="center">
                <Text fontWeight={600} fontSize="xl" pt={20} mr={10}>
                  Title
                </Text>
                <Annotation
                  as={CustomArrow} // custom annotation arrow
                  color={`${color}.500`}
                  strokeWidth={2}
                  h={50}
                  w={135}
                  left="-30px"
                  bottom="-50px"
                  transform="rotate(335deg) scaleX(-1)"
                >
                  <Text color={`${color}.500`} lineHeight="1">
                    Custom Arrow Annotation
                  </Text>
                </Annotation>
              </Flex>
            </Container>
          </Section>
        </VStack>
      </chakra.main>
    </>
  );
};

const CustomArrow = createIcon({
  displayName: "CustomArrow",
  viewBox: "0 0 135 50",
  path: (
    <g
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit="10"
      fill="none"
      stroke="currentColor"
    >
      <path d="M3.6 26.899c3.694 5.184 9.621 15.633 17.38 12.592 7.644-2.996 11.653-14.865 17.115-20.495 16.084-16.58 32.796 8.781 43.256 19.736 3.001 3.142 10.561 12.011 15.742 8.005 5.405-4.18 3.588-31.23-3.925-32.245-5.168-.698-1.456 6.614 1.57 7.661 10.183 3.521 25.553-10.357 32.861-15.503" />
      <path d="M128.665 13.957c-.524-4.356 2.411-7.529 2.735-11.714-3.013 1.087-9.222 3.013-12.496 2.207" />
    </g>
  ),
});

export default AnnotationPage;
