import { useContext } from "react";

import { NextSeo } from "next-seo";

import {
  Box,
  Center,
  chakra,
  Container,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";

import CreativeMarketLogo from "@definitions/brands/creativemarket";
import Logo1 from "@definitions/brands/logo-1";
import Logo2 from "@definitions/brands/logo-2";
import Logo3 from "@definitions/brands/logo-3";
import Logo4 from "@definitions/brands/logo-4";
import Logo5 from "@definitions/brands/logo-5";
import Logo6 from "@definitions/brands/logo-6";
import Logo7 from "@definitions/brands/logo-7";
import { ThemeColorContext } from "@definitions/context/theme";

import CarouselDefault from "@components/carousel/carousel-default";
import Highlight from "@components/highlight";
import PageTitle from "@components/page-title";

const CarouselPage: React.FC = (): JSX.Element => {
  const theme = useContext(ThemeColorContext);
  const color = theme.colorScheme; // global default primary theme color
  return (
    <>
      <NextSeo title="Carousel" description="Carousel component examples" />
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
          title="Carousel Component"
          body={
            <Text as="div">
              On this page, you will find{" "}
              <Text as="div" display="inline-block" color="green.400">
                <Highlight strokeWidth={2}>
                  <b>1 examples</b>
                </Highlight>
              </Text>{" "}
              of carousel component that you can easily use on your pages.
            </Text>
          }
        />
        <Container maxW="container.xl">
          <Box w="full" my={32}>
            <Center display="block" w="full" mb={10}>
              <Text
                textTransform="uppercase"
                fontSize={11}
                fontWeight="700"
                align="center"
                pb={4}
                mb={4}
                borderBottom="1px solid"
                maxW="300px"
                mx="auto"
                color={useColorModeValue("gray.500", "gray.300")}
                borderColor={useColorModeValue("gray.100", "gray.700")}
              >
                Trusted by the world's best
              </Text>
              <CarouselDefault
                // sx={{
                //   ".slick-slider": {
                //     // bg: "whiteAlpha.200",
                //     // rounded: "full",
                //     mb: 8,
                //   },
                //   // ".slick-list": {
                //   //   // bg: useColorModeValue("navyblue.400", "navyblue.800"),
                //   //   // rounded: "full",
                //   // },
                //   ".slick-track": {
                //     py: 6,
                //     display: "flex",
                //     alignItems: "center",
                //   },
                //   ".slick-dots": {
                //     pos: "initial",
                //   },
                // }}
                settings={{
                  dots: true,
                  arrows: false,
                  infinite: true,
                  // speed: 500,
                  slidesToShow: 5,
                  slidesToScroll: 1,
                  autoplay: true,
                  // speed: 2000,
                  autoplaySpeed: 2000,
                  touchThreshold: 50,
                  cssEase: "ease-in-out",
                  // centerMode: true,
                  // centerPadding: "90px",
                  //   nextArrow: (
                  //     <CustomNextArrow
                  //       bg="black"
                  //       color="yellow.400"
                  //       iconSize="32px"
                  //       rounded="0"
                  //       width="40px"
                  //       height="140px"
                  //       _hover={{
                  //         color: "red.600",
                  //         transform: "scale(1.5)",
                  //       }}
                  //     />
                  //   ),
                  //   prevArrow: (
                  //     <CustomPrevArrow rounded="0" iconSize="42" bg="teal.400" />
                  //   ),
                }}
              >
                <Logo1
                  color={useColorModeValue(null, "gray.200")}
                  _focus={{
                    outline: "none",
                  }}
                />
                <Logo2
                  color={useColorModeValue(null, "gray.200")}
                  _focus={{
                    outline: "none",
                  }}
                />
                <Logo3
                  color={useColorModeValue(null, "gray.200")}
                  _focus={{
                    outline: "none",
                  }}
                />
                <Logo4
                  color={useColorModeValue(null, "gray.200")}
                  _focus={{
                    outline: "none",
                  }}
                />
                <CreativeMarketLogo
                  height="38px"
                  width="auto"
                  color={useColorModeValue(null, "gray.200")}
                  _focus={{
                    outline: "none",
                  }}
                />
                <Logo5
                  color={useColorModeValue(null, "gray.200")}
                  _focus={{
                    outline: "none",
                  }}
                />
                <Logo6
                  color={useColorModeValue(null, "gray.200")}
                  _focus={{
                    outline: "none",
                  }}
                />
                <Logo7
                  color={useColorModeValue(null, "gray.200")}
                  _focus={{
                    outline: "none",
                  }}
                />
              </CarouselDefault>
            </Center>
          </Box>
        </Container>
      </chakra.main>
    </>
  );
};

export default CarouselPage;
