import React, { useContext } from "react";

import { NextSeo } from "next-seo";

import { chakra, useColorModeValue } from "@chakra-ui/react";

import { ThemeColorContext } from "@definitions/context/theme";

/**
 * This is the template for you to create a new page.
 */
const DefaultPage: React.FC = () => {
  const theme = useContext(ThemeColorContext);
  const color = theme.colorScheme; // global default primary theme color
  return (
    <>
      <NextSeo
        title="Default page template"
        description="Mercury Default Page Template"
        noindex
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
      ></chakra.main>
    </>
  );
};

export default DefaultPage;
