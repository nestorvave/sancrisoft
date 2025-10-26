
import { InputText } from "@/components/input-text/input-text.component";
import type { Meta, StoryObj } from "@storybook/react";
import {  ITextInput } from "@/components/input-text/input-text.interface";

const meta: Meta<typeof InputText> = {
  component: InputText,
};

export default meta;
type Story = StoryObj<ITextInput>;


export const Default: Story = {
  args: {
    label: "Your Name",
    placeholder: "Enter your name",
    type: "text",
    id: "name-input",
    name: "name",
    ariaLabel: "Name input",
    disabled: false,
    value: "",
  },
};

export const Disabled: Story = {
  args: {
    label: "Disabled Input",
    placeholder: "Cannot type",
    type: "text",
    id: "disabled-input",
    name: "disabledInput",
    ariaLabel: "Disabled input",
    disabled: true,
    value: "Disabled",
  },
};


export const WithError: Story = {
  args: {
    label: "Email",
    placeholder: "Enter your email",
    type: "text",
    id: "email-input",
    name: "email",
    ariaLabel: "Email input",
    value: "invalid-email",
    customError: "Please enter a valid email",
  },
};