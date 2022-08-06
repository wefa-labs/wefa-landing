import {
  IoIosArrowForward,
  ImQuotesLeft,
  RiShoppingCartLine,
  RiSendPlaneLine,
} from "@react-icons";

import React, { useContext, memo } from "react";

import { NextSeo } from "next-seo";
import NextLink from "next/link";

import {
  AspectRatio,
  Box,
  chakra,
  ChakraProps,
  Circle,
  Container,
  Flex,
  Heading,
  Link,
  Stack,
  Text,
  useColorModeValue,
  useToken,
  Tag,
  SimpleGrid,
  Button,
  Avatar,
  Icon,
  useBreakpointValue,
  Wrap,
  WrapItem,
  ThemingProps,
} from "@chakra-ui/react";

import BlenderLogo from "@definitions/brands/blender";
import Logo1 from "@definitions/brands/logo-1";
import Logo2 from "@definitions/brands/logo-2";
import Logo3 from "@definitions/brands/logo-3";
import Logo4 from "@definitions/brands/logo-4";
import Logo5 from "@definitions/brands/logo-5";
import Logo6 from "@definitions/brands/logo-6";
import { ThemeColorContext } from "@definitions/context/theme";
import Site from "@definitions/site";
import { __DEV__ } from "@definitions/utils";

import DividerCurve from "@components/divider/divider-curve";
import ImageLazyload from "@components/image-lazyload";
import PageTitle from "@components/page-title";

import RichardCampbell from "@assets/images/avatar/3m-square.jpg?size=128&img";
import BlenderImage from "@assets/images/blender-screen.jpg?resize&img";
import Office1 from "@assets/images/office-1.jpg?resize&img";
import Office2 from "@assets/images/office-2.jpg?resize&img";
import Office4 from "@assets/images/office-4.jpg?resize&img";
import Office5 from "@assets/images/office-5.jpg?resize&img";
import Office6 from "@assets/images/office-6.jpg?resize&img";
import Office7 from "@assets/images/office-7.jpg?resize&img";
import Office8 from "@assets/images/office-8.jpg?resize&img";

