import { isValidElement, useRef, memo } from "react";

import {
  motion,
  useViewportScroll,
  useTransform,
  MotionValue,
} from "framer-motion";

import {
  Box,
  ChakraProps,
  ThemingProps,
  Text,
  Heading,
  BoxProps,
} from "@chakra-ui/react";

import { useRefScrollProgress } from "@definitions/hooks/useRefScrollProgress";
import { __DEV__ } from "@definitions/utils";

export const MotionBox = motion<BoxProps>(Box);

const AppIntroBlock: React.FC<
  {
    title: string | React.ReactNode;
    body: string | React.ReactNode;
  } & ChakraProps &
    ThemingProps
> = ({ title, body, fontFamily, ...rest }): JSX.Element => {
  const ref = useRef<HTMLDivElement | null>(null);
  const box = useRefScrollProgress(ref);

  const { scrollYProgress } = useViewportScroll();

  const boxScale = useTransform(
    scrollYProgress,
    [box.start as number, box.end as number],
    [0.8, 1],
  ) as number & MotionValue<number>;

  const boxOpacity = useTransform(
    scrollYProgress,
    [box.start as number, box.end as number],
    [0.25, 1],
  ) as number & MotionValue<number>;

  return (
    <Box ref={ref} {...rest}>
      <MotionBox
        style={{
          opacity: boxOpacity,
          scale: boxScale,
          // scaleY: scrollYProgress,
        }}
      >
        {isValidElement(title) ? (
          title
        ) : (
          <Heading
            fontSize={[38, 48, 48]}
            textAlign="center"
            fontWeight={400}
            fontFamily={fontFamily}
            // mb={32}
            mt={0}
          >
            {title}
          </Heading>
        )}
        {body && isValidElement(body) ? (
          body
        ) : (
          <Text
            mt={10}
            textAlign="center"
            fontSize="20px"
            maxW="800px"
            mx="auto"
          >
            {body}
          </Text>
        )}
      </MotionBox>
    </Box>
  );
};

if (__DEV__) {
  AppIntroBlock.displayName = "AppIntroBlock";
}
export default memo(AppIntroBlock);
