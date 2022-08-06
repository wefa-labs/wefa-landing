import { MdInvertColors } from "@react-icons";

import React, { memo, useState, useEffect, useContext } from "react";

import { AnimatePresence, motion } from "framer-motion";
import { isHotkey } from "is-hotkey";

import {
  // Tooltip,
  Box,
  BoxProps,
  Button,
  ChakraProps,
  Icon,
  ThemingProps,
  useBoolean,
  useColorModeValue,
  VisuallyHidden,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";

import Theme from "@definitions/chakra/theme";
import { ThemeColorContext } from "@definitions/context";

// Excluded colors
const excludes = [
  "current",
  "transparent",
  "white",
  "black",
  "whiteAlpha",
  "blackAlpha",
  "brand",
  "header",
  "main",
  "github",
  "discord",
];

// color order
const order: { [key: string]: number } = {
  red: -20,
  pink: -19,
  purple: -18,
  deepPurple: -17,
  indigo: -16,
  blue: -15,
  deepBlue: -14,
  lightBlue: -13,
  cyan: -12,
  teal: -11,
  green: -10,
  lightGreen: -9,
  lime: -8,
  yellow: -7,
  amber: -6,
  orange: -5,
  deepOrange: -4,
  brown: -3,
  gray: -2,
  blueGray: -1,
};

export const MotionBox = motion<Omit<BoxProps, "transition">>(Box);

const variants = {
  hidden: {
    x: -100,
    transition: {
      ease: [0.25, 0.46, 0.45, 0.94], // easeOutQuad
      duration: 0.55,
    },
  },
  show: {
    x: 5,
    transition: {
      ease: [0.25, 0.46, 0.45, 0.94], // easeOutQuad
      duration: 0.55,
    },
  },
};

const ColorModeSwitcher: React.FC<
  Omit<ChakraProps, "transition"> & ThemingProps
> = (props): JSX.Element => {
  const colors = Object.keys(Theme.colors)
    .filter((c) => excludes.indexOf(c) === -1)
    .sort((a, b) => {
      const aOrder = order[a] ? order[a] : 0;
      const bOrder = order[b] ? order[b] : 0;
      return aOrder - bOrder;
    });
  const { colorScheme, setColorScheme } = useContext(ThemeColorContext);
  const [
    flag,
    setFlag, // eslint-disable-line @typescript-eslint/no-unused-vars
  ] = useBoolean();
  const [show, setShow] = useBoolean();
  const [intervalId, setIntervalId] = useState<NodeJS.Timer | null>(null);

  // Hotkey for toggle ColorModeSwitcher
  const isToggleHotkey = isHotkey("mod+h");
  // Hotkey for auto change color mode
  const isPlayHotkey = isHotkey("mod+p");

  const handleKeyDown = (event: KeyboardEvent) => {
    if (isToggleHotkey(event)) {
      event.stopPropagation();
      event.preventDefault();
      setShow.toggle();
    }
    if (isPlayHotkey(event)) {
      event.stopPropagation();
      event.preventDefault();
      setFlag.toggle();
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown, false);

    // cleanup this component
    return () => {
      window.removeEventListener("keydown", handleKeyDown, false);
    };
  }, []);

  useEffect(() => {
    if (flag) {
      handleClick();
    } else {
      if (intervalId) {
        clearInterval(intervalId);
        setIntervalId(null);
        return;
      }
    }
    return () => {
      if (intervalId) {
        clearInterval(intervalId);
        setIntervalId(null);
        return;
      }
    };
  }, [flag]);

  const handleClick = () => {
    let index = 0;
    const length = colors.length;

    const newIntervalId = setInterval(() => {
      setColorScheme(colors[index]);
      if (index + 1 < length) {
        index++;
      } else {
        index = 0;
      }
    }, 1000);
    setIntervalId(newIntervalId);
  };

  return (
    // <AnimatePresence exitBeforeEnter>
    <>
      <Box
        display={["inline-flex", "inline-flex", "none", "none"]}
        alignItems="center"
        justifyContent="end"
        pos="fixed"
        top="calc(50% - 24px / 2)"
        left={show ? "65px" : 1}
        zIndex="sticky"
        bg={useColorModeValue("white", "black")}
        color={useColorModeValue("black", "white")}
        rounded="xl"
        shadow="xl"
        w={8}
        h={8}
        p={1}
        cursor="pointer"
        onClick={() => setShow.toggle()}
        transition="all 0.65s cubic-bezier(.25, .46, .45, .94)"
      >
        <Icon w={6} h={6} as={MdInvertColors} />
      </Box>
      <AnimatePresence exitBeforeEnter>
        {show && (
          // <MotionBox initial="hidden" animate="show" variants={variants}>
          <MotionBox
            initial="hidden"
            animate="show"
            exit="hidden"
            variants={variants}
            display="initial"
            py={4}
            {...props}
          >
            <Wrap mx={2} data-testid="ColorModeSwitcher" justify="center">
              {colors.map((c, idx) => (
                <WrapItem key={`ColorModeSwitcher--item-${idx}`}>
                  {/* <Tooltip
                    hasArrow
                    label={c.toUpperCase()}
                    rounded="full"
                    placement="top"
                    // isDisabled={disabledTooltip}
                  > */}
                  <Button
                    data-testid={idx === 0 && "first-button"}
                    key={`ColorModeSwitcher--button-${c}`}
                    onClick={() => setColorScheme(c)}
                    minWidth={2}
                    height={2}
                    width={2}
                    variant="link"
                    title={c}
                    // disabled={c === colorScheme ? true : false}
                  >
                    <Box
                      bg={c === "black" ? c : `${c}.400`}
                      w={1}
                      p={1}
                      rounded="full"
                      transition="all 0.2s cubic-bezier(.08,.52,.52,1)"
                      transform={c === colorScheme ? "scale(2)" : "scale(1)"}
                    >
                      <VisuallyHidden>{c}</VisuallyHidden>
                    </Box>
                  </Button>
                  {/* </Tooltip> */}
                </WrapItem>
              ))}
            </Wrap>
            {/* </Box> */}
          </MotionBox>
        )}
      </AnimatePresence>
    </>
  );
};

export default memo(ColorModeSwitcher);
