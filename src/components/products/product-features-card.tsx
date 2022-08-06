import { memo } from "react";

import NextLink from "next/link";

import {
  Text,
  Heading,
  Flex,
  Box,
  Badge,
  useColorModeValue,
  Link,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";

import ImageLazyload from "@components/image-lazyload";

import { IProduct } from "./product";

const ProductFeaturesCard: React.FC<IProduct.IFeaturesProps> = ({
  isNew,
  image,
  title,
  href,
  price,
  oldPrice,
  currency = "$",
  rating,
  features = [],
  period,
  colorScheme = "green",
  ...rest
}): JSX.Element => {
  return (
    <Box
      bg={useColorModeValue("white", "gray.800")}
      borderWidth="1px"
      height="fit-content"
      maxW={320}
      width="full"
      position="relative"
      rounded="lg"
      shadow="lg"
      {...rest}
    >
      {image && <ImageLazyload alt={title} image={image} roundedTop="lg" />}

      <Box p="6">
        <Flex align="baseline" direction={["column", "column", "row", "row"]}>
          {isNew && (
            <Badge
              rounded="full"
              px="2"
              fontSize="0.8em"
              colorScheme={colorScheme}
              mr={[0, 0, 2, 2]}
              mb={[2, 2, 0, 0]}
            >
              New
            </Badge>
          )}

          {features?.length > 0 && (
            <Wrap
              color="gray.500"
              display="flex"
              fontSize="xs"
              fontWeight="semibold"
              letterSpacing="wide"
              textTransform="uppercase"
            >
              {features.map((item) => (
                <WrapItem key={item}>
                  <Text>{item}</Text>
                </WrapItem>
              ))}
            </Wrap>
          )}
        </Flex>

        <Flex align="center" justify="space-between" mt="1">
          {title && href ? (
            <NextLink href={href} passHref>
              <Link>
                <Heading
                  as="h3"
                  fontSize="md"
                  fontWeight="semibold"
                  lineHeight="tight"
                >
                  {title}
                </Heading>
              </Link>
            </NextLink>
          ) : (
            <Heading
              as="h3"
              fontSize="md"
              fontWeight="semibold"
              lineHeight="tight"
            >
              {title}
            </Heading>
          )}
        </Flex>

        {price && (
          <Text color={useColorModeValue("gray.800", "white")} my={1}>
            <Text
              as="span"
              fontSize="sm"
              color={useColorModeValue("gray.600", "gray.400")}
            >
              {currency}
            </Text>

            <Text as="span" fontWeight={600}>
              {price.toLocaleString(undefined, {
                maximumFractionDigits: 2,
                minimumFractionDigits: 0,
              })}
            </Text>

            {oldPrice && (
              <Text
                as="span"
                color={useColorModeValue("gray.400", "gray.600")}
                fontWeight={600}
                ml={1}
                textDecoration="line-through"
              >
                <Text as="span" fontSize="sm">
                  {currency}
                </Text>
                {oldPrice.toLocaleString(undefined, {
                  maximumFractionDigits: 2,
                  minimumFractionDigits: 0,
                })}
              </Text>
            )}

            {period && (
              <Text as="span" color="gray.400" fontSize="sm" ml={1}>
                <Text as="span">/</Text>
                <Text as="span">{period}</Text>
              </Text>
            )}
          </Text>
        )}

        {rating}
      </Box>
    </Box>
  );
};

export default memo(ProductFeaturesCard);
