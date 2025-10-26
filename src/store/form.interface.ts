interface IFormActions {
  updateForm: (
    e:
      | React.ChangeEvent<
          HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
        >
      | { target: { name: string; value: boolean | string } }
  ) => void;
  clearForm: () => void;
  updateStatus: (
    status: "success" | "error" | "In progress" | null,
    message?: string
  ) => void;
}

export interface IForm {
  name: string;
  type: string;
  line1: string;
  line2: string;
  city: string;
  state: string;
  zip: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  step: "1" | "2" | "3";
  areaCode: string;
  status: "success" | "error" | "In progress" | null;
  statusMessage: string;
  isSubmit: boolean;
}

export interface FormStore {
  form: IForm;
  updateForm: IFormActions["updateForm"];
  clearForm: IFormActions["clearForm"];
  updateStatus: IFormActions["updateStatus"];
}
