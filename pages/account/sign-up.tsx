import { yupResolver } from "@hookform/resolvers/yup";
import { MdKeyboardBackspace } from "@react-icons";

import React, { useState, useContext, memo } from "react";

import { useForm } from "react-hook-form";
import * as yup from "yup";

import { NextSeo } from "next-seo";
import NextLink from "next/link";
import { useRouter } from "next/router";

import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  chakra,
  ChakraProps,
  Checkbox,
  Container,
  DarkMode,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Icon,
  InputGroup,
  InputRightElement,
  Link,
  Stack,
  Text,
  ThemingProps,
  useColorModeValue,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";

import CreativeMarketLogo from "@definitions/brands/creativemarket";
import Logo3 from "@definitions/brands/logo-3";
import Logo4 from "@definitions/brands/logo-4";
import { ThemeColorContext } from "@definitions/context/theme";
import { __DEV__ } from "@definitions/utils";

import { LogoWithSiteName } from "@components/logo/logo-with-site-name";
import TestimonialQuoteCard from "@components/testimonials/testimonial-quote-card";

import Layout from "@layouts/default";

import Avatar1Image from "@assets/images/avatar/3m-square.jpg?size=96&img";

const SignUpPage = () => {
  const theme = useContext(ThemeColorContext);
  const color = theme.colorScheme; // global default primary theme color
  return (
    <>
      <NextSeo title="Sign Up" description="Mercury Sign Up Example Page" />
      <chakra.main>
        <Flex
          minH={"100vh"}
          // align={"center"}
          // justify={"center"}
          bg={useColorModeValue("gray.50", "gray.800")}
          direction={["column", "column", "row"]}
        >
          {/* Testimonial */}
          <Stack
            maxWidth={["full", "full", "500px"]}
            direction="column"
            py={10}
            px={[6, 6, 4, 10]}
            order={[1, 1, 0]}
            bg={useColorModeValue(`${color}.500`, `${color}.700`)}
            color="whiteAlpha.800"
            justify={"center"}
            spacing={[10]}
          >
            <TestimonialQuoteCard
              avatarImage={Avatar1Image}
              name="William Bates"
              occupation="Senior Web Developer, Acme Inc."
              occupationColor="whiteAlpha.600"
              body="We have no regrets! It's the perfect solution for our business. Mercury is worth much more than I paid. I can't say enough about Mercury"
            />

            <Box>
              <Wrap mt="auto" spacing={5} align="center" justify="center">
                <WrapItem>
                  <Logo3 color="whiteAlpha.800" />
                </WrapItem>
                <WrapItem>
                  <CreativeMarketLogo
                    color="whiteAlpha.800"
                    h="32px"
                    w="auto"
                  />
                </WrapItem>
                <WrapItem>
                  <Logo4 color="whiteAlpha.800" />
                </WrapItem>
              </Wrap>
              <Text align="center" mt={4}>
                Thousands of world’s leading companies trust us
              </Text>
            </Box>
          </Stack>

          {/* Sign up form */}
          <Flex
            minW={["full", "full", "500px"]}
            w="full"
            py={[10, 10, 8]}
            pt={[20, 28, 20]}
            align="center"
            order={[0, 0, 1]}
          >
            <Stack spacing={8} mx={"auto"} maxW={"lg"} w="full" px={6}>
              <Stack align="center">
                <Heading fontSize={["2xl", "3xl", "4xl"]} textAlign={"center"}>
                  Create a Mercury Account
                </Heading>
                <Text fontSize={"lg"} color={"gray.600"}>
                  Get Instant Access to Key Business Insights
                </Text>
              </Stack>
              <Box
                rounded={"lg"}
                bg={useColorModeValue("white", "gray.700")}
                boxShadow={"lg"}
                p={8}
              >
                <SignUpForm colorScheme={color} />
                <Stack pt={6}>
                  <Text align={"center"}>
                    Already a user?{" "}
                    <NextLink href="/account/sign-in" passHref>
                      <Link color={`${color}.400`} fontWeight="600">
                        Login
                      </Link>
                    </NextLink>
                  </Text>
                </Stack>
              </Box>
            </Stack>
          </Flex>
        </Flex>
      </chakra.main>
    </>
  );
};

/* -------------------------------------------------------------------------- */
/*                                 PAGE BLOCKS                                */
/*    All page content can be edited via props. You do not need to make any   */
/*    changes in this part if you are not going to make design arrangements   */
/* -------------------------------------------------------------------------- */

// Validation Schema
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
    password: yup
      .string()
      .required("No password provided.")
      .min(8, "Password is too short - should be 8 chars minimum.")
      .matches(/[a-zA-Z0-9]/, "Password can only contain Latin letters."),
    accept: yup
      .boolean()
      .oneOf([true], "You must accept the terms and conditions"),
  })
  .required();

interface RegisterFormValues {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  accept: boolean;
}

