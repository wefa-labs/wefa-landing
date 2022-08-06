import { ChakraProps } from "@chakra-ui/react";

declare namespace ITestimonial {
  export interface IProps extends ChakraProps {
    avatarImage: imageObject;
    body: string;
    name: string;
    occupation?: string;
    title?: string;
    bgColor?: string;
    bodyColor?: string;
    titleColor?: string;
    nameColor?: string;
    occupationColor?: string;
    // backgroundImage?:
    //   | string
    //   | React.FC<React.SVGProps<SVGSVGElement>>
    //   | React.FunctionComponent<React.SVGProps<SVGSVGElement>>
    //   | React.SVGProps<SVGSVGElement>;
    rating?: React.ReactNode;
    icon?: React.ReactNode;
  }
  export interface IBackdrop extends IProps {
    backgroundImage?:
      | string
      | React.FC<React.SVGProps<SVGSVGElement>>
      | React.FunctionComponent<React.SVGProps<SVGSVGElement>>
      | React.SVGProps<SVGSVGElement>;
  }
}

export { ITestimonial };
