export interface IStepperProps {
  content: string;
  step: "1" | "2" | "3";
}


export const STEPS: IStepperProps[] = [
  {
    content: "Business structure",
    step: "1",
  },
  {
    content: "Contact person",
    step: "2",
  },
  {
    content: "Review & submit",
    step: "3",
  },
];
