import {
  ImQuotesLeft,
  IoMailOutline,
  FiShoppingCart,
  MdAccessibility,
  MdPalette,
  MdGrain,
  IoMoon,
  AiFillThunderbolt,
  IoHelpCircleOutline,
  FaReact,
  FiFileText,
  FiEdit,
  FiBox,
  FiZap,
} from "@react-icons";

import { useContext, memo } from "react";

import { NextSeo } from "next-seo";

import {
  Box,
  Button,
  chakra,
  ThemingProps,
  Circle,
  Container,
  Flex,
  Heading,
  Icon,
  Input,
  Stack,
  Text,
  Tag,
  useColorModeValue,
  useToken,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";

import Logo3 from "@definitions/brands/logo-3";
import Logo4 from "@definitions/brands/logo-4";
import { ThemeColorContext } from "@definitions/context/theme";
import Site from "@definitions/site";
import { __DEV__ } from "@definitions/utils";
import { hexToRGB } from "@definitions/utils/color";

import AccordionFlat from "@components/accordion/accordion-flat";
import FadeUp, {
  FadeUpStack,
  FadeUpGrid,
} from "@components/animations/fade-up";
import Annotation from "@components/annotation";
import { HeroCTAMedia } from "@components/hero/hero-cta-media";
import Highlight from "@components/highlight";
import PlayIcon from "@components/icons/playIcon";
import ImageLazyload from "@components/image-lazyload";
import ImageLazyloadWithoutRatio from "@components/image-lazyload/without-aspect-ratio";
import { PricingSimpleCard } from "@components/pricing/pricing-simple-card";
import TextTyping from "@components/text-typing";

import Avatar3T from "@assets/images/avatar/3m-transparent.png?resize&img";
import Business1Dark from "@assets/images/demo/business-1-dark.png?resize&img";
import Business1 from "@assets/images/demo/business-1.png?resize&img";
import OfficeImage3 from "@assets/images/office-3.jpg?resize&img";

import ClientsLogoBlock from "@blocks/clients-logo";

const variants = {
  visible: {
    transition: {
      ease: "easeOut",
      duration: 0.85,
      staggerChildren: 0.125,
    },
  },
  hidden: {},
};
const childVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "ease",
      ease: "easeOut",
      duration: 0.45,
    },
  },
};

