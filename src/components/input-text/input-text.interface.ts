export interface ITextInput {
  ariaLabel?: string;
  autoFocus?: boolean;
  icon?: React.ReactNode;
  id: string;
  label?: string;
  name: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onClick?: () => void;
  onKeyPress?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  pattern?: RegExp;
  placeholder?: string;
  type: "text" | "numeric";
  value: string;
  error?: string;
  disabled?: boolean;
  onBlur?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  combined?: boolean;
  customError?: string;
  hiddenLabel?: boolean;
  inputMode:
    | "none"
    | "text"
    | "tel"
    | "url"
    | "email"
    | "numeric"
    | "decimal"
    | "search"
    | undefined;
}
