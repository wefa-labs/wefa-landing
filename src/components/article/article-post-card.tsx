import { memo } from "react";

import NextLink from "next/link";

import {
  Box,
  Heading,
  Text,
  Stack,
  Avatar,
  Link,
  useColorModeValue,
} from "@chakra-ui/react";

import ImageLazyload from "@components/image-lazyload";

import { IArticle } from "./article";

const ArticlePostCard: React.FC<IArticle.IProps> = ({
  href,
  avatar,
  author,
  // authorHref,
  title,
  subtitle,
  body,
  meta,
  image,
  color,
  colorScheme,
  ...rest
}): JSX.Element => {
  return (
    <Box
      maxW="320px"
      w="full"
      bg={useColorModeValue("white", "gray.900")}
      boxShadow="2xl"
      rounded="md"
      // p={6}
      overflow="hidden"
      {...rest}
    >
      {image && (
        <Box bg="gray.100">
          <ImageLazyload objectFit="cover" image={image} />
        </Box>
      )}
      <Stack mt={6} mx={6}>
        <Text
          color={color ? color : `${colorScheme}.500`}
          textTransform="uppercase"
          fontWeight={800}
          fontSize="xs"
          letterSpacing={1.1}
        >
          {subtitle}
        </Text>
        <Heading
          color={
            color ? color : useColorModeValue("gray.700", "whiteAlpha.800")
          }
          fontSize="2xl"
          fontFamily="body"
          _hover={{
            color: color
              ? color
              : useColorModeValue(`${colorScheme}.700`, `${colorScheme}.500`),
          }}
        >
          <NextLink href={href} passHref>
            <Link _hover={{ textDecoration: "none" }}>{title}</Link>
          </NextLink>
        </Heading>
        <Text color={color ? color : "gray.500"}>{body}</Text>
      </Stack>
      {avatar || author || meta ? (
        <Stack m={6} direction="row" spacing={4} align="center">
          {/*
           * TODO: add srcSet to Avatar
           * srcSet={AvatarImage?.srcSet}
           * issue: https://github.com/chakra-ui/chakra-ui/issues/5256
           */}
          {avatar && <Avatar src={avatar.src} name={author} />}
          <Stack direction="column" spacing={0} fontSize="sm">
            {author && <Text fontWeight={600}>{author}</Text>}
            {meta && <Text color={color ? color : "gray.500"}>{meta}</Text>}
          </Stack>
        </Stack>
      ) : (
        <></>
      )}
    </Box>
  );
};

export default memo(ArticlePostCard);
