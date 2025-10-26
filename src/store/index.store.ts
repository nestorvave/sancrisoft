import { create } from "zustand";
import { persist } from "zustand/middleware";

export interface Form {
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

interface Actions {
  updateForm: (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => void;
  clearForm: () => void;
  goToStep: (step: "1" | "2" | "3") => void;
  updateStatus: (
    status: "success" | "error" | "In progress" | null,
    message?: string
  ) => void;
  updateIsSubmit: (isSubmit: boolean) => void;
}

const INITIAL_STATE: Form = {
  name: "",
  type: "",
  line1: "",
  line2: "",
  city: "",
  state: "",
  zip: "",
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  areaCode: "",
  step: "1",
  status: null,
  statusMessage: "",
  isSubmit: false,
};

interface FormStore {
  form: Form;
  updateForm: Actions["updateForm"];
  clearForm: Actions["clearForm"];
  goToStep: Actions["goToStep"];
  updateStatus: Actions["updateStatus"];
  updateIsSubmit: Actions["updateIsSubmit"];
}

export const useFormStore = create<FormStore>()(
  persist(
    (set) => ({
      form: { ...INITIAL_STATE },
      updateForm: (e) => {
        const { name, value } = e.target;
        set((state) => ({
          form: { ...state.form, [name]: value },
        }));
      },
      clearForm: () =>
        set(() => ({
          form: { ...INITIAL_STATE },
        })),
      goToStep: (step) =>
        set((state) => ({
          form: { ...state.form, step },
        })),
      updateStatus: (status, message) =>
        set((state) => ({
          form: { ...state.form, status, statusMessage: message || "" },
        })),
      updateIsSubmit: (isSubmit: boolean) =>
        set((state) => ({
          form: { ...state.form, isSubmit },
        })),
    }),
    { name: "form-store" }
  )
);
