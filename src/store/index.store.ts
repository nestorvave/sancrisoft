import { create } from "zustand";
import { persist } from "zustand/middleware";

export interface Form {
  form: {
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
  };
}

interface Actions {
  updateForm: (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => void;
  clearForm: () => void;
  goToStep: (step: "1" | "2" | "3") => void;
}

const INITIAL_STATE: Form["form"] = {
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
};

export const useFormStore = create<Form & Actions>()(
  persist(
    (set) => ({
      form: { ...INITIAL_STATE },

      updateForm: (e) => {
        const { name, value } = e.target;
        if (!name) return;
        set((state) => ({
          form: { ...state.form, [name]: value },
        }));
      },
      clearForm: () => set(() => ({ form: { ...INITIAL_STATE } })),
      goToStep: (step) => set((state) => ({ form: { ...state.form, step } })),
    }),
    { name: "form-store" }
  )
);