const BusinessPage: React.FC = () => {
  const theme = useContext(ThemeColorContext);
  const color = theme.colorScheme; // global default primary theme color

  // Purchase Mouse Down Handler
  const purchaseMouseDownHandler = (
    event: React.MouseEvent<HTMLButtonElement>,
  ) => {
    if (event.button === 0) window.open(Site.purchase, "_blank");
    if (event.button === 1) window.open(Site.purchase, "_blank");
  };

  // Pricing Button Action
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const pricingButtonAct = (event: React.MouseEvent<HTMLButtonElement>) => {
    // console.log("Event", event.target);
    /* Do the operation here. */
  };

  return (
    <>
      <NextSeo title="Business" description="Mercury Business Demo Page" />
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
        <Container pt={[0, 0, 10]} maxW="container.xl">
          <HeroCTAMedia
            heading={
              <Heading
                lineHeight={1}
                fontWeight={700}
                fontSize={{ base: "4xl", sm: "5xl", lg: "6xl" }}
              >
                <Text d={["inline", "inline", "block"]}>Easily Build</Text>{" "}
                <Text as="span">
                  Your{" "}
                  <TextTyping
                    d="inline-flex"
                    lineHeight={1.2}
                    fontSize={{ base: "4xl", sm: "5xl", lg: "6xl" }}
                    color={`${color}.400`}
                    items={[
                      "Website",
                      "SaaS",
                      "Project",
                      "Ideas",
                      "Marketing",
                      "Technology",
                      "Entertainment",
                      "Prototypes",
                      "Advertisement",
                      "E-Commerce",
                      "Blog",
                      "Portfolio",
                      "Presentation",
                      "Exhibition",
                      "Showcase",
                      "Wedding Site",
                      "Real Estate App",
                      "Education Site",
                      "Restaurant",
                      "Fashion",
                      "Magazine",
                      "Photography",
                      "Travel",
                    ]}
                  />
                </Text>
                <Text d={"block"}>With Mercury</Text>
              </Heading>
            }
            fontSize="xl"
            body={
              <Text color="gray.500" maxW="500" fontSize="xl" fontWeight="500">
                Build and deploy effortless websites that drive more traffic,
                convert better and earn more revenue.
              </Text>
            }
            image={OfficeImage3}
            colorScheme={color}
            buttons={
              <>
                <Button
                  rounded={"full"}
                  size={"lg"}
                  fontWeight={"normal"}
                  colorScheme={color}
                  bg={`${color}.400`}
                  _hover={{ bg: `${color}.500` }}
                  px={8}
                  py={6}
                >
                  Get started
                </Button>
                <Button
                  rounded={"full"}
                  size={"lg"}
                  fontWeight={"normal"}
                  px={8}
                  py={6}
                  rightIcon={<PlayIcon h={6} w={6} color={"gray.400"} />}
                >
                  Tutorials
                </Button>
              </>
            }
          />
        </Container>

        <Container my={[5, 10, 20]} maxW="container.xl">
          <Text
            color={useColorModeValue("gray.700", "gray.500")}
            fontWeight="600"
            mb={5}
            align="center"
          >
            Join the 20,000+ companies using the our platform
          </Text>
          <ClientsLogoBlock spacing={[4, 8, 12]} />
        </Container>

        <Box
          overflow="hidden"
          py={[5, 8, 10]}
          bg={useColorModeValue("gray.50", "gray.900")}
        >
          <Container my={[10, 10, 20]} maxW="container.xl">
            <FadeUp
              mb={[10, 10, 20]}
              variants={variants}
              childVariants={childVariants}
            >
              <Heading textAlign="center" maxW="700" mx="auto" fontSize="5xl">
                Build better with Mercury
              </Heading>
              <Text
                color={useColorModeValue("gray.500", "gray.500")}
                fontSize="lg"
                textAlign="center"
              >
                Enrich your pages with premium components
              </Text>
            </FadeUp>
            <BuildBetterWithMercury />
          </Container>
        </Box>

        <Box
          bgGradient={useColorModeValue(
            "linear(gray.50, #fff)",
            "linear(gray.900, gray.800)",
          )}
        >
          <Container py={[10, 10, 10, 20]} maxW="container.xl">
            <Stack
              spacing={[5, 5, 10]}
              direction={["column", "column", "column", "row"]}
            >
              <Flex borderWidth="0" flex="1">
                <ImageLazyload
                  flex="1"
                  image={useColorModeValue(Business1, Business1Dark)}
                />
              </Flex>
              <Flex maxW={["full", "full", "full", 450]} flex="1">
                <Stack spacing={[5, 5, 7]}>
                  <Heading lineHeight={1.1} fontSize={["3xl", "4xl", "5xl"]}>
                    Take advantage of our template with{" "}
                    <Highlight
                      strokeColor={`${color}.300`}
                      color={`${color}.400`}
                    >
                      Powerful Tools
                    </Highlight>
                  </Heading>
                  <Text fontSize="lg">
                    We have developed the Mercury template for you and gathered
                    together powerful tools to create fast and impressive pages.
                  </Text>
                  <Stack spacing={4}>
                    <Flex align="center">
                      <Circle size="16" bg="black">
                        <Icon
                          color={"whiteAlpha.800"}
                          fontSize="4xl"
                          as={FaReact}
                        />
                      </Circle>
                      <Box ml={4}>
                        <Text fontWeight="600">Next.js</Text>
                        <Text color="gray.500">
                          React Framework for Production
                        </Text>
                      </Box>
                    </Flex>
                    <Flex align="center">
                      <Circle
                        bg={useColorModeValue("teal.100", "teal.700")}
                        size="16"
                      >
                        <Icon color="teal.400" fontSize="3xl" as={FiZap} />
                      </Circle>
                      <Box ml={4}>
                        <Text fontWeight="600">Chakra UI</Text>
                        <Text color="gray.500">
                          Modular and Accessible Component
                        </Text>
                      </Box>
                    </Flex>
                  </Stack>
                  <Box
                    borderTopWidth="1px"
                    borderColor={useColorModeValue(
                      "blackAlpha.300",
                      "whiteAlpha.300",
                    )}
                    pt={5}
                  >
                    <Text
                      mb={4}
                      fontWeight="500"
                      textAlign="center"
                      color={useColorModeValue("gray.500", "gray.400")}
                    >
                      Trusted by leading companies
                    </Text>
                    <Wrap
                      color={useColorModeValue("gray.400", "gray.500")}
                      direction={"row"}
                      spacing={[2, 4, 8]}
                      align="center"
                      justify="center"
                    >
                      <WrapItem>
                        <Logo4 color="current" />
                      </WrapItem>
                      <WrapItem>
                        <Logo3 color="current" />
                      </WrapItem>
                    </Wrap>
                  </Box>
                </Stack>
              </Flex>
            </Stack>
          </Container>
        </Box>

        <Container
          // borderTopWidth="1px"
          py={[10, 10, 10, 20]}
          maxW="container.xl"
        >
          <Stack mb={[5, 5, 10, 20]} textAlign="center" align="center">
            <FadeUp variants={variants} childVariants={childVariants}>
              <Heading maxW="700" fontSize={["3xl", "5xl", "5xl"]}>
                Everything you need to start creating amazing websites
              </Heading>
            </FadeUp>
          </Stack>

          <CreateAmazingWebsites />
        </Container>

        <Box>
          <Container mb={[10, 10, 20]} maxW="container.xl">
            <Stack align="center">
              <Stack
                width="full"
                align="end"
                justify="center"
                spacing={[10]}
                direction={["column", "column", "column", "row"]}
              >
                <Flex width="full" flex="1">
                  <Box
                    flex="1"
                    pos="relative"
                    maxW={500}
                    mx="auto"
                    zIndex={1}
                    _before={{
                      content: "''",
                      pos: "absolute",
                      bottom: 0,
                      right: [0, 2, 2, 2],
                      display: "block",
                      // bg: "gray.100",
                      bgGradient: useColorModeValue(
                        "radial(gray.50, gray.200)",
                        "radial(gray.800, gray.900)",
                      ),
                      rounded: "xl",
                      width: ["full", "full", "110%"],
                      height: "70%",
                      zIndex: 0,
                    }}
                  >
                    <ImageLazyloadWithoutRatio
                      w="full"
                      h="auto"
                      objectFit="cover"
                      image={Avatar3T}
                    />
                  </Box>
                </Flex>

                <Flex width="full" flex="1">
                  <FadeUp
                    mx="auto"
                    width="full"
                    maxW={["full", "full", 450]}
                    pos="relative"
                    zIndex={1}
                    variants={variants}
                    childVariants={childVariants}
                  >
                    <Heading mb={4} lineHeight={1.1} fontSize="4xl">
                      <Icon as={ImQuotesLeft} /> Mercury helps you build your
                      pages much faster with built-in components.
                    </Heading>
                    <Text fontSize="lg" mb={4}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Suspendisse varius enim in eros elementum tristique. Duis
                      cursus, mi quis viverra ornare, eros dolor interdum nulla,
                      ut commodo diam libero vitae erat. Aenean faucibus nibh et
                      justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae
                      risus tristique posuere.
                    </Text>
                    <Text fontWeight={600}>Christophe Faubert</Text>
                    <Text fontSize="sm">
                      Senior Full-stack Developer at Acme
                    </Text>
                  </FadeUp>
                </Flex>
              </Stack>
            </Stack>
          </Container>
        </Box>

        <Box>
          <Container py={[10, 10, 20]} my={[10, 10, 20]} maxW="container.lg">
            <FadeUp
              mb={[10, 10, 20]}
              variants={variants}
              childVariants={childVariants}
            >
              <Heading
                as="h3"
                textAlign="center"
                maxW="700"
                mx="auto"
                fontSize="5xl"
              >
                Choose a plan
              </Heading>
              <Text
                color={useColorModeValue("gray.500", "gray.500")}
                fontSize="lg"
                textAlign="center"
              >
                No credit card required for a trial.
              </Text>
            </FadeUp>

            <Stack
              direction={["column", "column", "row"]}
              spacing={0}
              borderWidth="1px"
              borderColor={useColorModeValue("gray.200", "gray.600")}
              rounded="xl"
              overflow="hidden"
              width="full"
            >
              <PricingSimpleCard
                borderRightWidth={{ base: 0, md: "1px" }}
                borderBottomWidth={{ base: "1px", md: 0 }}
                borderColor={useColorModeValue("gray.200", "gray.600")}
                maxW="full"
                type="basic"
                title="Basic Plan"
                // colorScheme={color}
                colorScheme="gray"
                price={9}
                annuallyPrice={90}
                // isAnnually
                period="mo."
                description="Good for start"
                annuallyText="Pay annually and take advantage of the discount"
                actionText="Sign up for a Free Trial"
                onClick={pricingButtonAct}
                rounded={0}
                boxShadow="none"
                features={[]}
                featuresList={[
                  { feature: "1 Account" },
                  { feature: "10GB Cloud Storage" },
                  { feature: "10K Visitors" },
                  // { active: false, feature: "All features" },
                ]}
              />
              <PricingSimpleCard
                borderRightWidth={{ base: 0, md: "1px" }}
                borderBottomWidth={{ base: "1px", md: 0 }}
                borderColor={useColorModeValue("gray.200", "gray.600")}
                maxW="full"
                type="team"
                title="Team Plan"
                colorScheme={color}
                price={29}
                annuallyPrice={290}
                // isAnnually
                period="mo."
                description="Grow your team"
                annuallyText="Pay annually and take advantage of the discount"
                actionText="Sign up"
                onClick={pricingButtonAct}
                rounded={0}
                // rounded="xl"
                // boxShadow={"2xl"}
                boxShadow="none"
                features={[]}
                featuresList={[
                  { feature: "3 Account" },
                  { feature: "50GB Cloud Storage" },
                  { feature: "100K Visitors" },
                  // { active: false, feature: "All features" },
                ]}
              />
              <PricingSimpleCard
                maxW="full"
                type="enterprise"
                title="Enterprise Plan"
                colorScheme="gray"
                price={129}
                annuallyPrice={1200}
                // isAnnually
                period="mo."
                description="Scale your business"
                annuallyText="Pay annually and take advantage of the discount"
                actionText="Sign up"
                onClick={pricingButtonAct}
                rounded={0}
                boxShadow="none"
                features={[]}
                featuresList={[
                  { feature: "Unlimited Account" },
                  { feature: "Unlimited Cloud Storage" },
                  { feature: "Unlimited Visitors" },
                  // { active: false, feature: "All features" },
                ]}
              />
            </Stack>
          </Container>
        </Box>

        <Box
          overflow="hidden"
          py={[5, 8, 10]}
          bg={useColorModeValue("gray.50", "gray.900")}
        >
          <Container my={[10, 10, 20]} maxW="container.xl">
            <FadeUp mb={10} variants={variants} childVariants={childVariants}>
              <Heading as="h3" maxW="700" fontSize="5xl">
                Frequently Asked Questions
              </Heading>
            </FadeUp>

            <FrequentlyAskedQuestions colorScheme={color} />
          </Container>
        </Box>

        <Box
          bgGradient={useColorModeValue(
            "linear(to-t, gray.50, gray.50, transparent)",
            null,
          )}
        >
          <Container py={[10, 10, 20]} mt={[10, 10, 20]} maxW="container.xl">
            <FadeUp mb={10} variants={variants} childVariants={childVariants}>
              <Heading
                as="h3"
                mb={4}
                lineHeight={1}
                fontSize={["4xl", "5xl", "5xl"]}
              >
                Start{" "}
                <Highlight
                  type="mark"
                  strokeColor={`${color}.300`}
                  color={`${color}.400`}
                  bottom="-25%"
                >
                  saving time
                </Highlight>
                <chakra.div display={["inline", "none", "block"]} />{" "}
                <Text pos="relative" zIndex={1} as="span">
                  on your next website project
                </Text>
              </Heading>
              <Text maxW={550} fontSize="lg">
                Creating UI design takes time and effort, so get the most out of
                your design by handing off screens at the right time to the
                right people.
              </Text>
            </FadeUp>

            <Stack spacing={10} direction={["column", "column", "row"]}>
              <Flex
                direction={"column"}
                p={[5, 10, 10]}
                flex="1"
                width="full"
                rounded="xl"
                bg={useColorModeValue("whiteAlpha.900", "gray.700")}
                shadow="md"
              >
                <Flex>
                  <Icon as={FiShoppingCart} fontSize="2xl" mr={2} />
                  <Heading as="h3" fontSize="2xl" lineHeight={1} mb={4}>
                    Purchase the template
                  </Heading>
                </Flex>
                <Box maxW={["full", "full", "full", "80%"]}>
                  <Text
                    mb={4}
                    color={useColorModeValue("gray.600", "gray.300")}
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    suspendisse varius enim.
                  </Text>
                </Box>
                <Button
                  mt="auto"
                  width="full"
                  maxW={["full", 160, "full", 160]}
                  onMouseDown={purchaseMouseDownHandler}
                >
                  Purchase
                </Button>
              </Flex>

              <Box
                p={[5, 10, 10]}
                flex="1"
                width="full"
                rounded="xl"
                bg={useColorModeValue("whiteAlpha.900", "gray.700")}
                shadow="md"
              >
                <Flex>
                  <Icon as={IoMailOutline} fontSize="2xl" mr={2} />
                  <Heading as="h3" fontSize="2xl" lineHeight={1} mb={4}>
                    Subscribe for updates
                  </Heading>
                </Flex>
                <Box pos="relative" maxW={["full", "full", "full", "80%"]}>
                  <Text
                    mb={4}
                    color={useColorModeValue("gray.600", "gray.300")}
                  >
                    Subscribe to our newsletter, exclusive tips, trends and
                    freebies, direct to your inbox.
                  </Text>
                  <Stack
                    direction={["column", "row", "column", "row"]}
                    spacing={2}
                  >
                    <Input
                      focusBorderColor={`${color}.400`}
                      placeholder="name@company.com"
                    />
                    <Button
                      variant="outline"
                      colorScheme={color}
                      width="full"
                      maxW={["full", 140, "full", 140]}
                    >
                      Subscribe
                    </Button>
                  </Stack>
                  <Box
                    display={["none", "block", "block"]}
                    w="90px"
                    right={["0", "-50px", "-20px", "-80px"]}
                    bottom="50px"
                    pos="absolute"
                  >
                    <Annotation
                      transform="scale(1,-1) rotate(45deg)"
                      bottom="unset"
                      left="-40%"
                      // color="gray.400"
                      color={`${color}.400`}
                    >
                      <Tag colorScheme={color}>Save up to 10%</Tag>
                    </Annotation>
                  </Box>
                </Box>
              </Box>
            </Stack>
          </Container>
        </Box>
      </chakra.main>
    </>
  );
};

