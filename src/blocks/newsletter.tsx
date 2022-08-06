import { yupResolver } from "@hookform/resolvers/yup";

import React, { memo, useState } from "react";

import { useForm } from "react-hook-form";
import * as yup from "yup";

import {
  Box,
  Button,
  chakra,
  FormControl,
  FormErrorMessage,
  Text,
  Input,
  ThemingProps,
  ChakraProps,
} from "@chakra-ui/react";

import { __DEV__ } from "@definitions/utils";

const schema = yup
  .object({
    email: yup
      .string()
      .email("Please enter a valid email")
      .required("Email is a required field"),
    // accept: yup
    //   .boolean()
    //   .oneOf([true], "You must accept the terms and conditions"),
  })
  .required();

interface NewsletterFormValues {
  email: string;
}

const NewsletterBlock: React.FC<ChakraProps & ThemingProps> = ({
  colorScheme,
  ...rest
}) => {
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
  } = useForm<NewsletterFormValues>({
    reValidateMode: "onBlur",
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: NewsletterFormValues) => {
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
      <chakra.form onSubmit={handleSubmit(onSubmit)} noValidate>
        <Text mb={4}>
          Subscribe to get special offers on the latest developments
        </Text>
        <FormControl isRequired isInvalid={!!errors?.email}>
          <Input
            type="email"
            focusBorderColor={`${colorScheme}.300`}
            placeholder="example@themebiotic.com"
            {...register("email")}
          />
          <FormErrorMessage>{errors?.email?.message}</FormErrorMessage>
        </FormControl>
        <FormControl mt={4}>
          <Button
            isFullWidth
            type="submit"
            isLoading={isSubmitting}
            colorScheme={colorScheme}
          >
            Subscribe
          </Button>
        </FormControl>
      </chakra.form>
    </Box>
  );
};

if (__DEV__) {
  NewsletterBlock.displayName = "NewsletterBlock";
}

export default memo(NewsletterBlock);
