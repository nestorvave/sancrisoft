import styled from "styled-components";

export const StepperContainer = styled.section`
  display: flex;
  width: 18%;
  height: 10rem;
  gap: 1.2rem;
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
  background-color: ${({ $status }) =>
    $status === "current"
      ? "#4a3aff"
      : $status === "completed"
      ? "#4ADE80"
      : "#ffffff"};
  font-weight: 500;
  font-size: 0.8rem;
  color: ${({ $status }) =>
    $status === "current"
      ? "#ffffff"
      : $status === "completed"
      ? "#ffffff"
      : "#000000"};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StepperLabels = styled.section`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  justify-content: space-between;
  height: 100%;
  padding: 0.4rem 0;
`;

export const StepperLabel = styled.p`
  font-size: 1rem;
  font-weight: 500;
  color: black;
  display: flex;
`;
