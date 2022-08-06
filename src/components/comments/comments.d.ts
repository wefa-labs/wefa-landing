import { ChakraProps, ThemingProps } from "@chakra-ui/react";

declare namespace IComments {
  export interface IProps extends ChakraProps, ThemingProps {
    title?: string | string[];
    hasCount?: boolean;
    comments: IComment[];
  }
  export interface IComment {
    id: string;
    badge?: string;
    badgeColorScheme?: string;
    title?: string;
    meta?: string;
    body: string;
    avatar: imageObject;
    author: string;
    authorHref?: string;
    comments?: IComment[];
    hasAdmin?: boolean;
  }

  export interface IForm extends ChakraProps, ThemingProps {
    title?: string;
  }
}

export { IComments };
