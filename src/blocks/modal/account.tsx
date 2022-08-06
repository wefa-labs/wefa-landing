import { yupResolver } from "@hookform/resolvers/yup";
import { FcGoogle } from "@react-icons";

import { memo, useCallback, useContext, useEffect, useState } from "react";

import { AnimatePresence, motion } from "framer-motion";
import { useForm } from "react-hook-form";
import * as yup from "yup";

import { useRouter } from "next/router";

import {
  Box,
  Button,
  chakra,
  Input,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
  FormControl,
  FormLabel,
  FormHelperText,
  ThemingProps,
  ChakraProps,
  Text,
  VStack,
  Link,
  Heading,
  FormErrorMessage,
} from "@chakra-ui/react";

import {
  ModalAccountActions,
  ModalAccountCtx,
} from "@definitions/context/modal.account";
import { ThemeColorContext } from "@definitions/context/theme";
import { __DEV__ } from "@definitions/utils";

const MotionBox = motion(Box);

const ModalAccount: React.FC = (): JSX.Element => {
  const [formName, setFormName] = useState<string | null>("signup");
  const theme = useContext(ThemeColorContext);
  const color = theme.colorScheme; // global default primary theme color
  const router = useRouter();
  const { form } = router.query;
  const { state, dispatch } = useContext(ModalAccountCtx);
  const { isOpen } = state;

  useEffect(() => {
    if (form) setFormName(form as string);
    return () => {
      setFormName(null);
    };
  }, [form]);

  // Close Modal
  const closeHandler = useCallback(() => {
    router.push({ query: null });
    return dispatch({
      type: ModalAccountActions.CLOSE,
    });
  }, [dispatch]);

  // setFormName Handler
  const setFormNameHandler = useCallback((form: string) => {
    setFormName(form);
    router.push({ query: { modal: "account", form } });
  }, []);

  const variants = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
  };

  return (
    <>
      <Modal
        // size="lg"
        isCentered
        isOpen={isOpen}
        onClose={closeHandler}
        scrollBehavior="inside"
        closeOnOverlayClick={false}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody py={10}>
            <AnimatePresence exitBeforeEnter>
              {
                {
                  signin: (
                    <MotionBox key={"signin-form"} {...variants}>
                      <SignInForm
                        setFormName={setFormNameHandler}
                        colorScheme={color}
                      />
                    </MotionBox>
                  ),
                  signup: (
                    <MotionBox key={"signup-form"} {...variants}>
                      <SignUpForm
                        setFormName={setFormNameHandler}
                        colorScheme={color}
                      />
                    </MotionBox>
                  ),
                  forgot: (
                    <MotionBox key={"forgotPassword-form"} {...variants}>
                      <ForgotPasswordForm
                        setFormName={setFormNameHandler}
                        colorScheme={color}
                      />
                    </MotionBox>
                  ),
                }[formName]
              }
            </AnimatePresence>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

/* -------------------------------------------------------------------------- */
/*                                 PAGE BLOCKS                                */
/* -------------------------------------------------------------------------- */

/* ---------------------------------- Forms --------------------------------- */

// Validation Schema for Sign up form
const signUpFormSchema = yup
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
    confirm: yup
      .string()
      .oneOf([yup.ref("password"), null], "Passwords must match"),
  })
  .required();

interface ISignUpForm {
  email: string;
  password: string;
  confirm?: string;
}

const SignUpForm: React.FC<
  { setFormName: (form: string) => void } & ChakraProps & ThemingProps
