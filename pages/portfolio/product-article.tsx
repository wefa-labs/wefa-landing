import { FaTelegram, FaWhatsapp, FaTwitter, FaFacebook } from "@react-icons";

import { memo, useContext } from "react";

import { NextSeo } from "next-seo";

import {
  Box,
  chakra,
  Container,
  Flex,
  Heading,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";

import { ThemeColorContext } from "@definitions/context/theme";

import Content from "@components/content";
import { IContent } from "@components/content/content";
import ImageLazyloadWithoutAspectRatio from "@components/image-lazyload/without-aspect-ratio";
import PageTitle from "@components/page-title";
import ProductImageCard from "@components/products/product-image-card";
import ShareButtons from "@components/share-button";

import ProductImage1 from "@assets/images/product-6-1.jpg?resize&img";
import ProductImage2 from "@assets/images/product-6-2.jpg?resize&img";
import ProductImage3 from "@assets/images/product-6-3.jpg?resize&img";
import ProductImage from "@assets/images/product-6.jpg?resize&img";
import ProductImage10 from "@assets/images/product-10.jpg?resize&img";
import ProductImage11 from "@assets/images/product-11.jpg?resize&img";

import NewsletterBlockTwo from "@blocks/newsletter-2";

const ProductArticlePage: React.FC = () => {
  const theme = useContext(ThemeColorContext);
  const color = theme.colorScheme; // global default primary theme color

  /* ----------------------------- Page Contents ---------------------------- */
  const contents: IContent.IProps[] = [
    {
      body: [
        {
          wrapper: {
            display: "flex",
            alignItems: "center",
            flexDirection: ["column", "column", "column", "row"],
            mx: "auto",
            maxWidth: ["full", "full", "full", "container.xl"],
          },
          maxWidth: "full",
          px: 0,
          mx: 0,
          heading: (
            <Box flex="1" mb={[5, 5, 5, 0]} mr={[0, 0, 0, 10]}>
              <Heading
                maxWidth={["full", "full", "full", "400px"]}
                fontSize="3xl"
                fontWeight="500"
              >
                Ergonomic Chair Design & Development for Offices
              </Heading>
            </Box>
          ),
          content: (
            <Box flex="1">
              <Text
                mx="auto"
                w="full"
                maxWidth={["full", "full", "full", "600px"]}
                color={useColorModeValue(null, "whiteAlpha.600")}
              >
                Working with the right products in the office environment is of
                great importance for both employees and employers. According to
                researches, an office chair suitable for work positively affects
                employee performance by 15%.
              </Text>
            </Box>
          ),
        },
      ],
    },
    {
      body: [
        {
          content: null,
          image: ProductImage,
        },
      ],
    },
    {
      body: [
        {
          wrapper: {
            display: "flex",
            alignItems: "center",
            flexDirection: ["column", "column", "column", "row"],
            mx: "auto",
            maxWidth: ["full", "full", "full", "container.lg"],
          },
          flex: 1,
          px: 0,
          mx: 0,
          color: useColorModeValue(null, "whiteAlpha.600"),
          list: [
            "<strong>Client:</strong> Ergo Corp.",
            "<strong>Industry:</strong> Office Products",
            "<strong>Website:</strong> example.com",
            "<strong>Year:</strong> 2022",
          ],
          content:
            "A good office chair is going to help you maintain a neutral posture, which means sitting with your feet flat on the floor, your knees slightly higher than your hips, and your hips, shoulders, and ears all lined up with each other.",
        },
      ],
    },
    {
      body: [
        {
          display: "flex",
          alignItems: "center",
          width: "full",
          maxWidth: ["full", "full", "full", "container.md"],
          textAlign: ["start", "start", "center"],
          px: 0,
          fontSize: "3xl",
          fontWeight: 500,
          lineHeight: 1.2,
          content:
            "Do not work from the couch or the bed. Have a designated spot for work at home, including a table or desk or countertop, in addition to a good chair.",
        },
        {
          content: null,
          images: [
            {
              image: ProductImage1,
              imageRatio: 9 / 16,
              imageDescription: "Sample 1",
            },
            {
              image: ProductImage2,
              imageRatio: 9 / 16,
              imageDescription: "Decoration recommendation",
            },
            {
              image: ProductImage3,
              imageRatio: 9 / 16,
              imageDescription: "Sample 2",
            },
          ],
        },
      ],
    },
  ];

  /* ----------------------------- Share Buttons ---------------------------- */
  const shareButtonItems = [
    {
      icon: FaWhatsapp,
      href: "https://www.whatsapp.com",
      color: "whatsapp",
      title: "WhatsApp",
    },
    {
      icon: FaTelegram,
      href: "https://www.telegram.org",
      color: "telegram",
      title: "Telegram",
    },
    {
      icon: FaFacebook,
      href: "https://www.facebook.com",
      color: "facebook",
      title: "Facebook",
    },
    {
      icon: FaTwitter,
      href: "https://www.twitter.com",
      color: "twitter",
      title: "Twitter",
    },
  ];

  return (
    <>
      <NextSeo
        title="Portfolio Product Article"
        description="Mercury Portfolio Product Article Example Page"
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
          textAlign="start"
          align="start"
          pt={[24, 180, 380]}
          pb={[5, 10, 10]}
          title={
            <Flex
              pos="relative"
              zIndex={1}
              width="full"
              align="center"
              justify="space-between"
              direction={["column", "column", "row"]}
            >
              <Heading
                maxW="container.xl"
                lineHeight={1.2}
                fontSize={["3xl", "4xl", "5xl"]}
                mb={[5, 5, 0]}
              >
                <Text>Office Chairs</Text>
                <Text fontWeight={500} fontSize="md" opacity={0.65}>
                  Ergonomic product designs for offices
                </Text>
              </Heading>
              <ShareButtons
                text={null}
                color={useColorModeValue("blackAlpha.700", "whiteAlpha.700")}
                bg={useColorModeValue("whiteAlpha.400", "blackAlpha.300")}
                items={shareButtonItems}
              />
            </Flex>
          }
          header={
            <Box
              pos="absolute"
              zIndex={0}
              flex={1}
              top={0}
              left={0}
              width="full"
              height="full"
              userSelect="none"
              _after={{
                content: "''",
                pos: "absolute",
                zIndex: 0,
                flex: 1,
                top: 0,
                left: 0,
                w: "full",
                h: "full",
                bg: useColorModeValue("whiteAlpha.300", "blackAlpha.800"),
              }}
            >
              <ImageLazyloadWithoutAspectRatio
                w="full"
                h="full"
                objectFit="cover"
                image={ProductImage}
              />
            </Box>
          }
        />

        <Container mt={[10, 10, 20]} maxW="container.xl">
          {/* Deserialize Content */}
          <Content items={contents} />
        </Container>

        {/*  Related Products */}
        <Box bg={useColorModeValue("gray.50", "gray.700")}>
          <Container py={[10, 10, 32]} maxW="container.lg">
            <Box mb={[4, 5, 5]}>
              <Heading as="h4" fontSize="2xl">
                Related Products
              </Heading>
              <Text color={useColorModeValue("gray.500", "gray.300")}>
                Browse related products for inspiration
              </Text>
            </Box>
            <Stack spacing={10} direction={["column", "column", "row"]}>
              <ProductImageCard
                image={ProductImage10}
                ratio={1}
                href="#"
                brand="Interior Design"
                title="Decorative Furnitures"
              />
              <ProductImageCard
                image={ProductImage11}
                ratio={1}
                href="#"
                brand="SmartLight"
                title="Indoor Lighting"
              />
            </Stack>
          </Container>
        </Box>

        {/* Newsletter */}
        <Container my={[10, 20, 32]} maxW="container.xl">
          <NewsletterBlockTwo
            tag="Newsletter"
            title={
              <>
                Join Our Community <strong>&</strong> Claim Free Products
              </>
            }
            body="No Spam. Only useful content and updates on our products."
            comment="Join 10,000+ other creators in our creative community."
            colorScheme={color}
          />
        </Container>
      </chakra.main>
    </>
  );
};

export default memo(ProductArticlePage);
