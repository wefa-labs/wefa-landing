import { memo } from "react";

import {
  Box,
  BoxProps,
  Flex,
  Badge,
  Heading,
  HeadingProps,
  AspectRatio,
  Text,
  LinkBox,
  LinkOverlay,
  TextProps,
} from "@chakra-ui/react";
import { SystemProps } from "@chakra-ui/system";

import ImageLazyload from "@components/image-lazyload";
import ImageLazyloadWithoutAspectRatio from "@components/image-lazyload/without-aspect-ratio";

import { IArticle } from "./article";

type T_ArticleOverlaySimpleCard = Omit<
  IArticle.IProps,
  "avatar" | "author" | "authorHref" | "meta"
>;

const ArticleOverlaySimpleCard: React.FC<
  PartialBy<T_ArticleOverlaySimpleCard, "body" | "title"> & {
    align?: SystemProps["alignItems"];
    justify?: SystemProps["justifyContent"];
    hasRatio?: boolean;
    ratio?: number;
    badge?: string;
  }
> = ({
  href,
  image,
  tag,
  badge,
  title,
  body,
  bg,
  bgGradient,
  color,
  rounded = "lg",
  height = "320px",
  maxW = "320px",
  align,
  hasRatio = false,
  ratio,
  justify,
  _hover = { transform: "translateY(-5px)" },
  ...rest
}): JSX.Element => {
  const tagStyle: TextProps = {
    textTransform: "uppercase",
    fontSize: "sm",
    letterSpacing: "0.1em",
    fontWeight: "500",
    pb: 2,
    // mb: 4,
    // borderBottomWidth: "1px",
    // borderColor: "currentColor",
    _after: {
      content: "''",
      d: "block",
      w: "full",
      h: "px",
      // bg: "green.500",
      bg: "currentColor",
      opacity: 0.15,
      mt: 4,
    },
  };
  const headingStyle: HeadingProps = {
    as: "h3",
    mb: 2,
    fontSize: "2xl",
    // fontWeight: 700,
  };
  const bodyStyle = {
    opacity: 0.8,
    // mt: 2,
  };
  const badgeStyle: BoxProps = {
    zIndex: 10,
    pos: "absolute",
    right: 8,
    top: 8,
  };
  return (
    <LinkBox
      as="article"
      rounded={rounded}
      transition="all 250ms ease"
      _hover={_hover}
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
        // textAlign="end"
        // align="end"
        // justify="end"
        {...rest}
      >
        {badge && (
          <Box {...badgeStyle}>
            <Badge>{badge}</Badge>
          </Box>
        )}
        {image && (
          <>
            {hasRatio ? (
              <ImageLazyload
                h="full"
                w="full"
                objectFit="cover"
                ratio={ratio}
                rounded={rounded}
                image={image}
                zIndex="0"
              />
            ) : (
              <ImageLazyloadWithoutAspectRatio
                h="full"
                w="full"
                objectFit="cover"
                rounded={rounded}
                image={image}
                zIndex="0"
              />
            )}
          </>
        )}
        {!image && ratio ? (
          <AspectRatio ratio={ratio}>
            <></>
          </AspectRatio>
        ) : null}
        <Flex
          height="full"
          width="full"
          pos="absolute"
          top={0}
          left={0}
          direction="column"
          rounded={rounded}
          color={color}
          bg={bg}
          bgGradient={bgGradient}
          p={8}
          zIndex={2}
          align={align}
          justify={justify}
        >
          <LinkOverlay href={href}>
            {tag && <Text {...tagStyle}>{tag}</Text>}
            {title && <Heading {...headingStyle}>{title}</Heading>}
            {body && <Text {...bodyStyle}>{body}</Text>}
          </LinkOverlay>
        </Flex>
      </Box>
    </LinkBox>
  );
};

export default memo(ArticleOverlaySimpleCard);
