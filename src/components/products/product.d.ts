import { imageObject } from "@types";

import { ChakraProps, ThemingProps } from "@chakra-ui/react";

declare namespace IProduct {
  export interface IProps extends ChakraProps, ThemingProps {
    isNew?: boolean;
    image: imageObject;
    ratio?: number;
    title: string;
    category?: string;
    href?: string;
    brand?: string;
    price: number;
    period?: string;
    oldPrice?: number;
    currency?: string;
    // features?: string[];
    rating?: React.ReactNode;
    // button?: React.ReactNode;
    colorScheme?: string;
  }
  export interface IWithButtonProps extends IProps {
    button: React.ReactNode;
  }
  export interface IFeaturesProps extends IProps {
    features: string[];
  }
}

export { IProduct };
