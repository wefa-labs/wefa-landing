import NextLink from "next/link";

import {
  ChakraProps,
  chakra,
  Flex,
  Heading,
  VisuallyHidden,
  useColorModeValue,
} from "@chakra-ui/react";

import Site from "@definitions/site";

import Logo from "./index";

export const LogoWithSiteName: React.FC<ChakraProps> = (props): JSX.Element => {
  const color = useColorModeValue("gray.800", "white");
  return (
    <Flex color={color} alignItems="center" {...props}>
      <NextLink href="/" passHref>
        <chakra.a title="Mercury Home Page" display="flex" alignItems="center">
          <Logo width={"35px"} height={"35px"} />
          <VisuallyHidden>{Site.name}</VisuallyHidden>
        </chakra.a>
      </NextLink>
      <NextLink href="/" passHref>
        <chakra.a d="flex">
          <Heading
            textTransform="uppercase"
            fontSize="lg"
            fontWeight="700"
            mb={0}
            ml="2"
          >
            {Site.name}
          </Heading>
        </chakra.a>
      </NextLink>
    </Flex>
  );
};
