import React, { useContext, memo } from "react";

import { NextSeo } from "next-seo";
import NextLink from "next/link";

import { Search2Icon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  chakra,
  ChakraProps,
  Container,
  Flex,
  Input,
  Stack,
  Text,
  ThemingProps,
  useColorModeValue,
  Wrap,
  WrapItem,
  InputGroup,
  InputRightElement,
  Link,
} from "@chakra-ui/react";

import { ThemeColorContext } from "@definitions/context/theme";
import { __DEV__ } from "@definitions/utils";

import ArticleOverlaySimpleCard from "@components/article/article-overlay-simple-card";
import { Section } from "@components/common";
import PageTitle from "@components/page-title";

import Background1 from "@assets/images/background-1.jpg?resize&img";
import Background2 from "@assets/images/background-2.jpg?resize&img";
import Computer4 from "@assets/images/computer-4.jpg?resize&img";
import Computer6 from "@assets/images/computer-6.jpg?resize&img";
import Computer7 from "@assets/images/computer-7.jpg?resize&img";
import Computer8 from "@assets/images/computer-8.jpg?resize&img";
import Design1 from "@assets/images/design.jpg?resize&img";
import Headphones1 from "@assets/images/headphones-1.jpg?resize&img";
import Monitor1 from "@assets/images/monitor-1.jpg?resize&img";
import Phone1 from "@assets/images/phone-1.jpg?resize&img";
import Team6 from "@assets/images/team-6.jpg?resize&img";
import Tv1 from "@assets/images/tv-1.jpg?resize&img";

import NewsletterBlock from "@blocks/newsletter-2";

