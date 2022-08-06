import { memo, useCallback, useContext } from "react";

import NextLink from "next/link";

import { ChevronDownIcon, CloseIcon, HamburgerIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Flex,
  HStack,
  IconButton,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  useColorModeValue,
} from "@chakra-ui/react";

import {
  MobileMenuActions,
  MobileMenuProvider,
  MobileMenuCtx,
} from "@definitions/context/mobile.menu";
import { main } from "@definitions/navigation/main";
import { __DEV__ } from "@definitions/utils";
import customScrollbar from "@definitions/utils/scrollbar";

import { LogoWithSiteName } from "@components/logo/logo-with-site-name";
import ThemeSwitch from "@components/theme-switch";

import MenuItemTag from "./menu-item-tag";
import MobileNavbar from "./mobile-navbar";
import { INavbar } from "./navbar";

const NavbarDefault: React.FC<INavbar.IProps> = ({
  isDark,
  justifyContent = "space-between",
  items,
  startItems,
  endItems,
  children,
  ...rest
}) => {
  const color = isDark ? "whiteAlpha.900" : "currentColor";
  return (
    <MobileMenuProvider>
      <Box
        // bg={useColorModeValue("transparent", "gray.900")}
        // rounded={"full"}
        // ref={scrollRef}
        py={5}
        overflowX="auto"
        sx={customScrollbar()}
        {...rest}
      >
        <Flex w="100%" alignItems={"center"} justifyContent={justifyContent}>
          {startItems ? startItems : <LogoWithSiteName color={color} />}
          <HStack
            as={"nav"}
            spacing={[0, 0, 1, 1]}
            display={{ base: "none", md: "flex" }}
          >
            <AllMenu isDark={isDark} items={items ? items : main} />
          </HStack>
          {endItems ? (
            endItems
          ) : (
            <HStack>
              <ThemeSwitch />
              <MobileNavButton />
            </HStack>
          )}
        </Flex>
        {children ? children : <MobileNavbar />}
      </Box>
    </MobileMenuProvider>
  );
};

if (__DEV__) {
  NavbarDefault.displayName = "NavbarDefault";
}

const AllMenu = memo(
  ({ isDark, items }: { isDark?: boolean; items: INavbar.IItem[] }) => {
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
      <>
        {items.map((item, index) => {
          return item?.subitems ? (
            <Menu id={item.title} key={index} isLazy>
              <MenuButton
                variant="ghost"
                as={Button}
                rightIcon={<ChevronDownIcon />}
                {...buttonStyle}
              >
                {item.title}
              </MenuButton>
              <MenuList
                overflowX="auto"
                maxHeight="75vh"
                zIndex="dropdown"
                sx={customScrollbar()}
              >
                {item.subitems.map((sub, idx) => {
                  return sub.title == "---" ? (
                    <MenuDivider key={`${sub.title}-${idx}`} />
                  ) : (
                    <MenuSubItem key={`${sub.title}-${idx}`} {...sub} />
                  );
                })}
              </MenuList>
            </Menu>
          ) : (
            <NextLink key={index} href={item.href} passHref>
              <Button variant="ghost" {...buttonStyle}>
                {item.title}
                <MenuItemTag title={item.title} />
              </Button>
            </NextLink>
          );
        })}
      </>
    );
  },
);

if (__DEV__) {
  AllMenu.displayName = "AllMenu";
}

const MenuSubItem: React.FC<INavbar.IItem> = ({ title, href }) => {
  return (
    <>
      {href ? (
        <NextLink href={href} passHref>
          <MenuItem justifyContent="space-between">
            {title}
            <MenuItemTag title={title} />
          </MenuItem>
        </NextLink>
      ) : (
        <Flex py={"0.4rem"} px={"0.8rem"} justifyContent="space-between">
          {title}
          <MenuItemTag title={title} />
        </Flex>
      )}
    </>
  );
};

if (__DEV__) {
  MenuSubItem.displayName = "MenuSubItem";
}

const MobileNavButton = memo(() => {
  const { state, dispatch } = useContext(MobileMenuCtx);
  const toggleHandler = useCallback(() => {
    dispatch({
      type: MobileMenuActions.TOGGLE,
    });
  }, [dispatch]);
  return (
    <IconButton
      size={"md"}
      icon={state.isOpen ? <CloseIcon /> : <HamburgerIcon />}
      aria-label="Open Menu"
      display={{ md: "none" }}
      onClick={toggleHandler}
    />
  );
});

if (__DEV__) {
  MobileNavButton.displayName = "MobileNavButton";
}

export default memo(NavbarDefault);
