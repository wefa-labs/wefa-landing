import { Settings, CustomArrowProps } from "@types/react-slick";

import { ChakraProps } from "@chakra-ui/react";
import { SystemStyleObject } from "@chakra-ui/styled-system";

declare namespace ICarousel {
  export interface IProps {
    colorScheme?: string;
    settings?: Settings;
    sx?: SystemStyleObject;
    children: React.ReactNode;
  }
  export interface ICustomArrowProps extends CustomArrowProps, ChakraProps {
    iconSize?: string;
    colorScheme?: string;
    children?: React.ReactNode;
  }
}

export { ICarousel };
