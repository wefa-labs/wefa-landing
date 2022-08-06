import React from "react";

import {
  Link,
  Icon,
  Badge,
  Text,
  Heading,
  Avatar,
  Box,
  Stack,
  useColorModeValue,
} from "@chakra-ui/react";

import { ITeamCards } from "./team";

export const TeamMemberProfileCard: React.FC<ITeamCards.IProps> = ({
  name,
  occupation,
  isOnline,
  avatarImage,
  post,
  followers,
  following,
  bio,
  socialLinks,
  ...rest
}) => {
  const onlineDot = {
    content: '""',
    w: 3,
    h: 3,
    bg: useColorModeValue("green.200", "green.300"),
    border: "2px solid",
    borderColor: useColorModeValue("white", "gray.800"),
    rounded: "full",
    pos: "absolute",
    bottom: 1,
    right: 1,
  };
  return (
    <Box
      // maxW={"420px"}
      w={"full"}
      bg={useColorModeValue("white", "gray.700")}
      boxShadow={"2xl"}
      rounded={"md"}
      overflow={"hidden"}
      height="fit-content"
      px={6}
      py={4}
      pos={"relative"}
      {...rest}
    >
      <Stack
        direction={["column", "column", "column", "row"]}
        justify={"space-between"}
        align={["start", "start", "start", "center"]}
      >
        {avatarImage && (
          <Box right={6} pos={{ base: "absolute", lg: "static" }}>
            {/*
             * TODO: add srcSet to Avatar
             * srcSet={avatarImage?.srcSet}
             * issue: https://github.com/chakra-ui/chakra-ui/issues/5256
             */}
            {avatarImage && (
              <Avatar
                size="lg"
                src={avatarImage.src}
                name={name}
                pos={"relative"}
                _after={isOnline ? onlineDot : undefined}
              />
            )}
          </Box>
        )}
        {post && (
          <Box>
            <Text
              fontWeight={500}
              textTransform="uppercase"
              fontSize={"xs"}
              color={useColorModeValue("gray.600", "gray.300")}
            >
              Post
            </Text>
            <Text fontSize="md" fontWeight={600}>
              {post}
            </Text>
          </Box>
        )}
        {followers && (
          <Box>
            <Text
              fontWeight={500}
              textTransform="uppercase"
              fontSize={"xs"}
              color={useColorModeValue("gray.600", "gray.300")}
            >
              Followers
            </Text>
            <Text fontSize="md" fontWeight={600}>
              {followers}
            </Text>
          </Box>
        )}
        {following && (
          <Box>
            <Text
              fontWeight={500}
              textTransform="uppercase"
              fontSize={"xs"}
              color={useColorModeValue("gray.600", "gray.300")}
            >
              Following
            </Text>
            <Text fontSize="md" fontWeight={600}>
              {following}
            </Text>
          </Box>
        )}
      </Stack>
      <Stack direction={"column"} spacing={0} my={4}>
        {name && (
          <Heading fontSize={"md"} fontWeight={600} fontFamily={"body"}>
            {name} {isOnline && <Badge colorScheme="green">Online</Badge>}
          </Heading>
        )}
        {occupation && (
          <Text
            fontSize={"sm"}
            color={useColorModeValue("gray.500", "whiteAlpha.700")}
          >
            {occupation}
          </Text>
        )}
      </Stack>
      {bio && (
        <Stack direction={"column"} spacing={0} mt={4}>
          <Heading fontSize={"sm"} fontWeight={600} fontFamily={"body"}>
            About
          </Heading>
          <Text
            fontSize={"sm"}
            color={useColorModeValue("gray.500", "whiteAlpha.900")}
          >
            {bio}
          </Text>
        </Stack>
      )}
      {socialLinks && (
        <Stack
          direction="row"
          justify="center"
          align="center"
          flexWrap="wrap"
          // spacing={0}
          mt={4}
        >
          {socialLinks.map((l, idx) => (
            <Link
              key={idx}
              m={1}
              rel="nofollow"
              display={"inline-flex"}
              href={l.href}
              target="_blank"
              rounded={"full"}
              bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
              transition={"background 0.3s ease"}
              _hover={{
                bg: `${l?.title.toLowerCase()}.400`,
              }}
            >
              <Text
                display={"inline-flex"}
                w={8}
                h={8}
                alignItems={"center"}
                justifyContent={"center"}
                as="span"
                fontSize={"lg"}
                color={"gray.400"}
                transition="color 250ms ease"
                _hover={{
                  // color: `${l?.title.toLowerCase()}.400`,
                  color: "white",
                }}
              >
                {l?.icon && <Icon as={l.icon} />}
                {!l?.icon ? l.title : undefined}
              </Text>
            </Link>
          ))}
        </Stack>
      )}
    </Box>
  );
};
