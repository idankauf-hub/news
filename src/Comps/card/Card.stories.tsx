import React from "react";
import { Meta, Story } from "@storybook/react";
import Card from "./Card";

export default {
  component: Card,
  title: "Components/Card",
} as Meta;

const Template: Story = () => <Card title="sdfsdf" />;

export const Primary = Template.bind({});