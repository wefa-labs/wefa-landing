import { BiHeart } from "@react-icons";

import React, { memo, useContext } from "react";

import { NextSeo } from "next-seo";
import NextLink from "next/link";

import { ChevronRightIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  chakra,
  ChakraProps,
  Container,
  Flex,
  Heading,
  HeadingProps,
  Icon,
  Link,
  Stack,
  Text,
  ThemingProps,
  useColorModeValue,
} from "@chakra-ui/react";

import { ThemeColorContext } from "@definitions/context/theme";
import { __DEV__ } from "@definitions/utils";

import ArticleCard from "@components/article/article-card";
import ArticleImageWideCard from "@components/article/article-image-wide-card";
import ArticleOverlayCard from "@components/article/article-overlay-card";
import ArticleOverlaySimpleCard from "@components/article/article-overlay-simple-card";
import ArticleSlideshow from "@components/article/article-slideshow";
// import ArticleSlideshowSimple from "@components/article/article-slideshow-simple";
import { Section, Block } from "@components/common";
import ImageLazyload from "@components/image-lazyload";

import Layout from "@layouts/default";

import MarvaDempsey from "@assets/images/avatar/1f-square.jpg?resize&size=140&img";
import PatrickFleming from "@assets/images/avatar/1m-square.jpg?resize&size=140&img";
import MichelleKirsch from "@assets/images/avatar/3f-square.jpg?resize&size=140&img";
import Author1 from "@assets/images/avatar/3f-transparent.png?resize&img";
import NicholasBarnes from "@assets/images/avatar/3m-square.jpg?resize&size=140&img";
import Computer4 from "@assets/images/computer-4.jpg?resize&img";
import Computer6 from "@assets/images/computer-6.jpg?resize&img";
import Computer7 from "@assets/images/computer-7.jpg?resize&img";
import Computer8 from "@assets/images/computer-8.jpg?resize&img";
import DesignImage from "@assets/images/design.jpg?resize&img";
import Headphones1 from "@assets/images/headphones-1.jpg?resize&img";
import LeafImage from "@assets/images/leaf.jpg?resize&img";
import Monitor1 from "@assets/images/monitor-1.jpg?resize&img";
import Office3 from "@assets/images/office-3.jpg?resize&img";
import Office4 from "@assets/images/office-4.jpg?resize&img";
import Office5 from "@assets/images/office-5.jpg?resize&img";
import Phone1 from "@assets/images/phone-1.jpg?resize&img";
import Services from "@assets/images/services.jpg?resize&img";
import Tv1 from "@assets/images/tv-1.jpg?resize&img";
import TypoImage from "@assets/images/typo.jpg?resize&img";

import ArticlesListBlock from "@blocks/articles-list";
import NewsletterBlock from "@blocks/newsletter";
import SidebarMenuBlock from "@blocks/sidebar-menu";
import TagListBlock from "@blocks/tag-list";

