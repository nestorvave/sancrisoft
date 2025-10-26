import { IForm } from "@/store/form.interface";
import { ICompany } from "@/data/use-cases/useFormCase";

export const transformData = (data: IForm): ICompany => {
  return {
    name: data.name,
    type: data.type,
    address: {
      line1: data.line1,
      line2: data.line2,
      city: data.city,
      state: data.state,
      zip: data.zip,
    },
    contact: {
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      phone: `${data.areaCode} ${data.phone}`,
    },
  };
};
