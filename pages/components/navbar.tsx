import {
  AiFillBell,
  AiOutlineCalendar,
  AiOutlineDashboard,
  AiOutlineInbox,
  AiOutlineMail,
  AiOutlineMessage,
  AiOutlineSearch,
  AiOutlineUser,
  BsChat,
  FaQuestion,
  FiLogOut,
  GiMoneyStack,
  GoTasklist,
  IoSettingsOutline,
} from "@react-icons";

import React, { memo, useContext } from "react";

import { NextSeo } from "next-seo";

import { ChevronDownIcon, CloseIcon, HamburgerIcon } from "@chakra-ui/icons";
import {
  Avatar,
  Box,
  Button,
  chakra,
  Collapse,
  Container,
  Flex,
  HStack,
  Icon,
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  Link,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Stack,
  Text,
  useColorModeValue,
  useConst,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";

import Logo from "@definitions/brands/logo-1";
import { ThemeColorContext } from "@definitions/context/theme";

import { Section, SectionSubHeading, SectionHeading } from "@components/common";
import Highlight from "@components/highlight";
import { INavbar } from "@components/navbar/navbar";
import NavbarDashboard from "@components/navbar/navbar-dashboard";
import Navbar from "@components/navbar/navbar-default";
import NavbarModern from "@components/navbar/navbar-modern";
import PageTitle from "@components/page-title";

import AvatarImage from "@assets/images/avatar-1.jpg?resize&size=120&img";

/**
 * Default navigation items
 */
const _NAV_ITEMS = [
  { title: "Home", href: "#home" },
  { title: "About", href: "#about" },
  {
    title: "Items",
    href: "",
    subitems: [
      { title: "Item 1", href: "#item1" },
      { title: "Item 2", href: "#item2" },
      { title: "Item 3", href: "#item3" },
    ],
  },
  { title: "Contact", href: "#contact" },
];

const _DASHBOARD_NAV_ITEMS = [
  {
    title: "Dashboard",
    href: "#dashboard",
    icon: AiOutlineDashboard,
  },
  { title: "Inbox", href: "#inbox", icon: AiOutlineInbox },
  { title: "Chat", href: "#chat", icon: AiOutlineMessage },
  {
    title: "Calendar",
    href: "#calendar",
    icon: AiOutlineCalendar,
  },
];

const _MODERN_NAV_ITEMS = [
  {
    title: "Inspiration",
    href: "",
    subitems: [
      {
        icon: GoTasklist,
        title: "Explore Design Work",
        description: "Trending Design to inspire you",
        href: "#",
      },
      {
        icon: AiFillBell,
        title: "New & Noteworthy",
        description: "Up-and-coming Designers",
        href: "#",
      },
    ],
  },
  {
    title: "Find Work",
    href: "",
    subitems: [
      {
        icon: AiFillBell,
        title: "Job Board",
        description: "Find your dream design job",
        href: "#",
      },
      {
        icon: AiFillBell,
        title: "Freelance Projects",
        description: "An exclusive list for contract work",
        href: "#",
      },
    ],
  },
  {
    title: "Learn Design",
    href: "#",
  },
  {
    title: "Hire Designers",
    href: "#",
  },
];

const NavbarPage: React.FC = () => {
  const theme = useContext(ThemeColorContext);
  const color = theme.colorScheme; // global default primary theme color

  const NAV_ITEMS = useConst(_NAV_ITEMS);
  const DASHBOARD_NAV_ITEMS = useConst(_DASHBOARD_NAV_ITEMS);
  const MODERN_NAV_ITEMS = useConst(_MODERN_NAV_ITEMS);

  // console.log("Rendered page");
  return (
    <>
      <NextSeo
        title="Navbar"
        description="Mercury Navbar Component Example Page"
      />
      <chakra.main
        sx={{
          "*::selection": {
            color: useColorModeValue(`${color}.600`, `${color}.400`),
            background: useColorModeValue(`${color}.200`, `${color}.700`),
          },
          mark: {
            color: useColorModeValue(`${color}.600`, `${color}.400`),
            background: useColorModeValue(`${color}.100`, `${color}.800`),
          },
        }}
      >
        <PageTitle
          title="Navbar Component"
          body={
            <Text as="div">
              On this page, you will find{" "}
              <Text as="div" display="inline-block" color="green.400">
                <Highlight strokeWidth={2}>
                  <b>6 example</b>
                </Highlight>
              </Text>{" "}
              of navbar component that you can easily use on your pages.
            </Text>
          }
        />
        <Section>
          <Container maxW="container.xl">
            <SectionHeading>Navigation Positions</SectionHeading>
            <VStack align="start" width="full" spacing={100}>
              <Box width="full">
                <SectionSubHeading>Default</SectionSubHeading>
                <DefaultNav items={NAV_ITEMS} />
              </Box>

              <Box width="full">
                <SectionSubHeading>Menu Start</SectionSubHeading>
                <StartNav items={NAV_ITEMS} />
              </Box>

              <Box width="full">
                <SectionSubHeading>Menu End</SectionSubHeading>
                <EndNav items={NAV_ITEMS} />
              </Box>

              <Box width="full">
                <SectionSubHeading>Justify Center</SectionSubHeading>
                <CenterNav items={NAV_ITEMS} />
              </Box>

              <SectionHeading width="full">Custom Navigations</SectionHeading>

              <Box width="full">
                <SectionSubHeading>NavbarDashboard</SectionSubHeading>
                <NavbarDashboard
                  bg={useColorModeValue("gray.100", "gray.900")}
                  colorScheme={"blueGray"}
                  logo={
                    <Logo
                      color={useColorModeValue(null, "gray.400")}
                      minW={150}
                      mr={[2, 2, 10]}
                    />
                  }
                  items={DASHBOARD_NAV_ITEMS}
                  endItems={
                    <>
                      <InputGroup display={["none", "flex", "flex"]}>
                        <InputLeftElement
                          pointerEvents="none"
                          children={<AiOutlineSearch />}
                        />
                        <Input
                          bg={useColorModeValue("gray.50", "gray.800")}
                          placeholder="Search..."
                        />
                      </InputGroup>
                      <UserMenu isOnline />
                    </>
                  }
                />
              </Box>

              <Box width="full">
                <SectionSubHeading>NavbarModern</SectionSubHeading>
                <NavbarModern
                  bg={useColorModeValue("gray.100", "gray.900")}
                  px={4}
                  colorScheme={color}
                  logo={
                    <Logo
                      color={useColorModeValue(null, "gray.400")}
                      minW={150}
                      mr={[2, 2, 10]}
                    />
                  }
                  items={MODERN_NAV_ITEMS}
                  endItems={
                    <HStack display={["none", "none", "inline-flex"]} ml="auto">
                      <Stack
                        flex={{ base: 1, md: 0 }}
                        justify="flex-end"
                        alignItems="center"
                        direction="row"
                        spacing={2}
                      >
                        <Button fontSize="sm" variant="ghost">
                          Sign In
                        </Button>
                        <Button
                          fontSize="sm"
                          fontWeight={600}
                          colorScheme={color}
                        >
                          Sign Up
                        </Button>
                      </Stack>
                    </HStack>
                  }
                />
              </Box>
            </VStack>
          </Container>
        </Section>
      </chakra.main>
    </>
  );
};

const UserMenu = memo(({ isOnline = false }: { isOnline?: boolean }) => {
  // console.log("Rendered UserMenu");
  const onlineDot = {
    content: '""',
    w: 2,
    h: 2,
    bg: useColorModeValue("green.200", "green.300"),
    border: "1px solid",
    borderColor: useColorModeValue("white", "gray.800"),
    rounded: "full",
    pos: "absolute",
    bottom: 0,
    right: 0,
  };
  return (
    <Menu>
      <MenuButton
        as={Button}
        rounded={"full"}
        variant={"link"}
        cursor={"pointer"}
        minW={0}
      >
        {/*
         * TODO: add srcSet to Avatar
         * srcSet={AvatarImage?.srcSet}
         * issue: https://github.com/chakra-ui/chakra-ui/issues/5256
         */}
        <Avatar
          size={"sm"}
          src={AvatarImage.src}
          pos={"relative"}
          _after={isOnline ? onlineDot : undefined}
        />
      </MenuButton>
      <MenuList maxWidth="180px" minW="180px">
        <MenuItem icon={<AiOutlineUser />}>Profile</MenuItem>
        <MenuItem icon={<AiOutlineMail />}>Inbox</MenuItem>
        <MenuItem icon={<GoTasklist />}>Task</MenuItem>
        <MenuItem icon={<BsChat />}>Chat</MenuItem>
        <MenuDivider />
        <MenuItem icon={<IoSettingsOutline />}>Settings</MenuItem>
        <MenuItem icon={<GiMoneyStack />}>Pricing</MenuItem>
        <MenuItem icon={<FaQuestion />}>FAQ</MenuItem>
        <MenuItem icon={<FiLogOut />}>Logout</MenuItem>
      </MenuList>
    </Menu>
  );
});

const DefaultNav = memo(({ items }: { items: INavbar.IItem[] }) => {
  const { isOpen, onToggle } = useDisclosure();
  const bg = useColorModeValue("gray.100", "gray.900");
  const color = useColorModeValue(null, "gray.400");
  // console.log("Rendered DefaultNav");
  return (
    <Navbar
      bg={bg}
      px={4}
      startItems={<Logo color={color} minW={150} mr={[2, 2, 10]} />}
      items={items}
      endItems={
        <HStack ml={[0, 0, 10]}>
          <Button display={["none", "initial", "initial"]} colorScheme="green">
            Call to action
          </Button>
          <IconButton
            // size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label="Open Menu"
            display={{ md: "none" }}
            onClick={onToggle}
          />
        </HStack>
      }
    >
      <Box display={["initial", "initial", "none", "none"]}>
        <Collapse in={isOpen} animateOpacity>
          <Box overflow="hidden" mt="4">
            <MobileNav items={items} />
          </Box>
        </Collapse>
      </Box>
    </Navbar>
  );
});

const StartNav = memo(({ items }: { items: INavbar.IItem[] }) => {
  const { isOpen, onToggle } = useDisclosure();
  const bg = useColorModeValue("gray.100", "gray.900");
  const color = useColorModeValue(null, "gray.400");
  // console.log("Rendered StartNav");
  return (
    <Navbar
      bg={bg}
      px={4}
      justifyContent={"start"}
      startItems={<Logo color={color} minW={150} mr={[2, 2, 10]} />}
      items={items}
      endItems={
        <HStack ml={["auto"]}>
          <Button display={["none", "initial", "initial"]} colorScheme="green">
            Call to action
          </Button>
          <IconButton
            // size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label="Open Menu"
            display={{ md: "none" }}
            onClick={onToggle}
          />
        </HStack>
      }
    >
      <Box display={["initial", "initial", "none", "none"]}>
        <Collapse in={isOpen} animateOpacity>
          <Box overflow="hidden" mt="4">
            <MobileNav items={items} />
          </Box>
        </Collapse>
      </Box>
    </Navbar>
  );
});

const EndNav = memo(({ items }: { items: INavbar.IItem[] }) => {
  const { isOpen, onToggle } = useDisclosure();
  const bg = useColorModeValue("gray.100", "gray.900");
  const color = useColorModeValue(null, "gray.400");
  // console.log("Rendered EndNav");
  return (
    <Navbar
      bg={bg}
      px={4}
      justifyContent={"end"}
      startItems={<Logo color={color} minW={150} mr={["auto"]} />}
      items={items}
      endItems={
        <HStack ml={[0, 0, 10]}>
          <Button display={["none", "initial", "initial"]} colorScheme="green">
            Call to action
          </Button>
          <IconButton
            // size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label="Open Menu"
            display={{ md: "none" }}
            onClick={onToggle}
          />
        </HStack>
      }
    >
      <Box display={["initial", "initial", "none", "none"]}>
        <Collapse in={isOpen} animateOpacity>
          <Box overflow="hidden" mt="4">
            <MobileNav items={items} />
          </Box>
        </Collapse>
      </Box>
    </Navbar>
  );
});

const CenterNav = memo(({ items }: { items: INavbar.IItem[] }) => {
  const { isOpen, onToggle } = useDisclosure();
  const bg = useColorModeValue("gray.100", "gray.900");
  const color = useColorModeValue(null, "gray.400");
  // console.log("Rendered CenterNav");
  return (
    <Navbar
      bg={bg}
      px={4}
      justifyContent={"center"}
      startItems={<Logo color={color} minW={150} mr={[2, 4, 10]} />}
      items={items}
      endItems={
        <HStack ml={[0, 0, 10]}>
          <Button display={["none", "initial", "initial"]} colorScheme="green">
            Call to action
          </Button>
          <IconButton
            // size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label="Open Menu"
            display={{ md: "none" }}
            onClick={onToggle}
          />
        </HStack>
      }
    >
      <Box display={["initial", "initial", "none", "none"]}>
        <Collapse in={isOpen} animateOpacity>
          <Box overflow="hidden" mt="4">
            <MobileNav items={items} />
          </Box>
        </Collapse>
      </Box>
    </Navbar>
  );
});

const MobileNav = memo(({ items }: { items: INavbar.IItem[] }) => {
  // console.log("Rendered MobileNav");
  return (
    <Stack
      // bg={useColorModeValue("white", "gray.800")}
      p={0}
      display={{ md: "none" }}
    >
      {items.map((item) => (
        <MobileNavItem key={item.title} {...item} />
      ))}
    </Stack>
  );
});

const MobileNavItem = memo(({ title, subitems, href }: INavbar.IItem) => {
  const { isOpen, onToggle } = useDisclosure();
  // console.log("Rendered MobileNavItem");
  return (
    <Stack
      cursor={subitems ? "pointer" : null}
      spacing={4}
      // onClick={subitems && onToggle}
      onClick={(e) => {
        if (subitems) {
          e.preventDefault;
          return onToggle();
        }
      }}
    >
      <Flex
        py={2}
        as={href ? Link : null}
        href={href ? href : null}
        justify={"space-between"}
        align={"center"}
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
            transition={"all .25s ease-in-out"}
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
          borderStyle={"solid"}
          borderColor={useColorModeValue("gray.200", "gray.700")}
          align={"start"}
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
});

export default memo(NavbarPage);
