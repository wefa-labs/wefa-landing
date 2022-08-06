import { memo } from "react";

import { chakra, useToken, useColorModeValue } from "@chakra-ui/react";

import { IDivider } from "./divider";

const DividerWings: React.FC<IDivider.IProps> = ({
  position = "top",
  invert = false,
  height,
  width,
  color,
  ...rest
}): JSX.Element => {
  const [white, gray800] = useToken("colors", ["white", "gray.800"]);
  const fillColor = useColorModeValue(white, gray800);

  const r180deg = position === "bottom" ? "rotate(180deg)" : undefined;
  const rInvert = invert ? " rotate(180deg)" : undefined;

  const transform = [r180deg, rInvert].join(" ");

  const path = invert
    ? "M602.45,3.86h0S572.9,116.24,281.94,120H923C632,116.24,602.45,3.86,602.45,3.86Z"
    : "M1200,0H0V120H281.94C572.9,116.24,602.45,3.86,602.45,3.86h0S632,116.24,923,120h277Z";

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

export default memo(DividerWings);
