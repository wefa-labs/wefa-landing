import { memo } from "react";

import {
  Box,
  chakra,
  Heading,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";

import ImageLazyloadWithoutRatio from "@components/image-lazyload/without-aspect-ratio";

import { IArticle } from "./article";

const ArticleImageWideCard: React.FC<IArticle.IWithImage> = ({
  body,
  // href,
  title,
  image,
  footer,
  ...rest
}): JSX.Element => {
  const headingColor = useColorModeValue("gray.800", "whiteAlpha.800");
  const bodyColor = useColorModeValue("gray.600", "gray.400");
  return (
    <chakra.article
      maxW={{ lg: "4xl" }}
      shadow={{ sm: "lg" }}
      rounded={{ base: "lg" }}
      display={{ md: "flex" }}
      bg={useColorModeValue("white", "gray.900")}
      {...rest}
    >
      <Box w={{ base: "full", md: "50%" }}>
        <ImageLazyloadWithoutRatio
          // rounded={["none", "none", "lg", "lg"]}
          h="full"
          image={image}
          roundedTop="lg"
          objectFit="cover"
          roundedBottom={["none", "none", "lg", "lg"]}
        />
      </Box>

      <Box p={[6, 8, 10]} w={{ md: "50%" }}>
        {title && (
          <Heading
            fontWeight="bold"
            color={headingColor}
            noOfLines={[0, 0, 2, 2]}
            fontSize={["2xl", "2xl", "3xl"]}
          >
            {title}
          </Heading>
        )}
        {body && (
          <Text mt={4} noOfLines={4} color={bodyColor}>
            {body}
          </Text>
        )}

        {footer && <Box mt={8}>{footer}</Box>}
      </Box>
    </chakra.article>
  );
};

ArticleImageWideCard.displayName = "ArticleImageWideCard";
export default memo(ArticleImageWideCard);
