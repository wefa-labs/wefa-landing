import { memo } from "react";

import {
  Box,
  ChakraProps,
  Container,
  Link,
  SimpleGrid,
  Stack,
  Text,
  ThemingProps,
  useColorModeValue,
} from "@chakra-ui/react";

import {
  Product,
  Company,
  Support,
  Follow,
  CopyrightText,
} from "@definitions/navigation/footer";

import { LogoWithSiteName } from "@components/logo/logo-with-site-name";

const FooterLargeNavigationLogoLeft: React.FC<ChakraProps & ThemingProps> = ({
  bg,
  color,
  ...rest
}) => {
  return (
    <Box
      bg={bg ? bg : useColorModeValue("gray.50", "gray.900")}
      color={color ? color : useColorModeValue("gray.700", "gray.400")}
      {...rest}
    >
      <Container as={Stack} maxW={"container.xl"} py={10}>
        <SimpleGrid
          templateColumns={{ sm: "1fr 1fr", md: "2fr 1fr 1fr 1fr 1fr" }}
          spacing={8}
        >
          <Stack spacing={6}>
            <Box>
              <LogoWithSiteName color={"current"} />
            </Box>
            <Text fontSize={"xs"}>{CopyrightText}</Text>
          </Stack>

          {[Product, Company, Support, Follow].map((i, index) => {
            return (
              <Stack key={index} align={"flex-start"}>
                <ListHeader color={color}>{i.title}</ListHeader>
                {i.items.map((link, idx) => (
                  <Link key={idx} href={link.href}>
                    {link.title}
                  </Link>
                ))}
              </Stack>
            );
          })}
        </SimpleGrid>
      </Container>
    </Box>
  );
};

const ListHeader: React.FC<ChakraProps & ThemingProps> = memo(
  ({ color, children }) => {
    return (
      <Text
        color={color ? color : useColorModeValue("gray.700", "gray.200")}
        fontWeight={"500"}
        fontSize={"lg"}
        mb={2}
      >
        {children}
      </Text>
    );
  },
);

export default memo(FooterLargeNavigationLogoLeft);
