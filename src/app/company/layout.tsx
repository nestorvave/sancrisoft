"use client";
import styled from "styled-components";
import { Stepper } from "./components/stepper/stepper.component";
import { FormContainer } from "./components/form-container/form-container.component";
import { BusinessStructure } from "./components/steps/business-structure.component";

export default function CompanyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <LayoutMain>
      <Stepper />
      <FormContainer>
        <BusinessStructure />{" "}
      </FormContainer>
      {children}
    </LayoutMain>
  );
}

const LayoutMain = styled.main`
  padding: 2rem 0 0 2rem;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 1rem;
`;
