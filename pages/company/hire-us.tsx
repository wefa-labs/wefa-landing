import { yupResolver } from "@hookform/resolvers/yup";
import {
  AiOutlineFileDone,
  AiOutlineSolution,
  FiDollarSign,
} from "@react-icons";

import React, { useState, useContext, memo } from "react";

import { useForm } from "react-hook-form";
import { IconType } from "react-icons";
import * as yup from "yup";

import { NextSeo } from "next-seo";

import { StarIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  chakra,
  Circle,
  Container,
  Flex,
  FormControl,
  FormHelperText,
  FormLabel,
  Heading,
  HStack,
  Icon,
  Input,
  Select,
  Stack,
  Text,
  Textarea,
  useBreakpointValue,
  useColorModeValue,
  useToken,
  VStack,
  ChakraProps,
  ThemingProps,
  FormErrorMessage,
} from "@chakra-ui/react";

import { ThemeColorContext } from "@definitions/context/theme";
import { __DEV__ } from "@definitions/utils";
import { ColorMatch } from "@definitions/utils/color";

import OliveBranches from "@components/icons/olive-branches";

import Team3 from "@assets/images/team-3.jpg?resize&img";

const HireUsPage: React.FC = () => {
  const theme = useContext(ThemeColorContext);
  const color = theme.colorScheme; // global default primary theme color

  const [color1, color2] = ColorMatch(color);

  const accent100 = useColorModeValue(`${color}.100`, `${color}.800`);
  const accent200 = useColorModeValue(`${color}.200`, `${color}.900`);

  return (
    <>
      <NextSeo title="Hire us" description="Mercury Hire Us Example Page" />
      <chakra.main
        sx={{
          "*::selection": {
            color: useColorModeValue(`${color}.600`, `${color}.400`),
            background: useColorModeValue(`${color}.200`, `${color}.700`),
          },
          mark: {
            color: useColorModeValue(`${color}.600`, `${color}.400`),
            background: useColorModeValue(`${color}.100`, `${color}.800`),
          },
        }}
      >
        <VStack align="stretch" mb={[10, 20, 32]} spacing={[10, 20, 32]}>
          {/* Hero */}
          <HeroBlock
            title="Hire Our Team"
            body="Regardless of size or scope, we are ready to work on design and development projects as part of larger teams or as a sole contractor on a project."
            backgroundElement={<SVGBlur colorScheme={color} />}
            image={
              <Flex
                top="0"
                right="0"
                justify="center"
                pos={["initial", "initial", "initial", "absolute"]}
                display={["none", "none", "none", "unset"]}
                zIndex={-1}
              >
                {/* Blob & Image */}
                <chakra.svg
                  width="919"
                  height="715"
                  viewBox="0 0 919 715"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs>
                    <clipPath id="clipx">
                      <path
                        d="M179 0H919V250C919 498.528 717.528 700 469 700H269.872C141.427 700 46.2797 580.651 74.9006 455.435L179 0Z"
                        fill="#000"
                      />
                    </clipPath>
                  </defs>

                  <path
                    d="M164.126 0H919V255.025C919 508.549 713.478 714.07 459.955 714.07H256.825C125.798 714.07 28.738 592.322 57.9341 464.589L164.126 0Z"
                    fill={useToken("colors", accent100)}
                  />

                  <path
                    d="M171.6 0H919V252.5C919 503.513 715.513 707 464.5 707H263.381C133.651 707 37.5525 586.458 66.4596 459.989L171.6 0Z"
                    fill={useToken("colors", accent200)}
                  />

                  <image
                    height="100%"
                    width="100%"
                    xlinkHref={
                      useBreakpointValue({
                        base: Team3.images[1].path,
                        sm: Team3.images[2].path,
                        md: Team3.images[3].path,
                        xl: Team3.images[4].path,
                      }) ?? Team3.src
                    }
                    preserveAspectRatio="xMinYMin slice"
                    style={{
                      objectFit: "cover",
                      clipPath: "url(#clipx)",
                    }}
                  />
                </chakra.svg>
              </Flex>
            }
            button={
              <Button
                size="lg"
                shadow="md"
                transition="all 300ms ease"
                color="whiteAlpha.900"
                bgGradient={`linear(to-l, ${color1}.400, ${color}.300, ${color2}.500)`}
                _hover={{
                  bgGradient: `linear(to-r, ${color1}.500, ${color2}.600)`,
                }}
                _active={{
                  bgGradient: `linear(to-r, ${color1}.600, ${color2}.700)`,
                }}
              >
                Partner with us
              </Button>
            }
          />

          {/* Features */}
          <FeaturesBlock
            title="Safe and secure hiring, for any size of project"
            items={[
              {
                icon: AiOutlineSolution,
                title: "Tell us what you need",
                body: "We’ll help you find and hire talent the way that works best for you.",
                colorScheme: "red",
              },
              {
                icon: AiOutlineFileDone,
                title: "Approve preliminary designs",
                body: "Choose what you like from what we have prepared for you",
                colorScheme: "orange",
              },
              {
                icon: FiDollarSign,
                title: "Hassle-free payment",
                body: "Payment protection helps you focus on work that matters most.",
                colorScheme: "green",
              },
            ]}
          />

          {/* Awards & Rating */}
          <AwardsRatingBlock
            items={[
              {
                title: (
                  <HStack height="14" justify="center" align="center">
                    <StarIcon fontSize="md" color="orange.400" />
                    <StarIcon fontSize="xl" color="orange.400" />
                    <StarIcon fontSize="3xl" color="orange.400" />
                    <StarIcon fontSize="xl" color="orange.400" />
                    <StarIcon fontSize="md" color="orange.400" />
                  </HStack>
                ),
                body: (
                  <Text
                    textAlign="center"
                    fontSize={["xl", "xl", "lg"]}
                    maxWidth={300}
                  >
                    Customers average <b>4.9/5</b> out of 134,576 reviews in the
                    United States
                  </Text>
                ),
              },
              {
                title: (
                  <Flex justify="center" align="center">
                    <OliveBranches height="14" color="current" />
                    <Heading height="14" fontSize="5xl" mx={4} fontWeight={800}>
                      2021
                    </Heading>
                    <OliveBranches flip height="14" color="current" />
                  </Flex>
                ),
                body: (
                  <Text fontSize={["xl", "xl", "lg"]} maxWidth={340}>
                    Since the day we were founded, we have developed
                    award-winning projects
                  </Text>
                ),
              },
            ]}
          />

          {/* Forum */}
          <FormBlock title="Ready to hire us?" colorScheme={color} />
        </VStack>
      </chakra.main>
    </>
  );
};