const BlogsGridPage: React.FC = () => {
  const theme = useContext(ThemeColorContext);
  const color = theme.colorScheme; // global default primary theme color

  /* -------------------------------- Styles -------------------------------- */
  const linkStyle = {
    color: "current",
    fontWeight: "bold",
    transition: "color 200ms ease-in-out",
    _hover: {
      textDecoration: "underline",
      color: `${color}.400`,
    },
  };

  /* ----------------------------- Page Contents ---------------------------- */
  const items = [
    {
      tag: "Design",
      image: Computer4,
      justify: "end",
      body: "Excepteur sint obcaecat cupiditat non proident culpa.",
    },
    {
      tag: "Wallpapers",
      badge: "Hot",
      justify: "start",
      image: Background2,
      bg: useColorModeValue("rgba(17, 113, 61,0.5)", "rgb(11, 53, 30,0.7)"),
      color: "whiteAlpha.800",
      title: "Inspiring Wallpapers",
      body: "Backgrounds in web design, examples and best practices.",
    },
    {
      tag: "Development",
      image: Computer6,
      body: "Excepteur sint obcaecat cupiditat non proident culpa.",
    },
    {
      tag: "Performance",
      image: Computer7,
      body: "Improving the performance of WebApps.",
    },
    {
      tag: "Game",
      image: Computer8,
      body: "How to Get Started in Game Streaming.",
    },
    {
      tag: "Promotion",
      badge: "Freebies",
      justify: "start",
      image: Background1,
      ratio: 16 / 9,
      hasRatio: true,
      bg: useColorModeValue(
        "rgba(212, 179, 255, 0.5)",
        "rgba(78, 32, 138,0.8)",
      ),
      color: useColorModeValue("purple.800", "purple.200"),
      // color: "whiteAlpha.800",
      title: "Design Tools",
      body: "Free icons & design tools for the startup companies",
    },
    {
      tag: "Design",
      image: Design1,
      body: "Excepteur sint obcaecat cupiditat non proident culpa.",
    },
    {
      tag: "Music",
      image: Headphones1,
      body: "The Best Noise-Cancelling Headphones for 2022.",
    },
    {
      tag: "Review",
      image: Monitor1,
      body: "Buying Guide: Best Monitors We've Tested.",
    },
    {
      tag: "Mobile",
      image: Phone1,
      body: "Excepteur sint obcaecat cupiditat non proident culpa.",
    },
    {
      tag: "E-Commerce",
      badge: "Featured",
      justify: "start",
      // bg: useColorModeValue("rgb(254, 209, 79,0.8)", "rgb(81, 61, 7,0.7)"),
      bgGradient: useColorModeValue(
        "linear(to-b, rgba(255, 224, 130,0.8), rgba(130, 255, 158,0.9))",
        "linear(to-b, rgba(107, 48, 9,0.8), rgba(45, 81, 40,0.9))",
      ),
      color: useColorModeValue("blackAlpha.800", "whiteAlpha.800"),
      image: Team6,
      title: "Case Study",
      body: "Rebuilding a large e-commerce website with Next.js",
    },
    {
      tag: "Entertainment",
      image: Tv1,
      body: "The Best Video Streaming Services for 2022.",
    },
  ];

  return (
    <>
      <NextSeo
        title="Blogs Grid"
        description="Mercury Blogs Grid Example Page"
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
          title="Follow the latest news"
          body="The latest news and hand-picked resources and tools"
        />
        <Container maxW="containet.xl">
          <Searchbar
            colorScheme={color}
            items={[
              { title: "UI", href: "#" },
              { title: "UX", href: "#" },
              { title: "Development", href: "#" },
              { title: "Web Design", href: "#" },
              { title: "Game", href: "#" },
              { title: "Music", href: "#" },
              { title: "Review", href: "#" },
            ]}
          />

          <Section mb={0}>
            <Box
              overflow="visible"
              sx={{
                transition: "all .5s ease-in-out",
                columnGap: [10, 10, 1, 1],
                columnFill: "initial",
                columnCount: [1, 1, 2, 3],
                "& > div": {
                  display: "inline-block",
                  marginBottom: [10, 10, 1, 1],
                  verticalAlign: "top",
                },
              }}
            >
              {items.map((item, idx) => (
                <Box key={idx} w="full">
                  <ArticleOverlaySimpleCard
                    hasRatio
                    href="#"
                    maxW="full"
                    height="full"
                    justify="end"
                    rounded="sm"
                    bg="blackAlpha.500"
                    color="whiteAlpha.900"
                    _hover={{ opacity: 0.8 }}
                    {...item}
                  />
                </Box>
              ))}
            </Box>
          </Section>

          <Flex mt={[0, 0, 0, 10]} justify="center">
            <Button>Load More Posts</Button>
          </Flex>
        </Container>

        <NewsletterSubscription
          colorScheme={color}
          py={[10, 20, 32]}
          title="Subscribe to our newsletters"
          body="Join our email list and be the first to know about new limited edition products, material innovations, and lots of other fun updates."
          comment={
            <Text as="span">
              Note: You can opt-out at any time. See our{" "}
              <NextLink href="#" passHref>
                <Link {...linkStyle}>Privacy Policy</Link>
              </NextLink>{" "}
              and{" "}
              <NextLink href="#" passHref>
                <Link {...linkStyle}>Terms</Link>
              </NextLink>
            </Text>
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

const Searchbar: React.FC<
  {
    items: { title: string; href: string }[];
  } & ChakraProps &
    ThemingProps
> = ({ items = [], colorScheme }) => {
  return (
    <Stack
      direction={["column", "column", "column", "row"]}
      justify="space-between"
      align="center"
      spacing={6}
      my={[10, 10, 20]}
    >
      <Flex w="full" maxW={["full", "480px", "480px", "320px"]}>
        <InputGroup w="full">
          <Input
            rounded="full"
            placeholder="Search articles..."
            focusBorderColor={`${colorScheme}.500`}
          />
          <InputRightElement
            pointerEvents="none"
            children={<Search2Icon opacity={0.5} />}
          />
        </InputGroup>
      </Flex>
      <Wrap justify={["center", "center", "start"]}>
        {items.map((item, idx) => (
          <WrapItem key={idx}>
            <NextLink href={item.href} passHref>
              <Button size="sm" lineHeight="1" rounded="full">
                {item.title}
              </Button>
            </NextLink>
          </WrapItem>
        ))}
      </Wrap>
    </Stack>
  );
};

if (__DEV__) {
  Searchbar.displayName = "Searchbar";
}

/**
 * Newsletter Subscription Block
 */
const NewsletterSubscription: React.FC<
  { title: string; body: string; comment: React.ReactNode } & ChakraProps &
    ThemingProps
> = memo(({ title, body, comment, colorScheme, ...rest }) => {
  return (
    <Box width="full" {...rest}>
      <Container maxW="820">
        <NewsletterBlock
          colorScheme={colorScheme}
          title={
            <Text as="span" fontWeight={700}>
              {title}
            </Text>
          }
          body={body}
          comment={comment}
        />
      </Container>
    </Box>
  );
});

if (__DEV__) {
  NewsletterSubscription.displayName = "NewsletterSubscription";
}

export default BlogsGridPage;
