import type { Meta, StoryObj } from '@storybook/react';
import { Input } from './Input';
import { ThemeDecorator } from '../../utils/decorators/ThemeDecorator';

const meta = {
  title: 'components/Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const PrimaryInput: Story = {
  args: {
    type: 'text',
    value: 'TestValue'
  }
};

export const InputReadOnly: Story = {
  args: {
    type: 'text',
    value: 'TestValue',
    readonly: true
  }
};

export const InputWithPlaceHolder: Story = {
  args: {
    type: 'text',
    placeholder: 'TestValue',
    value: ''
  }
};

export const PrimaryInputLight: Story = {
  args: {
    type: 'text',
    value: 'TestValue'
  },
  decorators: [
    (Story) => (
      ThemeDecorator('light')(Story)
    ),
  ]
};

export const InputReadOnlyLight: Story = {
  args: {
    type: 'text',
    value: 'TestValue',
    readonly: true
  },
  decorators: [
    (Story) => (
      ThemeDecorator('light')(Story)
    ),
  ]
};

export const InputWithPlaceHolderLight: Story = {
  args: {
    type: 'text',
    placeholder: 'TestValue',
    value: ''
  },
  decorators: [
    (Story) => (
      ThemeDecorator('light')(Story)
    ),
  ]
};