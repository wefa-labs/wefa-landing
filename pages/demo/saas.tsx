import {
  BsTerminal,
  FaCheck,
  SiChakraui,
  SiTypescript,
  SiNextdotjs,
  SiReact,
  SiVercel,
} from "@react-icons";

import React, { memo, useEffect, useContext, useState } from "react";

import { AnimatePresence, useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import { NextSeo } from "next-seo";

import {
  Avatar,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Button,
  Flex,
  chakra,
  ChakraProps,
  Circle,
  Container,
  Grid,
  List,
  ListItem,
  Heading,
  Image,
  Text,
  Stack,
  StackDivider,
  SimpleGrid,
  ThemingProps,
  useColorModeValue,
  Icon,
} from "@chakra-ui/react";

import Logo1 from "@definitions/brands/logo-1";
import Logo2 from "@definitions/brands/logo-2";
import Logo3 from "@definitions/brands/logo-3";
import Logo4 from "@definitions/brands/logo-4";
import Logo5 from "@definitions/brands/logo-5";
import { ThemeColorContext } from "@definitions/context/theme";

import FooterLargeNavigationLogoLeft from "@components/footer/footer-large-navigation-logo-left";
import ImageLazyload from "@components/image-lazyload";
import ImageLazyloadNoRatio from "@components/image-lazyload/without-aspect-ratio";

import Layout from "@layouts/default";

import BeatriceHasson from "@assets/images/avatar/1f-square.jpg?resize&size=96&img";
import BlockMediaConfetiSVG from "@assets/images/demo/block-media-blob.svg";
import BlockMediaBlock1SVG from "@assets/images/demo/block-media-block-1.svg";
import BlockMediaBlock2SVG from "@assets/images/demo/block-media-block-2.svg";
import BlockMediaBlock3SVG from "@assets/images/demo/block-media-block-3.svg";
import BlockMediaBlock4SVG from "@assets/images/demo/block-media-block-4.svg";
import BlockMediaBlock5SVG from "@assets/images/demo/block-media-block-5.svg";
import BlockMediaBlobSVG from "@assets/images/demo/block-media-confeti.svg";
import ComponentsCircle from "@assets/images/demo/components-circle.svg";
import RobustLibrariesLightSVG from "@assets/images/demo/components.svg";
import LandingPages1 from "@assets/images/demo/landing-pages-1.png?resize&img";
import LandingPages2 from "@assets/images/demo/landing-pages-2.png?resize&img";
import LandingPages3 from "@assets/images/demo/landing-pages-3.png?resize&img";
import LandingPagesMedia from "@assets/images/demo/landing-pages-media.png?resize&img";
import ProjectStructureDarkSVG from "@assets/images/demo/project-structure-dark.svg";
import ProjectStructureLightSVG from "@assets/images/demo/project-structure-light.svg";
import TemplateOverviewBrowser from "@assets/images/demo/template-overview-browser.png?resize&img";
import Team2 from "@assets/images/team2.jpg?resize&img";
import Team6 from "@assets/images/team-6.jpg?resize&img";

const MotionBox = motion(Box);

const SaaSPage = () => {
  const theme = useContext(ThemeColorContext);
  const color = theme.colorScheme; // global default primary theme color
  return (
    <>
      <NextSeo title="SaaS" description="Mercury SaaS Example Page" />
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
        {/* Hero */}
        <Hero colorScheme={color} />

        <Stack spacing={[10, 10, 20, 32]}>
          {/* Manager */}
          <Box>
            <Container maxW="container.xl">
              <Box mb={16} maxW={["full", "full", "full", 550]}>
                <Subtitle>Project Management</Subtitle>
                <BlockTitle>Build a neat workspace for your team.</BlockTitle>
                <Lead>
                  As the project grows, problems begin to arise, as every
                  developer knows, we have created a clean and orderly project
                  structure so that you do not experience this problem.
                </Lead>
              </Box>
              <Stack
                align="center"
                direction={["column", "column", "column", "row"]}
                spacing={[5, 5, 10, 20]}
                mb={[10, 10, 20, 32]}
                pb={[10, 10, 20, 0]}
                borderBottomWidth={["1px", "1px", "1px", 0]}
              >
                <Box flex={2} width="full" maxW={700}>
                  <Image
                    width="full"
                    src={
                      useColorModeValue(
                        ProjectStructureLightSVG,
                        ProjectStructureDarkSVG,
                      ) as string
                    }
                  />
                </Box>
                <Box flex={1}>
                  <Title>Project structure</Title>
                  <Lead mb={6}>
                    We have created a clear and simple project structure that
                    you can use for all kinds of projects. With this structure,
                    you can easily scale your project from large to small.
                  </Lead>
                  <Button variant="ghost">Explore All</Button>
                </Box>
              </Stack>

              <Stack
                align="center"
                direction={[
                  "column-reverse",
                  "column-reverse",
                  "column-reverse",
                  "row",
                ]}
                spacing={[5, 5, 10, 20]}
                mb={[10, 10, 20, 32]}
                pb={[10, 10, 20, 0]}
                borderBottomWidth={["1px", "1px", "1px", 0]}
              >
                <Box flex={1}>
                  <Title>Robust libraries</Title>
                  <Lead mb={6}>
                    We have included every feature you will need in the project
                    without losing performance and we have created built-in
                    components for you to use them easily.
                  </Lead>
                  <Button variant="ghost">View Components</Button>
                </Box>
                <Flex
                  flex={2}
                  minH={["full", 430, 430]}
                  pos="relative"
                  width="full"
                  maxW={700}
                  align="center"
                  justify="center"
                >
                  <DotCircle
                    display={["none", "initial", "initial"]}
                    zIndex={0}
                    pos="absolute"
                  />
                  <Image
                    pos="relative"
                    zIndex={1}
                    // top={"50%"}
                    // left={0}
                    width="full"
                    maxWidth={["full", 450, 450]}
                    src={RobustLibrariesLightSVG as string}
                  />
                </Flex>
              </Stack>

              <Stack
                align="center"
                direction={["column", "column", "column", "row"]}
                spacing={[5, 5, 10, 20]}
              >
                <Box flex="2" width="full" maxW={700}>
                  <ImageLazyload width="full" image={LandingPagesMedia} />
                </Box>
                <Box flex="1">
                  <Title>Landing pages</Title>
                  <Lead mb={6}>
                    We have prepared pre-built pages for each scenario and you
                    can easily edit these pages to suit your needs and complete
                    your project quickly.
                  </Lead>
                  <Button variant="ghost">Get Started</Button>
                </Box>
              </Stack>
            </Container>
          </Box>

          {/* Template Features */}
          <Box
            height="full"
            minHeight={["unset", "unset", 850]}
            py={[10, 10, 20, 32]}
            bg="black"
            color="white"
            overflow="hidden"
          >
            <Container maxW="container.xl">
              <Features />
            </Container>
          </Box>

          {/* Why Mercury */}
          <Box>
            <Container maxW="container.xl">
              <Flex direction="column" align="center" justify="center">
                <Subtitle>Why Mercury</Subtitle>
                <BlockTitle>Multipurpose React Template</BlockTitle>
                <Lead
                  textAlign={["start", "start", "center"]}
                  mb={16}
                  maxW={900}
                >
                  With the easy-to-use and rich component libraries of the
                  template, you will facilitate your application development for
                  every purpose and you will be able to complete your project
                  quickly with pre-built pages.
                </Lead>

                <WhyMercury />
              </Flex>
            </Container>
          </Box>

          {/* Trusted by developers */}
          <Box>
            <Container maxW="container.xl">
              <BlockTitle mb={4} textAlign="center">
                Trusted by developers around the world
              </BlockTitle>
              <Title
                mb={[10, 10, 20]}
                color={useColorModeValue("gray.600", "gray.300")}
                textAlign="center"
              >
                More than 100,000 customers in 190 countries use Mercury to
                develop amazing web projects
              </Title>
              <Stack
                spacing={0}
                divider={
                  <StackDivider
                    borderColor={useColorModeValue("gray.200", "gray.700")}
                  />
                }
                mb={[10, 10, 20, 32]}
              >
                <Stack
                  direction={["column", "column", "row"]}
                  divider={
                    <StackDivider
                      borderColor={useColorModeValue("gray.200", "gray.700")}
                    />
                  }
                  spacing={4}
                  align="stretch"
                  width={["unset", "unset", "full"]}
                >
                  <Flex p={6} flex="1">
                    <Logo1
                      mx="auto"
                      color={useColorModeValue(null, "current")}
                    />
                  </Flex>
                  <Flex p={6} flex="1">
                    <Logo2
                      mx="auto"
                      color={useColorModeValue(null, "current")}
                    />
                  </Flex>
                  <Flex p={6} flex="1">
                    <Logo3
                      mx="auto"
                      color={useColorModeValue(null, "current")}
                    />
                  </Flex>
                </Stack>
                <Stack
                  direction={["column", "column", "row"]}
                  divider={
                    <StackDivider
                      borderColor={useColorModeValue("gray.200", "gray.700")}
                    />
                  }
                  spacing={4}
                  align="stretch"
                  width={["unset", "unset", "full"]}
                >
                  <Flex p={6} flex="1">
                    <Logo4
                      mx="auto"
                      color={useColorModeValue(null, "current")}
                    />
                  </Flex>
                  <Flex p={6} flex="1">
                    <Logo5
                      mx="auto"
                      color={useColorModeValue(null, "current")}
                    />
                  </Flex>
                  <Flex p={6} flex="1">
                    <Logo1
                      mx="auto"
                      color={useColorModeValue(null, "current")}
                    />
                  </Flex>
                </Stack>
              </Stack>

              {/* Testimonial */}
              <Box
                mx="auto"
                maxW="container.md"
                bg={useColorModeValue("gray.50", "gray.700")}
                borderLeftWidth="4px"
                p={10}
                rounded="xl"
              >
                <Logo4 mb={4} color="current" />
                <Title fontSize={["lg", "xl", "2xl"]}>
                  Mercury gives you the best developer experience with all the
                  features you need for production: hybrid static & server
                  rendering, TypeScript support, smart bundling, route
                  pre-fetching, and more. No config needed.
                </Title>
                <Flex>
                  <Avatar
                    srcSet={BeatriceHasson.srcSet}
                    src={BeatriceHasson.src}
                    size="md"
                    mr={4}
                  />
                  <Box>
                    <Text fontWeight={500}>Beatrice Hasson</Text>
                    <Text fontSize="sm">
                      Software Development Team Lead, ACME
                    </Text>
                  </Box>
                </Flex>
              </Box>
            </Container>
          </Box>

          {/* Get Started Today */}
          <Box
            py={[10, 10, 20, 32]}
            bg={useColorModeValue("gray.100", "gray.900")}
          >
            <Container maxW="container.xl">
              <Stack
                direction={["column", "column", "column", "row"]}
                align="center"
                spacing={[10, 10, 20]}
              >
                <Box maxW={["full", "full", "80vw", 550]}>
                  <Subtitle> Get Started Today</Subtitle>
                  <BlockTitle fontSize="4xl">
                    Build better with Mercury
                  </BlockTitle>
                  <Lead
                    color={useColorModeValue("gray.600", "whiteAlpha.700")}
                    mb={10}
                  >
                    We have brought together every feature you need to develop
                    high-performance web applications.
                  </Lead>
                  <Button px={6} height={12} colorScheme={color}>
                    Purchase Mercury
                  </Button>
                </Box>

                <Stack
                  direction={["column", "column", "row"]}
                  spacing={[6, 6, 10, 20]}
                  mx="auto"
                >
                  <List spacing={6} fontSize="lg">
                    <ListItem>
                      <CheckIcon />
                      Image Optimization
                    </ListItem>
                    <ListItem>
                      <CheckIcon />
                      Internationalization
                    </ListItem>
                    <ListItem>
                      <CheckIcon />
                      TypeScript Support
                    </ListItem>
                    <ListItem>
                      <CheckIcon />
                      Code-splitting and Bundling
                    </ListItem>
                  </List>

                  <List spacing={6} fontSize="lg">
                    <ListItem>
                      <CheckIcon />
                      Themeable
                    </ListItem>
                    <ListItem>
                      <CheckIcon />
                      Composable
                    </ListItem>
                    <ListItem>
                      <CheckIcon />
                      Light/Dark UI
                    </ListItem>
                    <ListItem>
                      <CheckIcon />
                      Built for Developers
                    </ListItem>
                  </List>
                </Stack>
              </Stack>
            </Container>
          </Box>
        </Stack>
      </chakra.main>
    </>
  );
};

/* -------------------------------------------------------------------------- */
/*                                 PAGE BLOCKS                                */
/* -------------------------------------------------------------------------- */

const CheckIcon: React.FC<ChakraProps & ThemingProps> = memo(
  ({ color = "white", bg }) => (
    <Circle
      display="inline-flex"
      size={5}
      bg={bg ? bg : useColorModeValue("green.300", "green.600")}
      mr={4}
    >
      <Icon fontSize="10px" as={FaCheck} color={color} />
    </Circle>
  ),
);

const BlockTitle: React.FC<ChakraProps & ThemingProps> = memo(
  ({ children, ...rest }) => {
    return (
      <Heading
        fontSize={["3xl", "4xl", "5xl"]}
        fontWeight={300}
        mb={8}
        {...rest}
      >
        {children}
      </Heading>
    );
  },
);

const Title: React.FC<ChakraProps & ThemingProps> = memo(
  ({ children, ...rest }) => {
    return (
      <Text fontWeight={400} fontSize="2xl" mb={6} {...rest}>
        {children}
      </Text>
    );
  },
);

const Subtitle: React.FC<ChakraProps & ThemingProps> = memo(
  ({ children, ...rest }) => {
    return (
      <Text
        textTransform="uppercase"
        fontSize="xs"
        fontWeight={500}
        letterSpacing="1px"
        {...rest}
      >
        {children}
      </Text>
    );
  },
);

const Lead: React.FC<ChakraProps & ThemingProps> = memo(
  ({ color, children, ...rest }) => {
    const textColor = useColorModeValue("gray.600", "gray.300");
    return (
      <Text
        color={color ? color : textColor}
        fontSize={["md", "lg", "xl"]}
        fontWeight={300}
        {...rest}
      >
        {children}
      </Text>
    );
  },
);

const Hero: React.FC<ChakraProps & ThemingProps> = memo(({ colorScheme }) => {
  const textColor = useColorModeValue("gray.600", "gray.300");
  return (
    <Flex
      pos="relative"
      align="center"
      pt={0}
      height="full"
      mb={[10, 10, 20, 0]}
    >
      <Container pos="relative" zIndex={1} maxW="container.xl">
        <Flex align="center" direction={["column", "column", "column", "row"]}>
          <Box
            mt={[28, 28, 32, 0]}
            mb={[10, 10, 10, 0]}
            width="full"
            maxW={["full", "full", 700, 450]}
          >
            <BlockTitle mb={16}>
              Simplify your complex ideas with Mercury.
            </BlockTitle>
            <Text
              color={textColor}
              fontSize={["md", "lg", "xl"]}
              mb={8}
              _before={{
                content: "''",
                display: "block",
                position: "relative",
                mb: "24px",
                width: "79px",
                height: "1px",
                background: "#6f7782",
              }}
            >
              Accelerate the design process with rich components and pre-built
              pages that we carefully select and craft for each scenario.
            </Text>
            <Stack direction={["column", "column", "row"]} mb={2}>
              <Button colorScheme={colorScheme} size="lg">
                Get Started
              </Button>
              <Button variant="ghost" size="lg">
                Let's Talk
              </Button>
            </Stack>
            <Text fontSize="sm" color="gray.500">
              Start free trial. * No credit card required.
            </Text>
          </Box>
          <Flex
            // align="center"
            direction={["column", "row", "row"]}
            justify="center"
            pos="relative"
            width="full"
            zIndex={1}
            pb={20}
            _before={{
              content: "''",
              display: ["none", "none", "none", "block"],
              height: 0,
              position: "relative",
              pb: "calc(600 / 550 * 100%)",
            }}
          >
            <Flex
              pos={["unset", "unset", "unset", "absolute"]}
              zIndex={0}
              left={[0, 0, 0, "20%"]}
              top={[0, 0, 0, 32]}
              flex="1"
            >
              <Box
                borderWidth={"10px"}
                borderColor="whiteAlpha.700"
                width={["full", "full", "full", 400]}
                flex="1"
              >
                <ImageLazyload
                  objectFit="cover"
                  width="full"
                  height="full"
                  ratio={[1, 1, 4 / 3, 4 / 6]}
                  image={Team2}
                />
              </Box>
            </Flex>
            <Flex
              pos={["unset", "unset", "unset", "absolute"]}
              zIndex={1}
              right={"3%"}
              // right={0}
              top={0}
              mt={[0, 0, 0, 60]}
              flex="1"
            >
              <Box
                borderWidth={"10px"}
                borderColor="whiteAlpha.700"
                width={["full", "full", "full", 400]}
                flex="1"
              >
                <ImageLazyload
                  objectFit="cover"
                  width="full"
                  height="full"
                  ratio={[1, 1, 4 / 3, 4 / 6]}
                  image={Team6}
                />
              </Box>
            </Flex>
          </Flex>
        </Flex>
      </Container>
      <Box
        pos="absolute"
        right={0}
        top={0}
        maxW={["full", "full", "full", 600]}
        width="full"
        height="full"
        bg={useColorModeValue("orange.100", "gray.900")}
        zIndex={0}
      ></Box>
    </Flex>
  );
});

const Features: React.FC = memo(() => {
  const [active, setActive] = useState(0);

  const items = [
    {
      colorScheme: "pink",
      title: "Template Overview",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      colorScheme: "green",
      title: "Landing Pages",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      colorScheme: "purple",
      title: "Components",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      colorScheme: "yellow",
      title: "Blocks",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
  ];
  const container = {
    initial: { y: 50, scale: 0.8, opacity: 0 },
    animate: {
      y: 0,
      scale: 1,
      opacity: 1,
      transition: {
        // duration: 2,
        staggerChildren: 0.125,
      },
    },
    exit: {
      y: -50,
      scale: 1,
      opacity: 0,
      transition: {
        // duration: 1,
        staggerChildren: 0.125,
      },
    },
  };

  const item = {
    initial: { y: 50, scale: 0.8, opacity: 0 },
    animate: { y: 0, scale: 1, opacity: 1 },
    exit: { y: -50, scale: 1, opacity: 0 },
  };

  const TemplateOverview = (
    <>
      <MotionBox h="full" w="full" variants={item}>
        <ImageLazyloadNoRatio
          objectFit={"cover"}
          objectPosition="left top"
          h={["full"]}
          // w="full"
          image={TemplateOverviewBrowser}
        />
      </MotionBox>
      <MotionBox
        pos="absolute"
        display="flex"
        zIndex={2}
        bottom={4}
        left={[4]}
        // w="full"
        // h="full"
        variants={container}
      >
        <MotionBox
          bg="deepBlue.600"
          rounded="full"
          pl={2}
          pr={4}
          py={2}
          mr={2}
          variants={item}
        >
          <Flex direction="row" align="center">
            <Icon as={SiReact} w={6} h={6} mr={2} />
            <Text fontWeight="500">React</Text>
          </Flex>
        </MotionBox>
        <MotionBox
          bg="teal.600"
          rounded="full"
          pl={2}
          pr={4}
          py={2}
          mr={2}
          variants={item}
        >
          <Flex direction="row" align="center">
            <Icon as={SiChakraui} w={6} h={6} mr={2} />
            <Text fontWeight="500">Chakra</Text>
          </Flex>
        </MotionBox>
        <MotionBox
          bg="black"
          rounded="full"
          pl={2}
          pr={4}
          py={2}
          variants={item}
        >
          <Flex direction="row" align="center">
            <Icon as={SiNextdotjs} w={6} h={6} mr={2} />
            <Text fontWeight="500">Next.js</Text>
          </Flex>
        </MotionBox>
      </MotionBox>
      {/* <MotionBox
        pos="absolute"
        zIndex={2}
        top={32}
        left={[4, 8, 16]}
        w="full"
        h="full"
        variants={item}
      >
        <ImageLazyload image={Browser} />
      </MotionBox> */}
    </>
  );

  const LandingPages = (
    <>
      <MotionBox w="full" h="full" pos="relative" zIndex={0} variants={item}>
        <ImageLazyload image={LandingPages1} />
      </MotionBox>
      <MotionBox
        pos="absolute"
        zIndex={1}
        top={20}
        left={[2, 4, 8]}
        w="full"
        h="full"
        boxShadow="-8px 12px 10px rgba(0, 0, 0,0.25)"
        variants={item}
      >
        <ImageLazyload image={LandingPages2} />
      </MotionBox>
      <MotionBox
        pos="absolute"
        zIndex={2}
        top={40}
        left={[4, 8, 16]}
        w="full"
        h="full"
        boxShadow="-8px 12px 10px rgba(0, 0, 0,0.25)"
        variants={item}
      >
        <ImageLazyload image={LandingPages3} />
      </MotionBox>
    </>
  );

  const Components = (
    <>
      <MotionBox pos="relative" zIndex={0} variants={item}>
        <Image mx="auto" src={ComponentsCircle as string} />
      </MotionBox>
      <MotionBox
        pos="absolute"
        zIndex={2}
        top={40}
        // left={[4, 8, 20]}
        w="full"
        h="full"
        variants={item}
      >
        <Image mx="auto" src={RobustLibrariesLightSVG as string} />
      </MotionBox>
      <MotionBox
        pos="absolute"
        zIndex={3}
        left={"18.41%"}
        right={"73.63%"}
        top={"11.09%"}
        bottom={"77.64%"}
        variants={item}
      >
        <Circle size={16} bg="teal.500">
          <Icon as={SiChakraui} w={8} h={8} />
        </Circle>
      </MotionBox>
      <MotionBox
        pos="absolute"
        zIndex={4}
        left={"28.36%"}
        right={"63.68%"}
        top={"51.23%"}
        bottom={"37.5%"}
        variants={item}
      >
        <Circle size={16} bg="green.400">
          <Icon as={SiReact} w={8} h={8} />
        </Circle>
      </MotionBox>
      <MotionBox
        pos="absolute"
        zIndex={5}
        left={"75.5%"}
        right={"16.54%"}
        top={"53.52%"}
        bottom={"35.21%"}
        variants={item}
      >
        <Circle size={16} bg="amber.600">
          <Icon as={SiTypescript} w={8} h={8} />
        </Circle>
      </MotionBox>
      <MotionBox
        pos="absolute"
        zIndex={6}
        left={"63.56%"}
        right={"28.48%"}
        top={"19.54%"}
        bottom={"69.19%"}
        variants={item}
      >
        <Circle size={16} bg="deepPurple.700">
          <Icon as={SiVercel} w={8} h={8} />
        </Circle>
      </MotionBox>
      <MotionBox
        pos="absolute"
        zIndex={6}
        left={"40.92%"}
        right={"51.12%"}
        top={"80.63%"}
        bottom={"8.1%"}
        variants={item}
      >
        <Circle size={16} bg="cyan.600">
          <Icon as={SiNextdotjs} w={8} h={8} />
        </Circle>
      </MotionBox>
    </>
  );

  const Blocks = (
    <>
      <MotionBox pos="relative" zIndex={0} variants={item}>
        <Image mx="auto" src={BlockMediaBlobSVG as string} />
      </MotionBox>
      <MotionBox
        pos="absolute"
        zIndex={1}
        w="full"
        h="full"
        left={"12.69%"}
        right={"12.69%"}
        top={"3.17%"}
        bottom={"3.17%"}
        variants={item}
      >
        <Image src={BlockMediaConfetiSVG as string} />
      </MotionBox>
      <MotionBox
        pos="absolute"
        zIndex={2}
        w="full"
        h="full"
        left={"14.8%"}
        right={"49.13%"}
        top={"15.67%"}
        bottom={"69.89%"}
        variants={item}
      >
        <Image src={BlockMediaBlock1SVG as string} />
      </MotionBox>
      <MotionBox
        pos="absolute"
        zIndex={3}
        w="full"
        h="full"
        left={"18.53%"}
        right={"45.4%"}
        top={"32.22%"}
        bottom={"53.35%"}
        variants={item}
      >
        <Image src={BlockMediaBlock2SVG as string} />
      </MotionBox>
      <MotionBox
        pos="absolute"
        zIndex={3}
        w="full"
        h="full"
        left={"15.55%"}
        right={"48.38%"}
        top={"48.77%"}
        bottom={"14.26%"}
        variants={item}
      >
        <Image src={BlockMediaBlock3SVG as string} />
      </MotionBox>
      <MotionBox
        pos="absolute"
        display={["none", "inline", "inline"]}
        zIndex={3}
        w="full"
        h="full"
        left={"60.45%"}
        right={"14.68%"}
        top={"18.31%"}
        bottom={"39.44%"}
        variants={item}
      >
        <Image src={BlockMediaBlock4SVG as string} />
      </MotionBox>
      <MotionBox
        pos="absolute"
        display={["none", "inline", "inline"]}
        zIndex={3}
        w="full"
        h="full"
        left={"55.97%"}
        right={"19.15%"}
        top={"62.68%"}
        bottom={"10.04%"}
        variants={item}
      >
        <Image src={BlockMediaBlock5SVG as string} />
      </MotionBox>
    </>
  );

  const slides = [TemplateOverview, LandingPages, Components, Blocks];

  return (
    <Grid gap={10} templateColumns={["1fr", "1fr", "1fr 2fr"]}>
      <Box>
        <Subtitle mb={4}>Template features</Subtitle>
        <BlockTitle fontSize="4xl" mb={4}>
          Mercury's Capabilities
        </BlockTitle>
        <Lead mb={10} color="whiteAlpha.800" fontSize="xl" fontWeight={300}>
          Leave the repetitive stuff to us so you can do more of the work you do
          best.
        </Lead>
        <AccordionCarousel items={items} onChange={setActive} />
      </Box>
      <AnimatePresence exitBeforeEnter>
        <MotionBox
          key={`animation-${active}`}
          // bg={`${items[active].colorScheme}.500`}
          variants={container}
          initial="initial"
          animate="animate"
          exit="exit"
          pos="relative"
        >
          {slides[active] ? slides[active] : items[active].title}
        </MotionBox>
      </AnimatePresence>
    </Grid>
  );
});

const AccordionCarousel: React.FC<{
  duration?: number;
  items: { title: string; body: string; colorScheme: string }[];
  onChange: (index: number) => void;
}> = memo(({ duration = 5000, items = [], onChange }) => {
  const [active, setActive] = useState(0);
  const [ref, inView] = useInView();
  const controls = useAnimation();

  useEffect(() => {
    if (inView) controls.start("animate");
    if (!inView) controls.start("stop");
  }, [active, inView]);

  useEffect(() => {
    onChange(active);
  }, [active]);

  const completed = (e: string): void => {
    const nextIndex = (active + 1) % items.length;
    if (e === "animate") setActive(nextIndex);
  };

  const variants = {
    animate: {
      width: "100%",
      transition: { ease: "linear", duration: duration / 1000 },
    },
    stop: { width: "0%" },
    init: { display: "none", width: "0%" },
  };

  // const hoverHandle = (e) => console.log("hover hande", e.type, e.target, e);
  return (
    <Accordion
      ref={ref}
      defaultIndex={0}
      index={active}
      onChange={(index) => setActive(index as number)}
    >
      {items.map((item, idx) => (
        <AccordionItem
          key={idx}
          borderBottomColor="whiteAlpha.500"
          borderTopColor="whiteAlpha.500"
          // onMouseEnter={hoverHandle}
          // onMouseLeave={hoverHandle}
        >
          {({ isExpanded }) => (
            <>
              {isExpanded && (
                <MotionBox
                  height={0.5}
                  width="0%"
                  bg={`${item.colorScheme}.500`}
                  rounded="full"
                  variants={variants}
                  // animate={idx === active ? "animate" : "init"}
                  animate={controls}
                  initial="stop"
                  onAnimationComplete={completed}
                />
              )}
              <AccordionButton>
                <Box py={2} flex="1" textAlign="left">
                  <Heading as="h3" fontSize="lg" fontWeight={500}>
                    {item.title}
                  </Heading>
                </Box>
                <AccordionIcon />
              </AccordionButton>
              <AccordionPanel pb={4}>{item.body}</AccordionPanel>
            </>
          )}
        </AccordionItem>
      ))}
    </Accordion>
  );
});

const WhyMercury: React.FC = memo(() => {
  const items = [
    {
      title: "Next.js",
      body: "React Framework for Production",
      colorScheme: "pink",
      icon: SiNextdotjs,
    },
    {
      title: "Chakra UI",
      body: "Modular and Accessible Component",
      colorScheme: "teal",
      icon: SiChakraui,
    },
    {
      title: "TypeScript",
      body: "Integrated TypeScript experience",
      colorScheme: "yellow",
      icon: SiTypescript,
    },
    {
      title: "SSG and SSR",
      body: "Pre-render pages at build time (SSG)",
      colorScheme: "purple",
      icon: BsTerminal,
    },
  ];
  return (
    <SimpleGrid
      width="full"
      columns={[1, 2, 2, 4]}
      spacingY={[14]}
      spacingX={[5, 5, 10, 10]}
    >
      {items.map((item, idx) => (
        <Box
          pos="relative"
          key={idx}
          bg={useColorModeValue(
            `${item.colorScheme}.50`,
            `${item.colorScheme}.900`,
          )}
          p={6}
          rounded="xl"
        >
          <Circle
            mt={-16}
            mb={6}
            bg={useColorModeValue(
              `${item.colorScheme}.300`,
              `${item.colorScheme}.600`,
            )}
            size={20}
          >
            <Icon
              color={useColorModeValue(
                `${item.colorScheme}.700`,
                `${item.colorScheme}.300`,
              )}
              fontSize="3xl"
              as={item.icon}
            />
          </Circle>
          <Title fontSize="xl">{item.title}</Title>
          <Text>{item.body}</Text>
        </Box>
      ))}
    </SimpleGrid>
  );
});

SaaSPage.PageLayout = ({ children }: { children: React.ReactNode }) => (
  <Layout
    footer={
      <FooterLargeNavigationLogoLeft
        pt={[10, 10, 32]}
        pb={[10, 10, 20]}
        bg="blackAlpha.900"
        color="whiteAlpha.800"
      />
    }
  >
    {children}
  </Layout>
);

const DotCircle: React.FC<ChakraProps> = memo((props) => {
  const grayDots =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAMAAABHPGVmAAAAY1BMVEVHcEwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIAbxiAAAAIXRSTlMAIiYHGA4QHAYkHwIpGg8SJwEFAwoLFAQZFQ0IERcdJSCXUnc2AAABFUlEQVR4AezWBW7EMABE0XXIzMt8/1P2lysuuJyR9EbKiENe/KWIrsehG3HqJCptLNU1GQSyuB69CxidwT4JS7kmQ4d0n7H0FWuvMGOzocc3Zs7gC05+iSu/xs12lynfZBi+7ukaQ8VlUNiHFdZxn6nQZBhxzhszxYqr2OMh7rEeQ6Zik2H6uqdLGoVrs8K9OWE5bzNlmgwS57wxqs+4efgJlBd/h3bDQqcet2nEYzpjf7laKjUZNPJICIU7sccgtqiu0lKiycCDTKy9Ndv8JJdaDm/JnK/7ds2Huxt260AAAAAAAMj/tREqzN3czd3czd3czd3czd3czd3cNXdzN3dz19zN3dzN3dzN3dzNndFj6dUwAgCNSIECCYU8DAAAAABJRU5ErkJggg==";
  const whiteDots =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAMAAABHPGVmAAAAY1BMVEVHcEz///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////80LMUcAAAAIXRSTlMAIiYHGA4QHAYkHwIpGg8SJwEFAwoLFAQZFQ0IERcdJSCXUnc2AAABFUlEQVR4AezWBW7EMABE0XXIzMt8/1P2lysuuJyR9EbKiENe/KWIrsehG3HqJCptLNU1GQSyuB69CxidwT4JS7kmQ4d0n7H0FWuvMGOzocc3Zs7gC05+iSu/xs12lynfZBi+7ukaQ8VlUNiHFdZxn6nQZBhxzhszxYqr2OMh7rEeQ6Zik2H6uqdLGoVrs8K9OWE5bzNlmgwS57wxqs+4efgJlBd/h3bDQqcet2nEYzpjf7laKjUZNPJICIU7sccgtqiu0lKiycCDTKy9Ndv8JJdaDm/JnK/7ds2Huxt260AAAAAAAMj/tREqzN3czd3czd3czd3czd3czd3cNXdzN3dz19zN3dzN3dzN3dzNndFj6dUwAgCNSIECCYU8DAAAAABJRU5ErkJggg==";
  return (
    <chakra.svg
      xmlns="http://www.w3.org/2000/svg"
      // width="429"
      // height="429"
      width="full"
      height="full"
      viewBox="0 0 429 429"
      fill="none"
      {...props}
    >
      <mask
        id="mask0"
        mask-type="alpha"
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="429"
        height="429"
      >
        <circle cx="214.5" cy="214.5" r="214.5" fill="#C4C4C4" />
      </mask>
      <g mask="url(#mask0)">
        <rect
          x="-33.9434"
          y="-49.3792"
          width="624"
          height="624"
          fill="url(#pattern0)"
          fillOpacity="1"
        />
      </g>
      <defs>
        <pattern
          id="pattern0"
          patternContentUnits="objectBoundingBox"
          width="0.068"
          height="0.068"
        >
          <use xlinkHref="#image0" transform="scale(0.000677976)" />
        </pattern>
        <image
          id="image0"
          width="100"
          height="100"
          xlinkHref={useColorModeValue(grayDots, whiteDots)}
        />
      </defs>
    </chakra.svg>
  );
});

export default SaaSPage;
