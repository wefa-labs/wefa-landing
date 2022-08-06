import { StackDirection, ChakraProps, ThemingProps } from "@chakra-ui/system";

declare namespace ITimeline {
  export interface IProps extends ChakraProps, ThemingProps {
    icon?: React.Element | string;
    iconColor?: string | undefined;
    heading: React.Element | string;
    description?: React.Element | string;
    direction?: StackDirection;
    isReverse?: boolean;
  }
}

declare namespace ITimelineGroup {
  export interface IProps extends ChakraProps, ThemingProps {
    isCross?: boolean;
  }
}

export { ITimelineGroup, ITimeline };
