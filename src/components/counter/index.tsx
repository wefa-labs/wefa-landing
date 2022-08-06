import React, { useState, useEffect, useRef, memo } from "react";

import { animate } from "framer-motion";
import { useInView } from "react-intersection-observer";

import { chakra, useMergeRefs } from "@chakra-ui/react";

import { ICounter } from "./counter";

const Counter: React.FC<ICounter.IProps> = ({
  from,
  to,
  decimals = 2,
  duration = 1,
  delay = 0,
  type,
  stiffness,
  damping,
  mass,
  ...rest
}): JSX.Element => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const nodeRef = useRef<HTMLDivElement>(null);
  const { ref, inView } = useInView();
  const refs = useMergeRefs<HTMLDivElement>(nodeRef, ref);

  useEffect(() => {
    const node = nodeRef.current;
    if (node) {
      if (inView && !isIntersecting) {
        const controls = animate(from, to, {
          delay: delay,
          duration: duration,
          // type: "spring",
          // stiffness: 30,
          // damping: 35,
          // mass: 1.75,
          type,
          stiffness,
          damping,
          mass,
          onUpdate(value) {
            if (decimals) {
              node.textContent = value.toFixed(decimals).toLocaleString();
            } else {
              node.textContent = value.toLocaleString(undefined, {
                // maximumSignificantDigits: 3,
                minimumFractionDigits: 0,
                maximumFractionDigits: 0,
              });
            }
          },
        });
        setIsIntersecting(true);
        return () => controls.stop();
      }
    }
  }, [from, to, inView]);

  return <chakra.div ref={refs} {...rest} />;
};

export default memo(Counter);
