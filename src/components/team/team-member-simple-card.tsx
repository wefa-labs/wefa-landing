import { BsThreeDotsVertical } from "@react-icons";

import React from "react";

import {
  Icon,
  IconButton,
  Text,
  Heading,
  Avatar,
  Box,
  Flex,
  Stack,
  useColorModeValue,
  Menu,
  MenuButton,
  VisuallyHidden,
} from "@chakra-ui/react";

import { ITeamCards } from "./team";

export const TeamMemberSimpleCard: React.FC<ITeamCards.IProps> = ({
  avatarImage,
  name,
  occupation,
  menuList,
  isOnline,
  bio,
  ...rest
}) => {
  const onlineCircle = {
    content: '""',
    w: 140,
    h: 140,
    bg: useColorModeValue("white", "gray.900"),
    border: "3px solid",
    borderColor: useColorModeValue("green.200", "green.600"),
    rounded: "full",
    pos: "absolute",
    bottom: -1.5,
    right: -1.5,
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
      {menuList && (
        <Stack direction="row" justify="end" spacing={0} m={4}>
          <Menu placement="bottom-end">
            <MenuButton
              size="sm"
              colorScheme="gray"
              as={IconButton}
              aria-label="User Menu"
              _focus={{
                border: "none",
              }}
              icon={
                <Icon w={5} h={5} as={BsThreeDotsVertical} color="gray.400" />
              }
              variant="ghost"
            />
            {menuList}
          </Menu>
        </Stack>
      )}
      {avatarImage && (
        <Flex justify={"center"} mt={4}>
          {/*
           * TODO: add srcSet to Avatar
           * srcSet={avatarImage?.srcSet}
           * issue: https://github.com/chakra-ui/chakra-ui/issues/5256
           */}
          <Avatar
            size={"2xl"}
            src={avatarImage.src}
            name={name}
            css={{
              zIndex: 1,
            }}
            pos={"relative"}
            _after={isOnline ? onlineCircle : undefined}
          />
        </Flex>
      )}

      <Box p={4}>
        <Stack spacing={0} mb={0}>
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
        {bio && (
          <Box mt={4}>
            <VisuallyHidden>About</VisuallyHidden>
            <Text
              fontSize={"sm"}
              color={useColorModeValue("gray.800", "whiteAlpha.900")}
            >
              {bio}
            </Text>
          </Box>
        )}
      </Box>
    </Box>
  );
};
