import {
  FaAngleDoubleRight,
  GiFeather,
  IoAnalyticsSharp,
  IoGameControllerOutline,
  IoLogoBitcoin,
  IoPulseOutline,
  IoSearchSharp,
  SiEslint,
  SiPrettier,
  SiTypescript,
} from "@react-icons";

import { useState, useContext } from "react";

import { NextSeo } from "next-seo";

import {
  Box,
  Button,
  chakra,
  Circle,
  Container,
  Flex,
  Heading,
  Icon,
  SimpleGrid,
  Stack,
  Switch,
  Text,
  useBreakpointValue,
  useColorModeValue,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";

import { ThemeColorContext } from "@definitions/context/theme";
import Site from "@definitions/site";

import AccordionSimple from "@components/accordion/accordion-simple";
import { Section } from "@components/common";
import DividerTilt from "@components/divider/divider-tilt";
import DividerWavyTwo from "@components/divider/divider-wavy-2";
import { FeaturesGrid } from "@components/features/features-grid";
import { FeaturesTwoColumnsImage } from "@components/features/features-two-columns-image";
import Highlight from "@components/highlight";
import { PricingSimpleCard } from "@components/pricing/pricing-simple-card";
import { TestimonialBubbleCard } from "@components/testimonials/testimonial-bubble-card";

// illustrations
import UndrawData from "@assets/illustrations/undraw-data";
import UndrawDesignFeedback from "@assets/illustrations/undraw-design-feedback";
import UndrawMarketing from "@assets/illustrations/undraw-marketing";
import UndrawThoughtProcess from "@assets/illustrations/undraw-thought-process";
// Image assets
import AvatarImage from "@assets/images/avatar-1.jpg?resize&size=80&img";
import AvatarFemale from "@assets/images/avatar-female-1.jpg?resize&size=80&img";
import ArticleImgOne from "@assets/images/team-3.jpg?resize&img";

const MarketingPage: React.FC = (): JSX.Element => {
  const theme = useContext(ThemeColorContext);
  const color = theme.colorScheme; // global default primary theme color

  const [isAnnually, setIsAnnually] = useState(false);

  /* -------------------------- Default Page Styles ------------------------- */
  const bg = useColorModeValue("white", "gray.800");
  const activeBg = useColorModeValue(`${color}.100`, `${color}.800`);
  const textColorMuted = useColorModeValue("blackAlpha.700", "whiteAlpha.700");
  const sectionPadding = [10, 10, 28, 32];
  const activeButton = {
    bg: useColorModeValue(`${color}.300`, `${color}.500`),
    color: `${color}.900`,
    _hover: {
      bg: "black",
      color: `${color}.100`,
    },
    _active: {
      bg: `${color}.700`,
      color: `${color}.100`,
    },
  };
  const secondaryButton = {
    colorScheme: "black",
    _before: {
      left: 0,
      right: 0,
      width: "0%",
      zIndex: "-1",
      content: '""',
      rounded: "md",
      height: "full",
      pos: "absolute",
      display: "block",
      overflow: "hidden",
      transition: "width 250ms ease",
      bg: useColorModeValue("whiteAlpha.800", "blackAlpha.700"),
    },
    _hover: {
      _before: {
        width: "full",
      },
    },
    _active: {
      bg: useColorModeValue(`${color}.700`, `${color}.400`),
      color: `${color}.100`,
    },
  };

  /* ----------------------------- Page Contents ---------------------------- */

  const features = [
    {
      title: "Easy to use",
      text: "A communi observantia non est recedendum. Excepteur sint obcaecat cupiditat non proident culpa.",
      icon: (
        <Circle bg={activeBg} size={10}>
          <Icon
            as={IoGameControllerOutline}
            fontSize={18}
            color={useColorModeValue(`${color}.700`, `${color}.300`)}
          />
        </Circle>
      ),
    },
    {
      title: "SEO friendly",
      text: "Petierunt uti sibi concilium totius Galliae in diem certam indicere. Salutantibus vitae elit libero, a pharetra augue.",
      icon: (
        <Circle bg={activeBg} size={10}>
          <Icon
            as={IoPulseOutline}
            fontSize={18}
            color={useColorModeValue(`${color}.700`, `${color}.300`)}
          />
        </Circle>
      ),
    },
    {
      title: "Lightweight and fast loading",
      text: "Petierunt uti sibi concilium totius Galliae in diem certam indicere. Salutantibus vitae elit libero, a pharetra augue.",
      icon: (
        <Circle bg={activeBg} size={10}>
          <Icon
            as={GiFeather}
            fontSize={18}
            color={useColorModeValue(`${color}.700`, `${color}.300`)}
          />
        </Circle>
      ),
    },
    {
      title: "Typescript",
      text: "TypeScript is a strongly typed programming language that builds on JavaScript, giving you better tooling at any scale.",
      icon: (
        <Circle bg={activeBg} size={10}>
          <Icon
            as={SiTypescript}
            fontSize={18}
            color={useColorModeValue(`${color}.700`, `${color}.300`)}
          />
        </Circle>
      ),
    },
    {
      title: "ESLint",
      text: "A pluggable and configurable linter tool for identifying and reporting on patterns in JavaScript.",
      icon: (
        <Circle bg={activeBg} size={10}>
          <Icon
            as={SiEslint}
            fontSize={18}
            color={useColorModeValue(`${color}.700`, `${color}.300`)}
          />
        </Circle>
      ),
    },
    {
      title: "Prettier",
      text: "An opinionated code formatter; Supports many languages; Integrates with most editors.",
      icon: (
        <Circle bg={activeBg} size={10}>
          <Icon
            as={SiPrettier}
            fontSize={18}
            color={useColorModeValue(`${color}.700`, `${color}.300`)}
          />
        </Circle>
      ),
    },
  ];

  const statistics = [
    { title: "Campaigns", value: "5,105" },
    { title: "Projects", value: "765" },
    { title: "Users", value: "1,042" },
    { title: "Posts", value: "2,315" },
  ];

  // Pricing Button Action
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const pricingButtonAct = (event: React.MouseEvent<HTMLButtonElement>) => {
    // console.log("Event", event.target);
    /* Do the operation here. */
  };

  const fullWidth = useBreakpointValue({ base: true, sm: false });

  // CTA
  const ctaHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (event.button === 0) window.open(Site.purchase, "_blank");
    if (event.button === 1) window.open(Site.purchase, "_blank");
  };

  return (
    <>
      <NextSeo
        title="Marketing Agency"
        description="Your online presence must be strong enough to show your business in the unlimited online options available."
      />
      <chakra.main
        pos="relative"
        bg={bg}
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
        {/* ----------------------------- Hero ----------------------------- */}
        <Box pos="relative" bg={activeBg}>
          <Container maxWidth="container.xl">
            <Stack
              direction={["column", "column", "column", "row"]}
              alignItems="center"
              // minHeight="100vh"
              height={["full", "full", "full", 800]}
              spacing={10}
            >
              <Flex
                maxWidth={["full", "full", "full", "45%"]}
                direction="column"
                justify="center"
                pt={[28, 28, 28, 0]}
                zIndex={1}
              >
                <Heading fontSize="5xl">
                  <Wrap>
                    <WrapItem>
                      <Text fontWeight="400">Digital Marketing</Text>
                    </WrapItem>
                    <WrapItem>
                      <Text fontWeight="700">Strategies & Analysis</Text>
                    </WrapItem>
                  </Wrap>
                </Heading>
                <Text
                  fontWeight="bold"
                  borderColor="blackAlpha.400"
                  borderBottomWidth="1px"
                  py={4}
                  mb={4}
                >
                  SEO, Social Media, Campaign Management
                </Text>
                <Text fontWeight="300" fontSize="2xl">
                  Your online presence must be strong enough to show your
                  business in the unlimited online options available.
                </Text>
                <Wrap mt={6}>
                  <Button size="lg" isFullWidth={fullWidth} {...activeButton}>
                    Add to Your Website
                  </Button>
                  <Button
                    isFullWidth={fullWidth}
                    size="lg"
                    pos="relative"
                    variant="ghost"
                    {...secondaryButton}
                  >
                    How does it works?
                  </Button>
                </Wrap>
              </Flex>
              <Flex width="full" justify="center">
                <UndrawMarketing color={`${color}.300`} width="full" />
              </Flex>
            </Stack>
          </Container>
          <DividerWavyTwo position="bottom" />
        </Box>

        {/* ----------------------------- Intro ---------------------------- */}
        <Container maxWidth="container.md">
          <Section my={sectionPadding} alignItems="center">
            <Heading
              mb={4}
              fontSize={["4xl", "5xl"]}
              lineHeight="1"
              textAlign={["left", "center"]}
            >
              Powerful integrations with your website and marketing tools
            </Heading>
            <Text
              color={textColorMuted}
              maxWidth="625px"
              fontSize="20px"
              textAlign={["left", "center"]}
            >
              We offer real effective marketing solutions for businesses and
              seamless integrations with your key services like AWS Cloud and
              many others.
            </Text>
          </Section>
        </Container>

        {/* -------------------------- Monitoring -------------------------- */}
        <Section pos="relative" my={20}>
          <Container maxWidth="container.xl">
            <SimpleGrid
              alignItems="center"
              columns={[1, 1, 2, 2, 2]}
              spacing={10}
            >
              <Box>
                <Text
                  fontWeight="500"
                  fontSize="14px"
                  textTransform="uppercase"
                  color={textColorMuted}
                >
                  Analytics
                </Text>
                <Heading as="h3" py={2} fontSize="2xl">
                  Monitor your traffic
                </Heading>
                <Text color={textColorMuted} maxWidth="500px" fontSize="18px">
                  Identifying traffic sources and tracking them efficiently is
                  of great importance in determining the marketing strategy, so
                  you can market the right product to the right customer.
                </Text>
              </Box>
              <Box>
                <UndrawData
                  bg={useColorModeValue("white", "gray.700")}
                  color={`${color}.300`}
                />
              </Box>
            </SimpleGrid>
          </Container>
        </Section>

        {/* -------------------------- Statistics -------------------------- */}
        <Section my={sectionPadding}>
          <Container maxWidth="container.xl">
            <Flex direction={["column", "column", "row", "row"]} align="center">
              <Heading mb={[10, 10, 0]} as="h3" fontSize="1.5rem">
                <Text fontWeight="400" as="span">
                  Usage
                </Text>{" "}
                Statistics
              </Heading>
              <SimpleGrid spacing={6} w="full" columns={[1, 2, 2, 4, 4]}>
                {statistics.map((s, idx) => (
                  <Flex
                    key={idx}
                    direction="column"
                    align={["center", "center", "center", "end"]}
                  >
                    <Heading>{s.value}</Heading>
                    <Text
                      fontSize="xs"
                      textTransform="uppercase"
                      fontWeight="600"
                      color={textColorMuted}
                    >
                      {s.title}
                    </Text>
                  </Flex>
                ))}
              </SimpleGrid>
            </Flex>
          </Container>
        </Section>

        {/* --------------------------- Insights --------------------------- */}
        <Section pos="relative" my={sectionPadding}>
          <Container maxWidth="container.xl">
            <SimpleGrid
              alignItems="center"
              columns={[1, 1, 2, 2, 2]}
              spacing={10}
            >
              <Box>
                <UndrawDesignFeedback color={`${color}.300`} maxWidth="500px" />
              </Box>
              <Box>
                <Text
                  fontWeight="500"
                  fontSize="14px"
                  textTransform="uppercase"
                  color={textColorMuted}
                >
                  Insights
                </Text>
                <Heading as="h3" py={2} fontSize="2xl">
                  Making sense of user behaviors
                </Heading>
                <Text color={textColorMuted} maxWidth="500px" fontSize="18px">
                  Observing users as they interact with the product is an
                  integral part of the user testing process. Recording these
                  interactions can help understand the users even more...
                </Text>
              </Box>
            </SimpleGrid>
          </Container>
        </Section>

        {/* ------------------------- Testimonials ------------------------- */}
        <Section
          id="agency-testimonials"
          pos="relative"
          bg={useColorModeValue(`${color}.100`, "gray.700")}
          py={"100px"}
        >
          <DividerTilt bg={bg} flip w="100%" height="60px" />
          <Container maxWidth="container.xl">
            <Heading my="10" textAlign="center" fontWeight="400" as="h3">
              Why People{" "}
              <Highlight
                strokeWidth={4}
                color={`${color}.500`}
                bottom="-5px"
                type="mark"
                fontWeight="700"
              >
                Love
              </Highlight>{" "}
              Mercury
            </Heading>
            <Wrap align="start" justify="center" spacing={0}>
              <WrapItem>
                <TestimonialBubbleCard
                  mx={6}
                  maxWidth="340px"
                  avatarImage={AvatarImage}
                  title="It's a game changer"
                  body="How did I not know before. In fact, this is the first web analytics that works the way I like it."
                  name="Andrew Hess"
                  occupation="Software Architect"
                />
              </WrapItem>
              <WrapItem>
                <TestimonialBubbleCard
                  mx={6}
                  mt={[2, 10, 10, "80px"]}
                  maxWidth="340px"
                  avatarImage={AvatarImage}
                  title="The best analytics tool"
                  body="The user interface is incredibly smooth, easy to use, and it's a tool with everything you need."
                  name="John Batson"
                  occupation="CEO, ACME Inc."
                />
              </WrapItem>
              <WrapItem>
                <TestimonialBubbleCard
                  mx={6}
                  // mt={[2, 5, "50px"]}
                  mt={[2, 10, 10, "40px", "30px"]}
                  maxWidth="340px"
                  avatarImage={AvatarFemale}
                  title="Lightweight and blazing fast"
                  body="Blazing fast and beautiful marketing tools that you will want to use in every project and you will never regret it."
                  name="Nancy Carter"
                  occupation="Designer & Developer"
                />
              </WrapItem>
            </Wrap>
          </Container>
          <DividerTilt bg={bg} position="bottom" flip w="100%" height="60px" />
        </Section>

        {/* ------------------------- Key Features ------------------------- */}
        <Section id="agency-features" pos="relative" my={sectionPadding}>
          <Container maxWidth="container.xl">
            <Heading
              mb={[5, 10, 20, 20]}
              fontWeight={600}
              fontSize="3xl"
              textAlign="center"
            >
              Key Features
            </Heading>
            <FeaturesGrid columns={[1, 1, 2, 3, 3]} features={features} />
          </Container>
        </Section>

        {/* ---------------------------- Pricing --------------------------- */}
        <Section
          bg={useColorModeValue(`${color}.50`, `${color}.900`)}
          pos="relative"
          mb="0"
          mt={[0, 0, 0, "250px"]}
          py={sectionPadding}
        >
          <DividerTilt bg={bg} flip height={`40px`} />
          <Container maxWidth="container.xl">
            <Flex
              align={["center"]}
              direction={["column", "column", "column", "row"]}
            >
              <Box
                textAlign={["center", "center", "center", "left"]}
                maxWidth={["full", "full", "650px", "400px"]}
                mt={[10, 10, 0, 0]}
              >
                <Heading as="h3" mb={4} fontSize={["3xl", "3xl", "2xl"]}>
                  <Text
                    fontWeight="400"
                    d={["inline", "inline", "inline", "block"]}
                    as="span"
                  >
                    No Extra Charges{" "}
                  </Text>
                  <Text as="span">Choose Your Best Plan</Text>
                </Heading>
                <Text color={textColorMuted} fontSize="18px">
                  We guarantee that you will not incur any other fees apart from
                  the plan you have chosen. Choose the plan that suits you best
                  and start using it now.
                </Text>
                <Flex
                  mt={4}
                  align="center"
                  justify={["center", "center", "center", "start"]}
                >
                  <Text as="div" fontWeight={500} mr={2}>
                    <Highlight color={`${color}.400`}>25% Discount</Highlight>
                  </Text>
                  <Text fontWeight={isAnnually ? 400 : 600}>Monthly</Text>
                  <Switch
                    onChange={(e) => setIsAnnually(e.target.checked)}
                    mx={2}
                    colorScheme={color}
                    size="md"
                  />
                  <Text fontWeight={isAnnually ? 600 : 400}>Yearly</Text>
                </Flex>
              </Box>
              <Stack
                justifyContent="center"
                direction={["column", "column", "row"]}
                mt={[10, 10, 10, "-200px"]}
                w="full"
              >
                <Flex w="full" justifyContent="center">
                  <PricingSimpleCard
                    w="full"
                    type="personal"
                    title="Personal Plan"
                    price={10}
                    annuallyPrice={90}
                    isAnnually={isAnnually}
                    period="mo."
                    description="Good for start"
                    annuallyText="Pay annually and take advantage of the discount"
                    actionText="Start your trial"
                    onClick={pricingButtonAct}
                    rounded="xl"
                    boxShadow={"lg"}
                    features={[]}
                    featuresList={[
                      { feature: "Monitor your traffic" },
                      { active: false, feature: "Automate everything" },
                      { active: false, feature: "Custom Webhooks" },
                    ]}
                  />
                </Flex>
                <Flex w="full" justifyContent="center">
                  <PricingSimpleCard
                    popular
                    type="business"
                    title="Business Plan"
                    colorScheme={color}
                    price={25}
                    annuallyPrice={225}
                    isAnnually={isAnnually}
                    period="mo."
                    description="Suitable for agencies"
                    annuallyText="Pay annually and take advantage of the discount"
                    actionText="Get started"
                    onClick={pricingButtonAct}
                    rounded="xl"
                    boxShadow={"2xl"}
                    features={[]}
                    featuresList={[
                      { feature: "Monitor your traffic" },
                      { feature: "Automate everything" },
                      { feature: "Custom Webhooks" },
                    ]}
                  />
                </Flex>
              </Stack>
            </Flex>
          </Container>
        </Section>

        {/* ------------------------------ FAQ ----------------------------- */}
        <Section id="agency-faq" pos="relative" py={sectionPadding}>
          <Container maxWidth="container.xl">
            <Stack
              spacing={[5, 10]}
              align="center"
              direction={["column", "column", "row", "row", "row"]}
            >
              <Box w="full">
                <Heading as="h3" mb={6} fontSize={["2xl", "2xl", "xl"]}>
                  Frequently Asked Questions
                </Heading>
                <AccordionSimple
                  allowToggle
                  accordions={[
                    {
                      title: "How can I purchase a membership?",
                      body: (
                        <Text color={textColorMuted}>
                          Hi omnes lingua, institutis, legibus inter se
                          differunt. Salutantibus vitae elit libero, a pharetra
                          augue. Quam temere in vitiis, legem sancimus
                          haerentia. Paullum deliquit, ponderibus modulisque
                          suis ratio utitur. Fictum, deserunt mollit anim
                          laborum astutumque! Morbi odio eros, volutpat ut
                          pharetra vitae, lobortis sed nibh. A communi
                          observantia non est recedendum.
                        </Text>
                      ),
                    },
                    {
                      title: "How can I add a tracking code to my site?",
                      body: (
                        <Text color={textColorMuted} mb={6}>
                          Inmensae subtilitatis, obscuris et malesuada fames.
                          Quis aute iure reprehenderit in voluptate velit esse.
                          Nec dubitamus multa iter quae et nos invenerat.
                        </Text>
                      ),
                    },
                    {
                      title: "How can I review retrospective reports?",
                      body: (
                        <Text color={textColorMuted}>
                          Quis aute iure reprehenderit in voluptate velit esse.
                          Non equidem invideo, miror magis posuere velit
                          aliquet. A communi observantia non est recedendum.
                        </Text>
                      ),
                    },
                  ]}
                />
              </Box>
              <Flex
                // align="center"
                justify={["start", "start", "start", "center"]}
                w="full"
              >
                <Box maxWidth={["full", "full", "full", "450px"]}>
                  <Heading as="h3" mb={6} fontSize={["2xl", "2xl", "xl"]}>
                    {/* Get help on your project */}
                    Do you need help on your project?
                  </Heading>
                  <Text color={textColorMuted} fontSize="18px" mb={6}>
                    Our community forum is the best place to ask questions,
                    share your knowledge, and build new connections.
                  </Text>
                  <Wrap justify={["center", "start", "center", "start"]}>
                    <WrapItem alignItems="center">
                      <Button
                        leftIcon={<FaAngleDoubleRight />}
                        colorScheme={color}
                        bg={`${color}.300`}
                      >
                        Join the community
                      </Button>
                    </WrapItem>
                    <WrapItem alignItems="center">
                      <Button
                        variant="link"
                        mx={6}
                        my={2}
                        // leftIcon={<FaAngleDoubleRight />}
                        colorScheme={color}
                      >
                        Get Support
                      </Button>
                    </WrapItem>
                  </Wrap>
                </Box>
              </Flex>
            </Stack>
          </Container>
          <DividerTilt bg={bg} flip height={`40px`} position="bottom" />
        </Section>

        {/* --------------------------- Features --------------------------- */}
        <Section
          pos="relative"
          py={sectionPadding}
          bg={useColorModeValue("gray.50", "gray.700")}
        >
          <Container maxWidth="container.xl">
            <FeaturesTwoColumnsImage
              image={ArticleImgOne}
              title="Experience is very important in planning your marketing strategy"
              tag={
                <Text
                  textTransform={"uppercase"}
                  color={useColorModeValue(`${color}.400`, `${color}.700`)}
                  fontWeight={600}
                  fontSize={"sm"}
                  bg={useColorModeValue(`${color}.100`, `${color}.400`)}
                  p={2}
                  alignSelf={"flex-start"}
                  rounded={"md"}
                >
                  Marketing
                </Text>
              }
              body="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua."
              features={[
                {
                  icon: <Icon as={IoSearchSharp} color={"purple.500"} />,
                  iconBg: useColorModeValue("purple.100", "purple.900"),
                  text: "Market Analysis",
                },
                {
                  icon: <Icon as={IoAnalyticsSharp} color={"yellow.500"} />,
                  iconBg: useColorModeValue("yellow.100", "yellow.900"),
                  text: "Business Planning",
                },
                {
                  icon: <Icon as={IoLogoBitcoin} color={"green.500"} />,
                  iconBg: useColorModeValue("green.100", "green.900"),
                  text: "Financial Planning",
                },
              ]}
            />
          </Container>
        </Section>

        {/* ------------------------------ CTA ----------------------------- */}
        <Section>
          <Container maxWidth="container.xl">
            <Stack
              align="center"
              textAlign={["center", "center", "center", "start"]}
              justify="space-between"
              p={[0, 0, 0, 8]}
              direction={["column", "column", "column", "row"]}
              spacing={[4, 8, 8, 4]}
            >
              <Flex>
                <UndrawThoughtProcess
                  w="full"
                  maxW="300px"
                  color={`${color}.300`}
                />
              </Flex>
              <Flex maxWidth="450px" direction="column">
                <Heading as="h3" mb={2}>
                  Increase Your Conversions
                </Heading>
                <Text color={textColorMuted} fontSize="20px">
                  You can instantly access the digital marketing roadmap
                  designed specifically for your business.
                </Text>
              </Flex>
              <Flex
                // maxWidth="300px"
                // width="full"
                align="center"
                justify="center"
              >
                <Button
                  onMouseDown={ctaHandler}
                  px="10"
                  colorScheme={color}
                  size="lg"
                >
                  Purchase Now
                </Button>
              </Flex>
            </Stack>
          </Container>
        </Section>
      </chakra.main>
    </>
  );
};

export default MarketingPage;
