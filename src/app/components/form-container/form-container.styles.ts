import styled from "styled-components";

export const FormBox = styled.form`
  width: 25rem;
  min-height: 31rem;
  display: flex;
  flex-direction: column;
  gap: 1.6rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: 0 1rem;
  }
`;