/* -------------------------------------------------------------------------- */
/*                                 PAGE BLOCKS                                */
/* -------------------------------------------------------------------------- */

const FrequentlyAskedQuestions: React.FC<ThemingProps> = memo(
  ({ colorScheme }) => {
    const dummyText =
      "Ambitioni dedisse scripsisse iudicaretur. Cras mattis iudicium purus sit amet fermentum. Idque Caesaris facere voluntate liceret: sese habere.";
    const items = [
      {
        title: "How do I purchase an item ?",
        body: dummyText,
      },
      {
        title: "Where is my purchase code ?",
        body: dummyText,
      },
      {
        title: "Can I pay with my credit card ?",
        body: dummyText,
      },
      {
        title: "How do I check item compatibility ?",
        body: dummyText,
      },
      /*------------------------*/
      {
        title: "What methods of payments are supported ?",
        body: dummyText,
      },
      {
        title: "How to contact an author",
        body: dummyText,
      },
      {
        title: "Giving feedback on items",
        body: dummyText,
      },
      {
        title: "Can I get a refund ?",
        body: dummyText,
      },
    ];
    return (
      <Stack direction={["column", "column", "row"]} spacing={[0, 0, 10]}>
        <FadeUp width="full" variants={variants} childVariants={childVariants}>
          <AccordionFlat
            accordionButtonProps={{
              fontWeight: "600",
              fontSize: "1.125rem",
              py: 4,
              _hover: {
                color: colorScheme
                  ? useColorModeValue(
                      `${colorScheme}.500`,
                      `${colorScheme}.200`,
                    )
                  : "current",
              },
              _expanded: {
                color: colorScheme
                  ? useColorModeValue(
                      `${colorScheme}.500`,
                      `${colorScheme}.200`,
                    )
                  : "current",
              },
            }}
            accordionPanelProps={{
              px: 0,
              py: 4,
            }}
            allowToggle
            // isPlus
            accordions={items.slice(0, 4)}
          />
        </FadeUp>
        <FadeUp width="full" variants={variants} childVariants={childVariants}>
          <AccordionFlat
            width="full"
            accordionButtonProps={{
              fontWeight: "600",
              fontSize: "1.125rem",
              py: 4,
              _hover: {
                color: colorScheme
                  ? useColorModeValue(
                      `${colorScheme}.500`,
                      `${colorScheme}.200`,
                    )
                  : "current",
              },
              _expanded: {
                color: colorScheme
                  ? useColorModeValue(
                      `${colorScheme}.500`,
                      `${colorScheme}.200`,
                    )
                  : "current",
              },
            }}
            accordionPanelProps={{
              px: 0,
              py: 4,
            }}
            allowToggle
            // isPlus
            accordions={items.slice(4, 8)}
          />
        </FadeUp>
      </Stack>
    );
  },
);

