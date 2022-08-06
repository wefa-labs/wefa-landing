import { ImQuotesLeft } from "@react-icons";

import React, { useContext, memo } from "react";

import { motion } from "framer-motion";

import { NextSeo } from "next-seo";
import NextLink from "next/link";

import {
  AspectRatio,
  Box,
  BoxProps,
  chakra,
  ChakraProps,
  Container,
  Flex,
  Heading,
  Icon,
  SimpleGrid,
  Stack,
  Text,
  ThemingProps,
  useColorModeValue,
  VStack,
  VisuallyHidden,
  Wrap,
  WrapItem,
  WrapProps,
} from "@chakra-ui/react";

import Logo1 from "@definitions/brands/logo-1";
import Logo2 from "@definitions/brands/logo-2";
import Logo3 from "@definitions/brands/logo-3";
import Logo4 from "@definitions/brands/logo-4";
import Logo5 from "@definitions/brands/logo-5";
import Logo6 from "@definitions/brands/logo-6";
import Logo7 from "@definitions/brands/logo-7";
import { ThemeColorContext } from "@definitions/context";
import { useHorizontalScroll } from "@definitions/hooks/useHorizontalScroll";
import { __DEV__ } from "@definitions/utils";
import customScrollbar from "@definitions/utils/scrollbar";

import ButtonLongArrow from "@components/button/button-arrow";
import ImageLazyload from "@components/image-lazyload";
import PageTitle from "@components/page-title";
import { TestimonialBlurredBackdrop } from "@components/testimonials/testimonial-blurred-backdrop";

import LoisHurd from "@assets/images/avatar/1f-square.jpg?resize&img";
import DianneAmerson from "@assets/images/avatar/1f.jpg?resize&img";
import PaulHouston from "@assets/images/avatar/1m-square.jpg?resize&img";
import PatrickChamberlin from "@assets/images/avatar/1m.jpg?resize&img";
import MelanieWilliams from "@assets/images/avatar/2f.jpg?resize&img";
import StevenHughes from "@assets/images/avatar/2m.jpg?resize&img";
import KathleenCharles from "@assets/images/avatar/3f.jpg?resize&img";
import DavidMiller from "@assets/images/avatar/3m.jpg?resize&img";
import Team2 from "@assets/images/team2.jpg?resize&img";
import TestiomialBG1 from "@assets/testiomial-bg-1.svg";
import TestiomialBG3 from "@assets/testiomial-bg-3.svg";

export const MotionBox = motion<BoxProps>(Box);

