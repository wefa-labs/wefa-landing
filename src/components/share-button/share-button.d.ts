import { IconType } from "react-icons";

import { ChakraProps, ThemingProps } from "@chakra-ui/react";

declare namespace IShareButton {
  export interface IProps extends ChakraProps, ThemingProps {
    text?: string | null | undefined;
    items: {
      icon: IconType;
      href: string;
      color: string;
      title?: string;
    }[];
  }
}

export { IShareButton };
