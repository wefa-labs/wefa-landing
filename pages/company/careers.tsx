import { RiMailSendLine } from "@react-icons";

import React, { useRef, useContext } from "react";

import {
  motion,
  MotionValue,
  useTransform,
  useViewportScroll,
} from "framer-motion";

import { NextSeo } from "next-seo";

import { Search2Icon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  chakra,
  Container,
  Flex,
  Text,
  BoxProps,
  Heading,
  useColorModeValue,
  Link,
  Circle,
  Grid,
  InputGroup,
  InputLeftElement,
  Input,
  Icon,
  Select,
  Stack,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  VStack,
} from "@chakra-ui/react";

import { ThemeColorContext } from "@definitions/context/theme";
import { useRefScrollProgress } from "@definitions/hooks/useRefScrollProgress";
import customScrollbar from "@definitions/utils/scrollbar";

import DividerCurve from "@components/divider/divider-curve";
import Highlight from "@components/highlight";
import ImageLazyload from "@components/image-lazyload";

import Layout from "@layouts/default";

import CreativeImage from "@assets/images/creative.jpg?resize&img";
import OfficeImage from "@assets/images/services.jpg?resize&img";
import TeamImage from "@assets/images/team-2.jpg?resize&img";
import CreativeTeamImage from "@assets/images/team-3.jpg?resize&img";

export const MotionBox = motion<BoxProps>(Box);

