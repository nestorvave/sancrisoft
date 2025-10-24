import styled, { keyframes } from "styled-components";

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

export const StyledButton = styled.button<{ $disabled?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 2.1rem;
  border-radius: 0.4rem;
  border: none;
  cursor: ${({ $disabled }) => ($disabled ? "not-allowed" : "pointer")};
  background-color: ${(props) => (props.$disabled ? "#4a3aff9a" : "#4A3AFF")};
  color: white;
  opacity: 1;
  padding: 0.8rem 2.2rem;
  transition: background-color 0.3s ease;

  &:hover {
    filter: brightness(1.1);
  }

  &:active {
    filter: brightness(0.9);
  }

  .spinner {
    margin-left: 0.5rem;
    border: 2px solid #fff;
    border-top: 2px solid rgba(255, 255, 255, 0.3);
    border-radius: 50%;
    width: 1rem;
    height: 1rem;
    animation: ${spin} 1s linear infinite;
  }
`;
