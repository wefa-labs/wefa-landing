import { memo } from "react";

import NextLink from "next/link";

import {
  Flex,
  Text,
  ThemingProps,
  ChakraProps,
  useColorModeValue,
  LinkBox,
  LinkOverlay,
  Tag,
  Link,
} from "@chakra-ui/react";

import { __DEV__ } from "@definitions/utils";

interface ISidebarMenuBlock extends ChakraProps, ThemingProps {
  items: {
    title: string;
    tag?: string;
    href: string;
  }[];
}

const SidebarMenuBlock: React.FC<ISidebarMenuBlock> = ({
  items = [],
  colorScheme,
}) => {
  const style = {
    py: 2,
    px: 4,
    mb: 1,
    mx: [0, -1, -4],
    rounded: "md",
    borderWidth: "1px",
    borderColor: "transparent",
    fontWeight: 500,
    transition: "all 200ms ease",
    _hover: {
      bg: useColorModeValue("gray.100", "gray.700"),
      borderColor: useColorModeValue("gray.100", "gray.700"),
      borderWidth: "1px",
    },
  };

  return (
    <>
      {items.map((i, idx) => (
        <LinkBox key={idx}>
          <Flex {...style} /* sx={i?.active ? active : undefined} */>
            <NextLink href={`${i.href}`} passHref>
              <LinkOverlay w="full">
                <Link d="flex">
                  <Text mr="auto">{i.title}</Text>{" "}
                  {i.tag && (
                    <Tag
                      colorScheme={colorScheme}
                      size="sm"
                      borderRadius="full"
                    >
                      {i.tag}
                    </Tag>
                  )}
                </Link>
              </LinkOverlay>
            </NextLink>
          </Flex>
        </LinkBox>
      ))}
    </>
  );
};

if (__DEV__) {
  SidebarMenuBlock.displayName = "SidebarMenuBlock";
}

export default memo(SidebarMenuBlock);
