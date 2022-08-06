import {
  AiFillCheckCircle,
  AiOutlineCloudServer,
  BiRightArrowAlt,
  BsPalette,
  CgSupport,
  GoPackage,
  IoBalloonOutline,
  IoGitNetwork,
  MdOutlineDynamicForm,
  MdOutlineNetworkCheck,
  MdOutlineUpdate,
  MdPriceCheck,
  MdSpeed,
  SiChakraui,
  SiGatsby,
  SiMaterialdesignicons,
  SiNetlify,
  SiNextdotjs,
  SiReact,
  SiTypescript,
  SiVercel,
} from "@react-icons";

import React, { memo, useState, useEffect, useContext } from "react";

import { IconType } from "react-icons";

import { NextSeo } from "next-seo";

import { ChevronDownIcon } from "@chakra-ui/icons";
import {
  AspectRatio,
  Box,
  Button,
  chakra,
  ChakraProps,
  Collapse,
  Container,
  Flex,
  Heading,
  HStack,
  Icon,
  List,
  ListIcon,
  ListItem,
  Stack,
  Text,
  ThemingProps,
  useColorModeValue,
  useDisclosure,
  useToken,
  VStack,
} from "@chakra-ui/react";

import { ThemeColorContext } from "@definitions/context/theme";
import { __DEV__ } from "@definitions/utils";

import FadeUp, {
  FadeUpVStack,
  FadeUpHStack,
  FadeUpStack,
  FadeUpGrid,
} from "@components/animations/fade-up";
import Highlight from "@components/highlight";
import ImageLazyload from "@components/image-lazyload";

import introDark from "@assets/images/demo/demo-web-app-yellow-dark.png?resize&img";
import introLight from "@assets/images/demo/demo-web-app-yellow-light.png?resize&img";
import jamstack from "@assets/images/demo/map-cdn.png?resize&img";
import WebAppCodeDark from "@assets/images/demo/web-app-codes-dark.png?resize&img";
import WebAppCodeLight from "@assets/images/demo/web-app-codes-light.png?resize&img";
import WebAppReusableComponents from "@assets/images/demo/web-app-reusable-components.png?resize&img";

const variants = {
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 150,
      damping: 35,
      mass: 1.75,
      duration: 0.35,
      staggerChildren: 0.1,
    },
  },
  hidden: { opacity: 0, y: 50 },
};

const childVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 150,
      damping: 35,
      mass: 1.75,
      duration: 0.35,
      staggerChildren: 0.1,
    },
  },
};

/**
 * Page heading style
 */
const headingStyle = {
  lineHeight: "1",
  fontSize: ["4xl", "5xl", "7xl"],
  fontWeight: "800",
};

const textLeadStyle = {
  fontSize: ["xl", "2xl", "3xl"],
};

const spacingL1 = [10, 20, 40];
const spacingL2 = [5, 10, 20];

const WebAppPage: React.FC = () => {
  const theme = useContext(ThemeColorContext);
  const color = theme.colorScheme; // global default primary theme color
  return (
    <>
      <NextSeo title="Web App" description="Mercury Web App Example Page" />
      <chakra.main
        pos="relative"
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
        <SVGBg
          pos="absolute"
          top={"49%"}
          left={"-50%"}
          width="unset"
          height="unset"
          color={useColorModeValue("gray.50", "gray.900")}
          zIndex={0}
        />
        <VStack pos="relative" zIndex={2} spacing={spacingL1} mb={spacingL1}>
          <Hero colorScheme={color} />
          <Code />
          <Introduction colorScheme={color} />
          <Features />
          <ReusableComponent />
          <Pricing colorScheme={color} />
          <WhatYouHave colorScheme={color} />
          <CTA colorScheme={color} />
        </VStack>
      </chakra.main>
    </>
  );
};

/* -------------------------------------------------------------------------- */
/*                                 PAGE BLOCKS                                */
/* -------------------------------------------------------------------------- */

