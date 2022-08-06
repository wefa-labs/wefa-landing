import React, { useState } from "react";

import { StarIcon } from "@chakra-ui/icons";
import {
  Text,
  Flex,
  HStack,
  useColorModeValue,
  IconButton,
} from "@chakra-ui/react";

import { IRating } from "./rating";

const DEFAULT_MODE = 5;

const RatingIcon: React.FC<IRating.IRatingIcon> = ({
  isHover = false,
  isActive = false,
  readonly = false,
  color,
  hoverColor,
  colorScheme = "yellow",
  icon,
  value,
  fontSize,
  clickAct,
  ...rest
}): JSX.Element => {
  const inActiveColor = useColorModeValue("gray.300", "whiteAlpha.400");
  let activeColor: string = color
    ? (color as string)
    : useColorModeValue(`${colorScheme}.500`, `${colorScheme}.600`);
  if (colorScheme === "gray") {
    activeColor = useColorModeValue(`${colorScheme}.500`, `${colorScheme}.400`);
  }
  const hover = hoverColor
    ? hoverColor
    : useColorModeValue(`${colorScheme}.400`, `${colorScheme}.400`);

  let iconColor: string = inActiveColor;
  if (isActive) iconColor = activeColor;
  if (isHover) iconColor = hover;

  return (
    <>
      {readonly ? (
        <Flex fontSize={fontSize} color={iconColor} w="1em" h="1em" minW="1em">
          {icon}
        </Flex>
      ) : (
        <IconButton
          display="inline-flex"
          fontSize={fontSize}
          onClick={clickAct}
          variant="unstyled"
          aria-label={`Rating ${value}`}
          data-value={value}
          icon={icon}
          color={iconColor}
          w="1em"
          h="1em"
          minW="1em"
          transform={isHover ? "scale(1.15)" : "scale(1)"}
          _active={{
            transform: "scale(1.3)",
          }}
          {...rest}
        />
      )}
    </>
  );
};

export const RatingDefault: React.FC<IRating.IProps> = ({
  initialRating,
  color,
  hoverColor,
  colorScheme,
  mode = DEFAULT_MODE,
  fontSize = "1em",
  icon,
  disabled = false,
  showRating = false,
  ...rest
}): JSX.Element => {
  // const {
  //   initialRating,
  //   color,
  //   colorScheme,
  //   mode = DEFAULT_MODE,
  //   fontSize = "1em",
  //   icon,
  //   disabled = false,
  //   showRating = false,
  //   ...rest
  // } = props;
  const [rating, setRating] = useState(initialRating ?? 0);
  const [hover, setHover] = useState(0);
  const ratingTextColor = useColorModeValue("gray.400", "whiteAlpha.400");
  return (
    <HStack data-testid="RatingDefault" spacing="3px">
      {Array(mode)
        .fill(null)
        .map((_, idx) => (
          <RatingIcon
            fontSize={fontSize}
            icon={icon ?? <StarIcon />}
            onClick={() => setRating(idx + 1)}
            isActive={idx + 1 <= rating}
            value={idx + 1}
            color={color}
            colorScheme={colorScheme}
            hoverColor={hoverColor}
            key={`rating-active-id-${idx}`}
            onMouseEnter={() => setHover(idx + 1)}
            onMouseLeave={() => setHover(0)}
            isHover={idx + 1 <= hover}
            disabled={disabled}
            {...rest}
          />
        ))}
      {showRating && (
        <Text color={ratingTextColor} fontSize="xs">
          ({rating.toFixed(1)})
        </Text>
      )}
    </HStack>
  );
};
