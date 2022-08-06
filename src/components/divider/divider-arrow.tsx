import { memo } from "react";

import { chakra, useToken, useColorModeValue } from "@chakra-ui/react";

import { IDivider } from "./divider";

const DividerArrow: React.FC<IDivider.IProps> = ({
  position = "top",
  flip = false,
  invert = false,
  // asymmetric = false,
  height,
  width,
  color,
  ...rest
}): JSX.Element => {
  const [white, gray800] = useToken("colors", ["white", "gray.800"]);
  const fillColor = useColorModeValue(white, gray800);

  const r180deg = position === "bottom" ? "rotate(180deg)" : undefined;
  const rotateY = flip ? "rotateY(180deg)" : undefined;
  const rInvert = invert ? " rotate(180deg)" : undefined;

  const transform = [r180deg, rotateY, rInvert].join(" ");

  const path = invert
    ? "M649.97 0L599.91 54.12 550.03 0 0 0 0 120 1200 120 1200 0 649.97 0z"
    : "M649.97 0L550.03 0 599.91 54.12 649.97 0z";

  return (
    <chakra.div
      sx={{
        position: "absolute",
        width: "100%",
        overflow: "hidden",
        left: 0,
        top: position === "top" ? 0 : undefined,
        bottom: position === "bottom" ? 0 : undefined,
        lineHeight: 0,
      }}
      // transform={position === "bottom" ? "rotate(180deg)" : undefined}
      transform={transform}
      zIndex={0}
    >
      <chakra.svg
        minHeight="full"
        height={height}
        width={width ? `calc(${width})` : "full"}
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
        {...rest}
      >
        <path
          d={path}
          fill={color ? useToken("colors", color as string) : fillColor}
        />
      </chakra.svg>
    </chakra.div>
  );
};

export default memo(DividerArrow);
