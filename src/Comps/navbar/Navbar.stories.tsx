import React from "react";
import { Meta, Story } from "@storybook/react";
import {Navbar,NavbarProps} from "./Navbar";

export default {
  component: Navbar,
  title: "Components/Navbar",
} as Meta;

const Template: Story<NavbarProps> = (args) => <Navbar {...args} />;

export const V1 = Template.bind({});
V1.args = {
  title: "Card Title 2311",
  body: "Card Body",
  withFooter: true,
};