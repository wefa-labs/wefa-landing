import { useContext } from "react";

import { NextSeo } from "next-seo";

import {
  Box,
  Button,
  chakra,
  Container,
  Heading,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";

import { ThemeColorContext } from "@definitions/context/theme";

import { SectionHeading } from "@components/common";
import { HeroBackgroundImage } from "@components/hero/hero-background-image";
import { HeroCTAAnnotation } from "@components/hero/hero-cta-annotation";
import { HeroCTAMedia } from "@components/hero/hero-cta-media";
import { HeroSplitScreenImage } from "@components/hero/hero-split-screen-image";
import Highlight from "@components/highlight";
import PlayIcon from "@components/icons/playIcon";
import PageTitle from "@components/page-title";

import OfficeImage2 from "@assets/images/office-3.jpg?resize&img";
import OfficeImage3 from "@assets/images/office-6.jpg?resize&img";
import OfficeImage from "@assets/images/office.jpg?resize&size=2280&img";

const HeroesPage: React.FC = (): JSX.Element => {
  const theme = useContext(ThemeColorContext);
  const color = theme.colorScheme; // global default primary theme color
  return (
    <>
      <NextSeo title="Hero componenet" description="Hero componenet Examples" />
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
          title="Hero Component"
          body={
            <Text as="div">
              On this page, you will find{" "}
              <Text as="div" display="inline-block" color="green.400">
                <Highlight px="2" type="underscore" strokeWidth={2}>
                  <b>4 examples</b>
                </Highlight>
              </Text>{" "}
              of hero component that you can easily use on your pages.
            </Text>
          }
        />

        <Box my={10}>
          <Container maxW="container.xl">
            <SectionHeading>Hero call to action with annotation</SectionHeading>
          </Container>
          <HeroCTAAnnotation
            heading={
              <Text as="span">
                Make money from <br />
                <Highlight
                  type="mark"
                  strokeWidth={2}
                  color={useColorModeValue("green.400", "green.300")}
                >
                  <Text as={"span"} color={"green.400"}>
                    Your audience
                  </Text>
                </Highlight>
              </Text>
            }
            body="Fictum,  deserunt mollit anim laborum astutumque! Plura mihi bona sunt, inclinet, amari petere vellent. Cum ceteris in veneratione tui montes, nascetur mus. Morbi odio eros, volutpat ut pharetra vitae, lobortis sed nibh."
            buttons={
              <>
                <Button
                  colorScheme={"green"}
                  bg={"green.400"}
                  rounded={"full"}
                  px={10}
                  py={6}
                  _hover={{
                    bg: "green.500",
                  }}
                >
                  Get Started
                </Button>
                <Button
                  variant={"link"}
                  color={useColorModeValue("green.800", "green.50")}
                  size={"sm"}
                  p={2}
                >
                  Learn more
                </Button>
              </>
            }
            annotation={
              <Text
                fontSize={"lg"}
                position={"absolute"}
                right={"-125px"}
                top={"-15px"}
                transform={"rotate(10deg)"}
                color={useColorModeValue("gray.800", "gray.300")}
              >
                "Starting at $19.90/mo"
              </Text>
            }
            annotationColor={useColorModeValue("gray.800", "gray.300")}
          />
        </Box>

        <Box my={10}>
          <Container mb={4} maxW="container.xl">
            <SectionHeading>Hero with background image</SectionHeading>
          </Container>
          <HeroBackgroundImage
            image={OfficeImage}
            heading="We are looking for colleagues to be assigned in new projects"
            // body=" Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor"
            textColor="whiteAlpha.900"
            buttons={
              <>
                <Button
                  bg={"blue.400"}
                  rounded={"full"}
                  color={"white"}
                  _hover={{ bg: "blue.500" }}
                  px={10}
                  py={6}
                >
                  Explore All
                </Button>
                <Button
                  bg={"whiteAlpha.300"}
                  rounded={"full"}
                  color={"white"}
                  _hover={{ bg: "whiteAlpha.500" }}
                  px={10}
                  py={6}
                >
                  Apply Now
                </Button>
              </>
            }
          />
        </Box>

        <Box my={10}>
          <Container mb={4} maxW="container.xl">
            <SectionHeading>Hero CTA with media</SectionHeading>

            <HeroCTAMedia
              heading={
                <Heading
                  lineHeight={1}
                  fontWeight={700}
                  fontSize={{ base: "4xl", sm: "5xl", lg: "6xl" }}
                >
                  <Text
                    display={["inline", "inline", "block"]}
                    position={"relative"}
                  >
                    Write once,
                  </Text>{" "}
                  <Text color="purple.400" as="span" position={"relative"}>
                    use everywhere!
                  </Text>
                </Heading>
              }
              body="Snippy is a rich coding snippets app that lets you create your own
            code snippets, categorize them, and even sync them in the cloud so
            you can use them anywhere. All that is free!"
              image={OfficeImage2}
              colorScheme="purple"
              buttons={
                <>
                  <Button
                    rounded={"full"}
                    size={"lg"}
                    fontWeight={"normal"}
                    colorScheme="purple"
                    bg={"purple.400"}
                    _hover={{ bg: "purple.500" }}
                    px={8}
                    py={6}
                  >
                    Get started
                  </Button>
                  <Button
                    rounded={"full"}
                    size={"lg"}
                    fontWeight={"normal"}
                    px={8}
                    py={6}
                    rightIcon={<PlayIcon h={6} w={6} color={"gray.400"} />}
                  >
                    Tutorials
                  </Button>
                </>
              }
            />
          </Container>
        </Box>

        <Box my={0}>
          <Container mb={4} maxW="container.xl">
            <SectionHeading>Hero Split Screen with image</SectionHeading>
          </Container>
          <HeroSplitScreenImage
            heading={
              <Heading fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}>
                <Text as="span" position="relative">
                  Freelance
                </Text>{" "}
                <Text
                  fontWeight={800}
                  display={["inline", "inline", "block"]}
                  bgGradient="linear(to-l, #7928CA, #FF0080)"
                  bgClip="text"
                >
                  Design Projects
                </Text>
              </Heading>
            }
            image={OfficeImage3}
            body="The project board is an exclusive resource for contract work. It's perfect for freelancers, agencies, and moonlighters."
            buttons={
              <>
                <Button
                  rounded={"full"}
                  bgGradient="linear(to-l, #7928CA, #FF0080)"
                  color={"white"}
                  transition="all 300ms ease"
                  _hover={{
                    outline: 0,
                    bgGradient: "linear(to-l, #7928CA, #FF0080)",
                  }}
                  _active={{
                    bgGradient: "linear(to-l, pink.400, #FF0080)",
                  }}
                  px={10}
                  py={6}
                >
                  Create Project
                </Button>
                <Button px={10} py={6} rounded={"full"}>
                  How It Works
                </Button>
              </>
            }
          />
        </Box>
      </chakra.main>
    </>
  );
};

export default HeroesPage;
