import { Step, Steps, useSteps } from "chakra-ui-steps";

import { CloseButton, Box, VStack, ChakraProps } from "@chakra-ui/react";

import { StepButtons } from "./steps-buttons";

interface ISteps extends ChakraProps {
  steps: IStep[];
  colorScheme?: string;
  children: React.ReactNode;
}

type IStep = {
  label: string;
  description?: string;
  content: React.ReactNode;
};

export const StepsDefault: React.FC<ISteps> = ({
  steps,
  colorScheme,
  children,
}): JSX.Element => {
  const { nextStep, prevStep, reset, activeStep } = useSteps({
    initialStep: 0,
  });
  return (
    <VStack spacing={6} width="100%">
      <Steps colorScheme={colorScheme} textAlign="left" activeStep={activeStep}>
        {steps.map(({ label, content }) => (
          <Step label={label} key={label}>
            {content}
          </Step>
        ))}
      </Steps>
      {activeStep === 3 ? (
        <Box pos="relative">
          {children}
          <CloseButton
            onClick={reset}
            position="absolute"
            right="8px"
            top="8px"
          />
        </Box>
      ) : (
        <StepButtons
          {...{ nextStep, prevStep }}
          prevDisabled={activeStep === 0}
        />
      )}
    </VStack>
  );
};
