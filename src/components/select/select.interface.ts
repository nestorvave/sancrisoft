export interface IOptions {
  label: string;
  value: string;
  img?: string;
}

export interface ISelect {
  defaultValue?: string;
  disabled?: boolean;
  placeholder?: string;
  id: string;
  label?: string;
  name: string;
  options: IOptions[];
  onChange: (
    event: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => void;
  value: string;
  combined?: boolean;
  showValueInsteadOfLabel?: boolean;
  customError?: string;
}
