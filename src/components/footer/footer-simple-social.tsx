import {
  FaLinkedin,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaDribbble,
  FaGit,
} from "@react-icons";

import React, { memo } from "react";

import { IconType } from "react-icons/lib";

import {
  Box,
  Icon,
  Container,
  Stack,
  Text,
  useColorModeValue,
  ChakraProps,
  Tag,
  TagLeftIcon,
  TagLabel,
  ThemingProps,
  Flex,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";

import { Social, CopyrightText } from "@definitions/navigation/footer";
import version from "@definitions/utils/version";

import { SocialIconButton } from "@components/button";

/**
 * You should add different social network icons that you will use.
 */
const SocialIcons: { [key: string]: IconType } = {
  instagram: FaInstagram,
  twitter: FaTwitter,
  youtube: FaYoutube,
  dribbble: FaDribbble,
  linkedin: FaLinkedin,
};

const FooterSimpleSocial: React.FC<ChakraProps & ThemingProps> = ({
  colorScheme,
  ...rest
}) => {
  return (
    <Box
      bg={useColorModeValue("gray.50", "gray.900")}
      color={useColorModeValue("gray.700", "gray.400")}
      py={4}
      {...rest}
    >
      <Container
        as={Stack}
        maxW={"container.xl"}
        direction={{ base: "column", md: "row" }}
        spacing={4}
        justify={{ base: "center", md: "space-between" }}
        align={{ base: "center", md: "center" }}
      >
        <Flex
          align={["center", "center", "start", "start"]}
          direction={["column", "column", "row", "row"]}
        >
          <VersionBadge colorScheme={colorScheme} />
          <Text
            textAlign={["center", "center", "start", "start"]}
            ml={2}
            fontSize="xs"
          >
            {CopyrightText}
          </Text>
        </Flex>
        <Wrap justify={["center", "center", "start"]} spacing={[2, 2, 6, 6]}>
          {Social.items.map((link, idx) => {
            const title = link.title.toLowerCase();
            const SocialIconComponent = SocialIcons[title];
            return (
              <WrapItem key={idx}>
                <SocialIconButton label={link.title} href={link.href}>
                  <Icon as={SocialIconComponent} />
                </SocialIconButton>
              </WrapItem>
            );
          })}
        </Wrap>
      </Container>
    </Box>
  );
};

const VersionBadge: React.FC<ChakraProps & ThemingProps> = memo(
  ({ colorScheme = "gray" }) => {
    return (
      <Tag
        colorScheme={colorScheme}
        borderRadius="full"
        variant="subtle"
        size="sm"
      >
        <TagLeftIcon boxSize="12px" as={FaGit} />
        <TagLabel fontWeight="bold">{version()}</TagLabel>
      </Tag>
    );
  },
);

export default memo(FooterSimpleSocial);
