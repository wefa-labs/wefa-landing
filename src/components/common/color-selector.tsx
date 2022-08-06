import { memo } from "react";

import {
  Button,
  ChakraProps,
  VisuallyHidden,
  Tooltip,
  Circle,
  useColorModeValue,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";

import Theme from "@definitions/chakra/theme";

// Excluded colors
const excludes = [
  "current",
  "transparent",
  "white",
  "black",
  "whiteAlpha",
  "blackAlpha",
  "brand",
  "header",
  "main",
  "github",
  "discord",
];

// color order
const colorOrder: { [key: string]: number } = {
  red: -20,
  pink: -19,
  purple: -18,
  deepPurple: -17,
  indigo: -16,
  blue: -15,
  deepBlue: -14,
  lightBlue: -13,
  cyan: -12,
  teal: -11,
  green: -10,
  lightGreen: -9,
  lime: -8,
  yellow: -7,
  amber: -6,
  orange: -5,
  deepOrange: -4,
  brown: -3,
  gray: -2,
  blueGray: -1,
};

interface ISelector extends ChakraProps {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  initColor?: string | undefined;
  size?: number;
  disabledTooltip?: boolean;
}

const ColorSelector: React.FC<ISelector> = ({
  onClick,
  size = 3,
  initColor = undefined,
  disabledTooltip = false,
  ...rest
}) => {
  const colors = Object.keys(Theme.colors)
    .filter((c) => excludes.indexOf(c) === -1)
    .sort((a, b) => {
      const aOrder = colorOrder[a] ? colorOrder[a] : 0;
      const bOrder = colorOrder[b] ? colorOrder[b] : 0;
      return aOrder - bOrder;
    });

  return (
    <Wrap justify="center">
      {colors.map((color, idx) => (
        <WrapItem p={"1px"} key={idx} {...rest}>
          <Tooltip
            hasArrow
            label={color.toUpperCase()}
            rounded="full"
            placement="top"
            isDisabled={disabledTooltip}
          >
            <Button
              key={`ColorSelector--button-${color}`}
              onClick={onClick}
              data-value={color}
              name={color}
              minWidth={size}
              minHeight={size}
              height={size}
              width={size}
              display="inline-flex"
              variant="unstyled"
              transform={
                activeColor(initColor, color) ? "scale(1.5)" : undefined
              }
            >
              <Circle
                rounded={activeColor(initColor, color) ? "sm" : undefined}
                size={size}
                bg={useColorModeValue(`${color}.300`, `${color}.500`)}
              >
                <VisuallyHidden>{color}</VisuallyHidden>
              </Circle>
            </Button>
          </Tooltip>
        </WrapItem>
      ))}
    </Wrap>
  );
};

const activeColor = (initColor: string | undefined, color: string): boolean => {
  if (!initColor) return false;
  if (color == initColor) return true;
  return false;
};

export default memo(ColorSelector);
