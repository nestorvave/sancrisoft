import { WarningIcon } from "@/components/icons";
import { InputText } from "@/components/input-text/input-text.component";
import { Select } from "@/components/select/select.component";
import { PHONES } from "@/constants/phones.constants";
import {
  DivContact,
  DivCountry,
  DivFullName,
  DivPhone,
  Error,
  Row,
} from "./contact-person.styles";
import { IContactPerson } from "./contact-person.interface";

export const ContactPerson = ({
  onChange,
  errors,
  form,
  validateField,
}: IContactPerson) => {
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
        <Row>
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
              hiddenLabel
            />
          </DivPhone>
        </Row>
        {errors.phone || errors.areaCode && (
          <Error>
            <WarningIcon />
            <span>{errors.phone || errors.areaCode}</span>
          </Error>
        )}
      </DivContact>
    </>
  );
};
