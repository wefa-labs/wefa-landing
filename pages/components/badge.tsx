import { FaFacebook, FaWhatsapp, FaHashtag } from "@react-icons";

import { useState } from "react";

import { NextSeo } from "next-seo";

import {
  Avatar,
  Badge,
  Box,
  chakra,
  Container,
  Flex,
  SimpleGrid,
  Stack,
  Tag,
  TagCloseButton,
  TagLabel,
  TagLeftIcon,
  TagRightIcon,
  useColorModeValue,
} from "@chakra-ui/react";

import {
  Section,
  SectionSubHeading,
  SectionHeading,
  ColorSelector,
} from "@components/common";
import PageTitle from "@components/page-title";

import AvatarImage from "@assets/images/avatar-1.jpg?resize&size=80&img";

const BadgePage: React.FC = (): JSX.Element => {
  const [color, setColor] = useState("gray");
  return (
    <>
      <NextSeo title="Badge Component" description="Badge Component Examples" />
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
          title="Badge Component"
          body="Here are a few examples of what you can do using the badge component."
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
          <SectionHeading mb={0}>Badges</SectionHeading>

          <Stack
            mb={0}
            spacing={[10, 10, 10, 20]}
            align="center"
            justify="center"
            direction={["column", "column", "row"]}
          >
            <Section my={0}>
              <SectionSubHeading mb={10}>Colors</SectionSubHeading>
              <Stack justify="center" direction="row">
                <Badge>Default</Badge>
                <Badge colorScheme="green">Success</Badge>
                <Badge colorScheme="red">Removed</Badge>
                <Badge colorScheme="purple">New</Badge>
              </Stack>
            </Section>

            <Section my={0}>
              <SectionSubHeading mb={10}>Variants</SectionSubHeading>
              <Stack justify="center" direction="row">
                <Badge variant="outline" colorScheme={color}>
                  Outline
                </Badge>
                <Badge variant="solid" colorScheme={color}>
                  Solid
                </Badge>
                <Badge variant="subtle" colorScheme={color}>
                  Subtle
                </Badge>
              </Stack>
            </Section>

            <Section my={0}>
              <SectionSubHeading mb={10}>Sizes</SectionSubHeading>
              <Stack align="center" justify="center" direction="row">
                <Badge fontSize="0.5em" colorScheme={color}>
                  small
                </Badge>
                <Badge colorScheme={color}>default</Badge>
                <Badge fontSize="1em" colorScheme={color}>
                  normal
                </Badge>
              </Stack>
            </Section>
          </Stack>

          <Section id="tags">
            <SectionHeading>Tags</SectionHeading>
            <SimpleGrid
              mx={10}
              spacing={10}
              mb={0}
              columns={{ base: 1, md: 3, lg: 3 }}
              maxW="container.xl"
            >
              <Section alignItems="center" justifyContent="center" my={0}>
                <SectionSubHeading mb={10}>Basic</SectionSubHeading>
                <Box>
                  <Tag colorScheme={color}>Sample Tag</Tag>
                </Box>
              </Section>
              <Section my={0}>
                <SectionSubHeading mb={10}>Variants</SectionSubHeading>
                <Stack align="center" justify="center" direction="row">
                  <Tag variant="subtle" colorScheme={color}>
                    Subtle
                  </Tag>
                  <Tag variant="solid" colorScheme={color}>
                    Solid
                  </Tag>
                  <Tag variant="outline" colorScheme={color}>
                    Outline
                  </Tag>
                </Stack>
              </Section>
              <Section my={0}>
                <SectionSubHeading mb={10}>Sizes</SectionSubHeading>
                <Stack align="center" justify="center" direction="row">
                  <Tag size="sm" colorScheme={color}>
                    Small
                  </Tag>
                  <Tag size="md" colorScheme={color}>
                    Medium
                  </Tag>
                  <Tag size="lg" colorScheme={color}>
                    Large
                  </Tag>
                </Stack>
              </Section>
            </SimpleGrid>
          </Section>
          <Section w="full" maxW="container.xl" my={0}>
            <SectionSubHeading mb={10}>Colors</SectionSubHeading>
            <Stack
              spacing={0}
              wrap="wrap"
              align="center"
              justify="center"
              direction="row"
            >
              <Box p={1}>
                <Tag colorScheme="gray">Gray</Tag>
              </Box>
              <Box p={1}>
                <Tag colorScheme="red">Red</Tag>
              </Box>
              <Box p={1}>
                <Tag colorScheme="orange">Orange</Tag>
              </Box>
              <Box p={1}>
                <Tag colorScheme="yellow">Yellow</Tag>
              </Box>
              <Box p={1}>
                <Tag colorScheme="green">Green</Tag>
              </Box>
              <Box p={1}>
                <Tag colorScheme="teal">Teal</Tag>
              </Box>
              <Box p={1}>
                <Tag colorScheme="blue">Blue</Tag>
              </Box>
              <Box p={1}>
                <Tag colorScheme="cyan">Cyan</Tag>
              </Box>
              <Box p={1}>
                <Tag colorScheme="purple">Purple</Tag>
              </Box>
              <Box p={1}>
                <Tag colorScheme="pink">Pink</Tag>
              </Box>
            </Stack>
          </Section>
          <Section>
            <SimpleGrid
              mx={10}
              spacing={10}
              mb={0}
              columns={{ base: 1, md: 2, lg: 4 }}
              maxW="container.xl"
            >
              <Section alignItems="center" justifyContent="center" my={0}>
                <SectionSubHeading mb={10}>Left Icon</SectionSubHeading>
                <Stack
                  spacing={2}
                  wrap="wrap"
                  align="center"
                  justify="center"
                  direction="row"
                >
                  <Box>
                    <Tag variant="subtle" colorScheme={color}>
                      <TagLeftIcon boxSize="12px" as={FaHashtag} />
                      <TagLabel>Design</TagLabel>
                    </Tag>
                  </Box>
                  <Box>
                    <Tag variant="subtle" colorScheme={color}>
                      <TagLeftIcon boxSize="12px" as={FaHashtag} />
                      <TagLabel>Concept</TagLabel>
                    </Tag>
                  </Box>
                </Stack>
              </Section>
              <Section alignItems="center" justifyContent="center" my={0}>
                <SectionSubHeading mb={10}>Right Icon</SectionSubHeading>
                <Stack
                  spacing={2}
                  wrap="wrap"
                  align="center"
                  justify="center"
                  direction="row"
                >
                  <Box>
                    <Tag variant="subtle" colorScheme="messenger">
                      <TagLabel>Facebook</TagLabel>
                      <TagRightIcon boxSize="12px" as={FaFacebook} />
                    </Tag>
                  </Box>
                  <Box>
                    <Tag variant="subtle" colorScheme="whatsapp">
                      <TagLabel>WhatsApp</TagLabel>
                      <TagRightIcon boxSize="12px" as={FaWhatsapp} />
                    </Tag>
                  </Box>
                </Stack>
              </Section>
              <Section alignItems="center" justifyContent="center" my={0}>
                <SectionSubHeading mb={10}>Close button</SectionSubHeading>
                <Stack
                  spacing={2}
                  wrap="wrap"
                  align="center"
                  justify="center"
                  direction="row"
                >
                  <Box>
                    <Tag variant="subtle" colorScheme={color}>
                      <TagLabel>HTML5</TagLabel>
                      <TagCloseButton />
                    </Tag>
                  </Box>
                  <Box>
                    <Tag variant="subtle" colorScheme={color}>
                      <TagLabel>CSS3</TagLabel>
                      <TagCloseButton />
                    </Tag>
                  </Box>
                </Stack>
              </Section>
              <Section alignItems="center" justifyContent="center" my={0}>
                <SectionSubHeading mb={10}>Custom element</SectionSubHeading>
                <Box>
                  <Tag size="lg" colorScheme={color} borderRadius="full">
                    {/*
                     * TODO: add srcSet to Avatar
                     * srcSet={AvatarImage?.srcSet}
                     * issue: https://github.com/chakra-ui/chakra-ui/issues/5256
                     */}
                    <Avatar
                      src={AvatarImage.src}
                      size="xs"
                      name="Ethan Matthew Hunt"
                      ml={-1}
                      mr={2}
                    />
                    <TagLabel>Ethan Hunt</TagLabel>
                  </Tag>
                </Box>
              </Section>
            </SimpleGrid>
          </Section>
        </Stack>
      </chakra.main>
    </>
  );
};

export default BadgePage;
