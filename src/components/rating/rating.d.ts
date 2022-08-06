import { ButtonProps, ChakraProps, ThemingProps } from "@chakra-ui/react";

declare namespace IRating {
  export interface IProps extends ChakraProps, ThemingProps {
    // color?: string;
    hoverColor?: string;
    initialRating: number;
    icon?: React.ReactElement;
    mode?: number;
    readonly?: boolean;
    showRating?: boolean;
    disabled?: boolean;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
    // clickAct?: React.MouseEventHandler<HTMLButtonElement>;
  }
  export interface IRatingIcon extends ButtonProps, ChakraProps, ThemingProps {
    icon?: React.ReactElement;
    // color?: string;
    hoverColor?: string;
    isActive?: boolean;
    isHover?: boolean;
    readonly?: boolean;
    value: number | string;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
    clickAct?: React.MouseEventHandler<HTMLButtonElement>;
  }
}

export { IRating };
