import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Candidate } from "./Candidate";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Example/Candidate",
  component: Candidate,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof Candidate>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Candidate> = (args) => (
  <Candidate {...args} />
);
const defaultArgs = {
  candidate: {
    id: 1,
    name: "Alvin Satterfield",
    email: "cornellbartell@connellyleannon.biz",
    birth_date: "1997-09-07",
    year_of_experience: 5,
    position_applied: "Technician",
    application_date: "2018-07-02",
    status: "rejected",
  },
};

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  ...defaultArgs,
};

export const Secondary = Template.bind({});
Secondary.args = {
  ...defaultArgs,
};

export const Large = Template.bind({});
Large.args = {
  ...defaultArgs,
};

export const Small = Template.bind({});
Small.args = {
  ...defaultArgs,
};
