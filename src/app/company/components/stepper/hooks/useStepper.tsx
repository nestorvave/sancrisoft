import { useFormStore } from "@/store/form.store";
import { CheckIcon } from "@/components/icons";

export const useStepper = () => {
  const { form, updateForm, updateStatus } = useFormStore();
  const currentStep = Number(form.step);
  const isCompleted = form.status === "success";

  const handleStepClick = (targetStep: number): void => {
    if (targetStep > currentStep || isCompleted) return;

    updateForm({
      target: { name: "step", value: targetStep.toString() },
    });

    updateStatus("In progress", "");
  };

  const getStepStatus = (
    step: number
  ): "completed" | "current" | "in progress" => {
    if (isCompleted || step < currentStep) return "completed";
    if (step === currentStep) return "current";
    return "in progress";
  };

  const renderStepContent = (step: number): React.ReactNode => {
    if (isCompleted || step < currentStep) return <CheckIcon />;
    return step;
  };

  return {
    currentStep,
    getStepStatus,
    handleStepClick,
    isCompleted,
    renderStepContent,
  };
};
