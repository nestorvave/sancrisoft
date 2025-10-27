import { Alert } from "@/components/alert/alert.component";
import { IAlert } from "@/components/alert/alert.interface";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Alert> = {
  component: Alert,
};

export default meta;
type Story = StoryObj<IAlert>;

export const Success: Story = {
  args: { message: "This is an alert message", type: "success" },
};
export const Error: Story = {
  args: { message: "This is an error alert", type: "error" },
};
