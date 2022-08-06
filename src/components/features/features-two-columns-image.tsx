import {
  SimpleGrid,
  Flex,
  Heading,
  Text,
  Stack,
  StackDivider,
  useColorModeValue,
} from "@chakra-ui/react";

import ImageLazyload from "@components/image-lazyload";

import { IFeatures } from "./features";

const FeaturesItem: React.FC<IFeatures.IFeatureItemProps> = ({
  text,
  icon,
  iconBg,
}): JSX.Element => {
  return (
    <Stack direction={"row"} align={"center"}>
      <Flex
        w={8}
        h={8}
        align={"center"}
        justify={"center"}
        rounded={"full"}
        bg={iconBg}
      >
        {icon}
      </Flex>
      <Text fontWeight={600}>{text}</Text>
    </Stack>
  );
};

export const FeaturesTwoColumnsImage: React.FC<IFeatures.IProps> = ({
  title,
  body,
  image,
  tag,
  features,
  ...rest
}): JSX.Element => {
  return (
    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10} {...rest}>
      <Stack spacing={4}>
        {tag}
        {title && <Heading>{title}</Heading>}
        {body && (
          <Text color={"gray.500"} fontSize={"lg"}>
            {body}
          </Text>
        )}
        <Stack
          spacing={4}
          divider={
            <StackDivider
              borderColor={useColorModeValue("gray.100", "gray.700")}
            />
          }
        >
          {features.map((f, idx) => (
            <FeaturesItem
              key={idx}
              text={f.text}
              icon={f.icon}
              iconBg={f.iconBg}
            />
          ))}
        </Stack>
      </Stack>
      <ImageLazyload
        rounded={"md"}
        alt={title}
        image={image}
        // objectFit={"cover"}
      />
    </SimpleGrid>
  );
};
