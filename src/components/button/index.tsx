import React from "react";

import {
  chakra,
  ChakraProps,
  VisuallyHidden,
  Button as BaseButton,
  ButtonProps,
  forwardRef,
  useColorModeValue,
} from "@chakra-ui/react";

export type IButton = ButtonProps;

export const ButtonRef = forwardRef<ButtonProps, "button">((props, ref) => {
  return <BaseButton ref={ref} data-testid="btn" {...props} />;
});

export const Button: React.FC<IButton> = ({ ...props }) => {
  return <BaseButton {...props} data-testid="btn" />;
};

interface ISocialIconButton extends ChakraProps {
  children: React.ReactNode;
  label: string;
  href: string;
}

export const SocialIconButton: React.FC<ISocialIconButton> = ({
  children,
  label,
  href,
  ...rest
}): JSX.Element => {
  return (
    <chakra.button
      bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
      rounded={"full"}
      w={8}
      h={8}
      cursor={"pointer"}
      as={"a"}
      href={href}
      display={"inline-flex"}
      alignItems={"center"}
      justifyContent={"center"}
      transition={"background 0.3s ease"}
      _hover={{
        bg: useColorModeValue("blackAlpha.200", "whiteAlpha.200"),
      }}
      {...rest}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};
