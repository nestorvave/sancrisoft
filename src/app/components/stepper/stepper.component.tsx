import {
  StepperContainer,
  StepperSection,
  Step,
  StepperLabels,
  StepperLabel,
} from "./stepper.styles";

import { useStepper } from "./hooks/useStepper";
import { IStepperProps, STEPS } from "./stepper-constants";

export const Stepper = () => {
  const { handleStepClick, getStepStatus, renderStepContent, currentStep } =
    useStepper();

  return (
    <StepperContainer>
      <StepperSection role="list">
        {STEPS.map(({ step }: IStepperProps, index) => {
          const stepValue = Number(step);
          const status = getStepStatus(stepValue);

          return (
            <Step
              key={index}
              $canGoBack={stepValue < currentStep}
              $status={status}
              onClick={() => handleStepClick(stepValue)}
              aria-current={stepValue === currentStep ? "step" : undefined}
              role="listitem"
              aria-label={`Step ${stepValue} ${status}`}
              onKeyDown={(e) => {
                if (e.key === "Enter") handleStepClick(stepValue);
              }}
              tabIndex={stepValue < currentStep ? 0 : -1}
            >
              {renderStepContent(stepValue)}
            </Step>
          );
        })}
      </StepperSection>

      <StepperLabels>
        {STEPS.map(({ content }: IStepperProps, index) => (
          <StepperLabel key={index}>{content}</StepperLabel>
        ))}
      </StepperLabels>
    </StepperContainer>
  );
};
