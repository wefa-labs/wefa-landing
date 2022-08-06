import {
  BiGame,
  GiRabbit,
  GrCloudUpload,
  IoCloudDownloadOutline,
  MdTune,
  MdPhonelink,
  IoLogoApple,
  IoLogoGooglePlaystore,
  AiOutlineCode,
} from "@react-icons";

import { useContext } from "react";

import { motion } from "framer-motion";

import { GoogleFonts } from "next-google-fonts";
import { NextSeo } from "next-seo";

import {
  Box,
  chakra,
  Container,
  Heading,
  Flex,
  Icon,
  Button,
  BoxProps,
  Stack,
  Link,
  useColorModeValue,
} from "@chakra-ui/react";

import { ThemeColorContext } from "@definitions/context/theme";

import FooterSimpleLogoSocial from "@components/footer/footer-simple-logo-social";
import Highlight from "@components/highlight";
import AppStore from "@components/icons/app-store-badge";
import GooglePlay from "@components/icons/play-store-badge";

import Layout from "@layouts/default";

import FeaturesListVerticalImage from "@assets/images/demo/app/app-demo.png?resize&img";
import CTAImage from "@assets/images/demo/app/feature-events-top.png?resize&img";
import FeatureImage from "@assets/images/demo/app/feature-history.png?resize&img";
import AppImg from "@assets/images/demo/app/iPhoneXFlying.png?resize&img";

import AwardBlock from "@blocks/mobileapp/award";
import CTABlock from "@blocks/mobileapp/cta";
import AppFeatures from "@blocks/mobileapp/features";
import FeaturesListHorizontal from "@blocks/mobileapp/features-list-horizontal";
import FeaturesListVertical from "@blocks/mobileapp/features-list-vertical";
import HeroBlock from "@blocks/mobileapp/hero";
import IntroBlock from "@blocks/mobileapp/intro-block";
import PageScrollProgressBlock from "@blocks/page-scroll-progress";

export const MotionBox = motion<BoxProps>(Box);

