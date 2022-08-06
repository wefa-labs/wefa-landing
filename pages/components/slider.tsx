import { BiVolumeFull } from "@react-icons";

import { useState, useReducer, useContext } from "react";

import { NextSeo } from "next-seo";

import {
  Box,
  Center,
  chakra,
  Container,
  Flex,
  RangeSlider,
  RangeSliderFilledTrack,
  RangeSliderThumb,
  RangeSliderTrack,
  SimpleGrid,
  Slider,
  SliderFilledTrack,
  SliderThumb,
  SliderTrack,
  Stack,
  Text,
  Tooltip,
  useColorModeValue,
} from "@chakra-ui/react";

import { ThemeColorContext } from "@definitions/context/theme";

import {
  ColorSelector,
  Section,
  SectionHeading,
  SectionSubHeading,
} from "@components/common";
import PageTitle from "@components/page-title";

// Page States
type InitialStateType = {
  RangeSlider1: number[];
};
const initialState = {
  RangeSlider1: [25, 70],
};

type Action = { type: "range-slider-1"; value: number[] } | { type: "reset" };

const reducer = (state: InitialStateType, action: Action) => {
  switch (action.type) {
    case "range-slider-1":
      return { ...state, RangeSlider1: action.value };
    // case "decrement":
    //   return { ...state, counter1: state.counter1 - action.value };
    // case "increment2":
    //   return { ...state, counter2: state.counter2 + action.value };
    // case "decrement2":
    //   return { ...state, counter2: state.counter2 - action.value };
    case "reset":
      return initialState;
    default:
      return state;
  }
};

