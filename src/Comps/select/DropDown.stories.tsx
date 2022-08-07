import React from "react";
import { Meta, Story } from "@storybook/react";
import DropDown from "./DropDown";

export default {
  component: DropDown,
  title: "Components/Select",
} as Meta;

const Template: Story = () => <DropDown placeholder="dsf" data={["sd","sd"]} onSelect={()=> console.log("df")}/>;

export const Primary = Template.bind({});
