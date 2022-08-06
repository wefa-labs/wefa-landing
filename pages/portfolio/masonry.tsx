import React, { useContext, useMemo, useState } from "react";

import { NextSeo } from "next-seo";

import {
  Button,
  chakra,
  Container,
  Heading,
  Text,
  useBreakpointValue,
  useColorModeValue,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";

import { ThemeColorContext } from "@definitions/context/theme";

import { Section } from "@components/common";
import MasonrySimple from "@components/masonry/masonry-simple";
import PageTitle from "@components/page-title";
import ProductImageCard from "@components/products/product-image-card";

import Product1 from "@assets/images/product-1.jpg?resize&img";
import Product2 from "@assets/images/product-2.jpg?resize&img";
import Product3 from "@assets/images/product-3.jpg?resize&img";
import Product4 from "@assets/images/product-4.jpg?resize&img";
import Product5 from "@assets/images/product-5.jpg?resize&img";
import Product6 from "@assets/images/product-6.jpg?resize&img";
import Product7 from "@assets/images/product-7.jpg?resize&img";
import Product8 from "@assets/images/product-8.jpg?resize&img";
import Product9 from "@assets/images/product-9.jpg?resize&img";

const PortfolioMasonryPage: React.FC = () => {
  const [category, setCategory] = useState<string | boolean>(false);
  const theme = useContext(ThemeColorContext);
  const color = theme.colorScheme; // global default primary theme color

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
    },
    {
      id: "product-2",
      brand: "Bang & Olufsen",
      category: "Branding",
      title: "High-end Headphones",
      image: Product2,
    },
    {
      id: "product-3",
      brand: "Render",
      category: "Illustration",
      title: "Candy",
      image: Product3,
    },
    {
      id: "product-4",
      brand: "Marks & Co",
      category: "Branding",
      title: "Cosmetics",
      image: Product4,
    },
    {
      id: "product-5",
      brand: "Nike",
      category: "Product",
      title: "Running Shoes",
      image: Product5,
    },
    {
      id: "product-6",
      brand: "Herman Miller",
      category: "Product",
      title: "Office Products",
      image: Product6,
    },
    {
      id: "product-7",
      brand: "Indoors",
      category: "Illustration",
      title: "Furniture",
      image: Product7,
    },
    {
      id: "product-8",
      brand: "Ornament",
      category: "Design",
      title: "Indoor Plants",
      image: Product8,
    },
    {
      id: "product-9",
      brand: "liquid",
      category: "Design",
      title: "Packages for products",
      image: Product9,
    },
  ];

  /* Filtering */
  const items = useMemo(() => {
    return products
      .map((p, idx) => {
        if (!category) {
          return <ProductImageCard key={idx} order={1} {...p} />;
        } else if (category == p.category) {
          return <ProductImageCard key={idx} order={1} {...p} />;
        } else {
          return <ProductImageCard key={idx} order={0} opacity={0.1} {...p} />;
        }
      })
      .sort((a, b) => (a.props.order > b.props.order ? -1 : 1));
  }, [category, products]);

  return (
    <>
      <NextSeo
        title="Portfolio Masonry"
        description="Mercury Portfolio Masonry Example Page"
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
              maxW="container.sm"
              lineHeight={1}
              fontSize={["5xl", "6xl", "6xl"]}
            >
              <Text>Discover All</Text> <Text>Designs & Products</Text>
            </Heading>
          }
        />
        <Container mb={20} maxW="container.xl">
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
          <MasonrySimple
            column={useBreakpointValue({ base: 1, md: 2 }, "2")}
            items={items}
          />
        </Container>
      </chakra.main>
    </>
  );
};

export default PortfolioMasonryPage;
