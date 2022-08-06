import { IoCheckmarkCircle } from "@react-icons";

import React from "react";

import { chakra, Box, Icon, Flex, useColorModeValue } from "@chakra-ui/react";

import { INotification } from "./notification";

export const Notification: React.FC<INotification.IProps> = ({
  icon,
  title,
  message,
  colorScheme = "green",
}): JSX.Element => {
  return (
    <Flex
      maxW="sm"
      w="full"
      mx="auto"
      bg={useColorModeValue("white", "gray.700")}
      shadow="md"
      rounded="lg"
      overflow="hidden"
    >
      <Flex
        justifyContent="center"
        alignItems="center"
        w={12}
        bg={`${colorScheme}.500`}
      >
        <Icon as={icon ? icon : IoCheckmarkCircle} color="white" boxSize={6} />
      </Flex>

      <Box mx={-3} py={2} px={4}>
        <Box mx={3}>
          <chakra.span
            color={useColorModeValue(
              `${colorScheme}.500`,
              `${colorScheme}.400`,
            )}
            fontWeight="bold"
          >
            {title}
          </chakra.span>
          <chakra.p
            color={useColorModeValue("gray.600", "gray.200")}
            fontSize="sm"
          >
            {message}
          </chakra.p>
        </Box>
      </Box>
    </Flex>
  );
};
