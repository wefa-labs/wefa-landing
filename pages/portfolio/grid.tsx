import React, { useContext, useMemo, useState } from "react";

import { motion, AnimatePresence } from "framer-motion";

import { NextSeo } from "next-seo";

import {
  Box,
  BoxProps,
  Button,
  chakra,
  Container,
  Flex,
  Heading,
  SimpleGrid,
  Text,
  useColorModeValue,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";

import { ThemeColorContext } from "@definitions/context/theme";

import { Section } from "@components/common";
import PageTitle from "@components/page-title";
import ProductImageCard from "@components/products/product-image-card";
import { RatingDefault } from "@components/rating";
import TestimonialQuoteCard from "@components/testimonials/testimonial-quote-card";

import DwayneMurphy from "@assets/images/avatar/3m-square.jpg?resize&size=140&img";
import Product1 from "@assets/images/product-1.jpg?resize&img";
import Product2 from "@assets/images/product-2.jpg?resize&img";
import Product3 from "@assets/images/product-3.jpg?resize&img";
import Product4 from "@assets/images/product-4.jpg?resize&img";
import Product5 from "@assets/images/product-5.jpg?resize&img";
import Product6 from "@assets/images/product-6.jpg?resize&img";
import Product7 from "@assets/images/product-7.jpg?resize&img";
import Product8 from "@assets/images/product-8.jpg?resize&img";
import Product9 from "@assets/images/product-9.jpg?resize&img";

export const MotionBox = motion<BoxProps>(Box);

const PortfolioGridPage: React.FC = () => {
  const [category, setCategory] = useState<string | boolean>(false);
  const theme = useContext(ThemeColorContext);
  const color = theme.colorScheme; // global default primary theme color

  /* ---------------------------- Motion Variants --------------------------- */
  const transition = {
    type: "tween",
    // mass: 0.75,
    // damping: 10,
    // stiffness: 100,
    duration: 0.75,
  };

  const variants = {
    initial: {
      opacity: 0,
      scale: 0.1,
      transition,
    },
    animate: {
      opacity: 1,
      scale: 1,
      transition,
    },
  };

  /* ----------------------------- Page Contents ---------------------------- */
  /* Product categories  */
  const categories = ["Branding", "Product", "Design", "Illustration"];

  /* Prodcuts */
  const products = [
    {
      id: "product-1",
      brand: "Acme",
      category: "Design",
      title: "Smart Watch",
      image: Product1,
      ratio: 1,
    },
    {
      id: "product-2",
      brand: "Bang & Olufsen",
      category: "Branding",
      title: "High-end Headphones",
      image: Product2,
      ratio: 1,
    },
    {
      id: "product-3",
      brand: "Render",
      category: "Illustration",
      title: "Candy",
      image: Product3,
      ratio: 1,
    },
    {
      id: "product-4",
      brand: "Marks & Co",
      category: "Branding",
      title: "Cosmetics",
      image: Product4,
      ratio: 1,
    },
    {
      id: "product-5",
      brand: "Nike",
      category: "Product",
      title: "Running Shoes",
      image: Product5,
      ratio: 1,
    },
    {
      id: "product-6",
      brand: "Herman Miller",
      category: "Product",
      title: "Office Products",
      image: Product6,
      ratio: 1,
    },
    {
      id: "product-7",
      brand: "Indoors",
      category: "Illustration",
      title: "Furniture",
      image: Product7,
      ratio: 1,
    },
    {
      id: "product-8",
      brand: "Ornament",
      category: "Design",
      title: "Indoor Plants",
      image: Product8,
      ratio: 1,
    },
    {
      id: "product-9",
      brand: "liquid",
      category: "Design",
      title: "Packages for products",
      image: Product9,
      ratio: 1,
    },
  ];

  /* Filtering */
  const items = useMemo(() => {
    return products
      .map((p) => {
        if (!category) {
          return (
            <MotionBox
              key={p.id}
              layout
              initial="initial"
              animate="animate"
              variants={variants}
              order={0}
            >
              <ProductImageCard {...p} />
            </MotionBox>
          );
        } else if (category == p.category) {
          return (
            <MotionBox
              key={p.id}
              layout
              animate={{
                opacity: 1,
                scale: 1,
                transition,
              }}
              order={0}
            >
              <ProductImageCard {...p} />
            </MotionBox>
          );
        } else {
          return (
            <MotionBox
              key={p.id}
              layout
              animate={{
                opacity: 0.2,
                scale: 0.9,
                transition,
              }}
              order={1}
            >
              <ProductImageCard {...p} />
            </MotionBox>
          );
        }
      })
      .sort((a, b) => (a.props.order > b.props.order ? -1 : 1));
  }, [category, products]);

  return (
    <>
      <NextSeo
        title="Portfolio Grid"
        description="Mercury Portfolio Grid Example Page"
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
          title={
            <Heading
              lineHeight={1}
              maxW="container.sm"
              fontSize={["5xl", "6xl", "6xl"]}
            >
              <Text>Discover All</Text> <Text>Designs & Products</Text>
            </Heading>
          }
        />
        <Container maxW="container.xl">
          <Section>
            <Wrap justify="center">
              <WrapItem>
                <Button
                  isActive={!category}
                  colorScheme={!category ? color : null}
                  rounded="full"
                  variant="ghost"
                  onClick={() => setCategory(false)}
                >
                  All
                </Button>
              </WrapItem>
              {categories.map((cat, idx) => (
                <WrapItem key={idx}>
                  <Button
                    rounded="full"
                    variant="ghost"
                    isActive={category === cat}
                    colorScheme={category === cat ? color : null}
                    onClick={() => setCategory(cat)}
                  >
                    {cat}
                  </Button>
                </WrapItem>
              ))}
            </Wrap>
          </Section>

          {/* Filtered Product Contents */}
          <SimpleGrid mb={20} columns={[1, 1, 2, 3]} spacing={10}>
            <AnimatePresence>{items}</AnimatePresence>
          </SimpleGrid>
        </Container>

        {/* Testimonial */}
        <Box py={[10, 14, 24]} bg={useColorModeValue("gray.50", "transparent")}>
          <Container pos="relative" zIndex={2} maxW="container.xl">
            <Box>
              <TestimonialQuoteCard
                avatarImage={DwayneMurphy}
                name="Dwayne Murphy"
                occupation="CTO — Acme Inc."
                occupationColor="gray.500"
                body="It was the right decision to start working with Themebiotic, It's really enjoyable to develop projects with Mercury"
                rating={
                  <RatingDefault
                    color={useColorModeValue("orange.400", "orange.600")}
                    hoverColor="whiteAlpha.800"
                    readonly
                    fontSize="xs"
                    initialRating={5}
                  />
                }
              />
            </Box>
          </Container>
        </Box>

        {/* CTA */}
        <Box py={[10, 14, 24]} bg={useColorModeValue("gray.100", "gray.700")}>
          <Container maxW="container.xl">
            <Flex justify="center" align="center">
              <Box w="full" maxW={["ful", "full", "full", "580px"]}>
                <Heading fontSize={["4xl", "4xl", "5xl", "5xl"]}>
                  Let's Build Together
                </Heading>
                <Text mb={4} fontSize="xl">
                  Contact us for details
                </Text>
                <Button colorScheme={color} size="lg">
                  <Text
                    rounded="xl"
                    fontSize="sm"
                    fontWeight="700"
                    textTransform="uppercase"
                  >
                    Contact us
                  </Text>
                </Button>
              </Box>
            </Flex>
          </Container>
        </Box>
      </chakra.main>
    </>
  );
};

export default PortfolioGridPage;
