import { useEffect, memo } from "react";

import { motion, useAnimation } from "framer-motion";
import { useTrackVisibility } from "react-intersection-observer-hook";

import {
  Box,
  Circle,
  ChakraProps,
  ThemingProps,
  Heading,
  Text,
  BoxProps,
} from "@chakra-ui/react";

import { __DEV__ } from "@definitions/utils";

export const MotionBox = motion<BoxProps>(Box);

// Animation variants
const container = {
  visible: {
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.15,
    },
  },
};
const item_variant = {
  initial: { y: 120, opacity: 0 },
  hidden: {
    y: 120,
    opacity: 0,
    duration: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: "0.350",
      type: "spring",
      stiffness: 250,
      damping: 60,
      mas: 1,
      // repeat: Infinity,
    },
  },
};

const FeaturesListHorizontal: React.FC<
  {
    items: {
      bg?: string;
      icon: React.ReactNode;
      title: string | React.ReactNode;
      body: string | React.ReactNode;
    }[];
  } & ChakraProps &
    ThemingProps
> = ({ items = [], fontFamily, ...rest }): JSX.Element => {
  const [ref, { wasEverVisible }] = useTrackVisibility();
  const controls = useAnimation();

  useEffect(() => {
    if (wasEverVisible) controls.start("visible");
    if (!wasEverVisible) controls.start("hidden");
  }, [wasEverVisible]);

  return (
    <Box ref={ref} {...rest}>
      <MotionBox
        w="full"
        d="flex"
        alignItems="center"
        justifyContent="center"
        flexWrap="wrap"
        variants={container}
        initial="initial"
        animate={controls}
        exit="hidden"
      >
        {items.map((item, idx) => (
          <MotionBox key={idx} variants={item_variant} d="flex" m={5}>
            <Box mx="auto" maxW="350px" textAlign="center">
              {item.icon && (
                <Circle
                  mx="auto"
                  bg={item.bg ? item.bg : "gray.200"}
                  size="100px"
                >
                  {item.icon}
                </Circle>
              )}
              <Heading
                as="h4"
                my={2}
                fontSize="20px"
                fontWeight="400"
                fontFamily={fontFamily}
              >
                {item.title}
              </Heading>
              <Text textAlign="center">{item.body}</Text>
            </Box>
          </MotionBox>
        ))}
      </MotionBox>
    </Box>
  );
};

if (__DEV__) {
  FeaturesListHorizontal.displayName = "FeaturesListHorizontal";
}
export default memo(FeaturesListHorizontal);
