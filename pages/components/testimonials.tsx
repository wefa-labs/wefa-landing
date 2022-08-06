import { ImQuotesLeft } from "@react-icons";

import { NextSeo } from "next-seo";

import {
  Icon,
  Text,
  Box,
  Container,
  useColorModeValue,
} from "@chakra-ui/react";

import { SectionHeading } from "@components/common";
import Highlight from "@components/highlight";
import PageTitle from "@components/page-title";
import { RatingDefault } from "@components/rating";
import { TestimonialBlurredBackdrop } from "@components/testimonials/testimonial-blurred-backdrop";
import { TestimonialBubbleCard } from "@components/testimonials/testimonial-bubble-card";
import TestimonialQuoteCard from "@components/testimonials/testimonial-quote-card";

import AvatarImage from "@assets/images/avatar-1.jpg?resize&img";
import BackgroundOne from "@assets/testiomial-bg-1.svg";

const TestimonialsPage: React.FC = (): JSX.Element => {
  return (
    <>
      <NextSeo
        title="Testimonial Component"
        description="Testimonial Component Examples"
      />
      <main>
        <PageTitle
          title="Testimonial Component"
          body={
            <Text as="div">
              On this page, you will find{" "}
              <Text as="div" display="inline-block" color="green.400">
                <Highlight strokeWidth={2}>
                  <b>3 examples</b>
                </Highlight>
              </Text>{" "}
              of testimonial component that you can easily use on your pages.
            </Text>
          }
        ></PageTitle>
        <Container maxW="container.xl">
          <Box py={10}>
            <SectionHeading>Quotes Card</SectionHeading>
            <TestimonialQuoteCard
              avatarImage={AvatarImage}
              name="Ethan Hunt"
              occupation="Software Engineer - Apple"
              body="We had an incredible experience working with Chakra Templates and were impressed they made such a big difference in only three weeks. Our team is so grateful for the wonderful improvements they made and their ability to get familiar with the product concept so quickly."
            />
          </Box>
        </Container>
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          py={10}
          backgroundColor={useColorModeValue("gray.200", "gray.700")}
        >
          <SectionHeading>Bubble Card</SectionHeading>
          <TestimonialBubbleCard
            maxWidth="340px"
            avatarImage={AvatarImage}
            title="Mindblowing Service"
            body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor neque sed imperdiet nibh lectus feugiat nunc sem."
            name="Ethan Matthew Hunt"
            occupation="Software Engineer - Apple"
            // bgColor={useColorModeValue("gray.200", "gray.700")}
            // titleColor={useColorModeValue("gray.800", "gray.100")}
            // bodyColor={useColorModeValue("gray.700", "gray.200")}
            // color="white"
            // boxShadow={""}
            rating={<RatingDefault readonly fontSize="xs" initialRating={5} />}
          />
        </Box>
        <Container maxW="container.xl">
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            pt={10}
            pb={20}
          >
            <SectionHeading>Blurred Backdrop</SectionHeading>
            <TestimonialBlurredBackdrop
              // maxW="1400px"
              avatarImage={AvatarImage}
              name="Ethan Hunt"
              occupation="Engineer at Apple"
              body="It's really wonderful. You've saved our business! Mercury Template is worth much more than I paid. It really saves me time and effort. It's exactly what our business has been lacking."
              backgroundImage={BackgroundOne}
              icon={<Icon as={ImQuotesLeft} color="pink.500" w={10} h={10} />}
              rating={
                <RatingDefault
                  color="pink"
                  readonly
                  fontSize="xs"
                  initialRating={5}
                />
              }
            />
          </Box>
        </Container>
      </main>
    </>
  );
};

export default TestimonialsPage;
