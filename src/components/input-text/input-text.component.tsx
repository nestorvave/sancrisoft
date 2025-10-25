import { useEffect, useState } from "react";
import { ITextInput } from "./input-text.interface";
import { ContainerInput, LabelInput, Input } from "./input-text.styles";
import { styled } from "styled-components";

const WarningIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="red"
  >
    <path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z" />
  </svg>
);

export const InputText = ({
  label,
  placeholder,
  inputMode,
  combined,
  type,
  id,
  name,
  ariaLabel,
  pattern,
  maxLength,
  minLength,
  autoFocus,
  onKeyPress,
  disabled,
  onBlur,
  onDoubleClick,
  onClick,
  onChange,
  value,
  customError,
}: ITextInput) => {
  const [isValid, setIsValid] = useState(true);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e);
    if (pattern) {
      setIsValid(pattern.test(e.target.value));
    }
  };

  useEffect(() => {
    if (customError) {
      setIsValid(false);
      return;
    }
    setIsValid(true);
  }, [customError]);

  return (
    <InputWrapper>
      <ContainerInput>
        {label && <LabelInput htmlFor={id}>{label}</LabelInput>}

        <Input
          $combined={combined}
          type={type}
          name={name}
          id={id}
          inputMode={inputMode || "text"}
          placeholder={placeholder}
          aria-label={ariaLabel}
          pattern={pattern?.toString() || ""}
          maxLength={maxLength || 100}
          minLength={minLength}
          autoFocus={autoFocus}
          onKeyDown={onKeyPress}
          disabled={disabled}
          onBlur={onBlur}
          onDoubleClick={onDoubleClick}
          onClick={onClick}
          onChange={handleChange}
          value={value}
        />
      </ContainerInput>
      {!isValid && (
        <ErrorContainer>
          <WarningIcon />
          <span>{customError || "Invalid input"}</span>
        </ErrorContainer>
      )}
    </InputWrapper>
  );
};
const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const ErrorContainer = styled.div`
  display: flex;
  font-family: "DM Sans";
  line-height: 1.3;
  align-items: center;
  font-weight: 400;
  gap: 0.25rem;
  color: red;
  font-size: 0.8rem;
  margin-top: 0.25rem;
`;
