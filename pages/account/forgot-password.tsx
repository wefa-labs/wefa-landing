import { yupResolver } from "@hookform/resolvers/yup";

import React, { memo, useState, useContext } from "react";

import { useForm } from "react-hook-form";
import * as yup from "yup";

import { NextSeo } from "next-seo";

import {
  chakra,
  ChakraProps,
  Container,
  Text,
  Flex,
  Button,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Heading,
  Icon,
  IconProps,
  Input,
  Stack,
  useColorModeValue,
  ThemingProps,
} from "@chakra-ui/react";

import { ThemeColorContext } from "@definitions/context/theme";
import { __DEV__ } from "@definitions/utils";

import Layout from "@layouts/default";

const ForgotPasswordPage = () => {
  const theme = useContext(ThemeColorContext);
  const color = theme.colorScheme; // global default primary theme color

  return (
    <>
      <NextSeo
        title="Reset Password"
        description="Mercury Reset Password Example Page"
      />
      <chakra.main>
        <Flex
          pos="relative"
          overflow="hidden"
          minH={"100vh"}
          align={"center"}
          justify={"center"}
        >
          <Container zIndex={2} maxW={["full", 432, 432]}>
            <ResetPasswordForm mb={10} mt={[24, 24, 24]} colorScheme={color} />
          </Container>
          <Blur
            height={[500]}
            width="auto"
            zIndex={0}
            position={"absolute"}
            top={0}
            bottom={0}
            left={0}
            right={0}
            m="auto"
            // transform="translateX(-50%) translateY(-50%)"
            sx={{ opacity: 0.5, filter: "blur(70px)" }}
          />
        </Flex>
      </chakra.main>
    </>
  );
};

// Validation Schema
const schema = yup
  .object({
    email: yup
      .string()
      .email("Please enter a valid email")
      .required("Email is a required field"),
  })
  .required();

interface ResetPasswordFormValues {
  email: string;
}

const ResetPasswordForm: React.FC<ChakraProps & ThemingProps> = memo(
  ({ colorScheme, ...rest }) => {
    const [
      formData, // eslint-disable-line @typescript-eslint/no-unused-vars
      setFormData,
    ] = useState<{
      email: string;
    }>();

    const {
      handleSubmit, // handels the form submit event
      register, // ties the inputs to react-form
      formState: { errors, isSubmitting }, // gets errors and "loading" state
    } = useForm<ResetPasswordFormValues>({
      reValidateMode: "onBlur",
      resolver: yupResolver(schema),
    });

    const onSubmit = (data: ResetPasswordFormValues) => {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(data);
          setFormData(data);
          alert(JSON.stringify(data, null, 2));
        }, 4000);
      });
    };

    return (
      <chakra.form onSubmit={handleSubmit(onSubmit)} noValidate {...rest}>
        <Stack
          spacing={4}
          w="full"
          bg={useColorModeValue("white", "gray.700")}
          rounded={"xl"}
          boxShadow={"lg"}
          p={6}
        >
          <Heading lineHeight={1.1} fontSize={{ base: "2xl", md: "3xl" }}>
            Forgot your password?
          </Heading>
          <Text>You'll get an email with a reset link</Text>
          <FormControl isRequired isInvalid={!!errors?.email}>
            <FormLabel>Email address</FormLabel>
            <Input
              placeholder="john.doe@example.com"
              _placeholder={{ color: "gray.500" }}
              type="email"
              {...register("email")}
            />
            <FormErrorMessage>{errors.email?.message}</FormErrorMessage>
          </FormControl>

          <Stack spacing={6}>
            <Button
              size="lg"
              type="submit"
              loadingText="Submitting"
              colorScheme={colorScheme}
              isLoading={isSubmitting}
            >
              Submit
            </Button>
          </Stack>
        </Stack>
      </chakra.form>
    );
  },
);

if (__DEV__) {
  ResetPasswordForm.displayName = "ResetPasswordForm";
}

const Blur: React.FC<ChakraProps> = memo((props: IconProps): JSX.Element => {
  return (
    <Icon viewBox="0 0 589 451" fill="none" {...props}>
      <path
        d="M139 337C215.768 337 278 274.768 278 198C278 121.232 215.768 59 139 59C62.2324 59 0 121.232 0 198C0 274.768 62.2324 337 139 337Z"
        fill="#D9E9FF"
        fillOpacity="0.75"
      />
      <path
        d="M404 413C473.588 413 530 356.588 530 287C530 217.412 473.588 161 404 161C334.412 161 278 217.412 278 287C278 356.588 334.412 413 404 413Z"
        fill="#C1ABFF"
      />
      <path
        d="M478 314C539.304 314 589 264.304 589 203C589 141.696 539.304 92 478 92C416.696 92 367 141.696 367 203C367 264.304 416.696 314 478 314Z"
        fill="#F56565"
      />
      <path
        d="M237.5 451C293.557 451 339 405.557 339 349.5C339 293.443 293.557 248 237.5 248C181.443 248 136 293.443 136 349.5C136 405.557 181.443 451 237.5 451Z"
        fill="#4299E1"
      />
      <path
        d="M338.5 203C394.557 203 440 157.557 440 101.5C440 45.4431 394.557 0 338.5 0C282.443 0 237 45.4431 237 101.5C237 157.557 282.443 203 338.5 203Z"
        fill="#ECC94B"
      />
      <path
        d="M214.5 263C270.557 263 316 217.557 316 161.5C316 105.443 270.557 60 214.5 60C158.443 60 113 105.443 113 161.5C113 217.557 158.443 263 214.5 263Z"
        fill="#ABFFCD"
      />
    </Icon>
  );
});

if (__DEV__) {
  Blur.displayName = "Blur";
}

ForgotPasswordPage.PageLayout = memo(
  ({ children }: { children: React.ReactNode }) => {
    return <Layout footer={<></>}>{children}</Layout>;
  },
);

export default ForgotPasswordPage;
