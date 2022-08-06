import { memo } from "react";

import { chakra, useToken, useColorModeValue } from "@chakra-ui/react";

import { IDivider } from "./divider";

const DividerTriangle: React.FC<IDivider.IProps> = ({
  position = "top",
  flip = false,
  asymmetric = false,
  height,
  width,
  invert,
  color,
  ...rest
}): JSX.Element => {
  const [white, gray800] = useToken("colors", ["white", "gray.800"]);
  const fillColor = useColorModeValue(white, gray800);

  const r180deg = position === "bottom" ? "rotate(180deg)" : undefined;
  const rflipped = flip ? "rotateY(180deg)" : undefined;
  const rInvert = invert ? " rotate(180deg)" : undefined;

  const path = invert
    ? "M598.97 114.72L0 0 0 120 1200 120 1200 0 598.97 114.72z"
    : "M1200 0L0 0 598.97 114.72 1200 0z";

  const pathAsymmetric = invert
    ? "M892.25 114.72L0 0 0 120 1200 120 1200 0 892.25 114.72z"
    : "M1200 0L0 0 892.25 114.72 1200 0z";

  const transform = [r180deg, rflipped, rInvert].join(" ");

  return (
    <chakra.div
      pos="absolute"
      width="full"
      overflow="hidden"
      left={0}
      top={position === "top" ? 0 : undefined}
      bottom={position === "bottom" ? 0 : undefined}
      lineHeight={0}
      transform={transform}
      zIndex={0}
      {...rest}
    >
      <chakra.svg
        minHeight="full"
        height={height}
        width={width ? `calc(${width})` : "full"}
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
      >
        <path
          d={asymmetric ? pathAsymmetric : path}
          fill={color ? useToken("colors", color as string) : fillColor}
        />
      </chakra.svg>
    </chakra.div>
  );
};

export default memo(DividerTriangle);
