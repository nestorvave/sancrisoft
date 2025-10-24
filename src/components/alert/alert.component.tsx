import styled from "styled-components";

interface IAlert {
  message: string;
  type: "error" | "warning" | "success";
}

export const Alert = ({ message, type }: IAlert) => {
  return <AlertContainer $type={type}>{message}</AlertContainer>;
};

const AlertContainer = styled.div<{ $type: "error" | "warning" | "success" }>`
  width: 100%;
  height: 4rem;
  background-color: #f0f0f0;
  border-radius: 0.5rem;
  padding: 1.5rem 2rem;
  border: 1px solid #ef4444;
  color: #ef4444;
  line-height: 1.3rem;
  font-size: 1rem;
  font-weight: 400;
  display: flex;
  align-items: center;
  margin: 0rem 0;
`;