if (__DEV__) {
  FrequentlyAskedQuestions.displayName = "FrequentlyAskedQuestions";
}

const BuildBetterWithMercury = memo(() => {
  const items = [
    {
      title: "Components",
      body: "Discover instant import React components. Explore our huge library.",
      color: "red.200",
      icon: <Icon color="red.400" fontSize="4xl" as={FiBox} />,
    },
    {
      title: "Pages",
      body: "Browse our collection of pre-built pages. We're certified partners.",
      color: "purple.200",
      icon: <Icon color="purple.400" fontSize="4xl" as={FiFileText} />,
    },
    {
      title: "Forms",
      body: "Performant, flexible and extensible forms with easy-to-use validation.",
      color: "blue.200",
      icon: <Icon color="blue.400" fontSize="4xl" as={FiEdit} />,
    },
    {
      title: "Chakra Framework",
      body: "Chakra is a simple, modular and accessible component library developers.",
      color: "teal.200",
      icon: <Icon color="teal.400" fontSize="4xl" as={FiZap} />,
    },
  ];

  const shadow = (color: string): string => {
    // const result = `5px 5px rgba(${color}, 0.4),
    // 10px 10px rgba(${color}, 0.3),
    // 15px 15px rgba(${color}, 0.2),
    // 20px 20px rgba(${color}, 0.1),
    // 25px 25px rgba(${color}, 0.05)`;

    const result = `rgba(${color}, 0.25) 0px 4px 50px`;
    return result;
  };

  return (
    <FadeUpStack
      spacing={[4, 8, 10, 16]}
      direction={["column", "column", "row"]}
      // align="start"
      variants={{
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            ease: "easeOut",
            duration: 0.85,
            staggerChildren: 0.125,
          },
        },
        hidden: { opacity: 0, y: 10 },
      }}
      childVariants={{
        hidden: { opacity: 0, y: 30 },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            ease: [0.25, 0.46, 0.45, 0.94], // easeOutQuad
            duration: 0.45,
          },
        },
      }}
    >
      {items.map((item, idx) => (
        <Flex
          key={idx}
          direction={["row", "row", "column"]}
          height="full"
          align="center"
          rounded="xl"
          boxShadow={shadow(hexToRGB(useToken("colors", item.color)))}
          p={[4, 5, 6, 10]}
          bg={useColorModeValue("white", "gray.800")}
        >
          <Circle bg={item.color} size={20} mr={[5, 5, 0]} mb={[0, 0, 5]}>
            {item.icon}
          </Circle>
          <Box>
            <Text mb={2} fontWeight="700">
              {item.title}
            </Text>
            <Text>{item.body}</Text>
          </Box>
        </Flex>
      ))}
    </FadeUpStack>
  );
});

