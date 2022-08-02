import React from "react";
import { Meta, Story } from "@storybook/react";
import GraphCard from "./GraphCard";

export default {
  component: GraphCard,
  title: "Components/GraphCard",
} as Meta;

const Template: Story = () => <GraphCard title="Dates" GraphElement={()=><div>fdssssdd</div>}/>;

export const Primary = Template.bind({});