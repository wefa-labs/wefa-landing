import { FiShoppingCart } from "@react-icons";

import { useContext } from "react";

import { NextSeo } from "next-seo";

import {
  chakra,
  Container,
  Flex,
  Icon,
  IconButton,
  SimpleGrid,
  Text,
  Tooltip,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";

import { ThemeColorContext } from "@definitions/context/theme";

import { SectionSubHeading } from "@components/common";
import Highlight from "@components/highlight";
import PageTitle from "@components/page-title";
import ProductButtonCard from "@components/products/product-button-card";
import ProductFeaturesCard from "@components/products/product-features-card";
import ProductImageCard from "@components/products/product-image-card";
import ProductSimpleCard from "@components/products/product-simple-card";
import { RatingDefault } from "@components/rating/rating-default";

import Furniture9 from "@assets/images/furniture-9.jpg?resize&size=640&img";
import Product5 from "@assets/images/product-5-1.jpg?resize&size=640&img";
import ProductRealEstate from "@assets/images/product-realestate.jpg?resize&size=640&img";
import ProductShoe from "@assets/images/product-shoe.jpg?resize&size=640&img";

const ProductsPage: React.FC = () => {
  const theme = useContext(ThemeColorContext);
  const color = theme.colorScheme; // global default primary theme color
  return (
    <>
      <NextSeo
        title="Product Card Components"
        description="Product Card Component Examples"
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
          title="Product Card Components"
          body={
            <Text as="div">
              On this page, you will find{" "}
              <Text as="div" display="inline-block" color="green.400">
                <Highlight strokeWidth={2}>
                  <b>4 examples</b>
                </Highlight>
              </Text>{" "}
              of Product component that you can easily use on your pages.
            </Text>
          }
        />

        <Container my={10} maxW="container.xl">
          <SimpleGrid columns={[1, 1, 2, 3]} spacing={20}>
            <VStack>
              <SectionSubHeading>ProductButtonCard</SectionSubHeading>
              <ProductButtonCard
                isNew
                image={ProductShoe}
                title="Nike Air"
                brand="Nike"
                href="#"
                price={59.99}
                oldPrice={89.99}
                rating={<RatingDefault initialRating={4} readonly />}
                maxW="full"
                button={
                  <Tooltip
                    label="Add to cart"
                    bg="white"
                    placement="top"
                    color="gray.800"
                  >
                    <IconButton
                      display="flex"
                      variant="ghost"
                      aria-label="Add to cart"
                      icon={
                        <Icon
                          alignSelf="center"
                          as={FiShoppingCart}
                          h={5}
                          w={5}
                        />
                      }
                    />
                  </Tooltip>
                }
              />
            </VStack>

            <VStack>
              <SectionSubHeading>ProductFeaturesCard</SectionSubHeading>
              <ProductFeaturesCard
                isNew
                image={ProductRealEstate}
                title="Modern home in city center in the heart of historic Los Angeles"
                href="#"
                price={1850}
                oldPrice={2120}
                period="week"
                features={["3 Beds", "2 Baths", "Roof"]}
                maxW="full"
                rating={
                  <Flex alignItems="center">
                    <RatingDefault
                      colorScheme="teal"
                      initialRating={3.5}
                      fontSize={14}
                      readonly
                    />
                    <Text color="gray.500" ml={2} as="span" fontSize={14}>
                      34 review
                    </Text>
                  </Flex>
                }
              />
            </VStack>

            <VStack>
              <SectionSubHeading>ProductSimpleCard</SectionSubHeading>
              <ProductSimpleCard
                // isNew
                href="#"
                brand="Nike"
                title="Running Shoe"
                image={Product5}
                currency="$"
                oldPrice={110}
                price={59.95}
                maxW="full"
              />
            </VStack>

            <VStack>
              <SectionSubHeading>ProductImageCard</SectionSubHeading>
              <ProductImageCard
                image={Furniture9}
                brand="Acme"
                category="Furniture"
                title="Living Room Chair"
                ratio={1}
                href="#"
                currency="$"
                // maxW={320}
                width="full"
                maxW="full"
                // price={59}
                // oldPrice={119}
              />
            </VStack>
          </SimpleGrid>
        </Container>
      </chakra.main>
    </>
  );
};

export default ProductsPage;
