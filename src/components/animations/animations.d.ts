import { Variants } from "framer-motion";

import { ChakraProps, ThemingProps } from "@chakra-ui/react";

declare namespace IAnimations {
  export interface IProps extends ChakraProps, ThemingProps {
    variants?: Variants;
    childVariants?: Variants;
    children: React.ReactElement | React.ReactNode;
  }
}

export { IAnimations };