const WebAppLogo = memo(() => {
  const color1 = useToken("colors", "cyan.300");
  const color2 = useToken("colors", "amber.600");
  const color3 = useToken("colors", "orange.900");
  return (
    <chakra.svg
      width="73"
      height="49"
      viewBox="0 0 73 49"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M46.8676 24C46.8676 36.4264 36.794 46.5 24.3676 46.5C11.9413 46.5 1.86765 36.4264 1.86765 24C1.86765 11.5736 11.9413 1.5 24.3676 1.5C36.794 1.5 46.8676 11.5736 46.8676 24Z"
        // fill="#68DBFF"
        fill={color1}
      />
      <path
        d="M71.1324 24C71.1324 36.4264 61.1574 46.5 48.8529 46.5C36.5484 46.5 26.5735 36.4264 26.5735 24C26.5735 11.5736 36.5484 1.5 48.8529 1.5C61.1574 1.5 71.1324 11.5736 71.1324 24Z"
        // fill="#FF7917"
        fill={color2}
      />
      <path
        d="M36.6705 42.8416C42.8109 38.8239 46.8676 31.8858 46.8676 24C46.8676 16.1144 42.8109 9.17614 36.6705 5.15854C30.5904 9.17614 26.5735 16.1144 26.5735 24C26.5735 31.8858 30.5904 38.8239 36.6705 42.8416Z"
        // fill="#5D2C02"
        fill={color3}
      />
    </chakra.svg>
  );
});

if (__DEV__) {
  WebAppLogo.displayName = "WebAppLogo";
}

const Hero: React.FC<ChakraProps & ThemingProps> = memo(
  ({ colorScheme, ...rest }) => {
    return (
      <Flex
        height="full"
        maxHeight={900}
        minHeight={"80vh"}
        align="end"
        pt={[28]}
        {...rest}
      >
        <Container textAlign="center" maxW="container.md">
          <FadeUpVStack variants={variants} childVariants={childVariants}>
            <WebAppLogo />
            <Heading {...headingStyle}>
              Start building awesome{" "}
              <Highlight strokeWidth={5} strokeColor={`${colorScheme}.400`}>
                websites
              </Highlight>{" "}
              with Mercury
            </Heading>
            <Text {...textLeadStyle}>
              Now you can share rich content with your target audience by using
              the finely designed pages.
            </Text>
            <Stack direction={["column", "row", "row"]}>
              <Button size="lg" colorScheme={colorScheme}>
                Purchase Mercury
              </Button>
              <Button size="lg" colorScheme={"gray"}>
                Explore all Features
              </Button>
            </Stack>
          </FadeUpVStack>
        </Container>
      </Flex>
    );
  },
);

if (__DEV__) {
  Hero.displayName = "Hero";
}

const Code: React.FC<ChakraProps & ThemingProps> = memo((props) => {
  const imageSource = useColorModeValue(WebAppCodeLight, WebAppCodeDark);
  return (
    <Box width="full" py={10} {...props}>
      <Container maxW="container.lg">
        <FadeUp variants={variants} childVariants={childVariants}>
          <ImageLazyload image={imageSource} alt="WebApp Codes" />
        </FadeUp>
      </Container>
    </Box>
  );
});

if (__DEV__) {
  Code.displayName = "Code";
}

const IntroItem: React.FC<
  ChakraProps &
    ThemingProps & {
      isActive?: boolean;
      title: string;
      body: string;
      onClick: () => void;
    }
> = memo(({ colorScheme, isActive = false, title, body, onClick }) => {
  const { isOpen, onOpen, onClose } = useDisclosure({
    defaultIsOpen: isActive,
  });
  // const { isOpen, onToggle } = useDisclosure();
  const accentColor = useColorModeValue(
    `${colorScheme}.400`,
    `${colorScheme}.500`,
  );

  useEffect(() => {
    if (isActive) {
      onOpen();
    } else {
      onClose();
    }
  }, [isActive]);

  return (
    <HStack onClick={onClick} w="full" align="start" cursor={"pointer"}>
      <ChevronDownIcon
        w={6}
        h={6}
        color={isOpen ? accentColor : null}
        transition="all 250ms linear"
        transform={isOpen ? "rotate(0)" : "rotate(-90deg)"}
      />
      <Box>
        <Text
          color={isOpen ? accentColor : null}
          transition="all 250ms linear"
          mb={2}
          fontWeight={600}
        >
          {title}
        </Text>
        <Collapse in={isOpen} animateOpacity>
          <Text>{body}</Text>
        </Collapse>
      </Box>
    </HStack>
  );
});

