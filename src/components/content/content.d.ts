import { ChakraProps, ThemingProps } from "@chakra-ui/react";

declare namespace IContent {
  export interface IProps extends ChakraProps, ThemingProps {
    body: IBody[];
  }
  export interface IBody extends ChakraProps, ThemingProps {
    content: string | React.Elemenet;
    heading?: string | React.Elemenet;
    image?: imageObject;
    alt?: string;
    imageDescription?: string;
    imageRatio?: number;
    images?: IImage[];
    orderedList?: string[];
    unorderedList?: string[];
    list?: string[];
    wrapper?: props;
    // order?: string[];
  }

  export interface props extends ChakraProps, ThemingProps {}

  export interface IImage extends ChakraProps, ThemingProps {
    image: imageObject;
    imageDescription: string;
    imageRatio?: number;
    alt?: string;
  }
}

export { IContent };