if (__DEV__) {
  BuildBetterWithMercury.displayName = "BuildBetterWithMercury";
}

const CreateAmazingWebsites = memo(() => {
  const pale = ({
    color,
    opacity = 0.45,
  }: {
    color: string;
    opacity?: number;
  }): string => `rgba(${hexToRGB(useToken("colors", color))},${opacity})`;
  const items = [
    {
      title: "Accessible",
      body: "Chakra UI strictly follows WAI-ARIA standards for all components.",
      color: "red.100",
      icon: (
        <Icon
          w="32"
          h="32"
          color={pale({ color: "red.100" })}
          as={MdAccessibility}
        />
      ),
    },
    {
      title: "Themeable",
      body: "Customize any part of our components to match your design needs.",
      color: "orange.100",
      icon: (
        <Icon
          w="32"
          h="32"
          color={pale({ color: "orange.100" })}
          as={MdPalette}
        />
      ),
    },
    {
      title: "Composable",
      body: "Designed with composition in mind. Compose new components with ease.",
      color: "green.100",
      icon: (
        <Icon w="32" h="32" color={pale({ color: "green.100" })} as={MdGrain} />
      ),
    },
    {
      title: "Light & Dark",
      body: "Optimized for multiple color modes. Use light or dark, your choice.",
      color: "teal.100",
      icon: (
        <Icon w="32" h="32" color={pale({ color: "teal.100" })} as={IoMoon} />
      ),
    },
    {
      title: "Developer Experience",
      body: "Guaranteed to boost your productivity when building your app or website.",
      color: "blue.100",
      icon: (
        <Icon
          w="32"
          h="32"
          color={pale({ color: "blue.100" })}
          as={AiFillThunderbolt}
        />
      ),
    },
    {
      title: "24/7 Premium Support",
      body: "We're a team of active maintainers ready to help you whenever you need.",
      color: "purple.100",
      icon: (
        <Icon
          w="32"
          h="32"
          color={pale({ color: "purple.100" })}
          as={IoHelpCircleOutline}
        />
      ),
    },
  ];
  return (
    <FadeUpGrid
      columns={[1, 2, 2, 3]}
      gap={[5, 6, 8, 10]}
      variants={{
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            ease: "easeOut",
            duration: 0.85,
            staggerChildren: 0.125,
          },
        },
        hidden: { opacity: 0, y: 10 },
      }}
      childVariants={{
        hidden: { opacity: 0, y: 30 },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            ease: [0.25, 0.46, 0.45, 0.94], // easeOutQuad
            duration: 0.45,
          },
        },
      }}
    >
      {items.map((item, idx) => (
        <Flex
          key={idx}
          flex="1"
          rounded="md"
          pos="relative"
          // bg={`rgba(${hexToRGB(useToken("colors", item.color))},0.125)`}
          transition="box-shadow 0.3s ease-in-out"
          boxShadow={`1px 1px 10px rgba(${hexToRGB(
            useToken("colors", item.color),
          )},0.35)`}
          _hover={{
            boxShadow: `0px 15px 25px rgba(${hexToRGB(
              useToken("colors", item.color),
            )},0.9)`,
          }}
        >
          <Box pos="absolute" zIndex={0} right={0} bottom={0}>
            {item.icon}
          </Box>
          <Box pos="relative" zIndex={1} p={5}>
            <Text mb={4} fontSize="lg" fontWeight="600">
              {item.title}
            </Text>
            <Text fontSize="lg">{item.body}</Text>
          </Box>
        </Flex>
      ))}
    </FadeUpGrid>
  );
});

if (__DEV__) {
  CreateAmazingWebsites.displayName = "CreateAmazingWebsites";
}

export default BusinessPage;
