import { isValidElement, memo } from "react";

import {
  VStack,
  Container,
  Flex,
  Heading,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";

import { IPagetitle } from "./pagetitle";

const PageTitle: React.FC<IPagetitle.IProps> = ({
  title,
  body,
  textAlign = ["start", "start", "center"],
  align = ["start", "start", "center"],
  children,
  header,
  footer,
  ...rest
}): JSX.Element => {
  return (
    <Flex
      pos="relative"
      bg={useColorModeValue("gray.100", "gray.700")}
      pt={[24, 24, 180]}
      pb={[5, 10, 20]}
      {...rest}
    >
      {header}
      <Container maxW="container.xl">
        <VStack textAlign={textAlign} align={align}>
          {isValidElement(title) ? (
            title
          ) : (
            <Heading data-testid="PageTitle--title" size="xl">
              {title}
            </Heading>
          )}
          {body && (
            <Text
              as="div"
              data-testid="PageTitle--body"
              color={useColorModeValue("gray.600", "gray.300")}
              fontSize="md"
              // maxWidth="450px"
              maxWidth={{ base: "full", lg: "30rem" }}
              align={{ base: "left", lg: "center" }}
            >
              {body}
            </Text>
          )}
          {children}
        </VStack>
      </Container>
      {footer}
    </Flex>
  );
};

export default memo(PageTitle);
