import { CheckIcon } from "@chakra-ui/icons";
import {
  Box,
  SimpleGrid,
  Text,
  HStack,
  VStack,
  useColorModeValue,
} from "@chakra-ui/react";

import { IFeatures } from "./features";

export const FeaturesGrid: React.FC<IFeatures.IFeaturesGridProps> = ({
  icon = <CheckIcon color={"green.400"} />,
  columns = [1, 2, 4],
  bodyColor = useColorModeValue("blackAlpha.700", "whiteAlpha.700"),
  features,
  ...rest
}): JSX.Element => {
  return (
    <SimpleGrid columns={columns} spacing={10} {...rest}>
      {features.map((feature, idx) => (
        <HStack key={idx} align={"top"}>
          {feature?.icon ? (
            <Box px={2}>{feature.icon}</Box>
          ) : (
            <Box px={2}>{icon}</Box>
          )}
          <VStack align={"start"}>
            <Text fontWeight={600}>{feature.title}</Text>
            <Text color={bodyColor}>{feature.text}</Text>
          </VStack>
        </HStack>
      ))}
    </SimpleGrid>
  );
};
