import { callApi } from "../api/api-config";

interface IAddress {
  line1: string;
  line2: string;
  city: string;
  state: string;
  zip: string;
}

interface IContact {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
}

export interface ICompany {
  name: string;
  type: string;
  address: IAddress;
  contact: IContact;
}
export interface IResponse {
  status: string;
  message: string;
}

export async function useFormCase(data: ICompany) {
  try {
    const path = `/company`;
    const response = await callApi<IResponse>(path, {
      method: "POST",
      body: {
        ...data,
      },
    });
    return response;
  } catch (error: any) {
    throw new Error(error);
  }
}
