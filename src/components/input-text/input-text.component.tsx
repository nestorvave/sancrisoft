import { ITextInput } from "./input-text.interface";
import { ContainerInput, LabelInput, Input } from "./input-text.styles";


export const InputText = ({
  label,
  placeholder,
  inputMode,
  combined,
  type,
  id,
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
}: ITextInput) => {
  return (
    <ContainerInput>
      {label && <LabelInput htmlFor={id}>{label}</LabelInput>}

      <Input
        $combined={combined}
        type={type}
        id={id}
        inputMode={inputMode || "text"}
        placeholder={placeholder}
        aria-label={ariaLabel}
        pattern={pattern}
        maxLength={maxLength || 100}
        minLength={minLength}
        autoFocus={autoFocus}
        onKeyDown={onKeyPress}
        disabled={disabled}
        onBlur={onBlur}
        onDoubleClick={onDoubleClick}
        onClick={onClick}
      />
    </ContainerInput>
  );
};
