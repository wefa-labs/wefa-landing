import { Step, Steps, useSteps } from "chakra-ui-steps";

import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  CloseButton,
  Box,
  VStack,
} from "@chakra-ui/react";

import { StepButtons } from "./steps-buttons";

interface ISteps {
  steps: IStep[];
  colorScheme?: string;
}

type IStep = {
  label: string;
  description?: string;
  content: React.ReactNode;
};

export const StepsVertical: React.FC<ISteps> = ({
  steps,
  colorScheme,
}): JSX.Element => {
  const { nextStep, prevStep, reset, activeStep } = useSteps({
    initialStep: 0,
  });
  return (
    <VStack width="100%">
      <Steps
        colorScheme={colorScheme}
        textAlign={"left"}
        orientation="vertical"
        activeStep={activeStep}
      >
        {steps.map(({ label, content }) => (
          <Step label={label} key={label}>
            {content}
          </Step>
        ))}
      </Steps>
      {activeStep === 3 ? (
        <Alert rounded="md" status="success">
          <AlertIcon />
          <Box flex="1">
            <AlertTitle>Application submitted!</AlertTitle>
            <AlertDescription display="block">
              Your application has been received. We will review your
              application and respond within the next 48 hours.
            </AlertDescription>
          </Box>
          <CloseButton
            onClick={reset}
            position="absolute"
            right="8px"
            top="8px"
          />
        </Alert>
      ) : (
        <StepButtons
          {...{ nextStep, prevStep }}
          prevDisabled={activeStep === 0}
        />
      )}
    </VStack>
  );
};
