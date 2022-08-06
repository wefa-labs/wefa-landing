import {
  FaRegUser,
  FaTwitter,
  FaLinkedin,
  FaFacebook,
  FaInstagram,
  FaGithub,
  FaDiscord,
  FaWhatsapp,
} from "@react-icons";

import { NextSeo } from "next-seo";
import NextLink from "next/link";

import {
  Badge,
  Box,
  Button,
  Center,
  Container,
  Divider,
  Icon,
  Link,
  MenuDivider,
  MenuGroup,
  MenuItem,
  MenuList,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";

import Highlight from "@components/highlight";
import PageTitle from "@components/page-title";
import { TeamMemberCard } from "@components/team/team-member-card";
import { TeamMemberProfileCard } from "@components/team/team-member-profile-card";
import { TeamMemberShareCard } from "@components/team/team-member-share-card";
import { TeamMemberSimpleCard } from "@components/team/team-member-simple-card";
import { TeamMemberSingleCard } from "@components/team/team-member-single-card";
import { TeamMemberSocialProfileCard } from "@components/team/team-member-social-profile-card";

import AvatarImage from "@assets/images/avatar-1.jpg?resize&img";
import ProfileBackground from "@assets/images/user-profile-bg.jpg?resize&img";

const socialTwoLinks = [
  {
    title: "Facebook",
    href: "https://facebook.com",
    icon: FaFacebook,
  },
  {
    title: "Twitter",
    href: "https://twitter.com",
    icon: FaTwitter,
  },
  // {
  //   title: "WhatsApp",
  //   href: "https://whatsapp.com",
  //   icon: FaWhatsapp,
  // },
];

const socialSixLinks = [
  {
    title: "LinkedIn",
    href: "https://linkedin.com",
    icon: FaLinkedin,
  },
  {
    title: "Facebook",
    href: "https://facebook.com",
    icon: FaFacebook,
  },
  {
    title: "WhatsApp",
    href: "https://whatsapp.com",
    icon: FaWhatsapp,
  },
  {
    title: "Twitter",
    href: "https://twitter.com",
    icon: FaTwitter,
  },
  {
    title: "GitHub",
    href: "https://github.com",
    icon: FaGithub,
  },
  {
    title: "Discord",
    href: "https://discord.com",
    icon: FaDiscord,
  },
];

const UserMenuList: React.FC = (): JSX.Element => {
  return (
    <MenuList zIndex="dropdown">
      <MenuGroup title="Profile">
        <MenuItem icon={<Icon as={FaRegUser} />}>User Profile</MenuItem>
      </MenuGroup>
      <MenuDivider />
      <MenuGroup title="Social Links">
        <MenuItem
          as="a"
          href="https://twitter.com/themebiotic"
          target="_blank"
          rel="noopener nofollow"
          icon={<Icon as={FaTwitter} />}
        >
          Twitter
        </MenuItem>
        <MenuItem
          as="a"
          href="https://facebook.com/Themebiotic"
          target="_blank"
          rel="noopener nofollow"
          icon={<Icon as={FaFacebook} />}
        >
          Facebook
        </MenuItem>
        <MenuItem
          as="a"
          href="https://instagram.com/themebiotic"
          target="_blank"
          rel="noopener nofollow"
          icon={<Icon as={FaInstagram} />}
        >
          Instagram
        </MenuItem>
      </MenuGroup>
    </MenuList>
  );
};

const TeamPage: React.FC = () => {
  return (
    <>
      <NextSeo title="Team Component" description="Team Component Examples" />
      <main>
        <PageTitle
          title="Team Component"
          body={
            <Text as="div">
              On this page, you will find{" "}
              <Text as="div" display="inline-block" color="green.400">
                <Highlight strokeWidth={2}>
                  <b>6 examples</b>
                </Highlight>
              </Text>{" "}
              of team component that you can easily use on your pages.
            </Text>
          }
        />

        <Container maxW="container.xl">
          <Box my={32}>
            <Center mb={10}>
              <Stack
                flexShrink={0}
                direction={["column", "column", "column", "row"]}
                justify="center"
                align="center"
                width="100%"
                spacing={[5, 5, 10, 20]}
              >
                <TeamMemberShareCard
                  maxW="290px"
                  w="full"
                  name="Ethan Hunt"
                  occupation="Frontend Developer"
                  avatarImage={AvatarImage}
                  image={AvatarImage}
                  meta="12h ago"
                  comment="21"
                  like="76"
                  body={
                    <>
                      Do you like my new profile pic?{" "}
                      <NextLink href="#NewProfilePic" passHref>
                        <Link
                          fontWeight={600}
                          color={useColorModeValue("blue.600", "blue.300")}
                        >
                          #NewProfilePic
                        </Link>
                      </NextLink>{" "}
                      Don't forget to write your thoughts in the comments.
                    </>
                  }
                />
                <TeamMemberSingleCard
                  maxW="290px"
                  w="full"
                  avatarImage={AvatarImage}
                  name="Ethan Matthew Hunt"
                  occupation="Frontend Developer"
                  bio="Hi, I'm Ethan and I'm an iOS engineer. I'm interested in tools, networking, user-friendly APIs and beautiful UI."
                  followers="1.3K"
                  following="2.4K"
                  isOnline
                  socialLinks={socialTwoLinks}
                />

                <TeamMemberSocialProfileCard
                  maxW="290px"
                  w="full"
                  isOnline
                  avatarImage={AvatarImage}
                  name="Ethan Matthew Hunt"
                  username="ethan_matthew_hunt"
                  occupation="Frontend Developer"
                  bio="Hi, I'm Ethan and I'm an iOS engineer. I'm interested in tools, networking, user-friendly APIs and beautiful UI."
                  body={
                    <>
                      <Link href="#">
                        <Badge
                          px={2}
                          py={1}
                          bg={useColorModeValue("gray.50", "gray.800")}
                          fontWeight="400"
                        >
                          #react
                        </Badge>
                      </Link>
                      <Link href="#">
                        <Badge
                          px={2}
                          py={1}
                          bg={useColorModeValue("gray.50", "gray.800")}
                          fontWeight="400"
                        >
                          #javascript
                        </Badge>
                      </Link>
                      <Link href="#">
                        <Badge
                          px={2}
                          py={1}
                          bg={useColorModeValue("gray.50", "gray.800")}
                          fontWeight="400"
                        >
                          #nodejs
                        </Badge>
                      </Link>
                    </>
                  }
                  buttons={
                    <>
                      <Button
                        flex={1}
                        fontSize="sm"
                        rounded="full"
                        _focus={{
                          bg: "gray.200",
                        }}
                      >
                        Message
                      </Button>
                      <Button
                        flex={1}
                        fontSize="sm"
                        rounded="full"
                        bg="blue.400"
                        color="white"
                        boxShadow={
                          "0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)"
                        }
                        _hover={{
                          bg: "blue.500",
                        }}
                        _focus={{
                          bg: "blue.500",
                        }}
                      >
                        Follow
                      </Button>
                    </>
                  }
                />
              </Stack>
            </Center>
            <Divider />
            <Center mt={10}>
              <Stack
                flexShrink={0}
                direction={["column", "column", "column", "row"]}
                align="center"
                justify="center"
                width="100%"
                spacing={[5, 5, 10, 20]}
              >
                <TeamMemberSimpleCard
                  isOnline
                  maxW="290px"
                  name="Ethan Hunt"
                  occupation="Frontend Developer"
                  avatarImage={AvatarImage}
                  bio="Hi, I'm Ethan and I'm an iOS engineer. I'm interested in tools, networking, user-friendly APIs and beautiful UI."
                  menuList={<UserMenuList />}
                />
                <TeamMemberCard
                  maxW="290px"
                  name="Ethan Hunt"
                  occupation="Frontend Developer"
                  isOnline
                  avatarImage={AvatarImage}
                  profileBg={ProfileBackground}
                  followers="1.3K"
                  following="2.4K"
                  buttons={
                    <>
                      <Button
                        w="full"
                        colorScheme="blue"
                        rounded="md"
                        _hover={{
                          transform: "translateY(-2px)",
                          boxShadow: "lg",
                        }}
                        _focus={{
                          border: "none",
                        }}
                      >
                        Message
                      </Button>
                      <Button
                        w="full"
                        bg={useColorModeValue("black", "gray.900")}
                        color="white"
                        rounded="md"
                        _hover={{
                          transform: "translateY(-2px)",
                          boxShadow: "lg",
                        }}
                        _active={{
                          bg: useColorModeValue("gray.700", "gray.900"),
                        }}
                        _focus={{
                          border: "none",
                        }}
                      >
                        Follow
                      </Button>
                    </>
                  }
                />
                <TeamMemberProfileCard
                  name="Ethan Hunt"
                  occupation="UI / UX Designer"
                  avatarImage={AvatarImage}
                  isOnline
                  // post="300"
                  followers="732"
                  following="1.7K"
                  bio="I'm Ethan and I'm an iOS engineer. I'm interested in tools, networking, user-friendly APIs and beautiful UI."
                  socialLinks={socialSixLinks}
                  maxW="290px"
                />
              </Stack>
            </Center>
          </Box>
        </Container>
      </main>
    </>
  );
};

export default TeamPage;
