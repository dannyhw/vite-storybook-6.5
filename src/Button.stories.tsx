import React from "react";
import { StoryObj, ComponentMeta } from "@storybook/react";
import { within, userEvent } from "@storybook/testing-library";
import { Button, ButtonProps } from "./Button";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Example/Button",
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: "color" }
  }
} as ComponentMeta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args

export const Primary: StoryObj<ButtonProps> = {
  args: {
    primary: true,
    label: "Button",
    backgroundColor: "darkviolet"
  },
  play: async ({ canvasElement }) => {
    const { findByRole } = within(canvasElement);
    const button = await findByRole("button", { name: "Button" });
    await userEvent.click(button);
  }
};
