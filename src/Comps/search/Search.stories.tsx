import React from "react";
import { Meta, Story } from "@storybook/react";
import Search from "./Search";

export default {
  component: Search,
  title: "Components/Search",
} as Meta;

const Template: Story = () => <Search />;

export const Primary = Template.bind({});