import { styled } from "styled-components";

export const DivContact = styled.div`
  display: flex;
  flex-direction: column;
`;

export const DivFullName = styled.div`
  display: flex;
  gap: 0.4rem;
`;

export const DivCountry = styled.div`
  width: 30%;
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: 40%;
  }
`;

export const DivPhone = styled.div`
  width: 70%;
`;

export const Error = styled.div`
  display: flex;
  line-height: 1.3;
  align-items: center;
  font-weight: 400;
  color: red;
  font-size: 0.8rem;
  width: 100%;
  margin-top: 0.25rem;
`;
export const Row = styled.div`
  display: flex;
  width: 100%;
`;
