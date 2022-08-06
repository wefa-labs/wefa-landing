import { useState } from "react";

import { NextSeo } from "next-seo";

import {
  chakra,
  Box,
  Heading,
  Button,
  Flex,
  Stack,
  Text,
  Slider,
  SliderFilledTrack,
  SliderThumb,
  SliderTrack,
  Wrap,
  WrapItem,
  useColorModeValue,
} from "@chakra-ui/react";

import { SectionSubHeading, ColorSelector } from "@components/common";
import DividerArrow from "@components/divider/divider-arrow";
import DividerCurve from "@components/divider/divider-curve";
import DividerMultipleWaves from "@components/divider/divider-multiple-waves";
import DividerSplit from "@components/divider/divider-split";
import DividerTilt from "@components/divider/divider-tilt";
import DividerTriangle from "@components/divider/divider-triangle";
import DividerWaves from "@components/divider/divider-waves";
import DividerWavy from "@components/divider/divider-wavy";
import DividerWavyTwo from "@components/divider/divider-wavy-2";
import DividerWings from "@components/divider/divider-wings";
import PageTitle from "@components/page-title";

const DividerPage: React.FC = (): JSX.Element => {
  const [color, setColor] = useState<string>("");
  const [position, setPosition] = useState("bottom");
  const [divider, setDivider] = useState("single");
  const [height, setHeight] = useState(150);
  const [width, setWidth] = useState(100);
  const [asymmetric, setAsymmetric] = useState(false);
  const [invert, setInvert] = useState(false);
  const [flip, setFlip] = useState(false);

  const dividerTypes = [
    { type: "single", title: "Single Wave" },
    { type: "multiple", title: "Multiple Waves" },
    { type: "wavy", title: "Wavy" },
    { type: "wavy2", title: "Wavy Two" },
    { type: "curve", title: "Curve" },
    { type: "triangle", title: "Triangle" },
    { type: "tilt", title: "Tilt" },
    { type: "arrow", title: "Arrow" },
    { type: "split", title: "Split" },
    { type: "wings", title: "Wings" },
  ];

  const dividerTitle = (divider: string) => {
    return dividerTypes.find((obj) => obj.type === divider)?.title;
  };

  const dividerBgColor = useColorModeValue(`${color}.300`, `${color}.800`);

  const Divider = () => {
    switch (divider) {
      case "single":
        return (
          <DividerWaves
            width={`${width}%`}
            height={`${height}px`}
            position={position}
            invert={invert}
            flip={flip}
            color={color ? dividerBgColor : undefined}
          />
        );
      case "multiple":
        return (
          <DividerMultipleWaves
            width={`${width}%`}
            height={`${height}px`}
            position={position}
            flip={flip}
            color={color ? dividerBgColor : undefined}
          />
        );
      case "wavy":
        return (
          <DividerWavy
            width={`${width}%`}
            height={`${height}px`}
            position={position}
            flip={flip}
            color={color ? dividerBgColor : undefined}
          />
        );
      case "wavy2":
        return (
          <DividerWavyTwo
            width={`${width}%`}
            height={`${height}px`}
            position={position}
            flip={flip}
            color={color ? dividerBgColor : undefined}
          />
        );
      case "curve":
        return (
          <DividerCurve
            width={`${width}%`}
            height={`${height}px`}
            position={position}
            asymmetric={asymmetric}
            invert={invert}
            flip={flip}
            color={color ? dividerBgColor : undefined}
          />
        );
      case "triangle":
        return (
          <DividerTriangle
            width={`${width}%`}
            height={`${height}px`}
            position={position}
            asymmetric={asymmetric}
            invert={invert}
            flip={flip}
            color={color ? dividerBgColor : undefined}
          />
        );

      case "tilt":
        return (
          <DividerTilt
            width={`${width}%`}
            height={`${height}px`}
            position={position}
            // asymmetric={asymmetric}
            // invert={invert}
            flip={flip}
            color={color ? dividerBgColor : undefined}
          />
        );
      case "arrow":
        return (
          <DividerArrow
            width={`${width}%`}
            height={`${height}px`}
            position={position}
            // asymmetric={asymmetric}
            invert={invert}
            // flip={flip}
            color={color ? dividerBgColor : undefined}
          />
        );
      case "split":
        return (
          <DividerSplit
            width={`${width}%`}
            height={`${height}px`}
            position={position}
            // asymmetric={asymmetric}
            invert={invert}
            // flip={flip}
            color={color ? dividerBgColor : undefined}
          />
        );
      case "wings":
        return (
          <DividerWings
            width={`${width}%`}
            height={`${height}px`}
            position={position}
            // asymmetric={asymmetric}
            invert={invert}
            // flip={flip}
            color={color ? dividerBgColor : undefined}
          />
        );

      default:
        return <Heading>No divider match</Heading>;
    }
  };

  return (
    <>
      <NextSeo
        title="Divider Component"
        description="Divider Component Examples"
      />
      <chakra.main bg={dividerBgColor}>
        <PageTitle
          title="Divider Component"
          body={
            <Text as="div">
              Here are a few examples of what you can do using the divider
              component.
            </Text>
          }
        />
        <Stack pb={10} spacing={10} direction="column" align="center">
          <Box
            pos="relative"
            mb={10}
            p={0}
            bgGradient="linear(to-l, #7928CA, #FF0080)"
            w="full"
            py={20}
          >
            <Heading
              mb={"100px"}
              color="white"
              textAlign="center"
              fontSize="3xl"
              textTransform="capitalize"
            >
              {dividerTitle(divider)} Divider {position}
              <Text fontSize="sm">Height: {height}</Text>
            </Heading>

            {Divider()}
          </Box>

          <ColorSelector
            initColor={color}
            onClick={(e) => setColor(e.currentTarget.name)}
          />

          <Stack spacing={10} direction={["column", "column", "column", "row"]}>
            <Box>
              <SectionSubHeading>Position</SectionSubHeading>
              <Stack justify="center" direction={["column", "row", "row"]}>
                <Button
                  minW="24"
                  isActive={position === "top"}
                  onClick={() => setPosition("top")}
                >
                  Top
                </Button>
                <Button
                  minW="24"
                  isActive={position === "bottom"}
                  onClick={() => setPosition("bottom")}
                >
                  Bottom
                </Button>
              </Stack>
            </Box>

            <Box maxWidth={"400px"}>
              <SectionSubHeading>Type of Divider</SectionSubHeading>
              <Wrap justify="center">
                {dividerTypes.map((t, idx) => (
                  <WrapItem key={idx}>
                    <Button
                      isActive={t.type === divider}
                      onClick={() => setDivider(t.type)}
                    >
                      {t.title}
                    </Button>
                  </WrapItem>
                ))}
              </Wrap>
            </Box>

            <Stack
              align="baseline"
              justify="center"
              direction={["column", "row", "row"]}
            >
              <Flex direction="column" justifyContent="center">
                <SectionSubHeading>Asymmetric</SectionSubHeading>
                <Button
                  isActive={asymmetric}
                  minW="16"
                  onClick={() => setAsymmetric(!asymmetric)}
                >
                  {asymmetric ? "ON" : "OFF"}
                </Button>
              </Flex>
              <Flex direction="column" justifyContent="center">
                <SectionSubHeading>Invert</SectionSubHeading>
                <Button
                  isActive={invert}
                  minW="16"
                  onClick={() => setInvert(!invert)}
                >
                  {invert ? "ON" : "OFF"}
                </Button>
              </Flex>
              <Flex direction="column" justifyContent="center">
                <SectionSubHeading>Flip</SectionSubHeading>
                <Button
                  isActive={flip}
                  minW="16"
                  onClick={() => setFlip(!flip)}
                >
                  {flip ? "ON" : "OFF"}
                </Button>
              </Flex>
            </Stack>
          </Stack>

          <Stack spacing={10} direction={["column", "row", "row"]}>
            <Box minW="200px">
              <SectionSubHeading>Height</SectionSubHeading>
              <Slider
                aria-label="divider-height"
                min={50}
                max={300}
                defaultValue={height}
                onChange={(val) => setHeight(val)}
              >
                <SliderTrack>
                  <SliderFilledTrack />
                </SliderTrack>
                <SliderThumb />
              </Slider>
            </Box>
            <Box minW="200px">
              <SectionSubHeading>Width</SectionSubHeading>
              <Slider
                aria-label="divider-height"
                min={100}
                max={150}
                defaultValue={width}
                onChange={(val) => setWidth(val)}
              >
                <SliderTrack>
                  <SliderFilledTrack />
                </SliderTrack>
                <SliderThumb />
              </Slider>
            </Box>
          </Stack>
        </Stack>
      </chakra.main>
    </>
  );
};

export default DividerPage;
