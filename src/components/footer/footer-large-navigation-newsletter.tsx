import {
  BiMailSend,
  FaLinkedin,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaDribbble,
} from "@react-icons";

import { ReactNode, memo } from "react";

import { IconType } from "react-icons/lib";

import {
  Box,
  Icon,
  Container,
  Link,
  SimpleGrid,
  Stack,
  Text,
  Input,
  IconButton,
  useColorModeValue,
  ChakraProps,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";

import {
  Company,
  Support,
  Social,
  CopyrightText,
} from "@definitions/navigation/footer";

import { SocialIconButton } from "@components/button";
import { LogoWithSiteName } from "@components/logo/logo-with-site-name";

const FooterLargeNavigationNewsletter: React.FC<ChakraProps> = (props) => {
  return (
    <Box
      bg={useColorModeValue("gray.50", "gray.900")}
      color={useColorModeValue("gray.700", "gray.400")}
      {...props}
    >
      <Container as={Stack} maxW={"container.xl"} py={10}>
        <SimpleGrid
          templateColumns={{ sm: "1fr 1fr", md: "2fr 1fr 1fr 2fr" }}
          spacing={8}
        >
          <Stack spacing={6}>
            <Box>
              <LogoWithSiteName />
            </Box>
            <Text textAlign={["center", "center", "start"]} fontSize={"xs"}>
              {CopyrightText}
            </Text>
            <Wrap
              justify={["center", "center", "start"]}
              spacing={[2, 2, 6, 6]}
            >
              {Social.items.map((link, idx) => {
                const title = link.title.toLowerCase();
                const SocialIconComponent = SocialIcons[title];
                return (
                  <WrapItem key={idx}>
                    <SocialIconButton label={link.title} href={link.href}>
                      <Icon as={SocialIconComponent} />
                    </SocialIconButton>
                  </WrapItem>
                );
              })}
            </Wrap>
          </Stack>

          {[Company, Support].map((i, index) => {
            return (
              <Stack key={index} align={"flex-start"}>
                <ListHeader>{i.title}</ListHeader>
                {i.items.map((link, idx) => (
                  <Link key={idx} href={link.href}>
                    {link.title}
                  </Link>
                ))}
              </Stack>
            );
          })}

          <Stack align={"flex-start"}>
            <ListHeader>Stay up to date</ListHeader>
            <Stack direction={"row"}>
              <Input
                placeholder={"Your email address"}
                bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
                border={0}
                _focus={{
                  bg: "whiteAlpha.300",
                }}
              />
              <IconButton
                bg={useColorModeValue("green.400", "green.800")}
                color={useColorModeValue("white", "gray.800")}
                _hover={{
                  bg: "green.600",
                }}
                aria-label="Subscribe"
                icon={<BiMailSend />}
              />
            </Stack>
          </Stack>
        </SimpleGrid>
      </Container>
    </Box>
  );
};

/**
 * You should add different social network icons that you will use.
 */
const SocialIcons: { [key: string]: IconType } = {
  instagram: FaInstagram,
  twitter: FaTwitter,
  youtube: FaYoutube,
  dribbble: FaDribbble,
  linkedin: FaLinkedin,
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

export default memo(FooterLargeNavigationNewsletter);
