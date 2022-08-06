import { yupResolver } from "@hookform/resolvers/yup";
import {
  BiPaste,
  FaDropbox,
  FaRegFilePdf,
  FiAtSign,
  FiPhone,
  FiUser,
} from "@react-icons";

import React, { useContext, memo, useCallback, useRef, useState } from "react";

import { motion } from "framer-motion";
import debounce from "lodash.debounce";
import { useForm } from "react-hook-form";
import InputMask from "react-input-mask";
import * as yup from "yup";

import { NextSeo } from "next-seo";

import {
  Avatar,
  AvatarGroup,
  Box,
  BoxProps,
  Button,
  chakra,
  ChakraProps,
  Container,
  Flex,
  FormControl,
  FormErrorMessage,
  Heading,
  HStack,
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  SimpleGrid,
  Stack,
  Text,
  Textarea,
  ThemingProps,
  useBreakpointValue,
  useColorModeValue,
  useDisclosure,
  useToken,
} from "@chakra-ui/react";

import { ThemeColorContext } from "@definitions/context/theme";
import { __DEV__ } from "@definitions/utils";
import { ColorMatch } from "@definitions/utils/color";

import FileUpload from "@components/file-upload";
import TextTyping from "@components/text-typing";

import Layout from "@layouts/default";

import Avatar1 from "@assets/images/avatar/1f-square.jpg?size=128&img";
import Avatar2 from "@assets/images/avatar/1m-square.jpg?size=128&img";
import Avatar3 from "@assets/images/avatar/2f-square.jpg?size=128&img";
import Avatar4 from "@assets/images/avatar/2m-square.jpg?size=128&img";
import Avatar5 from "@assets/images/avatar/3m-square.jpg?size=128&img";

type FormValues = {
  file_: FileList;
};

export const MotionBox = motion<BoxProps>(Box);

const JoinOurTeamPage = (): JSX.Element => {
  const theme = useContext(ThemeColorContext);
  const color = theme.colorScheme; // global default primary theme color
  const [color1, color2] = ColorMatch(color);
  const Positions = [
    "Fullstack Developer",
    "Frontend Developer",
    "Backend Developer",
    "Motion Graphic Designer",
    "UI/UX Designer",
  ];
  return (
    <>
      <NextSeo
        title="Join our Team"
        description="Mercury Join our Team Example Page"
      />
      <chakra.main>
        <Flex position={"relative"}>
          <Container
            as={SimpleGrid}
            maxW="container.xl"
            columns={{ base: 1, md: 2 }}
            spacing={{ base: 5, lg: 32 }}
            pt={{ base: 24, sm: 24, md: 28, lg: 28 }}
            pb={[10, 10, 0]}
          >
            <Stack
              // alignItems={["center", "center", "start", "start"]}
              justifyContent="center"
              spacing={{ base: 10, md: 20 }}
            >
              <Heading lineHeight={1.1} fontSize={["3xl", "4xl", "5xl", "6xl"]}>
                <Text d={["inline", "inline", "block"]} as="span">
                  We're Hiring
                </Text>{" "}
                <Text d={["inline", "inline", "inline"]} as="span">
                  Highly Talented
                </Text>{" "}
                <Text
                  as={"span"}
                  bgGradient={`linear(to-tl, ${color1}.400, ${color2}.400)`}
                  bgClip="text"
                >
                  &
                </Text>
                <TextTyping
                  bgGradient={`linear(to-tl, ${color1}.400, ${color2}.400)`}
                  fontSize={{
                    base: "3xl",
                    sm: "4xl",
                    md: "4xl",
                    lg: "5xl",
                  }}
                  items={Positions}
                />
              </Heading>
              <TeamAvatarGroup
                items={[
                  {
                    name: "Barbara Fanucci",
                    image: Avatar1,
                  },
                  {
                    name: "Paul Patton",
                    image: Avatar2,
                  },
                  {
                    name: "Rita Bruder",
                    image: Avatar3,
                  },
                  {
                    name: "Joseph Gadberry",
                    image: Avatar4,
                  },
                  {
                    name: "Vincent Bonds",
                    image: Avatar5,
                  },
                ]}
                colorScheme={color}
              />
            </Stack>

            <Stack
              bg={useColorModeValue("gray.50", "gray.700")}
              rounded={"xl"}
              p={[4, 6, 8]}
              spacing={8}
              maxW={{ lg: "lg" }}
            >
              <Stack spacing={4}>
                <Heading
                  as="h3"
                  lineHeight={1.1}
                  fontSize={{ base: "2xl", sm: "3xl", md: "4xl" }}
                  bgClip="text"
                  bgGradient={`linear(to-tl, ${color1}.400, ${color2}.400)`}
                >
                  Join our team!
                </Heading>
                <Text color={"gray.500"} fontSize={{ base: "sm", sm: "md" }}>
                  We are looking for very talented teammates like you! Become
                  part of our rock star engineering team and fire up your
                  career!
                </Text>
              </Stack>

              <ContactForm colorScheme={color} />
            </Stack>
          </Container>
          <SVGBlur
            colorScheme={color}
            position="absolute"
            top={-10}
            left={-10}
          />
        </Flex>
      </chakra.main>
    </>
  );
};

