import React from "react";
import { Meta, Story } from "@storybook/react";
import Graph from "./Graph";

export default {
  component: Graph,
  title: "Components/Graph",
} as Meta;

const Template: Story = () => <Graph data={[  {
  month: "MAY",
  frequency: 3000,
},
{
  month: "MAY",
  frequency: 3000,
},]}/>;

export const Primary = Template.bind({});
