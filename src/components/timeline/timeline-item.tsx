import { isValidElement } from "react";

import {
  Circle,
  Flex,
  Heading,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";

import { ITimeline } from "./timeline";

export const Timeline: React.FC<ITimeline.IProps> = ({
  children,
  heading,
  description,
  // bg = useColorModeValue("gray.200", "gray.600"),
  color = useColorModeValue("gray.500", "gray.300"),
  iconColor = useColorModeValue("white", "whiteAlpha.700"),
  colorScheme = "gray",
  isReverse = false,
  icon,
  ...rest
}): JSX.Element => {
  const IconColor = iconColor
    ? iconColor
    : useColorModeValue(`${colorScheme}.500`, `${colorScheme}.300`);
  return (
    <Stack
      align="start"
      spacing={10}
      direction={isReverse ? "row-reverse" : "row"}
      {...rest}
    >
      <Circle
        // fontWeight={700}
        // fontSize="sm"
        zIndex="0"
        size="34px"
        bg={useColorModeValue(`${colorScheme}.400`, `${colorScheme}.600`)}
        color={IconColor}
      >
        {isValidElement(icon) ? icon : icon}
      </Circle>
      <Flex direction="column">
        {isValidElement(heading) ? (
          heading
        ) : (
          <Heading lineHeight={1.5} fontWeight="600" fontSize="xl">
            {heading}
          </Heading>
        )}
        {isValidElement(description) ? (
          description
        ) : (
          <Text color={color} fontSize="sm">
            {description}
          </Text>
        )}
        {children}
      </Flex>
    </Stack>
  );
};
