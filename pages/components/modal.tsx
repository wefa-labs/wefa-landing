import { useContext } from "react";

import { NextSeo } from "next-seo";

import {
  Button,
  ButtonGroup,
  Center,
  chakra,
  Container,
  Flex,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  SimpleGrid,
  Text,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";

import { ThemeColorContext } from "@definitions/context/theme";

import { Section, SectionHeading, SectionSubHeading } from "@components/common";
import Highlight from "@components/highlight";
import PageTitle from "@components/page-title";

const ModalPage: React.FC = (): JSX.Element => {
  const theme = useContext(ThemeColorContext);
  const color = theme.colorScheme; // global default primary theme color
  return (
    <>
      <NextSeo title="Modal Component" description="Modal Component Examples" />
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
          title="Modal Component"
          body={
            <Text as="div">
              On this page, you will find{" "}
              <Text as="div" display="inline-block" color="green.400">
                <Highlight strokeWidth={2}>
                  <b>1 example</b>
                </Highlight>
              </Text>{" "}
              of modal component that you can easily use on your pages.
            </Text>
          }
        />

        <Container maxW="container.xl">
          <SectionHeading mb={6} mt={20}>
            Modal Examples
          </SectionHeading>
          <SimpleGrid
            columns={{ base: 1, sm: 2, md: 4 }}
            spacing={{ base: 4, md: 10 }}
          >
            <Section>
              <SectionSubHeading mb={6}>Basic Modal</SectionSubHeading>
              <Center>
                <BasicUsage colorScheme={color} />
              </Center>
            </Section>
            <Section>
              <SectionSubHeading mb={6}>Scrolling Enabled</SectionSubHeading>
              <Center>
                <BasicUsage colorScheme={color} blockScrollOnMount={false} />
              </Center>
            </Section>
            <Section>
              <SectionSubHeading mb={6}>
                Overlay Click Disabled
              </SectionSubHeading>
              <Center>
                <BasicUsage colorScheme={color} closeOnOverlayClick={false} />
              </Center>
            </Section>
            <Section>
              <SectionSubHeading mb={6}>Vertically Centered</SectionSubHeading>
              <Center>
                <BasicUsage colorScheme={color} isCentered />
              </Center>
            </Section>
          </SimpleGrid>
          <SimpleGrid
            columns={{ base: 1, md: 3 }}
            spacing={{ base: 4, md: 10 }}
          >
            <Section>
              <SectionSubHeading mb={6}>
                Different Transitions
              </SectionSubHeading>
              <Center>
                <ButtonGroup>
                  <BasicUsage
                    colorScheme={color}
                    buttonText="Bottom"
                    motionPreset="slideInBottom"
                  />
                  <BasicUsage
                    colorScheme={color}
                    buttonText="Right"
                    motionPreset="slideInRight"
                  />
                  <BasicUsage
                    colorScheme={color}
                    buttonText="Scale"
                    motionPreset="scale"
                  />
                </ButtonGroup>
              </Center>
            </Section>
            <Section>
              <SectionSubHeading mb={6}>Overflow behavior</SectionSubHeading>
              <Center>
                <ButtonGroup>
                  <BasicUsage
                    colorScheme={color}
                    buttonText="Inside"
                    scrollBehavior="inside"
                  />
                  <BasicUsage
                    colorScheme={color}
                    buttonText="Outside"
                    scrollBehavior="outside"
                  />
                </ButtonGroup>
              </Center>
            </Section>
            <Section>
              <SectionSubHeading mb={6}>Modal Sizes</SectionSubHeading>
              <Flex
                align="center"
                justify="center"
                direction={["row", "row", "column"]}
              >
                <ButtonGroup mr={{ base: 2, md: 0 }} mb={{ base: 0, md: 2 }}>
                  <BasicUsage colorScheme={color} buttonText="xs" size="xs" />
                  <BasicUsage colorScheme={color} buttonText="sm" size="sm" />
                  <BasicUsage colorScheme={color} buttonText="md" size="md" />
                </ButtonGroup>
                <ButtonGroup>
                  <BasicUsage colorScheme={color} buttonText="lg" size="lg" />
                  <BasicUsage colorScheme={color} buttonText="xl" size="xl" />
                  <BasicUsage
                    colorScheme={color}
                    buttonText="full"
                    size="full"
                  />
                </ButtonGroup>
              </Flex>
            </Section>
          </SimpleGrid>
        </Container>
      </chakra.main>
    </>
  );
};

interface IBasicUsage {
  buttonText?: string;
  blockScrollOnMount?: boolean;
  scrollBehavior?: "inside" | "outside" | undefined;
  closeOnOverlayClick?: boolean;
  isCentered?: boolean;
  size?: "xs" | "sm" | "md" | "lg" | "xl" | "full" | undefined;
  motionPreset?: "slideInBottom" | "slideInRight" | "scale" | "none";
  colorScheme?: string;
}

const BasicUsage: React.FC<IBasicUsage> = ({
  buttonText,
  colorScheme,
  ...rest
}): JSX.Element => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button onClick={onOpen}>{buttonText ? buttonText : "Open Modal"}</Button>

      <Modal isOpen={isOpen} onClose={onClose} {...rest}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text>
              Salutantibus vitae elit libero, a pharetra augue. Curabitur
              blandit tempus ardua ridiculus sed magna. Magna pars studiorum,
              prodita quaerimus. Donec sed odio operae, eu vulputate felis
              rhoncus. Phasellus laoreet lorem vel dolor tempus vehicula.
            </Text>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme={colorScheme} mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant="ghost">Secondary Action</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ModalPage;
