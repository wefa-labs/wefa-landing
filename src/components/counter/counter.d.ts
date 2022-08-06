import React from "react";

import { ChakraProps, ThemingProps } from "@chakra-ui/react";

declare namespace ICounter {
  export interface IProps extends ChakraProps, ThemingProps {
    children?: React.ReactNode;
    from: number;
    to: number;
    decimals?: number;
    duration?: number;
    delay?: number;
    // Transition
    type?: "tween" | "spring";
    stiffness?: number;
    damping?: number;
    mass?: number;
  }
}
export { ICounter };
