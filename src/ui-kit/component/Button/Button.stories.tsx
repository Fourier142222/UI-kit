import type { Meta, StoryObj } from '@storybook/react';
import { Button, ButtonSize, ButtonView } from './Button';
import { ThemeDecorator } from '../../utils/decorators/ThemeDecorator';

const meta = {
  title: 'components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: 'Lorem'
  }
};

export const Large: Story = {
  args: {
    children: 'Lorem Ipsum',
    size: ButtonSize.L
  }
};

export const ExtraLarge: Story = {
  args: {
    children: 'Lorem Ipsum Dolore',
    size: ButtonSize.XL
  }
};

export const Outline: Story = {
  args: {
    children: 'Lorem',
    view: ButtonView.OUTLINE
  }
};

export const Background: Story = {
  args: {
    children: 'Lorem',
    view: ButtonView.BACKGROUND
  }
};

export const Clear: Story = {
  args: {
    children: 'Lorem',
    view: ButtonView.CLEAR
  }
};

export const Disabled: Story = {
  args: {
    children: 'Lorem',
    disabled: true
  }
};

export const PrimaryLight: Story = {
  args: {
    children: 'Lorem'
  },
  decorators: [
    (Story) => (
      ThemeDecorator('light')(Story)
    ),
  ]
};

export const SecondaryLight: Story = {
  args: {
    children: 'Lorem Ipsum',
    size: ButtonSize.L
  },
  decorators: [
    (Story) => (
      ThemeDecorator('light')(Story)
    ),
  ]
};

export const ExtraLargeLight: Story = {
  args: {
    children: 'Lorem Ipsum Dolore',
    size: ButtonSize.XL
  },
  decorators: [
    (Story) => (
      ThemeDecorator('light')(Story)
    ),
  ]
};


export const OutlineLight: Story = {
  args: {
    children: 'Lorem',
    view: ButtonView.OUTLINE
  },
  decorators: [
    (Story) => (
      ThemeDecorator('light')(Story)
    ),
  ]
};

export const BackgroundLight: Story = {
  args: {
    children: 'Lorem',
    view: ButtonView.BACKGROUND
  },
  decorators: [
    (Story) => (
      ThemeDecorator('light')(Story)
    ),
  ]
};

export const ClearLight: Story = {
  args: {
    children: 'Lorem',
    view: ButtonView.CLEAR
  },
  decorators: [
    (Story) => (
      ThemeDecorator('light')(Story)
    ),
  ]
};

export const DisabledLight: Story = {
  args: {
    children: 'Lorem',
    disabled: true
  },
  decorators: [
    (Story) => (
      ThemeDecorator('light')(Story)
    ),
  ]
};