export interface IButton {
  label: string;
  icon?: React.ReactNode;
  onClick: () => void | Promise<void>;
  id: string;
  disabled?: boolean;
  loading?: boolean;
}
