import { IoCheckmarkCircleSharp, IoCloseCircle } from "@react-icons";

import React, { useContext, memo, useState } from "react";

import { motion } from "framer-motion";

import { NextSeo } from "next-seo";

import { ChevronRightIcon } from "@chakra-ui/icons";
import {
  Box,
  BoxProps,
  Button,
  chakra,
  ChakraProps,
  Container,
  Flex,
  Heading,
  Icon,
  SimpleGrid,
  Switch,
  Tag,
  Text,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  ThemingProps,
  useColorModeValue,
  VStack,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";

import Logo1 from "@definitions/brands/logo-1";
import Logo2 from "@definitions/brands/logo-2";
import Logo3 from "@definitions/brands/logo-3";
import Logo4 from "@definitions/brands/logo-4";
import Logo5 from "@definitions/brands/logo-5";
import { ThemeColorContext } from "@definitions/context/theme";
import Site from "@definitions/site";
import faq from "@definitions/site/faq";
import { __DEV__ } from "@definitions/utils";

import Annotation from "@components/annotation";
import PageTitle from "@components/page-title";
import { PricingSimpleCard } from "@components/pricing/pricing-simple-card";

import Layout from "@layouts/default";

export const MotionBox = motion<BoxProps>(Box);

const PricingPage = (): JSX.Element => {
  const [isAnnually, setIsAnnually] = useState(false);
  const theme = useContext(ThemeColorContext);
  const color = theme.colorScheme; // global default primary theme color

  const plans = [
    {
      title: "Community",
      description: "Suitable for beginners",
      price: 9,
      popular: false,
      currency: "€",
      annuallyPrice: 90,
      features: [
        "10 Credits",
        "1 Brand",
        "Unlimited Generations",
        "Unlimited Boards",
        "Social Media Integrations",
      ],
    },
    {
      title: "Team",
      description: "Suitable for Team",
      price: 19,
      popular: true,
      currency: "€",
      annuallyPrice: 190,
      features: [
        "100 Credits",
        "10 Brand",
        "Unlimited Generations",
        "Unlimited Boards",
        "Social Media Integrations",
        "Team Collaboration",
        "Beta Features",
      ],
    },
    {
      title: "Enterprise",
      description: "Suitable for Companies",
      price: 39,
      popular: false,
      currency: "€",
      annuallyPrice: 390,
      features: [
        "Unlimited Credits",
        "Unlimited Brand",
        "Unlimited Generations",
        "Unlimited Boards",
        "Social Media Integrations",
        "Team Collaboration",
        "Commercial license",
        "All Features",
      ],
    },
  ];
  const planDetails = [
    { title: "Cross-platform tool", details: [true, true, true] },
    { title: "14-days free trial", details: [true, true, undefined] },
    { title: "No user limit", details: [undefined, true, true] },
    { title: "Online Tutorials", details: [false, true, true] },
    { title: "Debranding", details: [undefined, "Plugin", true] },
    { title: "Guaranteed 100% uptime", details: [false, true, true] },
    { title: "256-bit encryption", details: [false, false, true] },
    { title: "Long-term support", details: ["Community", true, true] },
    { title: "SEO Friendly", details: [false, true, true] },
    { title: "GDPR compliant", details: [false, true, true] },
  ];

  // Style
  const activeBG = useColorModeValue(`${color}.400`, `${color}.800`);

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
      <NextSeo
        title="Pricing"
        description="Mercury Pricing Example Page - Check out our price plans and choose the one that works best for you."
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
        <VStack align="stretch" mb={[10, 20, 32]} spacing={[10, 20, 32]}>
          <PageTitle
            title="Choose the best plan for you"
            color="white"
            bg={activeBG}
          >
            <Text maxWidth={640} fontSize="xl">
              Whether you are a freelance designer or an enterprise, we have an
              affordable pricing plan that best fits your needs
            </Text>
          </PageTitle>

          {/* ------------------------ Pricing Plans ----------------------- */}
          <Box>
            <Container maxWidth="container.xl">
              <Flex overflow="hidden" py={0} pos="relative" justify="center">
                <Box>Monthly</Box>
                <Box mb={[2, 4, 6]}>
                  <Switch
                    onChange={(e) => setIsAnnually(e.target.checked)}
                    mx={2}
                    colorScheme={color}
                    size="md"
                  />
                </Box>
                <Box pos="relative">
                  Annually
                  <Box
                    w="90px"
                    left={["20px", "20px", "40px"]}
                    top="-30px"
                    pos="absolute"
                  >
                    <Annotation
                      transform="scale(1,-1) rotate(45deg)"
                      bottom="unset"
                      left="-40%"
                      color="gray.400"
                    >
                      <Tag colorScheme="green">Save up to 10%</Tag>
                    </Annotation>
                  </Box>
                </Box>
              </Flex>
              <Wrap
                w="full"
                justify="center"
                align="end"
                spacing={[5, 5, 10, 10]}
                mx={-1}
              >
                {plans.map((plan, idx) => (
                  <WrapItem key={idx} w="full" maxWidth={"340px"}>
                    <PricingSimpleCard
                      maxWidth="full"
                      popular={plan.popular}
                      type={plan.title}
                      title={plan.title}
                      colorScheme={color}
                      price={plan.price}
                      currency={plan.currency}
                      period="mo."
                      isAnnually={isAnnually}
                      description={plan.description}
                      annuallyText="Billed Anually"
                      annuallyPrice={plan.annuallyPrice}
                      actionText="Start your trial"
                      onClick={pricingButtonAct}
                      features={plan.features}
                    />
                  </WrapItem>
                ))}
              </Wrap>
              <Flex justify="center" mt="10">
                <Box
                  p={4}
                  px={[4, 5, 10]}
                  borderWidth="1px"
                  rounded={["lg", "full", "full"]}
                  color={useColorModeValue("gray.500", "whiteAlpha.700")}
                  borderColor={useColorModeValue("gray.400", "gray.600")}
                >
                  <Text display="inline" mr={2}>
                    Would you like us to contact you to get information about
                    our trial version?
                  </Text>
                  <Button
                    colorScheme={color}
                    rightIcon={<ChevronRightIcon />}
                    variant="link"
                  >
                    Contact form
                  </Button>
                </Box>
              </Flex>
            </Container>
          </Box>

          {/* --------------------------- Clients -------------------------- */}
          <Box py="20" bg={useColorModeValue(`${color}.50`, `${color}.900`)}>
            <Container maxWidth="container.xl">
              <VStack>
                <Tag colorScheme={color}>Enterprise</Tag>
                <Heading fontWeight="400" fontSize="3xl">
                  Business Grade Quality For{" "}
                  <Text fontWeight="600" as="span">
                    All Plans
                  </Text>
                </Heading>
                <Text
                  color={useColorModeValue("gray.500", "whiteAlpha.700")}
                  fontSize="xl"
                >
                  Build a beautiful, modern website with our flexible Chakra UI
                  components all built from scratch.
                </Text>
                <Box>
                  <Wrap
                    color={useColorModeValue("gray.500", "gray.300")}
                    mx={-1}
                    mt={10}
                    align="center"
                    justify="center"
                    spacing={10}
                  >
                    <WrapItem>
                      <Logo1 color="current" />
                    </WrapItem>
                    <WrapItem>
                      <Logo2 color="current" />
                    </WrapItem>
                    <WrapItem>
                      <Logo3 color="current" />
                    </WrapItem>
                    <WrapItem>
                      <Logo4 color="current" />
                    </WrapItem>
                    <WrapItem>
                      <Logo5 color="current" />
                    </WrapItem>
                  </Wrap>
                </Box>
                <Box>
                  <Text
                    color={useColorModeValue("gray.500", "whiteAlpha.600")}
                    mt={5}
                  >
                    Open Source, enterprise and trusted by over 43,250 clients
                  </Text>
                </Box>
              </VStack>
            </Container>
          </Box>

          {/* ----------------------- Detailed Plans ----------------------- */}
          <Box>
            <Container maxWidth="container.xl">
              <VStack
                overflowX={["auto"]}
                alignItems={["start", "start", "center", "center"]}
              >
                <Tag colorScheme={color}>Review</Tag>
                <Heading fontWeight="400" fontSize="2xl">
                  Review All Plans
                </Heading>
                <Table variant="striped">
                  <Thead>
                    <Tr>
                      <Th></Th>
                      {plans.map((p, idx) => (
                        <Th key={idx} isNumeric>
                          <Flex mb="2" align="center" justify="end">
                            <Text mr={2}>{p.title}</Text>
                            {p.popular && (
                              <Tag
                                size="sm"
                                variant="solid"
                                textTransform="capitalize"
                                borderRadius="full"
                                color={useColorModeValue(
                                  "orange.600",
                                  "orange.300",
                                )}
                                bg={useColorModeValue(
                                  "orange.200",
                                  "orange.800",
                                )}
                              >
                                Popular
                              </Tag>
                            )}
                          </Flex>
                          <Text
                            color={useColorModeValue("gray.500", "gray.300")}
                          >
                            {p.currency}
                            {p.price}/Month
                          </Text>
                        </Th>
                      ))}
                    </Tr>
                  </Thead>
                  <Tbody>
                    {planDetails.map((p, idx) => (
                      <Tr key={idx}>
                        <Td>{p.title}</Td>
                        <Td isNumeric>
                          <TDData colorScheme={color} data={p.details[0]} />
                        </Td>
                        <Td isNumeric>
                          <TDData colorScheme={color} data={p.details[1]} />
                        </Td>
                        <Td isNumeric>
                          <TDData colorScheme={color} data={p.details[2]} />
                        </Td>
                      </Tr>
                    ))}
                  </Tbody>
                </Table>
              </VStack>
            </Container>
          </Box>

          {/* ----------------------------- FAQ ---------------------------- */}
          <Box>
            <Container maxWidth="container.lg">
              <VStack>
                <Flex
                  direction="column"
                  align="center"
                  justify="center"
                  mb={10}
                >
                  <Tag colorScheme={color}>FAQ</Tag>
                  <Heading fontWeight="400" fontSize="2xl">
                    Frequently Asked Questions
                  </Heading>
                  <Text
                    fontSize="lg"
                    color={useColorModeValue("gray.600", "whiteAlpha.600")}
                  >
                    Let us help answer the most common questions you might have.
                  </Text>
                </Flex>

                <SimpleGrid spacing={[5, 5, 10, 10]} columns={[1, 1, 2, 2, 2]}>
                  {faq.map((item, idx) => (
                    <Box key={idx}>
                      <Text mb={2} fontWeight="600" fontSize="lg">
                        {item.title}
                      </Text>
                      <Text
                        color={useColorModeValue("gray.600", "whiteAlpha.600")}
                      >
                        {item.body}
                      </Text>
                    </Box>
                  ))}
                </SimpleGrid>
                <Box>
                  <Text fontSize="lg" mt={10}>
                    If you have more questions, please <b>contact us</b>.
                  </Text>
                </Box>
              </VStack>
            </Container>
          </Box>

          {/* ----------------------------- CTA ---------------------------- */}
          <Box>
            <Container maxWidth="container.lg">
              <Flex
                px={[0, 10, 10, 20]}
                direction="column"
                align="center"
                justify="center"
                textAlign="center"
              >
                <Heading>
                  We have activated all the features for you, start the free
                  trial and enjoy the whole usage experience
                </Heading>
                <Button
                  colorScheme={color}
                  rounded="full"
                  py={6}
                  px={10}
                  mt={10}
                  onMouseDown={purchaseMouseDownHandler}
                >
                  Start Your Trial
                </Button>
              </Flex>
            </Container>
          </Box>
        </VStack>
      </chakra.main>
    </>
  );
};

