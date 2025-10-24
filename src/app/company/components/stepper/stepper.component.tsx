import {
  StepperContainer,
  StepperSection,
  StepDiv,
  StepperLabels,
  StepperLabel,
} from "./stepper.styles";
import { IStepperProps } from "./interfaces/stepper.interface";

export const Stepper = () => {
  const steps: IStepperProps[] = [
    {
      status: "in progress",
      content: "Business structure",
      step: 1,
    },
    {
      status: "inactive",
      content: "Contact person",
      step: 2,
    },
    {
      status: "inactive",
      content: "Review & submit",
      step: 3,
    },
  ];

  return (
    <StepperContainer>
      <StepperSection>
        {steps.map((step: IStepperProps, index: number) => (
          <StepDiv key={index}>
            {step.status !== "completed" ? step.step : ""}
          </StepDiv>
        ))}
      </StepperSection>
      <StepperLabels>
        {steps.map((step: IStepperProps, index: number) => (
          <StepperLabel key={index}>{step.content}</StepperLabel>
        ))}
      </StepperLabels>
    </StepperContainer>
  );
};
