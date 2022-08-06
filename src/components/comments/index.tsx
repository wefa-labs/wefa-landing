import { memo } from "react";

import { Box, Heading, Stack } from "@chakra-ui/react";

import Comment from "./comment";
import { IComments } from "./comments";

const Comments: React.FC<IComments.IProps> = ({
  title = "Comments",
  comments,
  ...rest
}) => {
  return (
    <Box {...rest}>
      <Heading mb={10} fontSize={["xl", "2xl", "2xl"]} as="h4">
        {title}
      </Heading>
      <Stack spacing={6}>
        {comments.map((comment, idx) => (
          <Comment key={idx} {...comment} />
        ))}
      </Stack>
    </Box>
  );
};

export default memo(Comments);
