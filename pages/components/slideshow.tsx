import React, { useContext, useState } from "react";

import { NextSeo } from "next-seo";

import {
  Container,
  chakra,
  VStack,
  Flex,
  useColorModeValue,
} from "@chakra-ui/react";

import { ThemeColorContext } from "@definitions/context/theme";

import ArticleSlideshow from "@components/article/article-slideshow";
import ArticleSlideshowSimple from "@components/article/article-slideshow-simple";
import { ColorSelector, SectionHeading } from "@components/common";
import PageTitle from "@components/page-title";

import Background1 from "@assets/images/background-1.jpg?resize&img";
import Background2 from "@assets/images/background-2.jpg?resize&img";
import Background3 from "@assets/images/background-3.jpg?resize&img";

const SlideshowPage: React.FC = () => {
  const theme = useContext(ThemeColorContext);
  const globalColor = theme.colorScheme; // global default primary theme color
  const [color, setColor] = useState(globalColor);
  return (
    <>
      <NextSeo title="Slideshow" description="Mercury Slideshow Example Page" />
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
          title="Slideshow Component"
          body="Here are a few examples of what you can do using the slideshow component."
        />
        <Container py={10} maxW="container.xl">
          <Flex justify="center">
            <ColorSelector
              initColor={color}
              onClick={(e) => setColor(e.currentTarget.name)}
            />
          </Flex>
        </Container>

        <VStack pb={[10, 20, 32]} spacing={[10, 20, 32]}>
          <Container maxW="container.lg">
            <SectionHeading>Article Slideshow</SectionHeading>
            <ArticleSlideshow
              height={[400]}
              colorScheme={color}
              rounded="xl"
              items={[
                {
                  title: "Slideshow Item 1",
                  image: Background1,
                  href: "/blogs/article",
                },
                {
                  title: "Slideshow Item 2",
                  image: Background2,
                },
                {
                  title: "Slideshow Item 3",
                  image: Background3,
                },
              ]}
            />
          </Container>

          <Container maxW="container.lg">
            <SectionHeading>Article Slideshow Simple</SectionHeading>
            <ArticleSlideshowSimple
              height={[400]}
              colorScheme={color}
              rounded="xl"
              items={[
                {
                  title: "Simple Slideshow 1",
                  image: Background1,
                  href: "/blogs/article",
                },
                {
                  title: "Simple Slideshow 2",
                  image: Background2,
                },
                {
                  title: "Simple Slideshow 3",
                  image: Background3,
                },
              ]}
            />
          </Container>
        </VStack>
      </chakra.main>
    </>
  );
};

export default SlideshowPage;
