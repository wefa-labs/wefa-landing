import { useColorModeValue, useToken } from "@chakra-ui/react";
import { CSSObject } from "@chakra-ui/styled-system";

const customScrollbar = (): CSSObject => {
  const scrollColor = useColorModeValue("blackAlpha.400", "whiteAlpha.400");
  const mozBgColor = "transparent";
  const mozScrollColorLight = useToken("colors", "blackAlpha.400");
  const mozScrollColorDark = useToken("colors", "whiteAlpha.400");
  const mozScrollColor = useColorModeValue(
    mozScrollColorLight,
    mozScrollColorDark,
  );
  return {
    "&:hover::-webkit-scrollbar": {
      height: "8px",
      width: "8px",
    },
    "::-webkit-scrollbar": {
      height: "2px",
      width: "2px",
    },
    "::-webkit-scrollbar-track": {
      background: "transparent",
      // WebkitBoxShadow: "inset 0 0 6px rgba(0,0,0,0.3)",
    },
    "::-webkit-scrollbar-thumb": {
      backgroundColor: scrollColor,
      // background: var(--chakra-colors-gray-700),
      borderRadius: "20px",
      // outline: "1px solid slategrey",
    },
    // Firefox -moz
    "&": {
      scrollbarColor: `${mozScrollColor} ${mozBgColor}`,
      scrollbarWidth: "thin",
    },
  };
};

export default customScrollbar;