const CustomerStoriesPage: React.FC = () => {
  const theme = useContext(ThemeColorContext);
  const color = theme.colorScheme;

  const color1 = useColorModeValue(`${color}.50`, "gray.700");
  const color2 = useColorModeValue(`${color}.200`, `${color}.800`);

  const textMuted = useColorModeValue("blackAlpha.700", "whiteAlpha.700");

  const heroBG = useColorModeValue(`${color}.50`, "gray.700");
  const bgGradient = `linear(to-b, ${color1}, ${color2})`;

  /* ----------------------------- Page Contents ---------------------------- */
  const stories = [
    {
      href: "#",
      logo: <Logo1 color={useColorModeValue(null, "whiteAlpha.700")} />,
      image: Office2,
      company: "Company 1",
      body: "Company est omnis divisa in partes tres, quarum. At nos hinc posthac, sitientis piros Afros.",
    },
    {
      href: "#",
      logo: <Logo2 color={useColorModeValue(null, "whiteAlpha.700")} />,
      image: Office4,
      company: "Company 2",
      body: "Company Cras mattis iudicium purus sit amet fermentum. Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor.",
    },
    {
      href: "#",
      logo: <Logo3 color={useColorModeValue(null, "whiteAlpha.700")} />,
      image: Office5,
      company: "Company 3",
      body: "Company sociis natoque penatibus et magnis dis parturient. Hi omnes lingua, institutis, legibus inter se differunt.",
    },
    {
      href: "#",
      logo: <Logo4 color={useColorModeValue(null, "whiteAlpha.700")} />,
      image: Office7,
      company: "Company 4",
      body: "Company blandit tempus ardua ridiculus sed magna. Idque Caesaris facere voluntate liceret sese habere.",
    },
    {
      href: "#",
      logo: <Logo5 color={useColorModeValue(null, "whiteAlpha.700")} />,
      image: Office6,
      company: "Company 5",
      body: "Company natoque penatibus et magnis dis parturient. Ambitioni dedisse scripsisse iudicaretur.",
    },
    {
      href: "#",
      logo: <Logo6 color={useColorModeValue(null, "whiteAlpha.700")} />,
      image: Office8,
      company: "Company",
      body: "Company habebis sem dicantur magna mollis euismod. Sed haec quis possit intrepidus aestimare tellus.",
    },
  ];

  const featuredStories = [
    {
      href: "#",
      company: "Company 1",
      image: Office1,
      logo: <Logo1 mb={2} color={useColorModeValue(null, "whiteAlpha.700")} />,
      blob: "M465,200.12418 C465,306.62418 340.26824,426 224.01824,426 C107.76824,426 0,306.62418 0,200.12418 C0,93.5243674 107.76824,0 224.01824,0 C340.26824,0 465,93.5243674 465,200.12418",
      body: "Company collects events from your web & mobile apps and provides a complete data toolkit to every team in your company",
    },
    {
      href: "#",
      company: "Company 2",
      image: Office2,
      logo: <Logo2 mb={2} color={useColorModeValue(null, "whiteAlpha.700")} />,
      blob: "M461,214.947368 C461,321.368421 362.266971,426 246.990629,426 C131.714286,426 0,321.368421 0,214.947368 C0,108.421053 131.714286,0 246.990629,0 C362.266971,0 461,108.421053 461,214.947368",
      body: "Easily implement powerful, modern search experiences for your team around the world.",
    },
    {
      href: "#",
      company: "Blender",
      image: BlenderImage,
      logo: (
        <BlenderLogo mb={2} color={useColorModeValue(null, "whiteAlpha.700")} />
      ),
      blob: "M437,199.334728 C437,305.785216 313.217992,426 203.992749,426 C94.6684795,426 0,305.785216 0,199.334728 C0,92.7852162 94.6684795,0 203.992749,0 C313.217992,0 437,92.7852162 437,199.334728",
      body: "Blender's mission is to bring the best 3D technology as tools in the hands of artists, for all platforms.",
    },
  ];

  // Purchase Mouse Down Handler
  const purchaseMouseDownHandler = (
    event: React.MouseEvent<HTMLButtonElement>,
  ) => {
    if (event.button === 0) window.open(Site.purchase, "_blank");
    if (event.button === 1) window.open(Site.purchase, "_blank");
  };

  return (
    <>
      <NextSeo
        title="Customer Stories"
        description="Mercury Customer Stories Example Page"
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
          minHeight={["initial", "initial", "400px", "450px"]}
          title={
            <Heading
              lineHeight="1.2"
              fontSize={["2xl", "3xl", "6xl", "6xl"]}
              fontWeight="extrabold"
              color={useColorModeValue(`${color}.500`, `${color}.300`)}
            >
              Inspiring Stories
            </Heading>
          }
        >
          <Text
            fontWeight="600"
            fontSize={["lg", "xl", "3xl", "4xl"]}
            color={textMuted}
          >
            Mercury Customers Around The World
          </Text>
        </PageTitle>

        {/* ----------------------- Featured Stories ----------------------- */}
        <FeaturedStoriesBlock items={featuredStories} colorScheme={color} />

        {/* ---------------------- Video & Testimonial --------------------- */}
        <Box px={[4, 10, 0, 0]} py={10} bg={heroBG}>
          <Flex
            mt={[0, 0, -28, 0]}
            direction={["column", "column", "column", "row"]}
          >
            <VideoBlock
              poster="/videos/office-video.jpg"
              sources={[
                { src: "/videos/office-video.webm", type: "video/webm" },
                { src: "/videos/office-video.mp4", type: "video/mp4" },
              ]}
              colorScheme={color}
            />

            <TestimonialBlock
              avatar={RichardCampbell}
              job="Executive Vice President of Innovation and Technology"
              name="Richard B. Campbell"
              testimonial="We have no regrets! It's the perfect solution for our business. Mercury is worth much more than I paid. I can't say enough about Mercury"
              colorScheme={color}
            />
          </Flex>
        </Box>

        {/* ------------------------ Success Stories ----------------------- */}
        <Box pos="relative" bgGradient={bgGradient} py={20}>
          <Container maxW="container.xl">
            <SuccessStoriesBlock
              tag="Success Stories"
              title="Tens of thousands of the most innovative companies choose Mercury"
              items={stories}
              colorScheme={color}
            />

            {/* --------------------- Load more button --------------------- */}
            <Flex mt={20} justify="center">
              <Button size="lg" colorScheme={color} variant="outline">
                <Text fontSize="sm" textTransform="uppercase">
                  Load more stories
                </Text>
              </Button>
            </Flex>
          </Container>

          {/* --------------------- Block Bottom Curve --------------------- */}
          <DividerCurve height="60px" invert position="bottom" />
        </Box>

        {/* ------------------------------ CTA ----------------------------- */}
        <CTABlock
          title="Try Mercury with your team for free"
          body="Learn about the many ways our customers use Mercury to solve their biggest design problems."
          bodyColor={textMuted}
          button={
            <Wrap justify="center">
              <WrapItem>
                <Button
                  size="lg"
                  colorScheme={color}
                  onMouseDown={purchaseMouseDownHandler}
                  rightIcon={<Icon as={RiShoppingCartLine} />}
                >
                  Purchase Now
                </Button>
              </WrapItem>
              <WrapItem>
                <Button
                  size="lg"
                  variant="ghost"
                  rightIcon={<Icon as={RiSendPlaneLine} />}
                >
                  Keep exploring
                </Button>
              </WrapItem>
            </Wrap>
          }
        />
      </chakra.main>
    </>
  );
};

