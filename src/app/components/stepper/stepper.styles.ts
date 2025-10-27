import styled from "styled-components";

export const StepperContainer = styled.section`
  display: flex;
  width: 18%;
  height: 10rem;
  gap: 1.2rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: 25%;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 10%;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.smallMobile}) {
    display: none;
  }
`;

export const StepperSection = styled.ol`
  width: 2rem;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-color: #d9d9d970;
  border-radius: 7rem;
  padding: 0.4rem 0.2rem;
`;

export const Step = styled.li<{
  $status: "current" | "completed" | "in progress";
  $canGoBack: boolean;
}>`
  cursor: ${({ $canGoBack, $status }) =>
    $status ? "event-none" : $canGoBack ? "pointer" : "default"};
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 100%;
  background-color: ${({ $status, theme }) =>
    $status === "current"
      ? "#4a3aff"
      : $status === "completed"
      ? "#4ADE80"
      : theme.colors.white};
  font-weight: 500;
  font-size: 0.8rem;
  color: ${({ $status, theme }) =>
    $status === "current"
      ? theme.colors.white
      : $status === "completed"
      ? theme.colors.white
      : theme.colors.text};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StepperLabels = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: space-between;
  height: 100%;
  padding: 0.4rem 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    display: none;
  }
`;

export const StepperLabel = styled.p`
  font-size: 1rem;
  font-weight: 500;
  color: black;
  display: flex;
`;
