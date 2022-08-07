import React from "react";
import { Meta, Story } from "@storybook/react";
import DropDowns from "./DropDowns";

export default {
  component: DropDowns,
  title: "Components/DropDowns",
} as Meta;

const Template: Story = () => <DropDowns />;

export const Primary = Template.bind({});