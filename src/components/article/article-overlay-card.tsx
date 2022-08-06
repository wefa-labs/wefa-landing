import { memo } from "react";

import {
  Box,
  Heading,
  Text,
  LinkBox,
  LinkOverlay,
  TextProps,
  Stack,
  Avatar,
  Flex,
} from "@chakra-ui/react";

import ImageLazyloadWithoutAspectRatio from "@components/image-lazyload/without-aspect-ratio";

import { IArticle } from "./article";

const ArticleOverlayCard: React.FC<PartialBy<IArticle.IProps, "body">> = ({
  author,
  // authorHref,
  avatar,
  meta,
  href,
  image,
  tag,
  title,
  body,
  bg,
  bgGradient,
  color,
  rounded = "lg",
  height = "320px",
  maxW = "640px",
  ...rest
}): JSX.Element => {
  const headingStyle = {
    fontSize: "2xl",
    noOfLines: 2,
  };
  const authorStyle = {
    fontSize: "xl",
    lineHeight: 1,
    fontWeight: 600,
  };
  const metaStyle = {
    fontSize: "sm",
    opacity: 0.75,
  };
  const tagStyle: TextProps = {
    textTransform: "uppercase",
    fontSize: "sm",
    opacity: 0.8,
    fontWeight: 600,
    letterSpacing: "0.1em",
    mb: 2,
  };
  const bodyStyle = {
    noOfLines: 2,
    opacity: 0.8,
  };
  return (
    <LinkBox
      as="article"
      rounded={rounded}
      transition="all 250ms ease"
      _hover={{ transform: "translateY(-5px)" }}
      height={height}
      maxW={maxW}
      w="full"
      overflow="hidden"
    >
      <Box
        height="full"
        width="full"
        rounded={rounded}
        pos="relative"
        {...rest}
      >
        <ImageLazyloadWithoutAspectRatio
          h="full"
          w="full"
          objectFit="cover"
          rounded={rounded}
          image={image}
          zIndex="0"
        />
        <Flex
          rounded={rounded}
          color={color}
          bg={bg}
          bgGradient={bgGradient}
          p={8}
          height="full"
          width="full"
          top={0}
          left={0}
          pos="absolute"
          zIndex={2}
          direction="column"
        >
          <Stack direction="row" spacing={4} alignItems="center">
            {/*
             * TODO: add srcSet to Avatar
             * srcSet={AvatarImage?.srcSet}
             * issue: https://github.com/chakra-ui/chakra-ui/issues/5256
             */}
            <Avatar src={avatar.src} name={author} />
            <Stack direction="column" spacing={0}>
              <Text {...authorStyle}>{author}</Text>
              <Text {...metaStyle}>{meta}</Text>
            </Stack>
          </Stack>
          <LinkOverlay mt="auto" href={href}>
            <Text {...tagStyle}>{tag}</Text>
            <Heading {...headingStyle}>{title}</Heading>
            <Text {...bodyStyle}>{body}</Text>
          </LinkOverlay>
        </Flex>
      </Box>
    </LinkBox>
  );
};

export default memo(ArticleOverlayCard);
