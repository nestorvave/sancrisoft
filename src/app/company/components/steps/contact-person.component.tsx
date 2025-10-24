import { InputText } from "@/components/input-text/input-text.component";
import { Select } from "@/components/select/select.component";
import { PHONES } from "@/constants/phones.constants";
import styled from "styled-components";

export const ContactPerson = () => {
  return (
    <>
      <DivFullName>
        <InputText labelText="Name" placeholderText="First name" />
        <InputText labelText="Last name" placeholderText="Last name" />
      </DivFullName>
      <InputText labelText="Email" placeholderText="Email" />
      <DivContact>
        <DivCountry>
          <Select
            options={PHONES}
            id="phone"
            name="phone"
            onChange={(e) => console.log(e)}
            value=""
            combined
            label="Phone"
            showValueInsteadOfLabel
          />
        </DivCountry>
        <DivPhone>
          <InputText
            combined
            placeholderText="(555) 555-5555"
            labelText="Phone"
          />
        </DivPhone>
      </DivContact>
    </>
  );
};

const DivContact = styled.div`
  display: flex;
`;

const DivFullName = styled.div`
  display: flex;
`;

const DivCountry = styled.div`
  width: 30%;
`;

const DivPhone = styled.div`
  width: 70%;
`;