if (__DEV__) {
  IntroItem.displayName = "IntroItem";
}

const Introduction: React.FC<ChakraProps & ThemingProps> = memo(
  ({ colorScheme }) => {
    const [active, setActive] = useState(0);
    const items = [
      {
        title: "Customizable theme colors",
        body: "Customize your website by easily changing the default template colors.",
      },
      {
        title: "Dark and light modes",
        body: " Your web page will look flawless under all conditions with dark & light modes",
      },
      {
        title: "Jamstack deployment",
        body: "Publish your page without hosting fees with jamstack deployment.",
      },
    ];

    const dark =
      active === 1
        ? {
            color: "whiteAlpha.800",
            bg: "gray.800",
          }
        : null;

    return (
      <Box w="full">
        <Container mb={spacingL2} textAlign="center" maxW="container.md">
          <FadeUpVStack variants={variants} childVariants={childVariants}>
            <Heading {...headingStyle}>
              Lightweight and Blazing fast pages
            </Heading>
            <Text {...textLeadStyle}>
              It's easy to create fast and lightweight pages with rich UI
              components with color options and dark theme.
            </Text>
          </FadeUpVStack>
        </Container>
        <Box transition="all 250ms linear" overflow="hidden" {...dark}>
          <Container maxW="container.xl">
            <Stack
              align="center"
              direction={["column-reverse", "column-reverse", "row"]}
              spacing={10}
            >
              <FadeUpVStack
                align="start"
                w="full"
                flex="1"
                spacing={5}
                variants={variants}
                childVariants={childVariants}
              >
                {items.map((item, idx) => (
                  <IntroItem
                    key={idx}
                    isActive={active === idx ? true : false}
                    colorScheme={colorScheme}
                    onClick={() => setActive(idx)}
                    {...item}
                  />
                ))}
              </FadeUpVStack>

              <Flex direction={"column"} w="full" flex="2">
                {active == 0 && (
                  <FadeUp
                    flex="1"
                    variants={variants}
                    childVariants={childVariants}
                  >
                    <AspectRatio flex="1" ratio={1600 / 918}>
                      <video
                        poster={introLight.src}
                        autoPlay
                        loop
                        muted
                        playsInline
                      >
                        <source
                          src="/videos/template-colors-light.webm"
                          type="video/webm"
                        />
                        <source
                          src="/videos/template-colors-light.mp4"
                          type="video/mp4"
                        />
                      </video>
                    </AspectRatio>
                  </FadeUp>
                )}
                {active == 1 && (
                  <FadeUp
                    flex="1"
                    variants={variants}
                    childVariants={childVariants}
                  >
                    <AspectRatio flex="1" ratio={1600 / 918}>
                      <video
                        poster={introDark.src}
                        autoPlay
                        loop
                        muted
                        playsInline
                      >
                        <source
                          src="/videos/template-colors-dark.webm"
                          type="video/webm"
                        />
                        <source
                          src="/videos/template-colors-dark.mp4"
                          type="video/mp4"
                        />
                      </video>
                    </AspectRatio>
                  </FadeUp>
                )}
                {active == 2 && (
                  <Box pos="relative">
                    <FadeUp
                      flex="1"
                      variants={variants}
                      childVariants={childVariants}
                    >
                      <ImageLazyload image={jamstack} />
                    </FadeUp>
                    <Flex width="full" pos="absolute" bottom={0} zIndex={2}>
                      <FadeUpHStack
                        spacing={spacingL2}
                        flex="1"
                        justifyContent="center"
                        variants={variants}
                        childVariants={childVariants}
                      >
                        <Box>
                          <Icon
                            color="gray.400"
                            as={SiGatsby}
                            width={12}
                            height={12}
                          />
                        </Box>
                        <Box>
                          <Icon
                            color="gray.400"
                            as={SiNetlify}
                            width={12}
                            height={12}
                          />
                        </Box>
                        <Box>
                          <Icon
                            color="gray.400"
                            as={SiVercel}
                            width={12}
                            height={12}
                          />
                        </Box>
                        <Box>
                          <Icon
                            color="gray.400"
                            as={SiNextdotjs}
                            width={12}
                            height={12}
                          />
                        </Box>
                      </FadeUpHStack>
                    </Flex>
                  </Box>
                )}
              </Flex>
            </Stack>
          </Container>
        </Box>
      </Box>
    );
  },
);

