import { memo } from "react";

import NextLink from "next/link";

import {
  Badge,
  Box,
  Flex,
  Heading,
  HStack,
  Link,
  Text,
  useColorModeValue,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";

import ImageLazyload from "@components/image-lazyload";

import { IProduct } from "./product";

const ProductButtonCard: React.FC<IProduct.IWithButtonProps> = ({
  isNew,
  image,
  title,
  href,
  brand,
  price,
  oldPrice,
  currency = "$",
  rating,
  button,
  ...rest
}): JSX.Element => {
  return (
    <Box
      bg={useColorModeValue("white", "gray.800")}
      borderWidth="1px"
      height="fit-content"
      maxW={320}
      position="relative"
      rounded="lg"
      shadow="lg"
      width="full"
      {...rest}
    >
      {image && <ImageLazyload alt={title} image={image} roundedTop="lg" />}

      <Box p="6">
        {(isNew || brand) && (
          <HStack>
            {isNew && (
              <Flex justify={["center", "center", "start", "start"]}>
                <Badge rounded="full" px="2" fontSize="0.8em" colorScheme="red">
                  New
                </Badge>
              </Flex>
            )}

            {brand && (
              <Text color="gray.500" fontSize="sm" textTransform="uppercase">
                {brand}
              </Text>
            )}
          </HStack>
        )}

        <Flex
          mt="1"
          align="center"
          justify="space-between"
          direction={["column-reverse", "column-reverse", "row"]}
        >
          {title && href ? (
            <NextLink href={href} passHref>
              <Link>
                <Heading
                  as="h4"
                  fontSize={["lg", "xl", "2xl"]}
                  fontWeight="semibold"
                  isTruncated
                  lineHeight="tight"
                >
                  {title}
                </Heading>
              </Link>
            </NextLink>
          ) : (
            <Heading
              as="h4"
              fontSize={["lg", "xl", "2xl"]}
              fontWeight="semibold"
              isTruncated
              lineHeight="tight"
            >
              {title}
            </Heading>
          )}
          {button}
        </Flex>

        <Wrap width="full" justify={["space-between"]} align="center">
          <WrapItem>{rating}</WrapItem>
          <WrapItem>
            <Wrap
              spacing={2}
              justify={["center", "center", "space-between", "end"]}
            >
              {price && (
                <WrapItem>
                  <Text
                    fontSize="2xl"
                    color={useColorModeValue("gray.800", "white")}
                  >
                    <Text
                      as="span"
                      fontSize="lg"
                      color={useColorModeValue("gray.600", "gray.400")}
                    >
                      {currency}
                    </Text>
                    <Text as="span" fontWeight={700}>
                      {price.toLocaleString(undefined, {
                        maximumFractionDigits: 2,
                        minimumFractionDigits: 0,
                      })}
                    </Text>
                  </Text>
                </WrapItem>
              )}
              {oldPrice && (
                <WrapItem>
                  <Text
                    fontSize="2xl"
                    textDecoration="line-through"
                    color={useColorModeValue("gray.400", "gray.600")}
                  >
                    <Text as="span" fontSize="lg">
                      {currency}
                    </Text>
                    <Text as="span" fontWeight={700}>
                      {oldPrice.toLocaleString(undefined, {
                        maximumFractionDigits: 2,
                        minimumFractionDigits: 0,
                      })}
                    </Text>
                  </Text>
                </WrapItem>
              )}
            </Wrap>
          </WrapItem>
        </Wrap>
      </Box>
    </Box>
  );
};

export default memo(ProductButtonCard);
