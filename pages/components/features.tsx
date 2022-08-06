import {
  IoAnalyticsSharp,
  IoLogoBitcoin,
  IoSearchSharp,
  FiMail,
  MdLanguage,
  FiDatabase,
  AiFillAndroid,
  AiFillApple,
  MdBuild,
  RiVirusFill,
  FcAssistant,
  FcMoneyTransfer,
  FcTodoList,
  RiTeamLine,
} from "@react-icons";

import { useContext } from "react";

import { NextSeo } from "next-seo";

import {
  Box,
  chakra,
  Container,
  Flex,
  Heading,
  Icon,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";

import { ThemeColorContext } from "@definitions/context/theme";

import { Section, SectionHeading, SectionSubHeading } from "@components/common";
import Counter from "@components/counter";
import { FeaturesCard } from "@components/features/features-card";
import { FeaturesGrid } from "@components/features/features-grid";
import { FeaturesTwoColumnsImage } from "@components/features/features-two-columns-image";
import Highlight from "@components/highlight";
import PageTitle from "@components/page-title";

import FeaturesImage from "@assets/images/blog-post.jpg?resize&img";

const FeaturesPage: React.FC = (): JSX.Element => {
  const theme = useContext(ThemeColorContext);
  const color = theme.colorScheme; // global default primary theme color
  return (
    <>
      <NextSeo
        title="Features Component"
        description="Features Component Examples"
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
          title="Features Component"
          body={
            <Text as="div">
              On this page, you will find{" "}
              <Text as="div" display="inline-block" color="green.400">
                <Highlight strokeWidth={2}>
                  <b>4 examples</b>
                </Highlight>
              </Text>{" "}
              of features component that you can easily use on your pages.
            </Text>
          }
        />
        <Container mt={20} mb={40} maxW="container.xl">
          <SectionHeading>Simple Features Card Examples</SectionHeading>
          <Stack
            direction={{ base: "column", md: "row" }}
            justify={{ base: "center" }}
            alignItems={"center"}
            spacing={{ base: 10, md: 32 }}
          >
            <FeaturesCard
              direction="column"
              p={10}
              border="1px solid"
              rounded="xl"
              borderColor="blackAlpha.100"
              maxWidth="345px"
              boxShadow="2xl"
              header={
                <Heading fontSize="28" as="h3">
                  Feature{" "}
                  <Text fontWeight="300" as="span">
                    Heading
                  </Text>
                </Heading>
              }
              body={
                <Text>
                  <Text fontWeight="bold" as="span">
                    Feature card body
                  </Text>{" "}
                  for detailed monitoring and real-time analytics
                </Text>
              }
              footer={
                <Text color="gray.500" fontSize="14">
                  Feature card footer for notes and details
                </Text>
              }
            />

            <FeaturesCard
              flexDirection="column"
              p={10}
              border="1px solid"
              rounded="xl"
              borderColor="blackAlpha.100"
              maxWidth="345px"
              // flex="1"
              alignItems={"center"}
              justifyContent={"center"}
              boxShadow="2xl"
              header={
                <Flex direction={{ base: "column", md: "row" }} align="center">
                  <Flex
                    w={16}
                    h={16}
                    align={"center"}
                    justify={"center"}
                    color={"white"}
                    rounded={"full"}
                    bg={"gray.100"}
                    mb={1}
                    mr={3}
                  >
                    <Icon as={FcAssistant} w={10} h={10} />
                  </Flex>
                  <Heading textTransform="uppercase" as="h3" fontSize="14">
                    Heading With Icon
                  </Heading>
                </Flex>
              }
              body={
                <Text>
                  You can create whatever content you want in the{" "}
                  <Text fontWeight="bold" as="span">
                    features card body
                  </Text>{" "}
                </Text>
              }
            />
          </Stack>
        </Container>

        <Container my={[10]} maxW="container.xl">
          <SectionHeading>Two Columns Example</SectionHeading>
          <Box my={[0, 20, 32]}>
            <FeaturesTwoColumnsImage
              image={FeaturesImage}
              title="A digital Product design agency"
              // tag={"Our Story"}
              tag={
                <Text
                  textTransform={"uppercase"}
                  color={"green.400"}
                  fontWeight={600}
                  fontSize={"sm"}
                  bg={useColorModeValue("green.50", "green.900")}
                  p={2}
                  alignSelf={"flex-start"}
                  rounded={"md"}
                >
                  Our Story
                </Text>
              }
              body="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua."
              features={[
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
                {
                  icon: <Icon as={IoSearchSharp} color={"purple.500"} />,
                  iconBg: useColorModeValue("purple.100", "purple.900"),
                  text: "Market Analysis",
                },
              ]}
            />
          </Box>
        </Container>

        {/* Features List Grid */}
        <Section m={0}>
          <Box bg={useColorModeValue("gray.50", "gray.700")} py={32} pb={40}>
            <Container maxW="container.xl">
              <SectionHeading>Features List Grid</SectionHeading>
              <FeaturesGrid
                // icon={<Icon color={"green.400"} as={CheckIcon} />}
                columns={[1, 1, 2, 3, 4]}
                features={[
                  {
                    title: "Email Notifications",
                    text: "Allow team members to receive email notifications of important changes they need to be aware of",
                    icon: (
                      <Icon as={FiMail} fontSize={18} color={"purple.400"} />
                    ),
                  },
                  {
                    title: "Multiple Teams Support",
                    text: "Allow multiple teams to collaborate more effectively when delivering projects together.",
                    icon: (
                      <Icon
                        as={RiTeamLine}
                        fontSize={18}
                        color={"purple.400"}
                      />
                    ),
                  },
                  {
                    title: "Multi-Language Support",
                    text: "We support English, French, German, Russian languages to allow you to use Mercury in your native language",
                    icon: (
                      <Icon
                        as={MdLanguage}
                        fontSize={18}
                        color={"purple.400"}
                      />
                    ),
                  },
                  {
                    title: "Rest API",
                    text: "API allows you to quickly extract data from process. It can be easily used for any programming language and platform",
                    icon: (
                      <Icon
                        as={FiDatabase}
                        fontSize={18}
                        color={"purple.400"}
                      />
                    ),
                  },
                  {
                    title: "Android App",
                    text: "Use Mercury on your Android device whenever and wherever",
                    icon: (
                      <Icon
                        as={AiFillAndroid}
                        fontSize={18}
                        color={"purple.400"}
                      />
                    ),
                  },
                  {
                    title: "IOS App",
                    text: "Use Mercury on your Apple device whenever and wherever",
                    icon: (
                      <Icon
                        as={AiFillApple}
                        fontSize={18}
                        color={"purple.400"}
                      />
                    ),
                  },
                  {
                    title: "Test Plans",
                    text: "Increase efficiency and traceability by running tests",
                    icon: (
                      <Icon as={MdBuild} fontSize={18} color={"purple.400"} />
                    ),
                  },
                  {
                    title: "Risk Management",
                    text: "Use our risk management solution to track potential risks",
                    icon: (
                      <Icon
                        as={RiVirusFill}
                        fontSize={18}
                        color={"purple.400"}
                      />
                    ),
                  },
                ]}
              />
            </Container>
          </Box>
        </Section>

        {/* Simple grid examples */}
        <Section m={0} py={32} pb={40}>
          <Container maxW="container.xl">
            <SectionHeading>Simple grid example</SectionHeading>

            <Stack
              direction={{ base: "column", lg: "row" }}
              justify={{ base: "center" }}
              alignItems={"center"}
              spacing={{ base: 10, lg: 32 }}
            >
              <FeaturesCard
                direction="column"
                maxWidth="320px"
                header={
                  <Flex
                    direction={{ base: "column", lg: "row" }}
                    align="center"
                  >
                    <Flex
                      w={16}
                      h={16}
                      align={"center"}
                      justify={"center"}
                      rounded={"full"}
                      bg={useColorModeValue("gray.100", "gray.700")}
                      mb={[4, 1]}
                      mr={[0, 0, 0, 3]}
                    >
                      <Icon as={FcAssistant} w={10} h={10} />
                    </Flex>
                    <Heading fontWeight="500" as="h3" fontSize="16">
                      Lifetime support
                    </Heading>
                  </Flex>
                }
                body={
                  <Text
                    textAlign={{ base: "center", lg: "left" }}
                    color={useColorModeValue("gray.600", "gray.400")}
                  >
                    You can use our products with confidence with our lifetime
                    support policy.
                  </Text>
                }
              />
              <FeaturesCard
                direction="column"
                maxWidth="320px"
                header={
                  <Flex
                    direction={{ base: "column", lg: "row" }}
                    align="center"
                  >
                    <Flex
                      w={16}
                      h={16}
                      align={"center"}
                      justify={"center"}
                      rounded={"full"}
                      bg={useColorModeValue("gray.100", "gray.700")}
                      mb={1}
                      mr={[0, 0, 0, 3]}
                    >
                      <Icon as={FcMoneyTransfer} w={10} h={10} />
                    </Flex>
                    <Heading fontWeight="500" as="h3" fontSize="16">
                      Money back guarantee
                    </Heading>
                  </Flex>
                }
                body={
                  <Text
                    textAlign={{ base: "center", lg: "left" }}
                    color={useColorModeValue("gray.600", "gray.400")}
                  >
                    We aim to maximize customer satisfaction with a money-back
                    guarantee.
                  </Text>
                }
              />
              <FeaturesCard
                direction="column"
                maxWidth="320px"
                header={
                  <Flex
                    direction={{ base: "column", lg: "row" }}
                    align={"center"}
                  >
                    <Flex
                      w={16}
                      h={16}
                      align={"center"}
                      justify={"center"}
                      rounded={"full"}
                      bg={useColorModeValue("gray.100", "gray.700")}
                      mb={1}
                      mr={[0, 0, 0, 3]}
                    >
                      <Icon as={FcTodoList} w={10} h={10} />
                    </Flex>
                    <Heading
                      textAlign={{ base: "center", lg: "left" }}
                      fontWeight="500"
                      as="h3"
                      fontSize="16"
                    >
                      Easy to customize
                    </Heading>
                  </Flex>
                }
                body={
                  <Text
                    textAlign={{ base: "center", lg: "left" }}
                    color={useColorModeValue("gray.600", "gray.400")}
                  >
                    We have designed interfaces that you can easily customize
                    with simple code blocks.
                  </Text>
                }
              />
            </Stack>
          </Container>
        </Section>

        <Section
          m={0}
          py={32}
          pb={40}
          bg={useColorModeValue("gray.50", "gray.800")}
        >
          <Container maxW="container.xl">
            <SectionSubHeading mb={10}>Features Box Example</SectionSubHeading>

            <Stack
              direction={{ base: "column", lg: "row" }}
              justify={{ base: "center" }}
              alignItems={"center"}
              spacing={10}
              // mb={20}
            >
              <FeaturesCard
                p={[5, 8, 10]}
                direction="column"
                flex={1}
                border="1px solid"
                rounded="xl"
                borderColor="blackAlpha.100"
                maxWidth="600px"
                boxShadow={["md", "md", "lg", "xl"]}
                bg={useColorModeValue("white", "gray.900")}
                header={
                  <Flex direction={"column"}>
                    <Flex
                      w={16}
                      h={16}
                      align="center"
                      justify="center"
                      rounded="full"
                      bg={useColorModeValue("gray.100", "gray.700")}
                      mb={3}
                      mr={[0, 0, 0, 3]}
                    >
                      <Icon as={FcAssistant} w={10} h={10} />
                    </Flex>
                    <Heading fontWeight="500" as="h3" fontSize="16">
                      Lifetime support
                    </Heading>
                  </Flex>
                }
                body={
                  <Text color={useColorModeValue("gray.600", "gray.400")}>
                    You can use our products with confidence with our lifetime
                    support policy.
                  </Text>
                }
              />
              <FeaturesCard
                p={[5, 8, 10]}
                direction="column"
                flex={1}
                border="1px solid"
                rounded="xl"
                borderColor="blackAlpha.100"
                maxWidth="600px"
                boxShadow={["md", "md", "lg", "2xl"]}
                bg={useColorModeValue("white", "gray.900")}
                transform={{ base: "scale(1)", lg: "scale(1.1)" }}
                header={
                  <Flex direction="column">
                    <Flex
                      w={16}
                      h={16}
                      align="center"
                      justify="center"
                      rounded="full"
                      bg={useColorModeValue("gray.100", "gray.700")}
                      mr={[0, 0, 0, 3]}
                      mb={3}
                    >
                      <Icon as={FcMoneyTransfer} w={10} h={10} />
                    </Flex>
                    <Heading fontWeight="500" as="h3" fontSize="16">
                      Money back guarantee
                    </Heading>
                  </Flex>
                }
                body={
                  <Text color={useColorModeValue("gray.600", "gray.400")}>
                    We aim to maximize customer satisfaction with a money-back
                    guarantee.
                  </Text>
                }
              />
              <FeaturesCard
                p={[5, 8, 10]}
                direction="column"
                flex={1}
                border="1px solid"
                rounded="xl"
                borderColor="blackAlpha.100"
                maxWidth="600px"
                boxShadow={["md", "md", "lg", "xl"]}
                bg={useColorModeValue("white", "gray.900")}
                header={
                  <Flex direction="column">
                    <Flex
                      w={16}
                      h={16}
                      align={"center"}
                      justify={"center"}
                      rounded={"full"}
                      bg={useColorModeValue("gray.100", "gray.700")}
                      mr={[0, 0, 0, 3]}
                      mb={3}
                    >
                      <Icon as={FcTodoList} w={10} h={10} />
                    </Flex>
                    <Heading fontWeight="500" as="h3" fontSize="16">
                      Easy to customize
                    </Heading>
                  </Flex>
                }
                body={
                  <Text color={useColorModeValue("gray.600", "gray.400")}>
                    We have designed interfaces that you can easily customize
                    with simple code blocks.
                  </Text>
                }
              />
            </Stack>
          </Container>
        </Section>

        <Section m={0} py={32} pb={40}>
          <SectionSubHeading mb={10}>Features With Counter</SectionSubHeading>

          <Stack
            direction={{ base: "column", lg: "row" }}
            justify={{ base: "center" }}
            alignItems={"center"}
            spacing={10}
            mb={20}
          >
            <FeaturesCard
              p={[5, 8, 10]}
              direction="column"
              flex={1}
              border="1px solid"
              rounded="xl"
              borderColor="blackAlpha.100"
              maxWidth="600px"
              boxShadow={["md", "md", "lg", "xl"]}
              bg={useColorModeValue("white", "gray.700")}
              header={
                <Heading fontWeight="600" as="h3">
                  <Text as="p">We have acquired</Text>
                  <Text as="span">+</Text>
                  <Counter
                    display="inline"
                    fontWeight="800"
                    from={1}
                    delay={0.25}
                    to={32}
                    decimals={0}
                  >
                    0
                  </Counter>
                  <Text fontWeight="800" as="span">
                    M{" "}
                  </Text>
                  <Text as="span">registered users</Text>
                </Heading>
              }
              body={
                <Text color={useColorModeValue("gray.600", "gray.400")}>
                  Mercedem aut nummos unde unde extricat, amaras. Morbi odio
                  eros, volutpat ut pharetra vitae, lobortis sed nibh.
                </Text>
              }
            />
            <FeaturesCard
              p={[5, 8, 10]}
              direction="column"
              flex={1}
              border="1px solid"
              rounded="xl"
              borderColor="blackAlpha.100"
              maxWidth="600px"
              boxShadow={["md", "md", "lg", "xl"]}
              bg={useColorModeValue("white", "gray.700")}
              header={
                <Heading fontWeight="600" as="h3">
                  <Text as="p">We managed to achieve</Text>
                  <Text as="span">almost </Text>
                  <Counter
                    display="inline"
                    fontWeight="800"
                    from={1}
                    delay={0.25}
                    duration={1.5}
                    to={89.9}
                    decimals={2}
                  >
                    0
                  </Counter>
                  <Text fontWeight="800" as="span">
                    %{" "}
                  </Text>
                  <Text as="span">recycling rate</Text>
                </Heading>
              }
              body={
                <Text color={useColorModeValue("gray.600", "gray.400")}>
                  Quae vero auctorem tractata ab fiducia dicuntur. Cras mattis
                  iudicium purus sit amet fermentum.
                </Text>
              }
            />
          </Stack>
        </Section>

        {/* <Box mt={10}>
          <Container maxW="container.xl">
            <SectionHeading>Features stats grid with image</SectionHeading>
          </Container>
          <FeaturesStatsGridWithImage />
        </Box> */}
      </chakra.main>
    </>
  );
};

export default FeaturesPage;