const CareersPage = () => {
  const theme = useContext(ThemeColorContext);
  const color = theme.colorScheme; // global default primary theme color
  const ref = useRef<HTMLDivElement | null>(null);
  const box = useRefScrollProgress(ref, 0);

  const { scrollYProgress } = useViewportScroll();

  const boxScale = useTransform(
    scrollYProgress,
    [box.start as number, box.end as number],
    [1.42, 1],
  ) as number & MotionValue<number>;
  const boxWScale = useTransform(
    scrollYProgress,
    [box.start as number, box.end as number],
    [0.7, 1],
  ) as number & MotionValue<number>;

  const boxOpacity = useTransform(
    scrollYProgress,
    [box.start as number, box.end as number],
    [0.25, 1],
  ) as number & MotionValue<number>;

  return (
    <>
      <NextSeo
        title="Join our growing team"
        description="Mercury Careers Example Page"
      />
      <chakra.main pos="relative">
        <chakra.svg
          zIndex="-1"
          pos="absolute"
          left="0"
          width="197px"
          height="1181px"
          viewBox="0 0 197 1181"
          fill={useColorModeValue(`${color}.50`, `${color}.800`)}
        >
          <g transform="translate(98.500000, 590.500000) scale(-1, 1) translate(-98.500000, -590.500000)">
            <path d="M23.6921692,239.248761 C111.997169,391.585761 128.783,381.79 141.778,544.912 C154.772,708.032 -24.551,747.931864 9.604,938.462864 C22.765,1011.87586 70.84,1146.958 196.52,1181 L197,0.824 C13.2,30.905 -35.1778308,137.690761 23.6921692,239.248761 Z" />
          </g>
        </chakra.svg>

        {/*  Work with us intro */}
        <Container mb={40} maxWidth="container.xl">
          <Flex direction={["column", "column", "row", "row"]} align="flex-end">
            <Flex w="full" pos="relative" flex="1">
              <Flex
                direction="column"
                align={["stretch", "center", "start"]}
                pos={["unset", "unset", "absolute", "absolute"]}
                bottom="-50px"
                left="0"
                width={["full", "full", "450px", "600px"]}
                zIndex={2}
                shadow={["none", "none", "xl", "2xl"]}
                bg={useColorModeValue("whiteAlpha.900", "blackAlpha.900")}
                rounded="sm"
                p={[2, 5, 10, 20]}
              >
                <Heading
                  textAlign={["center", "center", "left"]}
                  mb={[2, 2, 5]}
                  fontSize={["2xl", "3xl", "4xl", "5xl"]}
                >
                  We are working hard to grow our team.
                  <Text ml={[2, 2, 0]} display={["inline", "inline", "block"]}>
                    Work with us.
                  </Text>
                </Heading>
                <Button
                  colorScheme={color}
                  maxWidth={["full", "220px", "220px"]}
                  size="lg"
                >
                  View Open Positions
                </Button>
              </Flex>
            </Flex>
            <Flex w="full" flex="2">
              <Box flex="1">
                <ImageLazyload flex="1" image={TeamImage} />
              </Box>
            </Flex>
          </Flex>
        </Container>

        {/* What do we offer our employees? */}
        <Container maxWidth="container.xl">
          <Flex
            mb={20}
            align="flex-start"
            direction={["column", "column", "row", "row"]}
          >
            <Flex w="full" flex="2">
              <Box flex="1">
                <ImageLazyload flex="1" image={OfficeImage} />
              </Box>
            </Flex>

            <Flex w="full" pos="relative" flex="1">
              <Flex
                direction="column"
                align={["stretch", "center", "start"]}
                pos={["unset", "unset", "absolute", "absolute"]}
                top="-50px"
                right="0"
                width={["full", "full", "450px", "600px"]}
                zIndex={2}
                shadow={["none", "none", "xl", "2xl"]}
                bg={useColorModeValue("whiteAlpha.900", "blackAlpha.900")}
                rounded="sm"
                p={[2, 5, 10, 20]}
              >
                <Heading
                  as="h3"
                  w="full"
                  mb={[2, 2, 5]}
                  fontSize={["xl", "2xl", "3xl", "4xl"]}
                >
                  What do we offer ?
                </Heading>
                <Text fontSize="lg">
                  Curabitur blandit tempus ardua ridiculus sed magna.
                  Pellentesque habitant{" "}
                  <Link
                    fontWeight="bold"
                    color={useColorModeValue(`${color}.400`, `${color}.300`)}
                  >
                    office facilities
                  </Link>{" "}
                  senectus et netus. Petierunt uti sibi concilium totius Galliae
                  in diem certam indicere.
                </Text>
              </Flex>
            </Flex>
          </Flex>

          <Flex
            direction={["column", "column", "row", "row"]}
            align="flex-start"
            pos="relative"
          >
            <Flex w="full" pos="relative" flex="1">
              <Flex
                direction="column"
                align={["stretch", "center", "start"]}
                pos={["unset", "unset", "absolute", "absolute"]}
                top="-32"
                left="10"
                width={["full", "full", "450px", "600px"]}
                zIndex={2}
                shadow={["none", "none", "xl", "2xl"]}
                bg={useColorModeValue("whiteAlpha.900", "blackAlpha.900")}
                rounded="sm"
                p={[2, 5, 10, 20]}
              >
                <Heading
                  as="h3"
                  w="full"
                  mb={[2, 2, 5]}
                  fontSize={["xl", "2xl", "3xl", "4xl"]}
                >
                  Creative Community
                </Heading>
                <Text fontSize="lg">
                  How to work with creative communities ? "A group of people
                  with shared characteristics unified by a common idea or
                  problem to solve, who come together to act, create and share".{" "}
                  <Link
                    fontWeight="bold"
                    color={useColorModeValue(`${color}.400`, `${color}.300`)}
                  >
                    Join us
                  </Link>{" "}
                  and let's improve our company culture together.
                </Text>
              </Flex>
            </Flex>
            <Flex w="full" flex="2">
              <Box flex="1">
                <ImageLazyload flex="1" image={CreativeImage} />
              </Box>
            </Flex>
            <Flex
              direction="column"
              align={["stretch", "center", "start"]}
              pos={["unset", "unset", "absolute", "absolute"]}
              bottom="-64"
              right="10"
              width={["full", "full", "450px", "600px"]}
              zIndex={2}
              shadow={["none", "none", "xl", "2xl"]}
              bg={useColorModeValue("whiteAlpha.900", "blackAlpha.900")}
              rounded="sm"
              p={[2, 5, 10, 20]}
            >
              <Heading
                as="h3"
                w="full"
                mb={[2, 2, 5]}
                fontSize={["xl", "2xl", "3xl", "4xl"]}
              >
                Community Culture
              </Heading>
              <Text fontSize="lg">
                "How do you manage to maintain the involvement and commitment of
                our employees?" The answer to this topic exactly sums up the
                company culture and behavior towards employees. Let's get to
                know our company culture now.
              </Text>
            </Flex>
          </Flex>
        </Container>

        <chakra.svg
          zIndex="-1"
          pos="absolute"
          right="0"
          width="197px"
          height="1181px"
          viewBox="0 0 197 1181"
          // fill={useColorModeValue("#DAEDFB", "#082D49")}
          fill={useColorModeValue(`${color}.100`, `${color}.600`)}
        >
          <path d="M23.6921692,239.248761 C111.997169,391.585761 128.783,381.79 141.778,544.912 C154.772,708.032 -24.551,747.931864 9.604,938.462864 C22.765,1011.87586 70.84,1146.958 196.52,1181 L197,0.824 C13.2,30.905 -35.1778308,137.690761 23.6921692,239.248761 Z" />
        </chakra.svg>

        {/* Working in a startup*/}
        <Box mt={[0, 0, 20, 42]} py={20}>
          <Container maxWidth="container.xl">
            <Box my={[10, 20, 36]} maxWidth="660px">
              <Heading
                textAlign={["left", "left", "left"]}
                mb={[2, 2, 5]}
                fontSize={["2xl", "3xl", "4xl", "5xl"]}
                as="h3"
              >
                Working in a startup is a challenging but very instructive
                experience.
              </Heading>
              <Text>
                Day-to-day challenging projects, important decisions to be made,
                projects that need to be followed constantly, plain and honest
                communication. Too much for some, but for others - like us -
                <Highlight
                  strokeColor={useColorModeValue(
                    `${color}.300`,
                    `${color}.500`,
                  )}
                  bottom={"-8px"}
                  strokeWidth={1}
                >
                  it's the best possible environment to grow in.
                </Highlight>
              </Text>
            </Box>
            <Box ref={ref}>
              <MotionBox
                id="scale-wrapper"
                overflow="hidden"
                w="full"
                style={{
                  // opacity: boxOpacity,
                  scale: boxWScale,
                }}
              >
                <MotionBox
                  style={{
                    opacity: boxOpacity,
                    scale: boxScale,
                  }}
                >
                  <ImageLazyload ratio={43 / 20} image={CreativeTeamImage} />
                </MotionBox>
              </MotionBox>
            </Box>
          </Container>
        </Box>

        {/*  Our values and the opportunities */}
        <Box pos="relative" my={[0, 0, 10, 20]}>
          <chakra.svg
            zIndex="-1"
            pos="absolute"
            top="50%"
            transform="translateY(-50%)"
            // width="1300px"
            // height="875px"
            viewBox="0 0 1300 875"
            version="1.1"
            stroke={useColorModeValue(`${color}.100`, `${color}.700`)}
          >
            <g
              transform="translate(0.000000, -14.000000)"
              strokeWidth="1"
              fill="none"
              fillRule="evenodd"
            >
              <g transform="translate(-51.000000, 14.000000)">
                <ellipse
                  cx="813.150322"
                  cy="617.193548"
                  rx="174.150322"
                  ry="174.193548"
                  // fill="orange"
                ></ellipse>
                <ellipse
                  cx="116.368647"
                  cy="685.381894"
                  rx="53.3686471"
                  ry="53.3818939"
                  // fill="yellow"
                ></ellipse>
                <ellipse
                  cx="116.540444"
                  cy="116.129032"
                  rx="114.696024"
                  ry="114.724841"
                  // fill="red"
                ></ellipse>
                <ellipse
                  cx="1096.54617"
                  cy="141.573361"
                  rx="109.54617"
                  ry="109.573361"
                ></ellipse>
                <ellipse
                  cx="435.329993"
                  cy="791.350676"
                  rx="81.9258018"
                  ry="81.9464853"
                ></ellipse>
              </g>
            </g>
          </chakra.svg>

          <Container maxWidth="container.xl">
            <Flex
              align="center"
              direction={["column", "column", "column", "row"]}
            >
              <Box
                // my={[10, 20, 36]}
                maxWidth={["full", "full", "700px", "600px"]}
              >
                <Heading
                  textAlign={["center", "center", "center", "left"]}
                  mb={[2, 2, 5]}
                  fontSize={["2xl", "3xl", "4xl", "5xl"]}
                  as="h3"
                >
                  Our values and the opportunities we offer.
                </Heading>
                <Text textAlign={["center", "center", "center", "left"]}>
                  Qui ipsorum lingua Celtae, nostra Galli appellantur.
                  Pellentesque habitant morbi tristique senectus et netus.
                  Nihilne te nocturnum praesidium Palati, nihil urbis vigiliae.
                  We love our employees
                </Text>
              </Box>
              <Box mt={[10, 10, 20, 0]} w="full" pos="relative" flex="1">
                <Grid templateColumns="repeat(2, 1fr)" gap={[2, 0, 0, 0]}>
                  <Circle size="128px" bg="red.300" color="white">
                    <Text fontWeight="600">Teamwork</Text>
                  </Circle>
                  <Circle
                    mt={[0, 0, -10, -10]}
                    size="128px"
                    bg="orange.300"
                    color="white"
                  >
                    <Text fontWeight="600">Hi-Tech</Text>
                  </Circle>
                  <Flex justify="end">
                    <Circle
                      mt={[0, 0, -4, -4]}
                      size="128px"
                      bg="teal.300"
                      color="white"
                    >
                      <Text fontWeight="600">Design</Text>
                    </Circle>
                  </Flex>
                  <Flex justify="end">
                    <Circle
                      mt={[0, 0, -20, -20]}
                      size="128px"
                      bg="blue.300"
                      color="white"
                    >
                      <Text fontWeight="600">UI / UX</Text>
                    </Circle>
                  </Flex>
                  <Circle
                    mb={[0, 0, -8, -8]}
                    ml={[0, 0, 10, 10]}
                    size="128px"
                    bg="purple.300"
                    color="white"
                  >
                    <Text fontWeight="600">Innovation</Text>
                  </Circle>
                  <Flex justify="center">
                    <Circle
                      mt={[0, 0, -8, -8]}
                      mr={[0, 0, 8, 8]}
                      size="128px"
                      bg="pink.300"
                      color="white"
                    >
                      <Text fontWeight="600">Cetrification</Text>
                    </Circle>
                  </Flex>
                </Grid>
              </Box>
            </Flex>
          </Container>
        </Box>

        {/* Open Positions */}
        <Box pb={20} mt={20} pos="relative" zIndex="1">
          <Container maxWidth="container.xl">
            <Box mb={10} mx="auto" maxWidth="600px" textAlign="center">
              <Heading as="h3">Open Positions</Heading>
              <Text>
                We’re a truly global team with 12 offices around the world.
              </Text>
            </Box>
            <Box>
              <Stack
                direction={["column", "column", "row"]}
                spacing={[2, 3, 5]}
              >
                <InputGroup>
                  <InputLeftElement
                    pointerEvents="none"
                    children={<Search2Icon color="gray.300" />}
                  />
                  <Input
                    variant="filled"
                    type="text"
                    placeholder="Search position"
                  />
                </InputGroup>

                <Select variant="filled" placeholder="All Locations">
                  <option value="amsterdam">Amsterdam</option>
                  <option value="canada">Canada</option>
                  <option value="germany">Germany</option>
                  <option value="netherlands">Netherlands</option>
                  <option value="uk">UK</option>
                  <option value="us">US</option>
                  <option value="remote">Remote</option>
                </Select>

                <Select variant="filled" placeholder="All Departments">
                  <option value="bop">Business Operations</option>
                  <option value="it">Information Technology</option>
                  <option value="engineering">Engineering</option>
                  <option value="infrastructure">Infrastructure</option>
                  <option value="marketing">Marketing</option>
                  <option value="sales">Sales</option>
                  <option value="software">Software Development</option>
                </Select>
              </Stack>

              <VStack
                overflowX={["auto"]}
                alignItems={["start", "start", "center", "center"]}
                sx={customScrollbar()}
              >
                <Table minWidth="768px" mt={10} variant="simple">
                  <Thead>
                    <Tr>
                      <Th>Job Title</Th>
                      <Th>Location</Th>
                      <Th>Department</Th>
                      <Th isNumeric></Th>
                    </Tr>
                  </Thead>
                  <Tbody>
                    <Tr>
                      <Td fontWeight="bold">Database Engineer</Td>
                      <Td>Remote</Td>
                      <Td>Engineering</Td>
                      <Td isNumeric>
                        <Button variant="ghost">Apply</Button>
                      </Td>
                    </Tr>
                    <Tr>
                      <Td fontWeight="bold">Data Center Engineer</Td>
                      <Td>UK, Remote</Td>
                      <Td>Infrastructure</Td>
                      <Td isNumeric>
                        <Button variant="ghost">Apply</Button>
                      </Td>
                    </Tr>
                    <Tr>
                      <Td fontWeight="bold">IT Specialist</Td>
                      <Td>Netherlands</Td>
                      <Td>Information Technology</Td>
                      <Td isNumeric>
                        <Button variant="ghost">Apply</Button>
                      </Td>
                    </Tr>
                    <Tr>
                      <Td fontWeight="bold">Full Stack Developer</Td>
                      <Td>Germany</Td>
                      <Td>Software Development</Td>
                      <Td isNumeric>
                        <Button variant="ghost">Apply</Button>
                      </Td>
                    </Tr>
                  </Tbody>
                </Table>
              </VStack>

              <Box mx="auto" maxWidth="600px" mt={20} textAlign="center">
                <Text mb={2} fontSize="lg" fontWeight="bold">
                  Didn't find anything interesting?
                </Text>
                <Text mb={4} color={useColorModeValue("gray.600", "gray.400")}>
                  Apply to our Talent Pool. If there's an opportunity that suits
                  your skills and experience, we will get in touch with you!
                </Text>
                <Button
                  rightIcon={<Icon as={RiMailSendLine} />}
                  colorScheme={color}
                  variant="outline"
                  zIndex={2}
                >
                  Talent Pool
                </Button>
              </Box>
            </Box>
          </Container>
        </Box>
        <DividerCurve
          zIndex={0}
          invert
          color={useColorModeValue("gray.50", "gray.900")}
          position="bottom"
        />
      </chakra.main>
    </>
  );
};

CareersPage.PageLayout = ({ children }: { children: React.ReactNode }) => (
  <Layout stickyHeader={false}>{children}</Layout>
);

export default CareersPage;
