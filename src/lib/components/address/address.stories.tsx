import { Meta } from '@storybook/react';
import { StoryObj } from '@storybook/react-vite';
import { Address } from './address.tsx';

const meta = {
  component: Address,
  title: 'Components/Display/Address',
  // tags: ['autodocs', '!dev'],
  args: {
    hash: '21eaea584903e79365bcb1f7607179cc118807033c8919cff7489a91c3a822d1',
    minifiedCopyNotification: true,
    tooltipCaption: 'public key',
    avatarSize: 'default',
  },
  argTypes: {
    avatarSize: {
      control: { type: 'select' },
      options: ['default', 'big', 'average', 'medium', 'small'],
      description: 'The size of the avatar',
    },
    hash: { control: 'text' },
    csprName: { control: 'text' },
    logo: { control: 'text' },
    name: { control: 'text' },
    tooltipCaption: { control: 'text' },
    minifiedCopyNotification: { control: 'boolean' },
    navigateToPath: { control: 'text' },
    hashFontSize: {
      control: { type: 'select' },
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
    },
    horizonalAlign: {
      control: { type: 'select' },
      options: ['flex-start', 'flex-end', 'center'],
    },
  },
} as Meta<typeof Address>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {};

export const withName: Story = {
  args: {
    name: 'Faucet',
    csprName: 'faucet.cspr',
    logo: 'https://cspr-image-proxy-cdn.dev.make.services/64,fit,ttl86400/https://casper-assets.s3.amazonaws.com/accounts/faucet.svg',
  },
};

export const withLogo: Story = {
  args: {
    name: 'Casper Space DJ',
    logo: 'https://image-proxy-cdn.make.services/64,fit,ttl86400/https://makegroup.io/wp-content/uploads/2024/04/logo.svg',
  },
};
