import { yupResolver } from "@hookform/resolvers/yup";

import React, { memo, useState } from "react";

import { useForm } from "react-hook-form";
import * as yup from "yup";

import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Heading,
  Input,
  Stack,
  Text,
  Textarea,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";

import { __DEV__ } from "@definitions/utils";

import { IComments } from "./comments";

interface ICommentForm {
  firstName: string;
  lastName: string;
  email: string;
  comment: string;
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
    comment: yup.string().required("Comment is a required field"),
  })
  .required();

const CommentForm: React.FC<IComments.IForm> = ({
  title,
  colorScheme,
  ...rest
}) => {
  const [
    formData, // eslint-disable-line @typescript-eslint/no-unused-vars
    setFormData,
  ] = useState<{
    firstName: string;
    lastName: string;
    email: string;
    comment: string;
  }>();
  const activeColor = colorScheme;
  const inactiveColor = useColorModeValue("gray.500", "gray.400");

  const {
    handleSubmit, // handels the form submit event
    register, // ties the inputs to react-form
    formState: { errors, isSubmitting }, // gets errors and "loading" state
  } = useForm<ICommentForm>({
    reValidateMode: "onBlur",
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: ICommentForm) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(data);
        setFormData(data);
        alert(JSON.stringify(data, null, 2));
      }, 4000);
    });
  };
  return (
    <Box {...rest}>
      <Heading mb={10} fontSize={["xl", "2xl", "2xl"]} as="h4">
        {title ? title : "Post a comment"}
      </Heading>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <VStack alignItems="center" spacing={6}>
          <Stack
            align={["strech", "strech", "start"]}
            direction={["column", "row", "row"]}
            w="full"
            spacing={4}
          >
            <FormControl isRequired isInvalid={!!errors?.firstName}>
              <FormLabel htmlFor="firstName">First Name</FormLabel>
              <Input
                id="firstName"
                placeholder="John"
                focusBorderColor={`${colorScheme}.400`}
                {...register("firstName")}
              />
              <FormErrorMessage>{errors?.firstName?.message}</FormErrorMessage>
            </FormControl>

            <FormControl isRequired isInvalid={!!errors?.lastName}>
              <FormLabel htmlFor="lastName">Last Name</FormLabel>
              <Input
                id="lastName"
                placeholder="Doe"
                focusBorderColor={`${colorScheme}.400`}
                {...register("lastName")}
              />
              <FormErrorMessage>{errors?.lastName?.message}</FormErrorMessage>
            </FormControl>
          </Stack>
          <Stack
            align={["strech", "strech", "start"]}
            direction={["column", "row", "row"]}
            w="full"
            spacing={4}
          >
            <FormControl isRequired isInvalid={!!errors?.email}>
              <FormLabel>Email Address</FormLabel>
              <Input
                type="email"
                placeholder="john.doe@example.com"
                focusBorderColor={`${colorScheme}.400`}
                {...register("email")}
              />
              <FormHelperText>
                You can edit your comments by logging in with this e-mail
                address.
              </FormHelperText>
              <FormErrorMessage>{errors?.email?.message}</FormErrorMessage>
            </FormControl>
          </Stack>
          <FormControl isRequired isInvalid={!!errors?.comment}>
            <FormLabel>Comment</FormLabel>
            <Textarea
              placeholder="Your comment ..."
              resize="vertical"
              focusBorderColor={`${colorScheme}.400`}
              {...register("comment")}
            />
            <FormErrorMessage>{errors?.comment?.message}</FormErrorMessage>
          </FormControl>

          <Box w="full">
            <Button
              type="submit"
              size="lg"
              isFullWidth
              colorScheme={activeColor}
              isLoading={isSubmitting}
              loadingText="Submitting"
            >
              Submit your comment
            </Button>
            <Text color={inactiveColor} textAlign="center" mt={2} fontSize="sm">
              Your comment requires editorial approval.
            </Text>
          </Box>
        </VStack>
      </form>
    </Box>
  );
};

if (__DEV__) {
  CommentForm.displayName = "CommentForm";
}

export default memo(CommentForm);
