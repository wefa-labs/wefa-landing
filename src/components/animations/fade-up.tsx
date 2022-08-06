import React, { Children, memo, useEffect } from "react";

import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import {
  Box,
  BoxProps,
  SimpleGrid,
  SimpleGridProps,
  Stack,
  HStack,
  VStack,
  StackProps,
} from "@chakra-ui/react";

import { IAnimations } from "./animations";

export const MotionBox = motion<BoxProps>(Box);
export const MotionStack = motion<StackProps>(Stack);

const defaultVariants = {
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      // type: "tween",
      ease: [0.25, 0.46, 0.45, 0.94], // easeOutQuad
      // type: "spring",
      // stiffness: 100,
      // damping: 25,
      // mass: 0.5,
      duration: 0.55,
      staggerChildren: 0.45,
    },
  },
  hidden: { opacity: 0, scale: 0.8, y: 50 },
};

const item = {
  hidden: { opacity: 0, scale: 0.8, y: 50 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      ease: [0.25, 0.46, 0.45, 0.94], // easeOutQuad
      duration: 0.55,
      staggerChildren: 0.45,
    },
  },
};

/**
 * Default Fade up
 */
const FadeUp: React.FC<Omit<IAnimations.IProps, "transition">> = ({
  variants,
  childVariants,
  children,
  ...rest
}) => {
  const controls = useAnimation();
  const [ref, inView] = useInView();
  useEffect(() => {
    if (inView) controls.start("visible");
  }, [controls, inView]);

  return (
    <MotionBox
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={variants ? variants : defaultVariants}
      {...rest}
    >
      {Children.map(children, (child) => (
        <motion.div variants={childVariants ? childVariants : item}>
          {child}
        </motion.div>
      ))}
    </MotionBox>
  );
};

/**
 * Fade up Stack component
 */
export const FadeUpStack: React.FC<
  Omit<StackProps, "transition"> & Omit<IAnimations.IProps, "transition">
> = memo(({ variants, childVariants, children, flex, ...rest }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView();
  useEffect(() => {
    if (inView) controls.start("visible");
  }, [controls, inView]);

  return (
    <MotionBox
      ref={ref}
      animate={controls}
      initial="hidden"
      flex={flex}
      variants={variants ? variants : defaultVariants}
    >
      <Stack {...rest}>
        {Children.map(children, (child) => (
          <MotionBox
            width="full"
            flex="1"
            variants={childVariants ? childVariants : item}
          >
            {child}
          </MotionBox>
        ))}
      </Stack>
    </MotionBox>
  );
});

/**
 * Fade up VStack component
 */
export const FadeUpVStack: React.FC<
  Omit<StackProps, "transition"> & Omit<IAnimations.IProps, "transition">
> = memo(({ variants, childVariants, children, flex, ...rest }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView();
  useEffect(() => {
    if (inView) controls.start("visible");
  }, [controls, inView]);

  return (
    <MotionBox
      ref={ref}
      animate={controls}
      initial="hidden"
      flex={flex}
      variants={variants ? variants : defaultVariants}
    >
      <VStack {...rest}>
        {Children.map(children, (child) => (
          <MotionBox
            // width="full"
            variants={childVariants ? childVariants : item}
          >
            {child}
          </MotionBox>
        ))}
      </VStack>
    </MotionBox>
  );
});

/**
 * Fade up HStack component
 */
export const FadeUpHStack: React.FC<
  Omit<StackProps, "transition"> & Omit<IAnimations.IProps, "transition">
> = memo(({ variants, childVariants, children, flex, ...rest }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView();
  useEffect(() => {
    if (inView) controls.start("visible");
  }, [controls, inView]);

  return (
    <MotionBox
      ref={ref}
      animate={controls}
      initial="hidden"
      flex={flex}
      variants={variants ? variants : defaultVariants}
    >
      <HStack {...rest}>
        {Children.map(children, (child) => (
          <MotionBox
            // width="full"
            variants={childVariants ? childVariants : item}
          >
            {child}
          </MotionBox>
        ))}
      </HStack>
    </MotionBox>
  );
});

export const FadeUpGrid: React.FC<
  Omit<SimpleGridProps, "transition"> & Omit<IAnimations.IProps, "transition">
> = memo(({ variants, childVariants, children, flex, ...rest }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView();
  useEffect(() => {
    if (inView) controls.start("visible");
  }, [controls, inView]);

  return (
    <MotionBox
      ref={ref}
      animate={controls}
      initial="hidden"
      flex={flex}
      variants={variants ? variants : defaultVariants}
    >
      <SimpleGrid {...rest}>
        {Children.map(children, (child) => (
          <MotionBox
            width="full"
            flex="1"
            variants={childVariants ? childVariants : item}
          >
            {child}
          </MotionBox>
        ))}
      </SimpleGrid>
    </MotionBox>
  );
});

export default memo(FadeUp);
