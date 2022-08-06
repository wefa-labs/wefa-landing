import { memo, useCallback, useContext, useEffect } from "react";

import NextLink from "next/link";
import { useRouter } from "next/router";

import { ChevronDownIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Divider,
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Flex,
  Text,
  Icon,
  useDisclosure,
  Stack,
  Link,
  useColorModeValue,
  Collapse,
} from "@chakra-ui/react";

import {
  MobileMenuActions,
  MobileMenuCtx,
} from "@definitions/context/mobile.menu";
import { main } from "@definitions/navigation/main";
import { __DEV__ } from "@definitions/utils";

import MenuItemTag from "./menu-item-tag";
import { INavbar } from "./navbar";

const MobileNavbar: React.FC = () => {
  const router = useRouter();
  const { state, dispatch } = useContext(MobileMenuCtx);
  const toggleHandler = useCallback(() => {
    dispatch({
      type: MobileMenuActions.TOGGLE,
    });
  }, [dispatch]);

  const closeHandler = useCallback(() => {
    dispatch({
      type: MobileMenuActions.CLOSE,
    });
  }, [dispatch]);

  useEffect(() => {
    router.events.on("routeChangeStart", closeHandler);
    // router.events.on("routeChangeComplete", toggleHandler);
    // router.events.on('routeChangeError', toggleHandler)

    return () => {
      router.events.off("routeChangeStart", closeHandler);
      // router.events.off("routeChangeComplete", toggleHandler);
      // router.events.off('routeChangeError', toggleHandler)
    };
  }, [router]);

  return (
    <Drawer isOpen={state.isOpen} onClose={toggleHandler} placement="right">
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        {/* <DrawerHeader>Menu</DrawerHeader> */}

        <DrawerBody>
          <Stack mt={10} w="full" spacing={2}>
            {main.map((link, index) => (
              <MobileNavItem key={index} {...link} />
            ))}
          </Stack>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};

if (__DEV__) {
  MobileNavbar.displayName = "MobileNavbar";
}

const MobileNavItem: React.FC<INavbar.IItem> = memo(
  ({ title, subitems, href }) => {
    return (
      <>
        {subitems ? (
          <MobileNavSubitems href={href} title={title} subitems={subitems} />
        ) : (
          <NextLink href={href} passHref>
            <Button justifyContent="start" isFullWidth variant="ghost">
              {title}
            </Button>
          </NextLink>
        )}
      </>
    );
  },
);

if (__DEV__) {
  MobileNavItem.displayName = "MobileNavItem";
}

const MobileNavSubitems: React.FC<INavbar.IItem> = ({
  title,
  // href,
  subitems,
}) => {
  const { isOpen, onToggle } = useDisclosure();
  return (
    <Stack align="start" w="full" spacing={2} onClick={onToggle}>
      <Button isFullWidth isActive={isOpen} variant="ghost">
        <Flex as="p" w="full" justify="space-between" align="center">
          {title}
          <Icon
            as={ChevronDownIcon}
            transition={"all .25s ease-in-out"}
            transform={isOpen ? "rotate(180deg)" : ""}
            w={6}
            h={6}
          />
        </Flex>
      </Button>
      <Collapse
        in={isOpen}
        animateOpacity
        style={{ width: "100%", marginTop: "0!important" }}
      >
        <Stack
          ml={2}
          pl={4}
          borderLeft={1}
          borderStyle={"solid"}
          borderColor={useColorModeValue("gray.200", "gray.600")}
          align={"start"}
          w="full"
        >
          {isOpen &&
            subitems.map((item, index) => (
              // Mobile Sub Items
              <MobileNavItemSubitem
                key={index}
                title={item.title}
                href={item.href}
                subitems={item.subitems}
              />
            ))}
        </Stack>
      </Collapse>
    </Stack>
  );
};

if (__DEV__) {
  MobileNavSubitems.displayName = "MobileNavSubitems";
}

const MobileNavItemDivider = memo(() => {
  return (
    <Box w="full">
      <Divider />
    </Box>
  );
});

if (__DEV__) {
  MobileNavItemDivider.displayName = "MobileNavItemDivider";
}

const MobileNavItemSubitem: React.FC<INavbar.IItem> = memo(
  ({ title, href }) => {
    return (
      <>
        {title == "---" ? (
          <MobileNavItemDivider />
        ) : (
          <>
            {href ? (
              <NextLink href={href} passHref>
                <Link
                  rounded="lg"
                  _hover={{
                    bg: useColorModeValue("gray.100", "whiteAlpha.200"),
                    textDecoration: "none",
                  }}
                  w="full"
                  py={2}
                  px={4}
                >
                  <Flex as="span" align="center">
                    <Text mr="auto" as="span">
                      {title}
                    </Text>
                    <MenuItemTag title={title} />
                  </Flex>
                </Link>
              </NextLink>
            ) : (
              <Flex w="full" py={2} px={4}>
                <Text mr="auto" as="span">
                  {title}
                </Text>
                <MenuItemTag title={title} />
              </Flex>
            )}
          </>
        )}
      </>
    );
  },
);

if (__DEV__) {
  MobileNavItemSubitem.displayName = "MobileNavItemSubitem";
}

export default memo(MobileNavbar);
