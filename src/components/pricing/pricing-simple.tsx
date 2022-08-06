import { FaCheckCircle } from "@react-icons";

import { ReactNode } from "react";

import {
  Box,
  Stack,
  HStack,
  Heading,
  Text,
  VStack,
  useColorModeValue,
  List,
  ListItem,
  ListIcon,
  Button,
} from "@chakra-ui/react";

// import { ThemeProvider } from "@definitions/context";

interface IPriceBoxProps {
  id: string | number;
  colorScheme?: string;
  title: string;
  currency?: string;
  price: number | string;
  period: string;
  buttonText: string;
  onClickAct?: React.MouseEventHandler<HTMLButtonElement>;
  recommended?: boolean;
  recommendedText?: string;
  features: IFeatures[];
}

interface IFeatures {
  text: string;
}

// Pricing Button Dummy Action
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const pricingButtonAct = (event: React.MouseEvent<HTMLButtonElement>) => {
  // console.log("Event", event.target);
  /* Do the operation here. */
};

export const examplePlansData: IPriceBoxProps[] = [
  {
    id: 1,
    title: "Freelancer",
    // currency: "€",
    price: 16,
    period: "mo",
    buttonText: "Get started",
    onClickAct: pricingButtonAct,
    features: [
      { text: "Upload files up to 5GB" },
      { text: "Unlimited storage" },
      { text: "Access to 1 additional enterprise app integration" },
      { text: "Data loss protection" },
    ],
  },
  {
    id: 2,
    title: "Business",
    recommended: true,
    // currency: "€",
    price: 32,
    period: "mo",
    buttonText: "Buy now",
    onClickAct: pricingButtonAct,
    features: [
      { text: "Upload files up to 15GB" },
      { text: "Unlimited storage" },
      { text: "Access to 10 additional enterprise app integration" },
      { text: "Data loss protection" },
      { text: "15TB Lorem, ipsum dolor." },
    ],
  },
  {
    id: 3,
    title: "Enterprise",
    // currency: "€",
    price: 64,
    period: "mo",
    buttonText: "Get started",
    onClickAct: pricingButtonAct,
    features: [
      { text: "Upload files up to 25GB" },
      { text: "Unlimited storage" },
      { text: "Access to 50 additional enterprise app integration" },
      { text: "Data loss protection" },
    ],
  },
];

function PriceWrapper({ children }: { children: ReactNode }) {
  return (
    <Box
      mb={4}
      shadow="base"
      borderWidth="1px"
      // alignSelf={{ base: "center", lg: "flex-start" }}
      alignSelf={{ base: "center", lg: "center" }}
      flex="1"
      borderColor={useColorModeValue("gray.200", "gray.600")}
      borderRadius={"xl"}
    >
      {children}
    </Box>
  );
}
const PriceBox: React.FC<IPriceBoxProps> = (
  props: IPriceBoxProps,
): JSX.Element => {
  const {
    title,
    price,
    period,
    currency = "$",
    features,
    recommended,
    recommendedText = "Most Popular",
    buttonText,
    onClickAct,
    colorScheme = "green",
  } = props;
  return (
    <PriceWrapper>
      <Box textAlign="center" position="relative">
        {recommended && (
          <Box
            position="absolute"
            top="-16px"
            left="50%"
            style={{ transform: "translate(-50%)" }}
          >
            <Text
              textTransform="uppercase"
              bg={useColorModeValue(`${colorScheme}.300`, `${colorScheme}.700`)}
              px={{ base: 4, lg: 6 }}
              py={{ base: 2 }}
              color={useColorModeValue(`${colorScheme}.900`, "gray.300")}
              fontSize="11"
              fontWeight="700"
              rounded="full"
            >
              {recommendedText}
            </Text>
          </Box>
        )}
        <Box py={4} px={12}>
          {title && (
            <Text
              pt={recommended ? 4 : 0}
              textTransform="uppercase"
              fontWeight="600"
            >
              {title}
            </Text>
          )}
          <HStack spacing="0" justifyContent="center">
            {currency && (
              <Text as="span" fontSize="5xl" fontWeight="600">
                {currency}
              </Text>
            )}
            {price && (
              <Text as="span" fontSize="5xl" fontWeight="700">
                {price}
              </Text>
            )}
            {period && (
              <Text as="span" pt={3} fontWeight="600" color="gray.500">
                /{period}
              </Text>
            )}
          </HStack>
        </Box>
        <VStack
          bg={useColorModeValue("gray.50", "gray.700")}
          py={4}
          borderBottomRadius={"xl"}
        >
          <List
            data-testid="PricingSimple--features"
            spacing={3}
            textAlign="start"
            px={12}
          >
            {features.map((feature, idx) => (
              <ListItem key={`feature-${idx}`} pl="1.5em" pos="relative">
                <ListIcon
                  as={FaCheckCircle}
                  color={useColorModeValue(
                    `${colorScheme}.300`,
                    `${colorScheme}.600`,
                  )}
                  pos="absolute"
                  left={0}
                  top=".25em"
                />
                <Text
                  as="span"
                  color={useColorModeValue("gray.900", "gray.300")}
                >
                  {feature.text}
                </Text>
              </ListItem>
            ))}
          </List>
          <Box w="80%" pt={7}>
            <Button
              w="full"
              colorScheme={colorScheme}
              variant={recommended ? undefined : "ghost"}
              onClick={onClickAct}
            >
              <Text fontSize={12} fontWeight={600} textTransform="uppercase">
                {buttonText}
              </Text>
            </Button>
          </Box>
        </VStack>
      </Box>
    </PriceWrapper>
  );
};

interface IPricingProps {
  title?: string;
  description?: string;
  colorScheme?: string;
  plans: IPriceBoxProps[];
}

export const PricingSimple: React.FC<IPricingProps> = (
  props: IPricingProps,
): JSX.Element => {
  const { title, colorScheme = "green", description, plans = [] } = props;
  return (
    <Box py={12}>
      <VStack spacing={2} textAlign="center">
        {title && (
          <Heading data-testid="PricingSimple--title" as="h1" fontSize="4xl">
            {title}
          </Heading>
        )}
        {description && (
          <Text
            data-testid="PricingSimple--description"
            fontSize="lg"
            color={"gray.500"}
          >
            {description}
          </Text>
        )}
      </VStack>
      <Stack
        data-testid="PricingSimple--stack"
        direction={{ base: "column", md: "row" }}
        align="center"
        textAlign="center"
        justify="center"
        spacing={{ base: 4, md: 5, lg: 10 }}
        py={10}
      >
        {plans.map((plan, idx) => (
          <PriceBox
            key={`plan-${idx}-${plan.id}`}
            colorScheme={colorScheme}
            {...plan}
          />
        ))}
      </Stack>
    </Box>
  );
};
