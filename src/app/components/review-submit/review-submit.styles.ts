import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
`;

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  margin-bottom: 2rem;
`;

export const HeaderRow = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
  margin-bottom: 2rem;
`;

export const SectionTitle = styled.h2`
  font-weight: 500;
  font-size: 1.2rem;
  line-height: 1.5rem;
  color: #404d61;
  width: 11rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: 1rem;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.smallMobile}) {
    font-size: 0.9rem;
  }
`;
export const EditButton = styled.button`
  font-weight: 500;
  font-size: 0.9rem;
  line-height: 1.5rem;
  color: #4a3aff;
  text-decoration-line: underline;
  text-decoration-style: solid;
  text-decoration-color: currentColor;
  text-decoration-thickness: 1px;
  text-underline-offset: 2px;
  text-shadow: 0 0 1px rgba(0, 0, 0, 0.5);
  cursor: pointer;
  &:focus {
    box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.5);
  }

  &:hover {
    opacity: 0.8;
    text-shadow: 0 0 4px rgba(74, 58, 255, 0.5);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: 0.8rem;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.smallMobile}) {
    font-size: 0.7rem;
  }
`;

export const InfoRow = styled.div`
  display: flex;

  align-items: center;
  justify-content: center;
  gap: 1rem;
`;
export const InfoRowAddress = styled.div`
  display: flex;
  width: 80%;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;

export const Label = styled.p`
  font-weight: 500;
  font-size: 1.2rem;
  line-height: 2.5rem;
  color: #757d8a;
  min-width: 120px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: 1rem;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.smallMobile}) {
    font-size: 0.9rem;
  }
`;

export const Value = styled.p`
  font-size: 1.2rem;
  line-height: 1.8rem;
  color: #404d61;
  flex: 1;
  font-weight: 500;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: 1rem;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.smallMobile}) {
    font-size: 0.9rem;
  }
`;
