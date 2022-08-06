import React, { memo } from "react";

import {
  IconProps,
  Center,
  Box, // Container,
  // Link,
  // SimpleGrid,
  // Stack,
  // Text,
  // useColorModeValue,
  useToken,
} from "@chakra-ui/react";
import { chakra } from "@chakra-ui/system";

import { IHighlight } from "./highlight";

const Highlight: React.FC<IHighlight.IProps> = ({
  type = "underscore",
  strokeWidth = 2,
  fontWeight,
  px = 1,
  bottom,
  top,
  children,
  color,
  strokeColor = "current",
  ...rest
}): JSX.Element => {
  return (
    <Box
      fontWeight={fontWeight}
      color={color}
      display="inline-block"
      px={px}
      pos="relative"
      zIndex={1}
    >
      <Center pos="relative" zIndex={1}>
        {children}
      </Center>

      {
        {
          mark: (
            <Box
              pos="absolute"
              width="100%"
              bottom={bottom ? bottom : "-50%"}
              left="0"
              transform="translateY(50%)"
              zIndex={0}
            >
              <Mark
                data-testid="mark-highlight"
                strokeWidth={strokeWidth}
                strokeColor={strokeColor}
                {...rest}
              />
            </Box>
          ),
          circle: (
            <Box
              pos="absolute"
              width="100%"
              top={top ? top : "50%"}
              left="0"
              transform="translateY(-50%)"
              zIndex={0}
            >
              <Circle
                data-testid="circle-highlight"
                strokeWidth={strokeWidth}
                strokeColor={strokeColor}
                {...rest}
              />
            </Box>
          ),
          underscore: (
            <Box
              pos="absolute"
              width="100%"
              bottom={bottom ? bottom : "-4px"}
              left="0"
              zIndex={0}
              // transform="translateY(50%)"
            >
              <Underscore
                data-testid="underscore-highlight"
                strokeWidth={strokeWidth}
                strokeColor={strokeColor}
                {...rest}
              />
            </Box>
          ),
        }[type]
      }
    </Box>
  );
};

interface ISVGHighlightProps extends IconProps {
  strokeWidth?: number | 2;
  strokeColor?: string;
}

const Circle = (props: ISVGHighlightProps) => {
  const { strokeWidth, strokeColor = "currentColor", ...rest } = props;
  return (
    <chakra.svg viewBox="0 0 175 73" {...rest}>
      <path
        d="M77.0484 1C43.3021 4.51468 -11.5492 18.4842 10.0098 49.0409C19.9919 63.189 39.5617 69.6728 59.9147 71.336C87.8976 73.6228 120.802 69.9361 146.643 61.3032C156.449 58.0274 166.955 54.0679 171.644 46.2168C175.004 40.5909 175.065 33.313 169.9 28.3064C154.971 13.838 126.179 9.20686 103.618 9.20686C69.521 9.20686 35.6028 10.3924 10.0094 28.3064C2.51216 33.554 -0.240179 45.4477 1.5897 51.3974C5.24766 61.3032 15.9587 71.336 18.7028 71.336"
        stroke={useToken("colors", strokeColor)}
        fill={"none"}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </chakra.svg>
  );
};

const Underscore = (props: ISVGHighlightProps) => {
  const { strokeWidth, strokeColor = "currentColor", ...rest } = props;
  return (
    <chakra.svg viewBox="0 0 203 6" {...rest}>
      <path
        d="M3.34717077,3.7915729 C64.1221585,3.48317229 125.839711,-0.601005575 201.244928,1.22833373"
        fill="none"
        stroke={useToken("colors", strokeColor)}
        strokeWidth={strokeWidth}
      ></path>
      <path
        d="M202.253354,2.88808169 C142.243969,4.08004163 79.6753022,4.26566239 0.879340358,2.14599566"
        fill="none"
        stroke={useToken("colors", strokeColor)}
        strokeWidth={strokeWidth}
      ></path>
    </chakra.svg>
  );
};

const Mark = (props: ISVGHighlightProps) => {
  const { strokeWidth, strokeColor = "currentColor", ...rest } = props;
  return (
    <chakra.svg viewBox="0 0 87 11" {...rest}>
      <path
        d="M1 3.30951C40.9155 0.657428 31.3094 0.678031 83.1425 1.45789C84.0492 1.47153 86.7143 2.06786 85.8186 2.31474C80.057 3.90265 74.185 3.99841 68.4173 5.5162C64.4363 6.56382 60.5485 8.5054 56.6141 10"
        fill="none"
        // stroke="currentColor"
        stroke={useToken("colors", strokeColor)}
        strokeWidth={strokeWidth}
      />
    </chakra.svg>
  );
};

export default memo(Highlight);
