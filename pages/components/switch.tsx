import { memo, useState } from "react";

import { NextSeo } from "next-seo";

import {
  chakra,
  ChakraProps,
  Code,
  Container,
  Flex,
  FormControl,
  FormLabel,
  HStack,
  Stack,
  Switch,
  ThemingProps,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";

import {
  Section,
  SectionSubHeading,
  SectionHeading,
  ColorSelector,
} from "@components/common";
import PageTitle from "@components/page-title";

const SwitchPage: React.FC = (): JSX.Element => {
  const [color, setColor] = useState("purple");

  return (
    <>
      <NextSeo
        title="Switch Component"
        description="Switch Component Examples"
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
          title="Switch Component"
          body="Here are a few examples of what you can do using the switch component."
        />
        <Container maxW="container.xl">
          <Flex justify="center" py={8}>
            <ColorSelector
              initColor={color}
              onClick={(e) => setColor(e.currentTarget.name)}
            />
          </Flex>
        </Container>
        <VStack align="stretch" mb={[8, 12, 16]} spacing={[8, 12, 16]}>
          {/* Default switch */}
          <Container maxW="container.xl">
            <VStack>
              <SectionHeading mb={8}>Default switch</SectionHeading>
              <Flex direction="row" justify="center" align="center">
                <SectionSubHeading mb={0} mr={4}>
                  ON/OFF
                </SectionSubHeading>
                <Switch colorScheme={color} />
              </Flex>
            </VStack>
          </Container>

          {/* Switch sizes */}
          <Section>
            <Container maxW="container.xl">
              <VStack>
                <SectionHeading mb={6}>Switch sizes</SectionHeading>
                <Stack
                  spacing={[4, 10, 10]}
                  justify="center"
                  align="center"
                  direction={["column", "row", "row"]}
                >
                  <Flex direction="row" justify="center" align="center">
                    <SectionSubHeading mb={0} mr={4}>
                      Small
                    </SectionSubHeading>
                    <Switch colorScheme={color} size="sm" />
                  </Flex>
                  <Flex direction="row" justify="center" align="center">
                    <SectionSubHeading mb={0} mr={4}>
                      Normal
                    </SectionSubHeading>
                    <Switch defaultChecked colorScheme={color} />
                  </Flex>
                  <Flex direction="row" justify="center" align="center">
                    <SectionSubHeading mb={0} mr={4}>
                      Large
                    </SectionSubHeading>
                    <Switch colorScheme={color} size="lg" />
                  </Flex>
                </Stack>
              </VStack>
            </Container>
          </Section>

          {/* State Behaviors */}
          <Section>
            <Container maxW="container.xl">
              <SectionHeading mb={6}>State behaviors</SectionHeading>
              <Stack
                direction={["column", "row", "row"]}
                justify="center"
                spacing={[8, 14, 20]}
              >
                <VStack>
                  <HStack>
                    <FormLabel minW={120} m={0} htmlFor="isChecked">
                      isChecked:
                    </FormLabel>
                    <Switch id="isChecked" colorScheme={color} isChecked />
                  </HStack>

                  <HStack>
                    <FormLabel minW={120} m={0} htmlFor="isDisabled">
                      isDisabled:
                    </FormLabel>
                    <Switch
                      id="isDisabled"
                      colorScheme={color}
                      isDisabled
                      defaultChecked
                    />
                  </HStack>

                  <HStack>
                    <FormLabel minW={120} m={0} htmlFor="isFocusable">
                      isFocusable:
                    </FormLabel>
                    <Switch
                      id="isFocusable"
                      colorScheme={color}
                      isFocusable
                      isDisabled
                    />
                  </HStack>
                </VStack>

                <VStack>
                  <HStack>
                    <FormLabel minW={120} m={0} htmlFor="isInvalid">
                      isInvalid:
                    </FormLabel>
                    <Switch id="isInvalid" colorScheme={color} isInvalid />
                  </HStack>

                  <HStack>
                    <FormLabel minW={120} m={0} htmlFor="isReadOnly">
                      isReadOnly:
                    </FormLabel>
                    <Switch id="isReadOnly" colorScheme={color} isReadOnly />
                  </HStack>

                  <HStack>
                    <FormLabel minW={120} m={0} htmlFor="isRequired">
                      isRequired:
                    </FormLabel>
                    <Switch id="isRequired" colorScheme={color} isRequired />
                  </HStack>
                </VStack>
              </Stack>
            </Container>
          </Section>

          {/* Exmple usage */}
          <Section>
            <SectionHeading mb={6}>Example usage</SectionHeading>
            <ExampleUsage colorScheme={color} />
          </Section>
        </VStack>
      </chakra.main>
    </>
  );
};

const ExampleUsage: React.FC<ChakraProps & ThemingProps> = memo(
  ({ colorScheme }) => {
    const [example, setExample] = useState(false);
    return (
      <>
        <FormControl
          mb={4}
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <FormLabel htmlFor="send-me-a-copy" mb="0">
            Send me a copy
          </FormLabel>
          <Switch
            id="send-me-a-copy"
            colorScheme={colorScheme}
            onChange={(event) => setExample(event.target.checked)}
          />
        </FormControl>
        <Flex justify="center">
          <Code w="full" maxW={["unset", 240, 240]} p={2} rounded="lg">
            <pre>{JSON.stringify({ "Send me a copy": example }, null, 2)}</pre>
          </Code>
        </Flex>
      </>
    );
  },
);

export default SwitchPage;
