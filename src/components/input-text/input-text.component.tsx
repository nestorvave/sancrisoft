import { useEffect, useState } from "react";
import { ITextInput } from "./input-text.interface";
import {
  ContainerInput,
  LabelInput,
  Input,
  InputWrapper,
  ErrorContainer,
} from "./input-text.styles";
import { WarningIcon } from "@/components/icons";

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
  autoFocus,
  onKeyPress,
  disabled,
  onBlur,
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
          autoFocus={autoFocus}
          onKeyDown={onKeyPress}
          disabled={disabled}
          onBlur={onBlur}
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
