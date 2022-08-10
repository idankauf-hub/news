import React from "react";
import { Meta, Story } from "@storybook/react";
import Title from "./Title";

export default {
  component: Title,
  title: "Components/Title",
} as Meta;

const Template: Story = () => <Title city="f"/>;

export const Primary = Template.bind({});
