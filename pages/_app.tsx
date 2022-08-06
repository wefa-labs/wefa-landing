import { CacheProvider, EmotionCache } from "@emotion/react";

import "focus-visible/dist/focus-visible";

import { appWithTranslation } from "next-i18next";
import { DefaultSeo } from "next-seo";
import { AppProps } from "next/app";

import {
  ChakraProvider,
  ColorModeScript,
  useColorModeValue,
} from "@chakra-ui/react";

import theme from "@definitions/chakra/theme";
import { ThemeColorProvider } from "@definitions/context/theme";
import createEmotionCache from "@definitions/utils/createEmotionCache";

import ColorModeSwitcher from "@components/color-mode-switcher";

import Layout from "@layouts/default";

import "@styles/global.scss";

import ShortcutNotificationBlock from "@blocks/shortcut-notification";

import SEO from "../next-seo.config";

type ComponentWithPageLayout = AppProps & {
  Component: AppProps["Component"] & {
    PageLayout?: React.ComponentType;
  };
  emotionCache: EmotionCache;
};

const clientSideEmotionCache = createEmotionCache();

function MercuryApp({
  Component,
  emotionCache = clientSideEmotionCache,
  pageProps,
}: ComponentWithPageLayout): JSX.Element {
  return (
    <CacheProvider value={emotionCache}>
      <ThemeColorProvider>
        <ChakraProvider theme={theme}>
          <ColorModeScript initialColorMode={theme.config.initialColorMode} />
          <DefaultSeo {...SEO} />
          {/* <Component {...pageProps} /> */}
          {Component.PageLayout ? (
            <Component.PageLayout>
              <Component {...pageProps} />
            </Component.PageLayout>
          ) : (
            <Layout>
              <Component {...pageProps} />
            </Layout>
          )}
          <ShortcutNotificationBlock />
          <ColorModeSwitcher
            pos="fixed"
            top="calc(50% - 144px / 2)"
            zIndex="sticky"
            width="60px"
            // shadow="xl"
            boxShadow="10px 0px 15px rgba(0,0,0,0.15)"
            rounded="xl"
            bg={useColorModeValue("white", "blackAlpha.900")}
          />
        </ChakraProvider>
      </ThemeColorProvider>
    </CacheProvider>
  );
}

export default appWithTranslation(MercuryApp);