/* -------------------------------------------------------------------------- */
/*                                 PAGE BLOCKS                                */
/*    All page content can be edited via props. You do not need to make any   */
/*    changes in this part if you are not going to make design arrangements   */
/* -------------------------------------------------------------------------- */

const HeroBlock: React.FC<
  {
    title: string;
    body: string;
    button: React.ReactNode;
    backgroundElement?: React.ReactElement;
    image: React.ReactNode;
  } & ChakraProps &
    ThemingProps
> = memo(({ title, body, button, image, backgroundElement, ...rest }) => {
  return (
    <Box
      width="full"
      minHeight={["auto", "auto", "auto", "600px"]}
      height={["auto", "auto", "auto"]}
      pos="relative"
      {...rest}
    >
      {backgroundElement}

      <Flex
        pos="relative"
        h={["auto", "auto", "auto", "100vh"]}
        minHeight={["auto", "auto", "auto", "600px"]}
        alignItems="center"
      >
        <Container maxWidth="container.xl">
          <Flex mt={[20, 28, 28, 0]} width={["full", "full", "full", "40vw"]}>
            <VStack
              spacing={4}
              align={["stretch", "center", "center", "start"]}
            >
              {title && (
                <Heading lineHeight="1" fontSize={["36", "48", "72"]}>
                  {title}
                </Heading>
              )}
              {body && (
                <Text
                  textAlign={["center", "center", "center", "initial"]}
                  maxWidth={["full", "full", "80%"]}
                  fontSize="xl"
                >
                  {body}
                </Text>
              )}
              {button}
            </VStack>
          </Flex>

          {image}
        </Container>
      </Flex>
    </Box>
  );
});

