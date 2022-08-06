import { FiClipboard, FiDollarSign, FiUser } from "@react-icons";

import { useContext, useState } from "react";

import { NextSeo } from "next-seo";

import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  Box,
  VStack,
  HStack,
  Flex,
  Radio,
  RadioGroup,
  Text,
  Container,
} from "@chakra-ui/react";

import { ThemeColorContext } from "@definitions/context/theme";

import { ColorSelector, SectionHeading } from "@components/common";
import Highlight from "@components/highlight";
import PageTitle from "@components/page-title";
import { StepsCustomIcons } from "@components/steps/steps-custom-icons";
import { StepsDefault } from "@components/steps/steps-default";
import { StepsDescriptions } from "@components/steps/steps-descriptions";
import { StepsStates } from "@components/steps/steps-states";
import { StepsVertical } from "@components/steps/steps-vertical";

const content = (
  <Flex py={4}>
    <Text>
      Excepteur sint obcaecat cupiditat non proident culpa. Prima luce, cum
      quibus mons aliud consensu ab eo. At nos hinc posthac, sitientis piros
      Afros. Gallia est omnis divisa in partes tres, quarum. Quisque ut dolor
      gravida, placerat libero vel, euismod. Morbi odio eros, volutpat ut
      pharetra vitae, lobortis sed nibh.
    </Text>
  </Flex>
);

const steps = [
  { label: "Step 1", description: "Step 1 description", content },
  { label: "Step 2", description: "Step 2 description", content },
  { label: "Step 3", description: "Step 3 description", content },
];

const stepsIcon = [
  { label: "Login", icon: FiUser, description: "Step 1 description", content },
  {
    label: "Verification",
    icon: FiClipboard,
    description: "Step 2 description",
    content,
  },
  {
    label: "Pay",
    icon: FiDollarSign,
    description: "Step 3 description",
    content,
  },
];

type StateValue = "loading" | "error" | undefined;

const StepsPage: React.FC = (): JSX.Element => {
  const theme = useContext(ThemeColorContext);
  const globalColor = theme.colorScheme; // global default primary theme color
  const [stepState, setStepState] = useState<StateValue>("loading");
  const [color, setColor] = useState(globalColor);
  return (
    <>
      <NextSeo title="Steps Component" description="Steps Component Examples" />
      <main>
        <PageTitle
          title="Steps Component"
          body={
            <Text as="div">
              On this page, you will find{" "}
              <Text as="div" display="inline-block" color="green.400">
                <Highlight strokeWidth={2}>
                  <b>6 examples</b>
                </Highlight>
              </Text>{" "}
              of steps component that you can easily use on your pages.
            </Text>
          }
        />
        <Container maxW="container.sm">
          <Flex pt={10} justify="center">
            <ColorSelector
              initColor={color}
              onClick={(e) => setColor(e.currentTarget.name)}
            />
          </Flex>
          <Flex align="center" justify="center">
            <Box w="100%" py={20}>
              <SectionHeading>Default Steps</SectionHeading>
              <StepsDefault colorScheme={color} steps={steps}>
                <Alert rounded="md" status="info">
                  <AlertIcon />
                  <Box flex="1">
                    <AlertTitle>Application submitted!</AlertTitle>
                    <AlertDescription display="block">
                      Your application has been received. We will review your
                      application and respond within the next 48 hours.
                    </AlertDescription>
                  </Box>
                </Alert>
              </StepsDefault>
            </Box>
          </Flex>

          <SectionHeading>Vertical Steps</SectionHeading>
          <Box w="100%" py={20}>
            <StepsVertical colorScheme={color} steps={steps} />
          </Box>

          <SectionHeading>Steps with descriptions</SectionHeading>
          <Box py={10}>
            <StepsDescriptions colorScheme={color} steps={steps}>
              <Alert rounded="md" status="info">
                <AlertIcon />
                <Box flex="1">
                  <AlertTitle>Application submitted!</AlertTitle>
                  <AlertDescription display="block">
                    Your application has been received. We will review your
                    application and respond within the next 48 hours.
                  </AlertDescription>
                </Box>
              </Alert>
            </StepsDescriptions>
          </Box>

          <SectionHeading>Steps States</SectionHeading>
          <Box py={10}>
            <VStack width="100%" mb={8} align="flex-start">
              <RadioGroup
                defaultValue="loading"
                onChange={(val) => setStepState(val as StateValue)}
              >
                <HStack direction="row">
                  <Radio value="loading">Loading</Radio>
                  <Radio value="error">Error</Radio>
                </HStack>
              </RadioGroup>
            </VStack>
            <StepsStates colorScheme={color} state={stepState} steps={steps} />
          </Box>

          <SectionHeading>Custom Icons</SectionHeading>
          <Box py={10}>
            <StepsCustomIcons colorScheme={color} steps={stepsIcon} />
          </Box>
        </Container>
      </main>
    </>
  );
};

export default StepsPage;