if (__DEV__) {
  Introduction.displayName = "Introduction";
}

type T_FeatureItems = {
  icon: IconType;
  color?: string;
  title: string;
  body: string;
};

const Features = memo(() => {
  const group = 3;
  const items = [
    {
      icon: SiChakraui,
      color: "teal.300",
      title: "Chakra UI",
      body: "Cum ceteris in veneratione tui montes, nascetur mus. Magna pars studiorum, prodita quaerimus.",
    },
    {
      icon: SiReact,
      color: "currentColor",
      title: "NextJS & React",
      body: "Cum ceteris in veneratione tui montes, nascetur mus. Magna pars studiorum, prodita quaerimus.",
    },
    {
      icon: SiTypescript,
      color: "lightBlue.400",
      title: "TypeScript",
      body: "Cum ceteris in veneratione tui montes, nascetur mus. Magna pars studiorum, prodita quaerimus.",
    },
    {
      icon: SiMaterialdesignicons,
      color: "deepBlue.400",
      title: "SVG Icons",
      body: "Cum ceteris in veneratione tui montes, nascetur mus. Magna pars studiorum, prodita quaerimus.",
    },
    {
      icon: GoPackage,
      color: "orange.400",
      title: "Powerful Tools",
      body: "Cum ceteris in veneratione tui montes, nascetur mus. Magna pars studiorum, prodita quaerimus.",
    },
    {
      icon: IoGitNetwork,
      color: "pink.500",
      title: "Jamstack Deployment",
      body: "Cum ceteris in veneratione tui montes, nascetur mus. Magna pars studiorum, prodita quaerimus.",
    },
    {
      icon: IoBalloonOutline,
      color: "amber.500",
      title: "Lightweight",
      body: "Cum ceteris in veneratione tui montes, nascetur mus. Magna pars studiorum, prodita quaerimus.",
    },
    {
      icon: MdSpeed,
      color: "red.500",
      title: "Blazing Fast",
      body: "Cum ceteris in veneratione tui montes, nascetur mus. Magna pars studiorum, prodita quaerimus.",
    },
    {
      icon: MdPriceCheck,
      color: "green.400",
      title: "Cost Efficient",
      body: "Cum ceteris in veneratione tui montes, nascetur mus. Magna pars studiorum, prodita quaerimus.",
    },
  ].reduce(
    (r: T_FeatureItems[][], e: T_FeatureItems, i) =>
      (i % group ? r[r.length - 1].push(e) : r.push([e])) && r,
    [],
  );

  return (
    <Box w="full">
      <Container mb={spacingL2} textAlign="center" maxW="container.md">
        <FadeUpVStack variants={variants} childVariants={childVariants}>
          <Heading {...headingStyle}>
            Make it impressive with design details
          </Heading>
          <Text {...textLeadStyle}>
            Build a professional and impressive website with carefully designed
            UI components, blocks and pre-built pages.
          </Text>
        </FadeUpVStack>
      </Container>
      <Container maxW="container.xl">
        {items.map((group, gidx) => (
          <FadeUpGrid
            key={gidx}
            spacing={5}
            columns={[1, 2, 3]}
            variants={variants}
            childVariants={childVariants}
            mb={5}
          >
            {group.map((item, idx) => (
              <Box
                key={idx}
                pos="relative"
                p={10}
                bg={useColorModeValue("gray.100", "gray.900")}
                rounded="xl"
                overflow="hidden"
              >
                <SVGBg
                  pos="absolute"
                  right={100 + 10 * idx + gidx}
                  // top={-20 * idx + gidx}
                  transform="scale(1.8)"
                />
                <Box pos="relative" zIndex={1}>
                  <Icon
                    color={item.color}
                    w={10}
                    h={10}
                    as={item.icon}
                    mb={6}
                  />
                  <Heading as="h4" fontSize="xl" mb={2}>
                    {item.title}
                  </Heading>
                  <Text>{item.body}</Text>
                </Box>
              </Box>
            ))}
          </FadeUpGrid>
        ))}
      </Container>
    </Box>
  );
});

