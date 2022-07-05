import React from "react";
import { StoryObj, ComponentMeta } from "@storybook/react";
import { within, userEvent } from "@storybook/testing-library";
import { TextInput, TextInputProps } from "./TextInput";

export default {
  title: "Example/TextInput",
  component: TextInput,

  argTypes: {},
} as ComponentMeta<typeof TextInput>;

export const Primary: StoryObj<TextInputProps> = {
  args: {},
  play: async ({ canvasElement }) => {
    const { findByRole } = within(canvasElement);
    const input = await findByRole("textbox");
    await userEvent.type(input, "hello", { delay: 120 });
  },
};
