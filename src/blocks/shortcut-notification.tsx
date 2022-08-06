import { BiCommand } from "@react-icons";

import { memo, useState } from "react";

import { AnimatePresence, motion } from "framer-motion";

import {
  Box,
  BoxProps,
  CloseButton,
  Flex,
  Heading,
  Icon,
  Kbd,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";

const MotionBox = motion<BoxProps>(Box);

const variants = {
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
      duration: 1.55,
      staggerChildren: 0.45,
      delay: 5,
    },
  },
  hidden: { opacity: 0, scale: 0.8, y: 50 },
};

const ShortcutNotificationBlock = () => {
  const [show, setShow] = useState(true);

  return (
    <AnimatePresence>
      {show ? (
        <MotionBox
          bg={useColorModeValue("white", "black")}
          bottom={[0, 5, 5, 5]}
          left={[0, 4, 4, 4]}
          p={5}
          pos="fixed"
          rounded="lg"
          shadow="xl"
          w={["full", 320, 320, 320]}
          zIndex="sticky"
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={variants}
        >
          <Flex mb={3} align="center" justify="space-between">
            <Heading display="flex" alignItems="center" fontSize="lg">
              <Icon mr={2} as={BiCommand} />
              <Text as="span">Shortcut Tips</Text>
            </Heading>
            <CloseButton onClick={() => setShow(false)} size="sm" />
          </Flex>
          <Text as="span">
            You can use the <Kbd>CMD</Kbd> or <Kbd>CTRL</Kbd> + <Kbd>H</Kbd>{" "}
            shortcut to open the color palette. You can try the default colors
            on all pages.
          </Text>
        </MotionBox>
      ) : null}
    </AnimatePresence>
  );
};

export default memo(ShortcutNotificationBlock);
