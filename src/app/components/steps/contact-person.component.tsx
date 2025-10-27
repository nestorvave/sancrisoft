import { InputText } from "@/components/input-text/input-text.component";
import { Select } from "@/components/select/select.component";
import { PHONES } from "@/constants/phones.constants";
import styled from "styled-components";

export const ContactPerson = ({
  onChange,
  errors,
  form,
  validateField,
}: any) => {
  return (
    <>
      <DivFullName>
        <InputText
          label="Name"
          placeholder="First name"
          id="firstName"
          name="firstName"
          onChange={onChange}
          value={form.firstName}
          type="text"
          inputMode="text"
          customError={errors.firstName}
          onBlur={validateField}
          autoFocus
        />
        <InputText
          label="Last name"
          placeholder="Last name"
          id="lastName"
          name="lastName"
          onChange={onChange}
          value={form.lastName}
          type="text"
          inputMode="text"
          customError={errors.lastName}
          onBlur={validateField}
        />
      </DivFullName>
      <InputText
        label="Email"
        placeholder="Email"
        id="email"
        name="email"
        onChange={onChange}
        value={form.email}
        type="text"
        inputMode="email"
        customError={errors.email}
        onBlur={validateField}
      />
      <DivContact>
        <DivCountry>
          <Select
            options={PHONES}
            id="areaCode"
            name="areaCode"
            onChange={onChange}
            value={form.areaCode}
            combined
            label="Phone"
            showValueInsteadOfLabel
          />
        </DivCountry>
        <DivPhone>
          <InputText
            combined
            placeholder="(555) 555-5555"
            label="Phone"
            id="phone"
            name="phone"
            onChange={onChange}
            value={form.phone}
            type="text"
            inputMode="numeric"
            onBlur={validateField}
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
  gap: 0.4rem;
`;

const DivCountry = styled.div`
  width: 30%;
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: 40%;
  }
`;

const DivPhone = styled.div`
  width: 70%;
`;
