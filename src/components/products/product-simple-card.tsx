import { memo } from "react";

import NextLink from "next/link";

import {
  Badge,
  Box,
  Flex,
  Heading,
  Link,
  Text,
  useColorModeValue,
  VStack,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";

import ImageLazyload from "@components/image-lazyload";

import { IProduct } from "./product";

const ProductSimpleCard: React.FC<IProduct.IProps> = ({
  isNew,
  image,
  title,
  href,
  brand,
  price,
  oldPrice,
  currency = "$",
  ...rest
}): JSX.Element => {
  return (
    <Box
      p={6}
      maxW={320}
      zIndex={1}
      role="group"
      rounded="lg"
      width="full"
      pos="relative"
      boxShadow="2xl"
      height="fit-content"
      bg={useColorModeValue("white", "gray.800")}
      {...rest}
    >
      {image && (
        <Box
          rounded="lg"
          pos="relative"
          _after={{
            transition: "all .3s ease",
            content: '""',
            w: "full",
            h: "full",
            pos: "absolute",
            top: 5,
            left: 0,
            backgroundImage: image?.placeholder
              ? `url(${image.placeholder})`
              : `url(${image.src})`,
            filter: "blur(25px)",
            zIndex: -1,
          }}
          _groupHover={{
            _after: {
              filter: "blur(15px)",
            },
          }}
        >
          <ImageLazyload
            alt={title}
            rounded="lg"
            image={image}
            objectFit="cover"
          />
        </Box>
      )}
      <VStack pt={10}>
        {isNew && (
          <Flex justify={["center"]}>
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

        {title && href ? (
          <NextLink href={href} passHref>
            <Link>
              <Heading fontSize={"2xl"} fontFamily={"body"} fontWeight={500}>
                {title}
              </Heading>
            </Link>
          </NextLink>
        ) : (
          <Heading fontSize={"2xl"} fontFamily={"body"} fontWeight={500}>
            {title}
          </Heading>
        )}

        <Wrap align="center">
          {price && (
            <WrapItem>
              <Text fontWeight={800} fontSize={"xl"}>
                <Text as="span">{currency}</Text>
                <Text as="span">
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
                textDecoration="line-through"
                color={useColorModeValue("gray.400", "gray.600")}
              >
                <Text as="span">{currency}</Text>
                <Text as="span">
                  {oldPrice.toLocaleString(undefined, {
                    maximumFractionDigits: 2,
                    minimumFractionDigits: 0,
                  })}
                </Text>
              </Text>
            </WrapItem>
          )}
        </Wrap>
      </VStack>
    </Box>
  );
};

export default memo(ProductSimpleCard);
