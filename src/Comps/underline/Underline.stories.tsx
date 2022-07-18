import React from "react";
import { Meta, Story } from "@storybook/react";
import Underline from "./Underline";

export default {
  component: Underline,
  title: "Components/Underline",
} as Meta;

const Template: Story = () => <Underline/>;

export const Primary = Template.bind({});