const AboutPage: React.FC = () => {
  const theme = useContext(ThemeColorContext);
  const color = theme.colorScheme; // global default primary theme color
  const paleColor = useColorModeValue("gray.500", "gray.300");

  return (
    <>
      <NextSeo title="About us" description="Mercury About Us Example Page" />
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
          bg="transparent"
          pb={10}
          // mb={10}
          title={
            <Heading
              w="full"
              textAlign="center"
              mb={4}
              lineHeight="1"
              fontSize="5xl"
            >
              About us
            </Heading>
          }
        >
          <Text textAlign="center" fontSize="xl" maxWidth="800px">
            We develop digital design products for startups and enterprises that
            will save you thousands of design hours and allow you to focus on
            your products instead of design.
          </Text>
        </PageTitle>

        <VStack align="stretch" mb={[10, 20, 32]} spacing={[10, 20, 32]}>
          <CustomerLogo
            title="Used by top designers from the world's top companies"
            items={[
              {
                title: "Customer 1",
                logo: <Logo1 color="current" />,
              },
              {
                title: "Customer 2",
                logo: <Logo2 color="current" />,
              },
              {
                title: "Customer 3",
                logo: <Logo3 color="current" />,
              },
              {
                title: "Customer 4",
                logo: <Logo4 color="current" />,
              },
              {
                title: "Customer 5",
                logo: <Logo5 color="current" />,
              },
            ]}
            color={paleColor}
            spacing={32}
          />

          {/* ----------------------- Customer Story ----------------------- */}
          <CustomerStory
            title="We’ve worked on over 50+ projects with clients in 12 industries, from early-stage startups to Fortune 500 companies."
            items={[
              {
                logo: (
                  <Logo6
                    color={useColorModeValue("orange.300", "orange.300")}
                  />
                ),
                bg: useColorModeValue("orange.50", "orange.900"),
              },
              {
                logo: (
                  <Logo7 color={useColorModeValue("blue.300", "blue.300")} />
                ),
                bg: useColorModeValue("blue.50", "blue.900"),
              },
            ]}
          />

          {/* ------------------------- Who are we ------------------------- */}
          <WhoAreWe
            image={Team2}
            title="Who are we ?"
            body={
              <>
                <Text fontSize="xl">
                  We develop digital design products for startups and
                  enterprises that will save you thousands of design hours and
                  allow you to focus on your products instead of design.
                </Text>
                <Text>
                  We’re a team that knows creativity doesn’t just happen; it
                  takes passion and a lot of hard work. That’s why we’re
                  committed to making it easier for people to get their creative
                  projects done, driven by a positive purpose and a shared set
                  of values that puts our community at the heart of everything
                  we do.
                </Text>
                <Text fontWeight="600" fontSize="lg">
                  Trusted by thousands
                </Text>
                <Text>
                  Over 10,000 business from 20 different countries believe in us
                  and what we do – and that number is only growing. We’ve worked
                  on over 50+ projects with clients in 12 industries, from
                  early-stage startups to Fortune 500 companies.
                </Text>
              </>
            }
          />

          {/* --------------------------- Stats ---------------------------- */}
          <Stats
            title="Our Achievements"
            subtitle="2021 — 22"
            items={[
              {
                value: 1350,
                title: "Global Customers",
                body: "We are gradually increasing our number of Global Customers by expanding our work network.",
              },
              {
                value: 127,
                title: "Project Delivered",
                body: "We have improved our delivery time with our competent and productive team.",
              },
              {
                value: 12,
                title: "Awards",
                body: "The awards we win are increasing with the innovative projects and our technophile clients.",
              },
              {
                value: 4.9,
                title: "Rating",
                body: "We build apps that are loved by users, and global market ratings prove it.",
              },
            ]}
          />

          {/* ---------------------------- Team ---------------------------- */}
          <CreativeTeam
            title="Creative Team"
            body="We’re a team that knows creativity doesn’t just happen; it takes passion and a lot of hard work."
            items={[
              {
                image: DianneAmerson,
                name: "Dianne Amerson",
                job: "Founder & CEO",
              },
              {
                image: PatrickChamberlin,
                name: "Patrick Chamberlin",
                job: "UI Designer",
              },
              {
                image: MelanieWilliams,
                name: "Melanie Williams",
                job: "Developer",
              },
              {
                image: StevenHughes,
                name: "Steven Hughes",
                job: "Account Manager",
              },
              {
                image: KathleenCharles,
                name: "Kathleen Charles",
                job: "Digital Marketing",
              },
              {
                image: DavidMiller,
                name: "David Miller",
                job: "Project Manager",
              },
            ]}
          />

          {/* ------------------------ Testimonials ------------------------ */}
          <Testimonials
            title="Testimonials"
            body=" Over 10,000 business from 20 different countries believe in us and what we do — and that number is only growing."
            items={[
              {
                avatar: LoisHurd,
                background: TestiomialBG1,
                name: "Lois Hurd",
                occupation: "UX Designer",
                body: "It's really wonderful. You've saved our business! Mercury Template is worth much more than I paid. It really saves me time and effort. It's exactly what our business has been lacking.",
              },
              {
                avatar: PaulHouston,
                background: TestiomialBG3,
                name: "Paul Houston",
                occupation: "Product Manager",
                body: "It's really wonderful. You've saved our business! Mercury Template is worth much more than I paid. It really saves me time and effort. It's exactly what our business has been lacking.",
              },
            ]}
          />

          {/* ----------------------------- CTA ---------------------------- */}
          <CTA
            title="Let's create an amazing project together!"
            link="Contact us now"
            href="#"
          />
        </VStack>
      </chakra.main>
    </>
  );
};

/* -------------------------------------------------------------------------- */
/*                                 PAGE BLOCKS                                */
/*    All page content can be edited via props. You do not need to make any   */
/*    changes in this part if you are not going to make design arrangements   */
/* -------------------------------------------------------------------------- */

const CustomerLogo: React.FC<
  {
    title: string;
    items: { title: string; logo: React.ReactNode }[];
  } & ChakraProps &
    ThemingProps &
    WrapProps
> = memo(({ title, items = [], color, spacing, ...rest }) => {
  return (
    <Box {...rest}>
      <Container maxW="container.xl">
        {title && (
          <Text mb={5} align="center" color={color}>
            {title}
          </Text>
        )}
        <Wrap
          color={color}
          spacing={4}
          mx={spacing}
          align="center"
          justify="center"
        >
          {items.map((item) => (
            <WrapItem key={item.title}>
              {item.logo}
              <VisuallyHidden>{item.title}</VisuallyHidden>
            </WrapItem>
          ))}
        </Wrap>
      </Container>
    </Box>
  );
});

