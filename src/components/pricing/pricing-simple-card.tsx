import { CheckIcon, CloseIcon } from "@chakra-ui/icons";
import {
  Box,
  Center,
  Text,
  Stack,
  List,
  ListItem,
  ListIcon,
  Button,
  useColorModeValue,
} from "@chakra-ui/react";

import { __DEV__ } from "@definitions/utils";

import { IPricing } from "./pricing";

type TFeatureItem = {
  item: string;
  color: string;
};

type TFeatureItemObject = {
  item: IPricing.TFeatures;
  color: string;
};

const FeatureItem: React.FC<TFeatureItem> = ({ item, color }) => {
  return (
    <ListItem>
      <ListIcon as={CheckIcon} color={`${color}.400`} />
      {item}
    </ListItem>
  );
};

if (__DEV__) {
  FeatureItem.displayName = "FeatureItem";
}

const FeatureItemObject: React.FC<TFeatureItemObject> = ({ item, color }) => {
  const { active = true, feature } = item;
  return (
    <ListItem display="flex" alignItems="center">
      <ListIcon
        fontSize={active ? "md" : "sm"}
        as={active ? CheckIcon : CloseIcon}
        color={active ? `${color}.400` : "red.400"}
      />
      <Text
        color={active ? undefined : useColorModeValue("gray.400", "gray.600")}
      >
        {feature}
      </Text>
    </ListItem>
  );
};

if (__DEV__) {
  FeatureItemObject.displayName = "FeatureItemObject";
}

export const PricingSimpleCard: React.FC<IPricing.IProps> = ({
  type,
  title,
  description,
  price,
  annuallyPrice,
  annuallyText,
  annuallyPeriodText = "year",
  isAnnually = false,
  currency = "$",
  period = "mo",
  popular = false,
  popularText = "Most Popular",
  popularColorScheme = "green",
  colorScheme = "gray",
  features = [],
  featuresList = [],
  rounded = "md",
  onClick,
  actionText,
  button,
  ...rest
}): JSX.Element => {
  return (
    <Box
      className="pricing-simple--card"
      maxW={"320px"}
      w={"full"}
      bg={useColorModeValue("white", "gray.700")}
      boxShadow={"md"}
      rounded={rounded}
      height="fit-content"
      // overflow="hidden"
      pos="relative"
      {...rest}
    >
      {popular && (
        <Center>
          <Text
            pos="absolute"
            fontSize={"xs"}
            fontWeight={500}
            // roundedTop={"md"}
            rounded={"md"}
            display="inline"
            mx="auto"
            p={2}
            px={3}
            bg={useColorModeValue(
              `${popularColorScheme}.100`,
              `${popularColorScheme}.900`,
            )}
            color={`${popularColorScheme}.500`}
            textAlign="center"
            textTransform="uppercase"
          >
            {popularText}
          </Text>
        </Center>
      )}
      <Stack
        textAlign={"center"}
        p={6}
        color={useColorModeValue("gray.800", "white")}
        align={"center"}
      >
        {title && (
          <Text
            fontSize={"sm"}
            fontWeight={500}
            bg={useColorModeValue(`${colorScheme}.50`, `${colorScheme}.900`)}
            p={2}
            px={3}
            minW={24}
            color={`${colorScheme}.500`}
            rounded={"full"}
            textTransform="capitalize"
          >
            {title}
          </Text>
        )}
        {description && (
          <Text
            color={useColorModeValue("gray.500", "gray.300")}
            fontSize="sm"
            // textTransform="capitalize"
          >
            {description}
          </Text>
        )}
        {!isAnnually && price && (
          <Stack direction={"row"} align={"center"} justify={"center"}>
            {currency && <Text fontSize={"3xl"}>{currency}</Text>}
            {price && (
              <Text fontSize={"6xl"} fontWeight={800}>
                {Number.isInteger(price) ? price : price.toFixed(2)}
              </Text>
            )}
            {period && (
              <Text>
                <Text as="span" color={"gray.500"}>
                  /
                </Text>
                <Text as="span" color={"gray.500"}>
                  {period}
                </Text>
              </Text>
            )}
          </Stack>
        )}
        {isAnnually && annuallyPrice && (
          <Stack direction={"row"} align={"center"} justify={"center"}>
            {currency && <Text fontSize={"3xl"}>{currency}</Text>}
            {annuallyPrice && (
              <Text fontSize={"6xl"} fontWeight={800}>
                {Number.isInteger(annuallyPrice)
                  ? annuallyPrice
                  : annuallyPrice.toFixed(2)}
              </Text>
            )}
            {annuallyPeriodText && (
              <Text>
                <Text as="span" color={"gray.500"}>
                  /
                </Text>
                <Text as="span" color={"gray.500"}>
                  {annuallyPeriodText}
                </Text>
              </Text>
            )}
          </Stack>
        )}
        {!price && (
          <Stack direction={"row"} align={"center"} justify={"center"}>
            <Text fontSize={"6xl"} fontWeight={800}>
              Free
            </Text>
          </Stack>
        )}
        {!isAnnually && annuallyText && annuallyPrice && (
          <Text color={useColorModeValue("gray.500", "gray.300")} fontSize="sm">
            <Text as="span">{annuallyText}</Text>
            <Text mx={1} textDecoration="line-through" as="span">
              {currency && <Text as="span">{currency}</Text>}
              {price * 12}
            </Text>
            <Text
              color={`${colorScheme}.500`}
              mx={1}
              fontWeight="bold"
              as="span"
            >
              {currency && <Text as="span">{currency}</Text>}
              {annuallyPrice}
            </Text>
          </Text>
        )}
      </Stack>

      <Box
        roundedBottom={rounded}
        bg={useColorModeValue("gray.50", "gray.900")}
        px={6}
        py={10}
      >
        <List spacing={3}>
          {features &&
            features.map((item, idx) => (
              <FeatureItem key={idx} color={colorScheme} item={item} />
            ))}
          {featuresList &&
            featuresList.map((item, idx) => (
              <FeatureItemObject key={idx} item={item} color={colorScheme} />
            ))}
        </List>

        {!button && actionText && onClick && (
          <Button
            mt={10}
            w="full"
            fontSize="xs"
            rounded="xl"
            color="white"
            data-type={type}
            fontWeight={700}
            onClick={onClick}
            textTransform="uppercase"
            bg={useColorModeValue(`${colorScheme}.400`, `${colorScheme}.800`)}
            _hover={{
              bg: useColorModeValue(`${colorScheme}.500`, `${colorScheme}.700`),
            }}
            _focus={{
              bg: useColorModeValue(`${colorScheme}.500`, `${colorScheme}.700`),
            }}
            _active={{
              bg: useColorModeValue(`${colorScheme}.300`, `${colorScheme}.600`),
            }}
          >
            {actionText}
          </Button>
        )}
        {button}
      </Box>
    </Box>
  );
};

if (__DEV__) {
  PricingSimpleCard.displayName = "PricingSimpleCard";
}
