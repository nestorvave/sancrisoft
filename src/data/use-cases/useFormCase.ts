import { callApi } from "../api/api-config";

interface Address {
  line1: string;
  line2: string;
  city: string;
  state: string;
  zip: string;
}

interface Contact {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
}

export interface Company {
  name: string;
  type: string;
  address: Address;
  contact: Contact;
}
export interface IResponse {
  status: string;
  message: string;
}

export async function useFormCase(data: Company) {
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
