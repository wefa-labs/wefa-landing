import {
  FaLinkedin,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaDribbble,
} from "@react-icons";

import { memo } from "react";

import { IconType } from "react-icons/lib";

import {
  Box,
  Icon,
  Container,
  Link,
  Stack,
  Text,
  useColorModeValue,
  ChakraProps,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";

import { Company, Social, CopyrightText } from "@definitions/navigation/footer";

import { SocialIconButton } from "@components/button";
import { LogoWithSiteName } from "@components/logo/logo-with-site-name";

const FooterSimpleNavigationLogoCentered: React.FC<ChakraProps> = (props) => {
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
        spacing={4}
        justify={"center"}
        align={"center"}
      >
        <LogoWithSiteName />
        <Stack direction={["column", "column", "row", "row"]} spacing={6}>
          {Company.items.map((link, idx) => {
            return (
              <Link key={idx} href={link.href}>
                {link.title}
              </Link>
            );
          })}
        </Stack>
      </Container>

      <Box
        borderTopWidth={1}
        borderStyle={"solid"}
        borderColor={useColorModeValue("gray.200", "gray.700")}
      >
        <Container
          as={Stack}
          maxW={"6xl"}
          py={4}
          direction={{ base: "column", md: "row" }}
          spacing={4}
          justify={{ base: "center", md: "space-between" }}
          align={{ base: "center", md: "center" }}
        >
          <Text textAlign={["center", "center", "start"]} fontSize="xs">
            {CopyrightText}
          </Text>
          <Wrap justify={["center", "center", "start"]} spacing={[2, 2, 6, 6]}>
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
        </Container>
      </Box>
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

export default memo(FooterSimpleNavigationLogoCentered);
