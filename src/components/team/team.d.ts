import { IconType } from "react-icons";

import { LayoutProps, SpaceProps } from "@chakra-ui/react";

declare namespace ITeamCards {
  export interface IProps extends LayoutProps, SpaceProps {
    name: string;
    username?: string;
    occupation: string;
    bio?: string;
    avatarImage: imageObject;
    profileBg?: imageObject;
    post?: number | string;
    followers?: number | string;
    following?: number | string;
    buttons?: React.ReactNode;
    socialLinks?: T_SocialLinks[];
    menuList?: React.ReactNode;
    isOnline?: boolean;
  }
  export interface IShareProps extends IProps {
    meta?: string;
    body?: React.ReactNode | string;
    comment?: string;
    like?: string;
    image?: imageObject;
  }
  type T_SocialLinks = {
    title: string;
    href: string;
    icon?: IconType;
  };
}

export { ITeamCards };
