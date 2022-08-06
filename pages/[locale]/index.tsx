import { getI18nPaths } from "@root/getI18nPaths";
import i18nextConfig from "@root/next-i18next.config";

import { useContext } from "react";

import { ParsedUrlQuery } from "querystring";

import { GetStaticProps } from "next";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { NextSeo } from "next-seo";

import {
  Button,
  chakra,
  Container,
  HStack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";

import { ThemeColorContext } from "@definitions/context/theme";

import PageTitle from "@components/page-title";
import StaticI18nLink from "@components/staticI18nLink";

interface IParams extends ParsedUrlQuery {
  locale: string;
}

const Home: React.FC = (): JSX.Element => {
  // const router = useRouter();
  const theme = useContext(ThemeColorContext);
  const color = theme.colorScheme; // global default primary theme color
  const { t } = useTranslation("home");

  return (
    <>
      <NextSeo
        title={t("page.lang.title", "We are a full stack agency")}
        description={t("page.lang.intro")}
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
        <PageTitle title={t("page.lang.title")}>
          <Text textAlign="center" fontSize="xl" maxWidth="800px">
            {/* eslint-disable-next-line prettier/prettier */}
            {t("page.lang.intro", "We develop digital design products for startups and enterprises that will save you thousands of design hours and allow you to focus on your products instead of design.")}
          </Text>
        </PageTitle>
        <Container maxW="container.md">
          <HStack py={10} justify="center" spacing={4}>
            <Text fontWeight="600">
              {t("common:language.change", "Change language")}
            </Text>
            <StaticI18nLink href={null} locale="en">
              <Button as="a">English</Button>
            </StaticI18nLink>
            <StaticI18nLink href={null} locale="de">
              <Button as="a">Deutsch</Button>
            </StaticI18nLink>
          </HStack>
        </Container>
      </chakra.main>
    </>
  );
};

export const getStaticPaths = () => ({
  fallback: false,
  paths: getI18nPaths(),
});

export const getStaticProps: GetStaticProps = async (context) => {
  const { locale } = context.params as IParams;
  return {
    props: {
      ...(await serverSideTranslations(
        locale,
        ["common", "home"],
        i18nextConfig,
      )),
    },
  };
};

export default Home;
