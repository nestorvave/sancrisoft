import { Button } from "@/components/button/button.component";
import { InputText } from "@/components/input-text/input-text.component";
import { Select } from "@/components/select/select.component";
import { STATES } from "@/constants/states.constants";
import styled from "styled-components";

export const BusinessStructure = () => {
  return (
    <>
      <InputText
        labelText="Business name"
        placeholderText="Registered business name"
      />
      <InputText labelText="Type" placeholderText="Registered business name" />
      <DivAddress>
        <InputText labelText="Address" placeholderText="Address line 1" />
        <InputText placeholderText="Address line 2 (optional)" />
        <InputText placeholderText="City" />
        <DivStatePostal>
          <Select
            options={STATES}
            id="state"
            name="state"
            onChange={(e) => console.log(e)}
            value=""
          />
          <InputText placeholderText="Postal code" />
        </DivStatePostal>
      </DivAddress>
    </>
  );
};

const DivAddress = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const DivStatePostal = styled.div`
  display: flex;
  gap: 0.5rem;
`;