/* -------------------------------------------------------------------------- */
/*                                 PAGE BLOCKS                                */
/*    All page content can be edited via props. You do not need to make any   */
/*    changes in this part if you are not going to make design arrangements   */
/* -------------------------------------------------------------------------- */

const responsiveImage = (image: imageObject) => {
  return (
    useBreakpointValue({
      base: image?.images[1].path,
      sm: image?.images[2].path,
      md: image?.images[3].path,
      xl: image?.images[4].path,
    }) ?? image?.src
  );
};

const FeaturedStoriesBlock: React.FC<
  {
    items: {
      blob: string;
      body: string;
      company: string;
      href: string;
      image: imageObject;
      logo: React.ReactNode;
    }[];
  } & ChakraProps &
    ThemingProps
> = memo(({ items = [], colorScheme, ...rest }) => {
  return (
    <Box {...rest}>
      <Container mt={[10, 10, -28, -28]} mb={28} maxW="container.xl">
        <Stack
          align="stretch"
          direction={["column", "column", "row", "row"]}
          spacing={[5, 5, 10, 10]}
        >
          {items.map((item, idx) => (
            <Flex
              key={idx}
              direction={["column", "row", "column", "column"]}
              align={["center", "center", "start", "start"]}
              justify="center"
              flex="1"
            >
              <Box
                mb={[5, 0, 5, 5]}
                mr={[0, 5, 0, 0]}
                w={["100%", "90%", "80%", "70%"]}
                maxW={["320px", "220px", "unset", "unset"]}
                minW={["unset", "220px", "unset", "unset"]}
              >
                <AspectRatio ratio={1}>
                  <chakra.svg viewBox="0 0 465 426">
                    <defs>
                      <clipPath id={`svg-blob-${idx}`}>
                        <path d={item.blob} />
                      </clipPath>
                    </defs>
                    <image
                      height="100%"
                      width="100%"
                      xlinkHref={responsiveImage(item.image) ?? item.image.src}
                      preserveAspectRatio="xMinYMin slice"
                      style={{
                        objectFit: "cover",
                        clipPath: `url(#svg-blob-${idx})`,
                      }}
                    />
                  </chakra.svg>
                </AspectRatio>
              </Box>
              <Flex h="100%" align="start" direction="column">
                {item.logo}
                <Text mb={5} maxW={["full", "full", "full", "80%"]}>
                  {item.body}
                </Text>
                <ReadMoreLink href={item.href} colorScheme={colorScheme}>
                  Read more
                </ReadMoreLink>
              </Flex>
            </Flex>
          ))}
        </Stack>
      </Container>
    </Box>
  );
});

