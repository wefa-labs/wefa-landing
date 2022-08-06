import { memo, useState } from "react";

import { AnimatePresence, motion } from "framer-motion";

import {
  Box,
  Container,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";

import customScrollbar from "@definitions/utils/scrollbar";

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
      bg="gray.50"
      height={height}
      overflow="hidden"
      pos="relative"
      {...rest}
    >
      {/* {items.map((i, idx) => ())} */}
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
            justify="space-between"
            alignItems="center"
            direction={["column", "column", "row"]}
            h="full"
          >
            <Flex
              align="center"
              pos="relative"
              h={"100vh"}
              w={["full", "full", "50%"]}
              mt={[20, 10, 0]}
              // bg="whiteAlpha.500"
            >
              <SlideHeading title={items[active].title} />
            </Flex>
            <Flex
              direction="column"
              align={["center", "center", "end"]}
              w={["full", "full", "50%"]}
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
                  <Box key={idx} {...boxStyle}>
                    <Text onClick={() => setActive(idx)} {...itemStyle}>
                      {i.title}
                    </Text>
                    <Box
                      mt={2}
                      h="3px"
                      bg="whiteAlpha.500"
                      // colorScheme={colorScheme}
                      rounded="xl"
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

const SlideHeading = ({ title }: { title: string }) => {
  return (
    <AnimatePresence>
      <MotionBox
        key={title}
        initial={{
          opacity: 0,
          // y: 40,
          transition: { ease: [0.61, 1, 0.88, 1], duration: 0.25 },
        }}
        animate={{
          opacity: 1,
          // y: 0,
          transition: { ease: [0.61, 1, 0.88, 1], duration: 0.25 },
        }}
        exit={{
          opacity: 0,
          // y: -40,
          transition: { ease: [0.61, 1, 0.88, 1], duration: 0.25 },
        }}
        pos="absolute"
        w="full"
      >
        <Heading
          w="full"
          textAlign={["center", "center", "start"]}
          lineHeight="1.2"
        >
          <Text as="span">{title}</Text>
        </Heading>
      </MotionBox>
    </AnimatePresence>
  );
};

const SlideshowImage: React.FC<{ image: imageObject }> = memo(
  ({ image, ...rest }) => {
    return (
      <AnimatePresence>
        <MotionBox
          key={image.src}
          initial={{
            opacity: 0,
            // y: 40,
            // scale: 1.1,
            // transition: { ease: [0.61, 1, 0.88, 1], duration: 0.35 },
          }}
          animate={{
            opacity: 1,
            // y: 0,
            // scale: 1,
            // transition: { ease: [0.61, 1, 0.88, 1], duration: 0.35 },
          }}
          exit={{
            opacity: 0,
            // y: -40,
            // scale: 1.1,
            // transition: { ease: [0.61, 1, 0.88, 1], duration: 0.35 },
          }}
          pos="absolute"
          top={0}
          left={0}
          w="full"
          h="full"
        >
          {/* <ImageLazyloadWithoutAspectRatio */}
          <Image
            // pos="absolute"
            top={0}
            left={0}
            // visibility={isActive ? "visible" : "hidden"}
            objectFit="cover"
            w="full"
            h="full"
            // image={image}
            src={image.src}
            srcSet={image.srcSet}
            zIndex="0"
            align="center"
            {...rest}
          />
        </MotionBox>
      </AnimatePresence>
    );
  },
);

export default memo(ArticleSlideshow);
