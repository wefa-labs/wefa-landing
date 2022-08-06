import { ChakraProps } from "@chakra-ui/react";

declare namespace IBlob {
  export interface IProps extends ChakraProps {
    animateColor?: boolean;
    isColorAnimated?: boolean;
    isAnimated?: boolean;
    numPoints?: number;
    startColor?: string;
    stopColor?: string;
  }
}

export { IBlob };
