import { memo } from "react";

import NextLink from "next/link";

import {
  Box,
  Flex,
  Heading,
  LinkBox,
  LinkOverlay,
  Text,
  TextProps,
  useColorModeValue,
} from "@chakra-ui/react";

import { __DEV__ } from "@definitions/utils";

import ImageLazyload from "@components/image-lazyload";

import { IProduct } from "./product";

const ProductImageCard: React.FC<Omit<IProduct.IProps, "price">> = ({
  // isNew,
  image,
  title,
  category,
  href,
  brand,
  // oldPrice,
  // currency = "$",
  rounded = "md",
  ratio,
  ...rest
}): JSX.Element => {
  const headingStyle = {
    fontSize: "lg",
    fontWeight: 600,
  };
  const brandStyle: TextProps = {
    textTransform: "uppercase",
    letterSpacing: "0.05em",
    fontSize: "sm",
    fontWeight: 600,
    color: useColorModeValue("gray.700", "gray.200"),
  };
  const categoryStyle: TextProps = {
    fontWeight: 600,
    color: useColorModeValue("gray.400", "gray.600"),
  };
  return (
    <Box {...rest}>
      <LinkBox as="article" width="full">
        <Box mb={5}>
          {image && (
            <ImageLazyload
              objectFit={"cover"}
              w="full"
              h="full"
              ratio={ratio}
              alt={title}
              image={image}
              rounded={rounded}
            />
          )}
        </Box>
        {brand && <Text {...brandStyle}>{brand}</Text>}
        <Flex direction={["column", "column", "row"]} justify="space-between">
          {title &&
            (href ? (
              <NextLink href={href} passHref>
                <LinkOverlay>
                  <Heading {...headingStyle}>{title}</Heading>
                </LinkOverlay>
              </NextLink>
            ) : (
              <Heading {...headingStyle}>{title}</Heading>
            ))}
          {category && <Text {...categoryStyle}>{category}</Text>}
        </Flex>
      </LinkBox>
    </Box>
  );
};

if (__DEV__) {
  ProductImageCard.displayName = "ProductImageCard";
}

export default memo(ProductImageCard);
