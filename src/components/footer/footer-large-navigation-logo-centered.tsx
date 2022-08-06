import { ReactNode, memo } from "react";

import {
  Box,
  Container,
  Link,
  SimpleGrid,
  Stack,
  Text,
  Flex,
  Tag,
  useColorModeValue,
  ChakraProps,
} from "@chakra-ui/react";

import {
  Product,
  Company,
  Support,
  Legal,
  CopyrightText,
} from "@definitions/navigation/footer";

import { LogoWithSiteName } from "@components/logo/logo-with-site-name";

const FooterLargeNavigationLogoCentered: React.FC<ChakraProps> = (props) => {
  return (
    <Box
      bg={useColorModeValue("gray.50", "gray.900")}
      color={useColorModeValue("gray.700", "gray.400")}
      {...props}
    >
      <Container as={Stack} maxW={"container.xl"} py={10}>
        <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} spacing={8}>
          {[Product, Company, Legal, Support].map((i, index) => {
            return (
              <Stack key={index} align={"flex-start"}>
                <ListHeader>{i.title}</ListHeader>
                {i.items.map((link, idx) => {
                  if (link.tag) {
                    return (
                      <Stack
                        key={idx}
                        direction={"row"}
                        align={"center"}
                        spacing={2}
                      >
                        <Link href={link.href}> {link.title}</Link>
                        <LinkTag>{link.tag.toUpperCase()}</LinkTag>
                      </Stack>
                    );
                  } else {
                    return (
                      <Link key={idx} href={link.href}>
                        {link.title}
                      </Link>
                    );
                  }
                })}
              </Stack>
            );
          })}
        </SimpleGrid>
      </Container>
      <Box py={10}>
        <Flex
          align={"center"}
          _before={{
            content: '""',
            borderBottom: "1px solid",
            borderColor: useColorModeValue("gray.200", "gray.700"),
            flexGrow: 1,
            mr: 8,
          }}
          _after={{
            content: '""',
            borderBottom: "1px solid",
            borderColor: useColorModeValue("gray.200", "gray.700"),
            flexGrow: 1,
            ml: 8,
          }}
        >
          <LogoWithSiteName />
        </Flex>
        <Text pt={6} fontSize={"xs"} textAlign={"center"}>
          {CopyrightText}
        </Text>
      </Box>
    </Box>
  );
};

const ListHeader = memo(({ children }: { children: ReactNode }) => {
  return (
    <Text
      color={useColorModeValue("gray.700", "gray.200")}
      fontWeight={"500"}
      fontSize={"lg"}
      mb={2}
    >
      {children}
    </Text>
  );
});

const LinkTag = memo(({ children }: { children: ReactNode }) => {
  return (
    <Tag
      size={"sm"}
      bg={useColorModeValue("green.300", "green.800")}
      ml={2}
      color={"white"}
    >
      {children}
    </Tag>
  );
});

export default memo(FooterLargeNavigationLogoCentered);
