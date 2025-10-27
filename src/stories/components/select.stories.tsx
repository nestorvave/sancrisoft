import type { Meta, StoryObj } from "@storybook/react";
import { Select } from "@/components/select/select.component";
import { ISelect } from "@/components/select/select.interface";
const meta: Meta<typeof Select> = {
  component: Select,
};

export default meta;
type Story = StoryObj<ISelect>;

export const Default: Story = {
  args: {
    label: "Select an option",
    placeholder: "Choose...",
    value: "",
    options: [
      { label: "Option 1", value: "option1" },
      { label: "Option 2", value: "option2" },
      { label: "Option 3", value: "option3" },
    ],
  },
};

export const WithValue: Story = {
  args: {
    label: "Select an option",
    placeholder: "Choose...",
    value: "option2",
    options: [
      { label: "Option 1", value: "option1" },
      { label: "Option 2", value: "option2" },
      { label: "Option 3", value: "option3" },
    ],
  },
};

export const ShowValue: Story = {
  args: {
    label: "Select an option",
    placeholder: "Choose...",
    value: "CA",
    showValueInsteadOfLabel: true,
    options: [
      { label: "California", value: "CA" },
      { label: "Mexico", value: "MX" },
      { label: "United States", value: "US" },
    ],
  },
};

export const ShowValueAndImage: Story = {
  args: {
    label: "Select an option",
    placeholder: "Choose...",
    value: "+1",
    showValueInsteadOfLabel: true,
    options: [
      {
        label: "United States",
        value: "+1",
        img: "https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg",
      },
      {
        label: "Canada",
        value: "+1",
        img: "https://upload.wikimedia.org/wikipedia/commons/c/cf/Flag_of_Canada.svg",
      },
      {
        label: "United Kingdom",
        value: "+44",
        img: "https://upload.wikimedia.org/wikipedia/en/a/ae/Flag_of_the_United_Kingdom.svg",
      },
    ],
  },
};
