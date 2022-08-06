import React, { memo, useContext } from "react";

import { NextSeo } from "next-seo";

import {
  Box,
  chakra,
  Container,
  Flex,
  Heading,
  HeadingProps,
  Stack,
  Text,
  Link,
  ThemingProps,
  ChakraProps,
  useColorModeValue,
} from "@chakra-ui/react";

import { ThemeColorContext } from "@definitions/context/theme";
import { __DEV__ } from "@definitions/utils";

import ArticleOverlaySimpleCard from "@components/article/article-overlay-simple-card";
import ArticlePostCard from "@components/article/article-post-card";
import { Section, Block } from "@components/common";
import PageTitle from "@components/page-title";

import MarvaDempsey from "@assets/images/avatar/1f-square.jpg?resize&size=140&img";
import PatrickFleming from "@assets/images/avatar/1m-square.jpg?resize&size=140&img";
import MichelleKirsch from "@assets/images/avatar/3f-square.jpg?resize&size=140&img";
import NicholasBarnes from "@assets/images/avatar/3m-square.jpg?resize&size=140&img";
import Computer4 from "@assets/images/computer-4.jpg?resize&img";
import Creative2 from "@assets/images/creative-2.jpg?resize&img";
import News1 from "@assets/images/office-3.jpg?resize&img";
import News2 from "@assets/images/office-4.jpg?resize&img";
import News3 from "@assets/images/office-5.jpg?resize&img";
import Office7 from "@assets/images/office-7.jpg?resize&img";
import Team3 from "@assets/images/team-3.jpg?resize&img";

import ArticlesListBlock from "@blocks/articles-list";
import NewsletterBlock from "@blocks/newsletter";
import SidebarMenuBlock from "@blocks/sidebar-menu";
import TagListBlock from "@blocks/tag-list";

const BlogsClassicPage: React.FC = () => {
  const theme = useContext(ThemeColorContext);
  const color = theme.colorScheme; // global default primary theme color

  /* ----------------------------- Page Contents ---------------------------- */
  const posts = [
    {
      image: Computer4,
      meta: "Dec 20, 2021 · 8min read",
      href: "/blogs/post-article",
      subtitle: "Web Design",
      title:
        "Web design and development services for enterprise and small businesses",
      body: "There are a number of basic requirements that need to be met when setting up a website and costs will vary significantly depending on the scope of your company and what design requirements are needed. By helping you identify these requirements, we will focus on ensuring you get the best service for your budget.",
      avatar: MarvaDempsey,
      author: "Marva Dempsey",
      authorHref: "#",
    },
    {
      image: Office7,
      meta: "Dec 05, 2021 · 6min read",
      href: "/blogs/post-article",
      subtitle: "Announcements",
      title: "A free plan announcement and details for small teams",
      body: "We've prepared a free plan for small teams and a guide to help you choose a suitable future plan for all of our services, albeit limited ones, based on your injury and your actual needs.",
      author: "Nicholas Barnes",
      authorHref: "#Doe2",
      avatar: NicholasBarnes,
    },
    {
      image: Team3,
      meta: "Dec 02, 2021 · 9min read",
      href: "/blogs/post-article",
      subtitle: "Design Systems",
      title: "Modern CSS colors with RGB, HSL, HWB, LAB and LCH",
      body: "There's more to color on the web than meets the eye, and it's about to get a lot more interesting! Today, we'll take a look at the best ways to use colors in a design system, and what we can expect from our colors in the not-too-distant future.",
      author: "Michelle Kirsch",
      authorHref: "#",
      avatar: MichelleKirsch,
    },
    {
      // image: Team3,
      meta: "Valid for only 3 months",
      subtitle: "Promotion",
      href: "#Promotion",
      title: "Enjoy benefits worth $1,000",
      body: "Thanks to this advantage, you can benefit from all our services with a discount of $1k for 3 months.",
      bg: `${color}.600`,
      color: "whiteAlpha.900",
      // author: "Blog Admin",
      // authorHref: "#",
      // avatar: MichelleKirsch,
    },
    {
      image: Creative2,
      meta: "Dec 01, 2021 · 11min read",
      subtitle: "Team",
      href: "/blogs/post-article",
      title: "You should meet our super creative team",
      body: "There is an amazing team behind all this awesome work and we will tell you our story in this article.",
      // bg: `${color}.600`,
      // color: "whiteAlpha.900",
      author: "Patrick Fleming",
      authorHref: "#",
      avatar: PatrickFleming,
    },
  ];

  return (
    <>
      <NextSeo
        title="Blogs Classic"
        description="Mercury Blogs Classic Example Page"
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
        <PageTitle title="Latest Blog Posts" />
        <Container maxW="container.xl">
          <Section my={[0, 0, 20, 24]}>
            <Stack
              spacing={[10, 10, 10, 24]}
              direction={["column", "column", "row"]}
            >
              <Flex flex="1" mt={[10, 10, 0]} order={[1, 1, 0]}>
                <Aside colorScheme={color} />
              </Flex>
              <Stack spacing={10} order={[0, 0, 1]} direction="column" flex="3">
                <Box
                  sx={{
                    transition: "all .5s ease-in-out",
                    columnGap: 10,
                    columnFill: "initial",
                    columnCount: [1, 1, 2],
                    "& > div": {
                      marginBottom: 10,
                      display: "inline-block",
                      verticalAlign: "top" /* Keep the item on the very top */,
                    },
                  }}
                >
                  {posts.map((post, idx) => (
                    <ArticlePostCard
                      key={idx}
                      shadow="md"
                      colorScheme={color}
                      maxW="full"
                      {...post}
                    />
                  ))}
                </Box>
              </Stack>
            </Stack>
          </Section>
        </Container>
      </chakra.main>
    </>
  );
};

