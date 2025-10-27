import { InputText } from "@/components/input-text/input-text.component";
import { Select } from "@/components/select/select.component";
import { STATES } from "@/constants/states.constants";

import styled from "styled-components";
import { TYPES } from "@/constants/type.constants";

export const BusinessStructure = ({
  onChange,
  errors,
  form,
  validateField,
  inputRefs,
}: any) => {
  const { name, type, line1, line2, city, state, zip } = form;

  return (
    <>
      <InputText
        label="Business name"
        placeholder="Registered business name"
        id="name"
        name="name"
        onChange={onChange}
        value={name}
        type="text"
        inputMode="text"
        customError={errors.name}
        onBlur={validateField}
        autoFocus
      />
      <Select
        options={TYPES}
        label="Type"
        placeholder="Registered business name"
        id="type"
        name="type"
        onChange={onChange}
        value={type}
      />
      <DivAddress>
        <InputText
          label="Address"
          placeholder="Address line 1"
          id="line1"
          name="line1"
          onChange={onChange}
          value={line1}
          type="text"
          inputMode="text"
          customError={errors.line1}
          onBlur={validateField}
        />
        <InputText
          placeholder="Address line 2 (optional)"
          id="line2"
          name="line2"
          onChange={onChange}
          value={line2}
          type="text"
          inputMode="text"
        />
        <InputText
          placeholder="City"
          id="city"
          name="city"
          onChange={onChange}
          value={city}
          type="text"
          inputMode="text"
          customError={errors.city}
          onBlur={validateField}
        />
        <DivStatePostal>
          <Select
            options={STATES}
            id="state"
            name="state"
            onChange={onChange}
            value={state}
          />
          <InputText
            placeholder="Postal code"
            id="zip"
            name="zip"
            onChange={onChange}
            value={zip}
            type="numeric"
            pattern={/^\d+$/}
            inputMode="numeric"
            customError={errors.zip}
            onBlur={validateField}
          />
        </DivStatePostal>
      </DivAddress>
    </>
  );
};

const DivAddress = styled.fieldset`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  border: none;
`;

const DivStatePostal = styled.div`
  display: flex;
  gap: 0.5rem;
`;
