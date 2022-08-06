import React from "react";

import { chakra, Heading, ChakraProps, forwardRef } from "@chakra-ui/react";

import { ISection } from "./section.d";

// export const Section: React.FC<ISection.IProps> = ({
export const Section = forwardRef<ISection.IProps, "section">((props, ref) => {
  const { children, ...rest } = props;
  return (
    <chakra.section
      display="flex"
      flexDirection="column"
      className="chakra-section"
      /* justifyContent="center" */
      // alignItems="center"

      my={10}
      ref={ref}
      {...rest}
    >
      {children}
    </chakra.section>
  );
});

export const SectionHeading: React.FC<ChakraProps> = ({
  children,
  ...rest
}): JSX.Element => {
  return (
    <Heading textAlign="center" mb={20} fontWeight={500} size="md" {...rest}>
      {children}
    </Heading>
  );
};

export const SectionSubHeading: React.FC<ChakraProps> = ({
  children,
  ...rest
}): JSX.Element => {
  return (
    <Heading
      as="h3"
      textAlign="center"
      mb={4}
      fontWeight={500}
      size="xs"
      {...rest}
    >
      {children}
    </Heading>
  );
};
