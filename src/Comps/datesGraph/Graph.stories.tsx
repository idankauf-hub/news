import React from "react";
import { Meta, Story } from "@storybook/react";
import Graph from "./Graph";

export default {
  component: Graph,
  title: "Components/Graph",
} as Meta;

const Template: Story = () => <Graph/>;

export const Primary = Template.bind({});