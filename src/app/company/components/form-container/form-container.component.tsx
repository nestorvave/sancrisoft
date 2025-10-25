import { Alert } from "@/components/alert/alert.component";
import { Button } from "@/components/button/button.component";
import styled from "styled-components";
import { useCompanyForm } from "../../hooks/useCompanyForm";
const DefaultIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    style={{
      marginLeft: "5px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    }}
  >
    <path d="M5 12h14M12 5l7 7-7 7" />
  </svg>
);

export const FormContainer = ({
  children,
  handleNext,
}: {
  children: React.ReactNode;
  handleNext: () => void;
}) => {
  return (
    <FormBox>
      {children}
      {/*    <Alert
        message="Thanks for submitting your company! We’ll be in touch shortly."
        type="error"
      /> */}

      <Button
        label="Continue"
        id="next"
        onClick={handleNext}
        icon={<DefaultIcon />}
      />
      {/*    <Alert
        message="Thanks for submitting your company! We’ll be in touch shortly."
        type="error"
      /> */}
    </FormBox>
  );
};

const FormBox = styled.section`
  width: 25rem;
  min-height: 31rem;
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
`;
