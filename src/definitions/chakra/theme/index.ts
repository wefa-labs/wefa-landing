import { StepsStyleConfig as Steps } from "chakra-ui-steps";

import { extendTheme, ThemeConfig } from "@chakra-ui/react";

import Table from "./components/table";
import colors from "./foundations/colors";
import fontSizes from "./foundations/fontSizes";
import styles from "./styles";

/**
 * This file is generated for providing a custom theme to Chakra UI
 *
 * To learn more about custom themes
 * please visit https://chakra-ui.com/docs/getting-started#add-custom-theme-optional
 */

// Color mode config
const config: ThemeConfig = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

const overrides = {
  ...config,
  ...styles,
  colors,
  fontSizes,
  components: {
    Steps,
    Table,
  },
};

const theme = extendTheme(overrides);

export default theme;
