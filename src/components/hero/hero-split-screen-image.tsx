import { isValidElement } from "react";

import { Flex, Heading, Image, Stack, Text } from "@chakra-ui/react";

import { IHero } from "./hero";

export const HeroSplitScreenImage: React.FC<IHero.IMedia> = ({
  heading,
  body,
  buttons,
  image,
  altText,
  ...rest
}) => {
  return (
    <Stack minH={"100vh"} direction={{ base: "column", md: "row" }} {...rest}>
      <Flex p={8} flex={1} align={"center"} justify={"center"}>
        <Stack spacing={6} w={"full"} maxW={"lg"}>
          {isValidElement(heading) ? (
            heading
          ) : (
            <Heading fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}>
              {heading}
            </Heading>
          )}
          {isValidElement(body) ? (
            body
          ) : (
            <Text fontSize={{ base: "md", lg: "lg" }} color={"gray.500"}>
              {body}
            </Text>
          )}
          {buttons && (
            <Stack direction={{ base: "column", md: "row" }} spacing={4}>
              {buttons}
            </Stack>
          )}
        </Stack>
      </Flex>
      <Flex flex={1}>
        {/* TODO: Refactor -> ImageLazyload */}
        {image && (
          <Image
            alt={altText}
            objectFit={"cover"}
            srcSet={image.srcSet}
            src={image.src}
          />
        )}
      </Flex>
    </Stack>
  );
};