if (__DEV__) {
  FeaturedStoriesBlock.displayName = "FeaturedStoriesBlock";
}

const VideoBlock: React.FC<
  {
    poster?: string | undefined;
    sources: {
      src: string;
      type: string;
    }[];
  } & ChakraProps &
    ThemingProps
> = memo(({ poster, sources = [], colorScheme }) => {
  return (
    <Flex
      pos="relative"
      flex="1"
      mr={[0, 0, 20, 0]}
      mb={[5, 0, 0, 0]}
      roundedRight="full"
      roundedLeft={["full", "full", "none", "none"]}
      overflow="hidden"
    >
      <AspectRatio flex="1" ratio={1280 / 720}>
        <video poster={poster} autoPlay loop muted playsInline>
          {sources.map((source) => (
            <source key={source.src} src={source.src} type={source.type} />
          ))}
        </video>
      </AspectRatio>
      {/* Play Icon */}
      <chakra.svg
        pos="absolute"
        left="50%"
        top="50%"
        transform="translate(-50%,-50%)"
        zIndex={2}
        width="60px"
        height="60px"
        viewBox="0 0 60 60"
      >
        <circle
          fill={useToken("colors", `${colorScheme}.400`)}
          cx="30"
          cy="30"
          r="30"
        ></circle>
        <polygon fill="#FFFFFF" points="39 30.95 25 37.9 25 24"></polygon>
      </chakra.svg>
    </Flex>
  );
});

if (__DEV__) {
  VideoBlock.displayName = "VideoBlock";
}

const TestimonialBlock: React.FC<
  {
    avatar: imageObject;
    job: string;
    name: string;
    testimonial: string;
  } & ChakraProps &
    ThemingProps
> = memo(({ avatar, job, name, testimonial, colorScheme = "gray" }) => {
  return (
    <Flex minHeight="full" flex="1" align="center" justify="center">
      <Box p={[0, 5, 10, 20]}>
        <Icon
          color={useColorModeValue(`${colorScheme}.500`, `${colorScheme}.300`)}
          fontSize="3xl"
          as={ImQuotesLeft}
        />
        {testimonial && (
          <Text
            textAlign={["center", "center", "start"]}
            mb={5}
            fontSize={["md", "lg", "xl", "3xl"]}
            fontWeight="500"
            lineHeight="1.4"
          >
            {testimonial}
          </Text>
        )}

        <Flex align={["center"]} direction={["column", "row", "row", "row"]}>
          <Circle
            mr={[0, 4, 4, 4]}
            mb={[2, 0, 0, 0]}
            bg={useColorModeValue("whiteAlpha.800", `${colorScheme}.500`)}
            size="68px"
          >
            {/*
             * TODO: add srcSet to Avatar
             * srcSet={RichardCampbell?.srcSet}
             * issue: https://github.com/chakra-ui/chakra-ui/issues/5256
             */}
            {avatar && (
              <Avatar
                size="lg"
                name={name}
                src={avatar.src}
                srcSet={avatar.srcSet}
              />
            )}
          </Circle>
          <Box textAlign={["center", "start", "start"]}>
            {name && <Text fontWeight="600">{name}</Text>}
            {job && <Text fontWeight="500">{job}</Text>}
          </Box>
        </Flex>
      </Box>
    </Flex>
  );
});

