import { FaTwitter, FaFacebook, FaWhatsapp } from "@react-icons";

import { useState } from "react";

import { BeatLoader } from "react-spinners";

import { NextSeo } from "next-seo";

import {
  BellIcon,
  CopyIcon,
  MinusIcon,
  AddIcon,
  ArrowForwardIcon,
  EmailIcon,
  SearchIcon,
} from "@chakra-ui/icons";
import {
  Box,
  Button,
  ButtonGroup,
  chakra,
  Container,
  Flex,
  IconButton,
  SimpleGrid,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";

import {
  Section,
  SectionSubHeading,
  SectionHeading,
  ColorSelector,
} from "@components/common";
import PageTitle from "@components/page-title";

const ButtonPage: React.FC = (): JSX.Element => {
  const [color, setColor] = useState("gray");
  return (
    <>
      <NextSeo
        title="Button Component"
        description="Button Component Examples"
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
          title="Button Component"
          body="Here are a few examples of what you can do using the button component."
        />
        <Container maxW="container.xl">
          <Flex justify="center" my={10}>
            <ColorSelector
              initColor={color}
              onClick={(e) => setColor(e.currentTarget.name)}
            />
          </Flex>
        </Container>
        <Stack mb={20} spacing={20} direction="column" align="center">
          <Stack
            mb={0}
            spacing={[10, 10, 10, 4]}
            align="center"
            justify="center"
            direction={["column", "column", "column", "row"]}
          >
            <Section my={0}>
              <SectionHeading mb={10}>Button variants</SectionHeading>
              <Stack
                justify="center"
                align="center"
                direction={["column", "row", "row"]}
              >
                <Button colorScheme={color}>Solid</Button>
                <Button colorScheme={color} variant="outline">
                  Outline
                </Button>
                <Button colorScheme={color} variant="ghost">
                  Ghost
                </Button>
                <Button colorScheme={color} variant="link">
                  Link
                </Button>
              </Stack>
            </Section>

            <Section my={0}>
              <SectionHeading mb={10}>Button with icon</SectionHeading>
              <Stack
                justify="center"
                align="center"
                direction={["column", "row", "row"]}
              >
                <Button
                  leftIcon={<EmailIcon />}
                  colorScheme={color}
                  variant="solid"
                >
                  Email
                </Button>
                <Button
                  rightIcon={<ArrowForwardIcon />}
                  colorScheme={color}
                  variant="outline"
                >
                  Call us
                </Button>
              </Stack>
            </Section>

            <Section my={0}>
              <SectionHeading mb={10}>Button loading state</SectionHeading>
              <Stack
                justify="center"
                align="center"
                direction={["column", "row", "row"]}
              >
                <Button isLoading colorScheme={color} variant="solid">
                  Email
                </Button>
                <Button
                  isLoading
                  loadingText="Submitting"
                  colorScheme={color}
                  variant="outline"
                >
                  Submit
                </Button>
                <Button
                  isLoading
                  colorScheme={color}
                  spinner={<BeatLoader size={8} color="currentColor" />}
                >
                  Click me
                </Button>
              </Stack>
            </Section>
          </Stack>

          <Section mb={20}>
            <SectionHeading mb={10}>Sizes</SectionHeading>
            <Stack
              justify="center"
              align="center"
              direction={["column", "row", "row"]}
            >
              <Button colorScheme={color} size={"xs"}>
                XSmall
              </Button>
              <Button colorScheme={color} size={"sm"}>
                Small
              </Button>
              <Button colorScheme={color} size={"md"}>
                Medium
              </Button>
              <Button colorScheme={color} size={"lg"}>
                Large
              </Button>
            </Stack>
          </Section>

          <Section>
            <SectionHeading mb={10}>Social buttons</SectionHeading>
            <Stack
              justify="center"
              align="center"
              direction={["column", "row", "row"]}
            >
              <Button colorScheme="facebook" leftIcon={<FaFacebook />}>
                Facebook
              </Button>
              <Button colorScheme="twitter" leftIcon={<FaTwitter />}>
                Twitter
              </Button>
              <Button colorScheme="whatsapp" leftIcon={<FaWhatsapp />}>
                WhatsApp
              </Button>
            </Stack>
          </Section>

          <Section px={4} w="full" maxW="container.sm">
            <SectionHeading mb={10}>Block buttons</SectionHeading>
            <Stack
              justify="center"
              align="center"
              direction={["column", "row", "row"]}
            >
              <Button isFullWidth colorScheme="green">
                Apply
              </Button>
              <Button isFullWidth variant="outline" colorScheme="red">
                Cancel
              </Button>
            </Stack>
          </Section>

          <Section maxW="container.sm">
            <SectionHeading mb={10}>Rounded corners</SectionHeading>
            <SimpleGrid columns={[1, 2, 3]} spacing={[2, 2, 6]}>
              <Button minW={32} colorScheme={color} rounded={0}>
                Rectangle
              </Button>
              <Button minW={32} colorScheme={color} rounded={"sm"}>
                Small
              </Button>
              <Button minW={32} colorScheme={color} rounded={"md"}>
                Medium
              </Button>
              <Button minW={32} colorScheme={color} rounded={"lg"}>
                Large
              </Button>
              <Button minW={32} colorScheme={color} rounded={"xl"}>
                XLarge
              </Button>
              <Button minW={32} colorScheme={color} rounded={"full"}>
                Full
              </Button>
            </SimpleGrid>
          </Section>

          <Section maxW="container.sm">
            <SectionHeading mb={10}>Custom Hover</SectionHeading>
            <Stack
              justify="center"
              align="center"
              direction={["column", "row", "row"]}
              spacing={10}
            >
              <Button
                rounded="0"
                py={6}
                px={8}
                shadow="sm"
                _hover={{
                  shadow: "xl",
                  transform: "translateY(-5px)",
                }}
              >
                Hover Me
              </Button>
              <Button
                rounded="0"
                py={6}
                px={8}
                shadow="2xl"
                transform="translateY(-5px)"
                _hover={{
                  shadow: "sm",
                  transform: "translateY(0)",
                }}
              >
                Hover Me
              </Button>
            </Stack>
          </Section>

          <Section maxW="container.sm">
            <SectionHeading mb={10}>Grouping buttons</SectionHeading>
            <Stack
              justify="center"
              align="center"
              direction={["column", "row", "row"]}
            >
              <ButtonGroup
                colorScheme={color}
                // size="sm"
                isAttached
                variant="outline"
              >
                <IconButton aria-label="Volume Minus" icon={<MinusIcon />} />
                <Button ml="-px" mr="-px">
                  Volume
                </Button>
                <IconButton aria-label="Volume Plus" icon={<AddIcon />} />
              </ButtonGroup>

              <ButtonGroup colorScheme={color} isAttached variant="solid">
                <Button>Notifications</Button>
                <IconButton
                  aria-label="ON/OFF Notification"
                  icon={<BellIcon />}
                />
              </ButtonGroup>

              <ButtonGroup
                colorScheme={color}
                // size="sm"
                isAttached
                variant="outline"
              >
                <Button mr="-px">Copy</Button>
                <IconButton aria-label="Save File" icon={<CopyIcon />} />
              </ButtonGroup>
            </Stack>
          </Section>

          <Section maxW="container.sm">
            <SectionHeading mb={10}>Icon buttons</SectionHeading>
            <Stack mb={10} align="center" justify="center" direction={"row"}>
              <Box>
                <SectionSubHeading>Default</SectionSubHeading>
                <IconButton
                  aria-label="Search database"
                  icon={<SearchIcon />}
                  colorScheme={color}
                />
              </Box>
            </Stack>
            <Stack align="center" justify="center" direction={"row"}>
              <Box>
                <SectionSubHeading>Variants</SectionSubHeading>
                <Stack justify="center" direction={["column", "row", "row"]}>
                  <Box>
                    <Text mb={2} fontSize="xs">
                      outline
                    </Text>
                    <IconButton
                      colorScheme={color}
                      aria-label="Search database"
                      icon={<SearchIcon />}
                      variant="outline"
                    />
                  </Box>
                  <Box>
                    <Text mb={2} fontSize="xs">
                      solid
                    </Text>
                    <IconButton
                      colorScheme={color}
                      aria-label="Search database"
                      icon={<SearchIcon />}
                      variant="solid"
                    />
                  </Box>
                  <Box>
                    <Text mb={2} fontSize="xs">
                      ghost
                    </Text>
                    <IconButton
                      colorScheme={color}
                      aria-label="Search database"
                      icon={<SearchIcon />}
                      variant="ghost"
                    />
                  </Box>
                  <Box>
                    <Text mb={2} fontSize="xs">
                      link
                    </Text>
                    <IconButton
                      colorScheme={color}
                      aria-label="Search database"
                      icon={<SearchIcon />}
                      variant="link"
                    />
                  </Box>
                  <Box>
                    <Text mb={2} fontSize="xs">
                      unstyled
                    </Text>
                    <IconButton
                      colorScheme={color}
                      aria-label="Search database"
                      icon={<SearchIcon />}
                      variant="unstyled"
                    />
                  </Box>
                </Stack>
              </Box>
            </Stack>
          </Section>
        </Stack>
      </chakra.main>
    </>
  );
};

export default ButtonPage;
