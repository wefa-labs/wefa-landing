import {
  FaIcons,
  MdDevices,
  RiPagesLine,
  BsLayoutTextWindowReverse,
  MdOutlinePalette,
  MdOutlineBrightness4,
  MdOutlineColorLens,
  MdOutlineAccountTree,
  AiOutlineCode,
  MdBolt,
  VscDebugConsole,
  HiOutlineBadgeCheck,
  FiLifeBuoy,
  FiGrid,
} from "@react-icons";

import React, { memo, useContext } from "react";

import { IconType } from "react-icons";

import { NextSeo } from "next-seo";
import NextLink from "next/link";

import { ArrowDownIcon, CheckIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  chakra,
  ChakraProps,
  Circle,
  Container,
  Flex,
  Heading,
  HStack,
  Icon,
  Link,
  SimpleGrid,
  Text,
  ThemingProps,
  useColorModeValue,
  VStack,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";

import { ThemeColorContext } from "@definitions/context/theme";
import Site from "@definitions/site";
import { ColorMatch } from "@definitions/utils/color";

import FadeUp, {
  FadeUpGrid,
  FadeUpVStack,
} from "@components/animations/fade-up";
import FooterSimpleSocial from "@components/footer/footer-simple-social";
import Highlight from "@components/highlight";
import ImageLazyload from "@components/image-lazyload";

import Layout from "@layouts/default";

import DemoBusinessLight from "@assets/images/demo/demo-business-screenshot.png?sizes[]=320,sizes[]=640,sizes[]=1280&format=webp&img";
import DemoFurnitureShopLight from "@assets/images/demo/demo-furniture-shop-screenshot.png?sizes[]=320,sizes[]=640,sizes[]=1280&format=webp&img";
import DemoMarketingLight from "@assets/images/demo/demo-marketing-screenshot.png?sizes[]=320,sizes[]=640,sizes[]=1280&format=webp&img";
import DemoMobileAppLight from "@assets/images/demo/demo-mobile-app-screenshot.png?sizes[]=320,sizes[]=640,sizes[]=1280&format=webp&img";
import DemoPersonalPortfolioLight from "@assets/images/demo/demo-personal-portfolio-screenshot.png?sizes[]=320,sizes[]=640,sizes[]=1280&format=webp&img";
import DemoSaasLight from "@assets/images/demo/demo-saas-screenshot.png?sizes[]=320,sizes[]=640,sizes[]=1280&format=webp&img";
import DemoWebAppLight from "@assets/images/demo/demo-web-app-screenshot.png?sizes[]=320,sizes[]=640,sizes[]=1280&format=webp&img";
// Screenshots
import AccountScr4 from "@assets/images/screenshots/account-sign-in-4_3.png?sizes[]=330,sizes[]=660&format=webp&img";
import BlogScr4 from "@assets/images/screenshots/blog-modern-4_3.png?sizes[]=330,sizes[]=660&format=webp&img";
import CompanyScr4 from "@assets/images/screenshots/company-careers-4_3.png?sizes[]=330,sizes[]=660&format=webp&img";
import CompanyScr7 from "@assets/images/screenshots/company-customer-stories-4_3.png?sizes[]=330,sizes[]=660&format=webp&img";
import CompanyScr9 from "@assets/images/screenshots/company-hire-us-2-4_3.png?sizes[]=330,sizes[]=660&format=webp&img";
import DemoScr1 from "@assets/images/screenshots/demo-business-4_3.png?sizes[]=330,sizes[]=660&format=webp&img";
import DemoScr2 from "@assets/images/screenshots/demo-furniture-shop-4_3.png?sizes[]=330,sizes[]=660&format=webp&img";
import DemoScr3 from "@assets/images/screenshots/demo-marketing-4_3.png?sizes[]=330,sizes[]=660&format=webp&img";
import DemoScr4 from "@assets/images/screenshots/demo-mobile-app-4_3.png?sizes[]=330,sizes[]=660&format=webp&img";
import DemoScr5 from "@assets/images/screenshots/demo-personal-portfolio-4_3.png?sizes[]=330,sizes[]=660&format=webp&img";
import DemoScr6 from "@assets/images/screenshots/demo-saas-4_3.png?sizes[]=330,sizes[]=660&format=webp&img";
import DemoScr7 from "@assets/images/screenshots/demo-web-app-4_3.png?sizes[]=330,sizes[]=660&format=webp&img";
import PagesScr7 from "@assets/images/screenshots/pages-maintenance-dark-4_3.png?sizes[]=330,sizes[]=660&format=webp&img";
import PortfolioScr2 from "@assets/images/screenshots/portfolio-grid-4_3.png?sizes[]=330,sizes[]=660&format=webp&img";

import CTABlock from "@blocks/buy-cta";

const variants = {
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 150,
      damping: 35,
      mass: 1.75,
      duration: 0.35,
      staggerChildren: 0.1,
    },
  },
  hidden: { opacity: 0, y: 50 },
};

const childVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 150,
      damping: 35,
      mass: 1.75,
      duration: 0.35,
      staggerChildren: 0.1,
    },
  },
};

const Homepage = (): JSX.Element => {
  const theme = useContext(ThemeColorContext);
  const color = theme.colorScheme; // global default primary theme color

  return (
    <>
      <NextSeo title={Site.slogan} description={Site.description} />
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
        <VStack mb={[10, 20, 32]} spacing={[10, 20, 32]}>
          <HeroBlock />

          <FeaturesBlock
            // bg="cyan.50"
            // colorScheme={color}
            items={[
              {
                icon: MdBolt,
                title: "Chakra UI",
                body: "Chakra is a simple & modular UI lib that provides the building blocks you need for your apps.",
              },
              {
                icon: VscDebugConsole,
                title: "TypeScript",
                body: "You can do error checking in your projects more easily and smoothly with Typescript support.",
              },
              {
                icon: MdOutlineBrightness4,
                title: "Light and Dark UI",
                body: "Optimized for multiple color modes. Use light or dark, your choice.",
              },
              {
                icon: MdOutlineColorLens,
                title: "Themeable",
                body: "Customize any part of template pages to match your design needs.",
              },
            ]}
          />
          <FeaturesListBlock
            colorScheme={color}
            items={[
              {
                icon: BsLayoutTextWindowReverse,
                title: "Demo Landings",
                body: "Mercury comes with 7 ready to use landing page variations and we will increase this number with new designs and content over time.",
              },
              {
                icon: FiGrid,
                title: "Components",
                body: "Spend less time writing UI code and more time creating a great experience for your customers with Mercury & Chakra UI",
              },
              {
                icon: FaIcons,
                title: "React Icons",
                body: "The react-icon package comes with Mercury, which allows you to use all popular icon libraries without overloading your project.",
              },
              {
                icon: RiPagesLine,
                title: "Pre-built Pages",
                body: "We have prepared useful inner pages for each web project, you can quickly enrich your website by editing these pages with your contents.",
              },
              {
                icon: MdDevices,
                title: "Responsive",
                body: "All pages and content are properly designed and tested, thanks to responsive components that look great on mobile, tablet and desktop.",
              },
              {
                icon: MdOutlinePalette,
                title: "Customizable Colors",
                body: "Mercury comes with 26 predefined color palettes and you can customize these colors as you wish. All colors are available with Dark and Light theme.",
              },
            ]}
          />
          <DemoLandingBlock
            items={[
              {
                href: "/demo/business",
                title: "Business",
                image: DemoBusinessLight,
                features: [
                  "Business, Startup",
                  "Color Variations",
                  "Light & Dark Mode",
                  "Responsive",
                ],
              },
              {
                href: "/demo/marketing",
                title: "Marketing",
                image: DemoMarketingLight,
                features: [
                  "Agency, Digital Marketing",
                  "Color Variations",
                  "Light & Dark Mode",
                  "Responsive",
                ],
              },
              {
                title: "Mobile App",
                href: "/demo/mobile-app",
                image: DemoMobileAppLight,
                features: [
                  "Mobile, Application",
                  "Color Variations",
                  "Light & Dark Mode",
                  "Responsive",
                  "Animations",
                ],
              },
              {
                title: "SaaS",
                href: "/demo/saas",
                image: DemoSaasLight,
                features: [
                  "Corporate, Business, SaaS",
                  "Color Variations",
                  "Light & Dark Mode",
                  "Responsive",
                  "Slideshow",
                ],
              },
              {
                title: "Personal Portfolio",
                href: "/demo/personal-portfolio",
                image: DemoPersonalPortfolioLight,
                features: [
                  "Personal, Portfolio",
                  "Color Variations",
                  "Light & Dark Mode",
                  "Responsive",
                ],
              },
              {
                title: "Web App",
                href: "/demo/web-app",
                image: DemoWebAppLight,
                features: [
                  "SaaS, Software",
                  "Color Variations",
                  "Light & Dark Mode",
                  "Responsive",
                  "Animations",
                ],
              },
              {
                title: "Furniture Shop",
                href: "/demo/furniture-shop",
                image: DemoFurnitureShopLight,
                features: [
                  "Shopping, Furniture",
                  "Color Variations",
                  "Light & Dark Mode",
                  "Responsive",
                ],
              },
            ]}
            colorScheme={color}
          />
          <FeaturesBlock
            // bg="cyan.50"
            // colorScheme={color}
            items={[
              {
                icon: AiOutlineCode,
                title: "Developer Experience",
                body: "Build websites that are fast, flexible, and secure right out of the box using React.",
              },
              {
                icon: MdOutlineAccountTree,
                title: "Jamstack",
                body: "You can deploy your project with static output and Jamstack services.",
              },
              {
                icon: HiOutlineBadgeCheck,
                title: "Lifetime Upgrade",
                body: "The Mercury Lifetime Updater program is a free application which is useful for those who own Mercury template.",
              },
              {
                icon: FiLifeBuoy,
                title: "Premium Support",
                body: "All our customers can get help and find answers to questions as soon as they come up—24/7 and in real-time.",
              },
            ]}
          />

          <Container my={[10, 20, 32]} maxW="container.lg">
            <FadeUp variants={variants} childVariants={childVariants}>
              <CTABlock
                title="Ready to get started ?"
                // body="Easily create your website using the production-ready pages we have prepared for you."
                body="Build your website quickly and colorfully with our easy to edit pre-built pages and blocks."
                link="Purchase Mercury"
                href={Site.purchase}
                p={[10, 10, 20]}
                rounded="xl"
                mx="auto"
                justifyContent="center"
                overflow="hidden"
                colorScheme={color}
                shadow="2xl"
              />
            </FadeUp>
          </Container>
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

/**
 *  https://tympanus.net/codrops/tag/isometric/
 *https://github.com/codrops/IsometricGrids/
 */
const HeroBlock: React.FC<ChakraProps & ThemingProps> = (props) => {
  const items = [
    {
      title: "7",
      body: "Landing Pages",
      maxW: 90,
    },
    {
      title: "70+",
      body: "Flexible Components",
      maxW: 120,
    },
    {
      title: "30+",
      body: "Inner Page Templates",
      maxW: 120,
    },
  ];

  const ratio = 4 / 3;

  const images = [
    DemoScr1,
    DemoScr2,
    DemoScr3,
    DemoScr4,
    DemoScr5,
    DemoScr6,
    DemoScr7,
    AccountScr4,
    BlogScr4,
    CompanyScr4,
    CompanyScr9,
    CompanyScr7,
    PagesScr7,
    PortfolioScr2,
  ];

  const imageIndex = (idx: number): number => idx % images.length;

  return (
    <Flex
      py={28}
      height="100vh"
      justify="center"
      align="center"
      width="full"
      pos="relative"
      overflow="hidden"
      maxW={2200}
      minH={685}
      maxH={825}
      bg={useColorModeValue("gray.50", "gray.900")}
      {...props}
    >
      <Container maxW="container.xl">
        <VStack
          mt={[0, 0, 10]}
          position="relative"
          zIndex={1}
          align="start"
          spacing={6}
        >
          <Heading
            as="h1"
            fontSize={["3xl", "4xl", "5xl"]}
            lineHeight={1.1}
            fontWeight={400}
            maxW={650}
            m={0}
          >
            <Text as="span" fontWeight="bold">
              Mercury
            </Text>{" "}
            is perfect for creating a fast, beautiful web projects
          </Heading>

          <Text fontSize="2xl" fontWeight={300} maxW={500}>
            You will have total control over your website's content and layout,
            while ensuring that you are keeping up with modern web standards.
          </Text>

          <HStack spacing={[5, 6, 8]}>
            {items.map(({ title, body, maxW }) => (
              <Box key={title} maxW={maxW}>
                <Heading as="h4" fontSize="3xl">
                  {title}
                </Heading>
                <Text lineHeight={1.1} fontSize="lg">
                  {body}
                </Text>
              </Box>
            ))}
          </HStack>

          <Link
            onClick={(e) => {
              const demo = document.getElementById("demo");
              e.preventDefault();
              demo &&
                demo.scrollIntoView({ behavior: "smooth", block: "start" });
            }}
            href="#demo"
            _hover={{
              textDecoration: "none",
            }}
          >
            <HStack role="group" d="inline-flex" cursor="pointer" spacing={4}>
              <Circle size={10} borderWidth="1px" borderColor="gray.600">
                <ArrowDownIcon
                  transition="all 250ms ease-in-out"
                  _groupHover={{
                    fontSize: "2xl",
                  }}
                />
              </Circle>
              <Text
                py={6}
                fontSize="lg"
                fontWeight={400}
                maxW={500}
                transition="all 250ms ease-in-out"
                _hover={{
                  fontWeight: 600,
                }}
              >
                View Demo
              </Text>
            </HStack>
          </Link>
        </VStack>

        <Box
          // top={0}
          // right={0}
          // bg="purple.100"
          // h="full"
          // w="full"
          sx={{
            position: "absolute",
            // bg: "lime.50",
            top: -266,
            left: "auto",
            right: -266,
            /*Width = (225 + 20 + 20) * 4 = 1060*/
            width: 1020,
            /*3D Transform*/
            transform: "rotateX(50deg) rotateZ(30deg)",
            /*Preserve 3D style for children*/
            transformStyle: "preserve-3d",
            zIndex: 0,
            "> div": {
              position: "relative",
              zIndex: 1,
              // bg: "gray.200",
              rounded: "xl",
              shadow: "xl",
              opacity: [0.2, 0.2, 0.4, 1],
              transition: "0.2s ease",
              height: "auto",
              // height: "full",
              width: 266,
              // width: "full",
              float: "left",
              margin: "20px",
              /*Hide the lighting gradient from the front face*/
              backgroundSize: "0, cover",
              /*Preserve 3D style for children(pseudo elements)*/
              transformStyle: "preserve-3d",
              _after: {
                position: "absolute",
                top: 0,
                left: 0,
                zIndex: 2,
                content: "''",
                // display: "block",
                width: "full",
                height: "full",
                bg: useColorModeValue(null, "blackAlpha.600"),
              },
            },
          }}
        >
          {Array(21)
            .fill(null)
            .map((i, idx) => (
              <Box key={idx}>
                <ImageLazyload
                  objectFit={"cover"}
                  w="full"
                  h="full"
                  ratio={ratio}
                  alt=""
                  image={images[imageIndex(idx)]}
                />
              </Box>
            ))}
        </Box>
      </Container>
    </Flex>
  );
};

const FeaturesBlock: React.FC<
  { items: { icon: IconType; title: string; body: string }[] } & ChakraProps &
    ThemingProps
> = memo(({ items = [], ...rest }) => {
  return (
    <Flex width="full" {...rest}>
      <Container maxW="container.xl">
        <FadeUpGrid
          columns={[1, 2, 2, 4]}
          // direction={["column", "column", "row"]}
          spacing={[1, 2, 3, 4]}
          variants={variants}
          childVariants={childVariants}
        >
          {items.map(({ icon, title, body }) => (
            <Box key={title} w="full" p={[2, 4, 6]}>
              <VStack spacing={6}>
                <Icon as={icon} h={10} w={10} />
                <Box textAlign="center">
                  <Heading as="h4" fontSize="lg" mb={1}>
                    {title}
                  </Heading>
                  <Text color={useColorModeValue("gray.500", "gray.400")}>
                    {body}
                  </Text>
                </Box>
              </VStack>
            </Box>
          ))}
        </FadeUpGrid>
      </Container>
    </Flex>
  );
});

const DemoLandingBlock: React.FC<
  {
    items: {
      body?: string;
      features: string[];
      href: string;
      image: imageObject;
      title: string;
    }[];
  } & ChakraProps &
    ThemingProps
> = memo(({ colorScheme = "gray", items = [], ...rest }) => {
  // const [color1, color2] = ColorMatch(colorScheme);

  const accent = useColorModeValue(`${colorScheme}.300`, `${colorScheme}.500`);
  // const accent100 = useColorModeValue(`${color1}.200`, `${color1}.600`);
  // const accent200 = useColorModeValue(`${color2}.200`, `${color2}.600`);

  return (
    <Box id="demo" width="full" {...rest}>
      <Container maxW="container.xl" mb={[10, 12, 14]}>
        <Heading
          as="h2"
          // bgGradient={`linear(to-l, ${accent100},  ${accent}, ${accent200})`}
          // bgClip="text"
          textAlign={"center"}
          fontSize={["3xl", "4xl", "5xl"]}
          // fontWeight="bold"
          lineHeight="1.2"
        >
          Demo landing pages
        </Heading>
        <Flex align="center" justify="center">
          <Heading as="h3" fontSize="3xl" fontWeight={400}>
            Start{" "}
            <Highlight fontWeight={700} strokeWidth={6} strokeColor={accent}>
              saving time
            </Highlight>{" "}
            on your next project
          </Heading>
        </Flex>
      </Container>

      <Container maxW="container.xl">
        <SimpleGrid columns={[1, 1, 2]} spacing={10}>
          {items.map(({ href, title, image, features }) => (
            <FadeUp
              key={href}
              variants={variants}
              childVariants={childVariants}
            >
              <Flex
                p={[4, 6, 8, 10]}
                role="group"
                rounded="lg"
                align="start"
                direction="column"
                bg={useColorModeValue("gray.50", "gray.700")}
              >
                <VStack align="start" width="full" spacing={6}>
                  <Box
                    pos="relative"
                    width="full"
                    rounded="lg"
                    overflow="hidden"
                  >
                    <ImageLazyload
                      flex={1}
                      alt={title}
                      image={image}
                      ratio={16 / 9}
                      objectFit="cover"
                      objectPosition="center top"
                      width="full"
                      height="full"
                    />
                    <Flex
                      bg={useColorModeValue("blackAlpha.200", "blackAlpha.800")}
                      align="end"
                      justify="center"
                      pos="absolute"
                      top={0}
                      left={0}
                      width="full"
                      height="full"
                      opacity={0}
                      p={10}
                      transition="all 250ms ease-in-out"
                      _groupHover={{
                        opacity: 1,
                      }}
                    >
                      <NextLink href={href} passHref>
                        <Button as="a" isFullWidth colorScheme={colorScheme}>
                          Preview
                        </Button>
                      </NextLink>
                    </Flex>
                  </Box>
                  <Heading as="h3" fontSize="xl">
                    {title}
                  </Heading>
                  {features && (
                    <Wrap spacing={2}>
                      {features.map((feature) => (
                        <WrapItem key={feature}>
                          <Flex align="center">
                            <CheckIcon color="green.400" mr={2} />
                            <Text fontWeight={500}>{feature}</Text>
                          </Flex>
                        </WrapItem>
                      ))}
                    </Wrap>
                  )}
                </VStack>
              </Flex>
            </FadeUp>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
});

const FeaturesListBlock: React.FC<
  { items: { icon: IconType; title: string; body: string }[] } & ChakraProps &
    ThemingProps
> = memo(({ items = [], colorScheme = "gray", ...rest }) => {
  const [color1, color2] = ColorMatch(colorScheme);

  const accent = useColorModeValue(`${colorScheme}.300`, `${colorScheme}.300`);
  const accent100 = useColorModeValue(`${color1}.500`, `${color1}.400`);
  const accent200 = useColorModeValue(`${color2}.500`, `${color2}.400`);
  return (
    <Flex
      width="full"
      py={[16, 24, 32]}
      color={useColorModeValue(`${colorScheme}.800`, `${colorScheme}.200`)}
      bg={useColorModeValue(`${colorScheme}.50`, `${colorScheme}.900`)}
      {...rest}
    >
      <Container maxW="container.xl">
        <FadeUpVStack
          // textAlign={["center", "center", "center"]}
          align="center"
          justify="center"
          mb={[14, 20, 24]}
          variants={variants}
          childVariants={childVariants}
        >
          <Heading
            as="h3"
            textAlign="center"
            bgGradient={`linear(to-l, ${accent100},  ${accent}, ${accent200})`}
            bgClip="text"
            fontWeight={500}
            maxW={650}
          >
            Mercury <strong>packed</strong> with nice features
          </Heading>
          <Text textAlign="center" maxW={650} fontSize="xl">
            The template comes with nice features like landing variations, rich
            component library, forms, sliders and motion animations.
          </Text>
        </FadeUpVStack>

        <FadeUpGrid
          columns={[1, 2, 3]}
          spacing={[3, 5, 6]}
          mb={[14]}
          variants={variants}
          childVariants={childVariants}
        >
          {items.map(({ icon, title, body }) => (
            <Box key={title}>
              <VStack align="start" spacing={4}>
                <Flex
                  w="full"
                  align="center"
                  direction={["column", "column", "row"]}
                  color={useColorModeValue(null, "whiteAlpha.800")}
                >
                  <Icon w={10} h={10} as={icon} mr={[0, 0, 4]} mb={[4, 4, 0]} />
                  <Heading as="h4" fontSize="lg">
                    {title}
                  </Heading>
                </Flex>
                <Text>{body}</Text>
              </VStack>
            </Box>
          ))}
        </FadeUpGrid>
      </Container>
    </Flex>
  );
});

Homepage.PageLayout = memo(({ children }: { children: React.ReactNode }) => {
  return <Layout footer={<FooterSimpleSocial />}>{children}</Layout>;
});

export default Homepage;
