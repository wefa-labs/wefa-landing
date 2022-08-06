import { memo } from "react";

import { chakra, useToken, useColorModeValue } from "@chakra-ui/react";

import { IDivider } from "./divider";

type T_DividerTilt = Omit<IDivider.IProps, "invert" | "asymmetric">;

const DividerTilt: React.FC<T_DividerTilt> = ({
  position = "top",
  flip = false,
  height,
  width,
  color,
  bg, // eslint-disable-line @typescript-eslint/no-unused-vars
  ...rest
}): JSX.Element => {
  const [white, gray800] = useToken("colors", ["white", "gray.800"]);
  const fillColor = useColorModeValue(white, gray800);

  const r180deg = position === "bottom" ? "rotate(180deg)" : undefined;
  const rotateY = flip ? "rotateY(180deg)" : undefined;

  const transform = [r180deg, rotateY].join(" ");

  const path = "M1200 120L0 16.48 0 0 1200 0 1200 120z";
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

export default memo(DividerTilt);
