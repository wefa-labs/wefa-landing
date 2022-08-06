import React from "react";

import {
  Text,
  Heading,
  Avatar,
  Box,
  Flex,
  Stack,
  useColorModeValue,
} from "@chakra-ui/react";

import ImageLazyload from "@components/image-lazyload";

import { ITeamCards } from "./team";

export const TeamMemberCard: React.FC<ITeamCards.IProps> = ({
  name,
  avatarImage,
  profileBg,
  occupation,
  followers,
  following,
  buttons,
  isOnline,
  ...rest
}) => {
  const onlineDot = {
    content: '""',
    w: 104,
    h: 104,
    bg: useColorModeValue("white", "gray.900"),
    border: "2px solid",
    borderColor: useColorModeValue("green.200", "green.600"),
    rounded: "full",
    pos: "absolute",
    bottom: "-4px",
    right: "-4px",
    zIndex: -1,
  };
  return (
    <Box
      // maxW={"320px"}
      w={"full"}
      bg={useColorModeValue("white", "gray.700")}
      boxShadow={"2xl"}
      rounded={"md"}
      overflow={"hidden"}
      height="fit-content"
      {...rest}
    >
      {profileBg && (
        // <Image h={"120px"} w={"full"} src={profileBg} objectFit={"cover"} />
        <ImageLazyload
          w="full"
          ratio={16 / 9}
          objectFit={"cover"}
          alt={name}
          image={profileBg}
        />
      )}
      {avatarImage && (
        <Flex justify={"center"} mt={-12}>
          {/*
           * TODO: add srcSet to Avatar
           * srcSet={avatarImage?.srcSet}
           * issue: https://github.com/chakra-ui/chakra-ui/issues/5256
           */}
          <Avatar
            size={"xl"}
            src={avatarImage.src}
            name={name}
            css={{
              zIndex: 1,
            }}
            pos={"relative"}
            _after={isOnline ? onlineDot : undefined}
          />
        </Flex>
      )}

      <Box p={4}>
        <Stack align="center" direction={"column"} spacing={0} mb={4}>
          <Heading fontSize={"xl"} fontWeight={700} fontFamily={"body"}>
            {name}
          </Heading>
          <Text
            fontSize={"sm"}
            fontWeight={600}
            textTransform="uppercase"
            color={useColorModeValue("gray.500", "whiteAlpha.800")}
          >
            {occupation}
          </Text>
        </Stack>

        <Stack direction={"row"} justify={"center"} spacing={6}>
          {followers && (
            <Stack spacing={0} align={"center"}>
              <Text fontWeight={600}>{followers}</Text>
              <Text
                fontSize={"sm"}
                color={useColorModeValue("gray.500", "whiteAlpha.800")}
              >
                Followers
              </Text>
            </Stack>
          )}
          {following && (
            <Stack spacing={0} align={"center"}>
              <Text fontWeight={600}>{following}</Text>
              <Text
                fontSize={"sm"}
                color={useColorModeValue("gray.500", "whiteAlpha.800")}
              >
                Following
              </Text>
            </Stack>
          )}
        </Stack>

        {buttons && (
          <Stack mt={8} direction={"row"} justify={"center"} spacing={6}>
            {buttons}
          </Stack>
        )}
      </Box>
    </Box>
  );
};
