import React from "react";
import { Meta, Story } from "@storybook/react";
import DropDown from "./DropDown"

export default {
  component: DropDown,
  title: "Components/DropDown",
} as Meta;

const Template: Story = () => <DropDown />;

export const Primary = Template.bind({});
