import { memo, useRef, isValidElement } from "react";

import {
  motion,
  MotionValue,
  useTransform,
  useViewportScroll,
} from "framer-motion";

import {
  Box,
  BoxProps,
  Circle,
  Flex,
  Heading,
  VStack,
  Text,
  useColorModeValue,
  useBreakpointValue,
} from "@chakra-ui/react";
import { ChakraProps, ThemingProps } from "@chakra-ui/system";

import { useRefScrollProgress } from "@definitions/hooks/useRefScrollProgress";
import { __DEV__ } from "@definitions/utils";

import ImageWithoutRatio from "@components/image-lazyload/without-aspect-ratio";

export const MotionBox = motion<BoxProps>(Box);

const FeaturesListVertical: React.FC<
  {
    title: string | React.ReactNode;
    body?: string | React.ReactNode;
    image: imageObject;
    items: {
      bg?: string;
      icon: React.ReactNode;
      title: string | React.ReactNode;
      body: string | React.ReactNode;
    }[];
  } & ChakraProps &
    ThemingProps
> = ({ title, body, image, items = [], fontFamily, ...rest }): JSX.Element => {
  const ref = useRef<HTMLDivElement | null>(null);
  const box = useRefScrollProgress(ref, 0);

  const { scrollYProgress } = useViewportScroll();

  const textColor = useColorModeValue("blackAlpha.800", "whiteAlpha.700");

  const boxScale = useTransform(
    scrollYProgress,
    [box.start as number, box.end as number],
    [0.8, 1],
  ) as number & MotionValue<number>;

  const transY = () => {
    const v = useBreakpointValue({ base: -100, md: -150, lg: -500 });
    return v ? v : 0;
  };

  const translateY = useTransform(
    scrollYProgress,
    [box.start as number, box.end as number],
    [transY(), 0],
  ) as number & MotionValue<number>;

  const boxOpacity = useTransform(
    scrollYProgress,
    [box.start as number, box.end as number],
    [0.25, 1],
  ) as number & MotionValue<number>;

  return (
    <Box width="full" ref={ref} {...rest}>
      <Flex
        alignItems="center"
        direction={["column-reverse", "column-reverse", "row"]}
      >
        <MotionBox
          flex="1"
          style={{
            opacity: boxOpacity,
            scale: boxScale,
          }}
        >
          <VStack
            mb={10}
            spacing={1}
            align={["center", "center", "start", "start"]}
          >
            {isValidElement(title) ? (
              title
            ) : (
              <Heading as="h3" fontWeight={500} fontFamily={fontFamily}>
                {title}
              </Heading>
            )}

            {isValidElement(body) ? (
              body
            ) : (
              <Text
                maxW={"550px"}
                fontSize="lg"
                color={textColor}
                textAlign={["center", "center", "start", "start"]}
              >
                {body}
              </Text>
            )}
          </VStack>

          <VStack width="full" direction={"column"} spacing={5}>
            {items.map((item, idx) => (
              <Box key={idx}>
                <Flex>
                  <Circle
                    mr={6}
                    bg={item.bg ? item.bg : "gray.200"}
                    size="60px"
                  >
                    {item.icon}
                  </Circle>
                  <Box>
                    <Heading
                      fontWeight={500}
                      fontFamily={fontFamily}
                      as="h4"
                      fontSize="22px"
                      mb={2}
                    >
                      {item.title}
                    </Heading>
                    <Text color={textColor} fontSize="lg">
                      {item.body}
                    </Text>
                  </Box>
                </Flex>
              </Box>
            ))}
          </VStack>
        </MotionBox>

        <Flex flex="1">
          <MotionBox
            flex="1"
            style={{
              scale: boxScale,
              translateY: translateY,
            }}
          >
            <Box mx="auto" width="fit-content">
              {image && (
                <ImageWithoutRatio
                  color="black"
                  maxHeight={"600px"}
                  image={image}
                />
              )}
            </Box>
          </MotionBox>
        </Flex>
      </Flex>
    </Box>
  );
};

if (__DEV__) {
  FeaturesListVertical.displayName = "FeaturesListVertical";
}

export default memo(FeaturesListVertical);
