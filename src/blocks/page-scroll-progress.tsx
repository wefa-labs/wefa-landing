import {
  motion,
  useViewportScroll,
  useSpring,
  useTransform,
} from "framer-motion";

import {
  Box,
  chakra,
  ChakraProps,
  ThemingProps,
  BoxProps,
  useToken,
} from "@chakra-ui/react";

import { __DEV__ } from "@definitions/utils";

export const MotionBox = motion<BoxProps>(Box);

const PageScrollProgressBlock: React.FC<ChakraProps & ThemingProps> = ({
  color = "gray.400",
  ...rest
}): JSX.Element => {
  const { scrollYProgress } = useViewportScroll();
  const yRange = useTransform(scrollYProgress, [0, 0.9], [0, 1]);
  const pathLength = useSpring(yRange, { stiffness: 400, damping: 90 });
  return (
    <Box pos="fixed" top="0" left={"50%"} zIndex="10" {...rest}>
      {/* <Text>{scrollYProgress}</Text> */}
      <Box w="60px" h="60px">
        <chakra.svg className="progress-icon" viewBox="0 0 60 60">
          <motion.path
            fill="none"
            strokeWidth="5"
            stroke={useToken("colors", color as string)}
            strokeDasharray="0 1"
            d="M 0, 20 a 20, 20 0 1,0 40,0 a 20, 20 0 1,0 -40,0"
            style={{
              pathLength,
              rotate: 90,
              translateX: 5,
              translateY: 5,
              scaleX: -1, // Reverse direction of line animation
            }}
          />
        </chakra.svg>
      </Box>
    </Box>
  );
};

if (__DEV__) {
  PageScrollProgressBlock.displayName = "PageScrollProgressBlock";
}

export default PageScrollProgressBlock;
