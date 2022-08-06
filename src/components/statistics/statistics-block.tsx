import React, { memo } from "react";

import {
  ChakraProps,
  Heading,
  StackProps,
  Text,
  ThemingProps,
  useColorModeValue,
  Stack,
} from "@chakra-ui/react";

interface IProps extends ChakraProps, ThemingProps, StackProps {
  heading: string | React.ReactElement;
  body: string;
}

const StatisticsBlock: React.FC<IProps> = ({ heading, body, ...rest }) => {
  return (
    <Stack
      p={6}
      shadow="md"
      spacing={1}
      rounded="xl"
      align="center"
      justify="center"
      direction="column"
      transition="all 250ms ease-in-out"
      bg={useColorModeValue("white", "whiteAlpha.300")}
      _hover={{
        shadow: "2xl",
      }}
      {...rest}
    >
      <Heading as="h3">{heading}</Heading>
      <Text fontSize="xs" fontWeight="600" textTransform="uppercase">
        {body}
      </Text>
    </Stack>
  );
};

export default memo(StatisticsBlock);
