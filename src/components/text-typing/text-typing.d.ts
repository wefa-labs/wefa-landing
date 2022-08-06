import { ChakraProps, ThemingProps } from "@chakra-ui/react";

declare namespace ITextTyping {
  export interface IProps extends ChakraProps, ThemingProps {
    items: string[];
  }
}

export { ITextTyping };
