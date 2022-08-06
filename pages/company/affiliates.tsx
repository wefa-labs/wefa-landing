import BusinessFinanceWoman from "@root/src/assets/illustrations/business-finance-woman";
import BusinessTechnologyWoman from "@root/src/assets/illustrations/business-technology-woman";
import ComputerWorkRelax from "@root/src/assets/illustrations/computer-work-relax";
import ShoppingOnlineWoman from "@root/src/assets/illustrations/shopping-online-woman";
import SocialMediaBusiness from "@root/src/assets/illustrations/social-media-business";
import StartupTechnologyWoman from "@root/src/assets/illustrations/startup-technology-woman";

import React, { isValidElement, useContext, memo } from "react";

import { NextSeo } from "next-seo";
import dynamic from "next/dynamic";
import NextLink from "next/link";

import {
  Box,
  Button,
  chakra,
  ChakraProps,
  Circle,
  Container,
  Flex,
  Heading,
  Icon,
  Link,
  SimpleGrid,
  Stack,
  Text,
  ThemingProps,
  useColorModeValue,
  VStack,
  useToken,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";

import Logo1 from "@definitions/brands/logo-1";
import Logo2 from "@definitions/brands/logo-2";
import Logo3 from "@definitions/brands/logo-3";
import Logo4 from "@definitions/brands/logo-4";
import { ThemeColorContext } from "@definitions/context";
import { __DEV__ } from "@definitions/utils";

import { IAccordion } from "@components/accordion/accordion";
import AccordionFlat from "@components/accordion/accordion-flat";
import CarouselDefault from "@components/carousel/carousel-default";
import DividerArrow from "@components/divider/divider-arrow";
import { FeaturesGrid } from "@components/features/features-grid";
import Highlight from "@components/highlight";
import PageTitle from "@components/page-title";
import { RatingDefault } from "@components/rating";
import { ITestimonial } from "@components/testimonials/testimonial";
import TestimonialQuoteCard from "@components/testimonials/testimonial-quote-card";

import PatriciaWheeler from "@assets/images/avatar/1f-square.jpg?size=96&img";
import ChristopherFredrick from "@assets/images/avatar/1m-square.jpg?size=96&img";
import AngelicaMilam from "@assets/images/avatar/2f-square.jpg?size=96&img";
import WilliamBates from "@assets/images/avatar/3m-square.jpg?size=96&img";

const TopographySvg = dynamic(() => import("@assets/illustrations/topography"));

const AffiliatesPage: React.FC = () => {
  const theme = useContext(ThemeColorContext);
  const color = theme.colorScheme; // global default primary theme color

  const textGray = "gray.500";

  // base, sm, md, lg, xl
  const boxSpacing = [10, 10, 20, 32, 40];

  const svgDrawColor = useColorModeValue(`${color}.300`, `${color}.800`);
  const svgIconColor = useColorModeValue(`${color}.300`, `${color}.600`);

  const benefitBody =
    "Have you built an online audience that can relate to the world of web creation? Bloggers, YouTubers and Influencers - the affiliate program is for you.";

  const whoCanBenefit = [
    {
      svg: <ComputerWorkRelax mx="auto" maxW="320px" color={svgDrawColor} />,
      title: "Freelance Developers",
      body: benefitBody,
    },
    {
      svg: <SocialMediaBusiness mx="auto" maxW="320px" color={svgDrawColor} />,
      title: "Social media influencers",
      body: benefitBody,
    },
    {
      svg: (
        <BusinessTechnologyWoman mx="auto" maxW="320px" color={svgDrawColor} />
      ),
      title: "Content Creators",
      body: benefitBody,
    },
    {
      svg: <ShoppingOnlineWoman mx="auto" maxW="320px" color={svgDrawColor} />,
      title: "Marketers & Agencies",
      body: benefitBody,
    },
    {
      svg: (
        <StartupTechnologyWoman mx="auto" maxW="320px" color={svgDrawColor} />
      ),
      title: "Course Creator & Professor",
      body: benefitBody,
    },
    {
      svg: <BusinessFinanceWoman mx="auto" maxW="320px" color={svgDrawColor} />,
      title: "Digital Entrepreneurs",
      body: benefitBody,
    },
  ];

  return (
    <>
      <NextSeo
        title="Affiliates"
        description="Mercury Affiliates Example Page"
      />
      <chakra.main>
        <VStack spacing={boxSpacing}>
          <PageTitle
            w="full"
            title={
              <Box pos="relative">
                <Text
                  d={"inline"}
                  pos={["initial", "initial", "absolute"]}
                  fontSize={["xs", "sm", "md"]}
                  fontWeight="600"
                  top={[0, 0, -8]}
                  left={["initial", "initial", "50%"]}
                  transform={["none", "none", "translatex(-50%)"]}
                  px={4}
                  py={1}
                  bg={useColorModeValue(`${color}.200`, `${color}.700`)}
                  rounded="full"
                >
                  Earn 30% on every sale
                </Text>
                <Heading
                  as="h1"
                  mb={0}
                  lineHeight="1"
                  fontSize={["2xl", "4xl", "5xl"]}
                >
                  Join our new affiliate program
                </Heading>
              </Box>
            }
          >
            <Text
              align={["start", "start", "center"]}
              fontSize={["md", "lg", "xl"]}
              maxWidth="800px"
            >
              A simple and easy way to make money for referring people to
              Mercury. Get 30% of every sale you refer. There's no limit on how
              much you can earn.
            </Text>
          </PageTitle>

          {/* ----------------------- Intro & Benefit ---------------------- */}

          <Box w="full">
            <Container maxW="container.xl">
              <Intro
                title="Who can benefit from the affiliate program?"
                body=" Our affiliate program is open to anyone with an online presence. Whether you're an industry leader or a fresh new face, earn more by marketing your unique content. Come join us if you possess any of these special qualities:"
                color={textGray}
                mb={[0, 0, 0]}
              />

              <SimpleGrid spacing={[0, 0, 5, 10, 10]} columns={[1, 1, 2, 3, 3]}>
                {whoCanBenefit.map((item, idx) => (
                  <Flex key={idx} direction="column" p={[0, 0, 0, 10]}>
                    {item.svg}
                    <Text fontWeight="600" fontSize="lg">
                      {item.title}
                    </Text>
                    <Text color={textGray} fontWeight="400" fontSize="sm">
                      {item.body}
                    </Text>
                  </Flex>
                ))}
              </SimpleGrid>
            </Container>
          </Box>

          {/* ------------------------- TrustRating ------------------------ */}
          <TrustRating
            title="Trusted by 10,000+ business owners"
            subtitle="4.5/5 Stars on CreativeMarket"
            rating={4.5}
            items={[
              {
                logo: <Logo1 color="whiteAlpha.800" />,
                title: "Logo 1",
              },
              {
                logo: <Logo2 color="whiteAlpha.800" />,
                title: "Logo 2",
              },
              {
                logo: <Logo3 color="whiteAlpha.800" />,
                title: "Logo 3",
              },
              {
                logo: <Logo4 color="whiteAlpha.800" />,
                title: "Logo 4",
              },
            ]}
            w="full"
            py={boxSpacing}
            color="whiteAlpha.900"
            colorScheme={color}
          />

          {/* --------------------- Why Choose Mercury --------------------- */}
          <WhyChooseUsBlock
            title="Why choose Mercury?"
            items={[
              {
                title: "Maximum earnings",
                text: "Get paid for every first-time buyer, with no referral limit and a lifetime attribution.",
              },
              {
                title: "A simple, easy-to-use platform",
                text: "Creating landing pages and websites is easy with Mercury.",
              },
              {
                title: "Unlimited commissions",
                text: "You can get generous commission for recommending our design solutions.",
              },
              {
                title: "Creative resources",
                text: "Free promotional materials including banners, videos and sales copy.",
              },
              {
                title: "Full Professional Support",
                text: "Gain access to professional support, tutorials, and a dedicated Affiliate manager.",
              },
              {
                title: "Track Your Growth",
                text: "Allow team members to receive email notifications of important changes they need to be aware of",
              },
            ]}
            w="full"
          />

          {/* --------------------- How to get started --------------------- */}
          <HowToGetStartedBlock
            title="How to get started"
            items={[
              {
                icon: <InvoiceMoneyIcon colorScheme="blue" />,
                title: "Join as an Affiliate",
                body: "It’s free to get started. Access marketing materials, tools, and more!",
              },
              {
                icon: <MarketingAdvertisingIcon colorScheme="orange" />,
                title: "Promote Mercury",
                body: "Share Mercury with your target audience. There's a match for every need.",
              },
              {
                icon: <WalletIcon colorScheme="teal" />,
                title: "Start Earning",
                body: "Earn right from the moment your traffic converts. Check out our commission plan.",
              },
            ]}
            w="full"
          />

          {/* -------------------- What our partners say ------------------- */}
          <Testimonials
            colorScheme={color}
            title="What our partners say?"
            items={[
              {
                avatarImage: WilliamBates,
                name: "William Bates",
                occupation: "Software Engineer, Acme",
                body: "We have no regrets! It's the perfect solution for our business. Mercury is worth much more than I paid. I can't say enough about Mercury",
              },
              {
                avatarImage: PatriciaWheeler,
                name: "Patricia Wheeler",
                occupation: "Senior Brand Designer, Google",
                body: "I'm very excited to use Mercury for quick ideas examples. We're always trying to streamline our design process so we can act fast! I would definitely recommend.",
              },
              {
                avatarImage: ChristopherFredrick,
                name: "Christopher Fredrick",
                occupation: "Founder & Creative Director, Simple",
                body: "Mercury is incredibly well organized and the attention to detail is amazing. I highly recommend this template to all designers and developers who want to build beautiful websites quickly.",
              },
              {
                avatarImage: AngelicaMilam,
                name: "Angelica Milam",
                occupation: "Front-end Developer, Example",
                body: "This is simply unbelievable! I've never seen anything like Mercury. It's so much better than any other templates I've tried or thought of trying in the past. It is so much easier to build any size of web site.",
              },
            ]}
            w="full"
          />

          {/* ----------------------- Have questions? ---------------------- */}
          <FAQ
            title="Have questions? We have answers."
            items={[
              {
                title: "How Does It Work?",
                body: "Once we approve your application, you will receive a unique affiliate link and access to our marketing kit. Simply place your link banners in your product reviews and on your website. Each time you refer a new customer who makes a purchase, you earn a commission.",
              },
              {
                title: "How Much Can I Earn as a Mercury Affiliate?",
                body: "There is no limit on earnings. Your earnings will be determined entirely by you, some of our partners earn over $15,000 per month.",
              },
              {
                title: "Is There a Minimum Payout Threshold?",
                body: "Yes, we pay our affiliates once their tally reaches $50.",
              },
              {
                title: "How Do I Get Paid?",
                body: "Payment is processed through our Payooner program.",
              },
              {
                title: "When Do I Get Paid?",
                body: "We have a 30-day refund policy on our product. Following the clearance of the purchase, we will pay you within 30 days.",
              },
            ]}
            footnote={
              <Text mt={10} textAlign={["center"]}>
                Have more questions? <Link fontWeight="600">Contact us</Link>.
              </Text>
            }
            w="full"
            py={boxSpacing}
            bg={useColorModeValue("gray.50", "gray.900")}
          />

          {/* ---------------------- Opportunity Block --------------------- */}
          <OpportunityBlock
            title={
              <Heading as="h3" mb={[10, 10, 10, 20]} textAlign={["center"]}>
                Don't Miss This{" "}
                <Highlight strokeColor={`${color}.400`}>Opportunity</Highlight>!
              </Heading>
            }
            items={[
              {
                icon: <SupportIcon color={svgIconColor} />,
                title: "Dedicated affiliate support team",
                body: "Get fast and most accurate answers to all affiliate program questions.",
              },
              {
                icon: <WebStartupIcon color={svgIconColor} />,
                title: "Special promotions",
                body: "We will offer you special promotional opportunities throughout the year.",
              },
              {
                icon: <EcommerceIcon color={svgIconColor} />,
                title: "We're everywhere",
                body: "We operate in more than 160 countries and are known all over the world.",
              },
              {
                icon: <DesignToolsIcon color={svgIconColor} />,
                title: "Free content to promote",
                body: "Share educational content to help your audience grow their business.",
              },
              {
                icon: <TeamIcon color={svgIconColor} />,
                title: "Exclusive group",
                body: "Connect and network with other affiliates in our group to get promotion tips and insights.",
              },
              {
                icon: <VisualDesignIcon color={svgIconColor} />,
                title: "Early access to features",
                body: "Get early access to newly released features and templates before most customers.",
              },
            ]}
            w="full"
          />

          {/* -------------------------- CTA Block ------------------------- */}
          <CTABlock
            title="Interested in Becoming a Mercury Affiliate?"
            link="Start Earning Now"
            href="#"
            colorScheme={color}
            py={[5, 10, 20]}
            w="full"
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

const Intro: React.FC<
  { title: string; body: string } & ChakraProps & ThemingProps
> = memo(({ title, body, color, ...rest }) => {
  return (
    <Box {...rest}>
      {title && (
        <Heading mb={2} textAlign={["center"]}>
          {title}
        </Heading>
      )}
      {body && (
        <Text
          color={color}
          mx="auto"
          textAlign={["center"]}
          maxW="700px"
          fontSize={["md", "md", "lg"]}
        >
          {body}
        </Text>
      )}
    </Box>
  );
});

if (__DEV__) {
  Intro.displayName = "Intro";
}

const TrustRating: React.FC<
  {
    title: string;
    subtitle: string;
    rating: number;
    body?: string | React.ReactNode;
    items: { title: string; logo: React.ReactElement }[];
  } & ChakraProps &
    ThemingProps
> = memo(
  ({ title, subtitle, body, rating, items = [], colorScheme, ...rest }) => {
    return (
      <Box pos="relative" {...rest}>
        <Container maxW="container.xl">
          <Stack spacing={5} align="center">
            <Stack align="center">
              {rating && <RatingDefault fontSize="xl" initialRating={rating} />}
              {subtitle && <Text fontSize="xl">{subtitle}</Text>}
            </Stack>
            <Box>
              {title && (
                <Heading as="h3" mb={10} textAlign="center">
                  {title}
                </Heading>
              )}
            </Box>
            {body}
            {items && (
              <Wrap
                overflow="hidden"
                justify="center"
                align="center"
                spacing={[8, 8, 10, 20]}
              >
                {items.map((item) => (
                  <WrapItem key={item.title}>{item.logo}</WrapItem>
                ))}
              </Wrap>
            )}
          </Stack>
        </Container>
        <Box
          top={0}
          zIndex={-1}
          pos="absolute"
          width="100%"
          height="100%"
          bg={`${colorScheme}.800`}
        >
          <TopographySvg color="whiteAlpha.50" />
        </Box>
      </Box>
    );
  },
);

if (__DEV__) {
  TrustRating.displayName = "TrustRating";
}

{
  /* Why Choose Us - component: FeaturesGrid */
}
const WhyChooseUsBlock: React.FC<
  {
    title: string | React.ReactNode;
    items: { title: string; text: string }[];
  } & ChakraProps &
    ThemingProps
> = memo(({ title, items = [], ...rest }) => {
  return (
    <Box pos="relative" {...rest}>
      <Container zIndex={1} maxW="container.xl">
        {isValidElement(title) ? (
          title
        ) : (
          <Heading as="h3" mb={[10, 10, 10, 20]} textAlign={"center"}>
            {title}
          </Heading>
        )}
        <FeaturesGrid
          zIndex={1}
          spacing={[5, 5, 10, 10, 20]}
          columns={[1, 1, 2, 3, 3]}
          features={items}
        />
      </Container>
      <Box top={0} zIndex={-1} pos="absolute" width="100%" height="100%">
        <chakra.svg
          width="100%"
          height="100%"
          viewBox="0 0 1600 800"
          preserveAspectRatio="xMidYMin slice"
        >
          <path
            fill={useToken("colors", "yellow.200")}
            d="M1102.5 734.8c2.5-1.2 24.8-8.6 25.6-7.5.5.7-3.9 23.8-4.6 24.5C1123.3 752.1 1107.5 739.5 1102.5 734.8zM1226.3 229.1c0-.1-4.9-9.4-7-14.2-.1-.3-.3-1.1-.4-1.6-.1-.4-.3-.7-.6-.9-.3-.2-.6-.1-.8.1l-13.1 12.3c0 0 0 0 0 0-.2.2-.3.5-.4.8 0 .3 0 .7.2 1 .1.1 1.4 2.5 2.1 3.6 2.4 3.7 6.5 12.1 6.5 12.2.2.3.4.5.7.6.3 0 .5-.1.7-.3 0 0 1.8-2.5 2.7-3.6 1.5-1.6 3-3.2 4.6-4.7 1.2-1.2 1.6-1.4 2.1-1.6.5-.3 1.1-.5 2.5-1.9C1226.5 230.4 1226.6 229.6 1226.3 229.1zM33 770.3C33 770.3 33 770.3 33 770.3c0-.7-.5-1.2-1.2-1.2-.1 0-.3 0-.4.1-1.6.2-14.3.1-22.2 0-.3 0-.6.1-.9.4-.2.2-.4.5-.4.9 0 .2 0 4.9.1 5.9l.4 13.6c0 .3.2.6.4.9.2.2.5.3.8.3 0 0 .1 0 .1 0 7.3-.7 14.7-.9 22-.6.3 0 .7-.1.9-.3.2-.2.4-.6.4-.9C32.9 783.3 32.9 776.2 33 770.3z"
          />
          <path
            // fill="#5ff"
            fill={useToken("colors", "teal.200")}
            d="M171.1 383.4c1.3-2.5 14.3-22 15.6-21.6.8.3 11.5 21.2 11.5 22.1C198.1 384.2 177.9 384 171.1 383.4zM596.4 711.8c-.1-.1-6.7-8.2-9.7-12.5-.2-.3-.5-1-.7-1.5-.2-.4-.4-.7-.7-.8-.3-.1-.6 0-.8.3L574 712c0 0 0 0 0 0-.2.2-.2.5-.2.9 0 .3.2.7.4.9.1.1 1.8 2.2 2.8 3.1 3.1 3.1 8.8 10.5 8.9 10.6.2.3.5.4.8.4.3 0 .5-.2.6-.5 0 0 1.2-2.8 2-4.1 1.1-1.9 2.3-3.7 3.5-5.5.9-1.4 1.3-1.7 1.7-2 .5-.4 1-.7 2.1-2.4C596.9 713.1 596.8 712.3 596.4 711.8zM727.5 179.9C727.5 179.9 727.5 179.9 727.5 179.9c.6.2 1.3-.2 1.4-.8 0-.1 0-.2 0-.4.2-1.4 2.8-12.6 4.5-19.5.1-.3 0-.6-.2-.8-.2-.3-.5-.4-.8-.5-.2 0-4.7-1.1-5.7-1.3l-13.4-2.7c-.3-.1-.7 0-.9.2-.2.2-.4.4-.5.6 0 0 0 .1 0 .1-.8 6.5-2.2 13.1-3.9 19.4-.1.3 0 .6.2.9.2.3.5.4.8.5C714.8 176.9 721.7 178.5 727.5 179.9zM728.5 178.1c-.1-.1-.2-.2-.4-.2C728.3 177.9 728.4 178 728.5 178.1z"
          />
          <g
            // fill="#FFF"
            fillOpacity="1"
            fill={useToken("colors", "pink.200")}
          >
            <path d="M699.6 472.7c-1.5 0-2.8-.8-3.5-2.3-.8-1.9 0-4.2 1.9-5 3.7-1.6 6.8-4.7 8.4-8.5 1.6-3.8 1.7-8.1.2-11.9-.3-.9-.8-1.8-1.2-2.8-.8-1.7-1.8-3.7-2.3-5.9-.9-4.1-.2-8.6 2-12.8 1.7-3.1 4.1-6.1 7.6-9.1 1.6-1.4 4-1.2 5.3.4 1.4 1.6 1.2 4-.4 5.3-2.8 2.5-4.7 4.7-5.9 7-1.4 2.6-1.9 5.3-1.3 7.6.3 1.4 1 2.8 1.7 4.3.5 1.1 1 2.2 1.5 3.3 2.1 5.6 2 12-.3 17.6-2.3 5.5-6.8 10.1-12.3 12.5C700.6 472.6 700.1 472.7 699.6 472.7zM740.4 421.4c1.5-.2 3 .5 3.8 1.9 1.1 1.8.4 4.2-1.4 5.3-3.7 2.1-6.4 5.6-7.6 9.5-1.2 4-.8 8.4 1.1 12.1.4.9 1 1.7 1.6 2.7 1 1.7 2.2 3.5 3 5.7 1.4 4 1.2 8.7-.6 13.2-1.4 3.4-3.5 6.6-6.8 10.1-1.5 1.6-3.9 1.7-5.5.2-1.6-1.4-1.7-3.9-.2-5.4 2.6-2.8 4.3-5.3 5.3-7.7 1.1-2.8 1.3-5.6.5-7.9-.5-1.3-1.3-2.7-2.2-4.1-.6-1-1.3-2.1-1.9-3.2-2.8-5.4-3.4-11.9-1.7-17.8 1.8-5.9 5.8-11 11.2-14C739.4 421.6 739.9 421.4 740.4 421.4zM261.3 590.9c5.7 6.8 9 15.7 9.4 22.4.5 7.3-2.4 16.4-10.2 20.4-3 1.5-6.7 2.2-11.2 2.2-7.9-.1-12.9-2.9-15.4-8.4-2.1-4.7-2.3-11.4 1.8-15.9 3.2-3.5 7.8-4.1 11.2-1.6 1.2.9 1.5 2.7.6 3.9-.9 1.2-2.7 1.5-3.9.6-1.8-1.3-3.6.6-3.8.8-2.4 2.6-2.1 7-.8 9.9 1.5 3.4 4.7 5 10.4 5.1 3.6 0 6.4-.5 8.6-1.6 4.7-2.4 7.7-8.6 7.2-15-.5-7.3-5.3-18.2-13-23.9-4.2-3.1-8.5-4.1-12.9-3.1-3.1.7-6.2 2.4-9.7 5-6.6 5.1-11.7 11.8-14.2 19-2.7 7.7-2.1 15.8 1.9 23.9.7 1.4.1 3.1-1.3 3.7-1.4.7-3.1.1-3.7-1.3-4.6-9.4-5.4-19.2-2.2-28.2 2.9-8.2 8.6-15.9 16.1-21.6 4.1-3.1 8-5.1 11.8-6 6-1.4 12 0 17.5 4C257.6 586.9 259.6 588.8 261.3 590.9z" />
            <circle cx="1013.7" cy="153.9" r="7.1" />
            <circle cx="1024.3" cy="132.1" r="7.1" />
            <circle cx="1037.3" cy="148.9" r="7.1" />
            <path d="M1508.7 297.2c-4.8-5.4-9.7-10.8-14.8-16.2 5.6-5.6 11.1-11.5 15.6-18.2 1.2-1.7.7-4.1-1-5.2-1.7-1.2-4.1-.7-5.2 1-4.2 6.2-9.1 11.6-14.5 16.9-4.8-5-9.7-10-14.7-14.9-1.5-1.5-3.9-1.5-5.3 0-1.5 1.5-1.5 3.9 0 5.3 4.9 4.8 9.7 9.8 14.5 14.8-1.1 1.1-2.3 2.2-3.5 3.2-4.1 3.8-8.4 7.8-12.4 12-1.4 1.5-1.4 3.8 0 5.3 0 0 0 0 0 0 1.5 1.4 3.9 1.4 5.3-.1 3.9-4 8.1-7.9 12.1-11.7 1.2-1.1 2.3-2.2 3.5-3.3 4.9 5.3 9.8 10.6 14.6 15.9.1.1.1.1.2.2 1.4 1.4 3.7 1.5 5.2.2C1510 301.2 1510.1 298.8 1508.7 297.2zM327.6 248.6l-.4-2.6c-1.5-11.1-2.2-23.2-2.3-37 0-5.5 0-11.5.2-18.5 0-.7 0-1.5 0-2.3 0-5 0-11.2 3.9-13.5 2.2-1.3 5.1-1 8.5.9 5.7 3.1 13.2 8.7 17.5 14.9 5.5 7.8 7.3 16.9 5 25.7-3.2 12.3-15 31-30 32.1L327.6 248.6zM332.1 179.2c-.2 0-.3 0-.4.1-.1.1-.7.5-1.1 2.7-.3 1.9-.3 4.2-.3 6.3 0 .8 0 1.7 0 2.4-.2 6.9-.2 12.8-.2 18.3.1 12.5.7 23.5 2 33.7 11-2.7 20.4-18.1 23-27.8 1.9-7.2.4-14.8-4.2-21.3l0 0C347 188.1 340 183 335 180.3 333.6 179.5 332.6 179.2 332.1 179.2zM516.3 60.8c-.1 0-.2 0-.4-.1-2.4-.7-4-.9-6.7-.7-.7 0-1.3-.5-1.4-1.2 0-.7.5-1.3 1.2-1.4 3.1-.2 4.9 0 7.6.8.7.2 1.1.9.9 1.6C517.3 60.4 516.8 60.8 516.3 60.8zM506.1 70.5c-.5 0-1-.3-1.2-.8-.8-2.1-1.2-4.3-1.3-6.6 0-.7.5-1.3 1.2-1.3.7 0 1.3.5 1.3 1.2.1 2 .5 3.9 1.1 5.8.2.7-.1 1.4-.8 1.6C506.4 70.5 506.2 70.5 506.1 70.5zM494.1 64.4c-.4 0-.8-.2-1-.5-.4-.6-.3-1.4.2-1.8 1.8-1.4 3.7-2.6 5.8-3.6.6-.3 1.4 0 1.7.6.3.6 0 1.4-.6 1.7-1.9.9-3.7 2-5.3 3.3C494.7 64.3 494.4 64.4 494.1 64.4zM500.5 55.3c-.5 0-.9-.3-1.2-.7-.5-1-1.2-1.9-2.4-3.4-.3-.4-.7-.9-1.1-1.4-.4-.6-.3-1.4.2-1.8.6-.4 1.4-.3 1.8.2.4.5.8 1 1.1 1.4 1.3 1.6 2.1 2.6 2.7 3.9.3.6 0 1.4-.6 1.7C500.9 55.3 500.7 55.3 500.5 55.3zM506.7 55c-.3 0-.5-.1-.8-.2-.6-.4-.7-1.2-.3-1.8 1.2-1.7 2.3-3.4 3.3-5.2.3-.6 1.1-.9 1.7-.5.6.3.9 1.1.5 1.7-1 1.9-2.2 3.8-3.5 5.6C507.4 54.8 507.1 55 506.7 55zM1029.3 382.8c-.1 0-.2 0-.4-.1-2.4-.7-4-.9-6.7-.7-.7 0-1.3-.5-1.4-1.2 0-.7.5-1.3 1.2-1.4 3.1-.2 4.9 0 7.6.8.7.2 1.1.9.9 1.6C1030.3 382.4 1029.8 382.8 1029.3 382.8zM1019.1 392.5c-.5 0-1-.3-1.2-.8-.8-2.1-1.2-4.3-1.3-6.6 0-.7.5-1.3 1.2-1.3.7 0 1.3.5 1.3 1.2.1 2 .5 3.9 1.1 5.8.2.7-.1 1.4-.8 1.6C1019.4 392.5 1019.2 392.5 1019.1 392.5zM1007.1 386.4c-.4 0-.8-.2-1-.5-.4-.6-.3-1.4.2-1.8 1.8-1.4 3.7-2.6 5.8-3.6.6-.3 1.4 0 1.7.6.3.6 0 1.4-.6 1.7-1.9.9-3.7 2-5.3 3.3C1007.7 386.3 1007.4 386.4 1007.1 386.4zM1013.5 377.3c-.5 0-.9-.3-1.2-.7-.5-1-1.2-1.9-2.4-3.4-.3-.4-.7-.9-1.1-1.4-.4-.6-.3-1.4.2-1.8.6-.4 1.4-.3 1.8.2.4.5.8 1 1.1 1.4 1.3 1.6 2.1 2.6 2.7 3.9.3.6 0 1.4-.6 1.7C1013.9 377.3 1013.7 377.3 1013.5 377.3zM1019.7 377c-.3 0-.5-.1-.8-.2-.6-.4-.7-1.2-.3-1.8 1.2-1.7 2.3-3.4 3.3-5.2.3-.6 1.1-.9 1.7-.5.6.3.9 1.1.5 1.7-1 1.9-2.2 3.8-3.5 5.6C1020.4 376.8 1020.1 377 1019.7 377zM1329.7 573.4c-1.4 0-2.9-.2-4.5-.7-8.4-2.7-16.6-12.7-18.7-20-.4-1.4-.7-2.9-.9-4.4-8.1 3.3-15.5 10.6-15.4 21 0 1.5-1.2 2.7-2.7 2.8 0 0 0 0 0 0-1.5 0-2.7-1.2-2.7-2.7-.1-6.7 2.4-12.9 7-18 3.6-4 8.4-7.1 13.7-8.8.5-6.5 3.1-12.9 7.4-17.4 7-7.4 18.2-8.9 27.3-10.1l.7-.1c1.5-.2 2.9.9 3.1 2.3.2 1.5-.9 2.9-2.3 3.1l-.7.1c-8.6 1.2-18.4 2.5-24 8.4-3 3.2-5 7.7-5.7 12.4 7.9-1 17.7 1.3 24.3 5.7 4.3 2.9 7.1 7.8 7.2 12.7.2 4.3-1.7 8.3-5.2 11.1C1335.2 572.4 1332.6 573.4 1329.7 573.4zM1311 546.7c.1 1.5.4 3 .8 4.4 1.7 5.8 8.7 14.2 15.1 16.3 2.8.9 5.1.5 7.2-1.1 2.7-2.1 3.2-4.8 3.1-6.6-.1-3.2-2-6.4-4.8-8.3C1326.7 547.5 1317.7 545.6 1311 546.7z" />
          </g>
        </chakra.svg>
      </Box>
    </Box>
  );
});

if (__DEV__) {
  WhyChooseUsBlock.displayName = "WhyChooseUsBlock";
}

const HowToGetStartedBlock: React.FC<
  {
    title: string;
    items: { icon: React.ReactElement; title: string; body: string }[];
  } & ChakraProps &
    ThemingProps
> = memo(({ title, items = [], ...rest }) => {
  return (
    <Box pos="relative" {...rest}>
      <Container maxW="container.xl">
        {title && (
          <Heading as="h3" mb={[10, 10, 10, 20]} textAlign="center">
            {title}
          </Heading>
        )}
        <Stack
          direction={["column", "column", "row"]}
          align={["center"]}
          spacing={[5, 10, 20, 20]}
        >
          {items.map((item) => (
            <Stack
              key={item.title}
              align={["center"]}
              h="full"
              w="full"
              flex="1"
            >
              {item.icon}
              <Heading as="h3" fontSize="lg">
                {item.title}
              </Heading>
              <Text fontSize="lg" maxW="22rem" align={["center"]}>
                {item.body}
              </Text>
            </Stack>
          ))}
        </Stack>
      </Container>
      <Box top={0} zIndex={-1} pos="absolute" width="100%" height="100%">
        <chakra.svg
          width="100%"
          height="100%"
          viewBox="0 0 1000 562.5016699268325"
          preserveAspectRatio="xMaxYMax slice"
          // preserveAspectRatio="xMidYMin slice"
        >
          <g transform="scale(1.4062541748170814)">
            <g transform="translate(373.33,17.78) scale(0.4445) rotate(0)">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20ZM10 17C13.866 17 17 13.866 17 10C17 6.13401 13.866 3 10 3C6.13401 3 3 6.13401 3 10C3 13.866 6.13401 17 10 17Z"
                fill="#abb9f4"
              />
            </g>
            <path
              d="M 417.78 17.78 A 8.89 8.89 0 0 0 426.66999999999996 26.67 L 426.66999999999996 17.78"
              fill="#ffd1dc"
            />
            <circle cx="511.115" cy="22.225" r="4.445" fill="#ff95ae" />
            <g transform="translate(373.33,62.22) scale(0.4445) rotate(0)">
              <path d="M10 0L20 10L10 20L0 10L10 0Z" fill="#ff8faa" />
            </g>
            <circle
              cx="422.22499999999997"
              cy="66.66499999999999"
              r="4.445"
              fill="#869aef"
            />
            <circle
              cx="644.445"
              cy="66.66499999999999"
              r="4.445"
              fill="#ffb3c5"
            />
            <g transform="translate(595.56,106.67) scale(0.4445) rotate(0)">
              <path
                d="M10 5L5 0L0 5L5 10L0 15L5 20L10 15L15 20L20 15L15 10L20 5L15 0L10 5Z"
                fill="#ffb0c3"
              />
            </g>
            <g transform="translate(240,151.11) scale(0.4445) rotate(0)">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20ZM10 17C13.866 17 17 13.866 17 10C17 6.13401 13.866 3 10 3C6.13401 3 3 6.13401 3 10C3 13.866 6.13401 17 10 17Z"
                fill="#b8c4f6"
              />
            </g>
            <g transform="translate(551.11,151.11) scale(0.4445) rotate(0)">
              <path d="M10 0L20 10L10 20L0 10L10 0Z" fill="#bec9f7" />
            </g>
            <g transform="translate(551.11,195.56) scale(0.4445) rotate(0)">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20ZM10 17C13.866 17 17 13.866 17 10C17 6.13401 13.866 3 10 3C6.13401 3 3 6.13401 3 10C3 13.866 6.13401 17 10 17Z"
                fill="#758ced"
              />
            </g>
            <g transform="translate(595.56,195.56) scale(0.4445) rotate(0)">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20ZM10 17C13.866 17 17 13.866 17 10C17 6.13401 13.866 3 10 3C6.13401 3 3 6.13401 3 10C3 13.866 6.13401 17 10 17Z"
                fill="#ffa2b8"
              />
            </g>
            <path
              d="M 640 195.56 A 8.89 8.89 0 0 1 648.89 204.45 L 640 204.45"
              fill="#ff4f79"
            />
            <polygon
              points="284.44,240 293.33,240 293.33,248.89"
              fill="#fcfdff"
            />
            <g transform="translate(462.22,284.44) scale(0.4445) rotate(0)">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20ZM10 17C13.866 17 17 13.866 17 10C17 6.13401 13.866 3 10 3C6.13401 3 3 6.13401 3 10C3 13.866 6.13401 17 10 17Z"
                fill="#e0e5fb"
              />
            </g>
            <rect
              x="195.56"
              y="328.89"
              width="8.89"
              height="8.89"
              fill="#fff4f7"
            />
            <path
              d="M 284.44 328.89 A 8.89 8.89 0 0 1 293.33 337.78 L 284.44 337.78"
              fill="#2e52e4"
            />
            <g transform="translate(417.78,328.89) scale(0.4445) rotate(0)">
              <path d="M10 0L20 10L10 20L0 10L10 0Z" fill="#c1ccf7" />
            </g>
            <rect
              x="462.22"
              y="373.33"
              width="8.89"
              height="8.89"
              fill="#ff7193"
            />
            <polygon
              points="551.11,373.33 560,382.21999999999997 551.11,382.21999999999997"
              fill="#a2b2f3"
            />
          </g>
        </chakra.svg>
      </Box>
    </Box>
  );
});

if (__DEV__) {
  HowToGetStartedBlock.displayName = "HowToGetStartedBlock";
}

const Testimonials: React.FC<
  {
    title: string | React.ReactNode;
    items: ITestimonial.IProps[];
  } & ChakraProps &
    ThemingProps
> = memo(({ title, items = [], colorScheme, ...rest }) => {
  return (
    <Box pos="relative" pb={12} {...rest}>
      <Container maxW="container.xl">
        {isValidElement(title) ? (
          title
        ) : (
          <Heading as="h3" mb={[10, 10, 10, 20]} textAlign="center">
            {title}
          </Heading>
        )}

        <CarouselDefault
          settings={{
            dots: true,
            arrows: true,
            infinite: true,
            // speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            // speed: 2000,
            autoplaySpeed: 2000,
            touchThreshold: 50,
            cssEase: "ease-in-out",
          }}
          sx={{
            ".slick-dots": {
              bottom: -12,
            },
            ".slick-dots li button": {
              transition: "all 250ms ease-in-out",
              _before: {
                fontSize: "1rem",
                transition: "all 250ms ease-in-out",
                color: useColorModeValue(
                  `${colorScheme}.400`,
                  `${colorScheme}.100`,
                ),
              },
            },
          }}
        >
          {items.map((item, idx) => (
            <TestimonialQuoteCard key={idx} {...item} />
          ))}
        </CarouselDefault>
      </Container>
      <Box top={0} zIndex={-1} pos="absolute" width="100%" height="100%">
        <chakra.svg
          width="100%"
          height="100%"
          viewBox="0 0 1000 563"
          preserveAspectRatio="xMaxYMax slice"
        >
          <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
            <rect
              fill="#F6CE61"
              x="212.499068"
              y="25.0031992"
              width="12.5015996"
              height="12.5015996"
            />
            <path
              d="M275.007066,25.0031992 C281.911509,25.0031992 287.508666,30.600356 287.508666,37.5047988 L275.007066,25.0031992 C275.007066,31.907642 280.604223,37.5047988 287.508666,37.5047988"
              fill="#FBEBBF"
            />
            <g transform="translate(962.496607, 25.003199)" fill="#F8DA86">
              <polygon points="6.25079981 3.1253999 3.1253999 0 0 3.1253999 3.1253999 6.25079981 0 9.37619971 3.1253999 12.5015996 6.25079981 9.37619971 9.37619971 12.5015996 12.5015996 9.37619971 9.37619971 6.25079981 12.5015996 3.1253999 9.37619971 0" />
            </g>
            <path
              d="M25.0031992,99.9987344 C25.0031992,93.0942916 30.600356,87.4971348 37.5047988,87.4971348 L25.0031992,99.9987344 C28.3188296,99.9987344 31.4986604,98.6816053 33.8431651,96.3371006 C36.1876698,93.9925959 37.5047988,90.8127651 37.5047988,87.4971348"
              fill="#4D6BE8"
            />
            <g transform="translate(87.497135, 87.497135)" fill="#F6CC5A">
              <polygon points="8.12603975 0 12.5015996 0 12.5015996 4.37555986 4.37555986 12.5015996 0 12.5015996 0 8.12603975" />
            </g>
            <path
              d="M275.007066,150.005133 C275.007066,156.909576 280.604223,162.506732 287.508666,162.506732 L287.508666,150.005133"
              fill="#ccd6ff"
            />
            <g transform="translate(25.003199, 212.499068)" fill="#F5CA54">
              <polygon points="8.12603975 0 12.5015996 0 12.5015996 4.37555986 4.37555986 12.5015996 0 12.5015996 0 8.12603975" />
            </g>
            <g transform="translate(150.005133, 337.501002)" fill="#5E79EA">
              <path d="M6.25079981,12.5015996 C9.70299152,12.5015996 12.5015996,9.70299152 12.5015996,6.25079981 C12.5015996,2.79857684 9.70299152,0 6.25079981,0 C2.79857684,0 0,2.79857684 0,6.25079981 C0,9.70299152 2.79857684,12.5015996 6.25079981,12.5015996 Z M6.25079981,10.6263597 C8.66735901,10.6263597 10.6263597,8.66735901 10.6263597,6.25079981 C10.6263597,3.83424685 8.66735901,1.87523994 6.25079981,1.87523994 C3.83424685,1.87523994 1.87523994,3.83424685 1.87523994,6.25079981 C1.87523994,8.66735901 3.83424685,10.6263597 6.25079981,10.6263597 Z" />
            </g>
            <g transform="translate(962.496607, 337.501002)" fill="#7C92EE">
              <polygon points="6.25079981 0 12.5015996 6.25079981 6.25079981 12.5015996 0 6.25079981" />
            </g>
            <rect
              fill="#FBEBBE"
              x="150.005133"
              y="462.502936"
              width="12.5015996"
              height="12.5015996"
            />
            <g transform="translate(649.998805, 524.996871)" fill="#FF4470">
              <polygon points="6.25079981 3.1253999 3.1253999 0 0 3.1253999 3.1253999 6.25079981 0 9.37619971 3.1253999 12.5015996 6.25079981 9.37619971 9.37619971 12.5015996 12.5015996 9.37619971 9.37619971 6.25079981 12.5015996 3.1253999 9.37619971 0" />
            </g>
            <g transform="translate(775.000738, 524.996871)" fill="#FFA1B7">
              <path d="M6.25079981,12.5015996 C9.70299152,12.5015996 12.5015996,9.70299152 12.5015996,6.25079981 C12.5015996,2.79857684 9.70299152,0 6.25079981,0 C2.79857684,0 0,2.79857684 0,6.25079981 C0,9.70299152 2.79857684,12.5015996 6.25079981,12.5015996 Z M6.25079981,10.6263597 C8.66735901,10.6263597 10.6263597,8.66735901 10.6263597,6.25079981 C10.6263597,3.83424685 8.66735901,1.87523994 6.25079981,1.87523994 C3.83424685,1.87523994 1.87523994,3.83424685 1.87523994,6.25079981 C1.87523994,8.66735901 3.83424685,10.6263597 6.25079981,10.6263597 Z" />
            </g>
          </g>
        </chakra.svg>
      </Box>
    </Box>
  );
});

if (__DEV__) {
  Testimonials.displayName = "Testimonials";
}

const FAQ: React.FC<
  {
    title: string | React.ReactNode;
    footnote?: string | React.ReactNode;
    items: IAccordion.T_AccordionItems[];
  } & ChakraProps &
    ThemingProps
> = memo(({ title, items = [], footnote, ...rest }) => {
  return (
    <Box {...rest}>
      <Container maxW="container.md">
        {isValidElement(title) ? (
          title
        ) : (
          <Heading as="h3" mb={[10, 10, 10, 20]} textAlign="center">
            {title}
          </Heading>
        )}
        <AccordionFlat
          accordionButtonProps={{
            fontWeight: "600",
            fontSize: "1.125rem",
            py: [2, 4, 6],
            borderColor: useColorModeValue("blackAlpha.200", "whiteAlpha.200"),
            _hover: {
              color: useColorModeValue("gray.700", "whiteAlpha.700"),
            },
            _expanded: {
              color: useColorModeValue("gray.700", "whiteAlpha.700"),
            },
          }}
          accordionPanelProps={{
            px: 0,
            py: 10,
          }}
          allowToggle
          isPlus
          accordions={items}
        />
        {footnote && isValidElement(footnote) ? (
          footnote
        ) : (
          <Text mt={10} textAlign="center">
            {footnote}
          </Text>
        )}
      </Container>
    </Box>
  );
});

if (__DEV__) {
  FAQ.displayName = "FAQ";
}

const OpportunityBlock: React.FC<
  {
    title: string | React.ReactNode;
    items: { icon: React.ReactElement; title: string; body: string }[];
  } & ChakraProps &
    ThemingProps
> = memo(({ title, items = [], ...rest }) => {
  return (
    <Box {...rest}>
      <Container maxW="container.xl">
        {isValidElement(title) ? (
          title
        ) : (
          <Heading as="h3" mb={[10, 10, 10, 20]} textAlign="center">
            {title}
          </Heading>
        )}
        {items && (
          <SimpleGrid spacing={[5, 10, 10, 10, 20]} columns={[1, 1, 2, 3, 3]}>
            {items.map((item) => (
              <Stack align="center" key={item.title}>
                {item.icon}
                <Heading fontWeight="500" fontSize="xl" as="h3">
                  {item.title}
                </Heading>
                <Text fontSize="lg" maxW="23rem" align="center">
                  {item.body}
                </Text>
              </Stack>
            ))}
          </SimpleGrid>
        )}
      </Container>
    </Box>
  );
});

if (__DEV__) {
  OpportunityBlock.displayName = "OpportunityBlock";
}

const CTABlock: React.FC<
  {
    title: string | React.ReactNode;
    link: string;
    href: string;
  } & ChakraProps &
    ThemingProps
> = memo(({ title, link, href, colorScheme, ...rest }) => {
  return (
    <Box pos="relative" {...rest}>
      <DividerArrow mx="auto" width="400px" height="50px" />
      <Container mt={[5, 10, 10]} maxW="500px">
        <Stack spacing={10} align="center">
          {isValidElement(title) ? (
            title
          ) : (
            <Heading as="h3" color="whiteAlpha.900" textAlign="center">
              {title}
            </Heading>
          )}
          {link && href && (
            <NextLink href={href} passHref>
              <Button
                color="whiteAlpha.800"
                variant="outline"
                size="lg"
                _hover={{
                  bg: "whiteAlpha.800",
                  color: "blue.800",
                }}
                rightIcon={
                  <Icon w="24px" h="24px" viewBox="0 0 24 24">
                    <g fill="none">
                      <path
                        fill-rule="evenodd"
                        clipRule="evenodd"
                        d="M11 19v3h2v-3h1a4 4 0 0 0 0-8h-1V7h2v2h2V5h-4V2h-2v3h-1a4 4 0 1 0 0 8h1v4H9v-2H7v4h4zm2-2h1a2 2 0 1 0 0-4h-1v4zm-2-6V7h-1a2 2 0 1 0 0 4h1z"
                        fill="currentColor"
                      />
                    </g>
                  </Icon>
                }
              >
                {link}
              </Button>
            </NextLink>
          )}
        </Stack>
      </Container>
      <Box
        top={0}
        zIndex={-1}
        pos="absolute"
        width="100%"
        height="100%"
        bg={`${colorScheme}.800`}
      >
        <TopographySvg color="whiteAlpha.50" />
      </Box>
    </Box>
  );
});

if (__DEV__) {
  CTABlock.displayName = "CTABlock";
}

/* ---------------------------------- ICONS --------------------------------- */

const SupportIcon: React.FC<ChakraProps & ThemingProps> = memo(
  ({ color = "currentColor" }) => {
    return (
      <chakra.svg width="16" height="auto" viewBox="0 0 303.738 303.738">
        <title>support</title>
        <g fill={useToken("colors", color as string)}>
          <path d="M127.035 148.084c-22.601 0-40.988 18.388-40.988 40.988 0 22.602 18.388 40.989 40.988 40.989 22.602-.001 40.989-18.389 40.989-40.989s-18.385-40.988-40.989-40.988zm0 66.977c-14.33 0-25.988-11.659-25.988-25.989s11.658-25.988 25.992-25.988c14.328 0 25.985 11.658 25.985 25.988s-11.659 25.989-25.989 25.989z" />
          <path d="M257.568 0H165.16c-18.638 0-33.8 15.168-33.8 33.813v40.593h-19.634a7.499 7.499 0 0 0-7.5 7.5v13.089a95.289 95.289 0 0 0-27.582 11.431l-9.258-9.259a7.501 7.501 0 0 0-10.606 0l-21.65 21.649a7.5 7.5 0 0 0-.001 10.608l9.259 9.259a95.28 95.28 0 0 0-11.43 27.581H19.869a7.499 7.499 0 0 0-7.5 7.5v30.618c0 4.143 3.357 7.5 7.5 7.5h13.089a95.32 95.32 0 0 0 11.43 27.581l-9.259 9.258a7.502 7.502 0 0 0 0 10.608l21.65 21.65a7.502 7.502 0 0 0 10.607 0l9.258-9.259a95.305 95.305 0 0 0 27.582 11.431v13.089c0 4.143 3.357 7.5 7.5 7.5h30.618c4.143 0 7.5-3.357 7.5-7.5v-13.089a95.276 95.276 0 0 0 27.581-11.431l9.26 9.259a7.502 7.502 0 0 0 10.607 0l21.65-21.65a7.504 7.504 0 0 0 0-10.608l-9.259-9.259a95.314 95.314 0 0 0 11.43-27.58h13.089c4.143 0 7.5-3.357 7.5-7.5v-30.618c0-4.143-3.357-7.5-7.5-7.5h-13.089a95.39 95.39 0 0 0-3.111-10.26l14.218-10.237h25.349c18.638 0 33.801-15.17 33.801-33.816V33.813C291.369 15.168 276.206 0 257.568 0zm-49.952 175.04a7.5 7.5 0 0 0 7.391 6.223h11.695v15.618h-11.695a7.501 7.501 0 0 0-7.391 6.223c-2.067 11.963-6.672 23.073-13.685 33.023a7.5 7.5 0 0 0 .827 9.624l8.274 8.272-11.044 11.044-8.274-8.273a7.498 7.498 0 0 0-9.624-.826c-9.947 7.013-21.059 11.616-33.023 13.685a7.5 7.5 0 0 0-6.223 7.391v11.695h-15.618v-11.695a7.501 7.501 0 0 0-6.223-7.391c-11.964-2.067-23.075-6.672-33.023-13.685a7.499 7.499 0 0 0-9.625.826l-8.272 8.273-11.044-11.044 8.273-8.272a7.5 7.5 0 0 0 .827-9.624c-7.013-9.95-11.617-21.061-13.685-33.023a7.5 7.5 0 0 0-7.391-6.223H27.369v-15.618h11.695a7.501 7.501 0 0 0 7.391-6.223c2.067-11.962 6.672-23.073 13.685-33.025a7.5 7.5 0 0 0-.827-9.624l-8.273-8.272 11.044-11.043 8.272 8.273a7.499 7.499 0 0 0 9.624.826c9.951-7.013 21.062-11.617 33.024-13.685a7.5 7.5 0 0 0 6.223-7.391V89.405h12.134v22.544c0 18.646 15.162 33.816 33.8 33.816h7.544v28.211a7.5 7.5 0 0 0 11.883 6.086l20.682-14.892a82.222 82.222 0 0 1 2.346 9.87zm68.753-63.091c0 10.375-8.434 18.816-18.801 18.816H229.8a7.499 7.499 0 0 0-4.383 1.414l-37.714 27.155v-21.069a7.5 7.5 0 0 0-7.5-7.5H165.16c-10.366 0-18.8-8.441-18.8-18.816V33.813c0-10.373 8.434-18.813 18.8-18.813h92.408c10.367 0 18.801 8.44 18.801 18.813v78.136z" />
          <path d="M210.528 24.636c-17.281 0-31.341 14.06-31.341 31.342a7.5 7.5 0 0 0 7.5 7.5 7.5 7.5 0 0 0 7.5-7.5c0-9.011 7.33-16.342 16.341-16.342 9.011 0 16.341 7.331 16.341 16.342 0 9.021-11.66 20.565-19.376 28.204-.781.774-1.54 1.525-2.268 2.253a7.5 7.5 0 1 0 10.608 10.607c.71-.711 1.452-1.445 2.215-2.201 10.054-9.953 23.822-23.586 23.822-38.863-.001-17.283-14.06-31.342-31.342-31.342z" />
          <path d="M208.366 105.738c-2.37 0-4.691.96-6.36 2.64a9.026 9.026 0 0 0-2.64 6.36c0 2.37.96 4.69 2.64 6.37a9.059 9.059 0 0 0 6.36 2.63c2.37 0 4.689-.96 6.37-2.63 1.67-1.681 2.63-4 2.63-6.37s-.96-4.69-2.63-6.36c-1.68-1.68-4-2.64-6.37-2.64z" />
        </g>
      </chakra.svg>
    );
  },
);

if (__DEV__) {
  SupportIcon.displayName = "SupportIcon";
}

const WebStartupIcon: React.FC<ChakraProps & ThemingProps> = memo(
  ({ color = "currentColor" }) => {
    return (
      <chakra.svg width="16" height="auto" viewBox="0 0 295.487 295.487">
        <title>web-startup</title>
        <g fill={useToken("colors", color as string)}>
          <path d="M147.741 211.033c-1.971 0-3.91.8-5.301 2.189a7.549 7.549 0 0 0-2.199 5.3c0 1.98.8 3.91 2.199 5.311a7.578 7.578 0 0 0 5.301 2.189c1.98 0 3.91-.8 5.3-2.189a7.556 7.556 0 0 0 2.2-5.311c0-1.97-.801-3.899-2.2-5.3a7.548 7.548 0 0 0-5.3-2.189z" />
          <path d="M268.749 21.336h-96.692c-9.59-12.349-18.59-19.232-19.393-19.834a7.5 7.5 0 0 0-9.006.001c-.803.603-9.799 7.485-19.384 19.833H26.738c-12.958 0-23.5 10.542-23.5 23.5V226.06c0 12.958 10.542 23.5 23.5 23.5h80.233l-10.302 30.925h-9.814c-4.143 0-7.5 3.357-7.5 7.5s3.357 7.5 7.5 7.5h15.197l.024.002.025-.002h91.283l.024.002.024-.002h15.199c4.143 0 7.5-3.357 7.5-7.5s-3.357-7.5-7.5-7.5h-9.816l-10.301-30.925h80.233c12.958 0 23.5-10.542 23.5-23.5V44.836c.002-12.958-10.54-23.5-23.498-23.5zm0 15c4.686 0 8.5 3.813 8.5 8.5V185.64h-61.116v-46.987c0-12.66-8.539-23.354-20.153-26.635V88.206c0-20.713-6.212-38.169-13.933-51.87h86.702zM114.102 162.982a7.5 7.5 0 0 0 1.258-4.157v-2.426h15.237v10.981c0 5.112 3.394 12.39 6.689 18.26H99.014l15.088-22.658zm-18.898 1.316v-25.645c0-4.181 2.03-7.896 5.155-10.206v28.109l-5.155 7.742zm105.929-.002l-5.153-7.739v-28.108a12.676 12.676 0 0 1 5.153 10.205v25.642zm-20.153-45.821v22.924h-15.232v-11.31c0-10.54-7.889-19.114-17.585-19.114-9.685 0-17.565 8.574-17.565 19.114v11.31H115.36V91.692h65.62v26.783zm-35.383 48.906V130.09c0-2.512 1.52-4.114 2.565-4.114 1.054 0 2.585 1.603 2.585 4.114l.001 37.246c-.068 1.148-1.068 3.668-2.583 6.73-1.506-3.051-2.501-5.554-2.568-6.685zm20.15 0V156.4h15.232v2.426a7.5 7.5 0 0 0 1.257 4.156l15.088 22.659h-38.277c3.302-5.871 6.7-13.148 6.7-18.26zM148.162 17.414c8.738 8.183 27.479 28.78 31.875 58.199h-63.735c4.395-29.425 23.133-50.022 31.86-58.199zM26.738 36.336h87.55c-7.718 13.701-13.928 31.157-13.928 51.87v23.813c-11.615 3.281-20.155 13.975-20.155 26.635v46.987H18.238V44.836c0-4.687 3.813-8.5 8.5-8.5zm156.269 244.149h-70.528l10.302-30.925h49.926l10.3 30.925zm85.742-45.925H26.738c-4.687 0-8.5-3.814-8.5-8.5v-25.42H277.25v25.42c-.001 4.687-3.814 8.5-8.501 8.5z" />
        </g>
      </chakra.svg>
    );
  },
);

if (__DEV__) {
  WebStartupIcon.displayName = "WebStartupIcon";
}

const EcommerceIcon: React.FC<ChakraProps & ThemingProps> = memo(
  ({ color = "currentColor" }) => {
    return (
      <chakra.svg width="16" height="auto" viewBox="0 0 300.004 300.004">
        <title>ecommerce</title>
        <g fill={useToken("colors", color as string)}>
          <path d="M278.891 244.965V105.231c0-4.143-3.357-7.5-7.5-7.5h-42.398V65.597c0-4.143-3.357-7.5-7.5-7.5H189.17V47.555c0-21.6-17.57-39.173-39.168-39.173s-39.168 17.573-39.168 39.173v10.542H78.512a7.499 7.499 0 0 0-7.5 7.5v32.134H28.613a7.5 7.5 0 0 0-7.5 7.5v139.734C9.438 245.174 0 254.721 0 266.446v3.676c0 11.855 9.645 21.5 21.5 21.5h257.004c11.855 0 21.5-9.645 21.5-21.5v-3.676c0-11.725-9.438-21.272-21.113-21.481zM78.512 216.954h142.98c4.143 0 7.5-3.357 7.5-7.5v-71.111h11.411v105.075H59.602V138.342h11.41v71.111a7.5 7.5 0 0 0 7.5 7.501zm185.379-104.223v130.687h-8.487V130.842c0-4.143-3.357-7.5-7.5-7.5h-18.911v-10.611h34.898zM125.834 47.555c0-13.329 10.842-24.173 24.168-24.173s24.168 10.844 24.168 24.173v10.542h-48.336V47.555zM86.012 73.097h24.822V85.94c0 4.143 3.357 7.5 7.5 7.5s7.5-3.357 7.5-7.5V73.097h48.336V85.94c0 4.143 3.357 7.5 7.5 7.5s7.5-3.357 7.5-7.5V73.097h24.822v128.856H86.012V73.097zm-49.899 39.634h34.899v10.611h-18.91a7.499 7.499 0 0 0-7.5 7.5v112.575h-8.488V112.731zm248.891 157.391c0 3.584-2.916 6.5-6.5 6.5H21.5a6.508 6.508 0 0 1-6.5-6.5v-3.676c0-3.584 2.916-6.5 6.5-6.5h257.004c3.584 0 6.5 2.916 6.5 6.5v3.676z" />
          <path d="M171.885 153.601l-48.656-19.512 19.459 48.778 4.744-14.753 19.615 19.657 9.727-9.753-19.61-19.66z" />
        </g>
      </chakra.svg>
    );
  },
);

if (__DEV__) {
  EcommerceIcon.displayName = "EcommerceIcon";
}

const DesignToolsIcon: React.FC<ChakraProps & ThemingProps> = memo(
  ({ color = "currentColor" }) => {
    return (
      <chakra.svg width="16" height="auto" viewBox="0 0 296.421 296.421">
        <title>design-tools</title>
        <g fill={useToken("colors", color as string)}>
          <path d="M225.607 211.067H193.48V7.5c0-4.143-3.357-7.5-7.5-7.5H14.708a7.499 7.499 0 0 0-7.5 7.5v249.324c0 4.143 3.357 7.5 7.5 7.5h80.373v24.597a7.5 7.5 0 0 0 7.5 7.5h123.025a7.5 7.5 0 0 0 7.5-7.5v-70.354a7.499 7.499 0 0 0-7.499-7.5zM178.48 15v37.768H22.208V15H178.48zM95.081 218.567v30.757H22.208V67.768H178.48v143.3h-75.898a7.499 7.499 0 0 0-7.501 7.499zm123.026 62.854H110.081v-55.354h108.025v55.354z" />
          <path d="M46.663 46.047c6.559 0 11.894-5.337 11.894-11.896 0-6.561-5.336-11.897-11.894-11.897-6.557 0-11.892 5.337-11.892 11.897 0 6.559 5.335 11.896 11.892 11.896zm0-15a3.11 3.11 0 0 1 3.108 3.104 3.11 3.11 0 0 1-3.108 3.103 3.108 3.108 0 0 1-3.106-3.103 3.109 3.109 0 0 1 3.106-3.104z" />
          <path d="M133.34 265.642c6.56 0 11.895-5.337 11.895-11.897 0-6.561-5.336-11.898-11.895-11.898s-11.896 5.338-11.896 11.898c.001 6.561 5.337 11.897 11.896 11.897zm0-14.999a3.107 3.107 0 0 1 3.104 3.103c0 1.71-1.393 3.101-3.104 3.101s-3.105-1.392-3.105-3.101a3.108 3.108 0 0 1 3.105-3.103z" />
          <path d="M281.712.679h-38.531a7.499 7.499 0 0 0-7.5 7.5v189.418c0 1.163.27 2.312.791 3.352l19.264 38.558a7.5 7.5 0 0 0 13.418.001l19.268-38.558a7.49 7.49 0 0 0 .791-3.353V8.179a7.5 7.5 0 0 0-7.501-7.5zm-19.267 58.293c6 0 10.964-4.471 11.768-10.255v141.38h-23.531V48.736c.812 5.775 5.77 10.236 11.763 10.236zm-3.106-11.898a3.108 3.108 0 0 1 3.105-3.103 3.108 3.108 0 0 1 3.106 3.103 3.108 3.108 0 0 1-3.106 3.103 3.108 3.108 0 0 1-3.105-3.103zm14.873-31.395v29.753c-.804-5.784-5.768-10.255-11.768-10.255-5.993 0-10.951 4.461-11.764 10.235V15.679h23.532zm-11.766 203.696l-7.134-14.278h14.269l-7.135 14.278z" />
        </g>
      </chakra.svg>
    );
  },
);

if (__DEV__) {
  DesignToolsIcon.displayName = "DesignToolsIcon";
}

const TeamIcon: React.FC<ChakraProps & ThemingProps> = memo(
  ({ color = "currentColor" }) => {
    return (
      <chakra.svg width="16" height="auto" viewBox="0 0 285.708 285.708">
        <title>team</title>
        <g fill={useToken("colors", color as string)}>
          <path d="M73.26 90.095c24.779 0 44.939-20.209 44.939-45.05C118.199 20.207 98.039 0 73.26 0 48.48 0 28.32 20.207 28.32 45.045c-.001 24.841 20.159 45.05 44.94 45.05zm0-75.095c16.509 0 29.939 13.479 29.939 30.045 0 16.569-13.431 30.05-29.939 30.05s-29.94-13.481-29.94-30.05C43.319 28.479 56.751 15 73.26 15z" />
          <path d="M212.449 90.095c24.779 0 44.939-20.209 44.939-45.05C257.389 20.207 237.228 0 212.449 0c-24.78 0-44.94 20.207-44.94 45.045 0 24.841 20.16 45.05 44.94 45.05zm0-75.095c16.509 0 29.939 13.479 29.939 30.045 0 16.569-13.431 30.05-29.939 30.05-16.509 0-29.94-13.481-29.94-30.05 0-16.566 13.431-30.045 29.94-30.045z" />
          <path d="M283.987 148.117l-7.646-38.342c-2.387-11.961-13.793-21.331-25.967-21.331h-16.532a7.5 7.5 0 0 0-5.311 2.204l-16.082 16.129-16.082-16.129a7.497 7.497 0 0 0-5.311-2.204h-16.534c-4.535 0-8.957 1.311-12.85 3.563a55.2 55.2 0 0 0-20.597-3.979 55.258 55.258 0 0 0-18.513 3.187c-3.519-1.765-7.404-2.771-11.378-2.771H94.652a7.5 7.5 0 0 0-5.311 2.204L73.26 106.777 57.178 90.648a7.497 7.497 0 0 0-5.311-2.204H35.333c-12.175 0-23.58 9.37-25.966 21.332L1.72 148.117a7.502 7.502 0 0 0 7.356 8.967h77.97c5.961 24.362 27.918 42.495 54.03 42.495 26.112 0 48.069-18.133 54.03-42.495h81.525a7.503 7.503 0 0 0 7.356-8.967zM24.078 112.71c.984-4.936 6.243-9.266 11.255-9.266h13.421l19.194 19.251a7.5 7.5 0 0 0 10.622 0l19.195-19.251h4.97c-10.257 9.796-16.791 23.461-17.252 38.64H18.22l5.858-29.374zm116.998 71.869c-22.407 0-40.637-18.293-40.637-40.777 0-22.482 18.229-40.773 40.637-40.773 22.407 0 40.637 18.291 40.637 40.773 0 22.484-18.23 40.777-40.637 40.777zm55.593-42.495c-.461-15.179-6.995-28.844-17.252-38.64h8.526l19.194 19.251a7.5 7.5 0 0 0 10.623 0l19.195-19.251h13.419c5.012 0 10.271 4.33 11.256 9.266l5.858 29.374h-70.819z" />
          <path d="M221.12 227.445c-2.876-14.412-16.616-25.702-31.282-25.702h-21.257a7.5 7.5 0 0 0-5.311 2.204l-22.194 22.259-22.194-22.259a7.497 7.497 0 0 0-5.311-2.204H92.313c-14.666 0-28.407 11.29-31.283 25.703l-9.83 49.295a7.502 7.502 0 0 0 7.356 8.967h165.041a7.503 7.503 0 0 0 7.356-8.967l-9.833-49.296zM67.699 270.708l8.042-40.327c1.449-7.266 9.193-13.638 16.572-13.638h18.145l25.308 25.381a7.497 7.497 0 0 0 10.621 0l25.308-25.381h18.144c7.379 0 15.122 6.372 16.571 13.637l8.044 40.328H67.699z" />
        </g>
      </chakra.svg>
    );
  },
);

if (__DEV__) {
  TeamIcon.displayName = "TeamIcon";
}

const VisualDesignIcon: React.FC<ChakraProps & ThemingProps> = memo(
  ({ color = "currentColor" }) => {
    return (
      <chakra.svg width="16" height="auto" viewBox="0 0 312 312">
        <title>visual-design</title>
        <g fill={useToken("colors", color as string)}>
          <path d="M304.5 32.5H7.5A7.499 7.499 0 0 0 0 40v232c0 4.143 3.357 7.5 7.5 7.5h297c4.143 0 7.5-3.357 7.5-7.5V40c0-4.143-3.357-7.5-7.5-7.5zm-7.5 15V82H15V47.5h282zm-282 217V97h282v167.5H15z" />
          <path d="M156 124.186c-58.67 0-102.585 45.3-104.425 47.229a7.499 7.499 0 0 0 0 10.357C53.415 183.7 97.33 229 156 229s102.585-45.3 104.425-47.229a7.499 7.499 0 0 0 0-10.357c-1.84-1.929-45.755-47.228-104.425-47.228zm-.001 82.535c-16.501 0-29.926-13.516-29.926-30.128s13.425-30.127 29.926-30.127c16.502 0 29.928 13.515 29.928 30.127s-13.426 30.128-29.928 30.128zm-30.986-62.756c-8.578 8.223-13.939 19.805-13.939 32.628s5.36 24.404 13.938 32.628c-26.652-8.06-47.559-24.297-57.039-32.628 9.483-8.333 30.389-24.57 57.04-32.628zm61.975 65.256c8.578-8.224 13.939-19.805 13.939-32.628s-5.361-24.405-13.941-32.628c26.653 8.059 47.562 24.297 57.042 32.628-9.484 8.333-30.39 24.569-57.04 32.628z" />
          <path d="M156 160.685c-8.696 0-15.772 7.137-15.772 15.908 0 8.77 7.075 15.906 15.772 15.906 8.696 0 15.771-7.136 15.771-15.906 0-8.772-7.075-15.908-15.771-15.908z" />
          <path d="M40.497 72c1.979 0 3.91-.8 5.309-2.2a7.575 7.575 0 0 0 2.191-5.3c0-1.971-.8-3.91-2.191-5.3a7.549 7.549 0 0 0-5.309-2.2 7.508 7.508 0 0 0-7.5 7.5c0 1.979.8 3.91 2.2 5.3 1.4 1.4 3.329 2.2 5.3 2.2z" />
          <path d="M73.497 72c1.979 0 3.91-.8 5.31-2.2a7.574 7.574 0 0 0 2.19-5.3c0-1.971-.8-3.91-2.19-5.3a7.55 7.55 0 0 0-5.31-2.2 7.508 7.508 0 0 0-7.5 7.5c0 1.979.8 3.91 2.2 5.3 1.4 1.4 3.329 2.2 5.3 2.2z" />
          <path d="M106.497 72c1.979 0 3.91-.8 5.31-2.2a7.574 7.574 0 0 0 2.19-5.3c0-1.971-.8-3.91-2.19-5.3a7.55 7.55 0 0 0-5.31-2.2 7.508 7.508 0 0 0-7.5 7.5c0 1.979.8 3.91 2.2 5.3 1.4 1.4 3.329 2.2 5.3 2.2z" />
        </g>
      </chakra.svg>
    );
  },
);

if (__DEV__) {
  VisualDesignIcon.displayName = "VisualDesignIcon";
}

/* ------------------------------- Circle Icon ------------------------------ */
const InvoiceMoneyIcon: React.FC<ChakraProps & ThemingProps> = memo(
  ({ colorScheme = "gray" }) => {
    return (
      <Circle bg={`${colorScheme}.100`} size="32">
        <chakra.svg width="12" height="auto" viewBox="0 0 512 512">
          <title>invoice-money</title>
          <g fill={useToken("colors", `${colorScheme}.700`)}>
            <path d="M354.338 34.205h-61.71c-3.354-9.93-12.752-17.102-23.8-17.102h-17.547C243.359 6.451 230.813 0 217.521 0s-25.839 6.451-33.76 17.102h-17.547c-11.048 0-20.446 7.172-23.8 17.102H80.701c-18.566 0-33.67 15.105-33.67 33.67v359.148c0 18.566 15.105 33.67 33.67 33.67h171.023a8.017 8.017 0 0 0 0-16.034H80.701c-9.725 0-17.637-7.912-17.637-17.637V67.875c0-9.725 7.912-17.637 17.637-17.637h60.394v26.188a8.017 8.017 0 0 0 8.017 8.017H285.93a8.017 8.017 0 0 0 8.017-8.017V50.238h60.391c9.725 0 17.637 7.912 17.637 17.637v230.881a8.017 8.017 0 0 0 16.034 0V67.875c-.001-18.566-15.105-33.67-33.671-33.67zm-76.424 34.204H157.129V42.252l.001-.031-.001-.015c.009-5.004 4.08-9.071 9.085-9.071h21.846a8.016 8.016 0 0 0 6.929-3.985c4.781-8.213 13.204-13.117 22.532-13.117s17.751 4.904 22.532 13.117a8.017 8.017 0 0 0 6.929 3.985h21.846c4.999 0 9.067 4.059 9.085 9.055l-.001.031c0 .021.003.041.003.062v26.126z" />
            <path d="M251.722 410.455H97.269V84.443h17.64a8.017 8.017 0 0 0 0-16.034H89.253a8.017 8.017 0 0 0-8.017 8.017v342.046a8.017 8.017 0 0 0 8.017 8.017h162.47a8.017 8.017 0 1 0-.001-16.034z" />
            <path d="M345.787 68.409h-25.653a8.017 8.017 0 0 0 0 16.034h17.637v214.311a8.017 8.017 0 0 0 16.034 0V76.426a8.02 8.02 0 0 0-8.018-8.017z" />
            <path d="M371.44 324.944c-51.572 0-93.528 41.956-93.528 93.528S319.869 512 371.44 512s93.528-41.956 93.528-93.528-41.956-93.528-93.528-93.528zm0 171.023c-42.731 0-77.495-34.764-77.495-77.495s34.764-77.495 77.495-77.495 77.495 34.764 77.495 77.495-34.763 77.495-77.495 77.495z" />
            <path d="M217.607 34.205h-.086c-4.427 0-7.974 3.589-7.974 8.017 0 4.427 3.631 8.017 8.059 8.017a8.017 8.017 0 0 0 8.017-8.017 8.015 8.015 0 0 0-8.016-8.017z" />
            <path d="M419.865 387.15a8.016 8.016 0 0 0-11.337 0l-54.19 54.19-28.536-28.536a8.016 8.016 0 0 0-11.337 0 8.016 8.016 0 0 0 0 11.337l34.205 34.205c1.565 1.565 3.617 2.348 5.668 2.348s4.103-.782 5.668-2.348l59.858-59.858a8.018 8.018 0 0 0 .001-11.338z" />
            <path d="M182.781 177.309v-32.338c11.295 1.934 18.171 7.688 18.171 11.889a8.017 8.017 0 0 0 16.034 0c0-14.171-14.492-25.621-34.205-28.092v-1.036a8.017 8.017 0 0 0-16.034 0v1.036c-19.713 2.47-34.205 13.92-34.205 28.092 0 20.074 18.829 27.788 34.205 32.461v32.338c-11.295-1.934-18.171-7.688-18.171-11.889a8.017 8.017 0 0 0-16.034 0c0 14.171 14.492 25.621 34.205 28.092v1.036a8.017 8.017 0 0 0 16.034 0v-1.036c19.713-2.47 34.205-13.92 34.205-28.092-.001-20.073-18.829-27.788-34.205-32.461zm-16.034-4.898c-13.524-4.713-18.171-8.963-18.171-15.551 0-2.535 2.236-5.335 6.134-7.68 3.294-1.982 7.473-3.415 12.037-4.198v27.429zm28.071 45.039c-3.294 1.982-7.473 3.415-12.037 4.198v-27.429c13.524 4.713 18.171 8.963 18.171 15.551 0 2.536-2.236 5.335-6.134 7.68z" />
            <path d="M294.48 136.818h-42.756a8.017 8.017 0 0 0 0 16.034h42.756a8.017 8.017 0 0 0 0-16.034z" />
            <path d="M277.378 171.023h-25.653a8.017 8.017 0 0 0 0 16.034h25.653a8.017 8.017 0 0 0 0-16.034z" />
            <path d="M294.48 205.228h-42.756a8.017 8.017 0 0 0 0 16.034h42.756a8.017 8.017 0 0 0 0-16.034z" />
            <path d="M157.662 282.188H140.56a8.017 8.017 0 0 0 0 16.034h17.102a8.017 8.017 0 0 0 0-16.034z" />
            <path d="M157.662 350.597H140.56a8.017 8.017 0 0 0 0 16.034h17.102a8.017 8.017 0 0 0 0-16.034z" />
            <path d="M157.662 316.393H140.56a8.017 8.017 0 0 0 0 16.034h17.102a8.017 8.017 0 0 0 0-16.034z" />
            <path d="M294.48 282.188H191.866a8.017 8.017 0 0 0 0 16.034H294.48a8.017 8.017 0 0 0 0-16.034z" />
            <path d="M268.827 350.597h-76.96a8.017 8.017 0 0 0 0 16.034h76.96a8.017 8.017 0 0 0 0-16.034z" />
            <path d="M294.48 316.393H191.866a8.017 8.017 0 0 0 0 16.034H294.48a8.017 8.017 0 0 0 0-16.034z" />
          </g>
        </chakra.svg>
      </Circle>
    );
  },
);

if (__DEV__) {
  InvoiceMoneyIcon.displayName = "InvoiceMoneyIcon";
}

const MarketingAdvertisingIcon: React.FC<ChakraProps & ThemingProps> = memo(
  ({ colorScheme = "gray" }) => {
    return (
      <Circle bg={`${colorScheme}.100`} size="32">
        <chakra.svg width="12" height="auto" viewBox="0 0 512 512">
          <title>marketing-advertising</title>
          <g fill={useToken("colors", `${colorScheme}.700`)}>
            <path d="M485.083 36.653H26.917C12.075 36.653 0 48.728 0 63.571V448.43c0 14.842 12.075 26.917 26.917 26.917h458.166c14.842 0 26.917-12.075 26.917-26.917V63.571c0-14.843-12.075-26.918-26.917-26.918zM127.141 53.834h331.025v19.472H127.141V53.834zm-36.653 0h19.472v19.472H90.488V53.834zm-36.654 0h19.472v19.472H53.834V53.834zm-36.653 9.737c0-5.369 4.367-9.736 9.736-9.736h9.736v19.472H17.181v-9.736zM494.819 448.43c0 5.369-4.367 9.736-9.736 9.736H26.917c-5.369 0-9.736-4.367-9.736-9.736V90.488h477.638V448.43zm0-375.124h-19.472V53.834h9.736c5.369 0 9.736 4.367 9.736 9.736v9.736z" />
            <path d="M466.756 109.96H45.244a8.591 8.591 0 0 0 0 17.182h421.512a8.591 8.591 0 0 0 0-17.182z" />
            <path d="M329.307 164.94H310.98c-7.907 0-14.617 5.198-16.907 12.353-73.698 43.017-153.528 50.3-176.506 51.508-9.404.496-16.77 8.28-16.77 17.724v37.276c0 9.444 7.366 17.228 16.77 17.723 4.579.241 11.426.725 20.023 1.684l25.813 94.901c2.097 7.71 9.142 13.094 17.132 13.094h29.617l.028.002.033-.002h9.135a8.591 8.591 0 0 0 0-17.182h-2.601l-21.958-80.51c30.325 7.555 65.45 19.772 99.284 39.52 2.291 7.156 9.002 12.353 16.907 12.353h18.327c9.79 0 17.754-7.964 17.754-17.754V182.69c-.001-9.786-7.965-17.75-17.754-17.75zM137.45 285.916c-8.077-.864-14.548-1.316-18.981-1.55-.29-.015-.491-.247-.491-.565v-37.276c0-.317.202-.55.491-.566 4.433-.234 10.904-.686 18.981-1.55v41.507zm61.485 108.106h-18.402a.574.574 0 0 1-.553-.423l-23.912-87.914a445.665 445.665 0 0 1 19.741 3.542l23.126 84.795zm130.944-46.389a.574.574 0 0 1-.573.573H310.98a.574.574 0 0 1-.573-.573V246.838a8.591 8.591 0 0 0-17.182 0v86.016c-50.866-27.553-103.249-39.544-138.595-44.75v-45.881c35.346-5.206 87.73-17.197 138.595-44.75v12.712a8.591 8.591 0 0 0 17.182 0v-27.491c0-.316.257-.573.573-.573h18.327c.316 0 .573.257.573.573v164.939z" />
            <path d="M430.103 256.573h-54.98a8.591 8.591 0 0 0 0 17.182h54.98a8.591 8.591 0 0 0 0-17.182z" />
            <path d="M419.46 206.343a8.59 8.59 0 0 0-11.525-3.842l-36.653 18.327a8.59 8.59 0 0 0 3.848 16.275 8.564 8.564 0 0 0 3.835-.908l36.653-18.327a8.59 8.59 0 0 0 3.842-11.525z" />
            <path d="M415.618 312.46l-36.653-18.327a8.59 8.59 0 0 0-7.683 15.367l36.653 18.327a8.591 8.591 0 0 0 11.525-3.843 8.588 8.588 0 0 0-3.842-11.524z" />
          </g>
        </chakra.svg>
      </Circle>
    );
  },
);

if (__DEV__) {
  MarketingAdvertisingIcon.displayName = "MarketingAdvertisingIcon";
}

const WalletIcon: React.FC<ChakraProps & ThemingProps> = memo(
  ({ colorScheme = "gray" }) => {
    return (
      <Circle bg={`${colorScheme}.100`} size="32">
        <chakra.svg width="12" height="auto" viewBox="0 0 512 512">
          <title>wallet</title>
          <g fill={useToken("colors", `${colorScheme}.700`)}>
            <path d="M494.558 261.046h-.563V143.455c0-14.581-11.863-26.444-26.444-26.444h-4.731l-10.772-56.656a17.325 17.325 0 0 0-7.322-11.162 17.329 17.329 0 0 0-13.07-2.715l-40.132 7.63-14.944-42.433a17.327 17.327 0 0 0-8.916-9.936 17.32 17.32 0 0 0-13.33-.721L24.839 117.065C11.003 117.898 0 129.413 0 143.455v342.084c0 14.581 11.863 26.444 26.444 26.444h441.108c14.581 0 26.444-11.863 26.444-26.444V367.947h.563c9.618 0 17.442-7.824 17.442-17.442v-72.018c-.001-9.616-7.825-17.441-17.443-17.441zM359.94 16.938c.055-.019.218-.078.43.024.21.1.268.267.287.321l14.094 40.016-16.807 3.195a8.44 8.44 0 0 0-6.715 9.868 8.438 8.438 0 0 0 9.868 6.715l73.711-14.015c.056-.01.228-.044.422.088a.53.53 0 0 1 .236.36l10.172 53.503H151.043l174.055-33.092a8.44 8.44 0 0 0 6.715-9.868c-.871-4.579-5.287-7.588-9.868-6.715l-228.4 43.425L359.94 16.938zm117.177 468.6c0 5.274-4.291 9.565-9.565 9.565H26.444c-5.274 0-9.565-4.291-9.565-9.565v-9.565h18.567a8.44 8.44 0 0 0 0-16.88H16.879V169.899h18.567a8.44 8.44 0 0 0 0-16.88H16.879v-9.565c0-5.274 4.291-9.565 9.565-9.565h441.108c5.274 0 9.565 4.291 9.565 9.565v117.591h-54.576c-29.472 0-53.451 23.978-53.451 53.451 0 29.472 23.978 53.451 53.451 53.451h54.576v117.591zm18.004-135.033a.564.564 0 0 1-.563.563H422.54c-20.165 0-36.571-16.406-36.571-36.571 0-20.166 16.406-36.571 36.571-36.571h72.018c.311 0 .563.253.563.563v72.016z" />
            <path d="M89.459 459.094H71.455a8.44 8.44 0 0 0 0 16.88h18.004a8.44 8.44 0 0 0 0-16.88z" />
            <path d="M89.459 153.02H71.455a8.44 8.44 0 0 0 0 16.88h18.004a8.44 8.44 0 0 0 0-16.88z" />
            <path d="M143.473 459.094h-18.004a8.44 8.44 0 0 0 0 16.88h18.004a8.44 8.44 0 0 0 0-16.88z" />
            <path d="M143.473 153.02h-18.004a8.44 8.44 0 0 0 0 16.88h18.004a8.44 8.44 0 0 0 0-16.88z" />
            <path d="M197.486 459.094h-18.004a8.44 8.44 0 0 0 0 16.88h18.004a8.44 8.44 0 0 0 0-16.88z" />
            <path d="M197.486 153.02h-18.004a8.44 8.44 0 0 0 0 16.88h18.004a8.44 8.44 0 0 0 0-16.88z" />
            <path d="M251.499 459.094h-18.004a8.44 8.44 0 0 0 0 16.88h18.004a8.44 8.44 0 0 0 0-16.88z" />
            <path d="M251.499 153.02h-18.004a8.44 8.44 0 0 0 0 16.88h18.004a8.44 8.44 0 0 0 0-16.88z" />
            <path d="M305.512 459.094h-18.004a8.44 8.44 0 0 0 0 16.88h18.004a8.44 8.44 0 0 0 0-16.88z" />
            <path d="M305.512 153.02h-18.004a8.44 8.44 0 0 0 0 16.88h18.004a8.44 8.44 0 0 0 0-16.88z" />
            <path d="M359.525 459.094h-18.004a8.44 8.44 0 0 0 0 16.88h18.004a8.44 8.44 0 0 0 0-16.88z" />
            <path d="M359.525 153.02h-18.004a8.44 8.44 0 0 0 0 16.88h18.004a8.44 8.44 0 0 0 0-16.88z" />
            <path d="M413.538 459.094h-18.004a8.44 8.44 0 0 0 0 16.88h18.004a8.44 8.44 0 0 0 0-16.88z" />
            <path d="M413.538 153.02h-18.004a8.44 8.44 0 0 0 0 16.88h18.004a8.44 8.44 0 0 0 0-16.88z" />
            <path d="M449.547 441.09a8.44 8.44 0 0 0-8.44 8.44v18.004a8.44 8.44 0 0 0 16.88 0V449.53a8.44 8.44 0 0 0-8.44-8.44z" />
            <path d="M449.547 153.02a8.44 8.44 0 0 0-8.44 8.44v18.004a8.44 8.44 0 0 0 16.88 0V161.46a8.44 8.44 0 0 0-8.44-8.44z" />
            <path d="M449.547 207.033a8.44 8.44 0 0 0-8.44 8.44v18.004a8.44 8.44 0 0 0 16.88 0v-18.004a8.44 8.44 0 0 0-8.44-8.44z" />
            <path d="M449.547 387.077a8.44 8.44 0 0 0-8.44 8.44v18.004a8.44 8.44 0 0 0 16.88 0v-18.004a8.44 8.44 0 0 0-8.44-8.44z" />
            <path d="M422.541 297.055c-9.618 0-17.442 7.824-17.442 17.442s7.824 17.442 17.442 17.442 17.442-7.824 17.442-17.442c-.001-9.618-7.825-17.442-17.442-17.442z" />
            <path d="M241.934 308.053v-65.798c27.575 2.217 46.136 15.045 46.136 26.668a8.44 8.44 0 0 0 16.88 0c0-22.851-27.068-41.094-63.015-43.584v-9.866a8.44 8.44 0 0 0-16.88 0v9.866c-35.947 2.491-63.015 20.734-63.015 43.584 0 30.612 29.107 42.558 63.015 52.017v65.798c-27.575-2.216-46.136-15.044-46.136-26.668a8.44 8.44 0 0 0-16.88 0c0 22.851 27.068 41.094 63.015 43.584v9.866a8.44 8.44 0 0 0 16.88 0v-9.866c35.947-2.491 63.015-20.734 63.015-43.584 0-30.612-29.107-42.558-63.015-52.017zm-16.879-4.693c-34.23-10.112-46.136-19.297-46.136-34.437 0-11.623 18.561-24.451 46.136-26.668v61.105zm16.879 83.378v-61.105c34.23 10.113 46.136 19.298 46.136 34.437 0 11.623-18.561 24.451-46.136 26.668z" />
          </g>
        </chakra.svg>
      </Circle>
    );
  },
);

if (__DEV__) {
  WalletIcon.displayName = "WalletIcon";
}

export default AffiliatesPage;
