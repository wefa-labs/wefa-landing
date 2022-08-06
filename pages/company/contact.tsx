import { yupResolver } from "@hookform/resolvers/yup";

import React, { memo, useState, useContext } from "react";

import { useForm } from "react-hook-form";
import InputMask from "react-input-mask";
import * as yup from "yup";

import { NextSeo } from "next-seo";
import NextLink from "next/link";

import {
  Box,
  Button,
  chakra,
  ChakraProps,
  Checkbox,
  Container,
  Flex,
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Heading,
  Input,
  Link,
  LinkBox,
  LinkOverlay,
  Stack,
  Text,
  Textarea,
  ThemingProps,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";

import { ThemeColorContext } from "@definitions/context/theme";
import { __DEV__ } from "@definitions/utils";

import ImageLazyload from "@components/image-lazyload/without-aspect-ratio";
import PageTitle from "@components/page-title";

import WorldMapDotDark from "@assets/images/world-map-dots-dark.png?resize&img";
import WorldMapDotLight from "@assets/images/world-map-dots-light.png?resize&img";

const ContactSimplePage: React.FC = () => {
  const theme = useContext(ThemeColorContext);
  const color = theme.colorScheme; // global default primary theme color

  const passiveColor = useColorModeValue("gray.500", "gray.400");
  return (
    <>
      <NextSeo
        title="Contact us"
        description="Mercury Contact us Simple Example Page"
      />
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
        <PageTitle
          title="Contact us"
          body={
            <Text mb={[0, 0, 12]} fontSize="lg" fontWeight="500">
              We would love to hear your comments and suggestions
            </Text>
          }
        />

        <Flex direction={["column-reverse", "column-reverse", "column"]}>
          <Container maxW="container.xl">
            <Stack
              direction={["column", "column", "column", "row"]}
              mt={[5, 10, -16]}
              spacing={10}
            >
              <ContactLinkBox
                title="Knowledgebase"
                body="Search our knowledge base and find answers to your questions."
                link="Search in Database"
                href="#"
              />

              <ContactLinkBox
                title="FAQ"
                body="Search our FAQ for answers to anything you might ask."
                link="Visit FAQ"
                href="#"
              />

              <ContactLinkBox
                title="Documentation"
                body="Development guides for building projects with Mercury"
                link="Read Documents"
                href="#"
              />
            </Stack>
          </Container>

          <Container maxW="container.md">
            <Box
              shadow={["none", "md", "lg"]}
              rounded="xl"
              p={[5, 5, 10, 20]}
              my={[5, 10, 28]}
            >
              <Heading mb={4} fontSize={["2xl"]}>
                We'd love to hear from you
              </Heading>
              <Text maxWidth="400px" color={passiveColor}>
                We do our best to assist you and we would love to hear your
                comments and suggestions.
              </Text>
              {/* Contact Form */}
              <ContactForm colorScheme={color} mt={[5, 5, 10]} />
            </Box>
          </Container>
        </Flex>

        <Container pos="relative" my={[5, 10, 28]} maxW="container.xl">
          <ImageLazyload
            left="50%"
            bottom="50%"
            transform="translateY(50%) translateX(-50%)"
            pos="absolute"
            maxWidth="750px"
            width="full"
            zIndex="-1"
            image={useColorModeValue(WorldMapDotLight, WorldMapDotDark)}
          />
          <Stack
            alignItems={["stretch", "stretch", "center"]}
            direction={["column", "column", "row"]}
          >
            <Flex w="full" flex={[1, 1, 1, 2]}>
              <Box p={[2, 5, 10]}>
                <Heading mb={3} lineHeight="1" fontWeight="normal">
                  <Text d={["inline", "inline", "block"]} as="span">
                    Visit us
                  </Text>{" "}
                  <Text as="span">at our offices</Text>
                </Heading>
                <Text color={passiveColor} maxW="400px">
                  We look forward to meeting you and offering solutions to your
                  software and design problems.
                </Text>
              </Box>
            </Flex>

            <Flex alignItems="start" flex="1">
              <Box p={[2, 5, 10]}>
                <VStack align="start">
                  <Text fontSize="lg" fontWeight="600">
                    New York, USA
                  </Text>
                  <Text>
                    Eastern Parkway Pedestrian Mall, Brooklyn, NY 11213
                  </Text>
                  <Text>+1 216-342-3084</Text>
                  <Link>Get directions</Link>
                </VStack>
              </Box>
            </Flex>

            <Flex alignItems="start" flex="1">
              <Box p={[2, 5, 10]}>
                <VStack align="start">
                  <Text fontSize="lg" fontWeight="600">
                    Frankfurt, Germany
                  </Text>
                  <Text>Brückenstraße 70, 60594 Frankfurt am Main</Text>
                  <Text>+49 0211 44 29 68</Text>
                  <Link>Get directions</Link>
                </VStack>
              </Box>
            </Flex>
          </Stack>
        </Container>
      </chakra.main>
    </>
  );
};

/* -------------------------------------------------------------------------- */
/*                                 PAGE BLOCKS                                */
/*    All page content can be edited via props. You do not need to make any   */
/*    changes in this part if you are not going to make design arrangements   */
/* -------------------------------------------------------------------------- */

const ContactLinkBox = memo(
  ({
    title,
    body,
    link,
    href,
  }: {
    title: string;
    body: string;
    link: string;
    href: string;
  }) => {
    const brightBg = useColorModeValue("white", "gray.900");
    const passiveColor = useColorModeValue("gray.500", "gray.400");
    return (
      <LinkBox flex="1" as="article">
        <Flex
          direction="column"
          rounded="xl"
          shadow={["md", "md", "xl"]}
          bg={brightBg}
          p="10"
          flex="1"
          alignItems="center"
          zIndex="2"
          textAlign="center"
          transition="all 250ms ease"
          _hover={{
            transform: ["none", "none", "translateY(-20px)"],
          }}
        >
          <Text mb={5} fontWeight="bold" fontSize="xl">
            {title}
          </Text>
          <Text color={passiveColor} mb={5} fontSize="lg">
            {body}
          </Text>

          <LinkOverlay href={href}>
            <Text fontWeight="bold" fontSize="lg">
              {link}
            </Text>
          </LinkOverlay>
        </Flex>
      </LinkBox>
    );
  },
);

if (__DEV__) {
  ContactLinkBox.displayName = "ContactLinkBox";
}

interface ContactFormValues {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
  phone?: string;
  accept: boolean;
}

const phoneRegExp =
  /^$|((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

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
    phone: yup
      .string()
      .nullable(true)
      .matches(phoneRegExp, "Phone number is not valid")
      .transform((_, val) => (val === val ? val : null)),
    message: yup.string().required("Message is a required field"),
    accept: yup
      .boolean()
      .oneOf([true], "You must accept the terms and conditions"),
  })
  .required();

const ContactForm: React.FC<ChakraProps & ThemingProps> = memo(
  ({ colorScheme = "gray", ...rest }) => {
    const [
      formData, // eslint-disable-line @typescript-eslint/no-unused-vars
      setFormData,
    ] = useState<ContactFormValues>();

    const inactiveColor = useColorModeValue("gray.500", "gray.400");

    const {
      handleSubmit, // handels the form submit event
      register, // ties the inputs to react-form
      formState: { errors, isSubmitting }, // gets errors and "loading" state
    } = useForm<ContactFormValues>({
      reValidateMode: "onBlur",
      resolver: yupResolver(schema),
    });

    const onSubmit = (data: ContactFormValues) => {
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
        <VStack alignItems="center" spacing={6} {...rest}>
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
              <FormHelperText>We'll never share your email.</FormHelperText>
              <FormErrorMessage>{errors?.email?.message}</FormErrorMessage>
            </FormControl>
            <FormControl isInvalid={!!errors?.phone}>
              <FormLabel>
                Phone Number{" "}
                <Text fontSize="sm" color="gray.400" as="span">
                  (Optional)
                </Text>
              </FormLabel>
              <Input
                as={InputMask}
                {...register("phone")}
                // alwaysShowMask
                mask="+9 (999) 99-999-9999"
                // mask={[phoneMask]}
                // maskPlaceholder="+1 (___) __-___-___"
                // maskChar={null}
                // bg={"gray.100"}
                color={"gray.500"}
                focusBorderColor={`${colorScheme}.400`}
                _placeholder={{
                  color: "gray.500",
                }}
              />
              <FormErrorMessage>{errors?.phone?.message}</FormErrorMessage>
            </FormControl>
          </Stack>
          <FormControl isRequired isInvalid={!!errors?.message}>
            <FormLabel>How can we help you ?</FormLabel>
            <Textarea
              {...register("message")}
              placeholder="Briefly describe how we can help you ..."
              resize="vertical"
              focusBorderColor={`${colorScheme}.400`}
            />
            <FormErrorMessage>{errors?.message?.message}</FormErrorMessage>
          </FormControl>
          <FormControl isRequired isInvalid={!!errors?.accept}>
            <Checkbox
              size="sm"
              color={errors?.accept ? "red.400" : inactiveColor}
              colorScheme={errors?.accept ? "red" : colorScheme}
              // focusBorderColor={`${colorScheme}.400`}
              {...register("accept")}
            >
              I accept the terms & conditions and I understand that my data will
              be hold securely in accordance with the{" "}
              <NextLink href="/pages/privacy" passHref>
                <Link fontWeight="600">privacy policy.</Link>
              </NextLink>
            </Checkbox>
            <FormErrorMessage>{errors?.accept?.message}</FormErrorMessage>
          </FormControl>
          <Box w="full">
            <Button
              type="submit"
              size="lg"
              isFullWidth
              colorScheme={colorScheme}
              isLoading={isSubmitting}
            >
              Send Your Request
            </Button>
            <Text color={inactiveColor} textAlign="center" mt={2} fontSize="sm">
              We'll get back to you in 1-3 business days.
            </Text>
          </Box>
        </VStack>
      </form>
    );
  },
);

if (__DEV__) {
  ContactForm.displayName = "ContactForm";
}

export default ContactSimplePage;
