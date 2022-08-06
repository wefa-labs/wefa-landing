import { ChakraProps } from "@chakra-ui/react";

declare namespace IPricing {
  export interface IProps extends ChakraProps {
    type: string;
    title: string;
    description?: string;
    colorScheme?: string;
    popularColorScheme?: string;
    popularText?: string;
    price: number;
    annuallyPrice?: number;
    annuallyText?: string;
    annuallyPeriodText?: string;
    isAnnually?: boolean;
    currency?: string;
    period: string;
    popular?: boolean;
    features: string[];
    featuresList?: TFeatures[];
    button?: React.ReactNode;
    actionText: string;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
  }
  export type TFeatures = {
    active?: boolean;
    feature: string;
  };
}

export { IPricing };
