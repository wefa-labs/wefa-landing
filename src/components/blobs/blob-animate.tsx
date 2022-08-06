// See: https://georgefrancis.dev/writing/build-a-smooth-animated-blob-with-svg-and-js/
import { useRef, useEffect } from "react";

import Simplex from "simplex-noise";

import { Box } from "@chakra-ui/react";

import { spline } from "@definitions/utils";

import { IBlob } from "./blob";

const createPoints = (numPoints = 6) => {
  const points = [];
  // how many points do we need
  // const numPoints = 6;
  // used to equally space each point around the circle
  const angleStep = (Math.PI * 2) / numPoints;
  // the radius of the circle
  const rad = 75;

  for (let i = 1; i <= numPoints; i++) {
    // x & y coordinates of the current point
    const theta = i * angleStep;

    const x = 100 + Math.cos(theta) * rad;
    const y = 100 + Math.sin(theta) * rad;

    // store the point's position
    points.push({
      x: x,
      y: y,
      // we need to keep a reference to the point's original point for when we modulate the values later
      originX: x,
      originY: y,
      // more on this in a moment!
      noiseOffsetX: Math.random() * 1000,
      noiseOffsetY: Math.random() * 1000,
    });
  }

  return points;
};

const map = (
  n: number,
  start1: number,
  end1: number,
  start2: number,
  end2: number,
) => {
  return ((n - start1) / (end1 - start1)) * (end2 - start2) + start2;
};

const BlobAnimation: React.FC<IBlob.IProps> = ({
  isColorAnimated = false,
  isAnimated = true,
  numPoints = 6,
  startColor = "purple.100",
  stopColor = "purple.400",
  ...rest
}): JSX.Element => {
  const pathEl = useRef<SVGPathElement>(null);
  const boxRef = useRef<HTMLDivElement>(null);

  let hueNoiseOffset = 0;
  const noiseStep = 0.005;

  const simplex = new Simplex();

  const points = createPoints(numPoints);

  const noise = (x: number, y: number) => {
    return simplex.noise2D(x, y);
  };

  let animateRef: number;
  const animate = (): void => {
    pathEl?.current?.setAttribute("d", spline(points, 1, true));

    // for every point...
    for (let i = 0; i < points.length; i++) {
      const point = points[i];

      // return a pseudo random value between -1 / 1 based on this point's current x, y positions in "time"
      const nX = noise(point.noiseOffsetX, point.noiseOffsetX);
      const nY = noise(point.noiseOffsetY, point.noiseOffsetY);
      // map this noise value to a new value, somewhere between it's original location -20 and it's original location + 20
      const x = map(nX, -1, 1, point.originX - 20, point.originX + 20);
      const y = map(nY, -1, 1, point.originY - 20, point.originY + 20);

      // update the point's current coordinates
      point.x = x;
      point.y = y;

      // progress the point's x, y values through "time"
      point.noiseOffsetX += noiseStep;
      point.noiseOffsetY += noiseStep;
    }
    if (isAnimated) {
      animateRef = requestAnimationFrame(animate);
    }
  };
  let colorRef: number;
  const colorAnimate = (): void => {
    const hueNoise = noise(hueNoiseOffset, hueNoiseOffset);
    const hue = map(hueNoise, -1, 1, 0, 360);

    boxRef?.current?.style.setProperty(
      "--startColor",
      `hsl(${hue}, 100%, 75%)`,
    );
    // document.documentElement.style.setProperty(
    //   "--startColor",
    //   `hsl(${hue}, 100%, 75%)`,
    // );
    // document.documentElement.style.setProperty(
    //   "--stopColor",
    //   `hsl(${hue} + 60, 100%, 75%)`,
    // );
    boxRef?.current?.style.setProperty(
      "--stopColor",
      `hsl(${hue + 60}, 100%, 75%)`,
    );

    hueNoiseOffset += noiseStep / 6;
    if (isColorAnimated) {
      colorRef = requestAnimationFrame(colorAnimate);
    }
  };

  useEffect(() => {
    animate();
    if (!isAnimated) {
      cancelAnimationFrame(animateRef);
    }
    return () => cancelAnimationFrame(animateRef);
  }, [numPoints, isAnimated]);

  useEffect(() => {
    if (isColorAnimated) {
      colorAnimate();
    } else {
      cancelAnimationFrame(colorRef);
    }
    return () => cancelAnimationFrame(colorRef);
  }, [isColorAnimated]);

  return (
    <Box
      ref={boxRef}
      sx={{
        "--startColor": `colors.${startColor}`,
        "--stopColor": `colors.${stopColor}`,
      }}
      {...rest}
    >
      <svg viewBox="0 0 200 200">
        <defs>
          <linearGradient id="gradient" gradientTransform="rotate(90)">
            <stop
              id="gradientStop1"
              offset="0%"
              stopColor="var(--startColor)"
            />
            <stop
              id="gradientStop2 "
              offset="100%"
              stopColor="var(--stopColor)"
            />
          </linearGradient>
        </defs>
        <path ref={pathEl} d="" fill="url('#gradient')"></path>
      </svg>
    </Box>
  );
};

export default BlobAnimation;
