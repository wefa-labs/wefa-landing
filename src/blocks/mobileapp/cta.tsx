import { isValidElement, memo, useRef } from "react";

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
  HStack,
  Text,
  BoxProps,
} from "@chakra-ui/react";

import { useRefScrollProgress } from "@definitions/hooks/useRefScrollProgress";
import { __DEV__ } from "@definitions/utils";

import ImageWithoutRatio from "@components/image-lazyload/without-aspect-ratio";

export const MotionBox = motion<BoxProps>(Box);

const CTA: React.FC<
  {
    title: string | React.ReactNode;
    body: string | React.ReactNode;
    image: imageObject;
    button: React.ReactNode;
  } & ChakraProps &
    ThemingProps
> = ({ title, button, body, image, fontFamily, ...rest }): JSX.Element => {
  const ref = useRef<HTMLDivElement | null>(null);
  const box = useRefScrollProgress(ref, 0);

  const { scrollYProgress } = useViewportScroll();

  const boxScale = useTransform(
    scrollYProgress,
    [box.start as number, box.end as number],
    [0.18, 1],
  ) as number & MotionValue<number>;

  const boxOpacity = useTransform(
    scrollYProgress,
    [box.start as number, box.end as number],
    [0.25, 1],
  ) as number & MotionValue<number>;

  const boxY = useTransform(
    scrollYProgress,
    [box.start as number, box.end as number],
    [200, 0],
  ) as number & MotionValue<number>;

  return (
    <Box ref={ref} {...rest}>
      <Stack
        rounded="xl"
        direction={["column", "column", "row", "row"]}
        alignItems={["unset", "unset", "flex-end", "flex-end"]}
        spacing={10}
      >
        <MotionBox
          style={{
            opacity: boxOpacity,
            translateY: boxY,
          }}
          flex={1}
          px={[10, 10, 5]}
          py={[10, 10, 10, 20]}
          maxWidth={["full", "full", "30rem"]}
          textAlign={["center", "center", "left"]}
        >
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
                <Text pb={[10, 10, 5]} fontSize="18px">
                  {body}
                </Text>
              )}
            </>
          )}
          {button && (
            <HStack justify={["center", "center", "start"]} spacing={2}>
              {button}
            </HStack>
          )}
        </MotionBox>
        <Box
          borderBottomWidth={{ base: "1px", md: 0 }}
          borderColor={"blackAlpha.300"}
          flex={1}
        >
          {image && (
            <MotionBox
              style={{
                opacity: boxOpacity,
                scale: boxScale,
                // translateY: boxY,
              }}
              mx="auto"
              maxWidth="26rem"
            >
              <ImageWithoutRatio
                color="black"
                mt={[0, 0, "-100px"]}
                image={image}
              />
            </MotionBox>
          )}
        </Box>
      </Stack>
      {/* </MotionBox> */}
    </Box>
  );
};

if (__DEV__) {
  CTA.displayName = "CTA";
}

export default memo(CTA);
