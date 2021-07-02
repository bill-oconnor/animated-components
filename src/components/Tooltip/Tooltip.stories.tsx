import React from 'react';
import { Story } from '@storybook/react';
import { Tooltip, TooltipProps } from './Tooltip';
import { Element } from '../Element/Element';

export default {
  component: Tooltip,
  title: 'Tooltip'
};

const Template: Story<TooltipProps> = (args: TooltipProps) => {
  const { children, ...otherArgs } = args;
  return (
    <Element>
      <Tooltip {...otherArgs}>{children}</Tooltip>
    </Element>
  );
};

const HoverableText: React.FunctionComponent = () => {
  return <p>This text has a helpful tooltip</p>;
};

export const Default = Template.bind({});
Default.args = {
  children: <HoverableText />,
  renderContent: () => <p>This is helpful!</p>
};

// export const Embedded = Template.bind({});

// export const Empty = Template.bind({});
