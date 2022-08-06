import { memo } from "react";

import { chakra, useToken, useColorModeValue } from "@chakra-ui/react";

import { IDivider } from "./divider";

type T_DividerWavyTwo = Omit<IDivider.IProps, "invert">;

const DividerWavyTwo: React.FC<T_DividerWavyTwo> = ({
  position = "top",
  flip = false,
  color,
  height,
  width = "100%",
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
        viewBox="0 0 1200 239"
        preserveAspectRatio="none"
        {...rest}
      >
        <path
          d="M752.380952,189.27619 C642.990476,208.647619 515.67619,173.92381 415.619048,166.952381 C420.609524,167.765079 425.688889,168.660317 430.857143,169.638095 C527.638095,181.066667 646.666667,215.504762 752.304762,196.8 C891.428571,172.228571 989.714286,22.6285714 1200,16.952381 L1200,0 C962.704762,7.61904762 891.428571,164.704762 752.380952,189.27619 Z"
          opacity="0.3"
          fill={color ? useToken("colors", color as string) : fillColor}
        />
        <path
          d="M430.952381,169.52381 C521.67619,186.666667 644.07619,227.219048 752.380952,208.057143 C891.295238,183.466667 993.542857,60.5142857 1200,68.0952381 L1200,16.8761905 C989.714286,22.5904762 891.428571,172.133333 752.380952,196.72381 C646.761905,215.428571 527.733333,181.085714 430.952381,169.52381 Z"
          opacity="0.63"
          fill={color ? useToken("colors", color as string) : fillColor}
        />
        <path
          d="M115.847619,234.057143 L118.095238,234.285714 C124.053012,234.76807 130.049422,234.357181 135.885714,233.066667 C129.228055,233.744224 122.539644,234.074829 115.847619,234.057143 Z"
          fill={color ? useToken("colors", color as string) : fillColor}
        />
        <path
          d="M115.847619,234.057143 L118.095238,234.285714 C124.053012,234.76807 130.049422,234.357181 135.885714,233.066667 C129.228055,233.744224 122.539644,234.074829 115.847619,234.057143 Z"
          opacity="0.35"
          fill={color ? useToken("colors", color as string) : fillColor}
        />
        <path
          d="M758.095238,205.409524 C651.142857,224.590476 530.304762,183.961905 440.72381,166.933333 C435.561905,165.942857 430.533333,165.028571 425.6,164.247619 C412.098628,161.912699 398.454796,160.493587 384.761905,160 C380.838095,159.885714 377.028571,159.885714 373.333333,160 C371.980952,160 370.685714,160.152381 369.352381,160.228571 C268.780952,165.809524 216.32381,215.047619 154.285714,229.980952 C148.228804,231.422394 142.081496,232.45331 135.885714,233.066667 C130.049422,234.357181 124.053012,234.76807 118.095238,234.285714 L115.847619,234.038095 C59.752381,234 0,212.990476 0,212.990476 L0,239.466667 L1200,239.466667 L1200,65.447619 C996.190476,57.8857143 895.238095,180.838095 758.095238,205.409524 Z"
          fill={color ? useToken("colors", color as string) : fillColor}
        />
        <path
          d="M0,194.552381 L0,213.6 C158.095238,278.361905 241.580952,186.933333 361.904762,167.885714 L363.809524,160.266667 C279.238095,172.190476 278.095238,202.171429 186.666667,219.314286 C104.342857,234.761905 57.1428571,215.504762 0,194.552381 Z"
          opacity="0.3"
          fill={color ? useToken("colors", color as string) : fillColor}
        />
        <path
          d="M0,198.361905 L0,217.409524 C41.9047619,234.552381 78.5333333,236.952381 112,236.457143 C204.914286,235.009524 273.447619,185.695238 361.904762,171.695238 L363.809524,164.07619 C279.238095,176 278.095238,205.980952 186.666667,223.12381 C104.342857,238.571429 57.1428571,219.314286 0,198.361905 Z"
          opacity="0.3"
          fill={color ? useToken("colors", color as string) : fillColor}
        />
      </chakra.svg>
    </chakra.div>
  );
};

export default memo(DividerWavyTwo);