if (__DEV__) {
  Features.displayName = "Features";
}

/**
 * Reusable Component
 */
const ReusableComponent: React.FC<ChakraProps & ThemingProps> = memo(
  (props) => {
    return (
      <Box w="full" {...props}>
        <Container textAlign="center" maxW="container.lg">
          <FadeUpVStack variants={variants} childVariants={childVariants}>
            <Heading {...headingStyle} lineHeight="1.2">
              Create your pages quickly with reusable component and block
              structure
            </Heading>
            <Text {...textLeadStyle}>
              Pre-prepared components and blocks are designed in a customizable
              and reusable structure. In this way, you can easily use the same
              component on different pages by customizing it.
            </Text>
          </FadeUpVStack>
        </Container>
        <Box width="full" py={10} {...props}>
          <Container maxW="container.xl">
            <FadeUp variants={variants} childVariants={childVariants}>
              <ImageLazyload
                image={WebAppReusableComponents}
                alt="WebApp Reusable Components"
              />
            </FadeUp>
          </Container>
        </Box>
      </Box>
    );
  },
);

if (__DEV__) {
  ReusableComponent.displayName = "ReusableComponent";
}

/**
 * Pricing Block
 */
const Pricing: React.FC<ChakraProps & ThemingProps> = memo(
  ({ colorScheme, ...rest }) => {
    const features = [
      "Unlimited Workers",
      "T1 Hosting Included",
      "1 Domain Included",
      "Free HTTPS Certificate",
      "Unlimited file uploads",
      "Unlimited Pages & Blocks",
      "Collaborative workspace",
    ];
    const plans = [
      {
        colorScheme: colorScheme,
        title: "Year Plan",
        currency: "$",
        price: 10,
        suffix: "/month",
        body: "Billed annually, $120 per year (save $60).",
      },
      {
        colorScheme: "green",
        title: "Monthly Plan",
        currency: "$",
        price: 15,
        suffix: "/month",
        body: "Billed monthly. $180 per year.",
      },
    ];
    return (
      <Box w="full" {...rest}>
        <Container maxW="container.xl">
          <Stack
            direction={["column", "column", "row"]}
            align="center"
            spacing={spacingL2}
            width="full"
          >
            <Box width="full" flex="1">
              <FadeUpVStack
                variants={variants}
                childVariants={childVariants}
                align="start"
                spacing={4}
              >
                <Heading {...headingStyle}>Pricing Plans!</Heading>
                <Text fontSize="xl" maxW={["full", "full", 480]}>
                  We have prepared a simple, understandable and affordable price
                  list. Get started now by choosing the right plan for you and
                  your team.
                </Text>
                <List fontSize="lg" spacing={3}>
                  {features.map((item, idx) => (
                    <ListItem key={idx}>
                      <ListIcon
                        fontSize="2xl"
                        as={AiFillCheckCircle}
                        color="green.500"
                      />

                      {item}
                    </ListItem>
                  ))}
                </List>
                <Stack
                  direction={["column", "row", "row"]}
                  align="center"
                  spacing={[5]}
                >
                  <Button px={4} colorScheme={colorScheme}>
                    Start a Free Trial
                  </Button>
                  <Text>14 days free. No credit card needed.</Text>
                </Stack>
              </FadeUpVStack>
            </Box>

            <FadeUpVStack
              variants={variants}
              childVariants={childVariants}
              width="full"
              align="strech"
              flex="1"
              spacing={[10]}
            >
              {plans.map((plan, idx) => (
                <Box
                  key={idx}
                  p={10}
                  rounded="xl"
                  bg={useColorModeValue(`gray.100`, `gray.900`)}
                  width="full"
                  pos="relative"
                  overflow="hidden"
                >
                  <Stack pos="relative" zIndex={1} spacing={[10]} width="full">
                    <Flex
                      align="center"
                      justify="space-between"
                      direction={["column-reverse", "row", "row"]}
                    >
                      <Heading as="h4" fontSize="2xl">
                        {plan.title}
                      </Heading>
                      <Button colorScheme={plan.colorScheme} size="lg">
                        Choose
                      </Button>
                    </Flex>
                    <Stack mt="auto">
                      <Flex align="end">
                        <Heading
                          as="h4"
                          fontSize="7xl"
                          lineHeight="1"
                          fontWeight="800"
                        >
                          {plan.currency}
                          {plan.price}
                        </Heading>
                        <Text fontSize="xl">{plan.suffix}</Text>
                      </Flex>
                      <Text color={useColorModeValue(`gray.500`, `gray.500`)}>
                        {plan.body}
                      </Text>
                    </Stack>
                  </Stack>
                  <SVGBg
                    pos="absolute"
                    right={100 + 10 * idx}
                    top="28%"
                    bottom="72%"
                    transform="scale(1.9)"
                    color={useColorModeValue("gray.300", "gray.800")}
                    // color={useColorModeValue(
                    //   `${plan.colorScheme}.200`,
                    //   `${plan.colorScheme}.900`,
                    // )}
                    zIndex={0}
                  />
                </Box>
              ))}
            </FadeUpVStack>
          </Stack>
        </Container>
      </Box>
    );
  },
);