/* -------------------------------------------------------------------------- */
/*                                 PAGE BLOCKS                                */
/* -------------------------------------------------------------------------- */

/* ---------------------------------- Aside --------------------------------- */

const Aside: React.FC<ChakraProps & ThemingProps> = memo(({ colorScheme }) => {
  const blockTitle: HeadingProps = {
    d: "inline-flex",
    as: "h3",
    fontSize: "sm",
    lineHeight: 1,
    textTransform: "uppercase",
    // borderBottomWidth: "1px",
    // pb: 4,
    mb: 6,
  };
  return (
    <Stack spacing={10}>
      <Block>
        <Heading {...blockTitle}>Categories</Heading>
        <SidebarMenuBlock
          // colorScheme={colorScheme}
          items={[
            { title: "Accessibility", href: "#" },
            { title: "Animation", tag: "2", href: "#" },
            { title: "Design Systems", tag: "3", href: "#" },
            { title: "Freebies", tag: "12", href: "#" },
            { title: "Graphics", tag: "9", href: "#" },
          ]}
        />
      </Block>

      <Block>
        <Heading {...blockTitle}>Latest News</Heading>
        <ArticlesListBlock
          colorScheme={colorScheme}
          items={[
            {
              image: News1,
              title: "Improving the accessibility of your website",
              href: "#title",
            },
            {
              image: News2,
              title: "Designing better tooltips for mobile user interfaces",
              href: "#title",
            },
            {
              image: News3,
              title: "An extensive guide to progressive web applications",
              href: "#title",
            },
          ]}
        />
      </Block>

      <Block>
        <Heading {...blockTitle}>Featured Posts</Heading>
        <ArticleOverlaySimpleCard
          maxW="full"
          href="#demo"
          tag="Design"
          bg="blackAlpha.500"
          color="whiteAlpha.900"
          image={News1}
          title="Article Overlay Simple Card Title"
        />
      </Block>

      <Block>
        <Heading {...blockTitle}>Tags</Heading>
        <TagListBlock
          colorScheme={colorScheme}
          items={[
            { title: "Design", href: "#" },
            { title: "Development", href: "#" },
            { title: "Travel", href: "#" },
            { title: "Web Design", href: "#" },
            { title: "Marketing", href: "#" },
            { title: "Research", href: "#" },
            { title: "Managment", href: "#" },
          ]}
        />
      </Block>

      <Block>
        <Heading {...blockTitle}>Newsletter</Heading>
        <NewsletterBlock mb={2} colorScheme={colorScheme} />
        <Text
          textAlign={["center", "center", "start"]}
          fontSize="sm"
          color="gray.500"
        >
          For more details on how we use your information, please see our{" "}
          <Link
            textDecoration="underline"
            href="#"
            _hover={{
              color: `${colorScheme}.400`,
            }}
          >
            privacy policy
          </Link>
          .
        </Text>
      </Block>
    </Stack>
  );
});

if (__DEV__) {
  Aside.displayName = "Aside";
}

export default BlogsClassicPage;
