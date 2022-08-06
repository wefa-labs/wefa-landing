import { memo } from "react";

import { chakra, useToken, useColorModeValue } from "@chakra-ui/react";

import { IDivider } from "./divider";

type T_DividerWavy = Omit<IDivider.IProps, "invert">;

const DividerWavy: React.FC<T_DividerWavy> = ({
  position = "top",
  flip = false,
  color,
  height,
  width,
  ...rest
}): JSX.Element => {
  const [white, gray800] = useToken("colors", ["white", "gray.800"]);
  const fillColor = useColorModeValue(white, gray800);

  const r180deg = position === "top" ? "rotate(180deg)" : undefined;
  const rflipped = flip ? "rotateY(180deg)" : undefined;

  const transform = [r180deg, rflipped].join(" ");

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
        viewBox="0 0 1200 119"
        preserveAspectRatio="none"
        {...rest}
      >
        <path
          d="M0,119.832407 C0,119.832407 919.727891,113.854373 1199.93197,0 L1199.93197,119.832407 L0,119.832407 Z"
          opacity="0.2"
          fill={color ? useToken("colors", color as string) : fillColor}
        />
        <path
          d="M0,119.832407 C0,119.832407 919.727891,114.601627 1199.93197,14.4355932 L1199.93197,119.832407 L0,119.832407 Z"
          opacity="0.2"
          fill={color ? useToken("colors", color as string) : fillColor}
        />
        <path
          d="M0,121.103883 C0,121.103883 919.727891,116.564201 1199.93197,30.1038832 L1199.93197,121.103883 L0,121.103883 Z"
          fill={color ? useToken("colors", color as string) : fillColor}
        />
      </chakra.svg>
    </chakra.div>
  );
};

export default memo(DividerWavy);
