import {
  StepperContainer,
  StepperSection,
  StepDiv,
  StepperLabels,
  StepperLabel,
} from "./stepper.styles";
import { IStepperProps } from "./interfaces/stepper.interface";
import { useFormStore } from "@/store/index.store";

export const Stepper = () => {
  const { form } = useFormStore();
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
          <StepDiv
            key={index}
            $status={
              Number(form.step) === Number(step.step)
                ? "current"
                : Number(step.step) < Number(form.step)
                ? "completed"
                : "in progress"
            }
          >
            {Number(form.step) >= Number(step.step) ? Number(step.step) : "palomita"}
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
