import { AiOutlineMenu, AiOutlineClose } from "@react-icons";

import { memo } from "react";

import NextLink from "next/link";

import {
  Box,
  Button,
  chakra,
  Collapse,
  Flex,
  HStack,
  Icon,
  IconButton,
  useColorModeValue,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";

import { LogoWithSiteName } from "@components/logo/logo-with-site-name";

import { INavbar } from "./navbar";

interface INavarDashboardSimpleProps {
  isOnline?: boolean;
}

const NavbarDashboard: React.FC<
  INavbar.IProps & INavarDashboardSimpleProps
> = ({
  // colorScheme,
  // isOnline = false,
  isDark,
  justifyContent = "start",
  items,
  logo,
  startItems,
  endItems,
  // children,
  ...rest
}): JSX.Element => {
  const mobileNav = useDisclosure();
  const color = isDark ? "whiteAlpha.900" : "currentColor";
  const buttonStyle = {
    color: isDark ? "whiteAlpha.900" : "inherit",
    _hover: {
      bg: isDark
        ? useColorModeValue("whiteAlpha.300", "whiteAlpha.200")
        : useColorModeValue("blackAlpha.100", "whiteAlpha.200"),
    },
    _active: {
      bg: isDark
        ? useColorModeValue("whiteAlpha.500", "whiteAlpha.300")
        : useColorModeValue("blackAlpha.200", "whiteAlpha.300"),
    },
  };

  return (
    <chakra.header
      bg={useColorModeValue("white", "gray.800")}
      w="full"
      px={{ base: 2, sm: 4 }}
      py={4}
      {...rest}
    >
      <Flex alignItems="center" justifyContent={justifyContent} mx="auto">
        {startItems ? startItems : null}
        <IconButton
          display={{ base: "flex", md: "none" }}
          aria-label="Open menu"
          fontSize="20px"
          color={useColorModeValue("gray.800", "inherit")}
          variant="ghost"
          icon={mobileNav.isOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
          onClick={mobileNav.onToggle}
        />

        {logo ? logo : <LogoWithSiteName color={color} />}

        <HStack spacing={3} display={{ base: "none", md: "inline-flex" }}>
          {items &&
            items.map((item, idx) => (
              <NextLink key={idx} href={item.href} passHref>
                <Button
                  size="sm"
                  variant="ghost"
                  leftIcon={item.icon ? <Icon as={item.icon} /> : null}
                  {...buttonStyle}
                >
                  {item.title}
                </Button>
              </NextLink>
            ))}
        </HStack>

        <HStack
          spacing={{ base: 1, md: 2, lg: 3 }}
          display={mobileNav.isOpen ? "none" : "flex"}
          alignItems="center"
          ml="auto"
        >
          {endItems ? endItems : null}
        </HStack>
      </Flex>
      <Collapse in={mobileNav.isOpen} animateOpacity>
        <MobileMenu items={items} />
      </Collapse>
    </chakra.header>
  );
};
NavbarDashboard.displayName = "NavbarDashboard";

const MobileMenu: React.FC<INavbar.IProps> = memo(({ items }): JSX.Element => {
  return (
    <Box mt={4} w="full">
      <VStack justifyContent="left" flexDirection="column" w="full">
        {items &&
          items.map((item, idx) => (
            <NextLink key={idx} href={item.href} passHref>
              <Button
                w="full"
                minW="300px"
                variant="ghost"
                // bg="gray.700"
                justifyContent="left"
                leftIcon={item.icon ? <Icon as={item.icon} /> : null}
              >
                {item.title}
              </Button>
            </NextLink>
          ))}
      </VStack>
    </Box>
  );
});
MobileMenu.displayName = "MobileMenu";

export default memo(NavbarDashboard);
