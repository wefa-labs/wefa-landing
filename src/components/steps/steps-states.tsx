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
  state: "loading" | "error" | undefined;
  colorScheme?: string;
}

type IStep = {
  label: string;
  description?: string;
  content: React.ReactNode;
};

// type StateValue = "loading" | "error" | undefined;

export const StepsStates: React.FC<ISteps> = ({
  steps,
  state,
  colorScheme,
}): JSX.Element => {
  const { nextStep, prevStep, reset, activeStep } = useSteps({
    initialStep: 0,
  });
  return (
    <VStack spacing={6} width="100%">
      <Steps colorScheme={colorScheme} state={state} activeStep={activeStep}>
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
