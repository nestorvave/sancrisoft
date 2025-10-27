import { Button } from "@/components/button/button.component";
import { IButton } from "@/components/button/button.interface";
import { RightArrow } from "@/components/icons";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Button> = {
  component: Button,
};

export default meta;
type Story = StoryObj<IButton>;

export const Default: Story = {
  args: {
    label: "Click me",
    disabled: false,
    loading: false,
    id: "primary-button",
  },
};

export const Disabled: Story = {
  args: {
    label: "Can't click me",
    disabled: true,
    loading: false,
    id: "disabled-button",
  },
};

export const Loading: Story = {
  args: {
    label: "Click me",
    disabled: false,
    loading: true,
    id: "loading-button",
  },
};

export const WithIcon: Story = {
  args: {
    label: "Button with icon",
    icon: RightArrow(),
    disabled: false,
    loading: false,
    id: "icon-button",
  },
};
