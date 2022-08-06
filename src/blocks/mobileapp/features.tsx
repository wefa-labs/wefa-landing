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
  Heading,
  Stack,
  Text,
  BoxProps,
} from "@chakra-ui/react";

import { useRefScrollProgress } from "@definitions/hooks/useRefScrollProgress";
import { __DEV__ } from "@definitions/utils";

import ImageLazyload from "@components/image-lazyload";

export const MotionBox = motion<BoxProps>(Box);

const Features: React.FC<
  {
    title: string | React.ReactNode;
    body: string | React.ReactNode;
    image: imageObject;
  } & ChakraProps &
    ThemingProps
> = ({ title, body, image, fontFamily, ...rest }): JSX.Element => {
  const ref = useRef<HTMLDivElement | null>(null);
  const box = useRefScrollProgress(ref, 0);

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
        }}
      >
        <Stack
          direction={["column", "column", "row", "row"]}
          alignItems={["unset", "unset", "center", "center"]}
        >
          {image && (
            <Box mt="2rem" overflow="visible" flex={1}>
              <ImageLazyload color="black" image={image} />
            </Box>
          )}

          <Box flex="1">
            <Box maxWidth={["full", "full", "30rem"]}>
              {title && (
                <>
                  {isValidElement(title) ? (
                    title
                  ) : (
                    <Heading
                      fontSize="32px"
                      mb={4}
                      fontWeight="400"
                      fontFamily={fontFamily}
                    >
                      {title}
                    </Heading>
                  )}
                </>
              )}
              {body && (
                <>
                  {isValidElement(body) ? (
                    body
                  ) : (
                    <Text fontSize="18px">{body}</Text>
                  )}
                </>
              )}
            </Box>
          </Box>
        </Stack>
      </MotionBox>
    </Box>
  );
};

if (__DEV__) {
  Features.displayName = "Features";
}
export default memo(Features);
