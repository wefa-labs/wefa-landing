import { ChakraProps, ThemingProps } from "@chakra-ui/react";

declare namespace IArticle {
  export interface IProps extends ChakraProps, ThemingProps {
    author?: string;
    authorHref?: string;
    avatar?: imageObject;
    body: string;
    href: string;
    meta: string;
    tag?: string;
    tagHref?: string;
    title: string;
    image?: imageObject;
    subtitle?: string;
  }
  export interface IWithImage {
    body: string;
    footer?: React.ReactNode;
    href: string;
    image: imageObject;
    title: string;
    subtitle?: string;
  }
  export interface ISlideshow extends ChakraProps, ThemingProps {
    duration?: number;
    items: {
      title: string;
      image: imageObject;
      href?: string;
    }[];
  }
}

export { IArticle };