const TeamAvatarGroup: React.FC<
  { items: { name: string; image: imageObject }[] } & ChakraProps & ThemingProps
> = memo(({ items = [], colorScheme }) => {
  const [color1, color2] = ColorMatch(colorScheme);
  return (
    <Stack direction={"row"} spacing={4} align={"center"}>
      {/*
       * TODO: add srcSet to Avatar
       * srcSet={AvatarImage?.srcSet}
       * issue: https://github.com/chakra-ui/chakra-ui/issues/5256
       */}
      <AvatarGroup>
        {items.map((avatar) => (
          <Avatar
            key={avatar.name}
            name={avatar.name}
            src={avatar.image.src}
            size={useBreakpointValue({ base: "md", md: "lg" })}
            position={"relative"}
            zIndex={2}
            _before={{
              content: '""',
              width: "full",
              height: "full",
              rounded: "full",
              transform: "scale(1.125)",
              bgGradient: `linear(to-bl, ${color1}.400, ${color2}.400)`,
              position: "absolute",
              zIndex: -1,
              top: 0,
              left: 0,
            }}
          />
        ))}
      </AvatarGroup>
      <Text fontFamily={"heading"} fontSize={{ base: "4xl", md: "6xl" }}>
        +
      </Text>
      <Flex
        align={"center"}
        justify={"center"}
        fontFamily={"heading"}
        fontSize={{ base: "sm", md: "lg" }}
        bg={"gray.800"}
        color={"white"}
        rounded={"full"}
        width={["44px", "44px", "60px"]}
        height={["44px", "44px", "60px"]}
        position={"relative"}
        _before={{
          content: '""',
          width: "full",
          height: "full",
          rounded: "full",
          transform: "scale(1.125)",
          bgGradient: `linear(to-bl, ${color1}.200, ${color2}.200)`,
          position: "absolute",
          zIndex: -1,
          top: 0,
          left: 0,
        }}
      >
        <Text textAlign="center" width={["44px", "44px", "60px"]}>
          YOU
        </Text>
      </Flex>
    </Stack>
  );
});
if (__DEV__) {
  TeamAvatarGroup.displayName = "TeamAvatarGroup";
}

/* ------------------------------ Contact Form ------------------------------ */