interface ITDData {
  data: boolean | string | React.ReactNode;
}

const TDData: React.FC<ITDData & ChakraProps & ThemingProps> = memo(
  ({ data, colorScheme = "gray" }) => {
    const isBoolean = typeof data == "boolean";
    const isString = typeof data == "string";
    return (
      <>
        {isBoolean && data && (
          <Icon
            as={IoCheckmarkCircleSharp}
            color={useColorModeValue("green.400", "green.600")}
            w="20px"
            h="20px"
          />
        )}
        {isBoolean && !data && (
          <Icon
            as={IoCloseCircle}
            color={useColorModeValue("red.400", "red.600")}
            w="20px"
            h="20px"
          />
        )}
        {isString && data && (
          <Tag
            size="sm"
            borderRadius="full"
            variant="solid"
            color={useColorModeValue(
              `${colorScheme}.600`,
              `${colorScheme}.300`,
            )}
            bg={useColorModeValue(`${colorScheme}.100`, `${colorScheme}.800`)}
          >
            {data}
          </Tag>
        )}
      </>
    );
  },
);

if (__DEV__) {
  TDData.displayName = "TDData";
}

PricingPage.PageLayout = ({ children }: { children: React.ReactNode }) => (
  <Layout darkHeader={true}>{children}</Layout>
);

export default PricingPage;
