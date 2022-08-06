import React, { useState, useEffect } from "react";

import { AnimatePresence, motion, useAnimation } from "framer-motion";
import { useTrackVisibility } from "react-intersection-observer-hook";

import { AspectRatio, Box, BoxProps, Image, Spinner } from "@chakra-ui/react";

import { IImageLazyload } from "./imagelazyload";

export const MotionBox = motion<BoxProps>(Box);

const ImageLazyload: React.FC<IImageLazyload.IProps> = ({
  ratio,
  rounded,
  roundedTop,
  roundedBottom,
  roundedLeft,
  roundedRight,
  // fallbackSrc = undefined,
  onLoadfallback = () => ({}),
  color = "whiteAlpha.500",
  image,
  flex,
  ...props
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  // const imgRef = useRef(null);
  // const [ref, { entry }] = useIntersectionObserver();
  const [ref, { wasEverVisible }] = useTrackVisibility();
  // const isVisible = entry && entry.isIntersecting;

  // useEffect(() => {
  //   console.log(`The component is ${isVisible ? "visible" : "not visible"}.`);
  // }, [isVisible]);

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
  };

  const aspectRatio = () => {
    if (ratio) return ratio;
    if (image) return image.width / image.height;
  };

  return (
    <AspectRatio
      ref={ref}
      rounded={rounded}
      roundedTop={roundedTop}
      roundedBottom={roundedBottom}
      roundedLeft={roundedLeft}
      roundedRight={roundedRight}
      overflow="visible"
      flex={flex}
      ratio={aspectRatio()}
    >
      <Box position="relative">
        <AnimatePresence>
          {!isLoaded && (
            <>
              <MotionBox
                variants={motionVaraints}
                pos="absolute"
                initial="show"
                width="full"
                height="full"
                // transform="scale(1.1)"
                overflow="visible"
                willChange="transform"
                sx={{
                  position: "absolute",
                  overflow: "visible",
                  display: "block",
                  content: '""',
                  width: "full",
                  height: "full",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  backgroundImage: () => {
                    if (image?.placeholder) return `url(${image?.placeholder})`;
                    return "none";
                  },
                }}
                animate={controls}
              />

              <Spinner color={color as string} pos="absolute" />
            </>
          )}
        </AnimatePresence>
        {wasEverVisible && (
          <Image
            visibility={isLoaded ? "visible" : "hidden"}
            src={image?.src}
            srcSet={image?.srcSet}
            // fallbackSrc={fallbackSrc}
            rounded={rounded}
            roundedTop={roundedTop}
            roundedBottom={roundedBottom}
            roundedLeft={roundedLeft}
            roundedRight={roundedRight}
            onLoad={() => setIsLoaded(true)}
            // transition="opacity 5s ease"
            {...props}
          />
        )}
      </Box>
    </AspectRatio>
  );
};

export default ImageLazyload;
