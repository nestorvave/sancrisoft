import type { Meta, StoryObj } from "@storybook/react";
import { Navbar } from "@/components/navbar/navbar.component";

const meta: Meta<typeof Navbar> = {
  component: Navbar,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    name: "New Company",
  },
};
