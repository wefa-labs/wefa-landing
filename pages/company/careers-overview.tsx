import { yupResolver } from "@hookform/resolvers/yup";
import {
  FaRegFilePdf,
  BiPaste,
  FaDropbox,
  FaGithub,
  FaLinkedin,
  FaLink,
  FaTwitter,
} from "@react-icons";

import React, { useCallback, useState, useContext, memo } from "react";

import { AnimatePresence, motion } from "framer-motion";
import debounce from "lodash.debounce";
import { useForm, useController, UseControllerProps } from "react-hook-form";
import * as yup from "yup";

import { NextSeo } from "next-seo";

import { ChevronLeftIcon } from "@chakra-ui/icons";
import {
  Box,
  BoxProps,
  Button,
  chakra,
  ChakraProps,
  Container,
  Divider,
  Flex,
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Heading,
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
  ListItem,
  Stack,
  Text,
  Textarea,
  ThemingProps,
  UnorderedList,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";

import { ThemeColorContext } from "@definitions/context/theme";
import { CareersData } from "@definitions/site/careers";
import { __DEV__ } from "@definitions/utils";

import FileUpload from "@components/file-upload";

import Layout from "@layouts/default";

export const MotionBox = motion<BoxProps>(Box);

const CareersOverviewPage = () => {
  const theme = useContext(ThemeColorContext);
  const color = theme.colorScheme; // global default primary theme color
  const backgroundColor = useColorModeValue("gray.100", "gray.600");
  const textColor = useColorModeValue("gray.600", "gray.300");

  return (
    <>
      <NextSeo
        title="Careers Overview"
        description="Mercury Careers Overview Example Page"
      />
      <chakra.main>
        <Box py={[10, 16, 20, 20]} bg={backgroundColor}>
          <Container maxWidth="container.lg">
            <Flex
              direction={["column", "column", "row"]}
              align={["start", "start", "center"]}
            >
              <Stack alignItems="start" direction={"column"} spacing={6}>
                <Button
                  whiteSpace="break-spaces"
                  variant="link"
                  leftIcon={<ChevronLeftIcon />}
                >
                  Back to open positions
                </Button>
                <Heading lineHeight="1">Database Engineer</Heading>
                <Stack
                  alignItems={["start", "center", "center"]}
                  // divider={<Icon as={BsDot} border="none" />}
                  direction={["column", "row", "row"]}
                >
                  <Text>London, UK</Text>
                  <Text>Engineering</Text>
                  <Text>Full-Time</Text>
                </Stack>
              </Stack>

              <Box mt={[8, 8, 0]} ml={["unset", "unset", "auto"]}>
                <Button size="lg" colorScheme={color}>
                  Apply now
                </Button>
              </Box>
            </Flex>
          </Container>
        </Box>

        <Box my={10}>
          <Container maxWidth="container.lg">
            <Stack
              color={textColor}
              alignItems="start"
              direction="column"
              spacing={4}
            >
              {CareersData.map((d, idx) => (
                <Content key={idx} {...d} />
              ))}
            </Stack>
          </Container>
          <Container mt={10} maxWidth="container.md">
            <Box
              rounded="lg"
              bg={useColorModeValue("gray.100", "gray.700")}
              p={10}
            >
              <Heading mb={4} fontSize="xl" as="h3">
                Apply for this Job
              </Heading>
              <Flex direction={["column", "row", "row"]} mb={10} align="center">
                <Text fontSize="lg">Submit your application</Text>
                <Text ml={["unset", "auto", "auto"]}>
                  <Text color="red" as="span">
                    *
                  </Text>{" "}
                  Required
                </Text>
              </Flex>
              <ApplicationForm colorScheme={color} />
            </Box>
          </Container>
        </Box>
      </chakra.main>
    </>
  );
};

/* -------------------------------------------------------------------------- */
/*                                 PAGE BLOCKS                                */
/*    All page content can be edited via props. You do not need to make any   */
/*    changes in this part if you are not going to make design arrangements   */
/* -------------------------------------------------------------------------- */

interface IContent extends ChakraProps {
  heading?: string;
  body: string | string[];
}

const Content: React.FC<IContent> = memo((props): JSX.Element => {
  const { body, heading, ...rest } = props;
  const hasArray = Array.isArray(body);
  const textColor = useColorModeValue("gray.600", "gray.300");
  const headingColor = useColorModeValue("blackAlpha.800", "whiteAlpha.900");
  return (
    <>
      {heading && (
        <Heading color={headingColor} fontSize="md" as="h3">
          {heading}
        </Heading>
      )}
      {hasArray ? (
        <Box pl={[2, 5, 10]} {...rest}>
          <UnorderedList spacing={2}>
            {body.map((i, idx) => (
              <ListItem key={idx} dangerouslySetInnerHTML={{ __html: i }} />
            ))}
          </UnorderedList>
        </Box>
      ) : (
        <Text
          color={textColor}
          {...rest}
          dangerouslySetInnerHTML={{ __html: body }}
        />
      )}
    </>
  );
});

if (__DEV__) {
  Content.displayName = "Content";
}

/* ---------------------------- Application Form ---------------------------- */

interface ApplicationFormValues {
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  location: string;
  file_?: FileList;
  resume: string;
  resume_file_?: FileList;
  coverLetter: string;
  coverLetter_file_?: FileList;
  // additional: {
  //   [key in AdditionalOptions]?: string;
  // };
  additional?: IAdditional;
}

interface IAdditional {
  linkedin?: string;
  github?: string;
  website?: string;
  twitter?: string;
  extra?: string;
}

const phoneRegExp =
  /^$|((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const schema = yup
  .object()
  .shape(
    {
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
        .matches(phoneRegExp, "Phone number is not valid")
        .transform((_, val) => (val === val ? val : null))
        .required("Phone number is a required field"),
      location: yup
        .string()
        .min(3, "Location must be at least 3 characters long")
        .required("Location is a required field")
        .matches(/^[a-zA-Z]+$/, "Location must contain only letters"),
      resume: yup
        .string()
        .min(100, "Resume must be at least 100 characters long")
        .required("Resume is a required field"),
      coverLetter: yup
        .string()
        .nullable()
        .notRequired()
        .when("coverLetter", {
          is: (value: string) => value?.length,
          then: (rule) =>
            rule.min(50, "Cover letter must be at least 50 characters long"),
        }),
      additional: yup.object({
        linkedin: yup.string().url("LinkedIn filed must be a valid URL"),
        github: yup.string().url("GitHub filed must be a valid URL"),
        website: yup.string().url("Website filed must be a valid URL"),
        twitter: yup.string().url("Twitter filed must be a valid URL"),
        extra: yup.string().url("Additional filed must be a valid URL"),
      }),
    },
    [
      // Add Cyclic deps here because when require itself
      ["coverLetter", "coverLetter"],
    ],
  )
  .required();

const ApplicationForm: React.FC<ChakraProps & ThemingProps> = memo(
  ({ colorScheme = "gray" }) => {
    const [
      formData, // eslint-disable-line @typescript-eslint/no-unused-vars
      setFormData,
    ] = useState<ApplicationFormValues>();

    const [pasteCoverLetter, setPasteCoverLetter] = useState(false);
    const [pasteResume, setPasteResume] = useState(false);

    const {
      control,
      handleSubmit,
      register,
      formState: { errors, isSubmitting }, // gets errors and "loading" state
    } = useForm<ApplicationFormValues>({
      defaultValues: formData,
      reValidateMode: "onBlur",
      resolver: yupResolver(schema),
    });

    const inputBG = useColorModeValue("whiteAlpha.800", "whiteAlpha.300");
    const inputColor = useColorModeValue("blackAlpha.800", "whiteAlpha.800");
    const focusBorderColor = useColorModeValue(
      `${colorScheme}.300`,
      `${colorScheme}.600`,
    );

    const validateFiles = (value: FileList) => {
      if (value.length < 1) {
        return "Files is required";
      }
      for (const file of Array.from(value)) {
        const fsMb = file.size / (1024 * 1024);
        const MAX_FILE_SIZE = 10;
        if (fsMb > MAX_FILE_SIZE) {
          return "Max file size 10mb";
        }
      }
      return true;
    };

    const onSubmit = (data: ApplicationFormValues) => {
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
        <VStack alignItems="start" spacing={4}>
          <FormControl isRequired isInvalid={!!errors?.firstName}>
            <Flex
              align={["strech", "strech", "center"]}
              direction={["column", "column", "row"]}
            >
              <Box flex="1">
                <FormLabel>First Name</FormLabel>
              </Box>
              <Box flex="2">
                <Input
                  type="text"
                  bg={inputBG}
                  color={inputColor}
                  focusBorderColor={focusBorderColor}
                  {...register("firstName")}
                />
                <FormErrorMessage>
                  {errors?.firstName?.message}
                </FormErrorMessage>
              </Box>
            </Flex>
          </FormControl>

          <FormControl isRequired isInvalid={!!errors?.lastName}>
            <Flex
              align={["strech", "strech", "center"]}
              direction={["column", "column", "row"]}
            >
              <Box flex="1">
                <FormLabel>Last Name</FormLabel>
              </Box>
              <Box flex="2">
                <Input
                  type="text"
                  bg={inputBG}
                  color={inputColor}
                  focusBorderColor={focusBorderColor}
                  {...register("lastName")}
                />
                <FormErrorMessage>{errors?.lastName?.message}</FormErrorMessage>
              </Box>
            </Flex>
          </FormControl>

          <FormControl isRequired isInvalid={!!errors?.email}>
            <Flex
              align={["strech", "strech", "center"]}
              direction={["column", "column", "row"]}
            >
              <Box flex="1">
                <FormLabel>Email address</FormLabel>
              </Box>
              <Box flex="2">
                <Input
                  type="email"
                  bg={inputBG}
                  color={inputColor}
                  focusBorderColor={focusBorderColor}
                  {...register("email")}
                />
                <FormHelperText>We'll never share your email.</FormHelperText>
                <FormErrorMessage>{errors?.email?.message}</FormErrorMessage>
              </Box>
            </Flex>
          </FormControl>

          <FormControl isRequired isInvalid={!!errors?.phone}>
            <Flex
              align={["strech", "strech", "center"]}
              direction={["column", "column", "row"]}
            >
              <Box flex="1">
                <FormLabel>Phone</FormLabel>
              </Box>
              <Box flex="2">
                <Input
                  bg={inputBG}
                  color={inputColor}
                  placeholder="+1 (___) __-___-___"
                  focusBorderColor={focusBorderColor}
                  {...register("phone")}
                />
                <FormHelperText>We'll never share your phone.</FormHelperText>
                <FormErrorMessage>{errors?.phone?.message}</FormErrorMessage>
              </Box>
            </Flex>
          </FormControl>

          <FormControl isRequired isInvalid={!!errors?.location}>
            <Flex
              align={["strech", "strech", "center"]}
              direction={["column", "column", "row"]}
            >
              <Box flex="1">
                <FormLabel>Location (City)</FormLabel>
              </Box>
              <Box flex="2">
                <Input
                  bg={inputBG}
                  color={inputColor}
                  focusBorderColor={focusBorderColor}
                  {...register("location")}
                />
                <FormErrorMessage>{errors?.location?.message}</FormErrorMessage>
              </Box>
            </Flex>
          </FormControl>

          <FormControl isRequired isInvalid={!!errors?.resume}>
            <Flex
              w="full"
              align={["strech", "strech", "center"]}
              direction={["column", "column", "row"]}
            >
              <Box flex="1">
                <FormLabel>Resume/CV</FormLabel>
              </Box>
              <Box flex="2">
                <Stack direction={["column", "row", "row"]} spacing={4}>
                  <Box>
                    <FileUpload
                      accept={"application/pdf,application/vnd.ms-excel"}
                      multiple
                      register={register("resume_file_", {
                        validate: validateFiles,
                      })}
                    >
                      <Button
                        bg={useColorModeValue("white", "gray.600")}
                        leftIcon={<Icon as={FaRegFilePdf} />}
                        w="full"
                      >
                        Attach
                      </Button>
                    </FileUpload>
                  </Box>
                  <Button
                    bg={useColorModeValue("white", "gray.600")}
                    leftIcon={<Icon as={FaDropbox} />}
                  >
                    Dropbox
                  </Button>
                  <Button
                    onClick={() => setPasteResume(!pasteResume)}
                    bg={useColorModeValue("white", "gray.600")}
                    leftIcon={<Icon as={BiPaste} />}
                  >
                    Paste
                  </Button>
                </Stack>
                {pasteResume && (
                  <Textarea
                    mt={4}
                    bg={useColorModeValue("white", "gray.600")}
                    placeholder="Paste your resume/cv here"
                    {...register("resume")}
                  />
                )}
                <FormErrorMessage>{errors?.resume?.message}</FormErrorMessage>
              </Box>
            </Flex>
          </FormControl>

          <FormControl isInvalid={!!errors?.coverLetter}>
            <Flex
              w="full"
              align={["strech", "strech", "start"]}
              direction={["column", "column", "row"]}
            >
              <Box flex="1">
                <FormLabel>Cover Letter</FormLabel>
              </Box>
              <Box flex="2">
                <Stack direction={["column", "row", "row"]} spacing={4}>
                  <Box>
                    <FileUpload
                      accept={"application/pdf,application/vnd.ms-excel"}
                      multiple
                      register={register("coverLetter_file_", {
                        validate: validateFiles,
                      })}
                    >
                      <Button
                        bg={useColorModeValue("white", "gray.600")}
                        leftIcon={<Icon as={FaRegFilePdf} />}
                        w="full"
                      >
                        Attach
                      </Button>
                    </FileUpload>
                  </Box>
                  <Button
                    bg={useColorModeValue("white", "gray.600")}
                    leftIcon={<Icon as={FaDropbox} />}
                  >
                    Dropbox
                  </Button>
                  <Button
                    onClick={() => setPasteCoverLetter(!pasteCoverLetter)}
                    bg={useColorModeValue("white", "gray.600")}
                    leftIcon={<Icon as={BiPaste} />}
                  >
                    Paste
                  </Button>
                </Stack>
                {pasteCoverLetter && (
                  <Textarea
                    mt={4}
                    bg={useColorModeValue("white", "gray.600")}
                    placeholder="Paste your cover letter here"
                    {...register("coverLetter")}
                  />
                )}
                <FormErrorMessage>
                  {errors?.coverLetter?.message}
                </FormErrorMessage>
              </Box>
            </Flex>
          </FormControl>

          <AdditionalForm
            colorScheme={colorScheme}
            color={inputColor}
            bg={inputBG}
            control={control}
            name="additional"
          />

          <Flex w="full">
            <Button
              type="submit"
              size="lg"
              // isFullWidth
              isLoading={isSubmitting}
              mt={5}
              ml="auto"
              colorScheme={colorScheme}
            >
              Submit Application
            </Button>
          </Flex>
        </VStack>
      </form>
    );
  },
);

if (__DEV__) {
  ApplicationForm.displayName = "ApplicationForm";
}

type AdditionalFormControl<T extends object> = UseControllerProps<T>;

const AdditionalForm: React.FC<
  ChakraProps & ThemingProps & AdditionalFormControl<ApplicationFormValues>
> = memo(({ colorScheme = "gray", color, bg, control, name }) => {
  const {
    field,
    formState: { errors },
  } = useController({
    control,
    name,
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    name: string,
  ) => {
    field.onChange({
      ...(field.value as object),
      [name]: e.target.value,
    });
  };

  const debouncedChangeHandler = useCallback(debounce(handleInputChange, 300), [
    field,
  ]);

  const [show, setShow] = useState(false);
  const focusBorderColor = useColorModeValue(
    `${colorScheme}.300`,
    `${colorScheme}.600`,
  );

  return (
    <>
      <Box w="full">
        <Flex direction={["column", "column", "row"]} align="center">
          <Box w="full">
            <Heading mt={10} mb={2} fontSize="md" as="h4">
              Additional Information
            </Heading>
            <Text mb={4} fontSize="sm">
              Additional information is not required, but we would love to learn
              more about you.
            </Text>
          </Box>
          <Button
            onClick={() => setShow(!show)}
            ml={["unset", "unset", "auto"]}
            mb={[4, 4, 0]}
            size="sm"
            colorScheme={colorScheme}
            variant="outline"
            minWidth="16"
          >
            {show ? "Hide" : "Show"}
          </Button>
        </Flex>
        <Divider
          borderColor={useColorModeValue("blackAlpha.300", "whiteAlpha.400")}
        />
      </Box>
      <Box w="full">
        <AnimatePresence>
          {show && (
            <MotionBox
              transition={{ ease: "easeInOut", duration: "0.3" }}
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              w="full"
              overflow="hidden"
            >
              <Text mb={4} fontWeight="500" fontSize="md">
                Profile Links
              </Text>
              <FormControl mb={2} isInvalid={!!errors?.additional?.linkedin}>
                <Flex
                  align={["strech", "strech", "center"]}
                  direction={["column", "column", "row"]}
                >
                  <Box flex="1">
                    <FormLabel fontSize="sm">LinkedIn</FormLabel>
                  </Box>
                  <Box flex="2">
                    <InputGroup size="sm">
                      <InputLeftElement
                        pointerEvents="none"
                        children={<Icon as={FaLinkedin} color="current" />}
                      />
                      <Input
                        bg={bg}
                        type="url"
                        color={color}
                        placeholder="www.linkedin.com"
                        focusBorderColor={focusBorderColor}
                        // defaultValue={field?.value?.linkedin}
                        onChange={(event) =>
                          debouncedChangeHandler(event, "linkedin")
                        }
                      />
                    </InputGroup>
                    <FormErrorMessage>
                      {errors?.additional?.linkedin?.message}
                    </FormErrorMessage>
                  </Box>
                </Flex>
              </FormControl>
              <FormControl mb={2} isInvalid={!!errors?.additional?.github}>
                <Flex
                  align={["strech", "strech", "center"]}
                  direction={["column", "column", "row"]}
                >
                  <Box flex="1">
                    <FormLabel fontSize="sm">GitHub</FormLabel>
                  </Box>
                  <Box flex="2">
                    <InputGroup size="sm">
                      <InputLeftElement
                        pointerEvents="none"
                        children={<Icon as={FaGithub} color="current" />}
                      />
                      <Input
                        bg={bg}
                        type="url"
                        color={color}
                        placeholder="www.github.com"
                        focusBorderColor={focusBorderColor}
                        onChange={(event) =>
                          debouncedChangeHandler(event, "github")
                        }
                      />
                    </InputGroup>
                    <FormErrorMessage>
                      {errors?.additional?.github?.message}
                    </FormErrorMessage>
                  </Box>
                </Flex>
              </FormControl>
              <FormControl mb={2} isInvalid={!!errors?.additional?.website}>
                <Flex
                  align={["strech", "strech", "center"]}
                  direction={["column", "column", "row"]}
                >
                  <Box flex="1">
                    <FormLabel fontSize="sm">Website</FormLabel>
                  </Box>
                  <Box flex="2">
                    <InputGroup size="sm">
                      <InputLeftElement
                        pointerEvents="none"
                        children={<Icon as={FaLink} color="current" />}
                      />
                      <Input
                        bg={bg}
                        type="url"
                        color={color}
                        placeholder="www.example.com"
                        focusBorderColor={focusBorderColor}
                        onChange={(event) =>
                          debouncedChangeHandler(event, "website")
                        }
                      />
                    </InputGroup>
                    <FormErrorMessage>
                      {errors?.additional?.website?.message}
                    </FormErrorMessage>
                  </Box>
                </Flex>
              </FormControl>

              <FormControl
                size="sm"
                mb={2}
                isInvalid={!!errors?.additional?.twitter}
              >
                <Flex
                  align={["strech", "strech", "center"]}
                  direction={["column", "column", "row"]}
                >
                  <Box flex="1">
                    <FormLabel fontSize="sm">Twitter</FormLabel>
                  </Box>
                  <Box flex="2">
                    <InputGroup size="sm">
                      <InputLeftElement
                        pointerEvents="none"
                        children={<Icon as={FaTwitter} color="current" />}
                      />
                      <Input
                        bg={bg}
                        type="url"
                        color={color}
                        placeholder="www.twitter.com"
                        focusBorderColor={focusBorderColor}
                        onChange={(event) =>
                          debouncedChangeHandler(event, "twitter")
                        }
                      />
                    </InputGroup>
                    <FormErrorMessage>
                      {errors?.additional?.twitter?.message}
                    </FormErrorMessage>
                  </Box>
                </Flex>
              </FormControl>

              <FormControl mb={2} isInvalid={!!errors?.additional?.extra}>
                <Flex
                  align={["strech", "strech", "center"]}
                  direction={["column", "column", "row"]}
                >
                  <Box flex="1">
                    <FormLabel fontSize="sm">Additional</FormLabel>
                  </Box>
                  <Box flex="2">
                    <InputGroup size="sm">
                      <InputLeftElement
                        pointerEvents="none"
                        children={<Icon as={FaLink} color="current" />}
                      />
                      <Input
                        bg={bg}
                        type="url"
                        color={color}
                        placeholder="www.example.com"
                        focusBorderColor={focusBorderColor}
                        onChange={(event) =>
                          debouncedChangeHandler(event, "extra")
                        }
                      />
                    </InputGroup>
                    <FormErrorMessage>
                      {errors?.additional?.extra?.message}
                    </FormErrorMessage>
                  </Box>
                </Flex>
              </FormControl>
            </MotionBox>
          )}
        </AnimatePresence>
      </Box>
    </>
  );
});

if (__DEV__) {
  AdditionalForm.displayName = "AdditionalForm";
}

CareersOverviewPage.PageLayout = ({
  children,
}: {
  children: React.ReactNode;
}) => <Layout stickyHeader={false}>{children}</Layout>;

export default CareersOverviewPage;
