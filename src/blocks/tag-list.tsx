import { memo } from "react";

import NextLink from "next/link";

import {
  Button,
  ButtonProps,
  ThemingProps,
  ChakraProps,
  Wrap,
  WrapItem,
  useColorModeValue,
} from "@chakra-ui/react";

import { __DEV__ } from "@definitions/utils";

interface ITagListBlock extends ChakraProps, ThemingProps {
  items: { title: string; href: string }[];
}

const TagListBlock: React.FC<ITagListBlock> = ({ items = [], colorScheme }) => {
  const tagButton: ButtonProps = {
    transition: "all ease 150ms",
    _hover: colorScheme
      ? {
          color: useColorModeValue(`whiteAlpha.900`, `whiteAlpha.800`),
          bg: useColorModeValue(`${colorScheme}.400`, `${colorScheme}.600`),
        }
      : undefined,
    as: "a",
    borderRadius: "full",
  };
  return (
    <Wrap>
      {items.map((t, idx) => (
        <WrapItem key={idx}>
          <NextLink href={`${t.href}`} passHref>
            <Button {...tagButton}>{t.title}</Button>
          </NextLink>
        </WrapItem>
      ))}
    </Wrap>
  );
};

if (__DEV__) {
  TagListBlock.displayName = "TagListBlock";
}

export default memo(TagListBlock);
