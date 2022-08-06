import {
  BsCircle,
  BsCircleFill,
  BsGem,
  BsHeart,
  BsHeartFill,
  BsLightning,
  BsLightningFill,
  BsMusicNote,
  BsStar,
} from "@react-icons";

import React, { useContext, useState } from "react";

import { NextSeo } from "next-seo";

import {
  Box,
  chakra,
  Container,
  Flex,
  SimpleGrid,
  Slider,
  SliderFilledTrack,
  SliderThumb,
  SliderTrack,
  Stack,
  Text,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";

import { ThemeColorContext } from "@definitions/context/theme";

import {
  Section,
  SectionHeading,
  SectionSubHeading,
  ColorSelector,
} from "@components/common";
import Highlight from "@components/highlight";
import PageTitle from "@components/page-title";
import { RatingDefault } from "@components/rating/rating-default";

const RatingPage: React.FC = (): JSX.Element => {
  const theme = useContext(ThemeColorContext);
  const globalColor = theme.colorScheme; // global default primary theme color
  const [color, setColor] = useState(globalColor);
  const [fs, setFs] = useState(18);
  const [ratingMode, setRatingMode] = useState(10);
  return (
    <>
      <NextSeo
        title="Rating Component"
        description="Rating Component Examples"
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
          title="Rating Component"
          body={
            <Text as="div">
              On this page, you will find{" "}
              <Text as="div" display="inline-block" color="green.400">
                <Highlight strokeWidth={2}>
                  <b>10 examples</b>
                </Highlight>
              </Text>{" "}
              of rating component that you can easily use on your pages.
            </Text>
          }
        />
        {/* Colors */}
        <Container maxW="container.xl">
          <Flex justify="center" my={10}>
            <ColorSelector
              initColor={color}
              onClick={(e) => setColor(e.currentTarget.name)}
            />
          </Flex>
        </Container>

        <VStack align="stretch" mb={[10, 20, 32]} spacing={[10, 20, 32]}>
          <Section>
            <Container maxW="container.xl">
              <SectionHeading>Simple Rating</SectionHeading>
              <VStack mb={10}>
                <SectionSubHeading>Default</SectionSubHeading>
                <RatingDefault colorScheme={color} initialRating={null} />
              </VStack>

              <SimpleGrid columns={[1, 1, 3]}>
                <VStack>
                  <SectionSubHeading>With Rating value</SectionSubHeading>
                  <RatingDefault
                    colorScheme={color}
                    mode={5}
                    initialRating={3}
                    showRating
                  />
                </VStack>
                <VStack>
                  <SectionSubHeading>Read Only</SectionSubHeading>
                  <RatingDefault
                    colorScheme={color}
                    initialRating={3.4}
                    readonly
                  />
                </VStack>
                <VStack>
                  <SectionSubHeading>Disabled</SectionSubHeading>
                  <RatingDefault
                    colorScheme={color}
                    initialRating={4}
                    disabled
                  />
                </VStack>
              </SimpleGrid>
            </Container>
          </Section>

          {/* Custom Icon & Color */}
          <Section>
            <Container maxW="container.xl">
              <VStack spacing="30px">
                <Box>
                  <SectionHeading mb={0}>Custom Icon & Color</SectionHeading>
                  <Text color="gray.500">
                    A rating can use a set of any icons and colors
                  </Text>
                </Box>

                <Stack direction={{ base: "column", md: "row" }} spacing="30px">
                  <RatingDefault colorScheme={color} initialRating={2} />
                  <RatingDefault
                    colorScheme={color}
                    initialRating={2}
                    icon={<BsStar />}
                  />
                  <RatingDefault
                    colorScheme={color}
                    icon={<BsHeartFill />}
                    initialRating={2}
                  />
                  <RatingDefault
                    colorScheme={color}
                    icon={<BsHeart />}
                    initialRating={2}
                  />
                  <RatingDefault
                    colorScheme={color}
                    icon={<BsCircleFill />}
                    initialRating={2}
                  />
                  <RatingDefault
                    colorScheme={color}
                    icon={<BsCircle />}
                    initialRating={2}
                  />
                </Stack>

                <Stack direction={{ base: "column", md: "row" }} spacing="30px">
                  <RatingDefault
                    colorScheme={color}
                    icon={<BsGem />}
                    initialRating={2}
                  />
                  <RatingDefault
                    colorScheme={color}
                    icon={<BsLightningFill />}
                    initialRating={2}
                  />
                  <RatingDefault
                    colorScheme={color}
                    icon={<BsLightning />}
                    initialRating={2}
                  />
                  <RatingDefault
                    colorScheme={color}
                    icon={<BsMusicNote />}
                    initialRating={2}
                  />
                </Stack>
              </VStack>
            </Container>
          </Section>

          {/* Sizes */}
          <Section>
            <Container maxW="container.xl">
              <VStack spacing={8}>
                <Box>
                  <SectionHeading mb={0}>Sizes</SectionHeading>
                  <Text color="gray.500">
                    You can easily adjust the font size to control the rating
                    dimensions
                  </Text>
                </Box>
                <Slider
                  maxW="xs"
                  aria-label="font size silder"
                  defaultValue={18}
                  min={8}
                  max={72}
                  // onChangeEnd={(val) => console.log(val)}
                  onChange={(val) => setFs(val)}
                >
                  <SliderTrack
                    bg={useColorModeValue(`${color}.100`, `${color}.900`)}
                  >
                    <SliderFilledTrack
                      bg={useColorModeValue(`${color}.400`, `${color}.600`)}
                    />
                  </SliderTrack>
                  <SliderThumb
                    color={useColorModeValue(`${color}.100`, `${color}.50`)}
                    bg={useColorModeValue(`${color}.500`, `${color}.600`)}
                    boxSize={6}
                  >
                    <Text color="current" fontWeight="500" fontSize="xs">
                      {fs}
                    </Text>
                  </SliderThumb>
                </Slider>

                <RatingDefault
                  colorScheme={color}
                  initialRating={4}
                  fontSize={fs}
                />
              </VStack>
            </Container>
          </Section>

          {/* Rating Mode */}
          <Section>
            <Container maxW="container.xl">
              <VStack spacing={8}>
                <Box>
                  <SectionHeading mb={0}>Rating Mode</SectionHeading>
                  <Text color="gray.500">
                    Rating mode is 5 by default, you can increase or decrease
                    this value.
                  </Text>
                </Box>
                <Slider
                  maxW="xs"
                  aria-label="font size silder"
                  defaultValue={ratingMode}
                  min={1}
                  max={20}
                  onChange={(val) => setRatingMode(val)}
                >
                  <SliderTrack
                    bg={useColorModeValue(`${color}.100`, `${color}.900`)}
                  >
                    <SliderFilledTrack
                      bg={useColorModeValue(`${color}.400`, `${color}.600`)}
                    />
                  </SliderTrack>
                  <SliderThumb
                    color={useColorModeValue(`${color}.100`, `${color}.50`)}
                    bg={useColorModeValue(`${color}.500`, `${color}.600`)}
                    boxSize={6}
                  >
                    <Text color="current" fontWeight="500" fontSize="xs">
                      {ratingMode}
                    </Text>
                  </SliderThumb>
                </Slider>
                const globalColor = theme.colorScheme; // global default primary
                theme color
                <RatingDefault
                  colorScheme={color}
                  initialRating={0}
                  mode={ratingMode}
                />
              </VStack>
            </Container>
          </Section>
        </VStack>
      </chakra.main>
    </>
  );
};

export default RatingPage;
