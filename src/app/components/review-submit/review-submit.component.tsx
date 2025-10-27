import { useFormStore } from "@/store/form.store";
import {
  EditButton,
  HeaderRow,
  InfoRow,
  InfoRowAddress,
  Label,
  Section,
  SectionTitle,
  Value,
  Wrapper,
} from "./review-submit.styles";
import { IForm } from "@/store/form.interface";

export const ReviewSubmit = ({ form }: { form: IForm }) => {
  const {
    name,
    type,
    line1,
    line2,
    city,
    state,
    zip,
    firstName,
    lastName,
    email,
    phone,
    areaCode,
  } = form;
  const { updateForm, updateStatus } = useFormStore();

  const handleEdit = (step: "1" | "2") => {
    updateForm({ target: { name: "step", value: step } });
    updateStatus("In progress", "");
  };

  return (
    <Wrapper>
      <Section>
        <HeaderRow>
          <SectionTitle>Business structure</SectionTitle>
          <EditButton
            onClick={() => handleEdit("1")}
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleEdit("1");
              }
            }}
          >
            Edit
          </EditButton>
        </HeaderRow>

        <InfoRow>
          <Label>Name</Label>
          <Value>{name}</Value>
        </InfoRow>

        <InfoRow>
          <Label>Type</Label>
          <Value>{type}</Value>
        </InfoRow>

        <InfoRowAddress>
          <Label>Address</Label>
          <Value>{`${line1} ${line2} ${city}, ${state} ${zip}`}</Value>
        </InfoRowAddress>
      </Section>

      <Section>
        <HeaderRow>
          <SectionTitle>Contact person</SectionTitle>
          <EditButton
            onClick={() => handleEdit("2")}
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleEdit("2");
              }
            }}
          >
            Edit
          </EditButton>
        </HeaderRow>

        <InfoRow>
          <Label>Name</Label>
          <Value>{`${firstName} ${lastName}`}</Value>
        </InfoRow>

        <InfoRow>
          <Label>Email</Label>
          <Value>{email}</Value>
        </InfoRow>

        <InfoRow>
          <Label>Phone</Label>
          <Value>{`${areaCode} ${phone}`}</Value>
        </InfoRow>
      </Section>
    </Wrapper>
  );
};