const BlogsModernPage = () => {
  const theme = useContext(ThemeColorContext);
  const color = theme.colorScheme; // global default primary theme color
  return (
    <>
      <NextSeo
        title="Blogs Modern"
        description="Mercury Blogs Modern Example Page"
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
        {/**
         * !PERF: ArticleSlideshowSimple component for better performance
         */}
        <ArticleSlideshow
          height="100vh"
          colorScheme={color}
          items={[
            {
              title: "How to Get Started in Game Streaming: The Ultimate Guide",
              image: Computer8,
              href: "/blogs/article",
            },
            {
              title: "The Best Video Streaming Services for 2022",
              image: Tv1,
              href: "/blogs/article",
            },
            {
              title: "The Best Noise-Cancelling Headphones for 2022",
              image: Headphones1,
              href: "/blogs/article",
            },
            {
              title: "Buying Guide: Best Monitors We've Tested",
              image: Monitor1,
              href: "/blogs/article",
            },
          ]}
        />

        <Container maxW="container.xl">
          <Section my={[10, 10, 20, 24]}>
            <Stack
              spacing={[10, 10, 10, 24]}
              direction={["column", "column", "row"]}
            >
              <Stack spacing={10} direction="column" flex="3">
                <ArticleOverlayCard
                  maxW="full"
                  author="Nicholas Barnes"
                  authorHref="#"
                  meta="Dec 20, 2021 · 9 min read"
                  avatar={NicholasBarnes}
                  href="#CaseStudy"
                  tag="Case Study"
                  bg="transparent"
                  bgGradient="linear(to-t, rgba(0,0,0,0.6),  rgba(255,255,255,0.1))"
                  color="whiteAlpha.900"
                  image={Computer7}
                  title="Improving the performance of Next.js"
                />
                <ArticleImageWideCard
                  title="Useful front-end boilerplates and starter kits"
                  href="#"
                  body="We don’t need to write everything from scratch every single time. With boilerplates and starter kits, we can set up our projects faster, and get to work immediately."
                  image={Computer6}
                  footer={
                    <Flex justify="space-between">
                      <NextLink href="#" passHref>
                        <Button
                          as="a"
                          rounded="lg"
                          variant="ghost"
                          colorScheme={color}
                        >
                          Read More
                        </Button>
                      </NextLink>
                      <Button
                        variant="ghost"
                        leftIcon={<Icon color="red.300" as={BiHeart} />}
                      >
                        23 Like
                      </Button>
                    </Flex>
                  }
                />
                <Stack
                  spacing={10}
                  direction={["column", "column", "column", "row"]}
                >
                  <ArticleCard
                    bg={useColorModeValue(`${color}.50`, `${color}.900`)}
                    shadow="none"
                    maxW="full"
                    meta="Sep 22, 2021"
                    title="Free Figma tools for web designers"
                    href="#"
                    tag="Freebies"
                    tagHref="#"
                    body="Figma is still a favorite among a lot of web designers, and the right tools make it even more powerful as it already is. To help you boost productivity, save time, and, obviously, nerves, we have picked some valuable Figma resources, plugins, and scripts for you."
                    author="Marva Dempsey"
                    authorHref="#"
                    avatar={MarvaDempsey}
                    colorScheme={color}
                  />
                  <ArticleOverlaySimpleCard
                    maxW="full"
                    height={["170px", "250px", "200px", "100%"]}
                    href="#Career"
                    tag="Career"
                    bg="blackAlpha.500"
                    color="whiteAlpha.900"
                    image={Services}
                    align="start"
                    justify="center"
                    title="We're Hiring!"
                  />
                </Stack>
                <Stack
                  spacing={10}
                  direction={["column", "column", "column", "row"]}
                >
                  <ArticleCard
                    maxW="full"
                    w="full"
                    image={Office3}
                    meta="Sep 22, 2021"
                    title="User management for your Next.js SaaS project using serverless functions"
                    href="#"
                    tag="JavaScript"
                    tagHref="#"
                    body="In every software-as-a-service solution, user billing and payments are key aspects in the sale of services rendered. Let’s learn about Stripe and how the REST API can be programmatically used in serverless functions to manage the billing for an application."
                    author="Michelle Kirsch"
                    authorHref="#"
                    avatar={MichelleKirsch}
                    colorScheme={color}
                  />
                  <ArticleCard
                    maxW="full"
                    w="full"
                    image={Phone1}
                    meta="Sep 15, 2021"
                    title="Your iPhone slows down over time. Here's how to speed it back up"
                    href="#"
                    tag="iPhone"
                    tagHref="#"
                    body="If your iPhone's feeling a bit slower than usual, it could be due to a number of causes. But if you notice it sluggishly moving from app to app and struggling whenever you open a new browser tab, it's probably time to clear your phone's cache."
                    author="Patrick Fleming"
                    authorHref="#"
                    avatar={PatrickFleming}
                    colorScheme={color}
                  />
                </Stack>
                <Stack
                  spacing={10}
                  direction={["column", "column", "column", "row"]}
                >
                  <ArticleOverlaySimpleCard
                    maxW="full"
                    height={["170px", "250px", "250px"]}
                    href="#"
                    tag="Typography"
                    bgGradient="linear(transparent 0%, blackAlpha.300 80%)"
                    color="whiteAlpha.900"
                    image={TypoImage}
                    justify="end"
                    body="Google Web fonts of 2021"
                  />
                  <ArticleOverlaySimpleCard
                    maxW="full"
                    height={["170px", "250px", "250px"]}
                    href="#"
                    tag="JavaScript"
                    bgGradient="linear(transparent 0%, blackAlpha.500 80%)"
                    color="whiteAlpha.900"
                    image={Computer4}
                    justify="end"
                    body="Next.js WebApps"
                  />
                  <ArticleOverlaySimpleCard
                    maxW="full"
                    height={["170px", "250px", "250px"]}
                    href="#"
                    tag="Web Design"
                    bgGradient="linear(transparent 0%, blackAlpha.500 80%)"
                    color="whiteAlpha.900"
                    image={DesignImage}
                    justify="end"
                    body="Best practices for UI"
                  />
                </Stack>
                <Flex
                  height={["full", "full", "250px"]}
                  pos="relative"
                  align="stretch"
                  rounded="lg"
                  bg={useColorModeValue(`${color}.50`, `${color}.900`)}
                >
                  <Flex w="full" align="center" p={10} flex="2">
                    <Box>
                      <Heading mb={2}>Get to know our authors</Heading>
                      <Text mb={4}>
                        A team of passionate developers, artists and designer
                        works full time on the Mercury company.
                      </Text>
                      <Button
                        rightIcon={<ChevronRightIcon />}
                        colorScheme={color}
                      >
                        Author's Profile
                      </Button>
                    </Box>
                  </Flex>

                  <ImageLazyload
                    flex={[0, 1, 1, 1]}
                    roundedRight="lg"
                    objectFit="cover"
                    objectPosition="left top"
                    height="full"
                    width="full"
                    image={Author1}
                  />
                </Flex>
              </Stack>

              <Flex flex="1" mt={[10, 10, 0]}>
                <Sidebar colorScheme={color} />
              </Flex>
            </Stack>
          </Section>
        </Container>
      </chakra.main>
    </>
  );
};

