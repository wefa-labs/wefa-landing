import { IoCheckmarkCircle } from "@react-icons";

import React from "react";

import { chakra, Box, Icon, Flex, useColorModeValue } from "@chakra-ui/react";

import { INotification } from "./notification";

export const NotificationCTA: React.FC<INotification.ICTAProps> = ({
  icon,
  title,
  message,
  colorScheme = "green",
  isDivided = false,
  buttons,
}): JSX.Element => {
  return (
    <Flex
      maxW="md"
      w="full"
      bg={useColorModeValue("white", "gray.700")}
      shadow="md"
      rounded="lg"
      overflow="hidden"
    >
      <Flex
        justifyContent="center"
        alignItems="center"
        w={20}
        minW={20}
        bg={`${colorScheme}.500`}
      >
        <Icon as={icon ? icon : IoCheckmarkCircle} color="white" boxSize={12} />
      </Flex>

      <Box mx={-3} py={2} px={4}>
        <Box mx={3}>
          <chakra.span
            color={useColorModeValue("gray.600", "gray.200")}
            fontWeight="bold"
          >
            {title}
          </chakra.span>
          <chakra.p
            color={useColorModeValue("gray.600", "gray.200")}
            fontSize="sm"
            my={1}
          >
            {message}
          </chakra.p>
          {isDivided ? undefined : buttons}
        </Box>
      </Box>
      {isDivided ? buttons : undefined}
    </Flex>
  );
};
