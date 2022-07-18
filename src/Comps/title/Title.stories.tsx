import React from "react";
import { Meta, Story } from "@storybook/react";
import Title from "./Title";

export default {
  component: Title,
  title: "Components/Title",
} as Meta;

const Template: Story = () => <Title subject="Top Headlines" city="Tel Aviv" />;

export const Primary = Template.bind({});
