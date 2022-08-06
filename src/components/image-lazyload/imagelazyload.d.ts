import { ImgHTMLAttributes } from "react";

import { ImageProps, AspectRatioProps } from "@chakra-ui/react";

declare namespace IImageLazyload {
  export interface IProps extends ImageProps, AspectRatioProps {
    // ratio?: number;
    image?: imageObject;
    onLoadfallback?(e: boolean): void;
  }
  type NativeImageProps = ImgHTMLAttributes<HTMLImageElement>;
}

export { IImageLazyload };
