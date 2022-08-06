import { FiHeart, FiMessageSquare } from "@react-icons";

import React from "react";

import {
  Avatar,
  Icon,
  Box,
  Divider,
  Flex,
  HStack,
  Heading,
  Spacer,
  Text,
  useColorModeValue,
  VisuallyHidden,
} from "@chakra-ui/react";

import ImageLazyload from "@components/image-lazyload";

import { ITeamCards } from "./team";

export const TeamMemberShareCard: React.FC<ITeamCards.IShareProps> = ({
  name,
  avatarImage,
  image,
  occupation,
  meta,
  body,
  comment,
  like,
  ...rest
}) => {
  return (
    <Box
      // maxW={"320px"}
      w="full"
      bg={useColorModeValue("white", "gray.700")}
      boxShadow="2xl"
      rounded="md"
      overflow="hidden"
      height="fit-content"
      {...rest}
    >
      <Box px={4} py={2}>
        {avatarImage && (
          <Flex align="center" justify="space-betwen">
            {/*
             * TODO: add srcSet to Avatar
             * srcSet={avatarImage?.srcSet}
             * issue: https://github.com/chakra-ui/chakra-ui/issues/5256
             */}
            <Avatar mr={2} size="sm" src={avatarImage.src} name={name} />
            <Heading
              noOfLines={1}
              fontSize="md"
              fontWeight={600}
              fontFamily="body"
            >
              {name} <VisuallyHidden>{occupation}</VisuallyHidden>
            </Heading>
            <Spacer />
            {meta && (
              <Text
                fontSize="sm"
                fontWeight={400}
                color={useColorModeValue("gray.500", "gray.300")}
              >
                {meta}
              </Text>
            )}
          </Flex>
        )}
      </Box>
      <Box pos="relative">
        {/* <Image size="sm" src={avatarImage} alt={name} /> */}
        <ImageLazyload objectFit={"cover"} alt={name} image={image} />
      </Box>
      {body && (
        <Box px={4} py={2}>
          <Text noOfLines={2} fontSize="sm" align="center">
            {body}
          </Text>
        </Box>
      )}
      <Divider />
      <Box px={4} py={3}>
        <HStack justify="space-between">
          {comment && (
            <HStack>
              <Icon
                color={useColorModeValue("gray.500", "whiteAlpha.900")}
                as={FiMessageSquare}
              />
              <Text
                variant="link"
                fontSize="sm"
                color={useColorModeValue("gray.500", "whiteAlpha.900")}
                _focus={{
                  border: "none",
                }}
              >
                {comment} Comments
              </Text>
            </HStack>
          )}
          {like && (
            <HStack>
              <Icon
                color={useColorModeValue("gray.500", "whiteAlpha.900")}
                as={FiHeart}
              />
              <Text
                variant="link"
                fontSize="sm"
                color={useColorModeValue("gray.500", "whiteAlpha.900")}
                _focus={{
                  border: "none",
                }}
              >
                {like} Likes
              </Text>
            </HStack>
          )}
        </HStack>
      </Box>
    </Box>
  );
};
