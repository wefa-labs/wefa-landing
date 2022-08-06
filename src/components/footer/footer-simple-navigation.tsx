import { memo } from "react";

import {
  Box,
  Container,
  Stack,
  Text,
  Link,
  useColorModeValue,
  ChakraProps,
} from "@chakra-ui/react";

import { Company, CopyrightText } from "@definitions/navigation/footer";

const FooterSimpleNavigation: React.FC<ChakraProps> = (props) => {
  return (
    <Box
      bg={useColorModeValue("gray.50", "gray.900")}
      color={useColorModeValue("gray.700", "gray.400")}
      {...props}
    >
      <Container
        as={Stack}
        maxW={"container.xl"}
        py={4}
        direction={{ base: "column", md: "row" }}
        spacing={4}
        justify={{ base: "center", md: "space-between" }}
        align={{ base: "center", md: "center" }}
      >
        <Stack direction={"row"} spacing={6}>
          {Company.items.map((item, idx) => (
            <Link key={idx} href={"#"}>
              {item.title}
            </Link>
          ))}
        </Stack>
        <Text fontSize="xs">{CopyrightText}</Text>
      </Container>
    </Box>
  );
};

export default memo(FooterSimpleNavigation);
