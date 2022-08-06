import {
  UseAccordionProps,
  LayoutProps,
  SpaceProps,
  ThemingProps,
  ChakraProps,
} from "@chakra-ui/react";

declare namespace IAccordion {
  export interface IProps extends UseAccordionProps, LayoutProps, SpaceProps {
    isPlus?: boolean;
    accordions: T_AccordionItems[];
    accordionButtonProps?: AccordionCustomProps;
    accordionPanelProps?: AccordionCustomProps;
  }
  export type T_AccordionItems = {
    title: string;
    body: string | React.ReactNode;
    isDisabled?: boolean;
  };

  interface AccordionCustomProps extends ChakraProps, ThemingProps {}
}

export { IAccordion };
