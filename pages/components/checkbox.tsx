import { useContext, useState } from "react";

import { NextSeo } from "next-seo";

import { EmailIcon, LockIcon, MoonIcon } from "@chakra-ui/icons";
import {
  Box,
  chakra,
  Checkbox,
  CheckboxGroup,
  SimpleGrid,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";

import { ThemeColorContext } from "@definitions/context/theme";

import { Section, SectionHeading, SectionSubHeading } from "@components/common";
import PageTitle from "@components/page-title";

function IndeterminateExample() {
  const fruits = ["Apple", "Banana", "Blueberries", "Citrus", "Mango"];

  const [checkedItems, setCheckedItems] = useState(
    Array(fruits.length).fill(false),
  );

  const setItem = (index: number, val: boolean) => {
    const _items = [...checkedItems];
    _items[index] = val;
    setCheckedItems(_items);
  };

  const setAllItems = (val: boolean) => {
    const _items = Array(fruits.length).fill(val);
    setCheckedItems(_items);
  };

  const allChecked = checkedItems.every(Boolean);
  const isIndeterminate = checkedItems.some(Boolean) && !allChecked;

  return (
    <>
      <Checkbox
        colorScheme="yellow"
        isChecked={allChecked}
        isIndeterminate={isIndeterminate}
        onChange={(e) => setAllItems(e.target.checked)}
      >
        Fruits
      </Checkbox>
      <Stack pl={6} mt={1} spacing={1}>
        {fruits.map((i, idx) => (
          <Checkbox
            colorScheme="yellow"
            key={idx}
            isChecked={checkedItems[idx]}
            onChange={(e) => setItem(idx, e.target.checked)}
          >
            {i}
          </Checkbox>
        ))}
      </Stack>
    </>
  );
}

const CheckboxPage: React.FC = (): JSX.Element => {
  const theme = useContext(ThemeColorContext);
  const color = theme.colorScheme; // global default primary theme color
  return (
    <>
      <NextSeo
        title="Checkbox Component"
        description="Checkbox Component Examples"
      />
      <PageTitle
        title="Checkbox Component"
        body="Here are a few examples of what you can do using the checkbox component."
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
        <SectionHeading mt={10}>Basic usage of checkboxes</SectionHeading>
        <Stack
          justify="center"
          align="center"
          mb={20}
          spacing={20}
          direction="column"
        >
          <SimpleGrid
            w="full"
            mb={0}
            columns={{ base: 1, md: 1, lg: 3 }}
            spacing={10}
          >
            <Section alignItems="center" my={0}>
              <SectionSubHeading>Default checkbox</SectionSubHeading>
              <Checkbox defaultIsChecked>Checkbox</Checkbox>
            </Section>

            <Section my={0}>
              <SectionSubHeading>Disabled checkbox</SectionSubHeading>
              <Stack justify="center" spacing={10} direction="row">
                <Checkbox isDisabled>Checkbox</Checkbox>
                <Checkbox isDisabled defaultIsChecked>
                  Checkbox
                </Checkbox>
              </Stack>
            </Section>

            <Section my={0}>
              <SectionSubHeading>Checkbox with custom color</SectionSubHeading>
              <Stack justify="center" spacing={10} direction="row">
                <Checkbox colorScheme="red" defaultIsChecked>
                  Checkbox
                </Checkbox>
                <Checkbox colorScheme="green" defaultIsChecked>
                  Checkbox
                </Checkbox>
              </Stack>
            </Section>
          </SimpleGrid>

          <Section my={0} textAlign="center">
            <SectionSubHeading>Checkbox sizes</SectionSubHeading>
            <Stack
              justify="center"
              alignItems="center"
              spacing={[2, 2, 10]}
              direction={["column", "column", "row"]}
            >
              <Checkbox size="sm" colorScheme="red">
                Small Checkbox
              </Checkbox>
              <Checkbox size="md" colorScheme="green" defaultIsChecked>
                Medium Checkbox
              </Checkbox>
              <Checkbox size="lg" colorScheme="orange" defaultIsChecked>
                Large Checkbox
              </Checkbox>
            </Stack>
          </Section>

          <SimpleGrid
            w="full"
            mb={0}
            columns={{ base: 1, md: 3, lg: 3 }}
            spacing={10}
          >
            <Section alignItems="center" my={0}>
              <SectionSubHeading>Invalid Checkbox</SectionSubHeading>
              <Checkbox isInvalid>I accept the terms</Checkbox>
            </Section>

            <Section my={0}>
              <SectionSubHeading>Customizable space</SectionSubHeading>
              <Stack justify="center" spacing={10} direction="row">
                <Checkbox>Default</Checkbox>
                <Checkbox spacing="40px">40px</Checkbox>
              </Stack>
            </Section>

            <Section alignItems="center" my={0}>
              <SectionSubHeading>Custom icon color</SectionSubHeading>
              <Checkbox
                colorScheme="purple"
                iconColor="yellow.300"
                iconSize="10px"
              >
                Purple & Yellow
              </Checkbox>
            </Section>
          </SimpleGrid>

          <SimpleGrid
            maxW="container.md"
            mb={0}
            spacing={10}
            columns={{ base: 1, md: 2, lg: 2 }}
          >
            <Section my={0} alignItems="center">
              <SectionSubHeading>Indeterminate</SectionSubHeading>
              <Box>
                <IndeterminateExample />
              </Box>
            </Section>

            <Section my={0} alignItems="center">
              <SectionSubHeading>Checkbox with custom icon</SectionSubHeading>
              <Checkbox w="120px" icon={<EmailIcon />} colorScheme="orange">
                Send Me
              </Checkbox>
              <Checkbox
                defaultIsChecked
                w="120px"
                icon={<LockIcon />}
                colorScheme="green"
              >
                Security
              </Checkbox>
              <Checkbox
                defaultIsChecked
                w="120px"
                icon={<MoonIcon />}
                colorScheme="purple"
              >
                Dark Theme
              </Checkbox>
            </Section>
          </SimpleGrid>

          <Section my={0} alignItems="center">
            <SectionSubHeading>Checkbox Group</SectionSubHeading>
            <CheckboxGroup
              colorScheme="green"
              defaultValue={["helvetica", "futura", "garamond"]}
            >
              <Stack direction={["column", "column", "row"]}>
                <Checkbox value="helvetica">Helvetica</Checkbox>
                <Checkbox value="calibri">Calibri</Checkbox>
                <Checkbox value="futura">Futura</Checkbox>
                <Checkbox value="garamond">Garamond</Checkbox>
                <Checkbox value="timesnewroman">Times New Roman</Checkbox>
              </Stack>
              <Text
                mt={4}
                textAlign="center"
                color={"gray.500"}
                fontSize="xs"
                maxW="300px"
              >
                Checkbox group to help manage the checked state of its children
                checkboxes.
              </Text>
            </CheckboxGroup>
          </Section>
        </Stack>
      </chakra.main>
    </>
  );
};

export default CheckboxPage;
