import React, { memo } from "react";

// import Image from "next/image";
import NextLink from "next/link";

import {
  Box,
  chakra,
  Flex,
  Heading,
  Image,
  Link,
  Text,
  Tag,
  Tooltip,
  useColorModeValue,
} from "@chakra-ui/react";

import ImageLazyload from "@components/image-lazyload";

import { IArticle } from "./article";

const ArticleCard: React.FC<IArticle.IProps> = ({
  author,
  authorHref,
  avatar,
  body,
  href,
  meta,
  tag,
  tagHref,
  title,
  image,
  colorScheme,
  rounded = "lg",
  ...rest
}): JSX.Element => {
  return (
    <Box
      rounded={rounded}
      shadow="lg"
      bg={useColorModeValue("white", "gray.900")}
      maxW="320"
      {...rest}
    >
      {image && <ImageLazyload roundedTop={rounded} image={image} />}
      <Box px={8} py={4}>
        <Flex justifyContent="space-between" alignItems="center">
          {meta && (
            <chakra.span
              fontSize="sm"
              color={useColorModeValue("gray.600", "gray.400")}
            >
              {meta}
            </chakra.span>
          )}
          {tagHref && tag && (
            <NextLink href={tagHref} passHref>
              <Tag
                as="a"
                size="sm"
                rounded="full"
                lineHeight={1}
                colorScheme={colorScheme}
              >
                {tag}
              </Tag>
            </NextLink>
          )}
        </Flex>

        <Box mt={2}>
          {title && (
            <Heading
              as="h3"
              fontSize="2xl"
              color={useColorModeValue("gray.700", "white")}
              fontWeight="700"
              noOfLines={3}
              mt={4}
            >
              {title}
            </Heading>
          )}
          {body && (
            <chakra.p mt={2} color={useColorModeValue("gray.600", "gray.300")}>
              {body}
            </chakra.p>
          )}
        </Box>

        <Flex justifyContent="space-between" alignItems="center" mt={4}>
          {href && (
            <NextLink href={href} passHref>
              <Link
                color={useColorModeValue(
                  `${colorScheme}.600`,
                  `${colorScheme}.400`,
                )}
                textTransform="uppercase"
                fontWeight="700"
                fontSize="xs"
                _hover={{ textDecor: "underline" }}
              >
                Read more
              </Link>
            </NextLink>
          )}

          <Flex align="center">
            {avatar && (
              <Tooltip
                rounded="full"
                placement="top"
                hasArrow
                label={author}
                fontSize="md"
              >
                <Image
                  mx={4}
                  w={10}
                  h={10}
                  rounded="full"
                  fit="cover"
                  display={{ base: "none", sm: "block" }}
                  src={avatar.src}
                  alt={author}
                />
              </Tooltip>
            )}

            {!author && (
              <>
                {authorHref ? (
                  <NextLink href={authorHref} passHref>
                    <Link
                      color={useColorModeValue("gray.700", "gray.200")}
                      fontWeight="700"
                      textTransform="uppercase"
                      fontSize="xs"
                    >
                      {author}
                    </Link>
                  </NextLink>
                ) : (
                  <Text
                    color={useColorModeValue("gray.700", "gray.200")}
                    fontWeight="700"
                  >
                    {author}
                  </Text>
                )}
              </>
            )}
          </Flex>
        </Flex>
      </Box>
    </Box>
  );
};

ArticleCard.displayName = "ArticleCard";
export default memo(ArticleCard);
