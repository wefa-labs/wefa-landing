import { memo, isValidElement } from "react";

import {
  Box,
  Flex,
  Heading,
  Text,
  Stack,
  useColorModeValue,
  ChakraProps,
  UnorderedList,
  OrderedList,
  List,
  ListItem,
} from "@chakra-ui/react";

import ImageLazyload from "@components/image-lazyload";

import { IContent } from "./content";

const Deserialize: React.FC<IContent.IBody & { contentOrder?: string[] }> = ({
  content,
  heading,
  list,
  unorderedList,
  orderedList,
  image,
  images,
  display,
  flexDirection = "column",
  justifyContent,
  alignItems,
  color,
  wrapper,
  contentOrder,
  ...rest
}) => {
  const textMuted = useColorModeValue("gray.500", "gray.500");
  return (
    <Box
      display={display}
      flexDirection={flexDirection}
      justifyContent={justifyContent}
      alignItems={alignItems}
      {...wrapper}
    >
      {contentOrder &&
        contentOrder.map((o) => {
          switch (o) {
            case "heading":
              return (
                <DeserializeHeading color={color} heading={heading} {...rest} />
              );
              break;
            case "content":
              return (
                <DeserializeItem color={color} content={content} {...rest} />
              );
              break;
            case "list":
              return <DeserializeList color={color} list={list} {...rest} />;
              break;
            case "unorderedList":
              return (
                <DeserializeUnorderedList
                  color={color}
                  unorderedList={unorderedList}
                  {...rest}
                />
              );
              break;
            case "orderedList":
              return (
                <DeserializeOrderedList
                  color={color}
                  orderedList={orderedList}
                  {...rest}
                />
              );
              break;
            case "image":
              return (
                <DeserializeImage
                  color={color ? color : textMuted}
                  image={image}
                  {...rest}
                />
              );
              break;
            case "images":
              return (
                <Stack
                  spacing={[5, 5, 10]}
                  my={10}
                  direction={["column", "column", "row", "row"]}
                >
                  {images.map((image, idx) => (
                    <DeserializeImages
                      key={idx}
                      color={color ? color : textMuted}
                      {...image}
                    />
                  ))}
                </Stack>
              );
              break;
          }
        })}

      {!contentOrder && heading && (
        <DeserializeHeading color={color} heading={heading} {...rest} />
      )}
      {!contentOrder && content && (
        <DeserializeItem color={color} content={content} {...rest} />
      )}
      {!contentOrder && list && (
        <DeserializeList color={color} list={list} {...rest} />
      )}
      {!contentOrder && unorderedList && (
        <DeserializeUnorderedList
          color={color}
          unorderedList={unorderedList}
          {...rest}
        />
      )}
      {!contentOrder && orderedList && (
        <DeserializeOrderedList
          color={color}
          orderedList={orderedList}
          {...rest}
        />
      )}
      {!contentOrder && image && (
        <DeserializeImage
          color={color ? color : textMuted}
          image={image}
          {...rest}
        />
      )}
      {!contentOrder && images && (
        <Stack
          spacing={[5, 5, 10]}
          my={10}
          direction={["column", "column", "row", "row"]}
        >
          {images.map((image, idx) => (
            <DeserializeImages
              key={idx}
              color={color ? color : textMuted}
              {...image}
            />
          ))}
        </Stack>
      )}
    </Box>
  );
};

Deserialize.displayName = "Deserialize";
export default memo(Deserialize);

const DeserializeHeading: React.FC<Omit<IContent.IBody, "content">> = ({
  heading,
  mx,
  maxW = "container.md",
  maxWidth = "container.md",
  fontSize,
  textAlign,
  ...rest
}) => {
  return (
    <>
      {isValidElement(heading) ? (
        heading
      ) : (
        <Heading
          as="h3"
          fontSize={fontSize}
          maxW={maxW}
          maxWidth={maxWidth}
          textAlign={textAlign}
          mx={mx}
          px={4}
          mb={4}
          {...rest}
        >
          {heading}
        </Heading>
      )}
    </>
  );
};

