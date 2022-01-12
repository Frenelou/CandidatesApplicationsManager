import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { MyHeader } from ".";

export default {
  title: "Example/MyHeader",
  component: MyHeader,
} as ComponentMeta<typeof MyHeader>;

const Template: ComponentStory<typeof MyHeader> = (args) => <MyHeader {...args} />;

export const LoggedIn = Template.bind({});
LoggedIn.args = {
  pageName: "Applications",
};

export const LoggedOut = Template.bind({});
LoggedOut.args = {
  pageName: "Applications",
};