if (__DEV__) {
  CustomerLogo.displayName = "CustomerLogo";
}

const CustomerStory: React.FC<
  {
    title: string;
    items: { logo: React.ReactNode; bg: string }[];
  } & ChakraProps
> = memo(({ title, items = [], ...rest }) => {
  const boxSize = ["full", "300px", "300px"];
  return (
    <Box {...rest}>
      <Container maxW="container.xl">
        <Flex
          // mt={20}
          minHeight="380px"
          width="full"
          direction={["column", "column", "column", "row"]}
          align="strech"
          justifyContent="stretch"
        >
          {title && (
            <Flex
              mb={[10, 10, 10, 0]}
              align="center"
              justify="center"
              width="full"
            >
              <Heading
                as="h3"
                fontWeight="normal"
                fontSize="2xl"
                textAlign={["center", "center", "center", "start"]}
                maxW={["full", 500, 700, "full"]}
              >
                {title}
              </Heading>
            </Flex>
          )}
          {items && items.length && (
            <Flex
              direction={["column", "row", "row", "row"]}
              align={["unset", "center", "end", "unset"]}
              justify={["center", "center", "center", "unset"]}
              pos="relative"
              width="full"
            >
              {items[0] && (
                <Flex
                  pos={["unset", "unset", "unset", "absolute"]}
                  width={boxSize}
                  height={boxSize}
                  minHeight="200px"
                  align="center"
                  justify="center"
                  bg={items[0].bg ? items[0].bg : null}
                  m={[0, 0, 5]}
                  mb={[5, 0, 5]}
                >
                  <Box flex="1" maxWidth="160px">
                    <AspectRatio ratio={1}>{items[0].logo}</AspectRatio>
                  </Box>
                </Flex>
              )}

              {items[1] && (
                <Flex
                  pos={["unset", "unset", null, "absolute"]}
                  right={0}
                  top={10}
                  width={boxSize}
                  height={boxSize}
                  minHeight="200px"
                  align="center"
                  justify="center"
                  // bg={useColorModeValue("blue.50", "blue.900")}
                  bg={items[1].bg ? items[1].bg : null}
                  m={[0, 0, 5]}
                >
                  <Box flex="1" maxWidth="160px">
                    <AspectRatio ratio={1}>{items[1].logo}</AspectRatio>
                  </Box>
                </Flex>
              )}
            </Flex>
          )}
        </Flex>
      </Container>
    </Box>
  );
});

if (__DEV__) {
  CustomerStory.displayName = "CustomerStory";
}

const WhoAreWe: React.FC<
  { image: imageObject; title: string; body: React.ReactNode } & ChakraProps
