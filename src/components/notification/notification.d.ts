import { IconType } from "react-icons";

import { ThemingProps } from "@chakra-ui/react";

declare namespace INotification {
  export interface IProps extends ThemingProps {
    title: string;
    message: string;
    icon?: IconType;
  }
  export interface ICTAProps extends IProps, ThemingProps {
    buttons: React.ReactNode;
    isDivided?: boolean;
  }
}

export { INotification };
