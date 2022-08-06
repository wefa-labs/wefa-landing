import {
  Heading,
  Avatar,
  Box,
  Text,
  Stack,
  useColorModeValue,
} from "@chakra-ui/react";

import { ITeamCards } from "./team";

export const TeamMemberSocialProfileCard: React.FC<ITeamCards.IShareProps> = ({
  name,
  username,
  avatarImage,
  // occupation,
  // followers,
  // following,
  isOnline,
  // socialLinks = [],
  bio,
  body,
  buttons,
  // ...rest
}): JSX.Element => {
  const onlineDot = {
    content: '""',
    w: 4,
    h: 4,
    bg: "green.300",
    border: "2px solid white",
    rounded: "full",
    pos: "absolute",
    bottom: 0,
    right: 3,
  };

  return (
    <Box
      maxW={"320px"}
      w={"full"}
      bg={useColorModeValue("white", "gray.900")}
      boxShadow={"2xl"}
      rounded={"lg"}
      p={6}
      textAlign={"center"}
      height="fit-content"
    >
      {/*
       * TODO: add srcSet to Avatar
       * srcSet={AvatarImage?.srcSet}
       * issue: https://github.com/chakra-ui/chakra-ui/issues/5256
       */}
      <Avatar
        size={"xl"}
        src={avatarImage.src}
        name={name}
        mb={4}
        pos={"relative"}
        _after={isOnline ? onlineDot : {}}
      />
      <Heading fontSize={"2xl"} fontFamily={"body"}>
        {name}
      </Heading>
      {username && (
        <Text fontWeight={600} color={"gray.500"} mb={4}>
          @{username}
        </Text>
      )}
      {bio && (
        <Text
          textAlign={"center"}
          color={useColorModeValue("gray.700", "gray.400")}
          px={3}
        >
          {bio}
        </Text>
      )}

      {body && (
        <Stack align={"center"} justify={"center"} direction={"row"} mt={6}>
          {body}
        </Stack>
      )}

      {buttons && (
        <Stack mt={8} direction={"row"} spacing={4}>
          {buttons}
        </Stack>
      )}
    </Box>
  );
};
