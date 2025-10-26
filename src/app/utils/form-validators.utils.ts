import { isEmpty } from "@/utils/validators";

export const validateRequiredFields = <T>(
  form: T,
  fields: Array<keyof T>,
  requiredMessage: string
): Record<string, string> => {
  const newErrors: Record<string, string> = {};

  fields.forEach((key) => {
    if (isEmpty(form[key])) {
      newErrors[key as string] = requiredMessage;
    }
  });

  return newErrors;
};
