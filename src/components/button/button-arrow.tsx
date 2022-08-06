import { memo } from "react";

import {
  Button,
  ButtonProps,
  chakra,
  Flex,
  useToken,
  useColorModeValue,
} from "@chakra-ui/react";

import { __DEV__ } from "@definitions/utils";

const ButtonLongArrow: React.FC<ButtonProps> = ({
  children,
  color,
  ...rest
}): JSX.Element => {
  const fill = color
    ? useToken("colors", color as string)
    : useColorModeValue("#000", "#FFF");
  return (
    <Button role="group" variant="unstyled" {...rest}>
      <Flex alignItems="center">
        <chakra.span
          fontSize={"sm"}
          lineHeight={1}
          mr="3"
          transition="all 300ms ease"
          _groupHover={{
            ml: 3,
          }}
        >
          {children}
        </chakra.span>

        <chakra.span
          sx={{
            width: "20px",
            height: "1px",
            background: fill,
            display: "inline-block",
            margin: "0",
            transition: "width 300ms ease",
            transform: "translateY(-0.5px)",
          }}
          _groupHover={{
            width: "40px",
          }}
        />
        <chakra.span
          sx={{
            width: 0,
            height: 0,
            display: "inline-block",
            marginLeft: 0,
            marginRight: "auto",
            borderStyle: "solid",
            borderWidth: "4px 0 4px 4px",
            borderColor: `transparent transparent transparent ${fill}`,
            opacity: 1,
          }}
        />
      </Flex>
    </Button>
  );
};

if (__DEV__) {
  ButtonLongArrow.displayName = "ButtonLongArrow";
}

export default memo(ButtonLongArrow);