const DeserializeItem: React.FC<IContent.IBody> = ({
  content,
  mx,
  px = 4,
  maxW = "container.md",
  maxWidth = "container.md",
  fontSize = "xl",
  textAlign,
  ...rest
}) => {
  return (
    <Flex
      fontSize={fontSize}
      maxW={maxW}
      maxWidth={maxWidth}
      textAlign={textAlign}
      mx={mx}
      px={px}
      mb={4}
      {...rest}
    >
      {isValidElement(content) ? (
        content
      ) : (
        <Text dangerouslySetInnerHTML={{ __html: content }} />
      )}
    </Flex>
  );
};

const DeserializeUnorderedList: React.FC<Omit<IContent.IBody, "content">> = ({
  unorderedList,
  mx,
  maxW = "container.md",
  maxWidth = "container.md",
  fontSize = "xl",
  textAlign,
  ...rest
}) => {
  return (
    <Flex
      id="this-is-DeserializeUnorderedList"
      fontSize={fontSize}
      maxW={maxW}
      maxWidth={maxWidth}
      textAlign={textAlign}
      mx={mx}
      mb={4}
      {...rest}
    >
      <UnorderedList spacing={2}>
        {unorderedList?.map((list, idx) => (
          <ListItem key={idx} dangerouslySetInnerHTML={{ __html: list }} />
        ))}
      </UnorderedList>
    </Flex>
  );
};

const DeserializeList: React.FC<Omit<IContent.IBody, "content">> = ({
  list,
  mx,
  maxW = "container.md",
  maxWidth = "container.md",
  fontSize = "xl",
  textAlign,
  ...rest
}) => {
  return (
    <Flex
      maxW={maxW}
      fontSize={fontSize}
      maxWidth={maxWidth}
      textAlign={textAlign}
      mx={mx}
      mb={4}
      {...rest}
    >
      <List spacing={2}>
        {list.map((list, idx) => (
          <ListItem key={idx} dangerouslySetInnerHTML={{ __html: list }} />
        ))}
      </List>
    </Flex>
  );
};
const DeserializeOrderedList: React.FC<Omit<IContent.IBody, "content">> = ({
  orderedList,
  mx,
  maxW = "container.md",
  maxWidth = "container.md",
  fontSize = "xl",
  textAlign,
  ...rest
}) => {
  return (
    <Flex
      id="this-is-OrderedList"
      fontSize={fontSize}
      maxW={maxW}
      maxWidth={maxWidth}
      textAlign={textAlign}
      mx={mx}
      mb={4}
      {...rest}
    >
      <OrderedList spacing={2} {...rest}>
        {orderedList.map((list, idx) => (
          <ListItem key={idx} dangerouslySetInnerHTML={{ __html: list }} />
        ))}
      </OrderedList>
    </Flex>
  );
};

const DeserializeImage: React.FC<Omit<IContent.IBody, "content">> = ({
  image,
  imageDescription,
  imageRatio,
  maxWidth = "container.xl",
  maxW = "container.xl",
  fontSize = "xl",
  textAlign = ["center", "center", "end"],
  rounded = "md",
  mx,
  color,
  alt,
  ...rest
}) => {
  return (
    <Flex
      id="this-is-DeserializeImage"
      fontSize={fontSize}
      maxW={maxW}
      maxWidth={maxWidth}
      textAlign={textAlign}
      mx={mx}
      mb={4}
      {...rest}
    >
      <Box flex="1">
        <ImageLazyload
          alt={alt}
          objectFit="cover"
          w="full"
          h="full"
          rounded={rounded}
          ratio={imageRatio}
          image={image}
        />
        {imageDescription && (
          <Text textAlign={textAlign} color={color} mt={2} fontSize="sm">
            {imageDescription}
          </Text>
        )}
      </Box>
    </Flex>
  );
};

const DeserializeImages: React.FC<ChakraProps & IContent.IImage> = ({
  image,
  imageDescription,
  color,
  textAlign = ["center", "center", "end"],
  rounded = "md",
  imageRatio,
  alt,
}) => {
  return (
    <Flex direction={"column"} w="full" flex="1">
      <Box w="full">
        <ImageLazyload
          alt={alt}
          objectFit="cover"
          w="full"
          h="full"
          rounded={rounded}
          ratio={imageRatio}
          image={image}
        />
      </Box>
      {imageDescription && (
        <Text textAlign={textAlign} color={color} mt={2} fontSize="sm">
          {imageDescription}
        </Text>
      )}
    </Flex>
  );
};
