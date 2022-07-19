import React from "react";
import { Meta, Story } from "@storybook/react";
import Cards from "./Cards";

export default {
  component: Cards,
  title: "Components/Cards",
} as Meta;

const Template: Story = () => <Cards />;

export const Primary = Template.bind({});