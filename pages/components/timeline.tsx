import { FiPenTool, FiServer, FiTerminal } from "@react-icons";

import React, { useState } from "react";

import { NextSeo } from "next-seo";

import {
  Box,
  Button,
  ButtonGroup,
  Container,
  Flex,
  Icon,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";

import {
  SectionSubHeading,
  SectionHeading,
  ColorSelector,
} from "@components/common";
import ImageLazyload from "@components/image-lazyload";
import PageTitle from "@components/page-title";
import { TimelineGroup, Timeline } from "@components/timeline";

import BarcelonaImage from "@assets/images/barcelona-unsplash.jpg?resize&img";
import LondonImage from "@assets/images/london-unsplash.jpg?resize&img";
import ParisImage from "@assets/images/paris-unsplash.jpg?resize&img";

const timlineItems = [
  // {
  //   title: "Requirements analysis",
  //   duration: "1 ~ 3 Weeks",
  //   icon: FiPieChart,
  // },
  { title: "Design & Prototype", duration: "2 ~ 4 Months", icon: FiPenTool },
  { title: "Development", duration: "3 ~ 5 Months", icon: FiTerminal },
  // { title: "Quality Assurance", duration: "2 ~ 4 Weeks", icon: FiAward },
  { title: "Deployment", duration: "3 ~ 4 Hours", icon: FiServer },
];

const lorem =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque scelerisque diam non nisi semper, et elementum lorem ornare. Maecenas placerat facilisis mollis. Duis sagittis ligula in sodales vehicula.";

const TimelinePage: React.FC = (): JSX.Element => {
  const [color, setColor] = useState("gray");
  const [isReverse, setIsReverse] = useState(false);

  // for changing the cross timeline direction
  const reverse = (index: number, rev: boolean) => {
    if (rev) return index % 2 === 0;
    return index % 2 != 0;
  };

  return (
    <>
      <NextSeo
        title="Timeline Component"
        description="Timeline Component Examples"
      />
      <main>
        <PageTitle
          title="Timeline Component"
          body={
            <Text as="div">
              Here are a few examples of what you can do using the timeline
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
        <Stack mb={20} spacing={20} direction="column" align="center">
          <Container maxW="container.sm">
            <SectionHeading mb={10}>Timeline Item</SectionHeading>
            <TimelineGroup>
              <Timeline
                // color={color}
                colorScheme={color}
                icon={"1"}
                heading="Heading"
                description={"Meta & Description"}
              >
                <Text mt={6}>Timeline body... {lorem}</Text>
              </Timeline>
            </TimelineGroup>
          </Container>
          <SectionHeading mb={10}>Timeline Example</SectionHeading>
          <Container maxW="container.sm">
            <SectionSubHeading mb={10}>Ordered List</SectionSubHeading>
            <TimelineGroup>
              {timlineItems.map((i, idx) => (
                <Timeline
                  key={idx}
                  colorScheme={color}
                  icon={idx + 1}
                  heading={i.title}
                  description={i.duration}
                >
                  <Text mt={6}>{lorem}</Text>
                </Timeline>
              ))}
            </TimelineGroup>
          </Container>
          <Container maxW="container.sm">
            <SectionSubHeading mb={10}>Icon List</SectionSubHeading>
            <TimelineGroup>
              {timlineItems.map((i, idx) => (
                <Timeline
                  key={idx}
                  colorScheme={color}
                  icon={<Icon color="white" as={i.icon} />}
                  heading={i.title}
                  description={i.duration}
                >
                  <Text mt={6}>{lorem}</Text>
                </Timeline>
              ))}
            </TimelineGroup>
          </Container>

          <Container maxW="960px">
            <SectionHeading mb={10}>Cross Timeline</SectionHeading>
            <ButtonGroup
              mb={5}
              d="flex"
              mx="auto"
              variant={"outline"}
              justifyContent="center"
            >
              <Button
                size="sm"
                isActive={isReverse === true}
                onClick={() => setIsReverse(true)}
              >
                Right
              </Button>
              <Button
                size="sm"
                isActive={isReverse === false}
                onClick={() => setIsReverse(false)}
              >
                Left
              </Button>
            </ButtonGroup>
            <TimelineGroup
              borderColor={useColorModeValue(`${color}.200`, `${color}.700`)}
              isCross
            >
              {timlineItems.map((i, idx) => (
                <Box key={idx}>
                  <Timeline
                    marginLeft={reverse(idx, isReverse) ? "unset" : "auto"}
                    isReverse={reverse(idx, isReverse)}
                    colorScheme={color}
                    icon={idx + 1}
                    heading={i.title}
                    description={i.duration}
                    width="calc(50% + 17px)"
                  >
                    <Text mt={6}>{lorem}</Text>
                  </Timeline>
                </Box>
              ))}
            </TimelineGroup>
          </Container>
          <Container maxW="container.md">
            <SectionHeading mb={10}>Timeline with media</SectionHeading>
            <TimelineGroup>
              <Timeline
                colorScheme={color}
                icon={"L"}
                heading="London"
                description={"08 March to 22 May"}
              >
                <Box mt={6}>
                  <ImageLazyload
                    rounded="lg"
                    objectFit="cover"
                    image={LondonImage}
                    // src={LondonImage}
                    // srcSet={LondonImage.srcSet}
                    // fallbackSrc={LondonImage.placeholder}
                    // ratio={LondonImage.width / LondonImage.height}
                    // width={LondonImage.width}
                    // height={LondonImage.height}
                  />
                  <Text mt={6}>Timeline body... {lorem}</Text>
                </Box>
              </Timeline>
              <Timeline
                colorScheme={color}
                icon={"P"}
                heading="Paris"
                description={"15 September to 27 October"}
              >
                <Box mt={6}>
                  <ImageLazyload
                    rounded="lg"
                    objectFit="cover"
                    image={ParisImage}
                    // src={ParisImage}
                    // srcSet={ParisImage.srcSet}
                    // fallbackSrc={ParisImage.placeholder}
                    // ratio={ParisImage.width / ParisImage.height}
                  />
                  <Text mt={6}>Timeline body... {lorem}</Text>
                </Box>
              </Timeline>
              <Timeline
                colorScheme={color}
                icon={"B"}
                heading="Barcelona"
                description={"1 May to 24 June"}
              >
                <Box mt={6}>
                  <ImageLazyload
                    rounded="lg"
                    objectFit="cover"
                    image={BarcelonaImage}
                    // src={BarcelonaImage}
                    // srcSet={BarcelonaImage.srcSet}
                    // fallbackSrc={BarcelonaImage.placeholder}
                    // ratio={BarcelonaImage.width / BarcelonaImage.height}
                  />
                  <Text mt={6}>Timeline body... {lorem}</Text>
                </Box>
              </Timeline>
            </TimelineGroup>
          </Container>
        </Stack>
      </main>
    </>
  );
};

export default TimelinePage;
