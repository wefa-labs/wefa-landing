import {
  Box,
  Flex,
  Heading,
  Text,
  Stack,
  Avatar,
  useColorModeValue,
} from "@chakra-ui/react";

import { ITestimonial } from "./testimonial";

export const TestimonialBubbleCard: React.FC<ITestimonial.IProps> = ({
  avatarImage,
  body,
  name,
  occupation,
  title,
  bgColor = useColorModeValue("white", "gray.800"),
  titleColor = useColorModeValue("gray.600", "gray.100"),
  bodyColor = useColorModeValue("gray.600", "gray.400"),
  nameColor = undefined,
  occupationColor = useColorModeValue("gray.600", "gray.400"),
  boxShadow = "lg",
  rating,
  ...rest
}): JSX.Element => {
  return (
    <Box {...rest}>
      <Stack
        bg={bgColor}
        boxShadow={boxShadow}
        p={8}
        rounded={"xl"}
        align={"center"}
        pos={"relative"}
        _after={{
          content: `""`,
          w: 0,
          h: 0,
          borderLeft: "solid transparent",
          borderLeftWidth: 16,
          borderRight: "solid transparent",
          borderRightWidth: 16,
          borderTop: "solid",
          borderTopWidth: 16,
          borderTopColor: bgColor,
          pos: "absolute",
          bottom: "-16px",
          left: "50%",
          transform: "translateX(-50%)",
        }}
      >
        <Heading color={titleColor} as={"h3"} fontSize={"xl"}>
          {title}
        </Heading>
        <Text textAlign={"center"} color={bodyColor} fontSize={"sm"}>
          {body}
        </Text>
      </Stack>
      <Flex align={"center"} mt={8} direction={"column"}>
        {/*
         * TODO: add srcSet to Avatar
         * srcSet={avatarImage?.srcSet}
         * issue: https://github.com/chakra-ui/chakra-ui/issues/5256
         */}
        <Avatar src={avatarImage.src} name={name ? name : "author"} mb={2} />
        <Stack spacing={-1} align={"center"}>
          {name && (
            <Text color={nameColor} fontWeight={600}>
              {name}
            </Text>
          )}
          {occupation && (
            <Text fontSize={"sm"} color={occupationColor}>
              {occupation}
            </Text>
          )}
          {rating && <Box pt={2}>{rating}</Box>}
        </Stack>
      </Flex>
    </Box>
  );
};
