import React from "react";
import styled from "styled-components";

const ContainerInput = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
`;
const LabelInput = styled.label`
  font-weight: 500;
  font-size: 18px;
  line-height: 24px;
  letter-spacing: 0%;
  vertical-align: middle;
`;

const Input = styled.input`
  display: block;
  box-sizing: border-box;
  width: 100%;
  height: 2.1rem;
  border-radius: 0.5rem;
  border: 1px solid #e1e3e6;
  padding: 0.75rem 1rem;

  &::placeholder {
    color: #757d8a;
  }
`;
export const InputText = ({
  labelText,
  placeholderText,
  inputMode,
  ...props
}: any) => {
  return (
    <ContainerInput>
      {labelText && <LabelInput htmlFor="input">{labelText}</LabelInput>}

      <Input
        type="text"
        id="input"
        inputMode={inputMode}
        placeholder={placeholderText || "Escribe aquí..."}
        {...props}
      />
    </ContainerInput>
  );
};
