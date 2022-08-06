import { useContext } from "react";

import { NextSeo } from "next-seo";

import {
  AspectRatio,
  Box,
  chakra,
  Container,
  Flex,
  Image,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";

import { ThemeColorContext } from "@definitions/context/theme";

import { SectionHeading, SectionSubHeading } from "@components/common";
import PageTitle from "@components/page-title";

const AspectRatioPage: React.FC = (): JSX.Element => {
  const theme = useContext(ThemeColorContext);
  const color = theme.colorScheme; // global default primary theme color
  return (
    <>
      <NextSeo
        title="Aspect Ratio Component"
        description="Aspect Ratio Component Examples"
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
          title="Aspect Ratio Component"
          body={
            <Text as="div">
              Here are a few examples of what you can do using the aspect ratio
              component.
            </Text>
          }
        />
        <Container maxW="container.xl">
          <SectionHeading mt={10}>Embedded Videos</SectionHeading>
          <Flex direction={["column", "column", "row"]} justifyContent="center">
            <Box p={6} w="full">
              <SectionSubHeading mb={4}>Aspect Ratio 1:1</SectionSubHeading>
              <AspectRatio maxW="767px" ratio={1}>
                <iframe
                  title="Bon Appétit"
                  src="//www.youtube.com/embed/dPI-mRFEIH0"
                  allowFullScreen
                />
              </AspectRatio>
            </Box>

            <Box p={6} w="full">
              <SectionSubHeading mb={4}>Aspect Ratio 4:3</SectionSubHeading>
              <AspectRatio maxW="767px" ratio={4 / 3}>
                <iframe
                  title="La Alegría - Scott Rill Remix"
                  src="//www.youtube.com/embed/cm9giziFoFM"
                  allowFullScreen
                />
              </AspectRatio>
            </Box>

            <Box p={6} w="full">
              <SectionSubHeading mb={4}>Image with 16:9</SectionSubHeading>
              <AspectRatio maxW="767px" ratio={16 / 9}>
                <iframe
                  title="What Do You Mean"
                  src="//www.youtube.com/embed/DK_0jXPuIr0"
                  allowFullScreen
                />
              </AspectRatio>
            </Box>
          </Flex>

          <SectionHeading mt={10}>Embedded Images</SectionHeading>
          <Flex direction={["column", "column", "row"]} justifyContent="center">
            <Box p={6} w="full">
              <SectionSubHeading mb={4}>Aspect Ratio 21:9</SectionSubHeading>
              <AspectRatio maxW="767px" ratio={21 / 9}>
                <Image
                  src="//source.unsplash.com/random/1534x1200?1"
                  alt="naruto"
                  objectFit="cover"
                />
              </AspectRatio>
            </Box>
            <Box p={6} w="full">
              <SectionSubHeading mb={4}>Aspect Ratio 9:16</SectionSubHeading>
              <AspectRatio maxW="767px" ratio={9 / 16}>
                <Image
                  src="//source.unsplash.com/random/1534x1200?2"
                  alt="naruto"
                  objectFit="cover"
                />
              </AspectRatio>
            </Box>
            <Box p={6} w="full">
              <SectionSubHeading mb={4}>Aspect Ratio 1.85:1</SectionSubHeading>
              <AspectRatio maxW="767px" ratio={1.85 / 1}>
                <Image
                  src="//source.unsplash.com/random/1534x1200?3"
                  alt="naruto"
                  objectFit="cover"
                />
              </AspectRatio>
            </Box>
          </Flex>

          <SectionHeading mt={10}>Embedded Maps</SectionHeading>
          <Flex direction={["column", "column", "row"]} justifyContent="center">
            <Box p={6} w="full">
              <SectionSubHeading mb={4}>
                The golden ratio 1.6180:1
              </SectionSubHeading>
              <AspectRatio maxW="767px" ratio={1.618 / 1}>
                <iframe src="https://maps.google.com/maps?q=2880%20Broadway,%20New%20York&t=&z=13&ie=UTF8&iwloc=&output=embed" />
              </AspectRatio>
            </Box>
            <Box p={6} w="full">
              <SectionSubHeading mb={4}>
                The silver ratio 2.414:1
              </SectionSubHeading>
              <AspectRatio maxW="767px" ratio={2.414 / 1}>
                <iframe src="https://maps.google.com/maps?q=2880%20Broadway,%20New%20York&t=&z=13&ie=UTF8&iwloc=&output=embed" />
              </AspectRatio>
            </Box>
          </Flex>
        </Container>
      </chakra.main>
    </>
  );
};

export default AspectRatioPage;
