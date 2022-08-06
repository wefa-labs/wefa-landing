import {
  render as baseRender,
  RenderOptions,
  RenderResult,
} from "@testing-library/react";

import React, { ReactElement } from "react";

import { ChakraProvider } from "@chakra-ui/react";

import theme from "@definitions/chakra/theme";
import { ThemeColorProvider } from "@definitions/context";

/**
 * Custom renderer example with @testing-library/react
 * You can customize it to your needs.
 *
 * To learn more about customizing renderer,
 * please visit https://testing-library.com/docs/react-testing-library/setup
 */

export const AllTheProviders: React.FC = ({ children }) => {
  return (
    <ThemeColorProvider>
      <ChakraProvider theme={theme}>{children}</ChakraProvider>
    </ThemeColorProvider>
  );
};

const render = (
  ui: ReactElement,
  options?: Omit<RenderOptions, "queries">,
): RenderResult =>
  baseRender(ui, { wrapper: AllTheProviders, ...options }) as RenderResult;

// re-export everything
// eslint-disable-next-line import/export
export * from "@testing-library/react";

// override render method
// eslint-disable-next-line import/export
export { render };
