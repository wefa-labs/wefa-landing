import { IconType } from "react-icons/lib";

import { ChakraProps, ThemingProps } from "@chakra-ui/system";

declare namespace INavbar {
  export interface IProps extends ChakraProps, ThemingProps {
    logo?: React.ReactNode | undefined;
    items?: IItem[] | undefined;
    startItems?: React.ReactNode | undefined;
    endItems?: React.ReactNode | undefined;
    isOnline?: boolean;
    isOverlay?: boolean;
    isDark?: boolean;
    children?: React.ReactNode;
    // colorScheme?: string;
    // variant?: string;
  }

  export interface IItem extends ChakraProps, ThemingProps {
    title: string;
    href: string | UrlObject;
    description?: string;
    icon?: IconType;
    subitems?: IItem[];
  }

  // interface I_Item {
  //   title: string;
  //   href: string;
  //   description?: string;
  //   icon?: IconType;
  //   subitems?: IItem[];
  // }
}

export { INavbar };
