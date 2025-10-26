"use client";
import { useFormStore } from "@/store/form.store";
import styled from "styled-components";

const AlertContainer = styled.div<{ variant: string }>`
  height: 1.2rem;
  top: 57px;
  left: 265px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  background: #80808014;
  border-radius: 3px;
  padding: 1px 6px 1px 5px;
  font-family: "Inter", sans-serif;
  font-weight: 400;
  font-size: 0.75rem;
  line-height: 1.5rem;
  text-align: center;
  color: ${(props) =>
    props.variant === "warning"
      ? "#FFA500"
      : props.variant === "error"
      ? "#FF0000"
      : "#00AA00"};
  text-shadow: 0 0 1px rgba(0, 0, 0, 0.2);
`;

export const MiniAlert = () => {
  const { form } = useFormStore();

  return (
    <>
      {form.status && (
        <AlertContainer role="alert" aria-live="polite" variant={form.status}>
          {form.status}
        </AlertContainer>
      )}
    </>
  );
};
