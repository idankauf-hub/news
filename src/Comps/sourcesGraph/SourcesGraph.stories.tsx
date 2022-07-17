import React from "react";
import { Meta, Story } from "@storybook/react";
import SourcesGraph from "./SourcesGraph";

export default {
  component: SourcesGraph,
  title: "Components/SourcesGraph",
} as Meta;

const Template: Story = () => <SourcesGraph />;

export const Primary = Template.bind({});