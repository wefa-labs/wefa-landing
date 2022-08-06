import { memo, useEffect, isValidElement } from "react";

import { motion, useAnimation } from "framer-motion";
import { useTrackVisibility } from "react-intersection-observer-hook";

import {
  Box,
  Container,
  ChakraProps,
  ThemingProps,
  Flex,
  Stack,
  Text,
  BoxProps,
  useColorModeValue,
} from "@chakra-ui/react";

import { __DEV__ } from "@definitions/utils";

import { Section } from "@components/common";
import OliveBranchesIcon from "@components/icons/olive-branches";

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

const AwardBlock: React.FC<
  {
    title?: string | React.ReactNode;
    body?: string | React.ReactNode;
    items: { icon: React.ReactNode; title: string; subtitle: string }[];
  } & ChakraProps &
    ThemingProps
> = ({ title, items = [], fontFamily, ...rest }): JSX.Element => {
  const [ref, { wasEverVisible }] = useTrackVisibility();
  const controls = useAnimation();

  useEffect(() => {
    if (wasEverVisible) {
      controls.start("visible");
    }
    if (!wasEverVisible) {
      controls.start("hidden");
    }
  }, [wasEverVisible]);

  return (
    <Section pb={[10, 18, 20, 0]} {...rest}>
      <Container ref={ref} maxWidth="container.xl">
        <MotionBox
          variants={container}
          initial="initial"
          animate={controls}
          exit="hidden"
        >
          {title && (
            <Box>
              {isValidElement(title) ? (
                title
              ) : (
                <Text
                  mb={10}
                  textAlign="center"
                  fontWeight={400}
                  fontSize="18px"
                  fontFamily={fontFamily}
                >
                  {/* Most awarded App in 2021 */}
                  {title}
                </Text>
              )}
            </Box>
          )}
          <Stack
            alignItems="center"
            justify="center"
            spacing={10}
            direction={["column", "column", "row", "row"]}
          >
            {items.map((item) => (
              <Box w="full">
                <MotionBox
                  variants={item_variant}
                  d="flex"
                  p={4}
                  mx="auto"
                  rounded="lg"
                  flex="1"
                  shadow="md"
                  bg={useColorModeValue("white", "blackAlpha.400")}
                  color={useColorModeValue("blackAlpha.600", "whiteAlpha.700")}
                  maxWidth="320px"
                  textAlign="center"
                  alignItems="center"
                  justifyContent="center"
                >
                  <OliveBranchesIcon color="current" w="25px" />
                  <Box mx={2} textAlign="center" fontWeight="700">
                    <Flex>
                      {item.icon}
                      <Text as="span">{item.title}</Text>
                    </Flex>
                    <Text display="block" as="span">
                      {item.subtitle}
                    </Text>
                  </Box>
                  <OliveBranchesIcon color="current" flip w="25px" />
                </MotionBox>
              </Box>
            ))}
          </Stack>
        </MotionBox>
      </Container>
    </Section>
  );
};

if (__DEV__) {
  AwardBlock.displayName = "AwardBlock";
}

export default memo(AwardBlock);
