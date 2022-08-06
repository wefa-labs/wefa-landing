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
  icon: React.ComponentType;
  description?: string;
  content: React.ReactNode;
};

export const StepsCustomIcons: React.FC<ISteps> = ({
  steps,
  colorScheme,
}): JSX.Element => {
  const { nextStep, prevStep, reset, activeStep } = useSteps({
    initialStep: 0,
  });
  return (
    <VStack spacing={6} width="100%">
      <Steps colorScheme={colorScheme} textAlign="left" activeStep={activeStep}>
        {steps.map(({ label, content, icon }) => (
          <Step label={label} key={label} icon={icon}>
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