/* -------------------------------------------------------------------------- */
/*                                 PAGE BLOCKS                                */
/*    All page content can be edited via props. You do not need to make any   */
/*    changes in this part if you are not going to make design arrangements   */
/* -------------------------------------------------------------------------- */

/* --------------------------------- Sidebar -------------------------------- */

const Sidebar: React.FC<ChakraProps & ThemingProps> = memo(
  ({ colorScheme }) => {
    const blockTitle: HeadingProps = {
      d: "inline-flex",
      as: "h3",
      fontSize: "sm",
      lineHeight: 1,
      textTransform: "uppercase",
      mb: 6,
    };
    return (
      <Stack spacing={10}>
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
        <Block>
          <Heading {...blockTitle}>Categories</Heading>
          <SidebarMenuBlock
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
                image: Office3,
                title: "Improving the accessibility of your website",
                href: "#title",
              },
              {
                image: Office4,
                title: "Designing better tooltips for mobile user interfaces",
                href: "#title",
              },
              {
                image: Office5,
                title: "An extensive guide to progressive web applications",
                href: "#title",
              },
            ]}
          />
        </Block>

        <Block>
          <Heading {...blockTitle}>Hot Topics</Heading>
          <ArticleOverlaySimpleCard
            maxW="full"
            height={["170px", "250px", "250px"]}
            href="#"
            tag="Inspiration"
            bgGradient="linear(transparent 0%, blackAlpha.500 80%)"
            color="whiteAlpha.900"
            image={LeafImage}
            justify="end"
            align="end"
            textAlign="end"
            title="Useful design guidelines, tools and resources"
          />
        </Block>
      </Stack>
    );
  },
);

if (__DEV__) {
  Sidebar.displayName = "Sidebar";
}

// Layout
BlogsModernPage.PageLayout = memo(
  ({ children }: { children: React.ReactNode }) => {
    return <Layout darkHeader>{children}</Layout>;
  },
);

export default BlogsModernPage;
