import {
  StepperContainer,
  StepperSection,
  StepDiv,
  StepperLabels,
  StepperLabel,
} from "./stepper.styles";
import { IStepperProps } from "./interfaces/stepper.interface";
import { useFormStore } from "@/store/index.store";

export const CheckIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1rem"
    height="1rem"
    viewBox="0 0 24 24"
    fill="white"
  >
    <path d="M20.285 6.709a1 1 0 0 0-1.414-1.418l-9.192 9.19-4.192-4.192a1 1 0 0 0-1.414 1.414l4.899 4.899a1 1 0 0 0 1.414 0l9.899-9.893z" />
  </svg>
);

export const Stepper = () => {
  const { form, goToStep, updateStatus } = useFormStore();

  const steps: IStepperProps[] = [
    {
      status: "in progress",
      content: "Business structure",
      step: "1",
    },
    {
      status: "inactive",
      content: "Contact person",
      step: "2",
    },
    {
      status: "inactive",
      content: "Review & submit",
      step: "3",
    },
  ];

  return (
    <StepperContainer>
      <StepperSection>
        {steps.map((step: IStepperProps, index: number) => (
          <StepDiv
            $canGoBack={Number(step.step) < Number(form.step)}
            onClick={() => {
              if (Number(step.step) > Number(form.step) || form.status === "success") return;
              goToStep(step.step);
              updateStatus("In progress", "");
            }}
            key={index}
            $status={
              form.status === "success"
                ? "completed"
                : Number(form.step) === Number(step.step)
                ? "current"
                : Number(step.step) < Number(form.step)
                ? "completed"
                : "in progress"
            }
          >
            {form.status === "success" ? (
              <CheckIcon />
            ) : Number(step.step) === Number(form.step) ? (
              step.step
            ) : Number(step.step) <= Number(form.step) ? (
              <CheckIcon />
            ) : (
              step.step
            )}
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
