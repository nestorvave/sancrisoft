export interface ITextInput {
  ariaLabel?: string;
  autoFocus?: boolean;
  icon?: React.ReactNode;
  id: string;
  label?: string;
  maxLength?: number;
  minLength?: number;
  name: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onClick?: () => void;
  onDoubleClick?: () => void;
  onKeyPress?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  pattern?: RegExp;
  placeholder?: string;
  type: "text" | "textarea" | "password";
  value: string;
  rows?: number;
  error?: string;
  disabled?: boolean;
  onBlur?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  combined?: boolean;
  customError?: string;
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
