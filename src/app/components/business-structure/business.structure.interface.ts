export interface IBusinessStructure {
  onChange: (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => void;
  errors: Record<string, string>;
  form: any;
  validateField: (e: React.ChangeEvent<HTMLInputElement>) => void;
}