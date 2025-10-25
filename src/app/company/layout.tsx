"use client"
import styled from "styled-components";
import { Stepper } from "./components/stepper/stepper.component";
import { FormContainer } from "./components/form-container/form-container.component";
import { ContactPerson } from "./components/steps/contact-person.component";
import { ReviewSubmit } from "./components/steps/review-submit.component";
import { BusinessStructure } from "./components/steps/business-structure.component";
import { useCompanyForm } from "./hooks/useCompanyForm";

export default function CompanyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { form, onChange, errors, handleNext, validateField } =
    useCompanyForm();
  return (
    <LayoutMain>
      <Stepper />
      <FormContainer handleNext={handleNext}>
        {form.step === "1" && (
          <BusinessStructure
            onChange={onChange}
            errors={errors}
            form={form}
            validateField={validateField}
          />
        )}
        {form.step === "2" && (
          <ContactPerson
            onChange={onChange}
            errors={errors}
            form={form}
            validateField={validateField}
          />
        )}
        {form.step === "3" && <ReviewSubmit form={form} />}
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
