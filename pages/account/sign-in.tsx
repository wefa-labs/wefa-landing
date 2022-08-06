import { yupResolver } from "@hookform/resolvers/yup";
import { FcGoogle } from "@react-icons";

import React, { memo, useContext, useState } from "react";

import { useForm } from "react-hook-form";
import * as yup from "yup";

import { NextSeo } from "next-seo";
import NextLink from "next/link";

import {
  Button,
  chakra,
  ChakraProps,
  Checkbox,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Text,
  Input,
  Link,
  Stack,
  ThemingProps,
  useColorModeValue,
} from "@chakra-ui/react";

import { ThemeColorContext } from "@definitions/context/theme";
import { __DEV__ } from "@definitions/utils";

import ImageLazyloadWithoutAspectRatio from "@components/image-lazyload/without-aspect-ratio";

import LoginImage from "@assets/images/computer-2.jpg?resize&img";
import LoginImageDark from "@assets/images/computer-3.jpg?resize&img";

const SignInPage = () => {
  const theme = useContext(ThemeColorContext);
  const color = theme.colorScheme; // global default primary theme color
  return (
    <>
      <NextSeo title="Sign In" description="Mercury Sign In Example Page" />
      <chakra.main>
        <Stack
          pt={[16, 16, 0]}
          minH={"100vh"}
          direction={{ base: "column", md: "row" }}
        >
          <Flex d={["none", "none", "flex"]} flex={1}>
            <ImageLazyloadWithoutAspectRatio
              h="full"
              w="full"
              alt={"Login Image"}
              objectFit={"cover"}
              image={useColorModeValue(LoginImage, LoginImageDark)}
            />
          </Flex>
          <Flex p={8} flex={1} align={"center"} justify={"center"}>
            <Stack mt={[0, 0, 8]} spacing={4} w={"full"} maxW={"md"}>
              <Heading fontSize={"2xl"}>Sign in to your account</Heading>
              <LoginForm colorScheme={color} />
            </Stack>
          </Flex>
        </Stack>
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
    email: yup
      .string()
      .email("Please enter a valid email")
      .required("Email is a required field"),
    password: yup
      .string()
      .required("No password provided.")
      .min(8, "Password is too short - should be 8 chars minimum.")
      .matches(/[a-zA-Z]/, "Password can only contain Latin letters."),
    remember: yup.boolean(),
  })
  .required();

interface LoginFormValues {
  email: string;
  password: string;
  remember?: boolean;
}

const LoginForm: React.FC<ChakraProps & ThemingProps> = memo(
  ({ colorScheme }) => {
    const [
      formData, // eslint-disable-line @typescript-eslint/no-unused-vars
      setFormData,
    ] = useState<{
      email: string;
      password: string;
      remember?: boolean;
    }>();

    const inactiveColor = useColorModeValue("gray.500", "gray.400");

    const {
      handleSubmit, // handels the form submit event
      register, // ties the inputs to react-form
      formState: { errors, isSubmitting }, // gets errors and "loading" state
    } = useForm<LoginFormValues>({
      reValidateMode: "onBlur",
      resolver: yupResolver(schema),
    });

    const onSubmit = (data: LoginFormValues) => {
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
        <FormControl mb={4} isRequired isInvalid={!!errors?.email}>
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
          <Input
            id="password"
            type="password"
            placeholder="******"
            {...register("password")}
          />
          <FormErrorMessage>{errors?.password?.message}</FormErrorMessage>
        </FormControl>

        <Stack spacing={6}>
          <Flex
            direction={{ base: "column", sm: "row" }}
            align={"start"}
            justify={"space-between"}
            mt={6}
          >
            <FormControl flex="1" isInvalid={!!errors?.remember}>
              <Checkbox
                // size="sm"
                color={errors.remember ? "red.400" : inactiveColor}
                colorScheme={errors.remember ? "red" : colorScheme}
                {...register("remember")}
              >
                Remember me
              </Checkbox>
              <FormErrorMessage>{errors?.remember?.message}</FormErrorMessage>
            </FormControl>
            <Link ml="auto" color={`${colorScheme}.500`}>
              Forgot password?
            </Link>
          </Flex>
          <Button
            colorScheme={colorScheme}
            variant={"solid"}
            size="lg"
            isFullWidth
            type="submit"
            isLoading={isSubmitting}
          >
            Sign in
          </Button>
          <Button
            size="lg"
            w={"full"}
            maxW={"md"}
            variant={"outline"}
            leftIcon={<FcGoogle />}
          >
            <Text>Sign in with Google</Text>
          </Button>
          <Text align={"center"}>
            Don't have an account yet?{" "}
            <NextLink href="/account/sign-up" passHref>
              <Link color={`${colorScheme}.400`} fontWeight="600">
                Sign up here
              </Link>
            </NextLink>
          </Text>
        </Stack>
      </form>
    );
  },
);

if (__DEV__) {
  LoginForm.displayName = "LoginForm";
}

export default SignInPage;
