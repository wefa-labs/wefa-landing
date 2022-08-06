/**
 * https://medium.com/the-andela-way/how-to-create-a-masonry-layout-component-using-react-f30ec9ca5e99
 * https://codepen.io/john555/pen/GYoyNd?editors=0010
 */
import React, { useState, memo, useEffect } from "react";

import { motion, AnimatePresence } from "framer-motion";

import {
  Box,
  BoxProps,
  Flex,
  SystemProps,
  ChakraProps,
  ThemingProps,
  ResponsiveValue,
} from "@chakra-ui/react";

import { __DEV__ } from "@definitions/utils";

interface IMasonrySimple extends ChakraProps, ThemingProps {
  column?: ResponsiveValue<number>;
  columnGap?: SystemProps["gridColumnGap"];
  items: React.ReactElement[];
}
export const MotionBox = motion<BoxProps>(Box);

const MasonrySimple: React.FC<IMasonrySimple> = ({
  column = 2,
  columnGap = 10,
  items = [],
  // children,
}) => {
  const [result, setResult] = useState<React.ReactElement[] | null>(null);

  const variants = {
    hidden: (custom: number) => ({
      opacity: 0,
      scale: 0,
      transition: { delay: custom * 0.2, duration: 0.25 },
    }),
    visible: (custom: number) => ({
      opacity: 1,
      scale: 1,
      transition: { delay: custom * 0.2, duration: 0.25 },
    }),
  };

  useEffect(() => {
    const columnWrapper = [];
    const content = [];

    if (!column) return;

    // create columns
    for (let i = 0; i < column; i++) {
      columnWrapper[i] = [];
    }

    // divide children into columns
    for (let i = 0; i < items.length; i++) {
      const columnIndex = i % (column as number);
      columnWrapper[columnIndex].push(
        <MotionBox
          key={`item-${items[i].props?.id}`}
          layout
          animate="visible"
          exit="hidden"
          initial="hidden"
          variants={variants}
          mb={columnGap}
        >
          {items[i]}
        </MotionBox>,
      );
    }

    // wrap children in each column with a div
    for (let i = 0; i < column; i++) {
      content.push(
        <Box
          id={`content-${i}`}
          key={`content-${i}`}
          flex="1"
          ml={i > 0 ? columnGap : 0}
        >
          {columnWrapper[i]}
        </Box>,
      );
    }
    setResult(content);
  }, [column, items]);
  return (
    <AnimatePresence exitBeforeEnter>
      <Flex>{result}</Flex>
    </AnimatePresence>
  );
};

if (__DEV__) {
  MasonrySimple.displayName = "MasonrySimple";
}

export default memo(MasonrySimple);
