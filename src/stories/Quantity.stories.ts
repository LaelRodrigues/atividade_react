import { Meta, StoryObj } from "@storybook/react";
import Quantity from "../lib/Quantity";

const meta = {
    title: 'lib/Quantity',
    component: Quantity
} satisfies Meta<typeof Quantity>

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
      value: 5,
      min: 0,
      max: 10
    },
  };