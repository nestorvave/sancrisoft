import { Alert } from "@/components/alert/alert.component";
import { Button } from "@/components/button/button.component";
import { useFormStore } from "@/store/form.store";
import { FormBox } from "./form-container.styles";
import { RightArrow } from "@/components/icons";

interface IFormContainerProps {
  children: React.ReactNode;
  handleNext: () => void;
}

export const FormContainer = ({
  children,
  handleNext,
}: IFormContainerProps) => {
  const { form } = useFormStore();
  const currentStep = Number(form.step);

  const btnTxt = (): "Start over" | "Confirm & Submit" | "Continue" => {
    if (currentStep === 3 && form.status === "success") return "Start over";
    if (currentStep === 3) return "Confirm & Submit";
    return "Continue";
  };

  return (
    <FormBox>
      {children}
      {form.status === "success" && (
        <Alert message={form.statusMessage} type="success" />
      )}

      <Button
        label={btnTxt()}
        id="next"
        onClick={handleNext}
        icon={<RightArrow />}
        loading={Boolean(form.isSubmit)}
        onKeyDown={(e) => {
          if (e.key === "Enter") handleNext();
        }}
      />
      {form.status === "error" && (
        <Alert message={form.statusMessage} type={form.status} />
      )}
    </FormBox>
  );
};
