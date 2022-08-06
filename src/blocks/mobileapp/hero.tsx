import { isValidElement, useEffect, useState, memo } from "react";

import {
  motion,
  useViewportScroll,
  useSpring,
  useTransform,
  MotionValue,
  useAnimation,
} from "framer-motion";

import {
  Box,
  chakra,
  Container,
  ChakraProps,
  ThemingProps,
  Flex,
  Heading,
  Text,
  BoxProps,
  useToken,
  useColorModeValue,
} from "@chakra-ui/react";

import { __DEV__ } from "@definitions/utils";

import { Section } from "@components/common";
import ImageWithoutRatio from "@components/image-lazyload/without-aspect-ratio";

export const MotionBox = motion<BoxProps>(Box);

const circle = {
  initial: { opacity: 0, scale: 0.5 },
  show: {
    opacity: 1,
    scale: 1,
    // transition: { duration: "0.35" },
    transition: {
      type: "spring",
      duration: 0.35,
      // bounce: 0.25,
      damping: 100,
      mass: 1,
      stiffness: 500,
    },
  },
};

const container = {
  enter: {
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.15,
    },
  },
};
const item = {
  initial: { y: 120, opacity: 0 },
  enter: {
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

const AppHeroBlock: React.FC<
  {
    title?: string | React.ReactNode;
    body?: string | React.ReactNode;
    image: imageObject;
    button: React.ReactNode;
  } & ChakraProps &
    ThemingProps
> = ({
  title,
  body,
  button,
  image,
  fontFamily,
  colorScheme = "gray",
  ...rest
}): JSX.Element => {
  const [isImageLoaded, setIsImageLoaded] = useState<boolean>(false);

  const { scrollY } = useViewportScroll();

  // const x = useMotionValue(200);
  const x = useSpring(0, { stiffness: 100 });
  // const y = useMotionValue(200);
  const y = useSpring(0, { stiffness: 100 });
  const y2 = useTransform(scrollY, [0, 400], [0, -100]);

  const rotateX = useTransform(x, [0, 400], [-15, 15]);
  const rotateY = useTransform(y, [0, 400], [-15, 15]);
  const moveScale = useTransform(x, [0, 400], [1, 1.1]) as number &
    MotionValue<number>;

  const controls = useAnimation();

  const fillColor = useColorModeValue(
    `${colorScheme}.400`,
    `${colorScheme}.200`,
  );

  function handleMouse(event: React.MouseEvent) {
    x.set(event.pageX);
    y.set(event.pageY);
  }

  useEffect(() => {
    if (isImageLoaded) {
      controls.start("show");
    }
  }, [isImageLoaded]);

  const headingFont = fontFamily;

  return (
    <Section
      // bg={bgColor}
      overflow="hidden"
      minHeight="100vh"
      pos="relative"
      p={0}
      m={0}
      onMouseMove={handleMouse}
      {...rest}
    >
      {/* Background Dots */}
      <MotionBox
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: -10 }}
        transition={{ duration: "1.8" }}
        zIndex="1"
        pos="absolute"
        w="100%"
        h="100%"
        overflow="visible"
        style={{
          y: y2,
        }}
      >
        <chakra.svg viewBox="0 0 1308 834" preserveAspectRatio="xMidYMid meet">
          <g
            id="Page-1"
            stroke="none"
            strokeWidth="1"
            fill="none"
            fillRule="evenodd"
          >
            <g id="Group" fill={useToken("colors", fillColor)}>
              <circle
                id="Oval"
                opacity="0.8"
                cx="184.111"
                cy="610.111"
                r="10.1108"
              ></circle>
              <circle id="Oval" cx="1297.11" cy="203.111" r="10.1108"></circle>
              <circle
                id="Oval"
                opacity="0.3"
                cx="21.1108"
                cy="800.111"
                r="10.1108"
              ></circle>
              <circle id="Oval" cx="10.465" cy="375.494" r="10.1108"></circle>
              <circle
                id="Oval"
                opacity="0.6"
                cx="1247.22"
                cy="670.224"
                r="7.22396"
              ></circle>
              <circle
                id="Oval"
                opacity="0.6"
                cx="1074.22"
                cy="416.224"
                r="7.22396"
              ></circle>
              <circle id="Oval" cx="200.617" cy="271.617" r="7.61667"></circle>
              <circle
                id="Oval"
                opacity="0.3"
                cx="1169.15"
                cy="11.1471"
                r="11.1471"
              ></circle>
              <circle
                id="Oval"
                opacity="0.8"
                cx="1232"
                cy="821.997"
                r="11.9968"
              ></circle>
              <circle
                id="Oval"
                opacity="0.3"
                cx="93.7298"
                cy="21.6864"
                r="7.22396"
              ></circle>
            </g>
          </g>
        </chakra.svg>
      </MotionBox>

      {/* Circle */}
      <MotionBox
        top="-110px"
        left="-169px"
        pos="absolute"
        height="745px"
        width="745px"
        zIndex={0}
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: "0.250" }}
        style={{
          x: rotateX,
          y: rotateY,
          scale: moveScale,
        }}
      >
        <chakra.svg
          preserveAspectRatio="xMidYMid meet"
          fill={useColorModeValue(`${colorScheme}.100`, `${colorScheme}.800`)}
          viewBox="0 0 100 100"
          mixBlendMode="overlay"
        >
          <circle cx="50" cy="50" r="45" />
        </chakra.svg>
      </MotionBox>

      <Container maxWidth="container.xl">
        <Flex
          pt={20}
          // pb={[10, 20, 0]}
          direction={["column-reverse", "column-reverse", "row"]}
          alignItems="center"
        >
          <Flex direction="column" zIndex={1} flex="1">
            <MotionBox variants={container} initial="initial" animate="enter">
              <MotionBox variants={item}>
                {isValidElement(title) ? (
                  title
                ) : (
                  <Heading
                    as="h1"
                    fontSize={["4xl", "5xl"]}
                    fontWeight="900"
                    fontFamily={headingFont}
                    color={useColorModeValue(
                      `${colorScheme}.800`,
                      `${colorScheme}.300`,
                    )}
                    maxWidth={["full", "full", "600px"]}
                  >
                    {title}
                  </Heading>
                )}
              </MotionBox>
              <MotionBox variants={item}>
                {isValidElement(body) ? (
                  body
                ) : (
                  <Text
                    maxWidth={["full", "full", "500px"]}
                    mt={6}
                    fontSize="20px"
                  >
                    {body}
                  </Text>
                )}
              </MotionBox>

              {button && <MotionBox variants={item}>{button}</MotionBox>}
            </MotionBox>
          </Flex>

          <Flex
            flex="1"
            minHeight="calc(100vh - 80px)"
            // w="50%"
            align="center"
            justify="center"
          >
            <MotionBox
              // initial={{ opacity: 0, scale: 0.5 }}
              // animate={{ opacity: 1, scale: 1 }}
              // transition={{ duration: "1.250" }}
              animate={controls}
              variants={circle}
              initial="initial"
              pos="absolute"
              height="500px"
              width="500px"
              zIndex={0}
            >
              <chakra.svg
                stroke={useColorModeValue(
                  `${colorScheme}.100`,
                  `${colorScheme}.700`,
                )}
                viewBox="0 0 100 100"
              >
                <circle
                  strokeWidth="1.2"
                  strokeDasharray="20,10,5,5,5,10"
                  strokeLinecap="round"
                  fill="none"
                  cx="50"
                  cy="50"
                  r="45"
                >
                  <animateTransform
                    attributeName="transform"
                    type="rotate"
                    from="0 50 50"
                    to="360 50 50"
                    dur="60s"
                    repeatCount="indefinite"
                  />
                </circle>
              </chakra.svg>
            </MotionBox>

            <MotionBox
              animate={controls}
              variants={circle}
              initial="initial"
              zIndex="1"
              pos="absolute"
              height="400px"
              width="400px"
            >
              <chakra.svg
                fill={useColorModeValue(
                  `${colorScheme}.100`,
                  `${colorScheme}.800`,
                )}
                viewBox="0 0 100 100"
              >
                <circle cx="50" cy="50" r="50" />
              </chakra.svg>
            </MotionBox>

            {image && (
              <ImageWithoutRatio
                zIndex="2"
                color="#000"
                w={["100%", "100%", "450px", "550px"]}
                // objectFit="cover"
                // h="100vh"
                overflow="visible"
                image={image}
                onLoadfallback={(e) => setIsImageLoaded(e)}
              />
            )}
          </Flex>
        </Flex>
      </Container>
    </Section>
  );
};

if (__DEV__) {
  AppHeroBlock.displayName = "AppHeroBlock";
}
export default memo(AppHeroBlock);
