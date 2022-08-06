import {
  GoPackage,
  BsPatchCheck,
  FaShippingFast,
  RiDoubleQuotesL,
  BsArrowRight,
  MdPriceCheck,
} from "@react-icons";

import React, { useContext, memo } from "react";

import { NextSeo } from "next-seo";
import NextLink from "next/link";

import {
  AspectRatio,
  Box,
  Button,
  ButtonProps,
  Flex,
  Heading,
  HeadingProps,
  Container,
  Text,
  VStack,
  Icon,
  Link,
  LinkBox,
  LinkOverlay,
  Stack,
  SimpleGrid,
  chakra,
  useColorModeValue,
  ChakraProps,
  ThemingProps,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";

import Logo1 from "@definitions/brands/logo-1";
import Logo2 from "@definitions/brands/logo-2";
import Logo3 from "@definitions/brands/logo-3";
import Logo4 from "@definitions/brands/logo-4";
import Logo5 from "@definitions/brands/logo-5";
import { ThemeColorContext } from "@definitions/context/theme";
import { __DEV__ } from "@definitions/utils";

import ImageLazyload from "@components/image-lazyload";
import ImageLazyloadWoRatio from "@components/image-lazyload/without-aspect-ratio";

import Furniture1 from "@assets/images/furniture-1.jpg?resize&img";
import Furniture2 from "@assets/images/furniture-2.jpg?resize&img";
import Furniture3 from "@assets/images/furniture-3.jpg?resize&img";
import Furniture4 from "@assets/images/furniture-4.jpg?resize&img";
import Furniture5 from "@assets/images/furniture-5.jpg?resize&img";
import Furniture6 from "@assets/images/furniture-6.jpg?resize&img";
import Furniture7 from "@assets/images/furniture-7.jpg?resize&img";
import Furniture8 from "@assets/images/furniture-8.jpg?resize&img";
import Furniture9 from "@assets/images/furniture-9.jpg?resize&img";
import Furniture10 from "@assets/images/furniture-10.jpg?resize&img";
import Furniture11 from "@assets/images/furniture-11.jpg?resize&img";
import Interior1 from "@assets/images/interior-1.jpg?resize&size=1920&img";

import NewsletterBlock from "@blocks/newsletter-2";

/**
 * Global Page Styles
 */
const h4Style: HeadingProps = {
  as: "h4",
  textTransform: "uppercase",
  fontSize: "xs",
  fontWeight: 600,
  color: "gray.500",
};

const h3Style: HeadingProps = {
  as: "h3",
  fontWeight: 400,
};

const spacingL1 = [10, 50, 100];
// const spacingL2 = [10, 20, 40];
const spacingL3 = [5, 10, 20];
const spacingL4 = [2, 4, 6, 10];

const FurnitureShopPage: React.FC = () => {
  const theme = useContext(ThemeColorContext);
  const color = theme.colorScheme; // global default primary theme color

  /* Buton Styles */
  const btn: ButtonProps = {
    p: 4,
    rounded: "none",
    textTransform: "uppercase",
    whiteSpace: "pre-wrap",
    height: "auto",
    fontSize: ["xs", "sm", "md"],
  };

  const btnXL: ButtonProps = {
    ...btn,
    p: [4, 4, 6],
    variant: "outline",
    justifyContent: "space-between",
  };

  const btnAct: ButtonProps = {
    ...btn,
    bg: useColorModeValue("black", "whiteAlpha.500"),
    color: useColorModeValue("whiteAlpha.800", "blackAlpha.800"),
    _hover: {
      bg: useColorModeValue("blackAlpha.700", "whiteAlpha.900"),
    },
    _active: {
      bg: useColorModeValue("blackAlpha.900", "whiteAlpha.900"),
    },
  };

  return (
    <>
      <NextSeo
        title="Furniture Shop"
        description="Mercury Furniture Shop Example Page"
      />
      <chakra.main
        sx={{
          "*::selection": {
            color: useColorModeValue(`${color}.600`, `${color}.400`),
            background: useColorModeValue(`${color}.200`, `${color}.700`),
          },
        }}
      >
        <VStack align="start" mb={spacingL1} spacing={spacingL1}>
          <HeroBlock
            image={Furniture1}
            color={useColorModeValue("whiteAlpha.800", "whiteAlpha.800")}
            title="Aesthetic & Stylish modern furniture"
            link="Explore All Options"
            href="#"
            buttonStyle={btn}
          />
          <ClientsBlock
            items={[
              { title: "logo 1", logo: <Logo1 color="current" /> },
              { title: "logo 2", logo: <Logo2 color="current" /> },
              { title: "logo 3", logo: <Logo3 color="current" /> },
              { title: "logo 4", logo: <Logo4 color="current" /> },
              { title: "logo 5", logo: <Logo5 color="current" /> },
            ]}
          />
          <IntroBlock
            image1={Furniture2}
            image2={Furniture3}
            blockTitle="Shop, Share & Inspire"
            title={
              <>
                <Text as="span">The luxury line,</Text>{" "}
                <Text as="span" display={["inline", "inline", "block"]}>
                  by Albertino Moretti.
                </Text>
              </>
            }
            body="My internal design strategy has always been a mixture of frugal findings and luxury splurges. Most internal designers encourage to spend more money on several lock pieces in your home."
            link="Discover Moretti collection"
            href="#"
            buttonStyle={btnXL}
          />
          <ProductsBlock
            tag="Trending products"
            title="Stylish modern furnitures"
            link="View all products"
            href="#"
            items={[
              {
                href: "#",
                title: "Vedbo",
                image: Furniture4,
                prefix: "$",
                suffix: "USD",
                price: 199.99,
              },
              {
                href: "#",
                title: "Fröset",
                image: Furniture5,
                prefix: "$",
                suffix: "USD",
                price: 79.99,
              },
              {
                href: "#",
                title: "Bjorkberget",
                image: Furniture6,
                prefix: "$",
                suffix: "USD",
                price: 219.99,
              },
              {
                href: "#",
                title: "Söderhamn",
                image: Furniture7,
                prefix: "$",
                suffix: "USD",
                price: 69.99,
              },
              {
                href: "#",
                title: "Aksdal",
                image: Furniture8,
                prefix: "$",
                suffix: "USD",
                price: 89.99,
              },
              {
                href: "#",
                title: "Bredskär",
                image: Furniture9,
                prefix: "$",
                suffix: "USD",
                price: 114.99,
              },
              {
                href: "#",
                title: "Stjärna",
                image: Furniture10,
                prefix: "$",
                suffix: "USD",
                price: 123.99,
              },
              {
                href: "#",
                title: "Orrlöt",
                image: Furniture11,
                prefix: "$",
                suffix: "USD",
                price: 59.99,
              },
            ]}
            buttonStyle={btnAct}
          />
          <Paralax image={Interior1} text="Let's create your comfort zone" />
          <Testimonial
            buttonStyle={btnAct}
            image={Furniture10}
            alt="Furniture"
            link="Cozy living room collection"
            href="#"
            text="Your home should be a story of who you are, and be a collection of what you love"
          />
          <DecorationPosts
            tag="Design & Decoration"
            title="Read about the latest modern furniture and decoration posts"
            items={[
              {
                flex: 2,
                tag: "News",
                title:
                  "Comfortable modern living room furniture in velvet - Interior design trends 2022",
                image: Furniture3,
                link: "Read Article",
                href: "#",
              },
              {
                flex: 1,
                tag: "interview",
                title: "Why you need to choose colourful furniture",
                image: Furniture10,
                link: "Read Article",
                href: "#",
              },
              {
                flex: 1,
                tag: "interview",
                title: "Brightening up your house with modern furniture",
                image: Furniture8,
                link: "Read Article",
                href: "#",
              },
            ]}
          />
          <Features
            items={[
              {
                title: "Free Shipping",
                subtitle: "Worldwide",
                icon: <Icon as={FaShippingFast} w={10} h={10} mb={4} />,
              },
              {
                title: "Best Prices",
                subtitle: "10% Discount",
                icon: <Icon as={MdPriceCheck} w={10} h={10} mb={4} />,
              },
              {
                title: "Premium Warranty",
                subtitle: "2 year warranty",
                icon: <Icon as={BsPatchCheck} w={10} h={10} mb={4} />,
              },
              {
                title: "Easy Returns",
                subtitle: "Within 30 days",
                icon: <Icon as={GoPackage} w={10} h={10} mb={4} />,
              },
            ]}
          />
          <NewsletterSubscription colorScheme={color} />
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

/**
 * Hero Block
 */
const HeroBlock: React.FC<
  {
    image: imageObject;
    title: string;
    link: string;
    href: string;
    buttonStyle: ButtonProps;
  } & ChakraProps &
    ThemingProps
> = memo(({ image, title, link, href, buttonStyle, color }) => {
  return (
    <Flex
      align="center"
      justify="center"
      height="full"
      width="full"
      pos="relative"
      _after={{
        content: "''",
        pos: "absolute",
        zIndex: 0,
        flex: 1,
        top: 0,
        left: 0,
        w: "full",
        h: "full",
        bg: useColorModeValue("whiteAlpha.100", "blackAlpha.800"),
      }}
    >
      {image && (
        <ImageLazyload
          ratio={[1.33, 1.75, 2, 2.333]}
          flex="1"
          width="full"
          height="full"
          objectFit="cover"
          image={image}
          alt={title}
        />
      )}
      <Container zIndex={1} mt={16} pos={["absolute"]} maxW="container.md">
        <VStack spacing={[2, 4, 8]}>
          {title && (
            <Heading
              as="h1"
              color={color}
              textAlign="center"
              fontSize={["2xl", "5xl", "7xl", "7xl"]}
              lineHeight={1}
            >
              {title}
            </Heading>
          )}
          {link && href && (
            <NextLink href={href} passHref>
              <Button rightIcon={<BsArrowRight />} {...buttonStyle}>
                {link}
              </Button>
            </NextLink>
          )}
        </VStack>
      </Container>
    </Flex>
  );
});

if (__DEV__) {
  HeroBlock.displayName = "HeroBlock";
}

/**
 * Clients Block
 */
const ClientsBlock: React.FC<{
  items: { title: string; logo: React.ReactNode }[];
}> = memo(({ items = [] }) => {
  return (
    <Box width="full">
      <Container maxW="container.xl">
        <Box mx={[1]}>
          <Wrap
            align="center"
            justify="center"
            spacing={spacingL4}
            width="full"
            color={useColorModeValue("gray.700", "whiteAlpha.700")}
          >
            {items.map((item) => (
              <WrapItem key={item.title}>{item.logo}</WrapItem>
            ))}
          </Wrap>
        </Box>
      </Container>
    </Box>
  );
});

if (__DEV__) {
  ClientsBlock.displayName = "ClientsBlock";
}

/**
 * Intro Block
 */
const IntroBlock: React.FC<{
  image1: imageObject;
  image2: imageObject;
  blockTitle?: string | React.ReactNode;
  title?: string | React.ReactNode;
  body?: string | React.ReactNode;
  link?: string;
  href?: string;
  buttonStyle: ButtonProps;
}> = memo(
  ({
    image1,
    image2,
    blockTitle,
    title,
    body,
    link = "Discover",
    href,
    buttonStyle,
  }) => {
    return (
      <Box width="full">
        <Container maxW="container.xl">
          <VStack width="full" align="start" spacing={spacingL3}>
            {blockTitle && (
              <Heading
                fontSize={["3xl", "5xl", "6xl"]}
                fontWeight={300}
                lineHeight={1}
                maxW={550}
              >
                {blockTitle}
              </Heading>
            )}
            <Stack
              width="full"
              spacing={spacingL4}
              direction={["column", "column", "row"]}
            >
              {image1 && (
                <Box width="full">
                  <ImageLazyload
                    flex="1"
                    ratio={3 / 4}
                    objectFit="cover"
                    width="full"
                    height="full"
                    // image={Furniture2}
                    image={image1}
                    alt=""
                  />
                </Box>
              )}
              {image2 && (
                <Box width="full">
                  <ImageLazyload
                    flex="1"
                    ratio={1}
                    objectFit="cover"
                    width="full"
                    height="full"
                    image={image2}
                    alt=""
                  />
                </Box>
              )}
            </Stack>

            <Stack
              width="full"
              spacing={spacingL4}
              direction={["column", "column", "row"]}
            >
              <Box width="full" maxW={["full", "full", "50%"]}>
                {title && (
                  <Heading as="h3" fontSize="3xl" fontWeight={400} mr="auto">
                    {title}
                  </Heading>
                )}
              </Box>
              <Box width="full" maxW={["full", "full", "50%"]}>
                {body && (
                  <Text mb={spacingL4} fontSize="lg">
                    {body}
                  </Text>
                )}
                {href && link && (
                  <NextLink href={href} passHref>
                    <Button
                      isFullWidth
                      rightIcon={
                        <Icon as={BsArrowRight} width={6} height={6} />
                      }
                      maxWidth={[480, 480, "full"]}
                      {...buttonStyle}
                    >
                      {link}
                    </Button>
                  </NextLink>
                )}
              </Box>
            </Stack>
          </VStack>
        </Container>
      </Box>
    );
  },
);

if (__DEV__) {
  IntroBlock.displayName = "IntroBlock";
}

/**
 * Product Block
 */
const ProductsBlock: React.FC<{
  title?: string;
  tag?: string;
  link?: string;
  href?: string;
  items: {
    title: string;
    href: string;
    prefix: string;
    suffix: string;
    price: number;
    image: imageObject;
  }[];
  buttonStyle: ButtonProps;
}> = memo(({ tag, title, items = [], link, href, buttonStyle }) => {
  return (
    <Box width="full">
      <Container maxW="container.xl">
        {(tag || title) && (
          <VStack align={["start"]} mb={spacingL3}>
            {tag && <Heading {...h4Style}>{tag}</Heading>}
            {title && <Heading {...h3Style}>{title}</Heading>}
          </VStack>
        )}
        <SimpleGrid
          mb={[5, 10, 10]}
          spacing={[5, 10, 10]}
          columns={[1, 1, 2, 4]}
        >
          {items.map((item) => (
            <NextLink key={item.title} href={item.href} passHref>
              <LinkBox role="group" key={item.title} as="article">
                <VStack align="start" spacing={5}>
                  <Box
                    overflow="hidden"
                    pos="relative"
                    width="full"
                    height="full"
                    flex="1"
                  >
                    <ImageLazyload
                      flex="1"
                      ratio={3 / 4}
                      objectFit="cover"
                      height="full"
                      width="full"
                      image={item.image}
                      alt={item.title}
                    />
                    <Box
                      pos="absolute"
                      bottom={0}
                      bg={useColorModeValue("gray.50", "gray.900")}
                      p={4}
                      m="4px"
                      textAlign="center"
                      width="calc(100% - 8px)"
                      opacity={0}
                      transform="translateY(100px)"
                      transition="all 300ms ease-in-out"
                      _groupHover={{
                        transform: "translateY(0)",
                        opacity: 0.9,
                      }}
                    >
                      <Text
                        fontSize="xs"
                        fontWeight="bold"
                        textTransform="uppercase"
                        letterSpacing={"1px"}
                      >
                        View Product
                      </Text>
                    </Box>
                  </Box>
                  <LinkOverlay href="#">
                    <VStack align="start" spacing={2}>
                      <Text fontWeight={600}>{item.title}</Text>
                      <Text fontWeight={300} fontSize="2xl">
                        <Text mr={1} as="span">
                          {item.prefix}
                        </Text>
                        <Text mr={1} as="span">
                          {item.price}
                        </Text>
                        <Text as="span">{item.suffix}</Text>
                      </Text>
                    </VStack>
                  </LinkOverlay>
                </VStack>
              </LinkBox>
            </NextLink>
          ))}
        </SimpleGrid>
        {link && href && (
          <NextLink href={href} passHref>
            <Button
              {...buttonStyle}
              rightIcon={<Icon as={BsArrowRight} width={6} height={6} />}
            >
              {link}
            </Button>
          </NextLink>
        )}
      </Container>
    </Box>
  );
});

if (__DEV__) {
  ProductsBlock.displayName = "ProductsBlock";
}

/**
 * Paralax Block
 */
const Paralax: React.FC<{
  buttonStyle?: ButtonProps;
  image: imageObject;
  text: string;
}> = memo(({ text, image }) => {
  return (
    <Box
      width="full"
      height="full"
      pos="relative"
      overflow="hidden"
      // _before={{
      //   content: "''",
      //   pos: "absolute",
      //   width: "full",
      //   height: "full",
      //   display: "block",
      //   backgroundImage: Interior1.src,
      //   backgroundRepeat: "no-repeat",
      //   backgroundSize: "cover",
      //   backgroundPosition: "center",
      //   backgroundAttachment: "fixed",
      // }}
      backgroundImage={image && image.src ? image.src : null}
      backgroundRepeat="no-repeat"
      backgroundSize="cover"
      backgroundPosition="center"
      backgroundAttachment="fixed"
    >
      <Container maxW="container.xl">
        <AspectRatio ratio={[4 / 3, 16 / 9, 21 / 6]}>
          <Heading fontSize={["3xl", "5xl", "6xl"]} color="whiteAlpha.700">
            {text}
          </Heading>
        </AspectRatio>
      </Container>
    </Box>
  );
});

if (__DEV__) {
  Paralax.displayName = "Paralax";
}

/**
 * Testimonial Block
 */
const Testimonial: React.FC<{
  buttonStyle: ButtonProps;
  image: imageObject;
  alt?: string;
  text: string;
  link: string;
  href: string;
}> = memo(({ alt, text, image, link, href, buttonStyle }) => {
  return (
    <Box
      py={[5, 5, 10]}
      width="full"
      pos="relative"
      _before={{
        content: "''",
        pos: "absolute",
        // top: [5, 5, 20],
        bottom: 0,
        display: "block",
        width: ["full", "full", "full", "95%"],
        height: ["full", "full", "full", 350],
        bg: useColorModeValue("gray.100", "gray.900"),
        zIndex: 0,
      }}
    >
      <Container maxW="container.xl">
        <Flex
          align={["start", "center", "end"]}
          // direction={["column", "column", "row"]}
          direction={["column-reverse", "column-reverse", "row"]}
        >
          <Flex
            pos="relative"
            zIndex={1}
            direction={"column"}
            mb={[5, 5, 0]}
            mr={[0, 0, 10]}
            maxW={["full", 500, 500]}
          >
            <Heading
              fontSize={["2xl", "3xl", "4xl"]}
              fontWeight={300}
              mb={[5, 5, 10]}
            >
              <Icon as={RiDoubleQuotesL} />
              <Text as="span">{text}</Text>
            </Heading>
            {link && href && (
              <NextLink href={href} passHref>
                <Button
                  {...buttonStyle}
                  alignSelf="start"
                  rightIcon={<Icon as={BsArrowRight} width={5} height={5} />}
                >
                  {link}
                </Button>
              </NextLink>
            )}
          </Flex>
          {image && (
            <Box
              ml={["auto"]}
              mb={[10, 10, 0]}
              width="full"
              height="full"
              flex="1"
              maxW={["full", "full", "full", 500]}
            >
              <ImageLazyload ratio={4 / 3} image={image} alt={alt} />
            </Box>
          )}
        </Flex>
      </Container>
    </Box>
  );
});

if (__DEV__) {
  Testimonial.displayName = "Testimonial";
}

/**
 * Decoration Posts Block
 */
const DecorationPosts: React.FC<{
  tag?: string;
  title?: string;
  items: {
    flex: number;
    tag?: string;
    title: string;
    image: imageObject;
    link: string;
    href: string;
  }[];
}> = memo(({ tag, title, items = [] }) => {
  return (
    <Box width="full">
      <Container maxW="container.xl">
        {(tag || title) && (
          <VStack align={["start"]} mb={spacingL3} maxW={["full", "full", 600]}>
            {tag && <Heading {...h4Style}>{tag}</Heading>}
            {title && <Heading {...h3Style}>{title}</Heading>}
          </VStack>
        )}

        <Stack
          // align={["stretch"]}
          direction={["column", "column", "row"]}
          spacing={10}
        >
          {items.map((item) => (
            <Flex
              key={item.title}
              flex={item.flex ? item.flex : null}
              height="full"
              direction={"column"}
            >
              <ImageLazyloadWoRatio
                flex="1"
                w="full"
                h={["full", "full", 375, 500]}
                objectFit="cover"
                image={item.image}
                alt={item.title}
              />
              <Box>
                <Text py={6} lineHeight={1.1} fontSize="2xl" fontWeight={300}>
                  {item.title}
                </Text>
                <NextLink href={item.href} passHref>
                  <Button
                    size="xs"
                    p={4}
                    rounded="none"
                    textTransform="uppercase"
                    whiteSpace="pre-wrap"
                    variant="outline"
                    rightIcon={<Icon as={BsArrowRight} width={4} height={4} />}
                  >
                    {item.link}
                  </Button>
                </NextLink>
              </Box>
            </Flex>
          ))}
        </Stack>
      </Container>
    </Box>
  );
});

if (__DEV__) {
  DecorationPosts.displayName = "DecorationPosts";
}

/**
 * Features Block
 */
const Features: React.FC<{
  items: {
    title: string;
    subtitle: string;
    icon: React.ReactNode;
  }[];
}> = memo(({ items = [] }) => {
  return (
    <Box w="full">
      <Container maxW="container.xl">
        <SimpleGrid spacing={6} columns={[1, 2, 2, 4]}>
          {items.map((item) => (
            <Box
              key={item.title}
              px={6}
              py={10}
              bg={useColorModeValue("gray.50", "gray.900")}
              textAlign="center"
            >
              {item.icon}
              <Heading as="h4" fontSize="xl" fontWeight={300} mb={2}>
                {item.title}
              </Heading>
              <Text
                fontSize="sm"
                fontWeight={500}
                textTransform={"uppercase"}
                color={useColorModeValue("gray.500", "whiteAlpha.600")}
              >
                {item.subtitle}
              </Text>
            </Box>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
});

if (__DEV__) {
  Features.displayName = "Features";
}

/**
 * Newsletter Subscription Block
 */
const NewsletterSubscription: React.FC<ChakraProps & ThemingProps> = memo(
  ({ colorScheme }) => {
    return (
      <Box width="full">
        <Container maxW="container.md">
          <NewsletterBlock
            colorScheme={colorScheme}
            title={
              <Text as="span" fontWeight={700}>
                Get the latest offers
              </Text>
            }
            body={
              "Join our email list and be the first to know about new limited edition products, material innovations, and lots of other fun updates."
            }
            comment={
              <Text as="span">
                Note: You can opt-out at any time. See our{" "}
                <NextLink href="#" passHref>
                  <Link fontWeight="bold">Privacy Policy</Link>
                </NextLink>{" "}
                and{" "}
                <NextLink href="#" passHref>
                  <Link fontWeight="bold">Terms</Link>
                </NextLink>
              </Text>
            }
          />
        </Container>
      </Box>
    );
  },
);
if (__DEV__) {
  NewsletterSubscription.displayName = "NewsletterSubscription";
}
export default FurnitureShopPage;
