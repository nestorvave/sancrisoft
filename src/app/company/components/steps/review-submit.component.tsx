import styled from "styled-components";

export const ReviewSubmit = () => {
  return (
    <Wrapper>
      <Section>
        <HeaderRow>
          <SectionTitle>Business structure</SectionTitle>
          <EditButton>Edit</EditButton>
        </HeaderRow>

        <InfoRow>
          <Label>Name</Label>
          <Value>John Doe</Value>
        </InfoRow>

        <InfoRow>
          <Label>Type</Label>
          <Value>Individual</Value>
        </InfoRow>

        <InfoRow>
          <Label>Address</Label>
          <Value>123 Main Street Suite 123 Tampa, FL 33626</Value>
        </InfoRow>
      </Section>

      <Section>
        <HeaderRow>
          <SectionTitle>Contact person</SectionTitle>
          <EditButton>Edit</EditButton>
        </HeaderRow>

        <InfoRow>
          <Label>Name</Label>
          <Value>John Doe</Value>
        </InfoRow>

        <InfoRow>
          <Label>Email</Label>
          <Value>john.doe@example.com</Value>
        </InfoRow>

        <InfoRow>
          <Label>Phone</Label>
          <Value>+1 (555) 555-5555</Value>
        </InfoRow>
      </Section>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 78%;
`;

const Section = styled.section`
  display: flex;
  flex-direction: column;
  margin-bottom: 2rem;
`;

const HeaderRow = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
  margin-bottom: 2rem;
`;

const SectionTitle = styled.h2`
  font-weight: 500;
  font-size: 1.2rem;
  line-height: 1.5rem;
  color: #404d61;
  width: 11rem;
`;
const EditButton = styled.span`
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

  &:hover {
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  }
`;


const InfoRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 1rem;
`;

const Label = styled.p`
  font-weight: 500;
  font-size: 1.2rem;
  line-height: 2.5rem;
  color: #757d8a;
  min-width: 120px;
`;

const Value = styled.p`
  font-size: 1.2rem;
  line-height: 1.8rem;
  color: #404d61;
  flex: 1;
  font-weight: 500;
`;