const AppPage = (): JSX.Element => {
  const theme = useContext(ThemeColorContext);
  const color = theme.colorScheme; // global default primary theme color

  const bgColor = useColorModeValue(`${color}.50`, `${color}.900`);
  const headingFont = "'DM Serif Display', serif";

  return (
    <>
      <GoogleFonts href="https://fonts.googleapis.com/css2?family=DM+Serif+Display&display=swap" />
      <NextSeo
        title="Mobile App Landing"
        description="Mobile App landing page design by Mercury"
      />
      <chakra.main
        pos="relative"
        bg={bgColor}
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
        <PageScrollProgressBlock color={`${color}.400`} top="2" left="2" />

        {/* ----------------------------- Hero ----------------------------- */}
        <HeroBlock
          title="Perfect Ladning Page Best For Your App"
          body="Promote your app and tailor it to your needs with fully customizable pages, it's all easy with Mercury."
          image={AppImg}
          button={
            <Stack direction={["column", "row"]} spacing={2} my={6}>
              <Button minW="32" size="lg" colorScheme={color} rounded="full">
                Get App
              </Button>
              <Button
                minW="32"
                size="lg"
                variant="ghost"
                rounded="full"
                color={useColorModeValue("black", "white")}
                _hover={{
                  color: useColorModeValue("current", "black"),
                  bg: "white",
                }}
              >
                How it works?
              </Button>
            </Stack>
          }
          colorScheme={color}
          fontFamily={headingFont}
        />
        <IntroBlock
          title={
            <>
              <Heading
                fontSize={[38, 48, 48]}
                textAlign="center"
                fontWeight={400}
                fontFamily={headingFont}
                mt={0}
              >
                Powerful features to{" "}
                <Highlight strokeColor={`${color}.400`}>supercharge</Highlight>{" "}
                your website
              </Heading>
            </>
          }
          body="Stand out from the crowd with a fun website that's easy to set up. Demonstrate key features of your app with a high-converting design that helps you grow."
          py={0}
          pt={20}
          fontFamily={headingFont}
          colorScheme={color}
        />

        {/* ----------------------------- Award ---------------------------- */}
        <AwardBlock
          title="Most awarded App in 2022"
          items={[
            {
              icon: <Icon mr={1} fontSize="22px" as={IoLogoGooglePlaystore} />,
              title: "Google Play",
              subtitle: "Best App 2022",
            },
            {
              icon: <Icon mr={1} fontSize="22px" as={IoLogoApple} />,
              title: "AppStore",
              subtitle: "Best App 2022",
            },
            {
              icon: <Icon mr={1} fontSize="22px" as={AiOutlineCode} />,
              title: "App Developer",
              subtitle: "Awards of 2022",
            },
          ]}
          py={[2, 2, 8, 8, 32]}
          mb={"0"}
          fontFamily={headingFont}
        />
        <Flex direction="column" alignItems="center" pb={[16, 16, 0, 0, 0]}>
          <Container py={0} maxWidth="container.xl">
            <AppFeatures
              title="Demonstrate the most innovative features of your app"
              body="Praeterea iter est quasdam res quas ex communi. Ut enim ad minim veniam, quis nostrud exercitation. Contra legem facit qui id facit quod lex prohibet."
              image={FeatureImage}
              fontFamily={headingFont}
              colorScheme={color}
            />
          </Container>
        </Flex>

        {/* --------------------------- Features --------------------------- */}
        <Container
          pt={["50px", "50px", "50px", "300px"]}
          maxWidth="container.xl"
        >
          <FeaturesListVertical
            title="Fast, scalable and easy"
            body="Easily create pages suitable for your designs with predefined color palettes. We have created a full 26 color palette for you. You can also easily add your own colors"
            image={FeaturesListVerticalImage}
            items={[
              {
                title: "Easily build your app landing page",
                body: "Inmensae subtilitatis, obscuris et malesuada fames. Tityre, tu patulae recubans sub tegmine fagi dolor.",
                icon: <Icon as={BiGame} w={6} h={6} />,
                bg: useColorModeValue("yellow.200", "yellow.900"),
              },
              {
                title: "Rapid development with prebuilt templates",
                body: "Inmensae subtilitatis, obscuris et malesuada fames. Tityre, tu patulae recubans sub tegmine fagi dolor.",
                icon: <Icon as={GiRabbit} w={6} h={6} />,
                bg: useColorModeValue("teal.200", "teal.900"),
              },
              {
                title: "Easy to deploy as it is to develop",
                body: "Quis aute iure reprehenderit in voluptate velit esse. Excepteur sint obcaecat cupiditat non proident culpa.",
                icon: <Icon as={GrCloudUpload} w={6} h={6} />,
                bg: useColorModeValue("purple.200", "purple.900"),
              },
            ]}
            colorScheme={color}
            fontFamily={headingFont}
          />
        </Container>

        {/* --------------------------- Features --------------------------- */}
        <Container py={40} maxWidth="container.xl">
          <FeaturesListHorizontal
            items={[
              {
                title: "Responsive Layout",
                body: "Quae vero auctorem tractata ab fiducia dicuntur. Curabitur est gravida et libero vitae dictum.",
                icon: <Icon as={MdPhonelink} w={8} h={8} />,
                bg: useColorModeValue("cyan.200", "cyan.900"),
              },
              {
                title: "Lightweight",
                body: "A communi observantia non est recedendum. Plura mihi bona sunt, inclinet, amari petere vellent.",
                icon: <Icon as={IoCloudDownloadOutline} w={8} h={8} />,
                bg: useColorModeValue("pink.200", "red.900"),
              },
              {
                title: "Highly Customizable",
                body: " Contra legem facit qui id facit quod lex prohibet. Quam diu etiam furor iste tuus nos eludet?",
                icon: <Icon as={MdTune} w={8} h={8} />,
                bg: useColorModeValue("amber.200", "amber.900"),
              },
            ]}
            colorScheme={color}
            fontFamily={headingFont}
          />
        </Container>

        {/* ------------------------------ CTA ----------------------------- */}
        <Box
          borderBottomWidth="1px"
          borderColor={useColorModeValue("blackAlpha.200", "whiteAlpha.300")}
          bg={useColorModeValue("white", "blackAlpha.600")}
          mt={[10, 10, 0, 0]}
        >
          <Container pt={"0"} maxWidth="container.xl">
            <CTABlock
              title="Design Your Page For Your App"
              body="Don't waste time designing your website, easily start using the pages designed for you with Mercury and focus on your customers."
              image={CTAImage}
              button={
                <>
                  <Link href="https://play.google.com/" isExternal>
                    <GooglePlay />
                  </Link>
                  <Link href="https://www.apple.com/app-store/" isExternal>
                    <AppStore />
                  </Link>
                </>
              }
              fontFamily={headingFont}
              colorScheme={color}
            />
          </Container>
        </Box>
      </chakra.main>
    </>
  );
};

AppPage.PageLayout = ({ children }: { children: React.ReactNode }) => {
  const theme = useContext(ThemeColorContext);
  const color = theme.colorScheme; // global default primary theme color
  return (
    <Layout
      footer={
        <FooterSimpleLogoSocial
          py={10}
          bg={useColorModeValue("white", "black")}
          color={useColorModeValue(`${color}.700`, `${color}.100`)}
        />
      }
    >
      {children}
    </Layout>
  );
};
export default AppPage;
