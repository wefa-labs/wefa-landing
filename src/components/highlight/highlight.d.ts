import { ReactNode } from "react";

import { IconProps } from "@chakra-ui/react";

declare namespace IHighlight {
  export interface IProps extends IconProps {
    children: ReactNode;
    strokeWidth?: number;
    strokeColor?: string;
    checked?: boolean;
    type?: "circle" | "mark" | "underscore";
  }
}
