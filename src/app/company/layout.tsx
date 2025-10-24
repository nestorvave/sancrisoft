"use client";
import styled from "styled-components";
import { Stepper } from "./components/stepper/stepper.component";
import { FormContainer } from "./components/form-container/form-container.component";
import { ContactPerson } from "./components/steps/contact-person.component";
import { ReviewSubmit } from "./components/steps/review-submit.component";

export default function CompanyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <LayoutMain>
      <Stepper />
      <FormContainer>
        <ReviewSubmit  />
      </FormContainer>
      {children}
    </LayoutMain>
  );
}

const LayoutMain = styled.main`
  padding: 2rem 0 0 4rem;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
`;
