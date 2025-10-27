import styled from "styled-components";

export const AlertContainer = styled.div<{
  $type: "error" | "warning" | "success";
}>`
  width: 100%;
  height: 4rem;
  background-color: ${(props) =>
    props.$type === "error" ? "#FEF0F0" : "#EBF5EB"};
  border-radius: 0.5rem;
  padding: 1.5rem 2rem;
  border: 1px solid
    ${(props) => (props.$type === "error" ? "#ef4444" : "#008000")};
  color: ${(props) => (props.$type === "error" ? "#ef4444" : "#008000")};
  font-size: 0.85rem;
  font-weight: 400;
  display: flex;
  align-items: center;
`;
