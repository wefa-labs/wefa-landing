import React, { useState, useContext } from "react";

import { NextSeo } from "next-seo";

import {
  chakra,
  Container,
  Flex,
  SimpleGrid,
  Stack,
  Text,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";

import { ThemeColorContext } from "@definitions/context";

import { Section, SectionHeading, ColorSelector } from "@components/common";
import Highlight from "@components/highlight";
import PageTitle from "@components/page-title";
import { examplePlansData } from "@components/pricing";
import { PricingSimple } from "@components/pricing/pricing-simple";
import { PricingSimpleCard } from "@components/pricing/pricing-simple-card";

const PricingPage: React.FC = (): JSX.Element => {
  const theme = useContext(ThemeColorContext);
  const globalColor = theme.colorScheme; // global default primary theme color
  const [color, setColor] = useState(globalColor);

  // Pricing Button Action
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const pricingButtonAct = (event: React.MouseEvent<HTMLButtonElement>) => {
    // console.log("Event", event.target);
    /* Do the operation here. */
  };

  return (
    <>
      <NextSeo
        title="Pricing Component"
        description="Pricing Component Examples"
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
          title="Pricing Component"
          body={
            <Text as="div">
              On this page, you will find{" "}
              <Text as="div" display="inline-block" color="green.400">
                <Highlight strokeWidth={2}>
                  <b>4 examples</b>
                </Highlight>
              </Text>{" "}
              of pricing component that you can easily use on your pages.
            </Text>
          }
        />
        {/* ColorSelector */}
        <Section>
          <Container maxW="container.xl">
            <ColorSelector
              initColor={color}
              onClick={(e) => setColor(e.currentTarget.name)}
            />
          </Container>
        </Section>

        <VStack align="stretch" spacing={[10, 20, 32]}>
          {/* Pricing Card */}
          <Section mt={0}>
            <Container maxW="container.xl">
              <SectionHeading>Pricing Card</SectionHeading>
              <Flex justify="center">
                <PricingSimpleCard
                  type="basic"
                  title="Basic Plan"
                  colorScheme={color}
                  price={10}
                  annuallyPrice={100}
                  // isAnnually
                  period="mo."
                  description="Good for start"
                  annuallyText="Pay annually and take advantage of the discount"
                  actionText="Start your trial"
                  onClick={pricingButtonAct}
                  rounded="xl"
                  boxShadow={"2xl"}
                  features={[]}
                  featuresList={[
                    { feature: "1.000 page views" },
                    { feature: "10 automation executions" },
                    { feature: "10 identified users" },
                    { active: false, feature: "All features" },
                  ]}
                />
              </Flex>
            </Container>
          </Section>

          {/* Pricing Card Examples */}
          <Section>
            <Container maxW="container.xl">
              <SectionHeading>Pricing Card Examples</SectionHeading>
              <Stack
                direction={["column", "column", "row"]}
                justifyContent="center"
                alignItems="center"
                spacing={10}
              >
                <PricingSimpleCard
                  // mt={10}
                  type="hobby"
                  title="Hobby"
                  price={29}
                  period="mo."
                  description="Suitable for beginners"
                  annuallyText="Billed Annually"
                  annuallyPrice={129}
                  actionText="Start your trial"
                  onClick={pricingButtonAct}
                  features={[
                    "1.000 page views",
                    "10 automation executions",
                    "10 identified users",
                    "All features",
                  ]}
                />
                <PricingSimpleCard
                  boxShadow={"2xl"}
                  colorScheme="purple"
                  popularColorScheme="pink"
                  type="freelance"
                  popular
                  title="Freelance"
                  price={39}
                  period="mo."
                  description="Suitable for Freelancers"
                  annuallyText="Billed Annually"
                  annuallyPrice={129}
                  actionText="Start your trial"
                  onClick={pricingButtonAct}
                  features={[
                    "1.000 page views",
                    "10 automation executions",
                    "10 identified users",
                    "All features",
                  ]}
                />
                <PricingSimpleCard
                  type="business"
                  title="Business"
                  colorScheme="yellow"
                  popularColorScheme="orange"
                  price={139}
                  period="mo."
                  description="Suitable for beginners"
                  annuallyText="Billed Annually"
                  annuallyPrice={129}
                  actionText="Start your trial"
                  onClick={pricingButtonAct}
                  features={[
                    "1.000 page views",
                    "10 automation executions",
                    "10 identified users",
                    "All features",
                  ]}
                />
              </Stack>
            </Container>
          </Section>

          {/* Pricing Plan Usage */}
          <Section>
            <Container maxW="container.xl">
              <SectionHeading>Pricing Plan Usage</SectionHeading>
              <Flex justify="center">
                <SimpleGrid
                  // columns={{ base: 1, md: 2, lg: 4 }}
                  columns={[1, 1, 2, 4]}
                  justifyContent="center"
                  alignItems="end"
                  spacing={0}
                  boxShadow={"md"}
                  border="1px solid"
                  borderColor={useColorModeValue("gray.200", "gray.600")}
                >
                  <PricingSimpleCard
                    borderRightWidth={{ base: 0, md: "1px" }}
                    borderColor={useColorModeValue("gray.200", "gray.600")}
                    rounded="0"
                    type="starter"
                    title="Starter Plan"
                    colorScheme={color}
                    price={9}
                    currency="€"
                    annuallyPrice={90}
                    period="month"
                    description="Suitable for beginners"
                    annuallyText="Billed Annually"
                    actionText="Start your trial"
                    onClick={pricingButtonAct}
                    boxShadow={"0"}
                    features={[]}
                    featuresList={[
                      { feature: "1.000 page views" },
                      { feature: "10 automation executions" },
                      { feature: "5 identified users" },
                      { active: false, feature: "Unlimited boards" },
                      {
                        active: false,
                        feature: "Advanced reporting & analytics",
                      },
                      { active: false, feature: "All features" },
                    ]}
                  />
                  <PricingSimpleCard
                    borderRightWidth={{ base: 0, md: "1px" }}
                    borderColor={useColorModeValue("gray.200", "gray.600")}
                    rounded="0"
                    type="basic"
                    title="Basic Plan"
                    colorScheme={color}
                    price={19}
                    currency="€"
                    annuallyPrice={190}
                    period="month"
                    description="Suitable for freelancers"
                    annuallyText="Billed Annually"
                    actionText="Purchase Now"
                    onClick={pricingButtonAct}
                    boxShadow={"0"}
                    features={[]}
                    featuresList={[
                      { feature: "5.000 page views" },
                      { feature: "25 automation executions" },
                      { feature: "10 identified users" },
                      { feature: "Unlimited boards" },
                      {
                        active: false,
                        feature: "Advanced reporting & analytics",
                      },
                      { active: false, feature: "All features" },
                    ]}
                  />
                  <PricingSimpleCard
                    borderRightWidth={{ base: 0, md: "1px" }}
                    borderColor={useColorModeValue("gray.200", "gray.600")}
                    rounded="0"
                    type="pro"
                    title="Pro Plan"
                    popular
                    popularColorScheme="purple"
                    colorScheme={"blue"}
                    price={39}
                    currency="€"
                    annuallyPrice={390}
                    period="month"
                    description="Suitable for professionals"
                    annuallyText="Billed Annually"
                    actionText="Purchase Now"
                    onClick={pricingButtonAct}
                    boxShadow={"0"}
                    features={[]}
                    featuresList={[
                      { feature: "10.000 page views" },
                      { feature: "50 automation executions" },
                      { feature: "20 identified users" },
                      { feature: "Unlimited boards" },
                      { feature: "Advanced reporting & analytics" },
                      { active: false, feature: "All features" },
                    ]}
                  />
                  <PricingSimpleCard
                    type="business"
                    title="Business Plan"
                    rounded="0"
                    colorScheme={color}
                    price={139}
                    currency="€"
                    annuallyPrice={1399}
                    period="month"
                    description="Suitable for companies"
                    annuallyText="Billed Annually"
                    actionText="Purchase Now"
                    onClick={pricingButtonAct}
                    boxShadow={"0"}
                    features={[]}
                    featuresList={[
                      { feature: "15.000 page views" },
                      { feature: "100 automation executions" },
                      { feature: "30 identified users" },
                      { feature: "Unlimited boards" },
                      { feature: "Advanced reporting & analytics" },
                      { feature: "All features" },
                    ]}
                  />
                </SimpleGrid>
              </Flex>
            </Container>
          </Section>

          {/* PricingSimple Component */}
          <Section>
            <Container maxW="container.xl">
              <SectionHeading>PricingSimple Component</SectionHeading>
              <PricingSimple
                title="Plans that fit your need"
                description="Start with 14-day free trial. No credit card needed. Cancel at anytime."
                plans={examplePlansData}
                colorScheme={color}
              />
            </Container>
          </Section>
        </VStack>
      </chakra.main>
    </>
  );
};

export default PricingPage;
