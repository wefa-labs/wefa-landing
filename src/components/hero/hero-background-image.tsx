import { isValidElement } from "react";

import { Stack, Flex, Text, Heading, VStack } from "@chakra-ui/react";

import { IHero } from "./hero";

export const HeroBackgroundImage: React.FC<IHero.IMedia> = ({
  image,
  heading,
  body,
  buttons,
  textColor,
  ...rest
}) => {
  return (
    // TODO: Refactor -> srcSet background
    // NOTE: backgroundImage={image.src} can be low quality
    <Flex
      w={"full"}
      h={"100vh"}
      backgroundImage={image.src}
      backgroundSize={"cover"}
      backgroundPosition={"center center"}
      {...rest}
    >
      <VStack
        w="full"
        justify="center"
        px={[4, 4, 8]}
        bgGradient={"linear(to-r, blackAlpha.600, transparent)"}
      >
        <Stack color={textColor} maxW={"2xl"} align={"flex-start"} spacing={6}>
          {isValidElement(heading) ? heading : <Heading>{heading}</Heading>}
          {isValidElement(body) ? body : <Text>{body}</Text>}
          {buttons && <Stack direction={"row"}>{buttons}</Stack>}
        </Stack>
      </VStack>
    </Flex>
  );
};