const SignUpForm: React.FC<ChakraProps & ThemingProps> = memo(
  ({ colorScheme }) => {
    const [showPassword, setShowPassword] = useState(false);
    const [
      formData, // eslint-disable-line @typescript-eslint/no-unused-vars
      setFormData,
    ] = useState<{
      firstName: string;
      lastName: string;
      email: string;
      password: string;
    }>();

    const inactiveColor = useColorModeValue("gray.500", "gray.400");

    const {
      handleSubmit, // handels the form submit event
      register, // ties the inputs to react-form
      formState: { errors, isSubmitting }, // gets errors and "loading" state
    } = useForm<RegisterFormValues>({
      reValidateMode: "onBlur",
      resolver: yupResolver(schema),
    });

    // Dummy form process function
    // You can process the form data here
    const onSubmit = (data: RegisterFormValues) => {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(data);
          setFormData(data);
          alert(JSON.stringify(data, null, 2));
        }, 4000);
      });
    };

    return (
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <Stack spacing={4}>
          <Stack direction={["column", "row", "row"]} align="start">
            <Box w="full" flex="1">
              <FormControl isRequired isInvalid={!!errors?.firstName}>
                <FormLabel htmlFor="firstName">First Name</FormLabel>
                <Input
                  id="firstName"
                  type="text"
                  placeholder="John"
                  {...register("firstName")}
                />
                <FormErrorMessage>
                  {errors?.firstName?.message}
                </FormErrorMessage>
              </FormControl>
            </Box>
            <Box w="full" flex="1">
              <FormControl isRequired isInvalid={!!errors?.lastName}>
                <FormLabel htmlFor="lastName">Last Name</FormLabel>
                <Input
                  id="lastName"
                  type="text"
                  placeholder="Doe"
                  {...register("lastName")}
                />
                <FormErrorMessage>{errors?.lastName?.message}</FormErrorMessage>
              </FormControl>
            </Box>
          </Stack>

          <FormControl isRequired isInvalid={!!errors?.email}>
            <FormLabel htmlFor="email">Email address</FormLabel>
            <Input
              id="email"
              type="email"
              placeholder="john.doe@example.com"
              {...register("email")}
            />
            <FormErrorMessage>{errors?.email?.message}</FormErrorMessage>
          </FormControl>

          <FormControl isRequired isInvalid={!!errors?.password}>
            <FormLabel htmlFor="password">Password</FormLabel>
            <InputGroup>
              <Input
                type={showPassword ? "text" : "password"}
                placeholder="******"
                {...register("password")}
              />
              <InputRightElement h={"full"}>
                <Button
                  variant={"link"}
                  onClick={() =>
                    setShowPassword((showPassword) => !showPassword)
                  }
                >
                  {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                </Button>
              </InputRightElement>
            </InputGroup>
            <FormErrorMessage>{errors?.password?.message}</FormErrorMessage>
          </FormControl>

          <FormControl isRequired isInvalid={!!errors?.accept}>
            <Checkbox
              size="sm"
              color={errors?.accept ? "red.400" : inactiveColor}
              colorScheme={errors?.accept ? "red" : colorScheme}
              {...register("accept")}
            >
              I accept the{" "}
              <NextLink href="/pages/privacy" passHref>
                <Link fontWeight="600">terms and conditions.</Link>
              </NextLink>
            </Checkbox>
            <FormErrorMessage>{errors?.accept?.message}</FormErrorMessage>
          </FormControl>

          <Stack spacing={10} pt={2}>
            <Button
              size="lg"
              type="submit"
              loadingText="Submitting"
              colorScheme={colorScheme}
              isLoading={isSubmitting}
            >
              Sign up
            </Button>
          </Stack>
        </Stack>
      </form>
    );
  },
);

if (__DEV__) {
  SignUpForm.displayName = "SignUpForm";
}

const NewLayout: React.FC = ({ children }) => {
  const theme = useContext(ThemeColorContext);
  const color = theme.colorScheme; // global default primary theme color
  const router = useRouter();
  return (
    <Layout
      header={
        <Box zIndex="sticky" py={4} w="full" pos="absolute">
          <Container maxW="container.xl">
            <Flex align="center">
              <DarkMode>
                <LogoWithSiteName
                  mr="auto"
                  color={useColorModeValue(
                    ["black", "black", "whiteAlpha.800"],
                    ["whiteAlpha.800"],
                  )}
                />
              </DarkMode>
              <Button
                colorScheme={color}
                variant={"ghost"}
                ml={"auto"}
                onClick={() => router.back()}
                leftIcon={<Icon as={MdKeyboardBackspace} />}
              >
                Go Back
              </Button>
            </Flex>
          </Container>
        </Box>
      }
      footer={<></>}
    >
      {children}
    </Layout>
  );
};

if (__DEV__) {
  NewLayout.displayName = "NewLayout";
}

SignUpPage.PageLayout = NewLayout;

export default SignUpPage;
