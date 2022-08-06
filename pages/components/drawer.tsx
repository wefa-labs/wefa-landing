import { memo, useRef, useState } from "react";

import { NextSeo } from "next-seo";

import {
  Box,
  Button,
  Center,
  chakra,
  Container,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Input,
  Kbd,
  Radio,
  RadioGroup,
  SlideDirection,
  Stack,
  Text,
  useDisclosure,
} from "@chakra-ui/react";

import { Section, SectionHeading, SectionSubHeading } from "@components/common";
import PageTitle from "@components/page-title";

const DrawerPage: React.FC = (): JSX.Element => {
  return (
    <>
      <NextSeo
        title="Drawer Component"
        description="Drawer Component Examples"
      />
      <chakra.main>
        <PageTitle
          title="Drawer Component"
          body="Here are a few examples of what you can do using the drawer component."
        />
        <Container maxW="container.xl">
          <Section w="full" maxW="container.xl">
            <SectionHeading>Drawer Usage</SectionHeading>
            <Stack
              spacing={10}
              justify="center"
              direction={["column", "column", "row"]}
              maxW="container.xl"
              w="full"
            >
              <Flex direction="column" w="full">
                <SectionSubHeading>Placement</SectionSubHeading>
                <PlacementExample />
              </Flex>

              <Flex direction="column" order={0} justify="center" w="full">
                <SectionSubHeading mb={[4, 4, "auto"]}>
                  Simple
                </SectionSubHeading>
                <Center>
                  <DrawerRightExample />
                </Center>
              </Flex>

              <Flex direction="column" w="full">
                <SectionSubHeading>Sizes</SectionSubHeading>
                <SizeExample />
              </Flex>
            </Stack>
          </Section>
        </Container>
      </chakra.main>
    </>
  );
};

const DrawerRightExample: React.FC = memo(() => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef() as React.LegacyRef<HTMLButtonElement>;

  return (
    <>
      <Button ref={btnRef} colorScheme="teal" onClick={onOpen}>
        Simple Drawer
      </Button>
      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Drawer Right</DrawerHeader>

          <DrawerBody>
            <Input placeholder="Type here..." />
          </DrawerBody>

          <DrawerFooter>
            <Button variant="outline" mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme="blue">Save</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
});

const PlacementExample: React.FC = memo(() => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [placement, setPlacement] = useState("top");

  return (
    <Stack justify="center" align="center" direction="column">
      <RadioGroup defaultValue={placement} onChange={setPlacement}>
        <Stack wrap="wrap" justify="center" direction="row" mb="4">
          <Radio value="top">Top</Radio>
          <Radio value="right">Right</Radio>
          <Radio value="bottom">Bottom</Radio>
          <Radio value="left">Left</Radio>
        </Stack>
      </RadioGroup>
      <Button colorScheme="blue" onClick={onOpen}>
        Open
      </Button>
      <Drawer
        placement={placement as SlideDirection}
        onClose={onClose}
        isOpen={isOpen}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader borderBottomWidth="1px">
            Drawer to {placement}
          </DrawerHeader>
          <DrawerBody>
            <Text>
              Qui ipsorum lingua Celtae, nostra Galli appellantur. Praeterea
              iter est quasdam res quas ex communi. Quae vero auctorem tractata
              ab fiducia dicuntur. Curabitur est gravida et libero vitae dictum.
              Cum sociis natoque penatibus et magnis dis parturient. Inmensae
              subtilitatis, obscuris et malesuada fames.
            </Text>
          </DrawerBody>
          <DrawerFooter>
            <Button size="sm" variant="outline" mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button size="sm" colorScheme="green">
              Action
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </Stack>
  );
});

const SizeExample: React.FC = memo(() => {
  const [size, setSize] = useState("md");
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleClick = (newSize: string) => {
    setSize(newSize);
    // onOpen();
  };

  const sizes = ["xs", "sm", "md", "lg", "xl", "full"];

  return (
    <Stack justify="center" align="center" direction="column">
      <RadioGroup defaultValue={size} onChange={handleClick}>
        <Stack justify="center" wrap="wrap" direction="row" mb="4">
          {sizes.map((size) => (
            <Radio key={size} value={size}>
              {size.toUpperCase()}
            </Radio>
          ))}
        </Stack>
      </RadioGroup>
      <Button colorScheme="blue" onClick={onOpen}>
        Drawer Widths
      </Button>
      <Drawer onClose={onClose} isOpen={isOpen} size={size}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>{`Drawer Width ${size.toUpperCase()}`}</DrawerHeader>
          <DrawerBody>
            {size === "full" ? (
              <Text>
                You're trapped 😆 , refresh the page to leave or press{" "}
                <Kbd>ESC</Kbd> key.
              </Text>
            ) : (
              <Text>
                Press <Kbd>ESC</Kbd> key to close drawer
              </Text>
            )}
            <Box mt={10}>
              <Text>
                Qui ipsorum lingua Celtae, nostra Galli appellantur. Praeterea
                iter est quasdam res quas ex communi. Quae vero auctorem
                tractata ab fiducia dicuntur. Curabitur est gravida et libero
                vitae dictum. Cum sociis natoque penatibus et magnis dis
                parturient. Inmensae subtilitatis, obscuris et malesuada fames.
              </Text>
            </Box>
          </DrawerBody>
          <DrawerFooter>
            <Button variant="outline" mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme="green">Action</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </Stack>
  );
});

export default DrawerPage;
