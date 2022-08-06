import { ChakraProps, StackProps, SimpleGridProps } from "@chakra-ui/react";

declare namespace IFeatures {
  export interface IProps extends ChakraProps {
    title: string;
    tag?: React.ReactNode;
    body?: string | React.ReactNode;
    image: imageObject;
    features: IFeatureItemProps[];
    // children: React.ReactNode;
  }

  export interface IFeaturesCard extends ChakraProps, StackProps {
    header?: React.ReactNode;
    body: React.ReactNode;
    footer?: React.ReactNode;
  }

  export interface IFeatureItemProps extends ChakraProps {
    text: string;
    iconBg?: string;
    icon?: React.ReactElement;
  }
  export interface IFeaturesGridProps extends ChakraProps, SimpleGridProps {
    icon?: React.ReactNode;
    // columns?: number[];
    bodyColor?: string;
    features: {
      icon?: React.ReactNode;
      title: string;
      text: string;
    }[];
  }
}

export { IFeatures };
