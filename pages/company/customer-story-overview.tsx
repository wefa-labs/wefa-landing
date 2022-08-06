import { ImQuotesLeft, IoIosArrowForward } from "@react-icons";

import React, { useContext, memo } from "react";

import { NextSeo } from "next-seo";
import NextLink from "next/link";

import { ExternalLinkIcon } from "@chakra-ui/icons";
import {
  Box,
  chakra,
  ChakraProps,
  ThemingProps,
  Text,
  Container,
  Flex,
  Heading,
  Stack,
  VStack,
  List,
  ListItem,
  useColorModeValue,
  Icon,
  Wrap,
  WrapItem,
  Link,
  SimpleGrid,
  Divider,
  Button,
  useToken,
} from "@chakra-ui/react";

import BlenderLogo from "@definitions/brands/blender";
import Logo1 from "@definitions/brands/logo-1";
import Logo2 from "@definitions/brands/logo-2";
import Logo5 from "@definitions/brands/logo-5";
import { ThemeColorContext } from "@definitions/context";
import { __DEV__ } from "@definitions/utils";

import DividerCurve from "@components/divider/divider-curve";
import DividerTilt from "@components/divider/divider-tilt";
import ImageLazyload from "@components/image-lazyload";

import BlenderScreen1Image from "@assets/images/blender-screen-1.jpg?resize&img";
import BlenderScreen2Image from "@assets/images/blender-screen-2.jpg?resize&img";
import BlenderScreen3Image from "@assets/images/blender-screen-3.jpg?resize&img";
import BlenderScreen4Image from "@assets/images/blender-screen-4.jpg?resize&img";
import BlenderScreen5Image from "@assets/images/blender-screen-5.jpg?resize&img";
import BlenderScreenImage from "@assets/images/blender-screen.jpg?resize&img";
import Office1 from "@assets/images/office-1.jpg?resize&img";
import Office2 from "@assets/images/office-2.jpg?resize&img";
import Office3 from "@assets/images/office-3.jpg?resize&img";
import Office6 from "@assets/images/office-6.jpg?resize&img";

