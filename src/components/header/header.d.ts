import { ChakraProps } from "@chakra-ui/react";

declare namespace IHeader {
  export interface IProps extends ChakraProps {
    isSticky?: boolean;
    isDark?: boolean;
  }
}

export { IHeader };