if (__DEV__) {
  HeroBlock.displayName = "HeroBlock";
}

const FeaturesBlock: React.FC<{
  title: string;
  items: { icon: IconType; title: string; body: string; colorScheme: string }[];
}> = memo(({ title, items = [] }) => {
  return (
    <Box my={0}>
      <Container maxWidth="container.xl">
        {title && (
          <Heading textAlign="center" mb={10}>
            {title}
          </Heading>
        )}
        <Stack spacing={[6, 6, 4]} direction={["column", "column", "row"]}>
          {items.map((item) => (
            <Box key={item.title} flex="1">
              <Flex alignItems={["center", "center", "baseline"]}>
                <Circle
                  mr="5"
                  bg={useColorModeValue(
                    `${item.colorScheme}.100`,
                    `${item.colorScheme}.700`,
                  )}
                  color={useColorModeValue(
                    `${item.colorScheme}.700`,
                    `${item.colorScheme}.100`,
                  )}
                  size="64px"
                >
                  {item.icon && <Icon fontSize="2xl" as={item.icon} />}
                </Circle>
                <Box>
                  {item.title && <Text fontWeight="bold">{item.title}</Text>}
                  {item.body && <Text>{item.body}</Text>}
                </Box>
              </Flex>
            </Box>
          ))}
        </Stack>
      </Container>
    </Box>
  );
});

if (__DEV__) {
  FeaturesBlock.displayName = "FeaturesBlock";
}

const AwardsRatingBlock: React.FC<{
  items: { title: React.ReactNode; body: React.ReactNode }[];
}> = memo(({ items = [] }) => {
  return (
    <Box pos="relative" my={0}>
      <Container maxWidth="container.lg">
        <Box
          p={10}
          shadow="sm"
          rounded="lg"
          pos="relative"
          zIndex={1}
          bg={useColorModeValue("whiteAlpha.900", "blackAlpha.500")}
        >
          <Stack spacing={10} direction={["column", "column", "row"]}>
            {items.map((item, idx) => (
              <VStack
                key={`AwardsRatingBlock-${idx}`}
                textAlign="center"
                flex="1"
                spacing={2}
              >
                {item.title}
                {item.body}
              </VStack>
            ))}
          </Stack>
        </Box>
      </Container>
      <Icon
        width="full"
        zIndex={-1}
        height="full"
        viewBox="0 0 512 512"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ filter: "blur(70px)" }}
        preserveAspectRatio="none"
        pos="absolute"
        top="50%"
        left="50%"
        transform="translateY(-50%) translateX(-50%)"
      >
        <circle cx="71" cy="61" r="111" fill="#F56565" />
        <circle cx="244" cy="106" r="139" fill="#ED64A6" />
        <circle cy="291" r="139" fill="#ED64A6" />
        <circle cx="80.5" cy="189.5" r="101.5" fill="#ED8936" />
        <circle cx="196.5" cy="317.5" r="101.5" fill="#ECC94B" />
        <circle cx="70.5" cy="458.5" r="101.5" fill="#4299E1" />
        <circle cx="426.5" cy="101.5" r="101.5" fill="#48BB78" />
      </Icon>
    </Box>
  );
});

if (__DEV__) {
  AwardsRatingBlock.displayName = "AwardsRatingBlock";
}
/* ---------------------------------- Form ---------------------------------- */

interface FormValues {
  firstName: string;
  lastName: string;
  email: string;
  website?: string;
  budget: string;
  details: string;
}