const CustomerStoryOverviewPage: React.FC = () => {
  const theme = useContext(ThemeColorContext);
  const color = theme.colorScheme;

  const heroBG = useColorModeValue(`${color}.50`, `${color}.800`);
  const accentColor = useColorModeValue(`${color}.500`, `${color}.300`);
  const textMuted = useColorModeValue("gray.500", "gray.500");

  /* ----------------------------- Page Contents ---------------------------- */
  const content: T_Content[] = [
    {
      heading: "The Company",
      body: [
        {
          content:
            "Between January 2020 and March 2021 we were quite busy at Ubisoft Animation Studio (in-house studio of Ubisoft Film & Television) working on a 70min long special episode of our TV series Rabbids Invasion. This episode is named Rabbids Invasion: Mission to Mars and it will be released at the end of the summer on France Television and on Netflix worldwide in 2022.",
        },
        {
          content:
            "We handled the storyboard, previz and editing stages internally while the following steps were done by partners studios: Supamonks, which worked mostly on Blender, Anima for a great part of the animation and Miroslav Pilon studio for the sounds and voices. To facilitate the production the movie was divided into 3 acts of about 23’ each. We chose to use the version 2.83 of Blender because it was a LTS and we needed stability on the project.",
        },
        {
          content:
            "The challenge for us – apart from using Blender in this kind of big production for the first time, which was pretty exciting – was to offer to our movie director a very flexible previz environment so that he and the artists could concentrate on the quality and unleash their creativity.",
        },
      ],
    },
    {
      heading: "Workflow and tools",
      body: [
        {
          content:
            "<b>Sr. Tools TD, Head of UX:</b> I was in charge of the graphic workflow and to do so I took inspiration in my experience of live action filmmaking and stages. Thanks to our TD team we designed and developed several tools that quickly became the backbone of our pipeline. Good news is several of these tools will be released soon to the community!!!",
        },
        {
          content:
            "<b>Stamp Info</b><br/>As you know in production it is mandatory to keep track of the context and origin of every rendered image in order to closely follow the advancement of the project. Blender already has a feature to write metadata on pictures but we needed more flexibility and additional information, such as the frame index of the image in various time systems (3D, edit…). We also wanted to have a more customizable layout. I then started to write my first add-on for Blender 😊",
          image: BlenderScreen1Image,
          // imageRatio: 1,
          imageDescription: "Cycles Render Engine",
        },
        {
          content:
            "I found the Python API very open and powerful. This allowed me to import Pillow, a common graphic library, to create an image with all the specified information, image that I could combine afterwards with the rendered picture thanks to a process based on the VSE and on the generation of a temporary scene. This got integrated pretty well in the pipeline, it can be used as a standalone tool or be called by script as it is the case with Shot Manager.",
        },
        {
          content:
            "However the add-on has an important limitation that we couldn’t overcome when in production. During a rendering script execution the whole UI of Blender is frozen and there is no easy way to display the rendered images, to update a progress bar nor to interrupt the process (in case the images appear invalid for example).",
        },
        {
          content:
            "<b>Animation, Modeling, VFX</b><br/><u>Modeling, Sculpt, UV</u> Blender’s comprehensive array of modeling tools make creating, transforming and editing your models a breeze.<br/><u>VFX</u> professionals say: “Probably the best tracker in the market”. Blender includes production ready camera and object tracking. Allowing you to import raw footage, track the footage, mask areas and see the camera movements live in your 3D scene. Eliminating the need to switch between programs.<br/><u>Animation & Rigging</u> Thanks to the high quality rigging and animation tools, Blender is being used for numerous short films, advertisements, TV series and feature films now.",
          images: [
            {
              image: BlenderScreen2Image,
              imageDescription: "Modeling, Sculpt, UV Screen",
            },
            {
              image: BlenderScreen3Image,
              imageDescription: "VFX Screen",
            },
            {
              image: BlenderScreen4Image,
              imageDescription: "Animation & Rigging Screen",
            },
          ],
        },
        {
          content:
            "<u>Story Art</u> Really! Drawing directly in a 3D viewport makes a lot of sense. It opens unsurpassed workflow freedom for story-boarders and 2D artists.<br/><u>Make it Your Own</u> Blender has a flexible Python controlled interface. Layout, colors, size and even fonts can be adjusted. Use hundreds of add-ons by the community or create your own using Blender’s accessible Python API.",
          images: [
            {
              image: BlenderScreenImage,
              imageDescription: "Story Art, Drawing 2D in 3D Screen",
            },
            {
              image: BlenderScreen5Image,
              imageDescription: "Accessible Python API",
            },
          ],
        },
      ],
    },
    {
      heading: "Adopting Blender in production",
      body: [
        {
          content:
            "Switching to another software is something critical, and many studios are afraid to discover something new and different, because it costs a lot of time and money. Blender is sometimes very different from other DCCs in its mindset and its workflow and as a result people often do not use it at its full potential.",
        },
        {
          content:
            "I then personally think that one element can be improved to help onboarding studios. We have so many tutorials by artists for artists (and it’s awesome!), and even in the Blender Cloud, you have a lot of resources about creation or how to use Blender as an artist. However there are almost no specific tutorials and examples about workflows and how it is used in studios, nor best practices regarding links and collections. These are topics Blender Cloud may propose.",
        },
      ],
    },
    {
      heading: "Conclusion",
      body: [
        {
          content:
            "This production on Blender was a great experience for us. We were able to integrate the application into our in-house pipeline and connect it to the other applications quite easily thanks to the strength of the Python API. In spite of some features that would need some maturity we had the confirmation that Blender is production ready and comes with tools that can really push up our way of working in terms of creativity. ",
        },
      ],
    },
  ];

  return (
    <>
      <NextSeo
        title="Customer Story Overview"
        description="Mercury Customer Story Overview Example Page"
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
        {/* ----------------------------- Hero ----------------------------- */}
        <HeroBlock
          logo={<BlenderLogo h="48px" w="auto" />}
          image={Office6}
          company="Blender"
          title="Everyone should be free to create 3D CG content with Blender free tools"
          body="The Blender Foundation (2002) is an independent public benefit organization. Its spin-off corporation Blender Institute (2007) hosts the foundation’s offices and currently employs 24 people who work on the Blender software and creative projects to validate and test Blender in production environments."
          bg={heroBG}
          colorScheme={color}
        />

        {/* -------------------------- Testimonial ------------------------- */}
        <Box mb={10} mt={-32}>
          <Container maxW="container.xl">
            <Flex
              align="center"
              direction={["column", "column", "column", "row"]}
            >
              {/* ----------------------- Testimonial ---------------------- */}
              <TestimonialBlock
                body="More animators who are not from 3D are choosing Blender as a ‘steppin-up’ tool not only because it is free software but because of Grease Pencil. This is an important factor for our decision"
                author="Hiroyasu Kobayashi, Senior Animation Artist"
                colorScheme={color}
                bodyColor={accentColor}
                authorColor={textMuted}
              />

              {/* ---------------------- Company Info ---------------------- */}
              <CompanyInfo
                name="Blender Foundation"
                url="https://www.blender.org"
                logo={<BlenderLogo />}
                info={[
                  { key: "Industry", value: "CGI Tech" },
                  { key: "Location", value: "Amsterdam, NL" },
                  { key: "Type", value: "3D Animation" },
                ]}
              />
            </Flex>
          </Container>
        </Box>

        {/* --------------------------- Contents --------------------------- */}
        <Container maxW="container.xl">
          {content.map((c, idx) => (
            <Box fontSize="xl" maxW="auto" mb={[5, 10, 20, 20]} key={idx}>
              <Heading as="h3" mb={8}>
                {c.heading}
              </Heading>
              {c.body.map((b, i) => (
                <Content
                  key={i}
                  color={useColorModeValue("current", "whiteAlpha.700")}
                  {...b}
                />
              ))}
            </Box>
          ))}
        </Container>

        <Divider />

        {/* ------------------------ Related Stories ----------------------- */}
        <RelatedStoriesBlock
          colorScheme={color}
          title="Continue with Related Stories"
          items={[
            {
              href: "#",
              logo: <Logo1 color={useColorModeValue(null, "whiteAlpha.800")} />,
              image: Office1,
              company: "Company 1",
              body: "Company est omnis divisa in partes tres, quarum. At nos hinc posthac, sitientis piros Afros.",
            },
            {
              href: "#",
              logo: <Logo2 color={useColorModeValue(null, "whiteAlpha.800")} />,
              image: Office2,
              company: "Company 2",
              body: "Company Cras mattis iudicium purus sit amet fermentum. Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor.",
            },
            {
              href: "#",
              logo: <Logo5 color={useColorModeValue(null, "whiteAlpha.800")} />,
              image: Office3,
              company: "Company 3",
              body: "Company sociis natoque penatibus et magnis dis parturient. Hi omnes lingua, institutis, legibus inter se differunt.",
            },
          ]}
        />

        {/* ------------------------------ CTA ----------------------------- */}
        <CTABlock
          colorScheme={color}
          title={
            <>
              <Text
                as="span"
                fontSize={["1em", "1em", "1.5em"]}
                display={["inline", "inline", "block"]}
              >
                Questions?
              </Text>{" "}
              <Text as="span" display={["inline", "inline", "block"]}>
                We will guide you.
              </Text>
            </>
          }
          body="Ask about Themebiotic products, pricing, implementation, or anything else. Our highly trained representatives are ready to help."
          button={
            <Wrap flex="1" spacing={5} justify="center" align="center">
              <WrapItem>
                <Button size="lg" colorScheme={color} textTransform="uppercase">
                  <Text fontSize="sm" fontWeight="700" as="span">
                    Contact Us
                  </Text>
                </Button>
              </WrapItem>
              <WrapItem>
                <Button whiteSpace="pre-wrap" variant="link">
                  OR CALL 00800 1234 5678 (FREEPHONE)
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

const HeroBlock: React.FC<
  {
    logo: React.ReactNode;
    image: imageObject;
    company: string;
    title: string;
    body: string;
  } & ChakraProps &
    ThemingProps
> = memo(({ logo, title, body, company, image, colorScheme, ...rest }) => {
  return (
    <Box pb={48} zIndex={-1} overflow="hidden" pos="relative" {...rest}>
      <Container pt={[28]} maxW="container.xl">
        <Stack
          align="center"
          spacing={[5, 5, 10, 20]}
          direction={["column", "column", "row", "row"]}
        >
          <Box w="full" flex="1">
            <VStack align="start" spacing={6}>
              {logo}
              {title && <Heading>{title}</Heading>}
              {body && <Text fontSize="lg">{body}</Text>}
            </VStack>
          </Box>

          <Flex w="full" flex="1">
            <Box shadow="2xl" flex="1">
              {image && (
                <ImageLazyload rounded="md" alt={company} image={image} />
              )}
            </Box>
          </Flex>
        </Stack>
      </Container>
      <TornadoBackground
        colorScheme={colorScheme}
        top="0"
        pos="absolute"
        zIndex={-1}
      />
      <DividerTilt height="150px" position="bottom" />
    </Box>
  );
});

if (__DEV__) {
  HeroBlock.displayName = "HeroBlock";
}

const TestimonialBlock: React.FC<
  {
    body: string;
    author: string;
    authorColor?: string;
    bodyColor?: string;
  } & ChakraProps &
    ThemingProps
> = memo(({ author, authorColor, body, bodyColor, colorScheme, ...rest }) => {
  return (
    <Box
      maxW="700px"
      w={["full", "full", "full", "65%"]}
      mr={[0, 0, 10, 10]}
      {...rest}
    >
      <Flex direction={["column", "row", "row", "row"]}>
        <Icon
          mr={10}
          fontSize="48"
          as={ImQuotesLeft}
          color={useColorModeValue(`${colorScheme}.100`, `${colorScheme}.400`)}
        />
        <Box>
          {body && (
            <Text color={bodyColor} mb={2} fontSize="2xl">
              {body}
            </Text>
          )}
          {author && <Text color={authorColor}>— {author}</Text>}
        </Box>
      </Flex>
    </Box>
  );
});

if (__DEV__) {
  TestimonialBlock.displayName = "TestimonialBlock";
}

const CompanyInfo: React.FC<
  {
    name: string;
    url: string;
    logo: React.ReactNode;
    info: {
      key: string;
      value: string;
    }[];
  } & ChakraProps &
    ThemingProps
> = memo(({ name, url, logo, info, ...rest }) => {
  const textMuted = useColorModeValue("gray.500", "gray.500");
  return (
    <Box
      flex="1"
      p={10}
      mt={[10, 10, 10, 0]}
      bg={useColorModeValue("whiteAlpha.800", "blackAlpha.600")}
      shadow="xl"
      rounded="md"
      ml={["unset", "unset", "unset", "auto"]}
      maxW={["full", "full", "auto", "300px"]}
      {...rest}
    >
      {logo}
      <Box mt={2} color={textMuted}>
        <List>
          <ListItem>
            <Link d="flex" alignItems="center" href={url} isExternal>
              {name} <ExternalLinkIcon ml="2" />
            </Link>
          </ListItem>
          {info.map((i, idx) => (
            <ListItem key={idx}>
              <Flex>
                <Text mr={1} fontWeight="bold">
                  {i.key}:
                </Text>
                <Text flex="1">{i.value}</Text>
              </Flex>
            </ListItem>
          ))}
        </List>
      </Box>
    </Box>
  );
});

if (__DEV__) {
  CompanyInfo.displayName = "CompanyInfo";
}

/* ------------------------------ Content Types ----------------------------- */

type T_Content = {
  heading?: string;
  body: T_ContentBody[];
};

type T_ContentBody = {
  content: string;
  image?: imageObject;
  imageDescription?: string;
  imageRatio?: number;
  images?: T_ContentBodyImages[];
};

type T_ContentBodyImages = {
  image: imageObject;
  imageDescription: string;
};

const Content: React.FC<T_ContentBody & ChakraProps> = memo(
  ({
    content,
    image,
    images,
    imageDescription,
    imageRatio,
    color,
    ...rest
  }) => {
    const textMuted = useColorModeValue("gray.500", "gray.500");
    return (
      <Box {...rest}>
        <Box fontSize="xl" maxW="700px" mb={4}>
          <Text color={color} dangerouslySetInnerHTML={{ __html: content }} />
        </Box>
        {image && (
          <Box maxW="1000px" mt={10} mb={imageDescription ? 6 : 10}>
            <ImageLazyload rounded="md" ratio={imageRatio} image={image} />
            {imageDescription && (
              <Text
                textAlign={["center", "center", "end"]}
                color={textMuted}
                mt={2}
                fontSize="sm"
              >
                {imageDescription}
              </Text>
            )}
          </Box>
        )}
        {images && (
          <Stack
            spacing={[5, 5, 10]}
            my={10}
            direction={["column", "column", "row", "row"]}
          >
            {images.map((i, idx) => (
              <ContentImages color={textMuted} key={idx} {...i} />
            ))}
          </Stack>
        )}
      </Box>
    );
  },
);

if (__DEV__) {
  Content.displayName = "Content";
}

const ContentImages: React.FC<ChakraProps & T_ContentBodyImages> = memo(
  ({ image, imageDescription, color }) => {
    return (
      <Flex direction={"column"} w="full" flex="1">
        <Box w="full">
          <ImageLazyload rounded="md" image={image} />
        </Box>
        {imageDescription && (
          <Text
            textAlign={["center", "center", "end"]}
            color={color}
            mt={2}
            fontSize="sm"
          >
            {imageDescription}
          </Text>
        )}
      </Flex>
    );
  },
);

if (__DEV__) {
  ContentImages.displayName = "ContentImages";
}

const RelatedStoriesBlock: React.FC<
  {
    items: {
      body: string;
      company: string;
      href: string;
      image: imageObject;
      logo: React.ReactNode;
    }[];
    title: string;
  } & ChakraProps &
    ThemingProps
> = memo(({ items = [], title, colorScheme }) => {
  return (
    <Container my={[10, 10, 20, 20]} maxW="container.xl">
      {title && (
        <Heading
          textAlign={["center", "center", "start"]}
          mb={10}
          fontSize="2xl"
          as="h3"
        >
          {title}
        </Heading>
      )}

      <SimpleGrid spacing={10} columns={[1, 1, 2, 3]}>
        {items.map((item, idx) => (
          <Flex
            key={idx}
            direction="column"
            rounded="xl"
            overflow="hidden"
            bg={useColorModeValue("white", "gray.700")}
            shadow="xl"
          >
            <Box pos="relative">
              <Box flex="1">
                <ImageLazyload
                  w="100%"
                  h="100%"
                  ratio={3 / 2}
                  objectFit="cover"
                  alt={item.company}
                  image={item.image}
                />
              </Box>
              <DividerCurve
                invert
                height="60px"
                position="bottom"
                color={useColorModeValue("white", "gray.700")}
              />
            </Box>
            <Box p={10} pt={5} pb={0}>
              <Flex mb={5}>{item.logo}</Flex>
              <Text
                color={useColorModeValue("current", "whiteAlpha.700")}
                mb={5}
              >
                {item.body}
              </Text>
            </Box>
            {item.href && (
              <Box p={10} pt={0} mt="auto">
                <ReadMoreLink href={item.href} colorScheme={colorScheme}>
                  Read story
                </ReadMoreLink>
              </Box>
            )}
          </Flex>
        ))}
      </SimpleGrid>
    </Container>
  );
});

if (__DEV__) {
  RelatedStoriesBlock.displayName = "RelatedStoriesBlock";
}

const ReadMoreLink: React.FC<{ href: string } & ChakraProps & ThemingProps> =
  memo(({ colorScheme = "blue", children, href, ...rest }) => {
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

const CTABlock: React.FC<
  {
    title: string | React.ReactNode;
    body: string | React.ReactNode;
    button: React.ReactNode;
  } & ChakraProps &
    ThemingProps
> = memo(({ title, body, button, colorScheme }) => {
  return (
    <Box overflow="hidden" pos="relative" py={[10, 20, 20]}>
      <Container maxW="container.xl">
        <Stack direction={["column", "column", "row"]} align="center">
          <Box flex="1">
            {title && (
              <Heading textAlign={["center", "center", "start"]} mb={5} as="h3">
                {title}
              </Heading>
            )}
            {body && (
              <Text
                mb={5}
                fontSize="lg"
                textAlign={["center", "center", "start"]}
                color={useColorModeValue("gray.600", "gray.300")}
              >
                {body}
              </Text>
            )}
          </Box>
          {button}
        </Stack>
      </Container>
      <TornadoBackground
        colorScheme={colorScheme}
        top="0"
        pos="absolute"
        zIndex={-1}
      />
    </Box>
  );
});

if (__DEV__) {
  CTABlock.displayName = "CTABlock";
}

const TornadoBackground: React.FC<ChakraProps & ThemingProps> = memo(
  ({ colorScheme = "blue", ...rest }) => {
    // Light
    const color1Light = useToken("colors", `whiteAlpha.900`);
    const color2Light = useToken("colors", `${colorScheme}.50`);
    // Dark
    const color1Dark = useToken("colors", `${colorScheme}.900`);
    const color2Dark = useToken("colors", `${colorScheme}.800`);

    const color1 = useColorModeValue(color1Light, color1Dark);
    const color2 = useColorModeValue(color2Light, color2Dark);

    return (
      <chakra.svg width="2000" height="1500" viewBox="0 0 2000 1500" {...rest}>
        <rect fill={color2} width="2000" height="1500" />
        <defs>
          <radialGradient id="a" gradientUnits="objectBoundingBox">
            <stop offset="0" stopColor={color1} />
            <stop offset="1" stopColor={color2} />
          </radialGradient>
          <linearGradient
            id="b"
            gradientUnits="userSpaceOnUse"
            x1="0"
            y1="750"
            x2="1550"
            y2="750"
          >
            <stop offset="0" stopColor={color1} />
            <stop offset="1" stopColor={color2} />
          </linearGradient>
          <path
            id="s"
            fill="url(#b)"
            d="M1549.2 51.6c-5.4 99.1-20.2 197.6-44.2 293.6c-24.1 96-57.4 189.4-99.3 278.6c-41.9 89.2-92.4 174.1-150.3 253.3c-58 79.2-123.4 152.6-195.1 219c-71.7 66.4-149.6 125.8-232.2 177.2c-82.7 51.4-170.1 94.7-260.7 129.1c-90.6 34.4-184.4 60-279.5 76.3C192.6 1495 96.1 1502 0 1500c96.1-2.1 191.8-13.3 285.4-33.6c93.6-20.2 185-49.5 272.5-87.2c87.6-37.7 171.3-83.8 249.6-137.3c78.4-53.5 151.5-114.5 217.9-181.7c66.5-67.2 126.4-140.7 178.6-218.9c52.3-78.3 96.9-161.4 133-247.9c36.1-86.5 63.8-176.2 82.6-267.6c18.8-91.4 28.6-184.4 29.6-277.4c0.3-27.6 23.2-48.7 50.8-48.4s49.5 21.8 49.2 49.5c0 0.7 0 1.3-0.1 2L1549.2 51.6z"
          />
          <g id="g">
            <use href="#s" transform="scale(0.12) rotate(60)" />
            <use href="#s" transform="scale(0.2) rotate(10)" />
            <use href="#s" transform="scale(0.25) rotate(40)" />
            <use href="#s" transform="scale(0.3) rotate(-20)" />
            <use href="#s" transform="scale(0.4) rotate(-30)" />
            <use href="#s" transform="scale(0.5) rotate(20)" />
            <use href="#s" transform="scale(0.6) rotate(60)" />
            <use href="#s" transform="scale(0.7) rotate(10)" />
            <use href="#s" transform="scale(0.835) rotate(-40)" />
            <use href="#s" transform="scale(0.9) rotate(40)" />
            <use href="#s" transform="scale(1.05) rotate(25)" />
            <use href="#s" transform="scale(1.2) rotate(8)" />
            <use href="#s" transform="scale(1.333) rotate(-60)" />
            <use href="#s" transform="scale(1.45) rotate(-30)" />
            <use href="#s" transform="scale(1.6) rotate(10)" />
          </g>
        </defs>
        <g transform="">
          <g transform="">
            <circle fill="url(#a)" r="3000" />
            <g opacity="0.5">
              <circle fill="url(#a)" r="2000" />
              <circle fill="url(#a)" r="1800" />
              <circle fill="url(#a)" r="1700" />
              <circle fill="url(#a)" r="1651" />
              <circle fill="url(#a)" r="1450" />
              <circle fill="url(#a)" r="1250" />
              <circle fill="url(#a)" r="1175" />
              <circle fill="url(#a)" r="900" />
              <circle fill="url(#a)" r="750" />
              <circle fill="url(#a)" r="500" />
              <circle fill="url(#a)" r="380" />
              <circle fill="url(#a)" r="250" />
            </g>
            <g transform="rotate(-25.2 0 0)">
              <use href="#g" transform="rotate(10)" />
              <use href="#g" transform="rotate(120)" />
              <use href="#g" transform="rotate(240)" />
            </g>
            <circle fillOpacity="0.07" fill="url(#a)" r="3000" />
          </g>
        </g>
      </chakra.svg>
    );
  },
);

if (__DEV__) {
  TornadoBackground.displayName = "TornadoBackground";
}

export default CustomerStoryOverviewPage;
