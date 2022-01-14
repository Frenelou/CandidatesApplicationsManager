import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Header } from ".";

export default {
  title: "Example/MyHeader",
  component: Header,
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = (args) => <Header {...args} />;

export const LoggedIn = Template.bind({});
LoggedIn.args = {
  pageName: "Applications",
};

export const LoggedOut = Template.bind({});
LoggedOut.args = {
  pageName: "Applications",
};
