import {
  SiBrandfolder,
  FaDev,
  AiOutlineFileSearch,
  BiSupport,
  FiUsers,
  BiCheckShield,
  BiTargetLock,
  BsSearch,
  BsBarChart,
  AiOutlineProfile,
  ImOffice,
  FiFileText,
  BsTools,
  FaRobot,
  IoPricetagsOutline,
  HiOutlineSupport,
  VscGitCompare,
  FiTrendingUp,
  FiServer,
  MdVpnLock,
} from "@react-icons";

import React, { useContext, memo } from "react";

import { IconType } from "react-icons";

import { NextSeo } from "next-seo";

import { ChevronRightIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  chakra,
  ChakraProps,
  Container,
  Flex,
  Heading,
  Icon,
  List,
  ListIcon,
  ListItem,
  SimpleGrid,
  Stack,
  Tag,
  Text,
  ThemingProps,
  useColorModeValue,
  useToken,
  VStack,
} from "@chakra-ui/react";

// import AirBNBLogo from "@definitions/brands/airbnb-color";
// import AlgoliaLogo from "@definitions/brands/algolia";
// import AmazonLogo from "@definitions/brands/amazon-color";
import Logo1 from "@definitions/brands/logo-1";
import Logo2 from "@definitions/brands/logo-2";
import Logo3 from "@definitions/brands/logo-3";
import Logo4 from "@definitions/brands/logo-4";
import Logo5 from "@definitions/brands/logo-5";
import Logo6 from "@definitions/brands/logo-6";
import Logo7 from "@definitions/brands/logo-7";
// import LyftLogo from "@definitions/brands/lyft-color";
// import WalmartLogo from "@definitions/brands/walmart-color";
import { ThemeColorContext } from "@definitions/context/theme";
import faq from "@definitions/site/faq";
import { __DEV__ } from "@definitions/utils";

import CarouselDefault from "@components/carousel/carousel-default";
import PageTitle from "@components/page-title";

import AudienceBG from "@assets/images/audience.png?&img";
import ClientsBG from "@assets/images/clients.png?&img";
import ContentBG from "@assets/images/content.png?&img";
import DocumentationBG from "@assets/images/documentation.png?&img";
import WorkflowBG from "@assets/images/workflow.png?&img";

