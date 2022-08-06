import { memo } from "react";

import NextLink from "next/link";

import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronRightIcon,
} from "@chakra-ui/icons";
import {
  Box,
  Collapse,
  Flex,
  HStack,
  Icon,
  IconButton,
  Link,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Stack,
  Text,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";

import customScrollbar from "@definitions/utils/scrollbar";

import { LogoWithSiteName } from "@components/logo/logo-with-site-name";

import { INavbar } from "./navbar";

const NavbarModern: React.FC<INavbar.IProps> = ({
  logo,
  justifyContent = "space-between",
  items,
  startItems,
  endItems,
  children,
  colorScheme,
  ...rest
}) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Box py={5} overflowX="auto" sx={customScrollbar()} {...rest}>
      <Flex align="center" justify={justifyContent}>
        {logo ? logo : <LogoWithSiteName />}
        {startItems ? startItems : null}

        <HStack
          as="nav"
          spacing={[0, 0, 1, 1]}
          display={["none", "none", "flex"]}
        >
          <DesktopNav items={items} colorScheme={colorScheme} />
        </HStack>

        {endItems ? endItems : null}

        {/* Mobile Menu Button */}
        <Box display={{ base: "flex", md: "none" }} ml="auto">
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            variant="ghost"
            aria-label="Toggle Navigation"
          />
        </Box>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        {children ? children : <MobileNav items={items} />}
      </Collapse>
    </Box>
  );
};
NavbarModern.displayName = "NavbarModern";

const DesktopNav: React.FC<INavbar.IProps> = ({ items = [], colorScheme }) => {
  const linkFontSize = "sm";
  const linkColor = useColorModeValue("gray.600", "gray.200");
  const linkHoverColor = useColorModeValue("gray.800", "white");
  const popoverContentBgColor = useColorModeValue("white", "gray.900");
  return (
    <Stack direction="row" spacing={4}>
      {items.map((item) => (
        <Flex key={item.title}>
          {item.subitems ? (
            <Popover trigger="hover" placement="bottom-start">
              <PopoverTrigger>
                <Text
                  p={2}
                  // href={item.href ?? "#"}
                  fontSize={linkFontSize}
                  fontWeight={500}
                  color={linkColor}
                  cursor="pointer"
                  _hover={{
                    textDecoration: "none",
                    color: linkHoverColor,
                  }}
                >
                  {item.title}
                  <ChevronDownIcon h={"1.2em"} w={"1.2em"} ml={2} />
                </Text>
              </PopoverTrigger>

              {item.subitems && (
                <PopoverContent
                  border={0}
                  boxShadow={"xl"}
                  bg={popoverContentBgColor}
                  p={4}
                  left={0}
                  rounded={"xl"}
                  minW={"sm"}
                >
                  <Stack>
                    {item.subitems.map((item, idx) => (
                      <DesktopSubNav
                        key={idx}
                        {...item}
                        colorScheme={colorScheme}
                      />
                    ))}
                  </Stack>
                </PopoverContent>
              )}
            </Popover>
          ) : (
            <NextLink href={item.href} passHref>
              <Link
                p={2}
                fontSize={linkFontSize}
                fontWeight={500}
                color={linkColor}
                _hover={{
                  textDecoration: "none",
                  color: linkHoverColor,
                }}
              >
                {item.title}
              </Link>
            </NextLink>
          )}
        </Flex>
      ))}
    </Stack>
  );
};
DesktopNav.displayName = "DesktopNav";

const DesktopSubNav = ({
  icon,
  title,
  href,
  description,
  colorScheme,
}: INavbar.IItem) => {
  const hoverBG = useColorModeValue(`${colorScheme}.50`, "gray.800");
  const titleColor = useColorModeValue("currentColor", "gray.500");
  const hoverTitleColor = useColorModeValue("currentColor", "gray.400");
  const descriptionColor = useColorModeValue("blackAlpha.600", "gray.600");
  const hoverColorDescription = useColorModeValue("blackAlpha.700", "gray.600");
  return (
    <NextLink href={href} passHref>
      <Link
        p={2}
        role="group"
        rounded="md"
        display="block"
        _hover={{ bg: hoverBG }}
      >
        <Stack direction="row" align="center">
          {icon && (
            <Flex alignSelf="start" mr={2} mt={1}>
              <Icon as={icon} />
            </Flex>
          )}
          <Flex direction="column">
            <Text
              transition={"all 250ms ease-in-out"}
              color={titleColor}
              _groupHover={{ color: hoverTitleColor }}
              fontWeight={500}
              mb={0}
            >
              {title}
            </Text>
            <Text
              fontSize="sm"
              color={descriptionColor}
              _groupHover={{ color: hoverColorDescription }}
            >
              {description}
            </Text>
          </Flex>
          <Flex
            flex={1}
            align="center"
            justify="flex-end"
            opacity={0}
            transition="all 250ms ease-in-out"
            transform="translateX(-10px)"
            _groupHover={{ opacity: 1, transform: "translateX(0)" }}
          >
            <Icon
              as={ChevronRightIcon}
              color={`${colorScheme}.400`}
              w={5}
              h={5}
            />
          </Flex>
        </Stack>
      </Link>
    </NextLink>
  );
};
DesktopSubNav.displayName = "DesktopSubNav";

const MobileNav = ({ items = [] }) => {
  return (
    <Stack p={4} display={{ md: "none" }}>
      {items.map((item, idx) => (
        <MobileNavItem key={idx} {...item} />
      ))}
    </Stack>
  );
};
MobileNav.displayName = "MobileNav";

const MobileNavItem: React.FC<INavbar.IItem> = ({ title, subitems, href }) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Stack
      spacing={4}
      onClick={subitems && onToggle}
      cursor={subitems ? "pointer" : null}
    >
      <Flex
        py={2}
        as={subitems ? null : Link}
        href={href ? href : null}
        justify="space-between"
        align="center"
        _hover={{
          textDecoration: "none",
        }}
      >
        <Text
          fontWeight={600}
          color={useColorModeValue("gray.600", "gray.200")}
        >
          {title}
        </Text>
        {subitems && (
          <Icon
            as={ChevronDownIcon}
            transition="all 250ms ease-in-out"
            transform={isOpen ? "rotate(180deg)" : ""}
            w={6}
            h={6}
          />
        )}
      </Flex>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: "0!important" }}>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle="solid"
          borderColor={useColorModeValue("gray.200", "gray.700")}
          align="start"
        >
          {subitems &&
            subitems.map((item) => (
              <Link key={item.title} py={2} href={item.href}>
                {item.title}
              </Link>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  );
};
MobileNavItem.displayName = "MobileNavItem";

export default memo(NavbarModern);
