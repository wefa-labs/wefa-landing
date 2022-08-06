import { useContext } from "react";

import { NextSeo } from "next-seo";
import NextLink from "next/link";

import {
  Button,
  Center,
  chakra,
  Container,
  Stack,
  useColorModeValue,
} from "@chakra-ui/react";

import { ThemeColorContext } from "@definitions/context/theme";

import ArticleCard from "@components/article/article-card";
import ArticleImageWideCard from "@components/article/article-image-wide-card";
import ArticleOverlayCard from "@components/article/article-overlay-card";
import ArticleOverlaySimpleCard from "@components/article/article-overlay-simple-card";
import ArticlePostCard from "@components/article/article-post-card";
import PageTitle from "@components/page-title";

import ArticleCardAvatar2x from "@assets/images/avatar-1.jpg?resize&size=80&img";
import ArticleCardImage2x from "@assets/images/blog-post.jpg?resize&size=750&img";

const ArticlePage: React.FC = (): JSX.Element => {
  const theme = useContext(ThemeColorContext);
  const color = theme.colorScheme; // global default primary theme color
  return (
    <>
      <NextSeo
        title="Article Component"
        description="Article Component Examples"
      />
      <PageTitle
        title="Article Component"
        body="Here are a few examples of what you can do using the article component."
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
        <Container my={12} maxW="container.xl">
          <Stack
            direction={["column", "row", "row"]}
            spacing={4}
            align="start"
            justifyContent="center"
            mb={10}
            mt={10}
          >
            <ArticleOverlayCard
              author="John Doe"
              authorHref="#Doe"
              meta="Sep 22, 2021 · 4min read"
              avatar={ArticleCardAvatar2x}
              href="#"
              tag="Design"
              bg="blackAlpha.500"
              color="whiteAlpha.900"
              image={ArticleCardImage2x}
              title="Article Overlay Card Title"
              body="Prima luce, cum quibus mons aliud  consensu ab eo Prima luce, cum quibus mons aliud  consensu ab eo. Prima luce, cum quibus mons aliud  consensu ab eo. Prima luce, cum quibus mons aliud  consensu ab eo."
            />
            <ArticleOverlayCard
              author="John Doe"
              authorHref="#Doe"
              meta="Feb 08, 2021 · 8min read"
              avatar={ArticleCardAvatar2x}
              href="#demo"
              tag="Design"
              bg="blackAlpha.500"
              color="whiteAlpha.900"
              image={ArticleCardImage2x}
              title="Article Overlay Card Title"
              body="Prima luce, cum quibus mons aliud  consensu ab eo Prima luce, cum quibus mons aliud  consensu ab eo. Prima luce, cum quibus mons aliud  consensu ab eo. Prima luce, cum quibus mons aliud  consensu ab eo."
            />
          </Stack>
          <Stack
            direction={{ base: "column", sm: "row" }}
            spacing={4}
            align="start"
            justifyContent="center"
            mb={10}
            mt={10}
          >
            <ArticleOverlaySimpleCard
              href="#demo"
              tag="Design"
              bg="blackAlpha.500"
              color="whiteAlpha.900"
              image={ArticleCardImage2x}
              title="Article Overlay Simple Card Title"
            />
            <ArticleOverlaySimpleCard
              href="#demo"
              tag="Design"
              bg="blackAlpha.500"
              color="whiteAlpha.900"
              image={ArticleCardImage2x}
              title="Article Overlay Simple Card Title"
            />
          </Stack>
          <Stack
            direction={{ base: "column", sm: "row" }}
            spacing={4}
            align="start"
            justifyContent="center"
            mb={10}
          >
            <ArticleCard
              meta="Sep 22, 2021"
              title="Article Card - Web Design Tools and Resources for Developers"
              href="/demo"
              tag="Design"
              tagHref="#design"
              body="Prima luce, cum quibus mons aliud  consensu ab eo. Hi omnes lingua, institutis, legibus inter se differunt. Plura mihi bona sunt, inclinet, amari petere vellent. Quisque ut dolor gravida, placerat libero vel, euismod. Phasellus laoreet lorem vel dolor tempus vehicula."
              author="John Dolares"
              authorHref="#Doe"
              avatar={ArticleCardAvatar2x}
              colorScheme={color}
            />
            {/* <Spacer /> */}
            <ArticlePostCard
              colorScheme={color}
              href="/demo"
              subtitle="Web Blog"
              title="Article Post Card - Web Design Tools"
              body="Prima luce, cum quibus mons aliud  consensu ab eo. Hi omnes lingua, institutis, legibus inter se differunt."
              image={ArticleCardImage2x}
              author="John Doe"
              authorHref="#Doe2"
              meta="Feb 08, 2021 · 6min read"
              avatar={ArticleCardAvatar2x}
            />
          </Stack>
          <Center>
            <ArticleImageWideCard
              title="Article Image Wide Card - Web Design Tools and Resources for Developers"
              href="/demo"
              body="Prima luce, cum quibus mons aliud  consensu ab eo. Hi omnes lingua, institutis, legibus inter se differunt. Plura mihi bona sunt, inclinet, amari petere vellent. Quisque ut dolor gravida, placerat libero vel, euismod. Phasellus laoreet lorem vel dolor tempus vehicula."
              image={ArticleCardImage2x}
              footer={
                <NextLink href="/demo" passHref>
                  <Button
                    as="a"
                    rounded="lg"
                    variant="ghost"
                    colorScheme={color}
                  >
                    Read More
                  </Button>
                </NextLink>
              }
            />
          </Center>
        </Container>
      </chakra.main>
    </>
  );
};

export default ArticlePage;
