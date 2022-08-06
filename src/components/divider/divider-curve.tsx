import { memo } from "react";

import { chakra, useToken, useColorModeValue } from "@chakra-ui/react";

import { IDivider } from "./divider";

const DividerCurve: React.FC<IDivider.IProps> = ({
  position = "top",
  flip = false,
  invert = false,
  asymmetric = false,
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

  const pathAsymmetric = invert
    ? "M741,116.23C291,117.43,0,27.57,0,6V120H1200V6C1200,27.93,1186.4,119.83,741,116.23Z"
    : "M0,0V6c0,21.6,291,111.46,741,110.26,445.39,3.6,459-88.3,459-110.26V0Z";

  const path = invert
    ? "M600,112.77C268.63,112.77,0,65.52,0,7.23V120H1200V7.23C1200,65.52,931.37,112.77,600,112.77Z"
    : "M0,0V7.23C0,65.52,268.63,112.77,600,112.77S1200,65.52,1200,7.23V0Z";

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
        width={width ? `calc(${width} + 1.5px)` : "full"}
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
        {...rest}
      >
        <path
          d={asymmetric ? pathAsymmetric : path}
          fill={color ? useToken("colors", color as string) : fillColor}
        />
      </chakra.svg>
    </chakra.div>
  );
};

export default memo(DividerCurve);
