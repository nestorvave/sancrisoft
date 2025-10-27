import { useFormCase } from "@/domain/use-cases/useFormCase.use-case";
import { useFormStore } from "@/store/form.store";
import { formatPhone, isEmail, isEmpty } from "@/utils/validators";
import { useCallback, useRef, useState } from "react";
import { transformData } from "../utils/transform-data.utils";
import { validateRequiredFields } from "../utils/form-validators.utils";
import { IForm } from "@/store/form.interface";

interface FormErrors {
  [key: string]: string;
}

export const useCompanyForm = () => {
  const [errors, setErrors] = useState<FormErrors>({});
  const { form, updateForm, updateStatus, clearForm } = useFormStore();
  const inputRefs = useRef<Record<string, HTMLInputElement | null>>({});
  const numericFields = ["zip"];

  const onChange = useCallback(
    (
      e: React.ChangeEvent<
        HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
      >
    ): void => {
      const { name, value } = e.target;
      if (numericFields.includes(name) && !/^\d*$/.test(value)) return;

      if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));

      const formattedValue = name === "phone" ? formatPhone(value) : value;

      updateForm({
        target: { name, value: formattedValue },
      });
    },
    [errors]
  );

  const validateField = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>): void => {
      const { name, value } = e.target;
      let error = "";
      if (isEmpty(value)) error = "This field is required";
      if (name === "zip" && value.length !== 5)
        error = "Zip code must be 5 digits";
      setErrors((prev) => ({ ...prev, [name]: error }));
    },
    []
  );

  const validateStep = useCallback((): FormErrors => {
    let newErrors: FormErrors = {};
    const required = "This field is required";

    if (form.step === "1") {
      newErrors = {
        ...newErrors,
        ...validateRequiredFields<IForm>(
          form,
          ["name", "type", "line1", "city", "state", "zip"],
          required
        ),
      };

      if (form.zip && form.zip.length !== 5)
        newErrors.zip = "Zip code must be 5 digits";
    }

    if (form.step === "2") {
      newErrors = {
        ...newErrors,
        ...validateRequiredFields<IForm>(
          form,
          ["firstName", "lastName", "email", "phone", "areaCode"],
          required
        ),
      };

      if (!isEmpty(form.email) && !isEmail(form.email))
        newErrors.email = "Invalid email format";
    }

    return newErrors;
  }, [form]);

  const submitForm = async (): Promise<void> => {
    updateForm({ target: { name: "isSubmit", value: true } });
    try {
      const response = await useFormCase(transformData(form));

      if (response.status === "error") {
        updateStatus("error", response.message);
      } else {
        updateStatus("success", response.message);
      }
    } catch {
      updateStatus("error", "Error submitting company form");
    } finally {
      updateForm({ target: { name: "isSubmit", value: false } });
    }
  };
  const focusFirstError = (errors: Record<string, string>) => {
    const firstErrorKey = Object.keys(errors).find((key) => errors[key]);
    if (firstErrorKey) {
      const el = document.getElementById(
        firstErrorKey
      ) as HTMLInputElement | null;
      el?.focus();
    }
  };

  const handleNext = useCallback(() => {
    if (form.status === "success") {
      clearForm();
      return;
    }
    const validationErrors = validateStep();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) {
      focusFirstError(validationErrors);
      return;
    }
    const currentStep = Number(form.step);

    if (currentStep === 1 || currentStep === 2) {
      updateStatus("In progress", "");
      updateForm({
        target: { name: "step", value: String(currentStep + 1) },
      });
      return;
    }

    if (currentStep === 3) {
      submitForm();
    }
  }, [form, validateStep, submitForm]);

  return { form, onChange, errors, handleNext, validateField, inputRefs };
};
