import { Meta, Story } from '@storybook/react';
import { Link } from '@template/react';
import React from 'react';

export default {
  title: 'Components / Link',
  component: Link,
  argTypes: {
    href: {
      type: { name: 'string', required: true },
      description: 'The href of the link.',
      table: {
        type: {
          summary: 'string'
        },
        defaultValue: { summary: '#' }
      },
      defaultValue: '#',
      control: { type: 'text' }
    },
    size: {
      type: { name: 'string', required: false },
      description: 'The size of the link.',
      table: {
        type: {
          summary: 'string'
        },
        defaultValue: { summary: 'medium' }
      },
      defaultValue: 'medium',
      control: {
        type: 'radio',
        options: ['small', 'medium', 'large']
      }
    },
    standalone: {
      type: { name: 'boolean', required: false },
      description: 'Whether the component is standalone or not.',
      table: {
        type: {
          summary: 'boolean'
        },
        defaultValue: { summary: 'false' }
      },
      defaultValue: false,
      control: { type: 'boolean' }
    },
    reversed: {
      type: { name: 'boolean', required: false },
      description: 'Whether the component is reversed or not.',
      table: {
        type: {
          summary: 'boolean'
        },
        defaultValue: { summary: 'false' }
      },
      defaultValue: false,
      control: { type: 'boolean' }
    },
    iconAlong: {
      type: { name: 'boolean', required: false },
      description: 'Whether the component has an icon. Only if standalone.',
      table: {
        type: {
          summary: 'boolean'
        },
        defaultValue: { summary: 'false' }
      },
      defaultValue: false,
      control: { type: 'boolean' }
    },
    children: {
      type: { name: 'string', required: false },
      description: 'The content to render inside the component.',
      defaultValue: 'Link',
      control: {
        type: 'text'
      }
    }
  },
  parameters: {
    actions: {
      handles: ['mouseenter', 'click', 'focusin', 'focusout']
    },
    design: {
      type: 'figma',
      url: ''
    }
  }
} as Meta;

const Template: Story = (args) => <Link {...args} />;

export const Overview = Template.bind({});
