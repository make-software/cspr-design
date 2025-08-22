import { Meta } from '@storybook/react';
import Avatar from './avatar';
import { StoryObj } from '@storybook/react-vite';
import FlexRow from '../flex-row/flex-row';

const meta = {
  component: Avatar,
  title: 'Components/Display/Avatar',
  // tags: ['autodocs', '!dev'],
  args: {
    size: 'default',
    hash: '01f5f1fa995ab7e966428e5a1aed797526ad5b2454c50a63a7aaa2dfeae6a996c2',
  },
  argTypes: {
    hash: {
      control: { type: 'text' },
    },
    size: {
      options: ['tiny', 'small', 'default', 'average', 'medium', 'big'],
      control: { type: 'radio' },
    },
    loading: {
      options: [true, false],
      control: { type: 'radio' },
    },
    isErc20: {
      options: [true, false],
      control: { type: 'radio' },
    },
    transparentBg: {
      options: [true, false],
      control: { type: 'radio' },
    },
  },
} as Meta<typeof Avatar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
export const AllOptions: Story = {
  render: (args) => (
    <FlexRow
      itemsSpacing={18}
      style={{ backgroundColor: 'rgb(2, 156, 253, 0.5)' }}
    >
      <Avatar {...args} />
      <Avatar {...args} loading={true} />
      <Avatar
        {...args}
        hash={
          '84f97651d9322db4b6b23541528017c64acebf3a6250bdac8ff7481759ff8604'
        }
      />
      <Avatar {...args} isErc20 />
      <Avatar
        {...args}
        src="https://makegroup.io/wp-content/uploads/2023/09/Logo.png"
      />
    </FlexRow>
  ),
};
