import { yupResolver } from "@hookform/resolvers/yup";
import {
  FiUsers,
  BsCreditCard,
  FaInfo,
  FiUser,
  BsShieldShaded,
  BsBell,
  AiOutlinePercentage,
  BsTools,
  RiMapPinLine,
  MdAttachMoney,
} from "@react-icons";

import React, { memo, useContext, useState } from "react";

import {
  useForm,
  useController,
  UseControllerProps,
  Controller,
  FieldValues,
} from "react-hook-form";
import { IconType } from "react-icons";
import InputMask from "react-input-mask";
import * as yup from "yup";

import { NextSeo } from "next-seo";
import { useRouter } from "next/router";

import {
  Avatar,
  AvatarBadge,
  Box,
  Button,
  chakra,
  ChakraProps,
  Container,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  InputGroup,
  InputLeftAddon,
  InputRightAddon,
  Link,
  List,
  ListIcon,
  ListItem,
  Stack,
  StackDirection,
  Tag,
  Text,
  ThemingProps,
  useColorModeValue,
  useRadio,
  UseRadioProps,
  useRadioGroup,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";

import { ThemeColorContext } from "@definitions/context/theme";
import { __DEV__ } from "@definitions/utils";

import PageTitle from "@components/page-title";
import RichTextBlock from "@components/richtext";

import AvatarImage from "@assets/images/avatar/2f-square.jpg?size=256&img";

const AccountOverviewPage: React.FC = () => {
  const theme = useContext(ThemeColorContext);
  const color = theme.colorScheme; // global default primary theme color
  const bg = useColorModeValue("white", "gray.800");

  const menuItems = [
    {
      heading: "Account",
      items: [
        {
          title: "Profile",
          icon: FiUser,
          href: "/account/account-overview",
        },
        {
          title: "Security",
          icon: BsShieldShaded,
          href: "#",
        },
        {
          title: "Notifications",
          icon: BsBell,
          href: "#",
        },
        {
          title: "Preferences",
          icon: BsTools,
          href: "#",
        },
      ],
    },
    {
      heading: "Company",
      items: [
        {
          title: "Information",
          icon: FaInfo,
          href: "#",
        },
        {
          title: "Employees",
          tag: "27",
          icon: FiUsers,
          href: "#",
        },
        {
          title: "Payouts",
          icon: MdAttachMoney,
          href: "#",
        },
        {
          title: "Taxes",
          icon: AiOutlinePercentage,
          href: "#",
        },
      ],
    },
    {
      heading: "Billing",
      items: [
        {
          title: "Payments",
          icon: BsCreditCard,
          href: "#",
        },
        {
          title: "Address",
          tag: "2",
          icon: RiMapPinLine,
          href: "#",
        },
      ],
    },
  ];

  const data = {
    avatar: AvatarImage,
    username: "emmawatson",
    firstName: "Emma",
    lastName: "Watson",
    email: "emma.watson@google.com",
    gender: "Female",
    phone: "+1 (234) 56-788-9999",
    bio: '[{"type":"paragraph","children":[{"text":"Hello, my name is "},{"text":"Emma","bold":true},{"text":", I am a Computer Engineering graduate and I spent the spring of 2021 at "},{"text":"Google R&D Lab","underline":true},{"text":"."}]}]',
  };

  return (
    <>
      <NextSeo
        title="Account Overview"
        description="Mercury Account Overview Example Page"
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
          title="Account Overview"
          body="All your personal information."
          align="start"
        />
        <Container
          pos="relative"
          zIndex={2}
          mt={[10, 10, -16]}
          mb="10"
          maxW="container.xl"
        >
          <Stack
            w="full"
            spacing={[5, 5, 10]}
            direction={["column", "column", "row"]}
          >
            <Aside
              colorScheme={color}
              avatar={data.avatar}
              name={`${data.firstName} ${data.lastName}`}
              email={data.email}
              menu={menuItems}
            />
            <Flex
              direction={"column"}
              rounded="lg"
              p={[4, 8, 10, 20]}
              pt={[8, 8, 8, 14]}
              flex="4"
              w="full"
              bg={bg}
              shadow="xl"
            >
              {/* Page heading */}
              <Box mb={14}>
                <Heading>Profile</Heading>
                <Text>
                  This information will be displayed publicly so be careful what
                  you share.
                </Text>
              </Box>

              {/* Profile Form */}
              <ProfileForm mb={10} defaultFormData={data} colorScheme={color} />

              <hr />

              <Box mt={14}>
                <Heading mb={6} fontSize="xl" as="h3">
                  Delete your account
                </Heading>
                <Text mb={4}>
                  When you delete your account, you lose access to Mercury
                  account services, and we permanently delete your personal
                  data. You can cancel the deletion for 14 days.
                </Text>
                <Button whiteSpace="normal" variant="outline" colorScheme="red">
                  Permanently Delete
                </Button>
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

/* ---------------------------------- Aside --------------------------------- */

interface IAside extends ChakraProps, ThemingProps {
  avatar: imageObject;
  name: string;
  email: string;
  menu: {
    heading: string;
    items: {
      title: string;
      tag?: string;
      icon: IconType;
      href: string;
    }[];
  }[];
}

const Aside: React.FC<IAside> = memo(
  ({ colorScheme, avatar, name, email, menu }) => {
    const bg = useColorModeValue("white", "gray.900");

    const route = useRouter();

    const avatarBadgeStyle = {
      borderColor: bg,
      bg: useColorModeValue(`${colorScheme}.400`, `${colorScheme}.600`),
      color: "white",
    };

    const headingStyle: ChakraProps = {
      mx: 8,
      textTransform: "uppercase",
      fontSize: "sm",
    };

    const linkStyle = {
      d: "flex",
      alignItems: "center",
      height: 8,
      _hover: {
        // color: useColorModeValue(`${colorScheme}.400`, `${colorScheme}.200`),
        color: useColorModeValue(`${colorScheme}.400`, `whiteAlpha.800`),
        textDecoration: "none",
      },
    };

    const listItemStyle = {
      lineHeight: 2,
      height: 8,
      px: 8,
      _hover: {
        // bg: "gray.50",
        bg: useColorModeValue(`${colorScheme}.50`, `${colorScheme}.700`),
      },
    };

    const active = {
      borderLeft: "2px solid",
      bg: useColorModeValue(`${colorScheme}.50`, `${colorScheme}.800`),
      color: useColorModeValue(`${colorScheme}.400`, `${colorScheme}.100`),
      borderColor: useColorModeValue(
        `${colorScheme}.400`,
        `${colorScheme}.300`,
      ),
      fontWeight: "bold",
    };

    const isActive = ({ href }: { href: string }) => {
      if (route.pathname === href) return active;
      return null;
    };

    return (
      <Flex direction="column" flex="1" shadow="xl" rounded="lg" bg={bg}>
        <Stack
          px={[0, 0, 14]}
          pt={10}
          mb={8}
          spacing={2}
          w="full"
          align={"center"}
        >
          {/*
           * TODO: add srcSet to Avatar
           * srcSet={avatar?.srcSet}
           * issue: https://github.com/chakra-ui/chakra-ui/issues/5256
           */}
          <Avatar size="xl" src={avatar.src} name={name}>
            <AvatarBadge
              borderWidth={"3px"}
              boxSize={6}
              right={4}
              bottom={4}
              fontSize="0.8rem"
              lineHeight={1}
              {...avatarBadgeStyle}
            >
              ⭑
            </AvatarBadge>
          </Avatar>
          <Flex align="center" direction="column">
            {name && (
              <Heading lineHeight={1} fontSize="md">
                {name}
              </Heading>
            )}
            {email && <Text fontSize="sm">{email}</Text>}
          </Flex>
        </Stack>

        {menu.map((item, idx) => (
          <Stack key={idx} mb={8} spacing={5} w="full" align={"start"}>
            <Heading as="h3" {...headingStyle}>
              {item.heading}
            </Heading>
            <List w="full" spacing={1}>
              {item.items.map((i, index) => (
                <ListItem
                  {...isActive({ href: i.href })}
                  key={index}
                  {...listItemStyle}
                >
                  <Link {...linkStyle}>
                    <ListIcon as={i.icon} />
                    {i.title}
                    {i.tag ? (
                      <Tag rounded="full" ml={"auto"} size="sm">
                        {i.tag}
                      </Tag>
                    ) : (
                      <></>
                    )}
                  </Link>
                </ListItem>
              ))}
            </List>
          </Stack>
        ))}
      </Flex>
    );
  },
);
if (__DEV__) {
  Aside.displayName = "Aside";
}

/* ------------------------------ Profile Form ------------------------------ */
const phoneRegExp =
  /^$|((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
// Validation Schema
const schema = yup
  .object({
    username: yup
      .string()
      .min(4, "Username must be at least 4 characters long")
      .required("Username is a required field")
      .matches(
        /^[a-zA-Z0-9]+$/,
        "Username must contain only letters and digit",
      ),
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
    gender: yup.string().required("Gender is a required field"),
    phone: yup
      .string()
      .nullable(true)
      // .required("Phone is a required field")
      .matches(phoneRegExp, "Phone number is not valid")
      .transform((_, val) => (val === val ? val : null)),
  })
  .required();

interface IProfileFormValues {
  // eslint-disable-next-line no-undef
  avatar?: imageObject;
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  gender: string;
  phone?: string;
  bio?: string;
}

interface IProfileForm extends ChakraProps, ThemingProps {
  defaultFormData?: IProfileFormValues;
}

const ProfileForm: React.FC<IProfileForm> = memo(
  ({ defaultFormData, colorScheme, ...rest }) => {
    const [formData, setFormData] =
      useState<IProfileFormValues>(defaultFormData);

    const {
      control,
      // watch,
      handleSubmit, // handels the form submit event
      register, // ties the inputs to react-form
      setValue,
      getValues,
      formState: { errors, isSubmitting }, // gets errors and "loading" state
    } = useForm<IProfileFormValues>({
      defaultValues: formData,
      reValidateMode: "onBlur",
      resolver: yupResolver(schema),
    });

    const onSubmit = (data: IProfileFormValues) => {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(data);
          setFormData(data);
          alert(JSON.stringify(data, null, 2));
        }, 4000);
      });
    };
    const stackDirections: StackDirection = [
      "column",
      "column",
      "column",
      "row",
    ];
    return (
      <>
        <chakra.form onSubmit={handleSubmit(onSubmit)} noValidate {...rest}>
          <Stack spacing={4} w="full" direction="column">
            <FormControl size="lg" isRequired isInvalid={!!errors?.avatar}>
              <Stack w="full" direction={stackDirections}>
                <Flex flex="1">
                  <FormLabel>Avatar</FormLabel>
                </Flex>
                <Stack
                  align="center"
                  flex="2"
                  direction={["column", "column", "row"]}
                  spacing={6}
                >
                  <Avatar
                    size="lg"
                    src={getValues("avatar.src")}
                    name={getValues("avatar.src") ? formData.firstName : null}
                  />
                  <Wrap align="center" justify="center">
                    <WrapItem>
                      <Button colorScheme={colorScheme} variant={"outline"}>
                        Change Avatar
                      </Button>
                    </WrapItem>
                    <WrapItem>
                      <Button
                        onClick={() => setValue("avatar", null)}
                        colorScheme="red"
                        variant={"ghost"}
                      >
                        Delete
                      </Button>
                    </WrapItem>
                  </Wrap>
                </Stack>
              </Stack>
            </FormControl>

            <FormControl size="lg" isRequired isInvalid={!!errors?.username}>
              <Stack w="full" direction={stackDirections}>
                <Flex flex="1">
                  <FormLabel>Username</FormLabel>
                </Flex>
                <Flex flex="2" direction={"column"}>
                  <InputGroup>
                    <InputLeftAddon
                      d={["none", "flex", "flex"]}
                      children="https://"
                    />
                    <Input
                      placeholder="john.doe"
                      _placeholder={{ color: "gray.500" }}
                      {...register("username")}
                    />
                    <InputRightAddon
                      d={["none", "flex", "flex"]}
                      children=".themebiotic.com/"
                    />
                  </InputGroup>
                  <FormErrorMessage>
                    {errors?.username?.message}
                  </FormErrorMessage>
                </Flex>
              </Stack>
            </FormControl>

            <FormControl
              size="lg"
              isRequired
              isInvalid={!!errors?.firstName || !!errors?.lastName}
            >
              <Stack w="full" direction={stackDirections}>
                <Flex flex="1">
                  <FormLabel>Full Name</FormLabel>
                </Flex>
                <Flex flex="2" direction={"column"}>
                  <Stack w="full" direction={["column", "column", "row"]}>
                    <Box flex={1}>
                      <Input
                        placeholder="John"
                        _placeholder={{ color: "gray.500" }}
                        {...register("firstName")}
                      />
                      <FormErrorMessage>
                        {errors?.firstName?.message}
                      </FormErrorMessage>
                    </Box>
                    <Box flex={1}>
                      <Input
                        placeholder="Doe"
                        _placeholder={{ color: "gray.500" }}
                        {...register("lastName")}
                      />
                      <FormErrorMessage>
                        {errors?.lastName?.message}
                      </FormErrorMessage>
                    </Box>
                  </Stack>
                </Flex>
              </Stack>
            </FormControl>

            <FormControl isRequired isInvalid={!!errors?.email}>
              <Stack w="full" direction={stackDirections}>
                <Flex flex="1">
                  <FormLabel>Email</FormLabel>
                </Flex>
                <Flex flex="2" direction={"column"}>
                  <Input
                    placeholder="john.doe@example.com"
                    _placeholder={{ color: "gray.500" }}
                    {...register("email")}
                  />
                  <FormErrorMessage>{errors?.email?.message}</FormErrorMessage>
                </Flex>
              </Stack>
            </FormControl>

            <FormControl isInvalid={!!errors?.phone}>
              <Stack w="full" direction={stackDirections}>
                <Flex flex="1">
                  <FormLabel>Phone</FormLabel>
                </Flex>
                <Flex flex="2" direction={"column"}>
                  <Input
                    as={InputMask}
                    // alwaysShowMask
                    maskPlaceholder="+1 (___) __-___-___"
                    // maskChar={null}
                    mask="+9 (999) 99-999-9999"
                    {...register("phone")}
                  />
                  <FormErrorMessage>{errors?.phone?.message}</FormErrorMessage>
                </Flex>
              </Stack>
            </FormControl>

            <CustomRadioGroup
              direction={stackDirections}
              isRequired
              options={["Male", "Female", "No answer"]}
              colorScheme={colorScheme}
              control={control}
              name="gender"
              label="Gender"
            />

            <RichTextBlockControl
              colorScheme={colorScheme}
              direction={stackDirections}
              name="bio"
              label="Bio"
              control={control}
            />
          </Stack>
          <Stack mt={14} direction="row" justifyContent="end">
            {/* <Button
              onClick={() => reset()}
              colorScheme="red"
              variant="ghost"
              size="lg"
            >
              Reset
            </Button> */}
            <Button
              size="lg"
              type="submit"
              variant="outline"
              loadingText="Submitting"
              colorScheme={colorScheme}
              isLoading={isSubmitting}
            >
              Save changes
            </Button>
          </Stack>
        </chakra.form>
      </>
    );
  },
);
if (__DEV__) {
  ProfileForm.displayName = "ProfileForm";
}
/* --------------------------- Custom Radio Button -------------------------- */

const RadioCard: React.FC<UseRadioProps & ThemingProps> = (props) => {
  const { getInputProps, getCheckboxProps } = useRadio(props);

  const input = getInputProps();
  const checkbox = getCheckboxProps();

  const { children, colorScheme } = props;

  const style = {
    d: "flex",
    flex: "1",
    alignItems: "center",
    justifyContent: "center",
    color: useColorModeValue("gray.500", "gray.600"),
    // borderColor: useColorModeValue("gray.200", "gray.600"),
    borderColor: "inherit",
    borderRadius: "md",
    borderWidth: "1px",
    cursor: "pointer",
    fontWeight: "bold",
    transition: "all 300ms ease",
  };

  const hover = {
    color: useColorModeValue("gray.500", "gray.800"),
    borderColor: useColorModeValue(`gray.100`, `gray.600`),
    bg: useColorModeValue(`gray.100`, `gray.600`),
  };

  const active = {
    bg: useColorModeValue(`${colorScheme}.500`, `${colorScheme}.200`),
    borderColor: useColorModeValue(`${colorScheme}.500`, `${colorScheme}.200`),
    color: useColorModeValue(`white`, `gray.800`),
  };

  return (
    <Box flex="1" as="label">
      <input {...input} />
      <Box
        {...checkbox}
        {...style}
        _hover={hover}
        _checked={active}
        px={2}
        py={2}
      >
        {children}
      </Box>
    </Box>
  );
};
if (__DEV__) {
  RadioCard.displayName = "RadioCard";
}

interface ICustomRadioGroup<T> extends UseControllerProps<T>, ThemingProps {
  // control: Control<{ gender: string }>;
  // name: string;
  label: string;
  isRequired?: boolean;
  options: string[];
  direction?: StackDirection;
}

const CustomRadioGroup = <T extends FieldValues>({
  control,
  name,
  label,
  isRequired,
  options,
  colorScheme,
  direction,
}: ICustomRadioGroup<T>) => {
  const {
    field,
    formState: { errors },
  } = useController({
    control,
    name,
  });

  const { getRootProps, getRadioProps } = useRadioGroup({
    name,
    onChange: field.onChange,
    value: field.value,
  });

  const group = getRootProps();

  return (
    <FormControl isRequired={isRequired} isInvalid={!!errors[name]} mb={6}>
      <Stack w="full" direction={direction}>
        <Flex flex="1">
          <FormLabel>{label}</FormLabel>
        </Flex>
        <Flex direction="column" flex="2">
          <Stack direction={["column", "row", "row"]} w="full" {...group}>
            {options.map((value) => {
              const radio = getRadioProps({ value });
              return (
                <RadioCard colorScheme={colorScheme} key={value} {...radio}>
                  {value}
                </RadioCard>
              );
            })}
          </Stack>
          <FormErrorMessage>
            {errors[name] && errors[name].message}
          </FormErrorMessage>
        </Flex>
      </Stack>
    </FormControl>
  );
};

if (__DEV__) {
  CustomRadioGroup.displayName = "CustomRadioGroup";
}

interface IRichTextBlockControl<T> extends UseControllerProps<T>, ThemingProps {
  // control: Control<{ gender: string }>;
  // name: string;
  label: string;
  isRequired?: boolean;
  direction?: StackDirection;
}
const RichTextBlockControl = <T extends FieldValues>({
  control,
  name,
  label,
  isRequired,
  colorScheme,
  direction,
}: IRichTextBlockControl<T>) => {
  return (
    <Controller
      control={control}
      name={name}
      render={({
        field: { onChange, value },
        fieldState: { invalid, error },
      }) => (
        <FormControl isRequired={isRequired} isInvalid={invalid}>
          <Stack w="full" direction={direction}>
            <Flex flex="1">
              <FormLabel>{label}</FormLabel>
            </Flex>
            <Flex flex="2" direction={"column"}>
              <RichTextBlock
                defaultValue={value}
                colorScheme={colorScheme}
                // onBlur={onBlur} // notify when input is touched
                onChange={onChange} // send value to hook form
                // inputRef={ref}
              />
              {/* <FormErrorMessage> */}
              <pre>{JSON.stringify(error, undefined, 2)}</pre>
              {/* </FormErrorMessage> */}
            </Flex>
          </Stack>
        </FormControl>
      )}
    />
  );
};

if (__DEV__) {
  RichTextBlockControl.displayName = "RichTextBlockControl";
}

if (__DEV__) {
  AccountOverviewPage.displayName = "AccountOverviewPage";
}

export default AccountOverviewPage;
