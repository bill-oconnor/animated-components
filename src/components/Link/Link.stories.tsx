import React from 'react';
import { Link, LinkProps } from './Link';
import { Element } from '../Element/Element';
import { Story } from '@storybook/react';

export default {
  component: Link,
  title: 'Link'
};

const Template: Story<LinkProps> = (args: LinkProps) => (
  <Element>
    <Link {...args} />
  </Element>
);

export const Default = Template.bind({});
Default.args = {
  uri: '#',
  text: 'Test Link'
};

export const Gradient = Template.bind({});
Gradient.args = {
  uri: '#',
  text: 'Test Link',
  className: 'Link--gradient'
};

export const Embedded: Story<LinkProps> = (args: LinkProps) => (
  <Element>
    <p>
      Lorem ipsum <Link {...args}></Link> blah blah blah
    </p>
  </Element>
);
Embedded.args = {
  uri: '#',
  text: 'Test Link'
};