const ServicesPage: React.FC = () => {
  const theme = useContext(ThemeColorContext);
  const color = theme.colorScheme; // global default primary theme color

  const textColor = useColorModeValue("gray.600", "gray.400");

  const spacingL1 = [5, 10, 16];

  return (
    <>
      <NextSeo title="Services" description="Mercury Services Example Page" />
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
          <PageTitle title=" We Design & Build Products For All">
            <Text color={textColor} maxWidth="660px" fontSize="xl">
              Whether you are a freelance designer or enterprise, you can
              prepare more professional and faster website by using Mercury.
            </Text>
          </PageTitle>

          {/* What We Do */}
          <WhatWeDoBlock
            colorScheme={color}
            color={textColor}
            title="Since 2010 we've helped over 1.2k customers build their awesome
          WebApps & Services"
            tag="What We Do"
            spacing={spacingL1}
            items={[
              {
                icon: FaDev,
                title: "High-tech Development",
                body: "Ab illo tempore, ab est sed immemorabili. Qui ipsorum lingua Celtae, nostra Galli appellantur.",
              },
              {
                icon: AiOutlineFileSearch,
                title: "SEO & Marketing",
                body: "Quae vero auctorem tractata ab fiducia dicuntur. Quisque placerat facilisis egestas cillum dolore.",
              },
              {
                icon: SiBrandfolder,
                title: "Company Branding",
                body: "Quae vero auctorem tractata ab fiducia dicuntur. Quisque placerat facilisis egestas cillum dolore.",
              },
              {
                icon: FiServer,
                title: "Technological Infrastructure",
                body: "Quae vero auctorem tractata ab fiducia dicuntur. Quisque placerat facilisis egestas cillum dolore.",
              },
              {
                icon: MdVpnLock,
                title: "Information security",
                body: "Quae vero auctorem tractata ab fiducia dicuntur. Quisque placerat facilisis egestas cillum dolore.",
              },
              {
                icon: BiSupport,
                title: "24x7 Premium Support v2",
                body: "Quae vero auctorem tractata ab fiducia dicuntur. Quisque placerat facilisis egestas cillum dolore.",
              },
            ]}
          />

          {/* Workflow & Documents */}
          <Box>
            <Container maxWidth="container.xl">
              <SimpleGrid columns={[1, 1, 2, 2]} spacing={10}>
                <InfoBox
                  image={WorkflowBG}
                  title="Mercury workflow"
                  body="Our team has developed over 300 products for startups and entreprise, creating a well-tested workflow."
                  button={
                    <Button
                      rightIcon={<ChevronRightIcon />}
                      fontWeight="400"
                      variant="solid"
                      bg="white"
                      _hover={{
                        bg: useColorModeValue("deepBlue.100", "deepBlue.50"),
                      }}
                    >
                      Learn More
                    </Button>
                  }
                  color="blackAlpha.800"
                  bgColor={useColorModeValue("#e0e9fa", "#88abec")}
                />
                <InfoBox
                  image={DocumentationBG}
                  title="Online Documentation"
                  body="We've written extensive documentation for components and
              tools so you can easily prepare your pages."
                  button={
                    <Button
                      rightIcon={<ChevronRightIcon />}
                      fontWeight="400"
                      variant="solid"
                      bg="white"
                      _hover={{
                        bg: "#CEE5D0",
                      }}
                    >
                      Review Documents
                    </Button>
                  }
                  color="blackAlpha.800"
                  bgColor={useColorModeValue("#eaf3ef", "#a9cebe")}
                />
              </SimpleGrid>
            </Container>
          </Box>

          {/* Built For Developers */}
          <Box bg={useColorModeValue("#F3F8FF", "gray.700")}>
            <Container py={20} maxWidth="container.lg">
              <VStack width="full" spacing={10}>
                <FeaturesBlock
                  title="Built For Developers"
                  body="We provide high quality and developer friendly templates"
                  spacing={spacingL1}
                  items={[
                    {
                      value: "271",
                      key: "Website",
                      title: "Web Design",
                      body: "Donec sed odio operae, eu vulputate felis rhoncus. Inmensae subtilitatis.",
                    },
                    {
                      value: "113",
                      key: "Mobile App",
                      title: "Mobile App Design",
                      body: "Donec sed odio operae, eu vulputate felis rhoncus. Inmensae subtilitatis.",
                    },
                    {
                      value: "8k",
                      key: "Customers",
                      title: "Digital Marketing",
                      body: "Donec sed odio operae, eu vulputate felis rhoncus. Inmensae subtilitatis.",
                    },
                    {
                      value: "85%",
                      key: "Efficient",
                      title: "Content Optimization",
                      body: "Donec sed odio operae, eu vulputate felis rhoncus. Inmensae subtilitatis.",
                    },
                  ]}
                />
                {/* Project Stats */}
                <ProjectStats
                  title="Upcoming Project"
                  body="We are working hard on our project, you can follow the statistics of the steps we have completed."
                  items={[
                    {
                      title: "178",
                      body: "Tasks",
                    },
                    {
                      title: "64",
                      body: "Test Cases",
                    },
                    {
                      title: "4GB",
                      body: "Uploads",
                    },
                  ]}
                  color={useColorModeValue("blackAlpha.800", "whiteAlpha.800")}
                  bg={useColorModeValue("white", "gray.600")}
                />
              </VStack>
            </Container>
          </Box>

          {/* Services and Tools */}
          <Box>
            <Container maxWidth="container.xl">
              <ServiceBox
                title="Let us help you choose the right tools according to your
                business goals"
                footnote="Trusted by 1.200+ individuals, businesses and freelancers. Excellent 4.7 out of 5 on CreativeMarket Based on 250 reviews."
                spacing={spacingL1}
                items={[
                  {
                    bg: "deepBlue.50",
                    color: "deepBlue.400",
                    image: AudienceBG,
                    icon: FiUsers,
                    subtitle: "Audience",
                    title: "You need all the statistics to know your audience",
                    list: [
                      { icon: BiTargetLock, title: "AI Smart targeting" },
                      { icon: BsBarChart, title: "Growth Analytics" },
                      { icon: BsSearch, title: "Influencer search" },
                      { icon: AiOutlineProfile, title: "Profile Analyzer" },
                    ],
                  },
                  {
                    bg: "#FFF5EB",
                    image: ClientsBG,
                    color: "orange.400",
                    icon: ImOffice,
                    subtitle: "Clients",
                    title:
                      "We have developed tools to increase customer satisfaction",
                    list: [
                      { icon: BsTools, title: "Advanced Manager" },
                      { icon: FaRobot, title: "Auto-replies Bot" },
                      { icon: HiOutlineSupport, title: "Web Help Desk" },
                    ],
                  },
                  {
                    bg: "#E4EFE7",
                    image: ContentBG,
                    color: "green.400",
                    icon: FiFileText,
                    subtitle: "Content",
                    title: "We have easy content publishing tools",
                    list: [
                      { icon: VscGitCompare, title: "Media Integration" },
                      { icon: IoPricetagsOutline, title: "Sales & Marketing" },
                      { icon: BiCheckShield, title: "Editorial Checks" },
                      { icon: FiTrendingUp, title: "Conversion Analysis" },
                    ],
                  },
                ]}
              />
            </Container>
          </Box>

          {/* Testimonials */}
          <Box>
            <ClientsBlock
              title="We create new opportunities with famous brands"
              body="We are expanding our network by collaborating with famous brands to create new opportunities for our customers in the global market."
              spacing={spacingL1}
              color={textColor}
              items={[
                {
                  colorScheme: "purple",
                  company: "Company 1",
                  logo: (
                    <Logo1
                      h={9}
                      w="full"
                      color={useColorModeValue(null, "whiteAlpha.700")}
                    />
                  ),
                  body: "Company Nihil hic munitissimus habendi senatus locus, nihil horum?",
                },
                {
                  colorScheme: "lightBlue",
                  company: "Company 2",
                  logo: (
                    <Logo2
                      h={9}
                      w="full"
                      color={useColorModeValue(null, "whiteAlpha.700")}
                    />
                  ),
                  body: "Company Nihil hic munitissimus habendi senatus locus, nihil horum?",
                },
                {
                  colorScheme: "teal",
                  company: "Company 3",
                  logo: (
                    <Logo3
                      h={9}
                      w="full"
                      color={useColorModeValue(null, "whiteAlpha.700")}
                    />
                  ),
                  body: "Company Nihil hic munitissimus habendi senatus locus, nihil horum?",
                },
                {
                  colorScheme: "pink",
                  company: "Company 4",
                  logo: (
                    <Logo4
                      h={9}
                      w="full"
                      color={useColorModeValue(null, "whiteAlpha.700")}
                    />
                  ),
                  body: "Company Nihil hic munitissimus habendi senatus locus, nihil horum?",
                },
                {
                  colorScheme: "amber",
                  company: "Company 5",
                  logo: (
                    <Logo5
                      h={9}
                      w="full"
                      color={useColorModeValue(null, "whiteAlpha.700")}
                    />
                  ),
                  body: "Company Nihil hic munitissimus habendi senatus locus, nihil horum?",
                },
                {
                  colorScheme: "indigo",
                  company: "Company 6",
                  logo: (
                    <Logo6
                      h={9}
                      w="full"
                      color={useColorModeValue(null, "whiteAlpha.700")}
                    />
                  ),
                  body: "Company Nihil hic munitissimus habendi senatus locus, nihil horum?",
                },
                {
                  colorScheme: "red",
                  company: "Company 7",
                  logo: (
                    <Logo7
                      h={9}
                      w="full"
                      color={useColorModeValue(null, "whiteAlpha.700")}
                    />
                  ),
                  body: "Company Nihil hic munitissimus habendi senatus locus, nihil horum?",
                },
              ]}
            />
          </Box>

          {/* FAQ */}
          <FaqBlock
            // bg="pink.100"
            title="Need any Help?"
            body=" Read our blog to learn more about some new techniques for development. If you have any questions about our service, visit our FAQ section."
            spacing={spacingL1}
            items={faq}
          />

          {/* CTA */}
          <CTABlock
            colorScheme={color}
            title="Build your website and start expanding your portfolio"
            button={
              <>
                <Button
                  width="full"
                  fontSize="sm"
                  fontWeight="700"
                  colorScheme={color}
                  maxWidth={["full", "full", 220]}
                  textTransform="uppercase"
                >
                  Get Started
                </Button>
                <Button
                  width="full"
                  fontSize="sm"
                  fontWeight="700"
                  maxWidth={["auto", "full", 220]}
                  textTransform="uppercase"
                  bg="white"
                  color="blackAlpha.700"
                  _hover={{
                    bg: "whiteAlpha.800",
                  }}
                >
                  View Plans
                </Button>
              </>
            }
          />
        </VStack>
      </chakra.main>
    </>
  );
};

