import { IoMoon, IoSunny } from "@react-icons";

import React, { memo } from "react";

import { Button, ChakraProps, useColorMode } from "@chakra-ui/react";

const ThemeSwitch: React.FC<ChakraProps> = (props) => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Button
      flexShrink={0}
      variant="ghost"
      size="md"
      onClick={toggleColorMode}
      {...props}
    >
      {colorMode === "light" ? <IoMoon size="12px" /> : <IoSunny size="12px" />}
    </Button>
  );
};

export default memo(ThemeSwitch);
