import {
  Box,
  Flex,
  Text,
  Stack,
  Avatar,
  useColorModeValue,
} from "@chakra-ui/react";

import { ITestimonial } from "./testimonial";

export const TestimonialBlurredBackdrop: React.FC<ITestimonial.IBackdrop> = ({
  avatarImage,
  body,
  name,
  occupation,
  // nameColor = undefined,
  // occupationColor = useColorModeValue("gray.600", "gray.400"),
  backgroundImage = undefined,
  icon = undefined,
  // title,
  // bgColor = useColorModeValue("white", "gray.800"),
  rating,
  ...rest
}): JSX.Element => {
  return (
    <Flex
      boxShadow={"lg"}
      maxW={"640px"}
      direction={{ base: "column-reverse", md: "row" }}
      width={"full"}
      rounded={"xl"}
      p={10}
      justifyContent={"space-between"}
      position={"relative"}
      bg={useColorModeValue("white", "gray.800")}
      _before={{
        content: '""',
        position: "absolute",
        zIndex: "-1",
        height: "full",
        // maxW: "640px",
        width: "full",
        filter: "blur(40px)",
        transform: "scale(0.98)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        top: 0,
        left: 0,
        backgroundImage: `url(${backgroundImage})`,
      }}
      {...rest}
    >
      {icon && (
        <Box pos="absolute" top="-10px">
          {icon}
        </Box>
      )}
      <Flex
        direction={"column"}
        textAlign={"left"}
        justifyContent={"space-between"}
      >
        {body && (
          <Text fontWeight={"medium"} fontSize={"15px"} pb={4}>
            {body}
          </Text>
        )}
        <Stack spacing={2} direction={{ base: "column", sm: "row" }}>
          {name && (
            <Text fontWeight={"bold"} fontSize={14}>
              {name}
            </Text>
          )}
          {{ occupation } && (
            <Text
              fontSize={14}
              // as="span"
              fontWeight={"medium"}
              color={"gray.500"}
            >
              {occupation}
            </Text>
          )}
          {rating && <Flex>{rating}</Flex>}
        </Stack>
      </Flex>
      {/*
       * TODO: add srcSet to Avatar
       * srcSet={avatarImage?.srcSet}
       * issue: https://github.com/chakra-ui/chakra-ui/issues/5256
       */}
      <Avatar
        src={avatarImage.src}
        // srcSet={avatarImage?.srcSet}
        height={"80px"}
        width={"80px"}
        alignSelf={"center"}
        m={{ base: "0 0 35px 0", md: "0 0 0 50px" }}
      />
    </Flex>
  );
};
