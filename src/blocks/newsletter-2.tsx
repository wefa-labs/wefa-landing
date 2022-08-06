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
  useColorModeValue,
  Stack,
  Heading,
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

interface INewsletterBlock extends ChakraProps, ThemingProps {
  tag?: string | React.ReactNode;
  title?: string | React.ReactNode;
  subtitle?: string | React.ReactNode;
  body?: string | React.ReactNode;
  comment?: string | React.ReactNode;
}

const NewsletterBlockTwo: React.FC<INewsletterBlock> = ({
  colorScheme,
  tag,
  title,
  // subtitle,
  body,
  comment,
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
        <Stack textAlign="center" align="center">
          {tag && (
            <Text
              color={useColorModeValue("gray.500", "gray.300")}
              fontSize="sm"
              fontWeight="700"
              letterSpacing={1}
              textTransform="uppercase"
            >
              {tag}
            </Text>
          )}
          {title && (
            <Heading fontWeight="400" fontSize={["3xl", "3xl", "4xl", "5xl"]}>
              {title}
            </Heading>
          )}
          {body && (
            <Text
              fontSize="lg"
              color={useColorModeValue("gray.500", "gray.300")}
            >
              {body}
            </Text>
          )}
          <Stack
            w="full"
            maxW="container.sm"
            direction={["column", "column", "row"]}
            align="start"
            py={5}
          >
            <FormControl flex="2" isRequired isInvalid={!!errors?.email}>
              <Input
                type="email"
                bg={useColorModeValue("whiteAlpha.700", "blackAlpha.300")}
                focusBorderColor={`${colorScheme}.300`}
                placeholder="example@themebiotic.com"
                {...register("email")}
              />
              <FormErrorMessage>{errors?.email?.message}</FormErrorMessage>
            </FormControl>
            <FormControl flex="1">
              <Button
                isFullWidth
                type="submit"
                isLoading={isSubmitting}
                colorScheme={colorScheme}
              >
                Join
              </Button>
            </FormControl>
          </Stack>
          {comment && (
            <Text
              fontSize="sm"
              color={useColorModeValue("gray.500", "gray.300")}
            >
              {comment}
            </Text>
          )}
        </Stack>
      </chakra.form>
    </Box>
  );
};

if (__DEV__) {
  NewsletterBlockTwo.displayName = "NewsletterBlockTwo";
}

export default memo(NewsletterBlockTwo);
