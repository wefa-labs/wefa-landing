import { memo } from "react";

import Slider from "react-slick";
// Import css files
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

import { ChevronRightIcon, ChevronLeftIcon } from "@chakra-ui/icons";
import { Box, useColorModeValue } from "@chakra-ui/react";

import { ICarousel } from "./carousel";

const ICON_SIZE = "32px";
const DEFAULT_COLOR = "gray";

export const CustomPrevArrow: React.FC<ICarousel.ICustomArrowProps> = ({
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  className,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  style,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  currentSlide,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  slideCount,
  children,
  colorScheme = DEFAULT_COLOR,
  onClick,
  height,
  width,
  iconSize = ICON_SIZE,
  ...rest
}): JSX.Element => {
  return (
    <Box
      pos="absolute"
      top={`calc(50% - ${height ? height : iconSize}/2)`}
      left="-4px"
      display="flex"
      // align="center"
      // justify="center"
      width={width ? width : iconSize}
      height={height ? height : iconSize}
      p={0}
      cursor="pointer"
      transition="all 250ms ease-in-out"
      zIndex="docked"
      onClick={onClick}
      rounded="full"
      color={useColorModeValue(`${colorScheme}.400`, `${colorScheme}.100`)}
      bg={useColorModeValue(`${colorScheme}.100`, `${colorScheme}.600`)}
      _hover={{
        bg: useColorModeValue(`${colorScheme}.200`, `${colorScheme}.400`),
        color: useColorModeValue(`${colorScheme}.500`, `${colorScheme}.200`),
        transform: "scale(1.2)",
        transformOrigin: "center",
      }}
      {...rest}
    >
      {children ? (
        children
      ) : (
        <ChevronLeftIcon width={iconSize} height={iconSize} />
      )}
    </Box>
  );
};

export const CustomNextArrow: React.FC<ICarousel.ICustomArrowProps> = ({
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  className,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  style,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  currentSlide,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  slideCount,
  children,
  colorScheme = DEFAULT_COLOR,
  onClick,
  height,
  width,
  iconSize = ICON_SIZE,
  ...rest
}) => {
  return (
    <Box
      top={`calc(50% - ${height ? height : iconSize}/2)`}
      right="-4px"
      width={width ? width : iconSize}
      height={height ? height : iconSize}
      p={0}
      pos="absolute"
      display="flex"
      alignItems="center"
      justifyContent="center"
      cursor="pointer"
      transition="all 250ms ease-in-out"
      zIndex="docked"
      onClick={onClick}
      rounded="full"
      color={useColorModeValue(`${colorScheme}.400`, `${colorScheme}.100`)}
      bg={useColorModeValue(`${colorScheme}.100`, `${colorScheme}.600`)}
      _hover={{
        bg: useColorModeValue(`${colorScheme}.200`, `${colorScheme}.400`),
        color: useColorModeValue(`${colorScheme}.500`, `${colorScheme}.200`),
        transform: "scale(1.2)",
        transformOrigin: "center",
      }}
      {...rest}
    >
      {children ? (
        children
      ) : (
        <ChevronRightIcon width={iconSize} height={iconSize} />
      )}
    </Box>
  );
};

/**
 * Default responsive carousel settings
 */
const defaultSettings = {
  dots: true,
  arrows: true,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 4,
  responsive: [
    {
      breakpoint: 1116,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
        arrows: true,
      },
    },
    {
      breakpoint: 864,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 540,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      },
    },
  ],
  nextArrow: <CustomNextArrow />,
  prevArrow: <CustomPrevArrow />,
};

const CarouselDefault: React.FC<ICarousel.IProps> = ({
  settings,
  colorScheme = DEFAULT_COLOR,
  sx,
  children,
}): JSX.Element => {
  // settings = settings ?? defaultSettings;

  const carouselSettings = Object.assign({}, defaultSettings, settings);

  const defaultSx = {
    ".slick-slider": {
      // bg: "red.50",
      // rounded: "full",
    },
    ".slick-track": {
      display: "flex",
      alignItems: "center",
    },
    ".slick-list": {
      cursor: ["move", "grab", "-moz-grab", "-webkit-grab"],
      _active: {
        cursor: ["grabbing", "-moz-grabbing", "-webkit-grabbing"],
      },
    },
    ".slick-prev, .slick-next": {
      _before: {
        color: useColorModeValue(`${colorScheme}.400`, `${colorScheme}.100`),
      },
    },
    ".slick-dots li button": {
      transition: "all 250ms ease-in-out",
      _before: {
        transition: "all 250ms ease-in-out",
        color: useColorModeValue(`${colorScheme}.400`, `${colorScheme}.100`),
      },
    },
  };

  const CarouselSx = Object.assign({}, defaultSx, sx);

  return (
    <Box sx={CarouselSx}>
      <Slider {...carouselSettings}>{children}</Slider>
    </Box>
  );
};

export default memo(CarouselDefault);
