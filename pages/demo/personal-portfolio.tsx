import {
  FaTwitter,
  FiDribbble,
  FiInstagram,
  FaYoutube,
  IoMailOutline,
  FaFacebookSquare,
  SiTypescript,
  ImMobile2,
  FiDatabase,
  IoGitCompare,
} from "@react-icons";

import React, { isValidElement, useContext, memo } from "react";

import { NextSeo } from "next-seo";

import {
  Box,
  Button,
  chakra,
  ChakraProps,
  Container,
  Flex,
  Heading,
  Icon,
  Input,
  InputGroup,
  InputRightElement,
  LinkBox,
  LinkOverlay,
  CircularProgress,
  CircularProgressLabel,
  SimpleGrid,
  Stack,
  Text,
  ThemingProps,
  useColorModeValue,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import { SystemProps } from "@chakra-ui/system";

import Logo1 from "@definitions/brands/logo-1";
import Logo2 from "@definitions/brands/logo-2";
import Logo3 from "@definitions/brands/logo-3";
import Logo4 from "@definitions/brands/logo-4";
import Logo5 from "@definitions/brands/logo-5";
import { ThemeColorContext } from "@definitions/context/theme";
import { __DEV__ } from "@definitions/utils";

import CarouselDefault from "@components/carousel/carousel-default";
import DividerCurve from "@components/divider/divider-curve";
import FooterSimpleSocial from "@components/footer/footer-simple-social";
import ImageLazyload from "@components/image-lazyload";
import TestimonialQuoteCard from "@components/testimonials/testimonial-quote-card";
import TextTyping from "@components/text-typing";

import Layout from "@layouts/default";

import Annabel from "@assets/images/avatar/1f-square.jpg?resize&size=80&img";
import AndrewHess from "@assets/images/avatar/1m-square.jpg?resize&size=80&img";
import Natalie from "@assets/images/avatar/2f-square.jpg?resize&size=80&img";
import Portfolio1 from "@assets/images/portfolio-1.jpg?resize&img";
import Portfolio2 from "@assets/images/portfolio-2.jpg?resize&img";
import Portfolio3 from "@assets/images/portfolio-3.jpg?resize&img";
import Portfolio4 from "@assets/images/portfolio-4.jpg?resize&img";
import Profile2Image from "@assets/images/profile-2.png?resize&img";

const PersonalPortfolioPage = () => {
  const theme = useContext(ThemeColorContext);
  const color = theme.colorScheme; // global default primary theme color

  const grayTextColor = useColorModeValue("gray.500", "gray.300");
  const bgGradient = useColorModeValue(
    `linear(to-b, ${color}.50, gray.200)`,
    `linear(to-b, ${color}.900, gray.700)`,
  );
  return (
    <>
      <NextSeo
        title="Hey, I am Paul"
        description="Hey, I am Paul and I build awesome digital products"
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
        <Box
          bgGradient={bgGradient}
          overflow="hidden"
          py={[0, 0, 20, 20]}
          pb={[10, 10, 20, null]}
          pos="relative"
        >
          <Container py={[0, 0, 10, 10]} maxW="container.xl">
            <Flex
              direction={["column-reverse", "column-reverse", "row", "row"]}
            >
              <Box
                textAlign={["center", "center", "start", "start"]}
                maxW={["full", "full", 600]}
                pos="relative"
                zIndex={1}
              >
                <Heading
                  lineHeight={1}
                  fontWeight={700}
                  fontSize={{ base: "4xl", sm: "5xl", md: "6xl", lg: "7xl" }}
                  mb={4}
                >
                  <Text d={["inline", "inline", "block"]}>Hey, I am</Text>{" "}
                  <Text as="span">
                    Paul and I build{" "}
                    <TextTyping
                      d={["inline-flex", "inline-flex", "block", "block"]}
                      lineHeight={1.15}
                      fontWeight={800}
                      fontSize={{
                        base: "4xl",
                        sm: "5xl",
                        md: "6xl",
                        lg: "7xl",
                      }}
                      color={`${color}.400`}
                      items={[
                        "Websites",
                        "User Interfaces",
                        "User Experiences",
                        "Mobile Apps",
                        "Design Systems",
                      ]}
                    />
                  </Text>
                </Heading>
                <Text
                  fontSize={["lg", "xl", "2xl"]}
                  color={grayTextColor}
                  mb={4}
                  maxW={["full", "full", 550]}
                >
                  Hi, I'm a freelance web designer from San-Francisco. I help
                  brands turn their ideas into high quality products.
                </Text>

                <InputGroup
                  mb={2}
                  mx={["auto", "auto", "unset"]}
                  maxW={350}
                  size="lg"
                >
                  <Input
                    pr="7.5rem"
                    type="email"
                    placeholder="example@company.com"
                    bg={useColorModeValue("whiteAlpha.800", "blackAlpha.400")}
                    rounded="full"
                    focusBorderColor={useColorModeValue(
                      `${color}.400`,
                      `${color}.300`,
                    )}
                  />
                  <InputRightElement width="7em">
                    <Button
                      colorScheme={color}
                      rounded="full"
                      px={4}
                      h="2.5em"
                      size="sm"
                    >
                      Subscribe
                    </Button>
                  </InputRightElement>
                </InputGroup>
                <Text
                  maxW={300}
                  mx={["auto", "auto", "unset"]}
                  textAlign={["center", "center", null]}
                  color={useColorModeValue("blackAlpha.500", "whiteAlpha.500")}
                  fontSize="sm"
                >
                  Get free content and updates.
                </Text>
              </Box>
              <Box
                pos={["unset", "unset", "absolute", "absolute"]}
                zIndex={0}
                flex="1"
                width={["auto", "auto", "full", "full"]}
                maxW={["unset", "unset", 600, 600]}
                right={["unset", "unset", 0, 0]}
                bottom={["unset", "unset", 0]}
                mb={[10, 10, 0]}
                bg={useColorModeValue(`${color}.100`, `${color}.800`)}
                roundedTopLeft={[0, 0, "full"]}
                ml={[-4, -4, 0, 0]}
                mr={[-4, -4, 0, 0]}
              >
                <ImageLazyload
                  ratio={1}
                  width="full"
                  height="full"
                  image={Profile2Image}
                />
              </Box>
            </Flex>
          </Container>
          <DividerCurve
            zIndex={0}
            position="bottom"
            asymmetric={false}
            invert={true}
            height={[10, 10, 100, 140]}
          />
        </Box>

        {/* Trusted by clients */}
        <Block title="Trusted by over 2.500+ clients" align="center">
          <Wrap
            align="center"
            justify="center"
            spacing={[2, 2, 4, 5]}
            // bg="teal.100"
            width="full"
            color={useColorModeValue("gray.700", "gray.600")}
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
        </Block>

        {/* My Expertise */}
        <Block
          colorScheme={color}
          bg={useColorModeValue("gray.50", "gray.900")}
          subtitle="Skills"
          title="My Expertise"
        >
          <Expertise />
        </Block>

        {/* Portfolio */}
        <Block
          colorScheme={color}
          borderBottomWidth="1px"
          subtitle="Portfolio"
          title="All inspirational works"
        >
          <Portfolio />
        </Block>

        {/* Nice To Meet You */}
        <Block
          colorScheme={color}
          borderBottomWidth="1px"
          subtitle="Nice To Meet You"
          title="Hey, I'm Paul, art director and maker"
        >
          <Stack width="full">
            <Text fontSize="xl">
              Hi, my name is Paul and I’m a freelance web designer with
              experience building out both consumer and startup applications,
              including web, mobile and desktop applications with the latest
              technologies. Lorem ipsum dolor sit amet, consectetur adipiscing
              elit. In fermentum, libero id efficitur dapibus, nisl metus
              euismod ex, non elementum quam urna eu risus.
            </Text>
            <Text fontSize="xl">
              Vestibulum at pulvinar nisi, non commodo erat. Aliquam lobortis
              posuere magna sed tincidunt. Sed facilisis vestibulum eros eget
              varius. Nam eget velit sed neque dignissim rutrum. Nullam
              efficitur ornare tellus eget condimentum.
            </Text>
          </Stack>
        </Block>

        {/* Blogs */}
        <Block colorScheme={color} subtitle="Blog" title="My blog posts">
          <Blogs />
        </Block>

        {/* Testimonials */}
        <Block
          colorScheme={color}
          subtitle="Testimonials"
          bg={useColorModeValue("gray.50", "gray.900")}
          title={
            <>
              <Heading maxW={["full", "full", "full", 300]} as="h3">
                What customers say about me
              </Heading>
            </>
          }
        >
          <Testimonials colorScheme={color} />
        </Block>

        {/* Stats */}
        <Block borderBottomWidth="1px">
          <Stats />
        </Block>

        {/* Social Media Accounts */}
        <Block
          colorScheme={color}
          subtitle="Contact"
          title="Let's keep in touch"
        >
          <SocialMedia />
        </Block>
      </chakra.main>
    </>
  );
};

/* -------------------------------------------------------------------------- */
/*                                 PAGE BLOCKS                                */
/* -------------------------------------------------------------------------- */

interface IBlock extends ChakraProps, ThemingProps {
  title?: string | React.ReactElement | React.ReactNode;
  subtitle?: string | React.ReactElement | React.ReactNode;
  align?: SystemProps["alignItems"];
}

const Block: React.FC<IBlock> = memo(
  ({ align, title, subtitle, colorScheme, children, ...rest }) => {
    return (
      <Box py={[10, 16, 28]} {...rest}>
        <Container maxW="container.xl">
          <Stack
            align={align}
            direction={["column", "column", "column", "row"]}
          >
            {(title || subtitle) && (
              <Flex
                direction="column"
                mb={[5, 5, 5, 0]}
                justify={["center", "center", "center", "start"]}
                width="full"
                maxW={["full", "full", "full", 350]}
                textAlign={["center", "center", "center", "start"]}
              >
                {subtitle ? (
                  isValidElement(subtitle) ? (
                    subtitle
                  ) : (
                    <Text
                      fontSize="sm"
                      fontWeight={700}
                      color={colorScheme ? `${colorScheme}.300` : null}
                      textTransform="uppercase"
                      letterSpacing="0.1em"
                    >
                      {subtitle}
                    </Text>
                  )
                ) : null}
                {title ? (
                  isValidElement(title) ? (
                    title
                  ) : (
                    <Heading as="h3">{title}</Heading>
                  )
                ) : null}
              </Flex>
            )}
            {children}
          </Stack>
        </Container>
      </Box>
    );
  },
);

if (__DEV__) {
  Block.displayName = "Block";
}

const Portfolio = memo(() => {
  const items = [
    {
      color: useColorModeValue("purple.50", "purple.900"),
      image: Portfolio1,
      title: " Mobile App Design",
      href: "https://dribbble.com/",
      link: "Dribbble",
    },
    {
      color: useColorModeValue("orange.100", "orange.900"),
      image: Portfolio2,
      title: "Icon Design",
      href: "https://www.behance.net/",
      link: "Behance",
    },
    {
      color: useColorModeValue("orange.50", "yellow.900"),
      image: Portfolio3,
      title: "Dashboard SaaS",
      href: "#",
      link: "example.com",
    },
    {
      color: useColorModeValue("gray.50", "gray.900"),
      image: Portfolio4,
      title: "Design system",
      href: "https://www.creativemarket.com/",
      link: "creativemarket.com",
    },
  ];

  return (
    <SimpleGrid columns={[1, 1, 2, 2]} spacing={[2, 5, 10]} width="full">
      {items.map((item, idx) => (
        <LinkBox key={idx} role="group">
          <Box
            rounded="lg"
            p={[2, 5, 5]}
            flex="1"
            bg="transparent"
            width="full"
            transition="background 250ms ease-in-out, box-shadow 300ms ease-in-out"
            _hover={{
              bg: item.color,
              shadow: "2xl",
            }}
          >
            <ImageLazyload
              ratio={4 / 3}
              flex="1"
              w="full"
              h="full"
              rounded="lg"
              image={item.image}
            />
            <Stack
              direction={["column", "column", "row"]}
              justify={["start", "start", "space-between"]}
              spacing={0}
              mt={[2, 5, 5]}
            >
              <LinkOverlay href={item.href} isExternal>
                <Heading as="h4" fontSize="md" fontWeight={500}>
                  {item.title}
                </Heading>
              </LinkOverlay>
              <Text fontSize="md">{item.link}</Text>
            </Stack>
          </Box>
        </LinkBox>
      ))}
    </SimpleGrid>
  );
});

if (__DEV__) {
  Portfolio.displayName = "Portfolio";
}

const Blogs = memo(() => {
  const items = [
    {
      meta: "January 10, 2022",
      title: "Building A Micro-Frontend Using React",
      href: "/blogs/article",
      body: "Quid securi etiam tamquam eu fugiat nulla pariatur. Curabitur blandit tempus ardua ridiculus sed magna. Paullum deliquit, ponderibus modulisque suis ratio utitur.",
    },
    {
      meta: "January 9, 2022",
      title: "Create your cryptocurrency token",
      href: "/blogs/article",
      body: "Magna pars studiorum, prodita quaerimus. Quae vero auctorem tractata ab fiducia dicuntur. Prima luce, cum quibus mons aliud  consensu ab eo.",
    },
    {
      meta: "January 8, 2022",
      title: "Best productivity apps for mac",
      href: "/blogs/article",
      body: "Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Cum sociis natoque penatibus et magnis dis parturient.",
    },
  ];
  return (
    <Box>
      <Stack ml={[0, 0, 0, -10]} mt={[0, 0, 0, -10]} width="full">
        {items.map((item, idx) => (
          <LinkBox width="full" key={idx} role="group">
            <LinkOverlay href={item.href}>
              <Flex
                width="full"
                p={[5, 5, 10]}
                rounded="xl"
                transition="box-shadow 250ms ease-in-out"
                _groupHover={{
                  shadow: "2xl",
                }}
              >
                <Box>
                  <Text color="gray.400" fontWeight={600}>
                    {item.meta}
                  </Text>
                  <Heading as="h4" mb={4}>
                    {item.title}
                  </Heading>
                  <Text color="gray.500" fontSize="lg">
                    {item.body}
                  </Text>
                </Box>
              </Flex>
            </LinkOverlay>
          </LinkBox>
        ))}
      </Stack>
    </Box>
  );
});

if (__DEV__) {
  Blogs.displayName = "Blogs";
}

const Stats = memo(() => {
  const items = [
    {
      title: "172+",
      subtitle: "Projects Completed",
    },
    {
      title: 7,
      subtitle: "Design Awards",
    },
    {
      title: "12+",
      subtitle: "Years Experience",
    },
    {
      title: "2.500+",
      subtitle: "Happy Clients",
    },
  ];
  return (
    <SimpleGrid w="full" spacing={[5, 5, 10]} columns={[1, 1, 2, 4]}>
      {items.map((item, idx) => (
        <Flex w="full" flex={1} key={idx} direction="column" align="center">
          <Heading as="h3" fontSize="6xl">
            {item.title}
          </Heading>
          <Text
            fontSize="sm"
            textTransform="uppercase"
            fontWeight={600}
            color={"gray.500"}
          >
            {item.subtitle}
          </Text>
        </Flex>
      ))}
    </SimpleGrid>
  );
});

if (__DEV__) {
  Stats.displayName = "Stats";
}

const SocialMedia = memo(() => {
  const items = [
    {
      title: "Dribbble",
      icon: FiDribbble,
      color: "#ea4c89",
      href: "https://dribbble.com/themebiotic/about",
    },
    {
      title: "Facebook",
      icon: FaFacebookSquare,
      color: useColorModeValue("facebook.400", "facebook.600"),
      href: "https://facebook.com/Themebiotic",
    },
    {
      title: "Instagram",
      icon: FiInstagram,
      color: "#e1306c",
      href: "https://instagram.com/themebiotic",
    },
    {
      title: "Twitter",
      icon: FaTwitter,
      color: useColorModeValue("twitter.400", "twitter.600"),
      href: "https://twitter.com/themebiotic",
    },
    {
      title: "Youtube",
      icon: FaYoutube,
      color: "#ff0000",
      href: "https://youtube.com/themebiotic",
    },
    {
      title: "E-Mail",
      icon: IoMailOutline,
      color: "current",
      href: "#",
    },
  ];
  return (
    <SimpleGrid spacing={[5, 5, 8]} width="full" columns={[1, 1, 2, 3]}>
      {items.map((item, idx) => (
        <LinkBox key={idx} role="group">
          <Box
            borderWidth={useColorModeValue(0, "1px")}
            shadow="sm"
            rounded="md"
            width="full"
            bg={useColorModeValue("gray.50", "gray.700")}
            py={10}
            px={6}
            textAlign="center"
            transition="box-shadow 250ms ease-in-out"
            _groupHover={{
              shadow: "2xl",
            }}
          >
            <Icon as={item.icon} fontSize={"5xl"} color={item.color} />
            <LinkOverlay href={item.href} isExternal>
              <Text fontSize="lg" fontWeight={700}>
                {item.title}
              </Text>
            </LinkOverlay>
          </Box>
        </LinkBox>
      ))}
    </SimpleGrid>
  );
});

if (__DEV__) {
  SocialMedia.displayName = "SocialMedia";
}

const Expertise = memo(() => {
  const items = [
    {
      icon: <Icon as={SiTypescript} />,
      title: "JavaScript & TypeScript",
      body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      color: "blue",
      progress: 78,
    },
    {
      icon: <Icon as={ImMobile2} />,
      title: "Android / iOS",
      body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      color: "pink",
      progress: 63,
    },
    {
      icon: <Icon as={FiDatabase} />,
      title: "PostgreSQL & MySQL",
      body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      color: "teal",
      progress: 71,
    },
    {
      icon: <Icon as={IoGitCompare} />,
      title: "Deployment & Development",
      body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      color: "yellow",
      progress: 89,
    },
  ];
  return (
    <SimpleGrid spacing={[5, 5, 8]} width="full" columns={[1, 1, 2, 2]}>
      {items.map((item, idx) => (
        <Box
          key={idx}
          bg={useColorModeValue("white", null)}
          borderTopWidth={"2px"}
          borderColor={`${item.color}.400`}
          shadow="sm"
          rounded="md"
          width="full"
          p={6}
        >
          <Text fontSize="lg" fontWeight={700} mb={2}>
            {item.icon} {item.title}
          </Text>
          <Flex
            align="center"
            // justify="center"
            direction={["column", "row", "row"]}
          >
            <Text
              color={useColorModeValue("gray.500", "gray.300")}
              mb={[2, 0, 0]}
              mr={[0, 2, 2]}
            >
              {item.body}
            </Text>
            <Flex align="start">
              <CircularProgress
                display="inline-flex"
                justifyContent="center"
                color={useColorModeValue(
                  `${item.color}.500`,
                  `${item.color}.300`,
                )}
                trackColor={useColorModeValue("gray.100", "whiteAlpha.300")}
                value={item.progress}
                size="120px"
                thickness={6}
              >
                <CircularProgressLabel
                  color={useColorModeValue("gray.400", "whiteAlpha.900")}
                  fontWeight={700}
                >
                  {item.progress}
                </CircularProgressLabel>
              </CircularProgress>
            </Flex>
          </Flex>
        </Box>
      ))}
    </SimpleGrid>
  );
});

if (__DEV__) {
  Expertise.displayName = "Expertise";
}

const Testimonials: React.FC<ThemingProps> = memo(({ colorScheme }) => {
  const items = [
    {
      avatarImage: AndrewHess,
      title: "It's a game changer",
      body: "Paul is an awesome contractor! He has found numerous products bugs and reached out to our team to suggest fixes/improvements. His feedback is always welcome and he is quick to fix the bugs he finds. He's easy to work with and very talented! Highly recommend!",
      name: "Andrew Hess",
      occupation: "Software Architect",
    },
    {
      avatarImage: Annabel,
      title: "It's a game changer",
      body: "Paul is one of the best in the business. He is very thorough, responsive, and has in-depth knowledge of app development. These are all traits you should look for in a developer and Paul has them all! I highly recommend Paul for your web app development needs.",
      name: "Annabel",
      occupation: "Mobile App Developer",
    },
    {
      avatarImage: Natalie,
      title: "It's a game changer",
      body: "Paul is highly skilled and very easy to communicate and work with! He was on time in delivering the work and was responsive to suggestions for slight edits and clarifications. Highly recommend him.",
      name: "Natalie",
      occupation: "Founder",
    },
  ];

  return (
    <Box width="full" overflow="hidden">
      <CarouselDefault
        sx={{
          ".slick-slider": {},
          ".slick-track": {
            py: 0,
            display: "flex",
            alignItems: "center",
          },
          ".slick-dots": {
            pos: "initial",
            mt: 4,
          },
          ".slick-dots li": {
            margin: 0,
          },
          ".slick-dots li button": {
            transition: "all 250ms ease-in-out",
            _before: {
              width: "1em",
              height: "1em",
              fontSize: "0.8rem",
              transition: "all 250ms ease-in-out",
              color: useColorModeValue(
                `${colorScheme}.400`,
                `${colorScheme}.100`,
              ),
            },
          },
        }}
        settings={{
          dots: true,
          arrows: false,
          infinite: false,
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: false,
          touchThreshold: 50,
          cssEase: "ease-in-out",
          responsive: [],
        }}
      >
        {items.map((item, idx) => (
          <Box key={idx}>
            <Flex width="full" justify="center">
              <TestimonialQuoteCard
                // mx={6}
                maxWidth="750px"
                // maxWidth="full"
                {...item}
              />
            </Flex>
          </Box>
        ))}
      </CarouselDefault>
    </Box>
  );
});

if (__DEV__) {
  Testimonials.displayName = "Testimonials";
}

PersonalPortfolioPage.PageLayout = ({
  children,
}: {
  children: React.ReactNode;
}) => <Layout footer={<FooterSimpleSocial />}>{children}</Layout>;

export default PersonalPortfolioPage;