const SliderPage: React.FC = (): JSX.Element => {
  const theme = useContext(ThemeColorContext);
  const globalColor = theme.colorScheme; // global default primary theme color
  const [color, setColor] = useState(globalColor);
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      <NextSeo
        title="Slider Component"
        description="Slider Component Examples"
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
          title="Slider Component"
          body={
            <Text as="div">
              Here are a few examples of what you can do using the slider
              component.
            </Text>
          }
        />
        <Container maxW="container.xl">
          <Flex justify="center" my={10}>
            <ColorSelector
              initColor={color}
              onClick={(e) => setColor(e.currentTarget.name)}
            />
          </Flex>
        </Container>
        <SectionHeading>Slider Usage</SectionHeading>
        <Stack mb={20} spacing={20} direction="column" align="center">
          <Section px={10} w="full" maxWidth="container.sm" my={0}>
            <SectionSubHeading mb={10}>Default Slider</SectionSubHeading>
            <Slider
              colorScheme={color}
              aria-label="default-slider-example"
              defaultValue={30}
            >
              <SliderTrack>
                <SliderFilledTrack />
              </SliderTrack>
              <SliderThumb />
            </Slider>
          </Section>

          <Section px={10} my={0}>
            <SectionSubHeading mb={10}>Vertical Slider</SectionSubHeading>
            <Stack justify="center" align="center" direction="row">
              <Slider
                colorScheme={color}
                aria-label="default-slider-vertical-example"
                defaultValue={20}
                orientation="vertical"
                minH="32"
              >
                <SliderTrack>
                  <SliderFilledTrack />
                </SliderTrack>
                <SliderThumb />
              </Slider>
              <Slider
                colorScheme={color}
                aria-label="default-slider-vertical-example"
                defaultValue={40}
                orientation="vertical"
                minH="32"
              >
                <SliderTrack>
                  <SliderFilledTrack />
                </SliderTrack>
                <SliderThumb />
              </Slider>
              <Slider
                colorScheme={color}
                aria-label="default-slider-vertical-example"
                defaultValue={60}
                orientation="vertical"
                minH="32"
              >
                <SliderTrack>
                  <SliderFilledTrack />
                </SliderTrack>
                <SliderThumb />
              </Slider>
            </Stack>
          </Section>

          <SimpleGrid mb={0} spacing={10} columns={{ base: 1, md: 2 }}>
            <Section px={10} w="full" maxWidth="container.sm" my={0}>
              <SectionSubHeading mb={10}>Custom Slider</SectionSubHeading>
              <Slider aria-label="slider-custom" defaultValue={50}>
                <SliderTrack bg={`${color}.100`}>
                  <SliderFilledTrack bg={`${color}.400`} />
                </SliderTrack>
                <SliderThumb boxSize={6}>
                  <Box color={`${color}.800`} as={BiVolumeFull} />
                </SliderThumb>
              </Slider>
            </Section>

            <Section px={10} w="full" maxWidth="container.sm" my={0}>
              <SectionSubHeading mb={10}>Discrete Sliders</SectionSubHeading>
              <Slider
                aria-label="slider-discrete"
                defaultValue={60}
                min={0}
                max={300}
                step={30}
              >
                <SliderTrack bg={`${color}.100`}>
                  <Box position="relative" right={10} />
                  <SliderFilledTrack bg={`${color}.400`} />
                </SliderTrack>
                <SliderThumb boxSize={6} />
              </Slider>
              <Text fontSize="xs" textAlign="center" mt={4}>
                Discrete sliders allow you to snap to predefined sets of values.
              </Text>
            </Section>
          </SimpleGrid>
          <Section px={10} w="full" maxWidth="container.sm" my={0}>
            <SectionSubHeading mb={10}>Range Slider</SectionSubHeading>
            <SimpleGrid
              alignItems="center"
              justifyContent="center"
              mb={0}
              columns={{ base: 1, md: 2 }}
            >
              <Box>
                <SectionSubHeading>Default</SectionSubHeading>
                <RangeSlider
                  colorScheme={color}
                  aria-label={["min 1", "max 1"]}
                  defaultValue={[10, 30]}
                >
                  <RangeSliderTrack>
                    <RangeSliderFilledTrack />
                  </RangeSliderTrack>
                  <RangeSliderThumb index={0} />

                  <RangeSliderThumb index={1} />
                </RangeSlider>
              </Box>
              <Box>
                <SectionSubHeading>Vertically oriented</SectionSubHeading>
                <Center>
                  <RangeSlider
                    colorScheme={color}
                    aria-label={["min 2", "max 2"]}
                    defaultValue={[20, 60]}
                    orientation="vertical"
                    minH="32"
                  >
                    <RangeSliderTrack>
                      <RangeSliderFilledTrack />
                    </RangeSliderTrack>
                    <RangeSliderThumb index={0} />
                    <RangeSliderThumb index={1} />
                  </RangeSlider>
                </Center>
              </Box>
            </SimpleGrid>

            <Text fontSize="xs" textAlign="center" mt={4}>
              The RangeSlider is a multi thumb slider used to select a range of
              related values. A common use-case of this component is a price
              range picker that allows a user to set the minimum and maximum
              price.
            </Text>
          </Section>
          <Section px={10} w="full" maxWidth="container.sm">
            <SectionHeading>Example Usage Range Slider</SectionHeading>
            <SectionSubHeading>Average prices</SectionSubHeading>
            <RangeSlider
              colorScheme={color}
              aria-label={["min price", "max price"]}
              defaultValue={state.RangeSlider1}
              onChange={(val) =>
                dispatch({ type: "range-slider-1", value: val })
              }
            >
              <RangeSliderTrack>
                <RangeSliderFilledTrack />
              </RangeSliderTrack>
              <Tooltip
                hasArrow
                label={`Min $${state.RangeSlider1[0]}`}
                placement="bottom"
                isOpen
                bg={useColorModeValue("red.300", "red.600")}
                color={useColorModeValue("red.700", "red.200")}
              >
                <RangeSliderThumb boxSize={6} index={0} />
              </Tooltip>
              <Tooltip
                hasArrow
                label={`Max $${state.RangeSlider1[1]}`}
                placement="top"
                bg={useColorModeValue("green.300", "green.600")}
                color={useColorModeValue("green.700", "green.300")}
                isOpen
              >
                <RangeSliderThumb boxSize={6} index={1} />
              </Tooltip>
            </RangeSlider>
          </Section>
        </Stack>
        {/* <SimpleGrid mb={0} columns={{ base: 1, md: 2 }}></SimpleGrid> */}
      </chakra.main>
    </>
  );
};

export default SliderPage;