/* -------------------------------------------------------------------------- */
/*                                 PAGE BLOCKS                                */
/*    All page content can be edited via props. You do not need to make any   */
/*    changes in this part if you are not going to make design arrangements   */
/* -------------------------------------------------------------------------- */

const WhatWeDoBlock: React.FC<
  {
    tag?: string;
    title: string;
    items: { icon: IconType; title: string; body: string }[];
    spacing: number | number[];
  } & ChakraProps &
    ThemingProps
> = memo(({ tag, title, items = [], color, spacing, colorScheme, ...rest }) => {
  return (
    <Box {...rest}>
      <VStack spacing={spacing}>
        <Container maxWidth="container.sm">
          <VStack textAlign="center" justify="center">
            {tag && (
              <Tag
                fontSize="sm"
                fontWeight="600"
                textTransform="uppercase"
                colorScheme={colorScheme}
              >
                {tag}
              </Tag>
            )}
            {title && <Heading>{title}</Heading>}
          </VStack>
        </Container>

        {/* Items */}
        {items && (
          <Container maxWidth="container.lg">
            <SimpleGrid columns={[1, 1, 2]} spacing={10}>
              {items.map((item) => (
                <Box key={item.title}>
                  <Flex>
                    <Icon
                      color={`${colorScheme}.300`}
                      mr="5"
                      w="10"
                      h="10"
                      as={item.icon}
                    />
                    <Box>
                      <Text fontSize="18" mb={3} fontWeight="bold">
                        {item.title}
                      </Text>
                      <Text color={color} fontSize="17">
                        {item.body}
                      </Text>
                    </Box>
                  </Flex>
                </Box>
              ))}
            </SimpleGrid>
          </Container>
        )}
      </VStack>
    </Box>
  );
});