> = memo(({ image, title, body, ...rest }): JSX.Element => {
  return (
    <Box {...rest}>
      <Container maxW="container.xl">
        <Stack
          spacing={10}
          align="center"
          direction={["column", "column", "row"]}
        >
          <Flex flex="1">
            <Box w="full">
              <ImageLazyload
                rounded="md"
                minH="400px"
                image={image}
                alt="Who are we"
              />
            </Box>
          </Flex>
          <Stack spacing={5} flex="1">
            {title && (
              <Heading as="h3" fontSize="3xl">
                {title}
              </Heading>
            )}
            {body}
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
});

if (__DEV__) {
  WhoAreWe.displayName = "WhoAreWe";
}

const Stats: React.FC<{
  title: string;
  subtitle: string;
  items: { value: number; title: string; body: string }[];
}> = memo(({ title, subtitle, items }) => {
  const paleInDark = useColorModeValue("current", "whiteAlpha.600");
  return (
    <Box bg={useColorModeValue("gray.50", "gray.900")} py={20}>
      <Container maxW="container.xl">
        <Stack
          spacing={10}
          alignItems="center"
          direction={["column", "column", "column", "row"]}
        >
          <Flex
            flex="1"
            align="center"
            direction={["row", "row", "row", "column"]}
          >
            {title && (
              <Heading>
                {title}
                {subtitle && (
                  <Text
                    d={["inline", "inline", "inline", "block"]}
                    verticalAlign="middle"
                    as="span"
                    mx={[2, 2, 2, 0]}
                    my={2}
                    fontWeight="400"
                    fontSize="xl"
                    color={paleInDark}
                  >
                    {subtitle}
                  </Text>
                )}
              </Heading>
            )}
          </Flex>

          {items && (
            <SimpleGrid flex="3" spacing={[5, 5, 5, 10]} columns={[1, 2, 2, 2]}>
              {items.map((item) => (
                <VStack
                  align="start"
                  key={item.title}
                  direction="column"
                  flex="1"
                >
                  <Text fontWeight="600" fontSize="4xl">
                    {item.value.toLocaleString()}
                  </Text>
                  <Text fontWeight="600">{item.title}</Text>
                  <Text color={paleInDark} maxWidth="375px">
                    {item.body}
                  </Text>
                </VStack>
              ))}
            </SimpleGrid>
          )}
        </Stack>
      </Container>
    </Box>
  );
});

if (__DEV__) {
  Stats.displayName = "Stats";
}

const CreativeTeam: React.FC<{
  title: string;
  body: string;
  items: { image: imageObject; name: string; job: string }[];
}> = memo(({ title, body, items = [] }) => {
  const scrollRef = useHorizontalScroll({ maxWidth: 1060 });
  const paleInDark = useColorModeValue("current", "whiteAlpha.600");
  return (
    <Box>
      <Container maxW="container.xl">
        {(title || body) && (
          <Box mb={[10, 10, 24, 24]} maxW="600px">
            {title && <Heading mb={2}>{title}</Heading>}
            {body && (
              <Text color={paleInDark} fontSize="xl">
                {body}
              </Text>
            )}
          </Box>
        )}
        {items && (
          <Box ref={scrollRef} sx={customScrollbar()} pb="4" overflowX="auto">
            <Stack
              direction="row"
              spacing={4}
              justify="space-between"
              minW="container.lg"
            >
              {items.map((item) => {
                return (
                  <Box w="full" maxW="320px" key={item.name}>
                    <ImageLazyload
                      rounded="md"
                      image={item.image}
                      alt={item.name}
                    />
                    <Heading mt={4} as="h3" fontSize="md">
                      {item.name}
                    </Heading>
                    <Text color={paleInDark} fontSize="sm">
                      {item.job}
                    </Text>
                  </Box>
                );
              })}
            </Stack>
          </Box>
        )}
      </Container>
    </Box>
  );
});

if (__DEV__) {
  CreativeTeam.displayName = "CreativeTeam";
}

const Testimonials: React.FC<{
  title: string;
  body: string;
  items: {
    avatar: imageObject;
    background:
      | string
      | React.FC<React.SVGProps<SVGSVGElement>>
      | React.FunctionComponent<React.SVGProps<SVGSVGElement>>
      | React.SVGProps<SVGSVGElement>;
    name: string;
    occupation: string;
    body: string;
  }[];
}> = memo(({ title, body, items = [] }) => {
  return (
    <Box>
      <Box pos="relative">
        <Container maxW="container.xl">
          {(title || body) && (
            <Box mb={[10, 10, 24, 24]} maxW="600px">
              {title && <Heading mb="2">{title}</Heading>}
              {body && <Text fontSize="xl">{body}</Text>}
            </Box>
          )}
          {items && (
            <SimpleGrid
              // alignItems="center"
              // justifyContent="center"
              spacingX={10}
              spacingY={20}
              columns={[1, 1, 2, 2]}
              mb={"40px"}
              sx={{
                "& > div:nth-child(even)": {
                  transform: [
                    null,
                    null,
                    "translateY(40px)",
                    "translateY(40px)",
                  ],
                },
              }}
            >
              {items.map((item) => (
                <Box key={item.name}>
                  <TestimonialBlurredBackdrop
                    avatarImage={item.avatar}
                    name={item.name}
                    occupation={item.occupation}
                    body={item.body}
                    backgroundImage={item.background}
                    icon={
                      <Icon as={ImQuotesLeft} color="gray.500" w={10} h={10} />
                    }
                  />
                </Box>
              ))}
            </SimpleGrid>
          )}
        </Container>
      </Box>
    </Box>
  );
});

if (__DEV__) {
  Testimonials.displayName = "Testimonials";
}

const CTA: React.FC<{ title: string; link: string; href: string }> = memo(
  ({ title, link, href }): JSX.Element => {
    return (
      <Box>
        <Container textAlign="center" maxW="container.xl">
          <Box mx="auto" maxWidth={["full", "480px", "500px"]}>
            {title && (
              <Heading as="h3" fontSize={["3xl", "4xl", "5xl", "5xl"]} mb={4}>
                {title}
              </Heading>
            )}
            <NextLink href={href} passHref>
              <ButtonLongArrow>
                <Text fontSize="sm" fontWeight={700} textTransform="uppercase">
                  {link}
                </Text>
              </ButtonLongArrow>
            </NextLink>
          </Box>
        </Container>
      </Box>
    );
  },
);

if (__DEV__) {
  CTA.displayName = "CTA";
}

export default AboutPage;
