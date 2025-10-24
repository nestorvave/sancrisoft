import styled from "styled-components";

export const ContainerInput = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
`;
export const LabelInput = styled.label`
  font-weight: 500;
  font-size: 1.1rem;
  line-height: 1.9rem;
  letter-spacing: 0%;
  vertical-align: middle;
`;

export const Input = styled.input<{ $combined?: boolean }>`
  display: block;
  width: 100%;
  height: 2rem;
  border-radius: ${({ $combined }) =>
	$combined ? "0 0.5rem 0.5rem 0" : "0.5rem"};
  border: 1px solid #e1e3e6;
  padding: 0.75rem 1rem;

  ${({ $combined }) =>
	$combined &&
	`
	border-left: none;
  `}

  &::placeholder {
	color: #757d8a;
  }
`;
