import { isValidElement } from "react";

import {
  Stack,
  Flex,
  Box,
  Heading,
  Text,
  IconButton,
  useColorModeValue,
} from "@chakra-ui/react";

import BlobOne from "@components/blobs/blob-1";
import PlayIcon from "@components/icons/playIcon";
import ImageLazyloadNoRatio from "@components/image-lazyload/without-aspect-ratio";

import { IHero } from "./hero";

export const HeroCTAMedia: React.FC<IHero.IMedia> = ({
  heading,
  body,
  buttons,
  image,
  altText,
  colorScheme = "red",
}) => {
  return (
    <Stack
      align={"center"}
      justify={"center"}
      spacing={{ base: 8, md: 10 }}
      py={{ base: 20, md: 28 }}
      direction={{ base: "column-reverse", md: "row" }}
    >
      <Stack flex={1} spacing={{ base: 5, md: 10 }}>
        {isValidElement(heading) ? (
          heading
        ) : (
          <Heading
            lineHeight={1.1}
            fontWeight={600}
            fontSize={{ base: "3xl", sm: "4xl", lg: "6xl" }}
          >
            {heading}
          </Heading>
        )}
        {isValidElement(body) ? body : <Text color={"gray.500"}>{body}</Text>}
        {buttons && (
          <Stack
            spacing={{ base: 4, sm: 6 }}
            direction={{ base: "column", sm: "row" }}
          >
            {buttons}
          </Stack>
        )}
      </Stack>
      {isValidElement(image) ? (
        image
      ) : (
        <Flex
          flex={1}
          justify={"center"}
          align={"center"}
          position={"relative"}
          w={"full"}
        >
          <BlobOne
            w={"150%"}
            h={"150%"}
            position={"absolute"}
            top={"-20%"}
            left={0}
            zIndex={-1}
            color={useColorModeValue(`${colorScheme}.50`, `${colorScheme}.800`)}
          />
          <Box
            position={"relative"}
            height={"300px"}
            rounded={"2xl"}
            boxShadow={"2xl"}
            width={"full"}
            overflow={"hidden"}
          >
            <IconButton
              aria-label={"Play Button"}
              variant={"unstyled"}
              _hover={{ bg: "transparent" }}
              icon={<PlayIcon w={12} h={12} />}
              size={"lg"}
              color={"white"}
              position="absolute"
              zIndex={2}
              left={"calc(50% - 24px)"}
              top={"calc(50% - 24px)"}
              // transform={"translateX(-50%) translateY(-50%)"}
              _active={{
                transform: "scale(1.2)",
                transformOrigin: "center",
              }}
            />
            <ImageLazyloadNoRatio
              alt={altText}
              objectFit="cover"
              w="full"
              h="full"
              image={image}
            />
          </Box>
        </Flex>
      )}
    </Stack>
  );
};