if (__DEV__) {
  Pricing.displayName = "Pricing";
}

/**
 * What you have block
 */
const WhatYouHave: React.FC<ChakraProps & ThemingProps> = memo(
  ({ colorScheme, ...rest }) => {
    const group = 3;
    const items = [
      {
        icon: CgSupport,
        color: "red.400",
        title: "24/7 Support",
        body: "All our customers can get help and find answers to questions as soon as they come up—24/7 and in real-time.",
      },
      {
        icon: MdOutlineUpdate,
        color: "green.400",
        title: "Lifetime Upgrade",
        body: "The Mercury Lifetime Updater program is a free application which is useful for those who own Mercury template.",
      },
      {
        icon: BsPalette,
        color: "orange.400",
        title: "Customization",
        body: "It is easily customizable to take advantage of Mercury due to the feature that comes with the Chakra UI.",
      },
      {
        icon: AiOutlineCloudServer,
        color: "pink.400",
        title: "Jamstack Deployment",
        body: "We help you to host your site for free with static output and Jamstack deployment without any hosting cost.",
      },
      {
        icon: MdOutlineDynamicForm,
        color: "cyan.400",
        title: "Dynamic Contents",
        body: "You can enrich the website by making it dynamic with Headless CMS technologies and integration.",
      },
      {
        icon: MdOutlineNetworkCheck,
        color: "purple.400",
        title: "CDN Technology",
        body: "Jamstack democratizes the use of CDN technology to deliver web content from end points as close to users as possible.",
      },
    ].reduce(
      (r: T_FeatureItems[][], e: T_FeatureItems, i) =>
        (i % group ? r[r.length - 1].push(e) : r.push([e])) && r,
      [],
    );
    return (
      <Box w="full" {...rest}>
        <Container mb={spacingL2} textAlign="center" maxW="container.lg">
          <FadeUpVStack variants={variants} childVariants={childVariants}>
            <Heading {...headingStyle}>
              The premium services you have with Mercury
            </Heading>
            <Text maxW="container.md" {...textLeadStyle}>
              Our goal is to provide tools to increase your creativity, so you
              can focus on your project and leave the rest to us.
            </Text>
          </FadeUpVStack>
        </Container>
        <Container maxW="container.xl">
          {items.map((group, gidx) => (
            <FadeUpGrid
              key={gidx}
              spacing={5}
              columns={[1, 2, 3]}
              variants={variants}
              childVariants={childVariants}
              mb={5}
            >
              {group.map((item, idx) => (
                <Box
                  key={idx}
                  pos="relative"
                  p={10}
                  bg={useColorModeValue("gray.100", "gray.900")}
                  rounded="xl"
                  overflow="hidden"
                >
                  <SVGBg
                    pos="absolute"
                    right={100 + 10 * idx + gidx}
                    // top={-20 * idx + gidx}
                    transform="scale(1.8)"
                  />
                  <Box pos="relative" zIndex={1}>
                    <Icon
                      color={item.color}
                      w={10}
                      h={10}
                      as={item.icon}
                      mb={6}
                    />
                    <Heading as="h4" fontSize="xl" mb={2}>
                      {item.title}
                    </Heading>
                    <Text>{item.body}</Text>
                  </Box>
                </Box>
              ))}
            </FadeUpGrid>
          ))}
          <Box mt={10}>
            <FadeUp
              variants={variants}
              childVariants={childVariants}
              display="flex"
              alignItems="center"
              justifyContent="center"
              flexDirection={["column", "row", "row", "row"]}
            >
              <Text fontSize="lg" fontWeight={500} mr={4}>
                Don't miss this opportunity
              </Text>
              <Button
                colorScheme={colorScheme}
                rightIcon={<Icon w={5} h={5} as={BiRightArrowAlt} />}
              >
                Get started
              </Button>
            </FadeUp>
          </Box>
        </Container>
      </Box>
    );
  },
);