> = memo(({ setFormName, colorScheme }) => {
  const [
    formData, // eslint-disable-line @typescript-eslint/no-unused-vars
    setFormData,
  ] = useState<ISignUpForm>({
    email: "",
    password: "",
  });

  const {
    handleSubmit, // handels the form submit event
    register, // ties the inputs to react-form
    formState: { errors, isSubmitting }, // gets errors and "loading" state
  } = useForm<ISignUpForm>({
    reValidateMode: "onBlur",
    resolver: yupResolver(signUpFormSchema),
  });

  const onSubmit = (data: ISignUpForm) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        delete data.confirm;
        resolve(data);
        setFormData(data);
        alert(JSON.stringify(data, null, 2));
      }, 4000);
    });
  };

  return (
    <chakra.form onSubmit={handleSubmit(onSubmit)} noValidate>
      <VStack pb={10} spacing={2}>
        <Heading>Sign Up</Heading>
        <Text color="gray.500">
          Already have an account?{" "}
          <Button
            onClick={() => setFormName("signin")}
            colorScheme={colorScheme}
            variant="link"
          >
            Sign in
          </Button>
        </Text>
      </VStack>

      <VStack spacing={4}>
        <FormControl isRequired isInvalid={!!errors?.email}>
          <FormLabel htmlFor="email">Your email</FormLabel>
          <Input
            id="email"
            type="email"
            placeholder="john.doe@themebiotic.com"
            focusBorderColor={`${colorScheme}.400`}
            {...register("email")}
          />
          <FormErrorMessage>{errors?.email?.message}</FormErrorMessage>
        </FormControl>

        <FormControl isRequired isInvalid={!!errors?.password}>
          <FormLabel htmlFor="password">Password</FormLabel>
          <Input
            id="password"
            type="password"
            placeholder="********"
            focusBorderColor={`${colorScheme}.400`}
            {...register("password")}
          />
          <FormErrorMessage>{errors?.password?.message}</FormErrorMessage>
        </FormControl>

        <FormControl isInvalid={!!errors?.confirm}>
          <FormLabel htmlFor="confirm">Confirm password</FormLabel>
          <Input
            id="confirm"
            type="password"
            placeholder="********"
            focusBorderColor={`${colorScheme}.400`}
            {...register("confirm")}
          />
          <FormErrorMessage>{errors?.confirm?.message}</FormErrorMessage>
        </FormControl>

        <Button
          colorScheme={colorScheme}
          isFullWidth
          type="submit"
          isLoading={isSubmitting}
        >
          Sign Up
        </Button>

        <Text color="gray.500" fontSize="sm">
          By continuing you agree to our <Link>Terms and Conditions</Link>
        </Text>
      </VStack>
    </chakra.form>
  );
});

if (__DEV__) {
  SignUpForm.displayName = "SignUpForm";
}

// Validation Schema for Sign in form
const signInFormSchema = yup
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
  })
  .required();

interface ISignInForm {
  email: string;
  password: string;
}

const SignInForm: React.FC<
  { setFormName: (form: string) => void } & ChakraProps & ThemingProps
