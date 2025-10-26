import { create } from "zustand";
import { persist } from "zustand/middleware";
import { FormStore } from "./form.interface";
import { INITIAL_STATE } from "./form.constant";

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
      updateStatus: (status, message) =>
        set((state) => ({
          form: { ...state.form, status, statusMessage: message || "" },
        })),
    }),
    { name: "form-store" }
  )
);