if (__DEV__) {
  WhatWeDoBlock.displayName = "WhatWeDoBlock";
}

const InfoBox: React.FC<
  {
    title: string;
    body: string;
    button: React.ReactNode;
    image: imageObject;
  } & ChakraProps &
    ThemingProps
> = memo(({ title, body, button, image, ...rest }) => {
  return (
    <Box
      rounded="lg"
      // color="blackAlpha.800"
      // bg={useColorModeValue("#e0e9fa", "#88abec")}
      p={8}
      bgImage={image ? `url(${image})` : null}
      bgRepeat="no-repeat"
      bgPosition="right center"
      bgSize="contain"
      {...rest}
    >
      <Flex>
        <VStack maxWidth={["full", "80%", "70%"]} align="start">
          {title && (
            <Heading
              as="h3"
              lineHeight="1"
              fontSize={["2xl", "3xl", "1.75rem"]}
            >
              {title}
            </Heading>
          )}
          {body && <Text fontSize="md">{body}</Text>}
          {button}
        </VStack>
      </Flex>
    </Box>
  );
});

if (__DEV__) {
  InfoBox.displayName = "InfoBox";
}

const FeaturesBlock: React.FC<
  {
    title: string;
    body: string;
    items: { key: string; value: string; title: string; body: string }[];
    spacing?: number | number[];
  } & ChakraProps &
    ThemingProps
