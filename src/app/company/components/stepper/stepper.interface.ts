export interface IStepperProps {
  status: "in progress" | "inactive" | "completed";
  content: string;
  step: "1" | "2" | "3";
}