> = memo(({ setFormName, colorScheme }) => {
  const [
    formData, // eslint-disable-line @typescript-eslint/no-unused-vars
    setFormData,
  ] = useState<ISignUpForm>({
    email: "",
    password: "",
  });

  const {
    handleSubmit, // handels the form submit event
    register, // ties the inputs to react-form
    formState: { errors, isSubmitting }, // gets errors and "loading" state
  } = useForm<ISignInForm>({
    reValidateMode: "onBlur",
    resolver: yupResolver(signInFormSchema),
  });

  const onSubmit = (data: ISignInForm) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(data);
        setFormData(data);
        alert(JSON.stringify(data, null, 2));
      }, 4000);
    });
  };
  return (
    <chakra.form onSubmit={handleSubmit(onSubmit)} noValidate>
      <VStack pb={10} spacing={2}>
        <Heading>Sign In</Heading>
        <Text color="gray.500">
          Don't have an account yet?{" "}
          <Button
            onClick={() => setFormName("signup")}
            colorScheme={colorScheme}
            variant="link"
          >
            Sign up
          </Button>
        </Text>
      </VStack>

      <VStack spacing={4}>
        <FormControl isRequired isInvalid={!!errors?.email}>
          <FormLabel htmlFor="email">Your email</FormLabel>
          <Input
            id="email"
            type="email"
            placeholder="john.doe@themebiotic.com"
            focusBorderColor={`${colorScheme}.400`}
            {...register("email")}
          />
          <FormErrorMessage>{errors?.email?.message}</FormErrorMessage>
        </FormControl>

        <FormControl isRequired isInvalid={!!errors?.password}>
          <FormLabel htmlFor="password">Password</FormLabel>
          <Input
            id="password"
            type="password"
            placeholder="********"
            focusBorderColor={`${colorScheme}.400`}
            {...register("password")}
          />
          <FormHelperText textAlign="right">
            <Button
              onClick={() => setFormName("forgot")}
              colorScheme={colorScheme}
              fontSize="sm"
              variant="link"
            >
              Forgot Password?
            </Button>
          </FormHelperText>
          <FormErrorMessage>{errors?.password?.message}</FormErrorMessage>
        </FormControl>

        <Button
          isFullWidth
          type="submit"
          isLoading={isSubmitting}
          colorScheme={colorScheme}
        >
          Sign In
        </Button>
        <Button leftIcon={<FcGoogle />} isFullWidth>
          Sign In with Google
        </Button>

        <Text color="gray.500" fontSize="sm">
          By continuing you agree to our <Link>Terms and Conditions</Link>
        </Text>
      </VStack>
    </chakra.form>
  );
});

if (__DEV__) {
  SignInForm.displayName = "SignInForm";
}

// Validation Schema for forgot password form
const forgotPasswordFormSchema = yup
  .object({
    email: yup
      .string()
      .email("Please enter a valid email")
      .required("Email is a required field"),
  })
  .required();

interface IForgotPasswordForm {
  email: string;
}

const ForgotPasswordForm: React.FC<
  { setFormName: (form: string) => void } & ChakraProps & ThemingProps
> = memo(({ setFormName, colorScheme }) => {
  const [
    formData, // eslint-disable-line @typescript-eslint/no-unused-vars
    setFormData,
  ] = useState<IForgotPasswordForm>({
    email: "",
  });

  const {
    handleSubmit, // handels the form submit event
    register, // ties the inputs to react-form
    formState: { errors, isSubmitting }, // gets errors and "loading" state
  } = useForm<IForgotPasswordForm>({
    reValidateMode: "onBlur",
    resolver: yupResolver(forgotPasswordFormSchema),
  });

  const onSubmit = (data: IForgotPasswordForm) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(data);
        setFormData(data);
        alert(JSON.stringify(data, null, 2));
      }, 4000);
    });
  };
  return (
    <chakra.form onSubmit={handleSubmit(onSubmit)} noValidate>
      <VStack pb={10} spacing={2}>
        <Heading>Forgot Password</Heading>
        <Text textAlign="center" color="gray.500">
          If you can't remember your password, and you have an email address
          associated with your account, Mercury can send you a link to a
          password reset page.
        </Text>
      </VStack>

      <VStack spacing={4}>
        <FormControl isRequired isInvalid={!!errors?.email}>
          <FormLabel htmlFor="email">Your email</FormLabel>
          <Input
            id="email"
            type="email"
            placeholder="john.doe@themebiotic.com"
            focusBorderColor={`${colorScheme}.400`}
            {...register("email")}
          />
          <FormErrorMessage>{errors?.email?.message}</FormErrorMessage>
        </FormControl>

        <Button
          isFullWidth
          type="submit"
          isLoading={isSubmitting}
          colorScheme={colorScheme}
        >
          Submit
        </Button>
        <Button
          onClick={() => setFormName("signin")}
          colorScheme={colorScheme}
          fontSize="sm"
          variant="link"
        >
          Back to Sign In
        </Button>
      </VStack>
    </chakra.form>
  );
});

if (__DEV__) {
  ForgotPasswordForm.displayName = "ForgotPasswordForm";
}

export default memo(ModalAccount);
