import React, { memo, useEffect, useState } from "react";

import { motion, useAnimation, Variants } from "framer-motion";

import { Box, BoxProps, Text, keyframes } from "@chakra-ui/react";

import { ITextTyping } from "./text-typing";

export const MotionBox = motion<BoxProps>(Box);

const TextTyping: React.FC<ITextTyping.IProps> = ({
  items,
  color,
  fontSize,
  fontWeight,
  bgGradient,
  lineHeight = 1.2,
  bgClip,
  ...rest
}) => {
  const controls = useAnimation();
  const [item, setItem] = useState(0);

  const animation = {
    initial: {
      // opacity: 0,
      width: "2%",
    },
    start: {
      // opacity: 1,
      width: "100%",
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 25,
        duration: 1.5,
        repeat: 1,
        repeatType: "reverse",
        repeatDelay: 2,
        delay: 0,
      },
    },
  };

  const nextAnimation = () => {
    const nextIdx = (item + 1) % items.length;
    setItem(nextIdx);
    controls.start("start");
  };

  useEffect(() => {
    if (items.length) {
      controls.start("start");
    }
  }, []);

  const blink = keyframes`
    0% { opacity: 1;}
    50% { opacity: 0;}
    100% { opacity: 1;}
  `;
  const blinkAnimation = `${blink} infinite 1s linear`;

  const hasClip = Boolean(bgClip && bgGradient);

  return (
    <Box d="flex" alignItems="center" w="fit-content" {...rest}>
      <MotionBox
        ml={-2}
        d="inline-block"
        position="relative"
        initial="initial"
        variants={animation as Variants}
        animate={controls}
        overflow="hidden"
        fontSize={fontSize}
        color={color ? color : "currentColor"}
        _after={{
          position: "absolute",
          display: "block",
          right: 0,
          top: "calc(50% - 1.5em)",
          width: "0.1em",
          height: "3em",
          content: "''",
          bg: "currentColor",
          bgGradient,
          animation: blinkAnimation,
        }}
        onAnimationComplete={() => nextAnimation()}
      >
        <Text
          pl={2}
          pr={4}
          position="relative"
          d="inline-block"
          whiteSpace="nowrap"
          lineHeight={lineHeight}
          fontWeight={fontWeight}
          color={color ? color : "currentColor"}
          bgGradient={hasClip ? bgGradient : null}
          fontSize={fontSize}
          bgClip={bgClip}
        >
          {items[item]}
        </Text>
      </MotionBox>
    </Box>
  );
};

TextTyping.displayName = "TextTyping";
export default memo(TextTyping);