const schema = yup
  .object({
    firstName: yup
      .string()
      .min(3, "First name must be at least 3 characters long")
      .required("First name is a required field")
      .matches(/^[a-zA-Z]+$/, "First name must contain only letters"),
    lastName: yup
      .string()
      .min(3, "Last name must be at least 3 characters long")
      .required("Last name is a required field")
      .matches(/^[a-zA-Z]+$/, "Last name must contain only letters"),
    email: yup
      .string()
      .email("Please enter a valid email")
      .required("Email is a required field"),
    website: yup.string().url("Please enter a valid website").nullable(),
    budget: yup.string().required("Project budget is a required field"),
    details: yup.string().required("Project details is a required field"),
  })
  .required();

const FormBlock: React.FC<{ title: string } & ChakraProps & ThemingProps> =
  memo(({ title, colorScheme = "gray" }) => {
    const [
      formData, // eslint-disable-line @typescript-eslint/no-unused-vars
      setFormData,
    ] = useState<FormValues>();

    const [color1, color2] = ColorMatch(colorScheme);

    const {
      handleSubmit, // handels the form submit event
      register, // ties the inputs to react-form
      formState: { errors, isSubmitting }, // gets errors and "loading" state
    } = useForm<FormValues>({
      reValidateMode: "onBlur",
      resolver: yupResolver(schema),
    });

    const onSubmit = (data: FormValues) => {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(data);
          setFormData(data);
          alert(JSON.stringify(data, null, 2));
        }, 4000);
      });
    };

    const inputBG = useColorModeValue("whiteAlpha.800", "whiteAlpha.300");
    const inputColor = useColorModeValue("blackAlpha.800", "whiteAlpha.800");

    return (
      <Box>
        <Container maxWidth="container.sm">
          {title && (
            <Heading textAlign="center" mb={10}>
              {title}
            </Heading>
          )}
          <form onSubmit={handleSubmit(onSubmit)} noValidate>
            <VStack alignItems="start" spacing={4}>
              <HStack
                align={["strech", "strech", "center"]}
                direction={["column", "column", "row"]}
                w="full"
                spacing={4}
              >
                <FormControl isRequired isInvalid={!!errors?.firstName}>
                  <FormLabel>First Name</FormLabel>
                  <Input
                    bg={inputBG}
                    color={inputColor}
                    placeholder="John"
                    focusBorderColor={`${colorScheme}.400`}
                    {...register("firstName")}
                  />
                  <FormErrorMessage>
                    {errors?.firstName?.message}
                  </FormErrorMessage>
                </FormControl>

                <FormControl isRequired isInvalid={!!errors?.firstName}>
                  <FormLabel>Last Name</FormLabel>
                  <Input
                    bg={inputBG}
                    placeholder="Doe"
                    color={inputColor}
                    focusBorderColor={`${colorScheme}.400`}
                    {...register("lastName")}
                  />
                  <FormErrorMessage>
                    {errors?.lastName?.message}
                  </FormErrorMessage>
                </FormControl>
              </HStack>
              <HStack
                align={["strech", "strech", "start"]}
                direction={["column", "column", "row"]}
                w="full"
                spacing={4}
              >
                <FormControl isRequired isInvalid={!!errors?.email}>
                  <FormLabel>Email Address</FormLabel>
                  <Input
                    type="email"
                    bg={inputBG}
                    color={inputColor}
                    placeholder="john.doe@example.com"
                    focusBorderColor={`${colorScheme}.400`}
                    {...register("email")}
                  />
                  <FormHelperText>We'll never share your email.</FormHelperText>
                  <FormErrorMessage>{errors?.email?.message}</FormErrorMessage>
                </FormControl>

                <FormControl isInvalid={!!errors?.website}>
                  <FormLabel>Website</FormLabel>
                  <Input
                    bg={inputBG}
                    color={inputColor}
                    placeholder="https://example.com"
                    focusBorderColor={`${colorScheme}.400`}
                    {...register("website")}
                  />
                  <FormErrorMessage>
                    {errors?.website?.message}
                  </FormErrorMessage>
                </FormControl>
              </HStack>

              <FormControl isRequired isInvalid={!!errors?.budget}>
                <FormLabel>Project Budget</FormLabel>
                <Select
                  bg={inputBG}
                  color={inputColor}
                  focusBorderColor={`${colorScheme}.400`}
                  // placeholder="Your Project Budget"
                  {...register("budget")}
                >
                  <option value="">Choose your budget</option>
                  <option value="option1">$1,000 - $10,000</option>
                  <option value="option2">$10,000 - $20,000</option>
                  <option value="option3">$20,000 - $30,000</option>
                  <option value="option4">$30,000 - $40,000</option>
                  <option value="option5">More than $50,000</option>
                </Select>
                <FormErrorMessage>{errors?.budget?.message}</FormErrorMessage>
              </FormControl>

              <FormControl isRequired isInvalid={!!errors?.details}>
                <FormLabel>Project Details</FormLabel>
                <Textarea
                  bg={inputBG}
                  color={inputColor}
                  placeholder="Tell us about your project"
                  focusBorderColor={`${colorScheme}.400`}
                  {...register("details")}
                />
                <FormHelperText>
                  Briefly describe your project, we will contact you for
                  details.
                </FormHelperText>
                <FormErrorMessage>{errors?.details?.message}</FormErrorMessage>
              </FormControl>

              <Flex w="full" justify={["stretch", "center", "end"]}>
                <Button
                  w={["full", "full", "auto"]}
                  size="lg"
                  transition="all 300ms ease"
                  color="white"
                  bgGradient={`linear(to-r, ${color1}.300, ${color2}.300)`}
                  _hover={{
                    bgGradient: `linear(to-l, ${color1}.500, ${color2}.500)`,
                  }}
                  _active={{
                    bgGradient: `linear(to-l, ${color1}.700, ${color2}.700)`,
                  }}
                  type="submit"
                  isLoading={isSubmitting}
                >
                  Send Inquiry
                </Button>
              </Flex>
            </VStack>
          </form>
        </Container>
      </Box>
    );
  });

