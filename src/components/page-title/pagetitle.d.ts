import { ChakraProps, ThemingProps } from "@chakra-ui/react";
import { SystemProps } from "@chakra-ui/system";

declare namespace IPagetitle {
  export interface IProps extends ChakraProps, ThemingProps {
    title: string | React.ReactNode;
    body?: string | React.ReactNode;
    children?: React.ReactNode;
    align?: SystemProps["alignItems"];
    header?: React.ReactElement;
    footer?: React.ReactElement;
  }
}

export { IPagetitle };
