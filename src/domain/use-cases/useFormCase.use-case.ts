import { callApi } from "../../data/api-config";
import { ICompany, IResponse } from "../models/form.model";

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