if (__DEV__) {
  WhatYouHave.displayName = "WhatYouHave";
}

/**
 * CTA block
 */
const CTA: React.FC<ChakraProps & ThemingProps> = memo(({ colorScheme }) => {
  const lightMode = `${colorScheme}.50`;
  const darkMode = `${colorScheme}.900`;
  const background = useColorModeValue(lightMode, darkMode);
  return (
    <Container maxW="container.xl">
      {/* <FadeUp> */}
      <FadeUp
        p={[10, 10, 14]}
        rounded="xl"
        bg={background}
        variants={variants}
        childVariants={childVariants}
      >
        <Flex
          direction={["column", "column", "row"]}
          align="center"
          width="full"
        >
          <FadeUpVStack
            alignItems={["center", "center", "start"]}
            textAlign={["center", "center", "start"]}
            variants={variants}
            childVariants={childVariants}
            mr={[0, 0, 10, 20]}
            mb={[5, 10, 0, 0]}
          >
            <WebAppLogo />
            <Heading {...headingStyle}>Ready to try Mercury?</Heading>
            <Text {...textLeadStyle} fontSize="xl">
              Millions of developers use Jamstack to ship faster, simplify their
              workflows, and scale effortlessly. Take your place among these
              developers today.
            </Text>
          </FadeUpVStack>

          <FadeUpStack
            direction={["column", "row", "column", "column"]}
            variants={variants}
            childVariants={childVariants}
          >
            <Button isFullWidth colorScheme={colorScheme} size="lg">
              Purchase Now
            </Button>
            <Button
              variant="outline"
              isFullWidth
              colorScheme="currentColor"
              size="lg"
            >
              Exolore All
            </Button>
          </FadeUpStack>
        </Flex>
      </FadeUp>
    </Container>
  );
});

if (__DEV__) {
  CTA.displayName = "CTA";
}

const SVGBg: React.FC<ChakraProps & ThemingProps> = memo(
  ({ color, ...rest }) => {
    const strokeLight = useToken("colors", "gray.200");
    const strokeDark = useToken("colors", "gray.800");
    const stroke = useColorModeValue(strokeLight, strokeDark);
    return (
      <chakra.svg
        // width="592"
        // height="472"
        width="full"
        height="full"
        viewBox="0 0 592 472"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        // preserveAspectRatio="none"
        zIndex={0}
        {...rest}
      >
        <path
          d="M574 216C574 345.787 468.787 451.001 339 451.001C209.214 451.001 104 345.787 104 216C104 86.2133 209.214 -19 339 -19C468.787 -19 574 86.2133 574 216Z"
          strokeWidth="2"
          stroke={color ? useToken("colors", color as string) : stroke}
        />
        <path
          d="M368 292C368 379.813 296.813 451 209 451C121.187 451 50 379.813 50 292C50 204.187 121.187 133 209 133C296.813 133 368 204.187 368 292Z"
          strokeWidth="2"
          stroke={color ? useToken("colors", color as string) : stroke}
        />
      </chakra.svg>
    );
  },
);

if (__DEV__) {
  SVGBg.displayName = "SVGBg";
}

export default WebAppPage;
