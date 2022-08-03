import React from "react";
import { Meta, Story } from "@storybook/react";
import SourcesGraph from "./SourcesGraph";

export default {
  component: SourcesGraph,
  title: "Components/SourcesGraph",
} as Meta;
  const data = [
    { name: "NBC", value: 200, fill: "#0088FE" },
    { name: "WALLA", value: 300, fill: "#00C49F" },
    { name: "Group C", value: 300, fill: "#FFBB28" },
    { name: "Group D", value: 200, fill: "#FF8042" },
  ];

const Template: Story = () => <SourcesGraph data={[
  { name: "NBC", value: 200, fill: "#0088FE" },
  { name: "WALLA", value: 300, fill: "#00C49F" },
  { name: "Group C", value: 300, fill: "#FFBB28" },
  { name: "Group D", value: 200, fill: "#FF8042" },
]}  />;

export const Primary = Template.bind({});