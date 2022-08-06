import React, { memo, useState, useEffect } from "react";

import { AnimatePresence, motion, useAnimation } from "framer-motion";
import { useTrackVisibility } from "react-intersection-observer-hook";

import { Box, BoxProps, Image, Spinner } from "@chakra-ui/react";

import { IImageLazyload } from "./imagelazyload";

export const MotionBox = motion<BoxProps>(Box);

const ImageLazyloadWithoutAspectRatio: React.FC<IImageLazyload.IProps> = ({
  // ratio,
  rounded,
  roundedTop,
  roundedBottom,
  onLoadfallback = () => ({}),
  // fallbackSrc = undefined,
  color = "whiteAlpha.500",
  image,
  ...props
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [ref, { wasEverVisible }] = useTrackVisibility();

  useEffect(() => {
    if (isLoaded) {
      controls.start("hidden");
      onLoadfallback(true);
    }
  }, [isLoaded]);

  const controls = useAnimation();

  const motionVaraints = {
    hidden: { opacity: 0, transition: { duration: 0.25 } },
    show: {
      opacity: 1,
      filter: "blur(10px)",
    },
    exit: { opacity: 0, transition: { duration: 0.25 } },
  };

  const loaderVaraints = {
    hidden: { opacity: 0, transition: { duration: 0.25 } },
    show: {
      opacity: 1,
      transition: { duration: 0.25 },
    },
    exit: { opacity: 0, translateY: 10, transition: { duration: 0.25 } },
  };

  return (
    <Box
      d="flex"
      justifyContent="center"
      alignItems="center"
      ref={ref}
      rounded={rounded}
      roundedTop={roundedTop}
      roundedBottom={roundedBottom}
      overflow="visible"
      position="relative"
      {...props}
    >
      <AnimatePresence>
        {!isLoaded && (
          <>
            <MotionBox
              variants={motionVaraints}
              pos="absolute"
              initial="show"
              exit="exit"
              width="full"
              height="full"
              // transform="scale(1.1)"
              zIndex="3"
              // overflow="hidden"
              willChange="transform"
              sx={{
                position: "absolute",
                display: "block",
                content: '""',
                width: "full",
                height: "full",
                backgroundPosition: "top center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundImage: () => {
                  if (image?.placeholder) return `url(${image?.placeholder})`;
                  return "none";
                },
              }}
              animate={controls}
            />
            <MotionBox
              pos="absolute"
              zIndex="sticky"
              variants={loaderVaraints}
              initial="show"
              exit="exit"
              willChange="transform"
            >
              <Spinner zIndex={4} color={color as string} />
            </MotionBox>
          </>
        )}
      </AnimatePresence>
      {wasEverVisible && (
        <Image
          // opacity={isLoaded ? 1 : 0.1}
          visibility={isLoaded ? "visible" : "hidden"}
          src={image?.src}
          srcSet={image?.srcSet}
          // fallbackSrc={fallbackSrc}
          rounded={rounded}
          roundedTop={roundedTop}
          roundedBottom={roundedBottom}
          onLoad={() => setIsLoaded(true)}
          // transition="opacity 5s ease"
          {...props}
        />
      )}
    </Box>
  );
};

export default memo(ImageLazyloadWithoutAspectRatio);
