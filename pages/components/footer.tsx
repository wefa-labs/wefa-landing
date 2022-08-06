import { useState } from "react";

import { NextSeo } from "next-seo";

import {
  chakra,
  Container,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";

import { ColorSelector } from "@components/common";
import FooterLargeNavigationAppstore from "@components/footer/footer-large-navigation-appstore";
import FooterLargeNavigationLogoCentered from "@components/footer/footer-large-navigation-logo-centered";
import FooterLargeNavigationLogoLeft from "@components/footer/footer-large-navigation-logo-left";
import FooterLargeNavigationNewsletter from "@components/footer/footer-large-navigation-newsletter";
import FooterSimpleLogoSocial from "@components/footer/footer-simple-logo-social";
import FooterSimpleNavigation from "@components/footer/footer-simple-navigation";
import FooterSimpleNavigationLogoCentered from "@components/footer/footer-simple-navigation-logo-centered";
import FooterSimpleSocial from "@components/footer/footer-simple-social";
import Highlight from "@components/highlight";
import PageTitle from "@components/page-title";

const FooterPage: React.FC = (): JSX.Element => {
  const [color, setColor] = useState("gray");
  return (
    <>
      <NextSeo
        title="Footer component examples"
        description="Footer component examples"
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
          title="Footer Component"
          body={
            <Text as="div">
              On this page, you will find{" "}
              <Text as="div" display="inline-block" color="green.400">
                <Highlight strokeWidth={2}>
                  <b>8 examples</b>
                </Highlight>
              </Text>{" "}
              of footer component that you can easily use on your pages.
            </Text>
          }
        />

        <Stack my={20} spacing={20} direction="column" align="center">
          <ColorSelector
            initColor={color}
            onClick={(e) => setColor(e.currentTarget.name)}
          />

          <Container maxW="container.xl">
            <FooterLargeNavigationAppstore
              bg={useColorModeValue(`${color}.50`, `${color}.900`)}
            />
          </Container>

          <Container maxW="container.xl">
            <FooterLargeNavigationLogoLeft
              bg={useColorModeValue(`${color}.50`, `${color}.900`)}
            />
          </Container>

          <Container maxW="container.xl">
            <FooterLargeNavigationNewsletter
              bg={useColorModeValue(`${color}.50`, `${color}.900`)}
            />
          </Container>

          <Container maxW="container.xl">
            <FooterLargeNavigationLogoCentered
              bg={useColorModeValue(`${color}.50`, `${color}.900`)}
            />
          </Container>

          <Container maxW="container.xl">
            <FooterSimpleNavigationLogoCentered
              bg={useColorModeValue(`${color}.50`, `${color}.900`)}
            />
          </Container>

          <Container maxW="container.xl">
            <FooterSimpleSocial
              bg={useColorModeValue(`${color}.50`, `${color}.900`)}
            />
          </Container>

          <Container maxW="container.xl">
            {/* <SectionHeading>Simple Social Logo left</SectionHeading> */}
            <FooterSimpleLogoSocial
              bg={useColorModeValue(`${color}.50`, `${color}.900`)}
            />
          </Container>

          <Container maxW="container.xl">
            <FooterSimpleNavigation
              bg={useColorModeValue(`${color}.50`, `${color}.900`)}
            />
          </Container>
        </Stack>
      </chakra.main>
    </>
  );
};

export default FooterPage;