> = memo(({ title, body, items = [], spacing }) => {
  return (
    <VStack width="full" spacing={spacing}>
      <Box textAlign="center">
        {title && (
          <Heading as="h3" fontWeight="500" fontSize={["2xl", "3xl", "3xl"]}>
            {title}
          </Heading>
        )}
        {body && (
          <Text
            mx="auto"
            fontSize="xl"
            maxWidth="500px"
            color={useColorModeValue("gray.600", "gray.300")}
          >
            {body}
          </Text>
        )}
      </Box>

      <SimpleGrid w="full" columns={[1, 1, 2, 2]} spacing={10}>
        {items.map((item, idx) => (
          <Box
            p={8}
            key={idx}
            flex="1"
            shadow="md"
            rounded="lg"
            bg={useColorModeValue("white", "gray.600")}
            color={useColorModeValue("blackAlpha.800", "whiteAlpha.800")}
          >
            <Flex align="center" direction={["column", "row", "column", "row"]}>
              <Flex
                align="center"
                minWidth="128px"
                textAlign="center"
                mr={[0, 0, 0, 10]}
                mb={[10, 0, 10, 0]}
                direction={["row", "column", "row", "column"]}
              >
                <Text lineHeight="1" fontWeight="600" fontSize="2.5rem">
                  {item.value}
                </Text>
                <Text fontWeight="500" fontSize="1rem">
                  {item.key}
                </Text>
              </Flex>
              <Box>
                <Text fontWeight="600">{item.title}</Text>
                <Text>{item.body}</Text>
              </Box>
            </Flex>
          </Box>
        ))}
      </SimpleGrid>
    </VStack>
  );
});

if (__DEV__) {
  FeaturesBlock.displayName = "FeaturesBlock";
}

const ProjectStats: React.FC<
  {
    title: string;
    body: string;
    items: { title: string; body: string }[];
  } & ChakraProps &
    ThemingProps
> = memo(({ title, body, items = [], ...rest }) => {
  return (
    <Box p={8} w="full" shadow="md" rounded="lg" {...rest}>
      <Flex direction={["column", "column", "column", "row"]} align="center">
        {items && (
          <Flex
            flex="1"
            direction={["column", "row", "row"]}
            align="center"
            justify="center"
            mb={[5, 5, 5, 0]}
          >
            {items.map((item, idx) => (
              <Box key={idx} textAlign="center" mb={[5, 0, 0]} mr={[0, 10, 10]}>
                <Text lineHeight="1" fontWeight="600" fontSize="2.5rem">
                  {item.title}
                </Text>
                <Text fontWeight="500" fontSize="1rem">
                  {item.body}
                </Text>
              </Box>
            ))}
          </Flex>
        )}

        <Box flex="1">
          <Text fontSize="xl" fontWeight="600">
            {title}
          </Text>
          <Text>{body}</Text>
        </Box>
      </Flex>
    </Box>
  );
});

if (__DEV__) {
  ProjectStats.displayName = "ProjectStats";
}

