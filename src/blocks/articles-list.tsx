import { memo } from "react";

import NextLink from "next/link";

import {
  Box,
  Flex,
  Stack,
  StackDivider,
  Text,
  LinkBox,
  LinkOverlay,
  ThemingProps,
  ChakraProps,
  useColorModeValue,
} from "@chakra-ui/react";

import { __DEV__ } from "@definitions/utils";

import ImageLazyload from "@components/image-lazyload";

interface IArticlesListBlock extends ChakraProps, ThemingProps {
  items: {
    title: string;
    href: string;
    image?: imageObject;
    body?: string;
  }[];
}

const ArticlesListBlock: React.FC<IArticlesListBlock> = ({
  items = [],
  colorScheme,
}) => {
  const linkColor = colorScheme
    ? useColorModeValue(`${colorScheme}.500`, `${colorScheme}.300`)
    : null;
  return (
    <Stack direction="column" spacing={5} divider={<StackDivider />}>
      {items.map((item, index) => (
        <LinkBox
          key={index}
          transition="color 200ms ease, transform 200ms ease"
          _hover={{ color: linkColor, transform: "translateY(-5px)" }}
        >
          <Flex align="center">
            <Box maxW="320px" flex="1" mr="4">
              <ImageLazyload
                w="full"
                h="full"
                objectFit="cover"
                ratio={4 / 3}
                rounded="md"
                image={item.image}
              />
            </Box>
            <Flex flex="2">
              <NextLink href={item.href} passHref>
                <LinkOverlay>
                  <Text fontSize="lg" noOfLines={2}>
                    {item.title}
                  </Text>
                </LinkOverlay>
              </NextLink>
            </Flex>
          </Flex>
        </LinkBox>
      ))}
    </Stack>
  );
};

if (__DEV__) {
  ArticlesListBlock.displayName = "ArticlesListBlock";
}

export default memo(ArticlesListBlock);