const phoneRegExp =
  /^$|((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const fullNameRegExp =
  /(^[A-Za-z]{3,16})([ ]{0,1})([A-Za-z]{3,16})?([ ]{0,1})?([A-Za-z]{3,16})?([ ]{0,1})?([A-Za-z]{3,16})$/;

interface ContactFormValues {
  name: string;
  email: string;
  phone: string;
}

const schema = yup
  .object({
    name: yup
      .string()
      .min(3, "Full name must be at least 3 characters long")
      .required("Full name is a required field")
      .matches(
        fullNameRegExp,
        "The value does not look like a correct full name (e.g: John Doe)",
      ),
    email: yup
      .string()
      .email("Please enter a valid email")
      .required("Email is a required field"),
    phone: yup
      .string()
      .nullable(true)
      .matches(phoneRegExp, "Phone number is not valid")
      .transform((_, val) => (val === val ? val : null)),
  })
  .required();

const ContactForm: React.FC<ChakraProps & ThemingProps> = memo(
  ({ colorScheme }) => {
    const finalRef = useRef<HTMLButtonElement | null>(null);
    const [color1, color2] = ColorMatch(colorScheme);
    const [
      formData, // eslint-disable-line @typescript-eslint/no-unused-vars
      setFormData,
    ] = useState<ContactFormValues>();

    const inputColor = useColorModeValue("gray.500", "whiteAlpha.800");
    const inputBG = useColorModeValue("gray.100", "whiteAlpha.200");

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
      <>
        <chakra.form mt={10} onSubmit={handleSubmit(onSubmit)} noValidate>
          <Stack spacing={4}>
            <FormControl isRequired isInvalid={!!errors?.name}>
              <InputGroup>
                <InputLeftElement
                  pointerEvents="none"
                  children={<Icon as={FiUser} color={inputColor} />}
                />
                <Input
                  border={0}
                  bg={inputBG}
                  color={inputColor}
                  placeholder="Full Name"
                  focusBorderColor={`${colorScheme}.400`}
                  _placeholder={{
                    color: inputColor,
                  }}
                  {...register("name")}
                />
              </InputGroup>
              <FormErrorMessage>{errors?.name?.message}</FormErrorMessage>
            </FormControl>

            <FormControl isRequired isInvalid={!!errors?.email}>
              <InputGroup>
                <InputLeftElement
                  pointerEvents="none"
                  children={<Icon as={FiAtSign} color={inputColor} />}
                />
                <Input
                  placeholder="john.doe@example.com"
                  type="email"
                  bg={inputBG}
                  border={0}
                  color={inputColor}
                  focusBorderColor={`${colorScheme}.400`}
                  _placeholder={{
                    color: inputColor,
                  }}
                  {...register("email")}
                />
              </InputGroup>
              <FormErrorMessage>{errors?.email?.message}</FormErrorMessage>
            </FormControl>

            <FormControl isRequired isInvalid={!!errors?.phone}>
              <InputGroup>
                <InputLeftElement
                  pointerEvents="none"
                  children={<Icon as={FiPhone} color={inputColor} />}
                />
                <Input
                  as={InputMask}
                  alwaysShowMask
                  mask="+9 (999) 99-999-9999"
                  // mask={[phoneMask]}
                  // maskPlaceholder="+1 (___) __-___-___"
                  // maskChar={null}
                  bg={inputBG}
                  border={0}
                  color={inputColor}
                  focusBorderColor={`${colorScheme}.400`}
                  _placeholder={{
                    color: inputColor,
                  }}
                  {...register("phone")}
                />
              </InputGroup>
              <FormErrorMessage>{errors?.phone?.message}</FormErrorMessage>
            </FormControl>

            <FormModal finalFocusRef={finalRef} />
          </Stack>
          <Button
            ref={finalRef}
            mt={4}
            // width="full"
            bgGradient={`linear(to-tl, ${color1}.300, ${color2}.300)`}
            color="white"
            type="submit"
            isFullWidth
            isLoading={isSubmitting}
            _hover={{
              bgGradient: `linear(to-tl, ${color1}.400, ${color2}.400)`,
            }}
            _active={{
              bgGradient: `linear(to-bl, ${color1}.500, ${color2}.500)`,
            }}
          >
            Submit Application
          </Button>
        </chakra.form>
      </>
    );
  },
);

if (__DEV__) {
  ContactForm.displayName = "ContactForm";
}

type T_FormModal = {
  finalFocusRef: React.RefObject<HTMLButtonElement>;
};

const FormModal: React.FC<T_FormModal> = memo(({ finalFocusRef }) => {
  // Resume/CV
  const [resume, setResume] = useState("");
  const initialRef = useRef<HTMLTextAreaElement>(null);
  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setResume(e.target.value);
  };
  // Modal
  const { isOpen, onOpen, onClose } = useDisclosure();

  const debouncedChangeHandler = useCallback(
    debounce(handleInputChange, 300),
    [],
  );

  const { register } = useForm<FormValues>();

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
  return (
    <>
      <HStack w="full">
        <FileUpload
          accept={"application/pdf,application/vnd.ms-excel"}
          register={register("file_", { validate: validateFiles })}
        >
          <Button
            bg={useColorModeValue("white", "gray.600")}
            leftIcon={<Icon as={FaRegFilePdf} />}
            w="full"
          >
            Attach
          </Button>
        </FileUpload>
        <Button
          fontFamily={"heading"}
          w="full"
          bg={useColorModeValue("white", "gray.600")}
          leftIcon={<Icon as={FaDropbox} />}
        >
          Dropbox
        </Button>
        <Button
          onClick={onOpen}
          fontFamily={"heading"}
          bg={useColorModeValue("white", "gray.600")}
          leftIcon={<Icon as={BiPaste} />}
          w="full"
        >
          Paste
        </Button>
      </HStack>
      {/* Paste Resume */}
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        initialFocusRef={initialRef}
        finalFocusRef={finalFocusRef}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Paste your Resume</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Textarea
              height={["auto", "auto", "350px"]}
              ref={initialRef}
              placeholder="Paste your resume/cv here"
              // value={resume}
              defaultValue={resume}
              onChange={debouncedChangeHandler}
              resize="vertical"
            />
          </ModalBody>

          <ModalFooter>
            <Button mr={3} colorScheme="blue" onClick={onClose}>
              Save
            </Button>
            <Button
              variant="ghost"
              colorScheme="red"
              onClick={() => {
                setResume("");
                initialRef.current.value = null;
              }}
            >
              Clear
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
});

if (__DEV__) {
  FormModal.displayName = "FormModal";
}

const SVGBlur: React.FC<ChakraProps & ThemingProps> = memo(
  ({ colorScheme = "gray", ...rest }) => {
    const [color1, color2] = ColorMatch(colorScheme);

    return (
      <Icon
        zIndex={-1}
        fill="none"
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

JoinOurTeamPage.PageLayout = memo(
  ({ children }: { children: React.ReactNode }) => {
    return <Layout footer={<></>}>{children}</Layout>;
  },
);

export default JoinOurTeamPage;
