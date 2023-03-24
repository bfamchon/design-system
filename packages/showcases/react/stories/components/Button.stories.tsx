import { Meta, Story } from '@storybook/react';
import { Button } from '@template/react';
import React from 'react';

export default {
  title: 'Components / Button',
  component: Button,
  argTypes: {
    variant: {
      type: { name: 'string', required: false },
      description: 'The variant of the button.',
      defaultValue: 'primary',
      control: {
        type: 'select',
        options: ['primary', 'primary-reversed', 'secondary', 'tertiary']
      }
    },
    size: {
      type: { name: 'string', required: false },
      description: 'The size of the button.',
      defaultValue: 'medium',
      control: {
        type: 'select',
        options: ['small', 'medium', 'large']
      }
    },
    children: {
      type: { name: 'string', required: false },
      description: 'The content to render inside the component.',
      defaultValue: 'Button',
      control: {
        type: 'text'
      }
    }
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/jZQ4KiYtixVQiTmXhSD06P/White_design_system?node-id=3-359&t=46TRQOtbSgQr2vCp-4'
    }
  }
} as Meta;

const Template: Story = (args) => (
  <div style={{ width: 400, display: 'flex', justifyContent: 'center' }}>
    <Button {...args} />
  </div>
);

export const Overview = Template.bind({});
