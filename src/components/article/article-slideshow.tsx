import { memo, useState } from "react";

import { AnimatePresence, motion } from "framer-motion";

import NextLink from "next/link";

import { ArrowForwardIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Container, // ChakraProps,
  ThemingProps,
  Flex,
  Heading,
  Stack,
  Text,
} from "@chakra-ui/react";

import { __DEV__ } from "@definitions/utils";
import customScrollbar from "@definitions/utils/scrollbar";

import ImageLazyloadWithoutAspectRatio from "@components/image-lazyload/without-aspect-ratio";

import { IArticle } from "./article";

const MotionBox = motion(Box);

const ArticleSlideshow: React.FC<IArticle.ISlideshow> = ({
  items = [],
  bg = "blackAlpha.500",
  color = "whiteAlpha.800",
  colorScheme,
  duration = 5000,
  height = "500px",
  ...rest
}): JSX.Element => {
  const [active, setActive] = useState(0);
  // const controls = useAnimation();

  const boxStyle = {
    cursor: "pointer",
  };
  const itemStyle = {
    fontWeight: 500,
    noOfLines: [1, 1, 2, 2],
  };

  const completed = (e: string): void => {
    const nextIndex = (active + 1) % items.length;
    // console.log("onAnimationComplete", e);
    if (e === "animate") setActive(nextIndex);
  };

  const variants = {
    animate: {
      width: "100%",
      transition: { ease: "linear", duration: duration / 1000 },
    },
    stop: { width: "0%" },
    init: { display: "none", width: "0%" },
  };

  return (
    <Box
      overflow="hidden"
      bg="gray.50"
      height={height}
      pos="relative"
      {...rest}
    >
      <SlideshowImage image={items[active].image} />
      <Flex
        top={0}
        left={0}
        w="full"
        h="full"
        pos="absolute"
        align="center"
        bg={bg}
        color={color}
        zIndex={2}
      >
        <Container h="full" my={[10, 10, 20]} maxW="container.xl">
          <Flex
            h="full"
            alignItems="center"
            justify="space-between"
            direction={["column", "column", "row"]}
          >
            <Flex
              pos="relative"
              align="center"
              h={"100vh"}
              w={["full", "full", "80%"]}
              mt={[20, 10, 0]}
              // bg="whiteAlpha.500"
            >
              <SlideHeading
                colorScheme={colorScheme}
                title={items[active].title}
                href={items[active].href}
              />
            </Flex>

            <Flex
              direction="column"
              align={["center", "center", "end"]}
              w={["full", "full", "50%"]}
              // w="full"
            >
              <Stack
                direction={["row", "row", "column"]}
                spacing={6}
                w={["full", "full", "220px"]}
                mt={["auto", "auto", "unset"]}
                mb={[4, 4, 0]}
                overflowX="auto"
                sx={customScrollbar()}
              >
                {items.map((i, idx) => (
                  <Box flex="1" key={idx} {...boxStyle}>
                    <Text onClick={() => setActive(idx)} {...itemStyle}>
                      {i.title}
                    </Text>
                    <Box
                      mt={2}
                      h="3px"
                      rounded="xl"
                      bg="whiteAlpha.500"
                      // colorScheme={colorScheme}
                    >
                      <MotionBox
                        mt={2}
                        h="3px"
                        width="0%"
                        bg={`${colorScheme}.500`}
                        // colorScheme={colorScheme}
                        rounded="xl"
                        // animate={{ width: "100%", transition: { duration: 3 } }}
                        variants={variants}
                        willChange="transform"
                        animate={idx === active ? "animate" : "init"}
                        onAnimationComplete={completed}
                      />
                    </Box>
                  </Box>
                ))}
              </Stack>
            </Flex>
          </Flex>
        </Container>
      </Flex>
    </Box>
  );
};

const SlideHeading: React.FC<ThemingProps & { title: string; href?: string }> =
  memo(({ href, title, colorScheme }) => {
    const variants = {
      initial: {
        opacity: 0,
        y: 40,
        transition: {
          ease: [0.61, 1, 0.88, 1],
          duration: 0.35,
        },
      },
      animate: {
        opacity: 1,
        y: 0,
        transition: {
          ease: [0.61, 1, 0.88, 1],
          duration: 0.35,
        },
      },
      exit: {
        opacity: 0,
        y: -40,
        transition: {
          ease: [0.61, 1, 0.88, 1],
          duration: 0.35,
        },
      },
    };

    return (
      <AnimatePresence>
        <MotionBox
          variants={variants}
          initial="initial"
          animate="animate"
          exit="exit"
          key={title}
          willChange="transform"
          pos="absolute"
          w="full"
        >
          <Heading
            w="full"
            fontSize={["4xl", "5xl", "4xl", "5xl"]}
            textAlign={["center", "center", "start"]}
            lineHeight="1.1"
          >
            <Text as="span">{title}</Text>
          </Heading>
          {href && (
            <Flex key={href} justify={["center", "center", "start"]}>
              <NextLink href={href} passHref>
                <Button
                  as="a"
                  mt="4"
                  pos="absolute"
                  willChange="transform"
                  colorScheme={colorScheme}
                  rightIcon={<ArrowForwardIcon />}
                >
                  Read More
                </Button>
              </NextLink>
            </Flex>
          )}
        </MotionBox>
      </AnimatePresence>
    );
  });

if (__DEV__) {
  SlideHeading.displayName = "SlideHeading";
}

const SlideshowImage: React.FC<{ image: imageObject }> = memo(
  ({ image, ...rest }) => {
    return (
      <AnimatePresence>
        <MotionBox
          key={image.src}
          initial={{
            opacity: 0,
            y: 40,
            scale: 1.1,
            transition: { ease: [0.61, 1, 0.88, 1], duration: 0.35 },
          }}
          animate={{
            opacity: 1,
            y: 0,
            scale: 1,
            transition: { ease: [0.61, 1, 0.88, 1], duration: 0.35 },
          }}
          exit={{
            opacity: 0,
            y: -40,
            scale: 1.1,
            transition: { ease: [0.61, 1, 0.88, 1], duration: 0.35 },
          }}
          willChange="transform"
          pos="absolute"
          top={0}
          left={0}
          w="full"
          h="full"
        >
          {/* <Image */}
          <ImageLazyloadWithoutAspectRatio
            // pos="absolute"
            top={0}
            left={0}
            // visibility={isActive ? "visible" : "hidden"}
            objectFit="cover"
            w="full"
            h="full"
            image={image}
            // src={image.src}
            // srcSet={image.srcSet}
            zIndex="0"
            align="center"
            {...rest}
          />
        </MotionBox>
      </AnimatePresence>
    );
  },
);

if (__DEV__) {
  SlideshowImage.displayName = "SlideshowImage";
}

if (__DEV__) {
  ArticleSlideshow.displayName = "ArticleSlideshow";
}

export default memo(ArticleSlideshow);