const ServiceBox: React.FC<
  {
    title: string;
    body?: string;
    footnote: string;
    items: {
      bg: string;
      color: string;
      image: imageObject;
      icon: IconType;
      subtitle: string;
      title: string;
      list: {
        icon: IconType;
        title: string;
      }[];
    }[];
    spacing?: number[];
  } & ChakraProps &
    ThemingProps
> = memo(({ title, body, footnote, items = [], spacing }) => {
  return (
    <VStack width="full" spacing={spacing}>
      {title && (
        <Heading
          as="h3"
          mx="auto"
          maxWidth="600px"
          fontWeight="400"
          textAlign="center"
          fontSize={["2xl", "3xl", "3xl"]}
        >
          {title}
        </Heading>
      )}

      {body}

      <SimpleGrid spacing={[5, 5, 10, 10]} columns={[1, 1, 2, 3, 3]}>
        {items.map((item) => (
          <Box
            key={item.title}
            p={8}
            rounded="lg"
            bgColor={item.bg}
            bgImage={`url(${item.image})`}
            bgRepeat="no-repeat"
            bgPosition="right bottom"
            bgSize="50%"
          >
            <Flex mb={5} color={item.color} align="center">
              <Icon fontSize="1.3rem" mr={2} as={item.icon} />
              <Text fontSize="1rem" fontWeight="600" textTransform="uppercase">
                {item.subtitle}
              </Text>
            </Flex>
            <Heading color="blackAlpha.800" mb={7} as="h3" fontSize="2xl">
              {item.title}
            </Heading>
            <List color="blackAlpha.800" spacing={3}>
              {item.list.map((i, idx) => (
                <ListItem key={idx}>
                  <ListIcon fontSize="1.3rem" as={i.icon} color={item.color} />
                  {i.title}
                </ListItem>
              ))}
            </List>
          </Box>
        ))}
      </SimpleGrid>
      {footnote && (
        <Text color="gray.600" textAlign="center">
          {footnote}
        </Text>
      )}
    </VStack>
  );
});

if (__DEV__) {
  ServiceBox.displayName = "ServiceBox";
}

const ClientsBlock: React.FC<
  {
    title: string;
    body?: string;
    spacing?: number[];
    items: {
      colorScheme: string;
      bg?: string;
      logo: React.ReactNode;
      body: string;
      company?: string;
      button?: React.ReactNode;
    }[];
  } & ChakraProps &
    ThemingProps
> = memo(({ title, body, items = [], color, spacing, ...rest }) => {
  const accentColor = (colorScheme: string) => {
    const colorLight = useToken("colors", `${colorScheme}.600`);
    const colorDark = useToken("colors", `${colorScheme}.300`);
    return useColorModeValue(colorLight, colorDark);
  };

  const accentBG = (colorScheme: string) => {
    const colorLight = useToken("colors", `${colorScheme}.50`);
    const colorDark = useToken("colors", `${colorScheme}.900`);
    return useColorModeValue(colorLight, colorDark);
  };

  const textColor = useColorModeValue("blackAlpha.700", "whiteAlpha.800");

  return (
    <Box {...rest}>
      <Container maxWidth="container.xl">
        <VStack spacing={spacing}>
          <Box textAlign="center">
            {title && (
              <Heading
                as="h3"
                fontWeight="400"
                textAlign="center"
                fontSize={["2xl", "3xl", "3xl"]}
              >
                {title}
              </Heading>
            )}
            {body && (
              <Text color={color} mt={2} mx="auto" maxWidth="600px">
                {body}
              </Text>
            )}
          </Box>
          {items && items.length && (
            <Box width="full">
              <CarouselDefault
                sx={{
                  ".slick-slide": {
                    margin: "0 15px",
                  },
                  ".slick-list > div": {
                    margin: "0 -15px",
                  },
                  pb: 6,
                }}
                settings={{
                  dots: true,
                  arrows: false,
                  infinite: true,
                  // speed: 500,
                  slidesToShow: 4,
                  slidesToScroll: 1,
                  swipeToSlide: true,
                  autoplay: false,
                  // speed: 2000,
                  autoplaySpeed: 5000,
                  touchThreshold: 50,
                  cssEase: "ease-in-out",
                }}
              >
                {items.map((item, idx) => (
                  <Box key={idx} m={4}>
                    <Box
                      p={10}
                      bg={item.bg ? item.bg : accentBG(item.colorScheme)}
                      rounded="lg"
                      boxShadow={`12px 12px 0px ${accentColor(
                        item.colorScheme,
                      )}`}
                      borderTopWidth="1px"
                      borderTopColor={`${item.colorScheme}.400`}
                      title={item.company ? item.company : null}
                    >
                      <VStack my={4} spacing={4}>
                        {item.logo}
                        <Text color={textColor} textAlign="center">
                          {item.body}
                        </Text>
                        <Button color={textColor} variant="link">
                          Customer Story
                        </Button>
                      </VStack>
                    </Box>
                  </Box>
                ))}
              </CarouselDefault>
            </Box>
          )}
        </VStack>
      </Container>
    </Box>
  );
});

