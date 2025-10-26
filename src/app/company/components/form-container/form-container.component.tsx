import { Alert } from "@/components/alert/alert.component";
import { Button } from "@/components/button/button.component";
import { useFormStore } from "@/store/index.store";
import { FormBox } from "./form-container.styles";
const DefaultIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    style={{
      marginLeft: "5px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    }}
  >
    <path d="M5 12h14M12 5l7 7-7 7" />
  </svg>
);

export const FormContainer = ({
  children,
  handleNext,
}: {
  children: React.ReactNode;
  handleNext: () => void;
}) => {
  const { form } = useFormStore();

  const btnText =
    form.step === "3" && form.status === "success"
      ? "Start over"
      : form.step === "3"
      ? "Confirm & Submit"
      : "Continue";

  return (
    <FormBox>
      {children}
      {form.status === "success" && (
        <Alert message={form.statusMessage} type="success" />
      )}

      <Button
        label={btnText}
        id="next"
        onClick={handleNext}
        icon={<DefaultIcon />}
        loading={form.isSubmit}
      />
      {form.status === "error" && (
        <Alert message={form.statusMessage} type={form.status} />
      )}
    </FormBox>
  );
};

