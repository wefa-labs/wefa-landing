import { ChakraProps } from "@chakra-ui/react";

declare namespace IHero {
  export interface IProps extends ChakraProps {
    heading: string | React.ReactNode;
    body?: string | React.ReactNode;
    buttons?: React.ReactNode;
    colorScheme?: string;
    textColor?: string;
  }
  export interface IAnnotation extends IProps {
    annotation?: React.ReactNode;
    annotationColor?: string;
  }
  export interface IMedia extends IProps {
    image: imageObject;
    video?: string;
    altText?: string;
  }
}

export { IHero };