if (__DEV__) {
  ClientsBlock.displayName = "ClientsBlock";
}

const FaqBlock: React.FC<
  {
    title: string;
    body?: string;
    spacing?: number[];
    items: {
      title: string;
      body: string;
    }[];
  } & ChakraProps &
    ThemingProps
> = memo(({ title, body, items = [], spacing, ...rest }) => {
  return (
    <Box {...rest}>
      <VStack spacing={spacing}>
        <Container maxWidth="container.xl">
          <Box textAlign="center">
            {title && (
              <Heading
                as="h3"
                fontWeight="400"
                textAlign="center"
                fontSize={["2xl", "3xl", "3xl"]}
              >
                {title}
              </Heading>
            )}
            {body && (
              <Text
                mx="auto"
                fontSize="xl"
                maxWidth="650px"
                color={useColorModeValue("gray.600", "whiteAlpha.700")}
              >
                {body}
              </Text>
            )}
          </Box>
        </Container>
        {Array.isArray(items) && Boolean(items.length) && (
          <Container maxWidth="container.lg">
            <SimpleGrid spacing={[5, 5, 10, 10]} columns={[1, 1, 2, 2, 2]}>
              {items.map((item) => (
                <Box key={item.title}>
                  <Text mb={2} fontWeight="600" fontSize="lg">
                    {item.title}
                  </Text>
                  <Text color={useColorModeValue("gray.600", "whiteAlpha.700")}>
                    {item.body}
                  </Text>
                </Box>
              ))}
            </SimpleGrid>
          </Container>
        )}
      </VStack>
    </Box>
  );
});

if (__DEV__) {
  FaqBlock.displayName = "FaqBlock";
}

const CTABlock: React.FC<
  {
    title: string;
    body?: React.ReactNode;
    button: React.ReactNode;
  } & ChakraProps &
    ThemingProps
> = memo(({ title, body, button, colorScheme }) => {
  return (
    <Box>
      <Container
        rounded="lg"
        maxWidth="container.lg"
        bg={useColorModeValue(`${colorScheme}.50`, `${colorScheme}.600`)}
        overflow="hidden"
      >
        <VStack
          p={[5, 10, 20]}
          justify="center"
          align="center"
          spacing={[2, 5, 10]}
        >
          {title && (
            <Heading fontSize={["2xl"]} textTransform="uppercase">
              {title}
            </Heading>
          )}
          {body}
          {button && (
            <Stack
              width="full"
              justify="center"
              spacing={[2, 4, 6]}
              direction={["column", "column", "row"]}
            >
              {button}
            </Stack>
          )}
        </VStack>
      </Container>
    </Box>
  );
});

if (__DEV__) {
  CTABlock.displayName = "CTABlock";
}

export default ServicesPage;
