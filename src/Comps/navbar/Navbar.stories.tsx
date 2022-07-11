import React from "react";
import { Meta, Story } from "@storybook/react";
import {Navbar} from "./Navbar";

export default {
  component: Navbar,
  title: "Components/Navbar",
} as Meta;

const Template: Story = () => <Navbar />;

export const Primary = Template.bind({});