if (__DEV__) {
  FormBlock.displayName = "FormBlock";
}

const SVGBlur: React.FC<ChakraProps & ThemingProps> = memo(
  ({ colorScheme = "gray", ...rest }) => {
    const [color1, color2] = ColorMatch(colorScheme);

    return (
      <Icon
        top="0"
        left="0"
        zIndex={-1}
        fill="none"
        pos="absolute"
        viewBox="0 0 528 560"
        preserveAspectRatio="none"
        style={{ filter: "blur(70px)" }}
        height={["auto", "auto", "80vh"]}
        xmlns="http://www.w3.org/2000/svg"
        width={["full", "full", "50vw", "60vw"]}
        {...rest}
      >
        {/* Accent Color 1 */}
        <circle
          cx="71"
          cy="61"
          r="111"
          fill={useToken("colors", `${color1}.200`)}
        />
        <circle
          cx="244"
          cy="106"
          r="139"
          fill={useToken("colors", `${color1}.300`)}
        />
        <circle cy="291" r="139" fill={useToken("colors", `${color1}.400`)} />
        {/* Default color */}
        <circle
          cx="80.5"
          cy="189.5"
          r="101.5"
          fill={useToken("colors", `${colorScheme}.300`)}
        />
        <circle
          cx="196.5"
          cy="317.5"
          r="101.5"
          fill={useToken("colors", `${colorScheme}.400`)}
        />
        {/* Accent Color 2 */}
        <circle
          cx="70.5"
          cy="458.5"
          r="101.5"
          fill={useToken("colors", `${color2}.200`)}
        />
        <circle
          cx="426.5"
          cy="-0.5"
          r="101.5"
          fill={useToken("colors", `${color2}.100`)}
        />
      </Icon>
    );
  },
);

if (__DEV__) {
  SVGBlur.displayName = "SVGBlur";
}

export default HireUsPage;
