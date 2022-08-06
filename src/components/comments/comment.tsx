import { FaHeart, FaRegHeart } from "@react-icons";

import { memo, useState } from "react";

import {
  Text,
  Badge,
  Button,
  Box,
  Avatar,
  Stack,
  Tag,
  useColorModeValue,
  Icon,
} from "@chakra-ui/react";

import { IComments } from "./comments";

const Comment: React.FC<IComments.IComment> = ({
  author,
  avatar,
  body,
  meta,
  badge,
  badgeColorScheme = "green",
  hasAdmin = false,
  comments,
}) => {
  const authorStyle = {
    fontSize: "sm",
    lineHeight: 1,
    fontWeight: 700,
  };
  const metaStyle = {
    fontSize: "sm",
    lineHeight: 1,
    fontWeight: 600,
    opacity: 0.75,
    color: useColorModeValue("gray.500", "gray.400"),
  };
  const replyStyle = {
    mt: 3,
    pl: 4,
    borderLeftWidth: "2px",
  };
  return (
    <Box>
      <Stack mb={2} direction="row" spacing={2} alignItems="center">
        {/*
         * TODO: add srcSet to Avatar
         * srcSet={post.avatar?.srcSet}
         * issue: https://github.com/chakra-ui/chakra-ui/issues/5256
         */}
        <Avatar size="sm" src={avatar.src} name={author} />
        <Stack align="center" direction="row" spacing={2}>
          <Text {...authorStyle}>{author}</Text>
          <Text {...metaStyle}>{meta}</Text>
          {hasAdmin ? <Tag size="sm">Author</Tag> : null}
        </Stack>
        {badge ? <Badge colorScheme={badgeColorScheme}>{badge}</Badge> : null}
      </Stack>
      <Text mb={2}>{body}</Text>
      <CommentActions hasAdmin={hasAdmin} />
      {comments && (
        <Stack {...replyStyle} spacing={6}>
          {comments.map((comment, idx) => (
            <Comment key={idx} {...comment} />
          ))}
        </Stack>
      )}
    </Box>
  );
};

const CommentActions = ({ hasAdmin = false }: { hasAdmin?: boolean }) => {
  const [like, setLike] = useState(false);
  const buttonStyle = {
    variant: "ghost",
    size: "sm",
  };
  const DefaultActions = () => {
    return (
      <>
        <Button {...buttonStyle}>Reply</Button>
        <Button
          onClick={() => setLike(true)}
          leftIcon={<Icon color="red.400" as={like ? FaHeart : FaRegHeart} />}
          {...buttonStyle}
        >
          {like ? "Liked" : "Like"}
        </Button>
      </>
    );
  };
  const AdminActions = () => {
    return (
      <>
        <Button {...buttonStyle}>Delete</Button>
        <Button {...buttonStyle}>Edit</Button>
      </>
    );
  };

  return (
    <Stack direction="row" spacing={1} alignItems="center">
      {hasAdmin ? <AdminActions /> : null}
      <DefaultActions />
    </Stack>
  );
};

export default memo(Comment);
