import { Stack, useColorModeValue } from "@chakra-ui/react";

import { ITimelineGroup } from "./timeline";

export const TimelineGroup: React.FC<ITimelineGroup.IProps> = ({
  children,
  isCross = false,
  borderColor,
  color = useColorModeValue("gray.200", "gray.600"),
  ...rest
}): JSX.Element => {
  const before = {
    content: '""',
    position: "absolute",
    left: "16px",
    height: "100%",
    zIndex: 0,
    top: 0,
    bottom: 0,
    borderLeft: "2px dashed",
    borderLeftColor: borderColor ? borderColor : color,
  };
  const after = {
    content: '""',
    position: "absolute",
    left: "13px",
    height: "8px",
    width: "8px",
    borderRadius: "full",
    zIndex: 0,
    bottom: 0,
    bg: borderColor ? borderColor : color,
  };

  if (isCross) {
    before.left = "calc(50%)";
    after.left = "calc(50% - 3px)";
  }
  return (
    <Stack
      spacing={10}
      pos="relative"
      _before={before}
      _after={after}
      {...rest}
    >
      {children}
    </Stack>
  );
};
