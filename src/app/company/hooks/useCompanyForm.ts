import { useFormStore } from "@/store/index.store";
import { formatPhone, isEmail, isEmpty } from "@/utils/validators";
import { useState } from "react";

export const useCompanyForm = () => {
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const { form, updateForm, updateStatus } = useFormStore();
  const onChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));

    let formattedValue = value;

    if (name === "phone") {
      formattedValue = formatPhone(value);
    }

    updateForm({
      target: { name, value: formattedValue },
    } as React.ChangeEvent<HTMLInputElement>);
  };

  const validateField = (e: React.ChangeEvent<HTMLInputElement>) => {
    let error = "";
    const name = e.target.name;
    const value = e.target.value;
    if (!value.trim()) error = "This field is required";
    if (name === "zip" && value.length !== 5)
      error = "Zip code must be 5 digits";
    setErrors((prev) => ({ ...prev, [name]: error }));
  };

  const validateStep1 = () => {
    const errors: { [key: string]: string } = {};
    const requiredMessage = "This field is required";
    if (Number(form.step) === 1) {
      if (isEmpty(form.name)) errors.name = requiredMessage;
      if (isEmpty(form.type)) errors.type = requiredMessage;
      if (isEmpty(form.line1)) errors.line1 = requiredMessage;
      if (isEmpty(form.city)) errors.city = requiredMessage;
      if (isEmpty(form.state)) errors.state = requiredMessage;
      if (isEmpty(form.zip)) errors.zip = requiredMessage;
      if (form.zip.length !== 5) errors.zip = "Zip code must be 5 digits";
    }
    if (Number(form.step) === 2) {
      if (isEmpty(form.firstName)) errors.firstName = requiredMessage;
      if (isEmpty(form.lastName)) errors.lastName = requiredMessage;
      if (isEmpty(form.email)) errors.email = requiredMessage;
      if (isEmpty(form.phone)) errors.phone = requiredMessage;
      if (isEmpty(form.areaCode)) errors.areaCode = requiredMessage;
      if (!isEmail(form.email)) errors.email = "Invalid email format";
    }

    return errors;
  };

  const handleNext = () => {
    const newErrors = validateStep1();
    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) return;

    updateForm({
      target: { name: "step", value: String(Number(form.step) + 1) },
    } as React.ChangeEvent<HTMLInputElement>);
    if (Number(form.step) === 2 || Number(form.step) === 1) {
      updateStatus("In progress");
    }
  };

  return { form, onChange, errors, handleNext, validateField };
};
