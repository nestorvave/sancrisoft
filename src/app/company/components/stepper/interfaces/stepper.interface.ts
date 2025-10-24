export interface IStepperProps {
  status: "in progress" | "inactive" | "completed";
  content: string;
  step: number;
}
