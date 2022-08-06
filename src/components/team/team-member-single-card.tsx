import React from "react";

import {
  Icon,
  Box,
  Button,
  Divider,
  Flex,
  VStack,
  Heading,
  Stack,
  Text,
  useColorModeValue,
  VisuallyHidden,
  Circle,
} from "@chakra-ui/react";

import ImageLazyload from "@components/image-lazyload";

import { ITeamCards } from "./team";

export const TeamMemberSingleCard: React.FC<ITeamCards.IProps> = ({
  name,
  avatarImage,
  occupation,
  followers,
  following,
  isOnline,
  socialLinks = [],
  bio,
  ...rest
}) => {
  return (
    <Box
      // maxW={"320px"}
      role="group"
      w="full"
      bg={useColorModeValue("white", "gray.700")}
      boxShadow="2xl"
      rounded="md"
      overflow="hidden"
      height="fit-content"
      {...rest}
    >
      {avatarImage && (
        <Flex pos="relative" roundedTop="md" overflow="hidden" justify="center">
          {isOnline && (
            <Box zIndex="sticky" position="absolute" top="2" right="2">
              <Circle
                size="10px"
                bg="green.400"
                border="2px solid"
                borderColor="whiteAlpha.400"
              />
            </Box>
          )}
          <ImageLazyload
            flex="1"
            roundedTop="md"
            ratio={1.1}
            image={avatarImage}
            w="full"
            h="full"
            alt={name}
            objectFit="cover"
            transition="all 250ms ease"
            _groupHover={{
              transform: "scale(1.3) rotate(5deg)",
            }}
          />
          <Flex
            position="absolute"
            bottom="0"
            bgColor="primary.100"
            zIndex="-1"
            width="full"
            height="60px"
            minW="full"
            alignItems="center"
            flexWrap="nowrap"
            overflowX="auto"
            justify={socialLinks?.length > 2 ? "space-between" : "center"}
            css={{
              WebkitOverflowScrolling: "touch",
              msOverflowStyle: "-ms-autohiding-scrollbar",
            }}
            opacity={0}
            transform="translateY(15px)"
            transition="all 350ms ease"
            _groupHover={{
              zIndex: "sticky",
              opacity: 1,
              transform: "translateY(0)",
            }}
          >
            {socialLinks.map((l, idx) => (
              <Flex key={idx} flex="0 0 auto" px={2}>
                <Button
                  as="a"
                  href={l.href}
                  target="_blank"
                  rel="noopener nofollow"
                  size="sm"
                  colorScheme={l?.title.toLowerCase()}
                  leftIcon={<Icon as={l?.icon} />}
                >
                  {l?.title}
                </Button>
              </Flex>
            ))}
          </Flex>
        </Flex>
      )}
      <VStack spacing={0}>
        <Stack spacing={0} px={4} py={4}>
          <Heading fontSize="md" fontWeight={600} fontFamily="body">
            {name}
          </Heading>
          <Text
            fontSize="sm"
            fontWeight={600}
            color={useColorModeValue("gray.500", "gray.400")}
          >
            {occupation}
          </Text>

          {bio && (
            <Box pt={2} mt={0}>
              <VisuallyHidden>About</VisuallyHidden>
              <Text
                fontSize="sm"
                color={useColorModeValue("gray.800", "whiteAlpha.900")}
              >
                {bio}
              </Text>
            </Box>
          )}
        </Stack>
        <Box width="full" pb={0}>
          <Divider />
        </Box>
        <Box width="full" p={2}>
          <Stack direction="row" justify="center" spacing={6}>
            {followers && (
              <Stack direction="row" spacing={2} align="center">
                <Text fontSize="sm" fontWeight={600}>
                  {followers}
                </Text>
                <Text
                  fontSize="sm"
                  color={useColorModeValue("gray.500", "whiteAlpha.800")}
                >
                  Followers
                </Text>
              </Stack>
            )}
            <Divider orientation="vertical" h="20px" />
            {following && (
              <Stack direction="row" spacing={2} align={"center"}>
                <Text fontSize={"sm"} fontWeight={600}>
                  {following}
                </Text>
                <Text
                  fontSize={"sm"}
                  color={useColorModeValue("gray.500", "whiteAlpha.800")}
                >
                  Following
                </Text>
              </Stack>
            )}
          </Stack>
        </Box>
      </VStack>
    </Box>
  );
};