if (__DEV__) {
  TestimonialBlock.displayName = "TestimonialBlock";
}

const SuccessStoriesBlock: React.FC<
  {
    items: {
      body: string;
      company: string;
      href: string;
      image: imageObject;
      logo: React.ReactNode;
    }[];
    tag?: string;
    title: string;
  } & ChakraProps &
    ThemingProps
> = memo(({ items = [], tag, title, colorScheme }) => {
  return (
    <>
      <Flex
        mb={[5, 5, 10, 20]}
        direction="column"
        align="center"
        justify="center"
      >
        {tag && <Tag colorScheme={colorScheme}>{tag}</Tag>}
        {title && (
          <Heading maxW="850px" textAlign="center">
            {title}
          </Heading>
        )}
      </Flex>
      <SimpleGrid spacing={10} columns={[1, 1, 2, 3]}>
        {items.map((item, idx) => (
          <Flex
            key={idx}
            direction="column"
            rounded="xl"
            overflow="hidden"
            bg={useColorModeValue("white", "gray.800")}
            shadow="xl"
          >
            <Box pos="relative">
              <Box flex="1">
                <ImageLazyload
                  objectFit={"cover"}
                  w="100%"
                  h="100%"
                  alt={item.company}
                  ratio={3 / 2}
                  image={item.image}
                />
              </Box>
              <DividerCurve height="60px" invert position="bottom" />
            </Box>
            <Box p={10} pt={5} pb={0}>
              <Flex mb={5}>{item.logo}</Flex>
              <Text mb={5}>{item.body}</Text>
            </Box>
            <Box p={10} pt={0} mt="auto">
              <ReadMoreLink href={item.href} colorScheme={colorScheme}>
                Read story
              </ReadMoreLink>
            </Box>
          </Flex>
        ))}
      </SimpleGrid>
    </>
  );
});

const CTABlock: React.FC<
  {
    title: string;
    body: string;
    bodyColor: string;
    button: React.ReactNode;
  } & ChakraProps &
    ThemingProps
> = memo(({ title, body, bodyColor, button }) => {
  return (
    <Box py={[10, 10, 20, 20]}>
      <Container maxW="container.lg">
        <Flex
          p={[2, 5, 10, 10]}
          rounded="3xl"
          align="center"
          justify="center"
          direction="column"
        >
          {title && (
            <Heading
              mb={2}
              as="h3"
              lineHeight="1.2"
              textAlign={["center", "center", "start", "start"]}
            >
              {title}
            </Heading>
          )}
          {body && (
            <Text
              align="center"
              maxW="500px"
              fontSize={["sm", "md", "lg"]}
              color={bodyColor}
              mb={6}
            >
              {body}
            </Text>
          )}
          {button}
        </Flex>
      </Container>
    </Box>
  );
});

if (__DEV__) {
  CTABlock.displayName = "CTABlock";
}

const ReadMoreLink: React.FC<{ href: string } & ChakraProps & ThemingProps> =
  memo(({ colorScheme, children, href = "#", ...rest }) => {
    return (
      <NextLink href={href} passHref>
        <Link
          display="flex"
          alignItems="center"
          role="group"
          fontWeight="600"
          color={useColorModeValue(`${colorScheme}.500`, `${colorScheme}.300`)}
          mt="auto"
          _hover={{
            textDecoration: "none",
          }}
          {...rest}
        >
          {children}
          <Icon
            as={IoIosArrowForward}
            transition="all 300ms ease"
            transform="translateX(-10px) scale(0)"
            opacity={0}
            _groupHover={{
              transform: "translateX(10px) scale(1.3)",
              opacity: 1,
            }}
          />
        </Link>
      </NextLink>
    );
  });

if (__DEV__) {
  ReadMoreLink.displayName = "ReadMoreLink";
}

export default CustomerStoriesPage;
