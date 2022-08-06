import {
  FaCopy,
  FaBookmark,
  FaTelegram,
  FaWhatsapp,
  FaTwitter,
  FaFacebook,
} from "@react-icons";

import React, { useContext } from "react";

import { NextSeo } from "next-seo";
import NextLink from "next/link";

import {
  Avatar,
  Box,
  chakra,
  Container,
  Flex,
  Heading,
  Stack,
  Text,
  Link,
  useColorModeValue,
} from "@chakra-ui/react";

import { ThemeColorContext } from "@definitions/context/theme";

import Comments from "@components/comments";
import CommentForm from "@components/comments/comment-form";
import { IContent } from "@components/content/content";
import ContentDeserialize from "@components/content/deserialize";
import ShareButtons from "@components/share-button";

import MarvaDempsey from "@assets/images/avatar/1f-square.jpg?resize&size=140&img";
import PatrickFleming from "@assets/images/avatar/1m-square.jpg?resize&size=140&img";
import NicholasBarnes from "@assets/images/avatar/3m-square.jpg?resize&size=140&img";
import Chart1 from "@assets/images/chart-1.jpg?resize&img";
import Computer from "@assets/images/computer.jpg?resize&img";

const BlogArticlePage: React.FC = () => {
  const theme = useContext(ThemeColorContext);
  const color = theme.colorScheme; // global default primary theme color

  /* ----------------------------- Page Contents ---------------------------- */

  // Post details
  const post = {
    title:
      "Scalable web and development services for enterprise and small businesses",
    author: "Marva Dempsey",
    avatar: MarvaDempsey,
    meta: "Mar 10, 2022 · 2 min read",
  };

  // Deserializable Page Content
  const contents: IContent.IProps[] = [
    {
      body: [
        {
          mx: "auto",
          content:
            "One of the critical components that’s required to deliver superior customer experiences is a reliable load balancer. Load balancers distribute traffic across your infrastructure and enable you to improve and manage availability, performance, and reliability.",
        },
        {
          mx: "auto",
          content:
            "Our customers are no different, and many of them rely on our managed Load Balancer service to run and scale their apps. We are excited to announce that we have made major upgrades to our Load Balancer! With this release, Load Balancer can easily handle up to one million requests per second or one million simultaneous connections.",
        },
        {
          content: undefined,
          image: Chart1,
          imageRatio: 21 / 7,
          imageDescription: "Performance chart",
          mx: "auto",
          // flexDirection: "column",
          // width: "300px",
          // maxWidth: "800px",
          maxWidth: "full",
          textAlign: "center",
        },
        {
          mx: "auto",
          content:
            "This upgrade gives our customers more flexibility in choosing the right sized Load Balancer for your apps.",
        },
        {
          content: null,
          images: [
            {
              image: Chart1,
              imageDescription: "1x Performance chart",
              alt: "1x Performance chart",
            },
            {
              image: Chart1,
              imageDescription: "2x Performance chart",
              alt: "2x Performance chart",
            },
            {
              image: Chart1,
              imageDescription: "3x Performance chart",
              alt: "3x Performance chart",
            },
            {
              image: Chart1,
              imageDescription: "4x Performance chart",
              alt: "4x Performance chart",
            },
          ],
        },
        {
          mx: "auto",
          content:
            "You determine how much traffic your Load Balancer can handle by picking the appropriate number of nodes. You can start with 1 node and scale up to 100 nodes. Each node increases the capacity of the load balancer as follows:",
        },
        {
          content: null,
          mx: "auto",
          // mx: 5,
          // d: "flex",
          // flexDirection: "row",
          // justifyContent: "center",
          // width: "fit-content",
          // maxWidth: "100%",
          unorderedList: [
            "<strong>10,000</strong> Request Per Second or RPS",
            "<strong>10,000</strong> Simultaneous connections",
            "<strong>250</strong> New SSL connections per second",
          ],
        },
        {
          mx: "auto",
          // maxWidth: "900px",
          content:
            "We understand that traffic to your apps can go up or down, with some apps, such as an ecommerce app during the holidays, experiencing significant surges. With this in mind, we have designed the load balancer so that you can quickly resize it to meet your needs. You can increase the capacity of your Load Balancer by adding more nodes or decrease its capacity by removing nodes. Here’s a short video that shows how easy it is to spin up the new Load Balancers.",
          image: Computer,
        },
        {
          mx: "auto",
          content:
            "Beyond the flexibility of choosing the right size for your Load Balancer, we are keeping many of the features we had in place, including our easy integration with <u>Let's Encrypt</u>, which lets you create SSL certificates for <strong>free</strong>, and we make sure they get renewed automatically. We recently enabled the option to create wildcard certificates, so you can have any subdomain automatically covered! You can read more about configuring SSL termination in the official documentation.",
        },
      ],
    },
    {
      body: [
        {
          content: null,
          heading: "Pricing",
          mx: "auto",
          // fontSize: "sm",
          // color: "red.400",
        },
        {
          mx: "auto",
          content:
            "The pricing for Load Balancers is based on its size, and is determined by the number of nodes you assign to it. Each node costs $10 per month. For example, if you create a Load Balancer with five nodes, then your monthly price will be $50. The price of the Load Balancer is not affected by the number of targets it has.",
        },
        {
          mx: "auto",
          content: (
            <Text>
              Load Balancers by themselves don’t generate bandwidth charges, as
              they are bandwidth neutral. Click here to{" "}
              <NextLink href="/pages/faq" passHref>
                <Link color={`${color}.400`}>learn more.</Link>
              </NextLink>
            </Text>
          ),
        },
      ],
    },
  ];

  // Share buttons
  const shareButtonItems = [
    {
      icon: FaWhatsapp,
      href: "https://www.whatsapp.com",
      color: "whatsapp",
      title: "WhatsApp",
    },
    {
      icon: FaTelegram,
      href: "https://www.telegram.org",
      color: "telegram",
      title: "Telegram",
    },
    {
      icon: FaFacebook,
      href: "https://www.facebook.com",
      color: "facebook",
      title: "Facebook",
    },
    {
      icon: FaTwitter,
      href: "https://www.twitter.com",
      color: "twitter",
      title: "Twitter",
    },
  ];

  // Bookmark buttons
  const bookmarkButtons = [
    {
      icon: FaBookmark,
      href: "#Bookmark",
      color: "gray",
      title: "Bookmark",
    },
    {
      icon: FaCopy,
      href: "#CopyArticleLink",
      color: "gray",
      title: "Copy article link",
    },
  ];

  // Comments
  const comments = [
    {
      id: "1",
      body: "Thanks to this blog post, I learned new things about the scalable web and now I'm wondering where I can learn more. Can you help me with this?",
      avatar: PatrickFleming,
      author: "Patrick Fleming",
      meta: "43 minutes ago",
      badge: "New",
      comments: [
        {
          id: "2",
          body: "That's really good to hear, Patrick. I will continue to keep you informed on further developments",
          avatar: MarvaDempsey,
          author: "Marva Dempsey",
          meta: "16 minutes ago",
          hasAdmin: true,
        },
      ],
    },
    {
      id: "3",
      body: "It would be really helpful if you produce more content on this topic.",
      avatar: NicholasBarnes,
      author: "Nicholas Barnes",
      meta: "2 days ago",
    },
  ];

  /* -------------------------------- Styles -------------------------------- */
  const authorStyle = {
    fontSize: "xl",
    lineHeight: 1,
    fontWeight: 600,
  };
  const metaStyle = {
    fontSize: "sm",
    opacity: 0.75,
  };

  return (
    <>
      <NextSeo
        title="Blog Article"
        description="Mercury Blog Article Example Page"
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
        {/* Post Title */}
        <Box pb={[10, 10, 20]} pt={[24, 24, 180]}>
          <Container maxW="container.md">
            <Heading mb={6}>{post.title}</Heading>
            <Stack
              align={["start", "start", "center"]}
              justify="space-between"
              direction={["column", "row", "row", "row"]}
              spacing={[4, 2, 2]}
            >
              {/* Author Avatar */}
              <Stack direction="row" spacing={4} alignItems="center">
                {/*
                 * TODO: add srcSet to Avatar
                 * srcSet={post.avatar?.srcSet}
                 * issue: https://github.com/chakra-ui/chakra-ui/issues/5256
                 */}
                <Avatar src={post.avatar.src} name={post.author} />
                <Stack direction="column" spacing={0}>
                  <Text {...authorStyle}>{post.author}</Text>
                  <Text {...metaStyle}>{post.meta}</Text>
                </Stack>
              </Stack>
              <ShareButtons items={shareButtonItems} />
            </Stack>
          </Container>
        </Box>

        {/* Post Content */}
        <Container maxW="container.xl">
          {contents.map((content, idx) => (
            <Box key={idx} fontSize="sm" maxW="auto" mb={[5, 10, 20, 20]}>
              {content.body.map((body, i) => (
                <ContentDeserialize key={i} {...body} />
              ))}
            </Box>
          ))}
        </Container>

        {/* Share Buttons */}
        <Flex py={4} mb={10} borderTopWidth="1px" borderBottomWidth="1px">
          <Container maxW="container.md">
            <Flex justify="space-between">
              <ShareButtons
                text="Share this article"
                items={shareButtonItems}
              />
              <ShareButtons text={null} items={bookmarkButtons} />
            </Flex>
          </Container>
        </Flex>

        {/* Comments */}
        <Container maxW="container.md">
          <Comments comments={comments} />

          {/* Comment Form */}
          <CommentForm
            p={8}
            my={10}
            rounded="md"
            borderWidth="1px"
            colorScheme={color}
          />
        </Container>
      </chakra.main>
    </>
  );
};

export default BlogArticlePage;
