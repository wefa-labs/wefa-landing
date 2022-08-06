import { memo } from "react";

import {
  Box,
  Flex,
  Text,
  Stack,
  Avatar,
  useColorModeValue,
} from "@chakra-ui/react";

import { ITestimonial } from "./testimonial";

const TestimonialQuoteCard: React.FC<ITestimonial.IProps> = ({
  avatarImage,
  body,
  name,
  occupation,
  nameColor = undefined,
  occupationColor,
  // title,
  // bgColor = useColorModeValue("white", "gray.800"),
  rating,
  ...rest
}): JSX.Element => {
  return (
    <Box {...rest}>
      <Text fontSize={{ base: "xl", md: "2xl" }} textAlign="center" maxW="3xl">
        {body}
      </Text>

      <Flex align="center" mt={8} direction="column">
        {/*
         * TODO: add srcSet to Avatar
         * srcSet={avatarImage?.srcSet}
         * issue: https://github.com/chakra-ui/chakra-ui/issues/5256
         */}
        <Avatar src={avatarImage.src} name={name} mb={2} />
        <Stack spacing={-1} align="center">
          <Text color={nameColor} fontWeight={600}>
            {name}
          </Text>
          <Text
            fontSize="sm"
            color={
              occupationColor
                ? occupationColor
                : useColorModeValue("gray.600", "gray.400")
            }
          >
            {occupation}
          </Text>
        </Stack>
        {rating}
      </Flex>
    </Box>
  );
};

export default memo(TestimonialQuoteCard);
