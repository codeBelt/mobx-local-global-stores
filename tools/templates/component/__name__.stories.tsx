import React from 'react';
import { Story } from '@storybook/react';
import { IProps, __name__ } from './__name__';

export default {
  title: 'Components/__name__',
  component: __name__,
  subcomponents: {},
};

const Template: Story<IProps> = (args) => <__name__ {...args} />;

export const Basic = Template.bind({});
Basic.args = {};
