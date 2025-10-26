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
