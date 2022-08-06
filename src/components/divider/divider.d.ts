import { ChakraProps, ThemingProps } from "@chakra-ui/system";

declare namespace IDivider {
  export interface IProps extends ChakraProps, ThemingProps {
    position?: string | undefined;
    flip?: boolean;
    invert?: boolean;
    asymmetric?: boolean;
  }
}

export { IDivider };
