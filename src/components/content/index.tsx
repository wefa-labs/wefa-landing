import { memo } from "react";

import { Box, ChakraProps, ThemingProps } from "@chakra-ui/react";

import { IContent } from "./content";
import Deserialize from "./deserialize";

const Content: React.FC<
  { items: IContent.IProps[] } & ChakraProps & ThemingProps
> = ({ items, mb = [5, 10, 20, 20], ...rest }) => {
  return (
    <>
      {items.map((item, idx) => (
        <Box key={idx} mb={mb} {...rest}>
          {item.body.map((body, i) => (
            <Deserialize key={i} contentOrder={Object.keys(body)} {...body} />
          ))}
        </Box>
      ))}
    </>
  );
};

Content.displayName = "Content";
export default memo(Content);
