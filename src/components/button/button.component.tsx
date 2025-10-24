import { StyledButton } from "./button.styles";
import { IButton } from "./button.interface";

export const Button = ({
  label,
  icon,
  onClick,
  id,
  disabled,
  loading,
}: IButton) => {
  return (
    <StyledButton
      id={id}
      type="button"
      disabled={disabled || loading}
      aria-busy={loading}
      aria-disabled={disabled}
      onClick={onClick}
      $disabled={disabled || loading}
    >
      {loading ? (
        <>
          <span aria-hidden="true">Loading... </span>
          <div className="spinner" aria-hidden="true"></div>
        </>
      ) : (
        <>
          <span>{label}</span>
          {icon && <span aria-hidden="true">{icon}</span>}
        </>
      )}
    </StyledButton>
  );
};
