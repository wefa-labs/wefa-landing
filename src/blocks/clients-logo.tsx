import React, { memo } from "react";

import {
  ChakraProps,
  ThemingProps,
  Wrap,
  WrapItem,
  WrapProps,
} from "@chakra-ui/react";

import Logo1 from "@definitions/brands/logo-1";
import Logo2 from "@definitions/brands/logo-2";
import Logo3 from "@definitions/brands/logo-3";
import Logo4 from "@definitions/brands/logo-4";
import Logo5 from "@definitions/brands/logo-5";
import { __DEV__ } from "@definitions/utils";

const ClientsLogoBlock: React.FC<ChakraProps & ThemingProps & WrapProps> = ({
  color,
  spacing = 4,
  ...rest
}) => {
  return (
    <Wrap
      color={color}
      spacing={spacing}
      mx={spacing}
      align="center"
      justify="center"
      {...rest}
    >
      <WrapItem>
        <Logo1 color={color} />
      </WrapItem>
      <WrapItem>
        <Logo4 color={color} />
      </WrapItem>
      <WrapItem>
        <Logo2 color={color} />
      </WrapItem>
      <WrapItem>
        <Logo3 color={color} />
      </WrapItem>
      <WrapItem>
        <Logo5 color={color} />
      </WrapItem>
    </Wrap>
  );
};

if (__DEV__) {
  ClientsLogoBlock.displayName = "ClientsLogoBlock";
}

export default memo(ClientsLogoBlock);
