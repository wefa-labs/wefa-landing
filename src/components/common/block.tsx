import { memo } from "react";

import { chakra, forwardRef } from "@chakra-ui/react";

import { IBlock } from "./block.d";

const Block = forwardRef<IBlock.IProps, "section">((props, ref) => {
  const { children, ...rest } = props;
  return (
    <chakra.div
      display="flex"
      flexDirection="column"
      className="chakra-block"
      // justifyContent="center"
      // alignItems="center"
      ref={ref}
      {...rest}
    >
      {children}
    </chakra.div>
  );
});

export default memo(Block);
